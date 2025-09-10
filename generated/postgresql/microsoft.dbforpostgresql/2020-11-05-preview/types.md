# Microsoft.DBForPostgreSql @ 2020-11-05-preview

## Resource Microsoft.DBForPostgreSql/flexibleServers/databases@2020-11-05-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-11-05-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): The properties of a database.
* **type**: 'Microsoft.DBForPostgreSql/flexibleServers/databases' (ReadOnly, DeployTimeConstant): The resource type

## DatabaseProperties
### Properties
* **charset**: string: The charset of the database.
* **collation**: string: The collation of the database.

