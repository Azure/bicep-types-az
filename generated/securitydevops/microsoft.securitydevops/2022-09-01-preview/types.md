# Microsoft.SecurityDevOps @ 2022-09-01-preview

## Resource Microsoft.SecurityDevOps/azureDevOpsConnectors@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureDevOpsConnectorProperties](#azuredevopsconnectorproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.SecurityDevOps/azureDevOpsConnectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityDevOps/azureDevOpsConnectors/orgs@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureDevOpsOrgProperties](#azuredevopsorgproperties): AzureDevOps Org properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityDevOps/azureDevOpsConnectors/orgs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityDevOps/azureDevOpsConnectors/orgs/projects@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureDevOpsProjectProperties](#azuredevopsprojectproperties): AzureDevOps Project properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityDevOps/azureDevOpsConnectors/orgs/projects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityDevOps/azureDevOpsConnectors/orgs/projects/repos@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureDevOpsRepoProperties](#azuredevopsrepoproperties): AzureDevOps Repo properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityDevOps/azureDevOpsConnectors/orgs/projects/repos' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityDevOps/gitHubConnectors@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GitHubConnectorProperties](#githubconnectorproperties): Properties of the ARM resource for /subscriptions/xxx/resourceGroups/xxx/providers/Microsoft.SecurityDevOps/gitHubConnectors.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.SecurityDevOps/gitHubConnectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityDevOps/gitHubConnectors/owners@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GitHubOwnerProperties](#githubownerproperties): GitHub Repo Owner properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityDevOps/gitHubConnectors/owners' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.SecurityDevOps/gitHubConnectors/owners/repos@2022-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GitHubRepoProperties](#githubrepoproperties): GitHub Repo properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SecurityDevOps/gitHubConnectors/owners/repos' (ReadOnly, DeployTimeConstant): The resource type

## ActionableRemediation
### Properties
* **branchConfiguration**: [TargetBranchConfiguration](#targetbranchconfiguration): Branch onboarding info.
* **categories**: 'Artifacts' | 'Code' | 'Containers' | 'Dependencies' | 'IaC' | 'Secrets' | string[]
* **severityLevels**: string[]
* **state**: 'Disabled' | 'Enabled' | 'None' | string

## AuthorizationInfo
### Properties
* **code**: string: Gets or sets one-time OAuth code to exchange for refresh and access tokens.

## AzureDevOpsConnectorProperties
### Properties
* **authorization**: [AuthorizationInfo](#authorizationinfo)
* **orgs**: [AzureDevOpsOrgMetadata](#azuredevopsorgmetadata)[]: Gets or sets org onboarding information.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string

## AzureDevOpsOrgMetadata
### Properties
* **autoDiscovery**: 'Disabled' | 'Enabled' | string
* **name**: string: Gets or sets name of the AzureDevOps Org.
* **projects**: [AzureDevOpsProjectMetadata](#azuredevopsprojectmetadata)[]

## AzureDevOpsOrgProperties
### Properties
* **autoDiscovery**: 'Disabled' | 'Enabled' | string
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string

## AzureDevOpsProjectMetadata
### Properties
* **autoDiscovery**: 'Disabled' | 'Enabled' | string
* **name**: string: Gets or sets name of the AzureDevOps Project.
* **repos**: string[]: Gets or sets repositories.

## AzureDevOpsProjectProperties
### Properties
* **autoDiscovery**: 'Disabled' | 'Enabled' | string
* **orgName**: string: Gets or sets AzureDevOps Org Name.
* **projectId**: string: Gets or sets AzureDevOps Project Id.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string

## AzureDevOpsRepoProperties
### Properties
* **actionableRemediation**: [ActionableRemediation](#actionableremediation)
* **orgName**: string: Gets or sets AzureDevOps Org Name.
* **projectName**: string: Gets or sets AzureDevOps Project Name.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string
* **repoId**: string: Gets or sets Azure DevOps repo id.
* **repoUrl**: string: Gets or sets AzureDevOps repo url.
* **visibility**: string: Gets or sets AzureDevOps repo visibility, whether it is public or private etc.

## GitHubConnectorProperties
### Properties
* **code**: string: Gets or sets one-time OAuth code to exchange for refresh and access tokens.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string

## GitHubOwnerProperties
### Properties
* **ownerUrl**: string: Gets or sets gitHub owner url.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string

## GitHubRepoProperties
### Properties
* **accountId**: int: Gets or sets gitHub repo account id.
* **ownerName**: string: Gets or sets GitHub Owner Name.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string
* **repoUrl**: string: Gets or sets gitHub repo url.

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
* **names**: string[]: Gets or sets branches that should have annotations.

For Ignite, we will be supporting a single default branch configuration in the UX.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

