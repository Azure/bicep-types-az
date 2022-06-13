# Microsoft.Security @ 2021-01-15-preview

## Resource Microsoft.Security/ingestionSettings@2021-01-15-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-01-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any: Ingestion setting data
* **type**: 'Microsoft.Security/ingestionSettings' (ReadOnly, DeployTimeConstant): The resource type

## Function listConnectionStrings (Microsoft.Security/ingestionSettings@2021-01-15-preview)
* **Resource**: Microsoft.Security/ingestionSettings
* **ApiVersion**: 2021-01-15-preview
* **Output**: [ConnectionStrings](#connectionstrings)

## Function listTokens (Microsoft.Security/ingestionSettings@2021-01-15-preview)
* **Resource**: Microsoft.Security/ingestionSettings
* **ApiVersion**: 2021-01-15-preview
* **Output**: [IngestionSettingToken](#ingestionsettingtoken)

## ConnectionStrings
### Properties
* **value**: [IngestionConnectionString](#ingestionconnectionstring)[] (ReadOnly): Connection strings

## IngestionConnectionString
### Properties
* **location**: string (ReadOnly): The region where ingested logs and data resides
* **value**: string (ReadOnly): Connection string value

## IngestionSettingToken
### Properties
* **token**: string (ReadOnly): The token is used for correlating security data and logs with the resources in the subscription.

