# Microsoft.HardwareSecurityModules @ 2018-10-31-preview

## Resource Microsoft.HardwareSecurityModules/dedicatedHSMs@2018-10-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The supported Azure location where the dedicated HSM should be created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DedicatedHsmProperties](#dedicatedhsmproperties) (Required): Properties of the dedicated HSM
* **sku**: [Sku](#sku): SKU details
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.HardwareSecurityModules/dedicatedHSMs' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The Dedicated Hsm zones.

## ApiEntityReference
### Properties
* **id**: string: The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...

## DedicatedHsmProperties
### Properties
* **networkProfile**: [NetworkProfile](#networkprofile): Specifies the network interfaces of the dedicated hsm.
* **provisioningState**: 'Allocating' | 'CheckingQuota' | 'Connecting' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state.
* **stampId**: string: This field will be used when RP does not support Availability zones.
* **statusMessage**: string (ReadOnly): Resource Status Message.

## NetworkInterface
### Properties
* **id**: string (ReadOnly): The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
* **privateIpAddress**: string: Private Ip address of the interface

## NetworkProfile
### Properties
* **networkInterfaces**: [NetworkInterface](#networkinterface)[]: Specifies the list of resource Ids for the network interfaces associated with the dedicated HSM.
* **subnet**: [ApiEntityReference](#apientityreference): Specifies the identifier of the subnet.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **name**: 'SafeNet Luna Network HSM A790' | 'payShield10K_LMK1_CPS250' | 'payShield10K_LMK1_CPS2500' | 'payShield10K_LMK1_CPS60' | 'payShield10K_LMK2_CPS250' | 'payShield10K_LMK2_CPS2500' | 'payShield10K_LMK2_CPS60' | string: SKU of the dedicated HSM

