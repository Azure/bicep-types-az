# Microsoft.Security @ 2023-09-01-preview

## Resource Microsoft.Security/securityConnectors/devops@2023-09-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [DevOpsConfigurationProperties](#devopsconfigurationproperties): DevOps Configuration properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Security/securityConnectors/devops' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs@2023-09-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureDevOpsOrgProperties](#azuredevopsorgproperties): Azure DevOps Organization properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs/projects@2023-09-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureDevOpsProjectProperties](#azuredevopsprojectproperties): Azure DevOps Project properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs/projects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs/projects/repos@2023-09-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureDevOpsRepositoryProperties](#azuredevopsrepositoryproperties): Azure DevOps Repository properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs/projects/repos' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/securityConnectors/devops/gitHubOwners@2023-09-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GitHubOwnerProperties](#githubownerproperties) (ReadOnly): GitHub Owner properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Security/securityConnectors/devops/gitHubOwners' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/securityConnectors/devops/gitHubOwners/repos@2023-09-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GitHubRepositoryProperties](#githubrepositoryproperties) (ReadOnly): GitHub Repository properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Security/securityConnectors/devops/gitHubOwners/repos' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/securityConnectors/devops/gitLabGroups@2023-09-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GitLabGroupProperties](#gitlabgroupproperties) (ReadOnly): GitLab Group properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Security/securityConnectors/devops/gitLabGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/securityConnectors/devops/gitLabGroups/projects@2023-09-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GitLabProjectProperties](#gitlabprojectproperties) (ReadOnly): GitLab Project properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Security/securityConnectors/devops/gitLabGroups/projects' (ReadOnly, DeployTimeConstant): The resource type

