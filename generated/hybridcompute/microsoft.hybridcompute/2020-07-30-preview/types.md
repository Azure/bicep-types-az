# Microsoft.HybridCompute @ 2020-07-30-preview

## Resource Microsoft.HybridCompute/machines@2020-07-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [MachineIdentity](#machineidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MachineProperties](#machineproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.HybridCompute/machines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HybridCompute/machines/extensions@2020-07-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MachineExtensionProperties](#machineextensionproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.HybridCompute/machines/extensions' (ReadOnly, DeployTimeConstant)

## MachineIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: string

## MachineProperties
### Properties
* **adFqdn**: string (ReadOnly)
* **agentVersion**: string (ReadOnly)
* **clientPublicKey**: string
* **displayName**: string (ReadOnly)
* **dnsFqdn**: string (ReadOnly)
* **domainName**: string (ReadOnly)
* **errorDetails**: [ErrorDetail](#errordetail)[] (ReadOnly)
* **extensions**: [MachineExtensionInstanceView](#machineextensioninstanceview)[]
* **lastStatusChange**: string (ReadOnly)
* **locationData**: [LocationData](#locationdata)
* **machineFqdn**: string (ReadOnly)
* **osName**: string (ReadOnly)
* **osProfile**: [MachinePropertiesOsProfile](#machinepropertiesosprofile)
* **osSku**: string (ReadOnly)
* **osVersion**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **status**: 'Connected' | 'Disconnected' | 'Error' (ReadOnly)
* **vmId**: string
* **vmUuid**: string (ReadOnly)

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

## LocationData
### Properties
* **city**: string
* **countryOrRegion**: string
* **district**: string
* **name**: string (Required)

## MachinePropertiesOsProfile
### Properties
* **computerName**: string (ReadOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MachineExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool
* **forceUpdateTag**: string
* **instanceView**: [MachineExtensionPropertiesInstanceView](#machineextensionpropertiesinstanceview)
* **protectedSettings**: any
* **provisioningState**: string (ReadOnly)
* **publisher**: string
* **settings**: any
* **type**: string
* **typeHandlerVersion**: string

## MachineExtensionPropertiesInstanceView
### Properties
* **name**: string
* **status**: [MachineExtensionInstanceViewStatus](#machineextensioninstanceviewstatus)
* **type**: string
* **typeHandlerVersion**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

