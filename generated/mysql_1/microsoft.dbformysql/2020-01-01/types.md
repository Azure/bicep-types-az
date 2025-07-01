# Microsoft.DBforMySQL @ 2020-01-01

## Resource Microsoft.DBforMySQL/servers/keys@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of encryption protector used to protect the key.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerKeyProperties](#serverkeyproperties): Properties of the ServerKey Resource.
* **type**: 'Microsoft.DBforMySQL/servers/keys' (ReadOnly, DeployTimeConstant): The resource type

## ServerKeyProperties
### Properties
* **creationDate**: string (ReadOnly): The key creation date.
* **serverKeyType**: 'AzureKeyVault' | string (Required): The key type like 'AzureKeyVault'.
* **uri**: string: The URI of the key.