## Function listAvailableAzureDevOpsOrgs (Microsoft.Security/securityConnectors/devops@2023-09-01-preview)
* **Resource**: Microsoft.Security/securityConnectors/devops
* **ApiVersion**: 2023-09-01-preview
* **Output**: [AzureDevOpsOrgListResponse](#azuredevopsorglistresponse)

## Function listAvailableGitHubOwners (Microsoft.Security/securityConnectors/devops@2023-09-01-preview)
* **Resource**: Microsoft.Security/securityConnectors/devops
* **ApiVersion**: 2023-09-01-preview
* **Output**: [GitHubOwnerListResponse](#githubownerlistresponse)

## Function listAvailableGitLabGroups (Microsoft.Security/securityConnectors/devops@2023-09-01-preview)
* **Resource**: Microsoft.Security/securityConnectors/devops
* **ApiVersion**: 2023-09-01-preview
* **Output**: [GitLabGroupListResponse](#gitlabgrouplistresponse)

## Function listSubgroups (Microsoft.Security/securityConnectors/devops/gitLabGroups@2023-09-01-preview)
* **Resource**: Microsoft.Security/securityConnectors/devops/gitLabGroups
* **ApiVersion**: 2023-09-01-preview
* **Output**: [GitLabGroupListResponse](#gitlabgrouplistresponse)

## ActionableRemediation
### Properties
* **branchConfiguration**: [TargetBranchConfiguration](#targetbranchconfiguration): Repository branch configuration for PR Annotations.
* **categoryConfigurations**: [CategoryConfiguration](#categoryconfiguration)[]: Gets or sets list of categories and severity levels.
* **inheritFromParentState**: 'Disabled' | 'Enabled' | string: Update Settings.

Enabled - Resource should inherit configurations from parent.
Disabled - Resource should not inherit configurations from parent.
* **state**: 'Disabled' | 'Enabled' | 'None' | string: ActionableRemediation Setting.
None - the setting was never set.
Enabled - ActionableRemediation is enabled.
Disabled - ActionableRemediation is disabled.

## Authorization
### Properties
* **code**: string {sensitive}: Gets or sets one-time OAuth code to exchange for refresh and access tokens.

Only used during PUT/PATCH operations. The secret is cleared during GET.

## AzureDevOpsOrg
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [AzureDevOpsOrgProperties](#azuredevopsorgproperties): Azure DevOps Organization properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## AzureDevOpsOrgListResponse
### Properties
* **nextLink**: string: Gets or sets next link to scroll over the results.
* **value**: [AzureDevOpsOrg](#azuredevopsorg)[]: Gets or sets list of resources.

## AzureDevOpsOrgProperties
### Properties
* **actionableRemediation**: [ActionableRemediation](#actionableremediation): Configuration payload for PR Annotations.
* **onboardingState**: 'NotApplicable' | 'NotOnboarded' | 'Onboarded' | 'OnboardedByOtherConnector' | string: Details about resource onboarding status across all connectors.

OnboardedByOtherConnector - this resource has already been onboarded to another connector. This is only applicable to top-level resources.
Onboarded - this resource has already been onboarded by the specified connector.
NotOnboarded - this resource has not been onboarded to any connector.
NotApplicable - the onboarding state is not applicable to the current endpoint.
* **provisioningState**: 'Canceled' | 'DeletionFailure' | 'DeletionSuccess' | 'Failed' | 'Pending' | 'PendingDeletion' | 'Succeeded' | string: The provisioning state of the resource.

Pending - Provisioning pending.
Failed - Provisioning failed.
Succeeded - Successful provisioning.
Canceled - Provisioning canceled.
PendingDeletion - Deletion pending.
DeletionSuccess - Deletion successful.
DeletionFailure - Deletion failure.
* **provisioningStatusMessage**: string (ReadOnly): Gets or sets resource status message.
* **provisioningStatusUpdateTimeUtc**: string (ReadOnly): Gets or sets time when resource was last checked.

## AzureDevOpsProjectProperties
### Properties
* **actionableRemediation**: [ActionableRemediation](#actionableremediation): Configuration payload for PR Annotations.
* **onboardingState**: 'NotApplicable' | 'NotOnboarded' | 'Onboarded' | 'OnboardedByOtherConnector' | string: Details about resource onboarding status across all connectors.

OnboardedByOtherConnector - this resource has already been onboarded to another connector. This is only applicable to top-level resources.
Onboarded - this resource has already been onboarded by the specified connector.
NotOnboarded - this resource has not been onboarded to any connector.
NotApplicable - the onboarding state is not applicable to the current endpoint.
* **parentOrgName**: string: Gets or sets parent Azure DevOps Organization name.
* **projectId**: string (ReadOnly): Gets or sets Azure DevOps Project id.
* **provisioningState**: 'Canceled' | 'DeletionFailure' | 'DeletionSuccess' | 'Failed' | 'Pending' | 'PendingDeletion' | 'Succeeded' | string: The provisioning state of the resource.

Pending - Provisioning pending.
Failed - Provisioning failed.
Succeeded - Successful provisioning.
Canceled - Provisioning canceled.
PendingDeletion - Deletion pending.
DeletionSuccess - Deletion successful.
DeletionFailure - Deletion failure.
* **provisioningStatusMessage**: string (ReadOnly): Gets or sets resource status message.
* **provisioningStatusUpdateTimeUtc**: string (ReadOnly): Gets or sets time when resource was last checked.

## AzureDevOpsRepositoryProperties
### Properties
* **actionableRemediation**: [ActionableRemediation](#actionableremediation): Configuration payload for PR Annotations.
* **onboardingState**: 'NotApplicable' | 'NotOnboarded' | 'Onboarded' | 'OnboardedByOtherConnector' | string: Details about resource onboarding status across all connectors.

OnboardedByOtherConnector - this resource has already been onboarded to another connector. This is only applicable to top-level resources.
Onboarded - this resource has already been onboarded by the specified connector.
NotOnboarded - this resource has not been onboarded to any connector.
NotApplicable - the onboarding state is not applicable to the current endpoint.
* **parentOrgName**: string: Gets or sets parent Azure DevOps Organization name.
* **parentProjectName**: string: Gets or sets parent Azure DevOps Project name.
* **provisioningState**: 'Canceled' | 'DeletionFailure' | 'DeletionSuccess' | 'Failed' | 'Pending' | 'PendingDeletion' | 'Succeeded' | string: The provisioning state of the resource.

Pending - Provisioning pending.
Failed - Provisioning failed.
Succeeded - Successful provisioning.
Canceled - Provisioning canceled.
PendingDeletion - Deletion pending.
DeletionSuccess - Deletion successful.
DeletionFailure - Deletion failure.
* **provisioningStatusMessage**: string (ReadOnly): Gets or sets resource status message.
* **provisioningStatusUpdateTimeUtc**: string (ReadOnly): Gets or sets time when resource was last checked.
* **repoId**: string (ReadOnly): Gets or sets Azure DevOps Repository id.
* **repoUrl**: string (ReadOnly): Gets or sets Azure DevOps Repository url.
* **visibility**: string (ReadOnly): Gets or sets Azure DevOps repository visibility, whether it is public or private etc.

## CategoryConfiguration
### Properties
* **category**: 'Artifacts' | 'Code' | 'Containers' | 'Dependencies' | 'IaC' | 'Secrets' | string: Rule categories.
Code - code scanning results.
Artifact scanning results.
Dependencies scanning results.
IaC results.
Secrets scanning results.
Container scanning results.
* **minimumSeverityLevel**: string: Gets or sets minimum severity level for a given category.

## DevOpsConfigurationProperties
### Properties
* **authorization**: [Authorization](#authorization): Authorization payload.
* **autoDiscovery**: 'Disabled' | 'Enabled' | 'NotApplicable' | string: AutoDiscovery states.
* **provisioningState**: 'Canceled' | 'DeletionFailure' | 'DeletionSuccess' | 'Failed' | 'Pending' | 'PendingDeletion' | 'Succeeded' | string: The provisioning state of the resource.

Pending - Provisioning pending.
Failed - Provisioning failed.
Succeeded - Successful provisioning.
Canceled - Provisioning canceled.
PendingDeletion - Deletion pending.
DeletionSuccess - Deletion successful.
DeletionFailure - Deletion failure.
* **provisioningStatusMessage**: string (ReadOnly): Gets or sets resource status message.
* **provisioningStatusUpdateTimeUtc**: string (ReadOnly): Gets or sets time when resource was last checked.
* **topLevelInventoryList**: string[]: List of top-level inventory to select when AutoDiscovery is disabled.
This field is ignored when AutoDiscovery is enabled.

## GitHubOwner
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [GitHubOwnerProperties](#githubownerproperties): GitHub Owner properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## GitHubOwnerListResponse
### Properties
* **nextLink**: string: Gets or sets next link to scroll over the results.
* **value**: [GitHubOwner](#githubowner)[]: Gets or sets list of resources.

## GitHubOwnerProperties
### Properties
* **gitHubInternalId**: string (ReadOnly): Gets or sets internal GitHub id.
* **onboardingState**: 'NotApplicable' | 'NotOnboarded' | 'Onboarded' | 'OnboardedByOtherConnector' | string: Details about resource onboarding status across all connectors.

OnboardedByOtherConnector - this resource has already been onboarded to another connector. This is only applicable to top-level resources.
Onboarded - this resource has already been onboarded by the specified connector.
NotOnboarded - this resource has not been onboarded to any connector.
NotApplicable - the onboarding state is not applicable to the current endpoint.
* **ownerUrl**: string (ReadOnly): Gets or sets GitHub Owner url.
* **provisioningState**: 'Canceled' | 'DeletionFailure' | 'DeletionSuccess' | 'Failed' | 'Pending' | 'PendingDeletion' | 'Succeeded' | string: The provisioning state of the resource.

Pending - Provisioning pending.
Failed - Provisioning failed.
Succeeded - Successful provisioning.
Canceled - Provisioning canceled.
PendingDeletion - Deletion pending.
DeletionSuccess - Deletion successful.
DeletionFailure - Deletion failure.
* **provisioningStatusMessage**: string (ReadOnly): Gets or sets resource status message.
* **provisioningStatusUpdateTimeUtc**: string (ReadOnly): Gets or sets time when resource was last checked.

## GitHubRepositoryProperties
### Properties
* **onboardingState**: 'NotApplicable' | 'NotOnboarded' | 'Onboarded' | 'OnboardedByOtherConnector' | string: Details about resource onboarding status across all connectors.

OnboardedByOtherConnector - this resource has already been onboarded to another connector. This is only applicable to top-level resources.
Onboarded - this resource has already been onboarded by the specified connector.
NotOnboarded - this resource has not been onboarded to any connector.
NotApplicable - the onboarding state is not applicable to the current endpoint.
* **parentOwnerName**: string: Gets or sets parent GitHub Owner name.
* **provisioningState**: 'Canceled' | 'DeletionFailure' | 'DeletionSuccess' | 'Failed' | 'Pending' | 'PendingDeletion' | 'Succeeded' | string: The provisioning state of the resource.

Pending - Provisioning pending.
Failed - Provisioning failed.
Succeeded - Successful provisioning.
Canceled - Provisioning canceled.
PendingDeletion - Deletion pending.
DeletionSuccess - Deletion successful.
DeletionFailure - Deletion failure.
* **provisioningStatusMessage**: string (ReadOnly): Gets or sets resource status message.
* **provisioningStatusUpdateTimeUtc**: string (ReadOnly): Gets or sets time when resource was last checked.
* **repoFullName**: string (ReadOnly): Gets or sets GitHub Full Name.
Repository name, prefixed with Owner name.
Eg: "my-org/new-repo-1".
* **repoId**: string (ReadOnly): Gets or sets GitHub Repository id.

This is a numeric id defined by Github.
Eg: "123456".
* **repoName**: string (ReadOnly): Gets or sets GitHub Repository name.
Eg: "new-repo-1".
* **repoUrl**: string (ReadOnly): Gets or sets GitHub Repository url.

## GitLabGroup
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [GitLabGroupProperties](#gitlabgroupproperties): GitLab Group properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## GitLabGroupListResponse
### Properties
* **nextLink**: string: Gets or sets next link to scroll over the results.
* **value**: [GitLabGroup](#gitlabgroup)[]: Gets or sets list of resources.

## GitLabGroupProperties
### Properties
* **fullyQualifiedFriendlyName**: string (ReadOnly): Gets or sets the human readable fully-qualified name of the Group object.

This contains the entire namespace hierarchy as seen on GitLab UI where namespaces are separated by the '/' character.
* **fullyQualifiedName**: string (ReadOnly): Gets or sets the fully-qualified name of the Group object.

This contains the entire namespace hierarchy where namespaces are separated by the '$' character.
* **onboardingState**: 'NotApplicable' | 'NotOnboarded' | 'Onboarded' | 'OnboardedByOtherConnector' | string: Details about resource onboarding status across all connectors.

OnboardedByOtherConnector - this resource has already been onboarded to another connector. This is only applicable to top-level resources.
Onboarded - this resource has already been onboarded by the specified connector.
NotOnboarded - this resource has not been onboarded to any connector.
NotApplicable - the onboarding state is not applicable to the current endpoint.
* **provisioningState**: 'Canceled' | 'DeletionFailure' | 'DeletionSuccess' | 'Failed' | 'Pending' | 'PendingDeletion' | 'Succeeded' | string: The provisioning state of the resource.

Pending - Provisioning pending.
Failed - Provisioning failed.
Succeeded - Successful provisioning.
Canceled - Provisioning canceled.
PendingDeletion - Deletion pending.
DeletionSuccess - Deletion successful.
DeletionFailure - Deletion failure.
* **provisioningStatusMessage**: string (ReadOnly): Gets or sets resource status message.
* **provisioningStatusUpdateTimeUtc**: string (ReadOnly): Gets or sets time when resource was last checked.
* **url**: string (ReadOnly): Gets or sets the url of the GitLab Group.

## GitLabProjectProperties
### Properties
* **fullyQualifiedFriendlyName**: string (ReadOnly): Gets or sets the human readable fully-qualified name of the Project object.

This contains the entire namespace hierarchy as seen on GitLab UI where entities are separated by the '/' character.
* **fullyQualifiedName**: string (ReadOnly): Gets or sets the fully-qualified name of the project object.

This contains the entire hierarchy where entities are separated by the '$' character.
* **fullyQualifiedParentGroupName**: string (ReadOnly): Gets or sets the fully-qualified name of the project's parent group object.

This contains the entire hierarchy where namespaces are separated by the '$' character.
* **onboardingState**: 'NotApplicable' | 'NotOnboarded' | 'Onboarded' | 'OnboardedByOtherConnector' | string: Details about resource onboarding status across all connectors.

OnboardedByOtherConnector - this resource has already been onboarded to another connector. This is only applicable to top-level resources.
Onboarded - this resource has already been onboarded by the specified connector.
NotOnboarded - this resource has not been onboarded to any connector.
NotApplicable - the onboarding state is not applicable to the current endpoint.
* **provisioningState**: 'Canceled' | 'DeletionFailure' | 'DeletionSuccess' | 'Failed' | 'Pending' | 'PendingDeletion' | 'Succeeded' | string: The provisioning state of the resource.

Pending - Provisioning pending.
Failed - Provisioning failed.
Succeeded - Successful provisioning.
Canceled - Provisioning canceled.
PendingDeletion - Deletion pending.
DeletionSuccess - Deletion successful.
DeletionFailure - Deletion failure.
* **provisioningStatusMessage**: string (ReadOnly): Gets or sets resource status message.
* **provisioningStatusUpdateTimeUtc**: string (ReadOnly): Gets or sets time when resource was last checked.
* **url**: string (ReadOnly): Gets or sets the url of the GitLab Project.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TargetBranchConfiguration
### Properties
* **annotateDefaultBranch**: 'Disabled' | 'Enabled' | string: Configuration of PR Annotations on default branch.

Enabled - PR Annotations are enabled on the resource's default branch.
Disabled - PR Annotations are disabled on the resource's default branch.
* **branchNames**: string[]: Gets or sets branches that should have annotations.

