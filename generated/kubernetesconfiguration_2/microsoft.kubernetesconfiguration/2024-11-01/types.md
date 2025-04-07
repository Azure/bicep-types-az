# Microsoft.KubernetesConfiguration @ 2024-11-01

## Resource Microsoft.KubernetesConfiguration/fluxConfigurations@2024-11-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2024-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FluxConfigurationProperties](#fluxconfigurationproperties): Properties to create a Flux Configuration resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
* **type**: 'Microsoft.KubernetesConfiguration/fluxConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## AzureBlobDefinition
### Properties
* **accountKey**: string {sensitive}: The account key (shared key) to access the storage account
* **containerName**: string: The Azure Blob container name to sync from the url endpoint for the flux configuration.
* **localAuthRef**: string: Name of a local secret on the Kubernetes cluster to use as the authentication secret rather than the managed or user-provided configuration secrets.
* **managedIdentity**: [ManagedIdentityDefinition](#managedidentitydefinition): Parameters to authenticate using a Managed Identity.
* **sasToken**: string {sensitive}: The Shared Access token to access the storage container
* **servicePrincipal**: [ServicePrincipalDefinition](#serviceprincipaldefinition): Parameters to authenticate using Service Principal.
* **syncIntervalInSeconds**: int: The interval at which to re-reconcile the cluster Azure Blob source with the remote.
* **timeoutInSeconds**: int: The maximum time to attempt to reconcile the cluster Azure Blob source with the remote.
* **url**: string: The URL to sync for the flux configuration Azure Blob storage account.

## BucketDefinition
### Properties
* **accessKey**: string: Plaintext access key used to securely access the S3 bucket
* **bucketName**: string: The bucket name to sync from the url endpoint for the flux configuration.
* **insecure**: bool: Specify whether to use insecure communication when puling data from the S3 bucket.
* **localAuthRef**: string: Name of a local secret on the Kubernetes cluster to use as the authentication secret rather than the managed or user-provided configuration secrets.
* **syncIntervalInSeconds**: int: The interval at which to re-reconcile the cluster bucket source with the remote.
* **timeoutInSeconds**: int: The maximum time to attempt to reconcile the cluster bucket source with the remote.
* **url**: string: The URL to sync for the flux configuration S3 bucket.

## FluxConfigurationProperties
### Properties
* **azureBlob**: [AzureBlobDefinition](#azureblobdefinition): Parameters to reconcile to the AzureBlob source kind type.
* **bucket**: [BucketDefinition](#bucketdefinition): Parameters to reconcile to the Bucket source kind type.
* **complianceState**: 'Compliant' | 'Non-Compliant' | 'Pending' | 'Suspended' | 'Unknown' | string (ReadOnly): Combined status of the Flux Kubernetes resources created by the fluxConfiguration or created by the managed objects.
* **configurationProtectedSettings**: [FluxConfigurationPropertiesConfigurationProtectedSettings](#fluxconfigurationpropertiesconfigurationprotectedsettings): Key-value pairs of protected configuration settings for the configuration
* **errorMessage**: string (ReadOnly): Error message returned to the user in the case of provisioning failure.
* **gitRepository**: [GitRepositoryDefinition](#gitrepositorydefinition): Parameters to reconcile to the GitRepository source kind type.
* **kustomizations**: [FluxConfigurationPropertiesKustomizations](#fluxconfigurationpropertieskustomizations): Array of kustomizations used to reconcile the artifact pulled by the source type on the cluster.
* **namespace**: string: The namespace to which this configuration is installed to. Maximum of 253 lower case alphanumeric characters, hyphen and period only.
* **ociRepository**: [OCIRepositoryDefinition](#ocirepositorydefinition): Parameters to reconcile to the OCIRepository source kind type.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Status of the creation of the fluxConfiguration.
* **reconciliationWaitDuration**: string: Maximum duration to wait for flux configuration reconciliation. E.g PT1H, PT5M, P1D
* **repositoryPublicKey**: string (ReadOnly): Public Key associated with this fluxConfiguration (either generated within the cluster or provided by the user).
* **scope**: 'cluster' | 'namespace' | string: Scope at which the operator will be installed.
* **sourceKind**: 'AzureBlob' | 'Bucket' | 'GitRepository' | 'OCIRepository' | string: Source Kind to pull the configuration data from.
* **sourceSyncedCommitId**: string (ReadOnly): Branch and/or SHA of the source commit synced with the cluster.
* **sourceUpdatedAt**: string (ReadOnly): Datetime the fluxConfiguration synced its source on the cluster.
* **statuses**: [ObjectStatusDefinition](#objectstatusdefinition)[] (ReadOnly): Statuses of the Flux Kubernetes resources created by the fluxConfiguration or created by the managed objects provisioned by the fluxConfiguration.
* **statusUpdatedAt**: string (ReadOnly): Datetime the fluxConfiguration synced its status on the cluster with Azure.
* **suspend**: bool: Whether this configuration should suspend its reconciliation of its kustomizations and sources.
* **waitForReconciliation**: bool: Whether flux configuration deployment should wait for cluster to reconcile the kustomizations.

## FluxConfigurationPropertiesConfigurationProtectedSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FluxConfigurationPropertiesKustomizations
### Properties
### Additional Properties
* **Additional Properties Type**: [KustomizationDefinition](#kustomizationdefinition)

## GitRepositoryDefinition
### Properties
* **httpsCACert**: string: Base64-encoded HTTPS certificate authority contents used to access git private git repositories over HTTPS
* **httpsUser**: string: Plaintext HTTPS username used to access private git repositories over HTTPS
* **localAuthRef**: string: Name of a local secret on the Kubernetes cluster to use as the authentication secret rather than the managed or user-provided configuration secrets.
* **provider**: 'Azure' | 'Generic' | string: Name of the provider used for authentication.
* **repositoryRef**: [RepositoryRefDefinition](#repositoryrefdefinition): The source reference for the GitRepository object.
* **sshKnownHosts**: string: Base64-encoded known_hosts value containing public SSH keys required to access private git repositories over SSH
* **syncIntervalInSeconds**: int: The interval at which to re-reconcile the cluster git repository source with the remote.
* **timeoutInSeconds**: int: The maximum time to attempt to reconcile the cluster git repository source with the remote.
* **url**: string: The URL to sync for the flux configuration git repository.

## HelmReleasePropertiesDefinition
### Properties
* **failureCount**: int: Total number of times that the HelmRelease failed to install or upgrade
* **helmChartRef**: [ObjectReferenceDefinition](#objectreferencedefinition): The reference to the HelmChart object used as the source to this HelmRelease
* **installFailureCount**: int: Number of times that the HelmRelease failed to install
* **lastRevisionApplied**: int: The revision number of the last released object change
* **upgradeFailureCount**: int: Number of times that the HelmRelease failed to upgrade

## KustomizationDefinition
### Properties
* **dependsOn**: string[]: Specifies other Kustomizations that this Kustomization depends on. This Kustomization will not reconcile until all dependencies have completed their reconciliation.
* **force**: bool: Enable/disable re-creating Kubernetes resources on the cluster when patching fails due to an immutable field change.
* **name**: string (ReadOnly): Name of the Kustomization, matching the key in the Kustomizations object map.
* **path**: string: The path in the source reference to reconcile on the cluster.
* **postBuild**: [PostBuildDefinition](#postbuilddefinition): Used for variable substitution for this Kustomization after kustomize build.
* **prune**: bool: Enable/disable garbage collections of Kubernetes objects created by this Kustomization.
* **retryIntervalInSeconds**: int: The interval at which to re-reconcile the Kustomization on the cluster in the event of failure on reconciliation.
* **syncIntervalInSeconds**: int: The interval at which to re-reconcile the Kustomization on the cluster.
* **timeoutInSeconds**: int: The maximum time to attempt to reconcile the Kustomization on the cluster.
* **wait**: bool: Enable/disable health check for all Kubernetes objects created by this Kustomization.

## LayerSelectorDefinition
### Properties
* **mediaType**: string: The first layer matching the specified media type will be used.
* **operation**: 'copy' | 'extract' | string: The operation to be performed on the selected layer. The default value is 'extract', but it can be set to 'copy'.

## ManagedIdentityDefinition
### Properties
* **clientId**: string: The client Id for authenticating a Managed Identity.

## MatchOidcIdentityDefinition
### Properties
* **issuer**: string: The regex pattern to match against to verify the OIDC issuer.
* **subject**: string: The regex pattern to match against to verify the identity subject.

## ObjectReferenceDefinition
### Properties
* **name**: string: Name of the object
* **namespace**: string: Namespace of the object

## ObjectStatusConditionDefinition
### Properties
* **lastTransitionTime**: string: Last time this status condition has changed
* **message**: string: A more verbose description of the object status condition
* **reason**: string: Reason for the specified status condition type status
* **status**: string: Status of the Kubernetes object condition type
* **type**: string: Object status condition type for this object

## ObjectStatusDefinition
### Properties
* **appliedBy**: [ObjectReferenceDefinition](#objectreferencedefinition): Object reference to the Kustomization that applied this object
* **complianceState**: 'Compliant' | 'Non-Compliant' | 'Pending' | 'Suspended' | 'Unknown' | string: Compliance state of the applied object showing whether the applied object has come into a ready state on the cluster.
* **helmReleaseProperties**: [HelmReleasePropertiesDefinition](#helmreleasepropertiesdefinition): Additional properties that are provided from objects of the HelmRelease kind
* **kind**: string: Kind of the applied object
* **name**: string: Name of the applied object
* **namespace**: string: Namespace of the applied object
* **statusConditions**: [ObjectStatusConditionDefinition](#objectstatusconditiondefinition)[]: List of Kubernetes object status conditions present on the cluster

## OCIRepositoryDefinition
### Properties
* **insecure**: bool: Specify whether to allow connecting to a non-TLS HTTP container registry.
* **layerSelector**: [LayerSelectorDefinition](#layerselectordefinition): The layer to be pulled from the OCI artifact.
* **localAuthRef**: string: Name of a local secret on the Kubernetes cluster to use as the authentication secret rather than the managed or user-provided configuration secrets.
* **repositoryRef**: [OCIRepositoryRefDefinition](#ocirepositoryrefdefinition): The source reference for the OCIRepository object.
* **serviceAccountName**: string: The service account name to authenticate with the OCI repository.
* **syncIntervalInSeconds**: int: The interval at which to re-reconcile the cluster OCI repository source with the remote.
* **timeoutInSeconds**: int: The maximum time to attempt to reconcile the cluster OCI repository source with the remote.
* **tlsConfig**: [TlsConfigDefinition](#tlsconfigdefinition): Parameters to authenticate using TLS config for OCI repository.
* **url**: string: The URL to sync for the flux configuration OCI repository.
* **useWorkloadIdentity**: bool: Specifies whether to use Workload Identity to authenticate with the OCI repository.
* **verify**: [VerifyDefinition](#verifydefinition): Verification of the authenticity of an OCI Artifact.

## OCIRepositoryRefDefinition
### Properties
* **digest**: string: The image digest to pull from OCI repository, the value should be in the format ‘sha256:’. This takes precedence over semver.
* **semver**: string: The semver range used to match against OCI repository tags. This takes precedence over tag.
* **tag**: string: The OCI repository image tag name to pull. This defaults to 'latest'.

## PostBuildDefinition
### Properties
* **substitute**: [PostBuildDefinitionSubstitute](#postbuilddefinitionsubstitute): Key/value pairs holding the variables to be substituted in this Kustomization.
* **substituteFrom**: [SubstituteFromDefinition](#substitutefromdefinition)[]: Array of ConfigMaps/Secrets from which the variables are substituted for this Kustomization.

## PostBuildDefinitionSubstitute
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RepositoryRefDefinition
### Properties
* **branch**: string: The git repository branch name to checkout.
* **commit**: string: The commit SHA to checkout. This value must be combined with the branch name to be valid. This takes precedence over semver.
* **semver**: string: The semver range used to match against git repository tags. This takes precedence over tag.
* **tag**: string: The git repository tag name to checkout. This takes precedence over branch.

## ServicePrincipalDefinition
### Properties
* **clientCertificate**: string {sensitive}: Base64-encoded certificate used to authenticate a Service Principal
* **clientCertificatePassword**: string {sensitive}: The password for the certificate used to authenticate a Service Principal
* **clientCertificateSendChain**: bool: Specifies whether to include x5c header in client claims when acquiring a token to enable subject name / issuer based authentication for the Client Certificate
* **clientId**: string: The client Id for authenticating a Service Principal.
* **clientSecret**: string {sensitive}: The client secret for authenticating a Service Principal
* **tenantId**: string: The tenant Id for authenticating a Service Principal

## SubstituteFromDefinition
### Properties
* **kind**: string: Define whether it is ConfigMap or Secret that holds the variables to be used in substitution.
* **name**: string: Name of the ConfigMap/Secret that holds the variables to be used in substitution.
* **optional**: bool: Set to True to proceed without ConfigMap/Secret, if it is not present.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TlsConfigDefinition
### Properties
* **caCertificate**: string {sensitive}: Base64-encoded CA certificate used to verify the server.
* **clientCertificate**: string {sensitive}: Base64-encoded certificate used to authenticate a client with the OCI repository.
* **privateKey**: string {sensitive}: Base64-encoded private key used to authenticate a client with the OCI repository.

## VerifyDefinition
### Properties
* **matchOidcIdentity**: [MatchOidcIdentityDefinition](#matchoidcidentitydefinition)[]: Array defining the criteria for matching the identity while verifying an OCI artifact.
* **provider**: string: Verification provider name.
* **verificationConfig**: [VerifyDefinitionVerificationConfig](#verifydefinitionverificationconfig): An object containing trusted public keys of trusted authors.

## VerifyDefinitionVerificationConfig
### Properties
### Additional Properties
* **Additional Properties Type**: string

