# Microsoft.HybridConnectivity @ 2024-12-01

## Resource Microsoft.HybridConnectivity/endpoints@2024-12-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2024-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EndpointProperties](#endpointproperties): The endpoint properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridConnectivity/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridConnectivity/endpoints/serviceConfigurations@2024-12-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2024-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceConfigurationProperties](#serviceconfigurationproperties): The service configuration properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridConnectivity/endpoints/serviceConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridConnectivity/publicCloudConnectors@2024-12-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PublicCloudConnectorProperties](#publiccloudconnectorproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridConnectivity/publicCloudConnectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridConnectivity/solutionConfigurations@2024-12-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2024-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SolutionConfigurationProperties](#solutionconfigurationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridConnectivity/solutionConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridConnectivity/solutionConfigurations/inventory@2024-12-01
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InventoryProperties](#inventoryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridConnectivity/solutionConfigurations/inventory' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridConnectivity/solutionTypes@2024-12-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SolutionTypeProperties](#solutiontypeproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridConnectivity/solutionTypes' (ReadOnly, DeployTimeConstant): The resource type

## Function listCredentials (Microsoft.HybridConnectivity/endpoints@2024-12-01)
* **Resource**: Microsoft.HybridConnectivity/endpoints
* **ApiVersion**: 2024-12-01
* **Input**: [ListCredentialsRequest](#listcredentialsrequest)
* **Output**: [EndpointAccessResource](#endpointaccessresource)

## Function listIngressGatewayCredentials (Microsoft.HybridConnectivity/endpoints@2024-12-01)
* **Resource**: Microsoft.HybridConnectivity/endpoints
* **ApiVersion**: 2024-12-01
* **Input**: [ListIngressGatewayCredentialsRequest](#listingressgatewaycredentialsrequest)
* **Output**: [IngressGatewayResource](#ingressgatewayresource)

## Function listManagedProxyDetails (Microsoft.HybridConnectivity/endpoints@2024-12-01)
* **Resource**: Microsoft.HybridConnectivity/endpoints
* **ApiVersion**: 2024-12-01
* **Input**: [ManagedProxyRequest](#managedproxyrequest)
* **Output**: [ManagedProxyResource](#managedproxyresource)

## Function syncNow (Microsoft.HybridConnectivity/solutionConfigurations@2024-12-01)
* **Resource**: Microsoft.HybridConnectivity/solutionConfigurations
* **ApiVersion**: 2024-12-01
* **Output**: [OperationStatusResult](#operationstatusresult)

## Function testPermissions (Microsoft.HybridConnectivity/publicCloudConnectors@2024-12-01)
* **Resource**: Microsoft.HybridConnectivity/publicCloudConnectors
* **ApiVersion**: 2024-12-01
* **Output**: [OperationStatusResult](#operationstatusresult)

## AADProfileProperties
### Properties
* **serverId**: string (Required): The arc ingress gateway server app id.
* **tenantId**: string (Required): The target resource home tenant id.

## AwsCloudProfile
### Properties
* **accountId**: string (Required): Account id for the AWS account.
* **excludedAccounts**: string[]: List of AWS accounts which need to be excluded.
* **isOrganizationalAccount**: bool: Boolean value that indicates whether the account is organizational or not. True represents organization account, whereas false represents a single account.

## EndpointAccessResource
### Properties
* **relay**: [RelayNamespaceAccessProperties](#relaynamespaceaccessproperties): Azure relay hybrid connection access properties

## EndpointProperties
### Properties
* **provisioningState**: string (ReadOnly): The resource provisioning state.
* **resourceId**: string: The resource Id of the connectivity endpoint (optional).
* **type**: 'custom' | 'default' | string (Required): The type of endpoint.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## IngressGatewayResource
### Properties
* **ingress**: [IngressProfileProperties](#ingressprofileproperties): Ingress gateway profile
* **relay**: [RelayNamespaceAccessProperties](#relaynamespaceaccessproperties): Azure relay hybrid connection access properties

## IngressProfileProperties
### Properties
* **aadProfile**: [AADProfileProperties](#aadprofileproperties) (Required): The AAD Profile
* **hostname**: string (Required): The ingress hostname.

## InventoryProperties
### Properties
* **azureResourceId**: string: Gets or sets the mapped azure resource id.
* **cloudNativeResourceId**: string: Gets or sets the cloud native resource name.
* **cloudNativeType**: 'ec2' | string: Gets or sets the cloud native resource type.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The resource provisioning state.
* **status**: 'Completed' | 'Failed' | 'InProgress' | 'New' | string: Gets or sets the status of the inventory.
* **statusDetails**: string: Gets or sets the status details.

## ListCredentialsRequest
### Properties
* **serviceName**: 'SSH' | 'WAC' | string: The name of the service. If not provided, the request will by pass the generation of service configuration token

## ListIngressGatewayCredentialsRequest
### Properties
* **serviceName**: 'SSH' | 'WAC' | string: The name of the service. If not provided, the request will by pass the generation of service configuration token.

## ManagedProxyRequest
### Properties
* **hostname**: string: The target host name.
* **service**: string (Required): The name of the service.
* **serviceName**: 'SSH' | 'WAC' | string: The name of the service. It is an optional property, if not provided, service configuration tokens issue code would be by passed.

## ManagedProxyResource
### Properties
* **expiresOn**: int (Required): The expiration time of short lived proxy name in unix epoch.
* **proxy**: string (Required): The short lived proxy name.

## OperationStatusResult
### Properties
* **endTime**: string: The end time of the operation.
* **error**: [ErrorDetail](#errordetail): If present, details of the operation error.
* **id**: string: Fully qualified ID for the async operation.
* **name**: string: Name of the async operation.
* **operations**: [OperationStatusResult](#operationstatusresult)[]: The operations list.
* **percentComplete**: int {minValue: 0, maxValue: 100}: Percent of the operation that is complete.
* **resourceId**: string (ReadOnly): Fully qualified ID of the resource against which the original async operation was started.
* **startTime**: string: The start time of the operation.
* **status**: string (Required): Operation status.

## PublicCloudConnectorProperties
### Properties
* **awsCloudProfile**: [AwsCloudProfile](#awscloudprofile) (Required): Cloud profile for AWS.
* **connectorPrimaryIdentifier**: string (ReadOnly): Connector primary identifier.
* **hostType**: 'AWS' | string (Required): Host cloud the public cloud connector.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The resource provisioning state.

## RelayNamespaceAccessProperties
### Properties
* **accessKey**: string (ReadOnly): Access key for hybrid connection.
* **expiresOn**: int: The expiration of access key in unix time.
* **hybridConnectionName**: string (Required): Azure Relay hybrid connection name for the resource.
* **namespaceName**: string {minLength: 1, maxLength: 200} (Required): The namespace name.
* **namespaceNameSuffix**: string {minLength: 1, maxLength: 100} (Required): The suffix domain name of relay namespace.
* **serviceConfigurationToken**: string: The token to access the enabled service.

## ServiceConfigurationProperties
### Properties
* **port**: int: The port on which service is enabled.
* **provisioningState**: 'Canceled' | 'Creating' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The resource provisioning state.
* **resourceId**: string: The resource Id of the connectivity endpoint (optional).
* **serviceName**: 'SSH' | 'WAC' | string (Required): Name of the service.

## SolutionConfigurationProperties
### Properties
* **lastSyncTime**: string (ReadOnly): The last time resources were inventoried
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The resource provisioning state.
* **solutionSettings**: [SolutionSettings](#solutionsettings): Solution settings
* **solutionType**: string (Required): The type of the solution
* **status**: 'Completed' | 'Failed' | 'InProgress' | 'New' | string (ReadOnly): The status of solution configurations
* **statusDetails**: string (ReadOnly): The detailed message of status details

## SolutionSettings
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SolutionTypeProperties
### Properties
* **description**: string: Short description of solution type.
* **solutionSettings**: [SolutionTypeSettingsProperties](#solutiontypesettingsproperties)[]: Array of solution settings and its description.
* **solutionType**: string: The name of the solution type.
* **supportedAzureRegions**: string[]: The locations this solution is supported in.

## SolutionTypeSettingsProperties
### Properties
* **allowedValues**: string[] (Required): Array of allowed values for this solution settings property.
* **defaultValue**: string (Required): Default value for this solution settings property.
* **description**: string (Required): Description of solution setting property.
* **displayName**: string (Required): The UI friendly name of the solution setting property.
* **name**: string (Required): The name of the solution setting property.
* **type**: string (Required): Type of the solution setting property, represented as a string.

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

