# Microsoft.Sovereign @ 2025-02-27-preview

## Resource Microsoft.Sovereign/landingZoneAccounts@2025-02-27-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-27-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [LandingZoneAccountResourceProperties](#landingzoneaccountresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Sovereign/landingZoneAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sovereign/landingZoneAccounts/landingZoneConfigurations@2025-02-27-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-27-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [LandingZoneConfigurationResourceProperties](#landingzoneconfigurationresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Sovereign/landingZoneAccounts/landingZoneConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sovereign/landingZoneAccounts/landingZoneRegistrations@2025-02-27-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-27-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [LandingZoneRegistrationResourceProperties](#landingzoneregistrationresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Sovereign/landingZoneAccounts/landingZoneRegistrations' (ReadOnly, DeployTimeConstant): The resource type

## Function createCopy (Microsoft.Sovereign/landingZoneAccounts/landingZoneConfigurations@2025-02-27-preview)
* **Resource**: Microsoft.Sovereign/landingZoneAccounts/landingZoneConfigurations
* **ApiVersion**: 2025-02-27-preview
* **Input**: [CreateLandingZoneConfigurationCopyRequest](#createlandingzoneconfigurationcopyrequest)
* **Output**: [CreateLandingZoneConfigurationCopyResponse](#createlandingzoneconfigurationcopyresponse)

## Function generateLandingZone (Microsoft.Sovereign/landingZoneAccounts/landingZoneConfigurations@2025-02-27-preview)
* **Resource**: Microsoft.Sovereign/landingZoneAccounts/landingZoneConfigurations
* **ApiVersion**: 2025-02-27-preview
* **Input**: [GenerateLandingZoneRequest](#generatelandingzonerequest)
* **Output**: [GenerateLandingZoneResponse](#generatelandingzoneresponse)

## Function updateAuthoringStatus (Microsoft.Sovereign/landingZoneAccounts/landingZoneConfigurations@2025-02-27-preview)
* **Resource**: Microsoft.Sovereign/landingZoneAccounts/landingZoneConfigurations
* **ApiVersion**: 2025-02-27-preview
* **Input**: [UpdateAuthoringStatusRequest](#updateauthoringstatusrequest)
* **Output**: [UpdateAuthoringStatusResponse](#updateauthoringstatusresponse)

## CreateLandingZoneConfigurationCopyRequest
### Properties
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required): The name of the duplicate landing zone configuration resource.

## CreateLandingZoneConfigurationCopyResponse
### Properties
* **copiedLandingZoneConfigurationId**: string (Required): The ID of the duplicate landing zone configuration resource.

## CustomNamingConvention
### Properties
* **formula**: string (Required): The custom naming formula for the resource type.
* **resourceType**: 'automationAccounts' | 'azureFirewalls' | 'bastionHosts' | 'dashboards' | 'ddosProtectionPlans' | 'networkSecurityGroups' | 'routeTables' | 'userAssignedIdentities' | 'virtualNetworks' | 'workspaces' | string (Required): The type of the resource.

## DecommissionedManagementGroupProperties
### Properties
* **create**: bool (Required): This parameter determines whether the 'Decommissioned' management group will be created. If set to true, the group will be created; if set to false, it will not be created. The default value is false.
* **policyInitiativesAssignmentProperties**: [PolicyInitiativeAssignmentProperties](#policyinitiativeassignmentproperties)[] (Required): Array of policy initiatives applied to the management group.

## GenerateLandingZoneRequest
### Properties
* **deploymentLocation**: string {pattern: "^([a-zA-Z0-9]+)$"} (Required): The Azure region where the landing zone will be deployed. All Azure regions are supported.
* **deploymentPrefix**: string {minLength: 2, maxLength: 5, pattern: "^([a-zA-Z0-9-]*)$"} (Required): The prefix that will be added to all resources created by this deployment. Use between 2 and 5 characters, consisting only of letters, digits, '-', '.', or '_'. No other special characters are supported.
* **deploymentSuffix**: string {minLength: 2, maxLength: 5}: The optional suffix that will be appended to all resources created by this deployment, maximum 5 characters.
* **environment**: string: The environment where the landing zone is being deployed, such as ppe, prod, test, etc.
* **existingConnectivitySubscriptionId**: string: Existing 'Connectivity' subscription ID to be linked with this deployment when reusing instead of creating a new subscription.
* **existingIdentitySubscriptionId**: string: Existing 'Identity' subscription ID to be linked with this deployment when reusing instead of creating a new subscription.
* **existingManagementSubscriptionId**: string: Existing 'Management' subscription ID to be linked with this deployment when reusing instead of creating a new subscription.
* **existingTopLevelMgParentId**: string: Optional parent for the management group hierarchy, serving as an intermediate root management group parent if specified. If left empty, the default will be to deploy under the tenant root management group.
* **infrastructureAsCodeOutputOptions**: 'ARM' | 'Bicep' | string (Required): The export options available for code generation.
* **organization**: string: The name of the organization or agency for which the landing zone is being deployed. This is optional.
* **subscriptionBillingScope**: string: The complete resource ID of the billing scope linked to the EA, MCA, or MPA account where you want to create the subscription.
* **topLevelMgDisplayName**: string {minLength: 1, maxLength: 90} (Required): The display name assigned to the top management group of the landing zone deployment hierarchy. It is recommended to use unique names for each landing zone deployment.

## GenerateLandingZoneResponse
### Properties
* **blobName**: string {sensitive} (Required): The storage account blob name to access the generated code.
* **containerName**: string {sensitive} (Required): The storage account container to access the generated code.
* **generatedArmTemplate**: string {sensitive}: The generated code content in JSON string format.
* **generatedCodeUrl**: string {sensitive} (Required): The url to access the generated code.
* **landingZoneConfigurationName**: string (Required): The name of the Landing zone configuration resource.
* **storageAccountName**: string {sensitive} (Required): The storage account name to access the generated code.
* **topLevelMgDisplayName**: string (Required): The parent management group name of the landing zone deployment.

## LandingZoneAccountResourceProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The state that reflects the current stage in the creation, updating, or deletion process of the landing zone account.
* **storageAccount**: string (Required): The storage account that will host the generated infrastructure as code (IaC) for a landing zone deployment.

## LandingZoneConfigurationResourceProperties
### Properties
* **authoringStatus**: 'Authoring' | 'Disabled' | 'ReadyForUse' | string (ReadOnly): The status that indicates the current phase of the configuration process for a deployment.
* **azureBastionCreationOption**: 'No' | 'UseExisting' | 'Yes' | string (Required): Parameter used to deploy a Bastion: Select 'Yes' to enable deployment, 'No' to skip it, or 'Existing' to reuse an existing Bastion.
* **azureBastionSubnetCidrBlock**: string: The Bastion subnet address. Specify the address using IPv4 CIDR notation.
* **customNamingConvention**: [CustomNamingConvention](#customnamingconvention)[]: The custom naming convention applied to specific resource types for this landing zone configuration, which overrides the default naming convention for those resource types. Example - 'customNamingConvention': [{'resourceType': 'azureFirewalls', 'formula': '{DeploymentPrefix}-afwl-{DeploymentSuffix}'}]
* **ddosProtectionCreationOption**: 'No' | 'UseExisting' | 'Yes' | string (Required): Parameter used to deploy a DDoS protection plan: Select 'Yes' to enable deployment, 'No' to skip it, or 'Existing' to reuse an existing DDoS protection plan.
* **decommissionedMgMetadata**: [DecommissionedManagementGroupProperties](#decommissionedmanagementgroupproperties): The assigned policies of the 'Decommissioned' management group and indicator to create it or not.
* **existingAzureBastionId**: string: The resource ID of the Bastion when reusing an existing one.
* **existingDdosProtectionId**: string: The resource ID of the DDoS protection plan when reusing an existing one.
* **existingLogAnalyticsWorkspaceId**: string: The resource ID of the log analytics workspace when reusing an existing one.
* **firewallCreationOption**: 'None' | 'Premium' | 'Standard' | string (Required): Parameter used for deploying a Firewall: Select 'No' to skip deployment, 'Standard' to deploy the Standard SKU, or 'Premium' to deploy the Premium SKU.
* **firewallSubnetCidrBlock**: string: The Firewall subnet address used for deploying a firewall. Specify the Firewall subnet using IPv4 CIDR notation.
* **gatewaySubnetCidrBlock**: string (Required): The gateway subnet address used for deploying a virtual network. Specify the subnet using IPv4 CIDR notation.
* **hubNetworkCidrBlock**: string (Required): The Virtual Network address. Specify the address using IPv4 CIDR notation.
* **landingZonesMgChildren**: [LandingZoneManagementGroupProperties](#landingzonemanagementgroupproperties)[]: The child management groups of 'Landing Zones' management group and their assigned policies.
* **landingZonesMgMetadata**: [ManagementGroupProperties](#managementgroupproperties): The assigned policies of the 'Landing Zones' management group.
* **logAnalyticsWorkspaceCreationOption**: 'No' | 'UseExisting' | 'Yes' | string (Required): Parameter used to deploy a log analytics workspace: Select 'Yes' to enable deployment, 'No' to skip it, or 'Existing' to reuse an existing log analytics workspace.
* **logRetentionInDays**: int {minValue: 30, maxValue: 730} (Required): Parameter to define the retention period for logs, in days. The minimum duration is 30 days and the maximum is 730 days.
* **managedIdentity**: [ManagedIdentityProperties](#managedidentityproperties) (Required): The managed identity to be assigned to this landing zone configuration.
* **namingConventionFormula**: string: The default naming convention applied to all resources for this landing zone configuration. Example - {DeploymentPrefix}-Contoso-{ResourceTypeAbbreviation}{DeploymentSuffix}-{Environment}-testing
* **platformConnectivityMgMetadata**: [ManagementGroupProperties](#managementgroupproperties): The assigned policies of the 'Connectivity' management group under 'Platform' management group.
* **platformIdentityMgMetadata**: [ManagementGroupProperties](#managementgroupproperties): The assigned policies of the 'Identity' management group under 'Platform' management group.
* **platformManagementMgMetadata**: [ManagementGroupProperties](#managementgroupproperties): The assigned policies of the 'Management' management group under 'Platform' management group.
* **platformMgChildren**: [PlatformManagementGroupProperties](#platformmanagementgroupproperties)[]: The names of the 'Platform' child management groups and their assigned policies, excluding the default ones: 'Connectivity', 'Identity', and 'Management'
* **platformMgMetadata**: [ManagementGroupProperties](#managementgroupproperties): The assigned policies of the 'Platform' management group.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The state that reflects the current stage in the creation, updating, or deletion process of the landing zone configuration.
* **sandboxMgMetadata**: [SandboxManagementGroupProperties](#sandboxmanagementgroupproperties): The assigned policies of the 'Sandbox' management group and indicator to create it or not.
* **tags**: [Tags](#tags)[]: Tags are key-value pairs that can be assigned to a resource to organize and manage it more effectively. Example: {'name': 'a tag name', 'value': 'a tag value'}
* **topLevelMgMetadata**: [ManagementGroupProperties](#managementgroupproperties): The assigned policies of the parent management group.

## LandingZoneManagementGroupProperties
### Properties
* **name**: string (Required): Management group name.
* **policyInitiativesAssignmentProperties**: [PolicyInitiativeAssignmentProperties](#policyinitiativeassignmentproperties)[] (Required): Array of policy initiatives applied to the management group.

## LandingZoneRegistrationResourceProperties
### Properties
* **existingLandingZoneConfigurationId**: string (Required): The resource id of the associated landing zone configuration.
* **existingTopLevelMgId**: string (Required): The resource id of the top level management group
* **managedIdentity**: [ManagedIdentityProperties](#managedidentityproperties): The managed identity to be assigned to this landing zone registration.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The state that reflects the current stage in the creation, updating, or deletion process of the landing zone registration resource type.

## ManagedIdentityProperties
### Properties
* **type**: 'SystemAssigned' | 'UserAssigned' | string (Required): The type of managed identity.
* **userAssignedIdentityResourceId**: string: The resource id of the managed identity.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ManagementGroupProperties
### Properties
* **policyInitiativesAssignmentProperties**: [PolicyInitiativeAssignmentProperties](#policyinitiativeassignmentproperties)[] (Required): Array of policy initiatives applied to the management group.

## PlatformManagementGroupProperties
### Properties
* **name**: string (Required): Management group name.
* **policyInitiativesAssignmentProperties**: [PolicyInitiativeAssignmentProperties](#policyinitiativeassignmentproperties)[] (Required): Array of policy initiatives applied to the management group.

## PolicyInitiativeAssignmentProperties
### Properties
* **assignmentParameters**: [PolicyInitiativeAssignmentPropertiesAssignmentParameters](#policyinitiativeassignmentpropertiesassignmentparameters) (Required): The parameters of the assigned policy initiative.
* **policyInitiativeId**: string (Required): The fully qualified id of the policy initiative.

## PolicyInitiativeAssignmentPropertiesAssignmentParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SandboxManagementGroupProperties
### Properties
* **create**: bool (Required): This parameter determines whether the 'Sandbox' management group will be created. If set to true, the group will be created; if set to false, it will not be created. The default value is false.
* **policyInitiativesAssignmentProperties**: [PolicyInitiativeAssignmentProperties](#policyinitiativeassignmentproperties)[] (Required): Array of policy initiatives applied to the management group.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## Tags
### Properties
* **name**: string (Required): A tag name.
* **value**: string: A tag value.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UpdateAuthoringStatusRequest
### Properties
* **authoringStatus**: 'Authoring' | 'Disabled' | 'ReadyForUse' | string (Required): The authoring status value to be updated. Possible values include: 'Authoring', 'ReadyForUse' and 'Disabled'.

## UpdateAuthoringStatusResponse
### Properties
* **authoringStatus**: 'Authoring' | 'Disabled' | 'ReadyForUse' | string (Required): The authoring status value to be updated.
* **landingZoneConfigurationName**: string (Required): The name of the landing zone configuration resource.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

