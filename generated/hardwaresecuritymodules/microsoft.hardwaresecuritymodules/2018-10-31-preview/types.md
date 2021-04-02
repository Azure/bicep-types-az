# Microsoft.HardwareSecurityModules @ 2018-10-31-preview

## Resource Microsoft.HardwareSecurityModules/dedicatedHSMs@2018-10-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The supported Azure location where the dedicated HSM should be created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DedicatedHsmProperties](#dedicatedhsmproperties) (Required): Properties of the dedicated hsm
* **sku**: [Sku](#sku):
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.HardwareSecurityModules/dedicatedHSMs' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The Dedicated Hsm zones.

## DedicatedHsmProperties
### Properties
* **networkProfile**: [NetworkProfile](#networkprofile):
* **provisioningState**: 'Allocating' | 'CheckingQuota' | 'Connecting' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly): Provisioning state. Possible values include: 'Succeeded', 'Provisioning', 'Allocating', 'Connecting', 'Failed', 'CheckingQuota', 'Deleting'
* **stampId**: string: This field will be used when RP does not support Availability zones.
* **statusMessage**: string (ReadOnly): Resource Status Message.

## NetworkProfile
### Properties
* **networkInterfaces**: [NetworkInterface](#networkinterface)[]: Specifies the list of resource Ids for the network interfaces associated with the dedicated HSM.
* **subnet**: [ApiEntityReference](#apientityreference): The API entity reference.

## NetworkInterface
### Properties
* **id**: string (ReadOnly): The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
* **privateIpAddress**: string: Private Ip address of the interface

## ApiEntityReference
### Properties
* **id**: string: The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...

## Sku
### Properties
* **name**: 'SafeNet Luna Network HSM A790': SKU of the dedicated HSM. Possible values include: 'SafeNet Luna Network HSM A790'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

