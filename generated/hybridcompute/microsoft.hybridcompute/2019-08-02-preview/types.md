# Microsoft.HybridCompute @ 2019-08-02-preview

## Resource Microsoft.HybridCompute/machines@2019-08-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MachineProperties](#machineproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.HybridCompute/machines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HybridCompute/machines/extensions@2019-08-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-02-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MachineExtensionProperties](#machineextensionproperties)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.HybridCompute/machines/extensions' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: string

## MachineProperties
### Properties
* **agentVersion**: string (ReadOnly)
* **clientPublicKey**: string
* **displayName**: string (ReadOnly)
* **errorDetails**: [ErrorDetail](#errordetail)[] (ReadOnly)
* **extensions**: [MachineExtensionInstanceView](#machineextensioninstanceview)[]
* **lastStatusChange**: string (ReadOnly)
* **machineFqdn**: string (ReadOnly)
* **osName**: string
* **osProfile**: [OSProfile](#osprofile) (ReadOnly)
* **osVersion**: string
* **physicalLocation**: string
* **provisioningState**: string (ReadOnly)
* **status**: 'Connected' | 'Disconnected' | 'Error' (ReadOnly)
* **vmId**: string (ReadOnly)

## ErrorDetail
### Properties
* **code**: string (Required)
* **details**: [ErrorDetail](#errordetail)[]
* **message**: string (Required)
* **target**: string

## MachineExtensionInstanceView
### Properties
* **name**: string
* **status**: [MachineExtensionInstanceViewStatus](#machineextensioninstanceviewstatus)
* **type**: string
* **typeHandlerVersion**: string

## MachineExtensionInstanceViewStatus
### Properties
* **code**: string
* **displayStatus**: string
* **level**: 'Error' | 'Info' | 'Warning'
* **message**: string
* **time**: string

## OSProfile
### Properties
* **computerName**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MachineExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool
* **forceUpdateTag**: string
* **instanceView**: [MachineExtensionInstanceView](#machineextensioninstanceview)
* **protectedSettings**: any
* **provisioningState**: string (ReadOnly)
* **publisher**: string
* **settings**: any
* **type**: string
* **typeHandlerVersion**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

