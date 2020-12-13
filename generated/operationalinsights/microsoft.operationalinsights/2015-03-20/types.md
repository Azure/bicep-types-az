# Microsoft.OperationalInsights @ 2015-03-20

## Resource Microsoft.OperationalInsights/workspaces/savedSearches@2015-03-20
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-03-20' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SavedSearchProperties (Required)
* **type**: 'Microsoft.OperationalInsights/workspaces/savedSearches' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OperationalInsights/workspaces/storageInsightConfigs@2015-03-20
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-03-20' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageInsightProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.OperationalInsights/workspaces/storageInsightConfigs' (ReadOnly, DeployTimeConstant)

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
### Properties
### Additional Properties
* **Additional Properties Type**: string

