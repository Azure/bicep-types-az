# Microsoft.CostManagement @ 2018-08-01-preview

## Resource Microsoft.CostManagement/connectors@2018-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConnectorProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.CostManagement/connectors' (ReadOnly, DeployTimeConstant)

## ConnectorProperties
### Properties
* **collection**: ConnectorCollectionInfo (ReadOnly)
* **createdOn**: string (ReadOnly)
* **credentialsKey**: string
* **credentialsSecret**: string
* **displayName**: string
* **modifiedOn**: string (ReadOnly)
* **providerAccountId**: string (ReadOnly)
* **reportId**: string
* **status**: 'active' | 'error' | 'suspended'

## ConnectorCollectionInfo
### Properties
* **error**: ConnectorCollectionErrorInfo
* **lastRun**: string (ReadOnly)
* **lastUpdated**: string (ReadOnly)
* **sourceLastUpdated**: string (ReadOnly)

## ConnectorCollectionErrorInfo
### Properties
* **errorCode**: string (ReadOnly)
* **errorMessage**: string (ReadOnly)
* **errorStartTime**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

