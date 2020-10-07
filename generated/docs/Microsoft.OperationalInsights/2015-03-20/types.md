# Microsoft.OperationalInsights @ 2015-03-20

## Microsoft.OperationalInsights/workspaces/savedSearches
### Properties
* **apiVersion**: '2015-03-20' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SavedSearchProperties (Required)
* **type**: 'Microsoft.OperationalInsights/workspaces/savedSearches' (ReadOnly, DeployTimeConstant)

## SavedSearchProperties
### Properties
* **category**: string (Required)
* **displayName**: string (Required)
* **query**: string (Required)
* **tags**: Tag[]
* **version**: int

## Tag
### Properties
* **name**: string (Required)
* **value**: string (Required)

## Microsoft.OperationalInsights/workspaces/storageInsightConfigs
### Properties
* **apiVersion**: '2015-03-20' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageInsightProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.OperationalInsights/workspaces/storageInsightConfigs' (ReadOnly, DeployTimeConstant)

## StorageInsightProperties
### Properties
* **containers**: string[]
* **status**: StorageInsightStatus (ReadOnly)
* **storageAccount**: StorageAccount (Required)
* **tables**: string[]

## StorageInsightStatus
### Properties
* **description**: string
* **state**: 'ERROR' | 'OK' (Required)

## StorageAccount
### Properties
* **id**: string (Required)
* **key**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

