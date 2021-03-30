# Microsoft.HealthcareApis @ 2019-09-16

## Resource Microsoft.HealthcareApis/services@2019-09-16
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-16' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: An etag associated with the resource, used for optimistic concurrency when editing it.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [schemas:12_identity](#schemas12identity): Setting indicating whether the service has a managed identity associated with it.
* **kind**: 'fhir-R4' | 'fhir-Stu3' | 'fhir' (Required): The kind of the service. Possible values include: 'fhir', 'fhir-Stu3', 'fhir-R4'
* **location**: string (Required): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServicesProperties](#servicesproperties): The properties of a service instance.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The resource tags.
* **type**: 'Microsoft.HealthcareApis/services' (ReadOnly, DeployTimeConstant): The resource type

## schemas:12_identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of the resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of the resource.
* **type**: 'None' | 'SystemAssigned': Type of identity being specified, currently SystemAssigned and None are allowed. Possible values include: 'SystemAssigned', 'None'

## ServicesProperties
### Properties
* **accessPolicies**: [ServiceAccessPolicyEntry](#serviceaccesspolicyentry)[]: The access policies of the service instance.
* **authenticationConfiguration**: [ServiceAuthenticationConfigurationInfo](#serviceauthenticationconfigurationinfo): Authentication configuration information
* **corsConfiguration**: [ServiceCorsConfigurationInfo](#servicecorsconfigurationinfo): The settings for the CORS configuration of the service instance.
* **cosmosDbConfiguration**: [ServiceCosmosDbConfigurationInfo](#servicecosmosdbconfigurationinfo): The settings for the Cosmos DB database backing the service.
* **exportConfiguration**: [ServiceExportConfigurationInfo](#serviceexportconfigurationinfo): Export operation configuration information
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Deprovisioned' | 'Failed' | 'Succeeded' | 'Updating' | 'Verifying' (ReadOnly): The provisioning state. Possible values include: 'Deleting', 'Succeeded', 'Creating', 'Accepted', 'Verifying', 'Updating', 'Failed', 'Canceled', 'Deprovisioned'

## ServiceAccessPolicyEntry
### Properties
* **objectId**: string (Required): An Azure AD object ID (User or Apps) that is allowed access to the FHIR service.

## ServiceAuthenticationConfigurationInfo
### Properties
* **audience**: string: The audience url for the service
* **authority**: string: The authority url for the service
* **smartProxyEnabled**: bool: If the SMART on FHIR proxy is enabled

## ServiceCorsConfigurationInfo
### Properties
* **allowCredentials**: bool: If credentials are allowed via CORS.
* **headers**: string[]: The headers to be allowed via CORS.
* **maxAge**: int: The max age to be allowed via CORS.
* **methods**: string[]: The methods to be allowed via CORS.
* **origins**: string[]: The origins to be allowed via CORS.

## ServiceCosmosDbConfigurationInfo
### Properties
* **offerThroughput**: int: The provisioned throughput for the backing database.

## ServiceExportConfigurationInfo
### Properties
* **storageAccountName**: string: The name of the default export storage account.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

