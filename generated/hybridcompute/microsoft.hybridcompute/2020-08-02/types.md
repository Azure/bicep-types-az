# Microsoft.HybridCompute @ 2020-08-02

## Resource Microsoft.HybridCompute/machines@2020-08-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-02' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: MachineIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MachineProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.HybridCompute/machines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HybridCompute/machines/extensions@2020-08-02
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-02' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MachineExtensionProperties
* **tags**: TrackedResourceTags
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
* **errorDetails**: ErrorDetail[] (ReadOnly)
* **extensions**: MachineExtensionInstanceView[] (ReadOnly)
* **lastStatusChange**: string (ReadOnly)
* **locationData**: LocationData
* **machineFqdn**: string (ReadOnly)
* **osName**: string (ReadOnly)
* **osProfile**: MachinePropertiesOsProfile
* **osSku**: string (ReadOnly)
* **osVersion**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **status**: 'Connected' | 'Disconnected' | 'Error' (ReadOnly)
* **vmId**: string
* **vmUuid**: string (ReadOnly)

## ErrorDetail
### Properties
* **code**: string (Required)
* **details**: ErrorDetail[]
* **message**: string (Required)
* **target**: string

## MachineExtensionInstanceView
### Properties
* **name**: string (ReadOnly)
* **status**: MachineExtensionInstanceViewStatus
* **type**: string (ReadOnly)
* **typeHandlerVersion**: string (ReadOnly)

## MachineExtensionInstanceViewStatus
### Properties
* **code**: string (ReadOnly)
* **displayStatus**: string (ReadOnly)
* **level**: 'Error' | 'Info' | 'Warning' (ReadOnly)
* **message**: string (ReadOnly)
* **time**: string (ReadOnly)

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
* **instanceView**: MachineExtensionPropertiesInstanceView
* **provisioningState**: string (ReadOnly)
* **publisher**: string
* **type**: string
* **typeHandlerVersion**: string

## MachineExtensionPropertiesInstanceView
### Properties
* **name**: string (ReadOnly)
* **status**: MachineExtensionInstanceViewStatus
* **type**: string (ReadOnly)
* **typeHandlerVersion**: string (ReadOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

