# Microsoft.NetworkAnalytics @ 2023-11-15

## Resource Microsoft.NetworkAnalytics/dataProducts@2023-11-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DataProductProperties](#dataproductproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkAnalytics/dataProducts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkAnalytics/dataProducts/dataTypes@2023-11-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z][a-z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DataTypeProperties](#datatypeproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.NetworkAnalytics/dataProducts/dataTypes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkAnalytics/dataProductsCatalogs@2023-11-15 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [DataProductsCatalogProperties](#dataproductscatalogproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.NetworkAnalytics/dataProductsCatalogs' (ReadOnly, DeployTimeConstant): The resource type

## Function listRolesAssignments (Microsoft.NetworkAnalytics/dataProducts@2023-11-15)
* **Resource**: Microsoft.NetworkAnalytics/dataProducts
* **ApiVersion**: 2023-11-15
* **Input**: any
* **Output**: [ListRoleAssignments](#listroleassignments)

## ConsumptionEndpointsProperties
### Properties
* **fileAccessResourceId**: string (ReadOnly): Resource Id of file access endpoint.
* **fileAccessUrl**: string (ReadOnly): Url to consume file type.
* **ingestionResourceId**: string (ReadOnly): Resource Id of ingestion endpoint.
* **ingestionUrl**: string (ReadOnly): Ingestion url to upload the data.
* **queryResourceId**: string (ReadOnly): Resource Id of query endpoint.
* **queryUrl**: string (ReadOnly): Url to consume the processed data.

## DataProductInformation
### Properties
* **dataProductName**: string (Required): Name of data product.
* **dataProductVersions**: [DataProductVersion](#dataproductversion)[] (Required): Version information of data product.
* **description**: string (Required): Description about data product.

## DataProductNetworkAcls
### Properties
* **allowedQueryIpRangeList**: string[] (Required): The list of query ips in the format of CIDR allowed to connect to query/visualization endpoint.
* **defaultAction**: 'Allow' | 'Deny' | string (Required): Default Action
* **ipRules**: [IPRules](#iprules)[] (Required): IP rule with specific IP or IP range in CIDR format.
* **virtualNetworkRule**: [VirtualNetworkRule](#virtualnetworkrule)[] (Required): Virtual Network Rule

## DataProductProperties
### Properties
* **availableMinorVersions**: string[] (ReadOnly): List of available minor versions of the data product resource.
* **consumptionEndpoints**: [ConsumptionEndpointsProperties](#consumptionendpointsproperties) (ReadOnly): Resource links which exposed to the customer to query the data.
* **currentMinorVersion**: string: Current configured minor version of the data product resource.
* **customerEncryptionKey**: [EncryptionKeyDetails](#encryptionkeydetails): Customer managed encryption key details for data product.
* **customerManagedKeyEncryptionEnabled**: 'Disabled' | 'Enabled' | string: Flag to enable customer managed key encryption for data product.
* **documentation**: string (ReadOnly): Documentation link for the data product based on definition file.
* **keyVaultUrl**: string (ReadOnly): Key vault url.
* **majorVersion**: string (Required): Major version of data product.
* **managedResourceGroupConfiguration**: [ManagedResourceGroupConfiguration](#managedresourcegroupconfiguration) (WriteOnly): Managed resource group configuration.
* **networkacls**: [DataProductNetworkAcls](#dataproductnetworkacls): Network rule set for data product.
* **owners**: string[]: List of name or email associated with data product resource deployment.
* **privateLinksEnabled**: 'Disabled' | 'Enabled' | string: Flag to enable or disable private link for data product resource.
* **product**: string (Required): Product name of data product.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Latest provisioning state  of data product.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Flag to enable or disable public access of data product resource.
* **publisher**: string (Required): Data product publisher name.
* **purviewAccount**: string: Purview account url for data product to connect to.
* **purviewCollection**: string: Purview collection url for data product to connect to.
* **redundancy**: 'Disabled' | 'Enabled' | string: Flag to enable or disable redundancy for data product.
* **resourceGuid**: string (ReadOnly): The resource GUID property of the data product resource.

## DataProductsCatalogProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The data catalog provisioning state.
* **publishers**: [PublisherInformation](#publisherinformation)[] (Required): The data product publisher information.

## DataProductVersion
### Properties
* **version**: string (Required): Version of data product

## DataTypeProperties
### Properties
* **databaseCacheRetention**: int: Field for database cache retention in days.
* **databaseRetention**: int: Field for database data retention in days.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Latest provisioning state  of data product.
* **state**: 'Running' | 'Stopped' | string: State of data type.
* **stateReason**: string (ReadOnly): Reason for the state of data type.
* **storageOutputRetention**: int: Field for storage output retention in days.
* **visualizationUrl**: string (ReadOnly): Url for data visualization.

## EncryptionKeyDetails
### Properties
* **keyName**: string (Required): The name of the key vault key.
* **keyVaultUri**: string (Required): The Uri of the key vault.
* **keyVersion**: string (Required): The version of the key vault key.

## IPRules
### Properties
* **action**: string (Required): The action of virtual network rule.
* **value**: string: IP Rules Value

## ListRoleAssignments
### Properties
* **count**: int (Required): Count of role assignments.
* **roleAssignmentResponse**: [RoleAssignmentDetail](#roleassignmentdetail)[] (Required): list of role assignments

## ManagedResourceGroupConfiguration
### Properties
* **location**: string (Required): Managed Resource Group location
* **name**: string (Required): Name of managed resource group

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## PublisherInformation
### Properties
* **dataProducts**: [DataProductInformation](#dataproductinformation)[] (Required): Data product information.
* **publisherName**: string (Required): Name of the publisher.

## RoleAssignmentDetail
### Properties
* **dataTypeScope**: string[] (Required): Data Type Scope at which the role assignment is created.
* **principalId**: string (Required): Object ID of the AAD principal or security-group.
* **principalType**: string (Required): Type of the principal Id: User, Group or ServicePrincipal
* **role**: 'Reader' | 'SensitiveReader' | string (Required): Data Product role to be assigned to a user.
* **roleAssignmentId**: string (Required): Id of role assignment request
* **roleId**: string (Required): Role Id of the Built-In Role
* **userName**: string (Required): User name.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## VirtualNetworkRule
### Properties
* **action**: string: The action of virtual network rule.
* **id**: string (Required): Resource ID of a subnet
* **state**: string: Gets the state of virtual network rule.

