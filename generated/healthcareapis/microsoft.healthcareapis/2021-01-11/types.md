# Microsoft.HealthcareApis @ 2021-01-11

## Resource Microsoft.HealthcareApis/services@2021-01-11
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
* **type**: 'Microsoft.HealthcareApis/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HealthcareApis/services/privateEndpointConnections@2021-01-11
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-11' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.HealthcareApis/services/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## ServicesResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## ServicesProperties
### Properties
* **accessPolicies**: ServiceAccessPolicyEntry[]
* **acrConfiguration**: ServiceAcrConfigurationInfo
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

## ServiceAcrConfigurationInfo
### Properties
* **loginServers**: string[]

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

