# Microsoft.HealthcareApis @ 2019-09-16

## Resource Microsoft.HealthcareApis/services@2019-09-16
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-16' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [schemas:12_identity](#schemas12identity)
* **kind**: 'fhir-R4' | 'fhir-Stu3' | 'fhir' (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServicesProperties](#servicesproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.HealthcareApis/services' (ReadOnly, DeployTimeConstant)

## schemas:12_identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## ServicesProperties
### Properties
* **accessPolicies**: [ServiceAccessPolicyEntry](#serviceaccesspolicyentry)[]
* **authenticationConfiguration**: [ServiceAuthenticationConfigurationInfo](#serviceauthenticationconfigurationinfo)
* **corsConfiguration**: [ServiceCorsConfigurationInfo](#servicecorsconfigurationinfo)
* **cosmosDbConfiguration**: [ServiceCosmosDbConfigurationInfo](#servicecosmosdbconfigurationinfo)
* **exportConfiguration**: [ServiceExportConfigurationInfo](#serviceexportconfigurationinfo)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Deprovisioned' | 'Failed' | 'Succeeded' | 'Updating' | 'Verifying' (ReadOnly)

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
* **offerThroughput**: int

## ServiceExportConfigurationInfo
### Properties
* **storageAccountName**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

