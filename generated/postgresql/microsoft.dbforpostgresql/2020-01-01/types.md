# Microsoft.DBforPostgreSQL @ 2020-01-01

## Resource Microsoft.DBforPostgreSQL/servers/keys@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ServerKeyProperties](#serverkeyproperties)
* **type**: 'Microsoft.DBforPostgreSQL/servers/keys' (ReadOnly, DeployTimeConstant)

## ServerKeyProperties
### Properties
* **creationDate**: string (ReadOnly)
* **serverKeyType**: 'AzureKeyVault' (Required)
* **uri**: string

