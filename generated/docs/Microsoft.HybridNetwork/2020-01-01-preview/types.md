# Microsoft.HybridNetwork @ 2020-01-01-preview

## Microsoft.HybridNetwork/devices
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: DevicePropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.HybridNetwork/devices' (ReadOnly, DeployTimeConstant)

## DevicePropertiesFormat
* **Discriminator**: deviceType
### Base Properties
* **azureStackEdge**: SubResource
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' (ReadOnly)
* **status**: 'NotRegistered' | 'Registered' | 'Unknown' (ReadOnly)
* **virtualNetworkFunctions**: SubResource[] (ReadOnly)

## SubResource
### Properties
* **id**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.HybridNetwork/locations/vendors/virtualNetworkFunctions
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VendorVirtualNetworkFunctionPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.HybridNetwork/locations/vendors/virtualNetworkFunctions' (ReadOnly, DeployTimeConstant)

## VendorVirtualNetworkFunctionPropertiesFormat
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' (ReadOnly)
* **skuName**: string (ReadOnly)
* **skuType**: 'EvolvedPacketCore' | 'SDWAN' | 'Unknown' (ReadOnly)
* **vendorProvisioningState**: 'Deprovisioned' | 'NotProvisioned' | 'Provisioned' | 'Provisioning' | 'Unknown' | 'UserDataValidationFailed'
* **virtualNetworkFunctionVendorConfigurations**: VirtualNetworkFunctionVendorConfiguration[]

## VirtualNetworkFunctionVendorConfiguration
### Properties
* **customData**: string
* **networkInterfaces**: NetworkInterface[]
* **osProfile**: OsProfile
* **roleName**: string
* **userDataParameters**: any (ReadOnly)

## NetworkInterface
### Properties
* **ipConfigurations**: NetworkInterfaceIPConfiguration[]
* **macAddress**: string
* **networkInterfaceName**: string
* **vmSwitchType**: 'Internal' | 'Lan' | 'Management' | 'Unknown' | 'Wan'

## NetworkInterfaceIPConfiguration
### Properties
* **dnsServers**: string[]
* **gateway**: string
* **ipAddress**: string
* **ipAllocationMethod**: 'Dynamic' | 'Static' | 'Unknown'
* **ipVersion**: 'IPv4' | 'Unknown'
* **subnet**: string

## OsProfile
### Properties
* **adminPassword**: string
* **adminUsername**: string
* **sshPublicKey**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.HybridNetwork/vendors/vendorSkus/previewSubscriptions
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.HybridNetwork/vendors/vendorSkus/previewSubscriptions' (ReadOnly, DeployTimeConstant)

## Microsoft.HybridNetwork/vendors/vendorSkus
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VendorSkuPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.HybridNetwork/vendors/vendorSkus' (ReadOnly, DeployTimeConstant)

## VendorSkuPropertiesFormat
### Properties
* **deploymentMode**: 'Azure' | 'PrivateEdgeZone' | 'Unknown'
* **managedApplicationParameters**: any
* **managedApplicationTemplate**: any
* **preview**: bool
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' (ReadOnly)
* **skuType**: 'EvolvedPacketCore' | 'SDWAN' | 'Unknown'
* **virtualNetworkFunctionTemplate**: VirtualNetworkFunctionTemplate

## VirtualNetworkFunctionTemplate
### Properties
* **virutalNetworkFunctionRoleConfigurations**: VirtualNetworkFunctionRoleConfiguration[]

## VirtualNetworkFunctionRoleConfiguration
### Properties
* **imageReference**: ImageReference
* **networkInterfaces**: NetworkInterface[]
* **osProfile**: OsProfile
* **roleName**: string
* **roleType**: 'Unknown' | 'VirtualMachine'
* **userDataParameters**: any
* **userDataTemplate**: any
* **virtualMachineSize**: 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D1_v2' | 'Standard_D2_v2' | 'Standard_D3_v2' | 'Standard_D4_v2' | 'Standard_D5_v2' | 'Standard_DS11_v2' | 'Standard_DS12_v2' | 'Standard_DS13_v2' | 'Standard_DS1_v2' | 'Standard_DS2_v2' | 'Standard_DS3_v2' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Unknown'

## ImageReference
### Properties
* **osType**: 'Linux' | 'Unknown' | 'Windows'
* **sasUri**: string
* **vhdName**: string
* **vhdType**: 'Unknown' | 'VHD' | 'VHDX'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.HybridNetwork/vendors
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VendorPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.HybridNetwork/vendors' (ReadOnly, DeployTimeConstant)

## VendorPropertiesFormat
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' (ReadOnly)
* **skus**: SubResource[] (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.HybridNetwork/virtualNetworkFunctions
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VirtualNetworkFunctionPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.HybridNetwork/virtualNetworkFunctions' (ReadOnly, DeployTimeConstant)

## VirtualNetworkFunctionPropertiesFormat
### Properties
* **device**: SubResource
* **managedApplication**: SubResource (ReadOnly)
* **managedApplicationParameters**: any
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' (ReadOnly)
* **serviceKey**: string (ReadOnly)
* **skuName**: string
* **skuType**: 'EvolvedPacketCore' | 'SDWAN' | 'Unknown' (ReadOnly)
* **vendorName**: string
* **vendorProvisioningState**: 'Deprovisioned' | 'NotProvisioned' | 'Provisioned' | 'Provisioning' | 'Unknown' | 'UserDataValidationFailed' (ReadOnly)
* **virtualNetworkFunctionUserConfigurations**: VirtualNetworkFunctionUserConfiguration[]

## VirtualNetworkFunctionUserConfiguration
### Properties
* **networkInterfaces**: NetworkInterface[]
* **roleName**: string
* **userDataParameters**: any

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

