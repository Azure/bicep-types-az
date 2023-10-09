
# ADR-11882: Process for publishing the  az  provider types (alpha)

* **Date:** 2023-09-07
* **Status:**  Accepted (Bicep Discussions 09/27/2023)

## Context

This document aims to formally describe an initial process for publishing the az resource types provider packages
as OCI artifacts in the Bicep registry so they can be dynamically loaded as described in the proposal
https://github.com/Azure/bicep/issues/10662 (previously accepted by the Bicep maintainers) for the alpha milestone.

### Current State

The current state has two github workflows:

1. **build.yml** - Triggered by PRs and push to `main`. Builds the `generator` and its dependencies and publishes a NuGet
package with the Azure resource type definitions.
<!-- //TODO(asilverman): Describe the versioning scheme for the NuGet package -->

1. **update-types.yml** - Triggered by a cron schedule (once a week) or manually. Checks out a snapshot of the `main`
branch from the `azure/azure-rest-api-specs` repo, runs the generation script on the snapshot and commits the result to the
[`/generated`](https://github.com/Azure/bicep-types-az/tree/autogenerate/generated) folder in the `autogenerate` branch or  
`azure/bicep-types-az/tree/autogenerate-<git-commit-ish>`  branches depending on the trigger (a '`<git-commit-ish>`' is
a truncated commit sha256 digest)

When a new version of Bicep is close to being released, the person cutting a release performs the following steps:

1. Chose to either manually merge the autogenerate branch into `main` or manually trigger the **update-types.yml**
workflow to update the `/generated` folder. This is typically reviewed, but not in great detail.
(hard to review 600+ automated file changes!)

1. This will update the definitions stored in `/generated` in the `main`
branch and trigger the **build.yml** workflow which in turn will publish a NuGet package with a bumped version.

1. Verify (manually) that a new NuGet package was published

1. Update the NuGet package reference in the  `Bicep.Core.csproj` file in the `azure/bicep`  repo to the new package
version

1. Proceed with the release process for  `azure/bicep`

The current process allow us to manually inspect and catch any odd regression before impacting any customers
(e.g. the time where we accidentally deleted all of the types for `Microsoft.Compute`)

### Desired State (For Alpha)

<!-- From convo with Anthony

I think a md document that we talk over + get a consensus on in discussions sounds like a good plan! Generally we're fairly lax about what "consensus" means (it's usually just that we've discussed it and no objections have been brought up), but if you want to try and formalize this more with an ADR, that's fine by me.

For specifics, I'd cover stuff like:

Where does the pipeline to publish types live?
How does it integrate with the existing (generate types) pipeline?
How often does it run?
What does the format of the .tgz file look like?
Is any manual intervention needed? How do we catch regressions? Is there a review process?
Are any changes to the existing process of bundling types into Bicep needed to be compatible with this?
Do we foresee any other issues? -->

* We want to automatically publish a new  `az-types-provider-package`  OCI artifact each time there's a new commit to the
  [azure/bicep-types-az/tree/main/generated](https://github.com/Azure/bicep-types-az/tree/main/generated) folder.
* We will tag the `Azure/bicep-types-az` and the OCI registry artifact with a version `0.0.X-alpha` where `X` is corresponding to
  the topological distance, measured as count of commits made on the folder from the commit that implements the new
  workflow (`0.0.1-alpha`).
  
### Out of Scope

* Determining what the long term strategy for provider package versioning should be. This is a temporary solution for
  the alpha milestone, the long term solution will be determined in https://github.com/Azure/bicep/discussions/11894.
  
### Proposed Changes

A new workflow `publish-az-provider-to-registry.yml` will be created that triggers on push to `main`, the workflow will
publish an OCI artifact to the bicep public registry (syndicated with MCR).

The workflow will:

1. Check if a new version of the package must be published by comparing the state of the `/generated` folder with the
state of the previous version. If there are no changes, the workflow will exit.
1. Increment the the `X-alpha` version by one.
1. Create a tag with the new version and tag the commit in the `Azure/bicep-types-az` repo.
1. gzip and tar all `.json` files in the `/generated` folder into a `.tgz` file
1. Use ORAS to publish the `az-types-provider-package` artifact to the Bicep public registry under the following prefix: `bicep/providers` (e.g. `mcr.microsoft.com/bicep/providers/az:0.0.X-alpha`). The tag for the OCI artifact will match the commit tag.

#### The OCI types provider artifact structure

A resource types provider artifact **MUST** conform to the following requirements:

1. The OCI Image manifest for a types provider OCI manifest MUST set the following fields as shown below:

```jsonc
{
  "schemaVersion": 2,
  "mediaType": "application/vnd.oci.image.manifest.v1+json", // CONSTANT
  "artifactType": "application/vnd.ms.bicep.provider.artifact", // CONSTANT
  "config": {
    // v1 is used to represent the current serialization version, this gives us flexibility
    // to bump the version in the future if we want some configuration in the future.
    // the contents are an empty JSON object (`{}`)
    "mediaType": "application/vnd.ms.bicep.provider.config.v1+json", 
    "digest": "sha256:44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a",
    "size": 2 
  },
  "layers": [
    {
      // For any artifact with `config.mediaType == vnd.ms.bicep.provider.config.v1+json` 
      // there MUST be one and only one layer with a mediaType below
      // The config mediaType may be incremented allowing for other layers with different mediaTypes
      "mediaType": "application/vnd.ms.bicep.provider.types.layer.v1.tar+gzip",
      // The contents MUST be a single tar+gzip file whose decompressed structure
      // MUST match the `/generated` folder structure, that is, a top-level index.json 
      //with a relative path to a file structure that leads to a types.json file for the specify type 
      "digest": "sha256:5eef22336a881e27bb27125670d963e749bddc030227c556fa4fe1ee802e54ef",
      "size": 10387998,
      "annotations": {
         // This OPTIONAL annotation gives you the file name (automatically set by ORAS)
        "org.opencontainers.image.title": "types.tgz"
      }
    }
  ],
  "annotations": {
    // This OPTIONAL annotation gives you the date timestamp when the artifact was generated (automatially set by ORAS)
    "org.opencontainers.image.created": "2023-09-06T19:43:08Z"
  }
}
```

### Validation on the changes

- We will add validation to the publishing process to ensure that we are publishing packages conforming to the manifest above to gate on non-conforming artifacts and prevent regressions.

## Decision


## Consequences
- We will need to relax the bicep import declaration syntax to support `0.0.X-alpha` as a valid syntax
