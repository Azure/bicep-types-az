# Microsoft.DBforMySQL @ 2020-01-01

## Resource Microsoft.DBforMySQL/servers/keys@2020-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of encryption protector used to protect the key.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerKeyProperties](#serverkeyproperties): Properties of the ServerKey Resource.
* **type**: 'Microsoft.DBforMySQL/servers/keys' (ReadOnly, DeployTimeConstant): The resource type

## Function start (Microsoft.DBforMySQL/servers@2020-01-01)
* **Resource**: Microsoft.DBforMySQL/servers
* **ApiVersion**: 2020-01-01
* **Output**: any

## Function stop (Microsoft.DBforMySQL/servers@2020-01-01)
* **Resource**: Microsoft.DBforMySQL/servers
* **ApiVersion**: 2020-01-01
* **Output**: any

## Function upgrade (Microsoft.DBforMySQL/servers@2020-01-01)
* **Resource**: Microsoft.DBforMySQL/servers
* **ApiVersion**: 2020-01-01
* **Input**: [ServerUpgradeParameters](#serverupgradeparameters)
* **Output**: any

## ServerKeyProperties
### Properties
* **creationDate**: string (ReadOnly): The key creation date.
* **serverKeyType**: 'AzureKeyVault' | string (Required): The key type like 'AzureKeyVault'.
* **uri**: string: The URI of the key.

## ServerUpgradeParameters
### Properties
* **properties**: [ServerUpgradeParametersProperties](#serverupgradeparametersproperties): The properties that can be updated for a server.

## ServerUpgradeParametersProperties
### Properties
* **targetServerVersion**: string: Represents an server storage profile.

