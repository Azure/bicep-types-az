# Microsoft.HealthcareApis @ 2020-03-30

## Resource Microsoft.HealthcareApis/services@2020-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-30' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: schemas:12_identity
* **kind**: 'fhir-R4' | 'fhir-Stu3' | 'fhir' (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServicesProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.HealthcareApis/services' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HealthcareApis/services/privateEndpointConnections@2020-03-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.HealthcareApis/services/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## schemas:12_identity
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
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded'

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: 'Approved' | 'Pending' | 'Rejected'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

