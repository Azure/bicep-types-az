# Microsoft.HealthcareApis @ 2018-08-20-preview

## Resource Microsoft.HealthcareApis/services@2018-08-20-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-08-20-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ResourceIdentity](#resourceidentity)
* **kind**: 'fhir' | 'fhir-R4' | 'fhir-Stu3' (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServicesProperties](#servicesproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.HealthcareApis/services' (ReadOnly, DeployTimeConstant)

## ResourceIdentity
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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

