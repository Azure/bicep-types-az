# Microsoft.SecurityAndCompliance @ 2021-01-11

## Resource Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload@2021-01-11
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-11' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ServicesResourceIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServicesProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: ServicesResourceTags
* **type**: 'Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/privateEndpointConnections@2021-01-11
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-11' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.SecurityAndCompliance/privateLinkServicesForEDMUpload/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter@2021-01-11
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-11' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ServicesResourceIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServicesProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: ServicesResourceTags
* **type**: 'Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/privateEndpointConnections@2021-01-11
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-11' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.SecurityAndCompliance/privateLinkServicesForM365ComplianceCenter/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter@2021-01-11
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-11' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ServicesResourceIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServicesProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: ServicesResourceTags
* **type**: 'Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/privateEndpointConnections@2021-01-11
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-11' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.SecurityAndCompliance/privateLinkServicesForM365SecurityCenter/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI@2021-01-11
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-11' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ServicesResourceIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServicesProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: ServicesResourceTags
* **type**: 'Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/privateEndpointConnections@2021-01-11
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-11' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.SecurityAndCompliance/privateLinkServicesForO365ManagementActivityAPI/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell@2021-01-11
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-11' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ServicesResourceIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServicesProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: ServicesResourceTags
* **type**: 'Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/privateEndpointConnections@2021-01-11
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-11' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.SecurityAndCompliance/privateLinkServicesForSCCPowershell/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## ServicesResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## ServicesProperties
### Properties
* **accessPolicies**: ServiceAccessPolicyEntry[]
* **authenticationConfiguration**: ServiceAuthenticationConfigurationInfo
* **corsConfiguration**: ServiceCorsConfigurationInfo
* **cosmosDbConfiguration**: ServiceCosmosDbConfigurationInfo
* **exportConfiguration**: ServiceExportConfigurationInfo
* **privateEndpointConnections**: PrivateEndpointConnection[]
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Deprovisioned' | 'Failed' | 'Succeeded' | 'Updating' | 'Verifying' (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'

## ServiceAccessPolicyEntry
### Properties
* **objectId**: string (Required)

## ServiceAuthenticationConfigurationInfo
### Properties
* **audience**: string
* **authority**: string
* **smartProxyEnabled**: bool

## ServiceCorsConfigurationInfo
### Properties
* **allowCredentials**: bool
* **headers**: string[]
* **maxAge**: int
* **methods**: string[]
* **origins**: string[]

## ServiceCosmosDbConfigurationInfo
### Properties
* **keyVaultKeyUri**: string
* **offerThroughput**: int

## ServiceExportConfigurationInfo
### Properties
* **storageAccountName**: string

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: PrivateEndpointConnectionProperties
* **systemData**: SystemData (ReadOnly)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: 'Approved' | 'Pending' | 'Rejected'

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## ServicesResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServicesResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServicesResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServicesResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServicesResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

