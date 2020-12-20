# Microsoft.HybridNetwork @ 2020-01-01-preview

## Resource Microsoft.HybridNetwork/devices@2020-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DevicePropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.HybridNetwork/devices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HybridNetwork/locations/vendors/networkFunctions@2020-01-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VendorNetworkFunctionPropertiesFormat
* **type**: 'Microsoft.HybridNetwork/locations/vendors/networkFunctions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HybridNetwork/networkFunctions@2020-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkFunctionPropertiesFormat
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.HybridNetwork/networkFunctions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HybridNetwork/vendors@2020-01-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VendorPropertiesFormat
* **type**: 'Microsoft.HybridNetwork/vendors' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HybridNetwork/vendors/vendorSkus@2020-01-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VendorSkuPropertiesFormat
* **type**: 'Microsoft.HybridNetwork/vendors/vendorSkus' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HybridNetwork/vendors/vendorSkus/previewSubscriptions@2020-01-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.HybridNetwork/vendors/vendorSkus/previewSubscriptions' (ReadOnly, DeployTimeConstant)

## Function listRegistrationKey (Microsoft.HybridNetwork/devices@2020-01-01-preview
* **Resource**: Microsoft.HybridNetwork/devices@2020-01-01-preview
* **Output**: DeviceRegistrationKey

## DevicePropertiesFormat
* **Discriminator**: deviceType
### Base Properties
* **azureStackEdge**: SubResource
* **networkFunctions**: SubResource[] (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' (ReadOnly)
* **status**: 'Deleted' | 'NotRegistered' | 'Registered' | 'Unknown' (ReadOnly)

## SubResource
### Properties
* **id**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VendorNetworkFunctionPropertiesFormat
### Properties
* **networkFunctionVendorConfigurations**: NetworkFunctionVendorConfiguration[]
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' (ReadOnly)
* **skuName**: string (ReadOnly)
* **skuType**: 'EvolvedPacketCore' | 'Firewall' | 'SDWAN' | 'Unknown' (ReadOnly)
* **vendorProvisioningState**: 'Deprovisioned' | 'NotProvisioned' | 'Provisioned' | 'Provisioning' | 'Unknown' | 'UserDataValidationFailed'

## NetworkFunctionVendorConfiguration
### Properties
* **networkInterfaces**: NetworkInterface[]
* **osProfile**: OsProfile
* **roleName**: string
* **userDataParameters**: any (ReadOnly)

## NetworkInterface
### Properties
* **ipConfigurations**: NetworkInterfaceIPConfiguration[]
* **macAddress**: string
* **networkInterfaceName**: string
* **vmSwitchType**: 'Lan' | 'Management' | 'Unknown' | 'Wan'

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
* **adminUsername**: string
* **customData**: string
* **customDataRequired**: bool
* **linuxConfiguration**: LinuxConfiguration

## LinuxConfiguration
### Properties
* **ssh**: SshConfiguration

## SshConfiguration
### Properties
* **publicKeys**: SshPublicKey[]

## SshPublicKey
### Properties
* **keyData**: string
* **path**: string

## NetworkFunctionPropertiesFormat
### Properties
* **device**: SubResource
* **managedApplication**: SubResource (ReadOnly)
* **managedApplicationParameters**: any
* **networkFunctionUserConfigurations**: NetworkFunctionUserConfiguration[]
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' (ReadOnly)
* **serviceKey**: string (ReadOnly)
* **skuName**: string
* **skuType**: 'EvolvedPacketCore' | 'Firewall' | 'SDWAN' | 'Unknown' (ReadOnly)
* **vendorName**: string
* **vendorProvisioningState**: 'Deprovisioned' | 'NotProvisioned' | 'Provisioned' | 'Provisioning' | 'Unknown' | 'UserDataValidationFailed' (ReadOnly)

## NetworkFunctionUserConfiguration
### Properties
* **networkInterfaces**: NetworkInterface[]
* **osProfile**: schemas:17_osProfile
* **roleName**: string
* **userDataParameters**: any

## schemas:17_osProfile
### Properties
* **customData**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VendorPropertiesFormat
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' (ReadOnly)
* **skus**: SubResource[] (ReadOnly)

## VendorSkuPropertiesFormat
### Properties
* **deploymentMode**: 'Azure' | 'PrivateEdgeZone' | 'Unknown'
* **managedApplicationParameters**: any
* **managedApplicationTemplate**: any
* **networkFunctionTemplate**: NetworkFunctionTemplate
* **preview**: bool
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' (ReadOnly)
* **skuType**: 'EvolvedPacketCore' | 'Firewall' | 'SDWAN' | 'Unknown'

## NetworkFunctionTemplate
### Properties
* **networkFunctionRoleConfigurations**: NetworkFunctionRoleConfiguration[]

## NetworkFunctionRoleConfiguration
### Properties
* **customProfile**: CustomProfile
* **networkInterfaces**: NetworkInterface[]
* **osProfile**: OsProfile
* **roleName**: string
* **roleType**: 'Unknown' | 'VirtualMachine'
* **storageProfile**: StorageProfile
* **userDataParameters**: any
* **userDataTemplate**: any
* **virtualMachineSize**: 'Standard_D1_v2' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D2_v2' | 'Standard_D3_v2' | 'Standard_D4_v2' | 'Standard_D5_v2' | 'Standard_DS1_v2' | 'Standard_DS11_v2' | 'Standard_DS12_v2' | 'Standard_DS13_v2' | 'Standard_DS2_v2' | 'Standard_DS3_v2' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_F1' | 'Standard_F16' | 'Standard_F16s' | 'Standard_F1s' | 'Standard_F2' | 'Standard_F2s' | 'Standard_F4' | 'Standard_F4s' | 'Standard_F8' | 'Standard_F8s' | 'Unknown'

## CustomProfile
### Properties
* **metadataConfigurationPath**: string

## StorageProfile
### Properties
* **dataDisks**: DataDisk[]
* **imageReference**: ImageReference
* **osDisk**: OsDisk

## DataDisk
### Properties
* **createOption**: 'Empty' | 'Unknown'
* **diskSizeGB**: int
* **name**: string

## ImageReference
### Properties
* **exactVersion**: string
* **offer**: string
* **publisher**: string
* **sku**: string
* **version**: string

## OsDisk
### Properties
* **diskSizeGB**: int
* **name**: string
* **osType**: 'Linux' | 'Unknown' | 'Windows'
* **vhd**: VirtualHardDisk

## VirtualHardDisk
### Properties
* **uri**: string

## DeviceRegistrationKey
### Properties
* **registrationKey**: string (ReadOnly)

