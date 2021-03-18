# Microsoft.HybridCompute @ 2020-08-15-preview

## Resource Microsoft.HybridCompute/machines@2020-08-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [MachineIdentity](#machineidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MachineProperties](#machineproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.HybridCompute/machines' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HybridCompute/machines/extensions@2020-08-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MachineExtensionProperties](#machineextensionproperties)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.HybridCompute/machines/extensions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HybridCompute/privateLinkScopes@2020-08-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [HybridComputePrivateLinkScopeProperties](#hybridcomputeprivatelinkscopeproperties)
* **tags**: [PrivateLinkScopesResourceTags](#privatelinkscopesresourcetags)
* **type**: 'Microsoft.HybridCompute/privateLinkScopes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HybridCompute/privateLinkScopes/privateEndpointConnections@2020-08-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.HybridCompute/privateLinkScopes/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HybridCompute/privateLinkScopes/scopedResources@2020-08-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ScopedResourceProperties](#scopedresourceproperties)
* **type**: 'Microsoft.HybridCompute/privateLinkScopes/scopedResources' (ReadOnly, DeployTimeConstant)

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
* **privateLinkScopedResources**: string[] (ReadOnly)
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

## HybridComputePrivateLinkScopeProperties
### Properties
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty)
* **provisioningState**: string (ReadOnly)

## PrivateEndpointProperty
### Properties
* **id**: string

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly)
* **description**: string (Required)
* **status**: string (Required)

## PrivateLinkScopesResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScopedResourceProperties
### Properties
* **linkedResourceId**: string
* **provisioningState**: string (ReadOnly)

