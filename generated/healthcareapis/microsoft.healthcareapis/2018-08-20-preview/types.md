# Microsoft.HealthcareApis @ 2018-08-20-preview

## Resource Microsoft.HealthcareApis/services@2018-08-20-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-08-20-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [schemas:11_identity](#schemas11identity)
* **kind**: 'fhir-R4' | 'fhir-Stu3' | 'fhir' (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServicesProperties](#servicesproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.HealthcareApis/services' (ReadOnly, DeployTimeConstant)

## schemas:11_identity
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

