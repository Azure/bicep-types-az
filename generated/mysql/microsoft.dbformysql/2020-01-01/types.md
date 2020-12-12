# Microsoft.DBforMySQL @ 2020-01-01

## Resource Microsoft.DBforMySQL/servers/keys@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ServerKeyProperties
* **type**: 'Microsoft.DBforMySQL/servers/keys' (ReadOnly, DeployTimeConstant)

## ServerKeyProperties
### Properties
* **creationDate**: string (ReadOnly)
* **serverKeyType**: string (Required)
* **uri**: string

