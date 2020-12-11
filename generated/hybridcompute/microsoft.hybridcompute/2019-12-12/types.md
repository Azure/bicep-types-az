# Microsoft.HybridCompute @ 2019-12-12

## Resource Microsoft.HybridCompute/machines@2019-12-12
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-12' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: schemas:7_identity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:7_properties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.HybridCompute/machines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HybridCompute/machines/extensions@2019-12-12
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-12' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:13_properties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.HybridCompute/machines/extensions' (ReadOnly, DeployTimeConstant)

## schemas:7_identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## schemas:7_properties
### Properties
* **agentVersion**: string (ReadOnly)
* **clientPublicKey**: string
* **displayName**: string (ReadOnly)
* **errorDetails**: ErrorDetail[] (ReadOnly)
* **extensions**: MachineExtensionInstanceView[]
* **lastStatusChange**: string (ReadOnly)
* **locationData**: locationData
* **machineFqdn**: string (ReadOnly)
* **osName**: string (ReadOnly)
* **osProfile**: schemas:4_osProfile
* **osVersion**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **status**: 'Connected' | 'Disconnected' | 'Error' (ReadOnly)
* **vmId**: string

## ErrorDetail
### Properties
* **code**: string (Required)
* **details**: ErrorDetail[]
* **message**: string (Required)
* **target**: string

## MachineExtensionInstanceView
### Properties
* **name**: string
* **status**: schemas:17_status
* **type**: string
* **typeHandlerVersion**: string

## schemas:17_status
### Properties
* **code**: string
* **displayStatus**: string
* **level**: 'Error' | 'Info' | 'Warning'
* **message**: string
* **time**: string

## locationData
### Properties
* **city**: string
* **countryOrRegion**: string
* **district**: string
* **name**: string (Required)

## schemas:4_osProfile
### Properties
* **computerName**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## schemas:13_properties
### Properties
* **autoUpgradeMinorVersion**: bool
* **forceUpdateTag**: string
* **instanceView**: schemas:15_instanceView
* **protectedSettings**: any
* **provisioningState**: string (ReadOnly)
* **publisher**: string
* **settings**: any
* **type**: string
* **typeHandlerVersion**: string

## schemas:15_instanceView
### Properties
* **name**: string
* **status**: schemas:17_status
* **type**: string
* **typeHandlerVersion**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

