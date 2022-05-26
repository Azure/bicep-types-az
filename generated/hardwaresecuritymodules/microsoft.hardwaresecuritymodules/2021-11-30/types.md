# Microsoft.HardwareSecurityModules @ 2021-11-30

## Resource Microsoft.HardwareSecurityModules/dedicatedHSMs@2021-11-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The supported Azure location where the dedicated HSM should be created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DedicatedHsmProperties](#dedicatedhsmproperties) (Required): Properties of the dedicated hsm
* **sku**: [Sku](#sku): SKU of the dedicated HSM
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of dedicated hsm resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.HardwareSecurityModules/dedicatedHSMs' (ReadOnly, DeployTimeConstant): The resource type
* **zones**: string[]: The Dedicated Hsm zones.

## DedicatedHsmProperties
### Properties
* **managementNetworkProfile**: [NetworkProfile](#networkprofile): The network profile definition.
* **networkProfile**: [NetworkProfile](#networkprofile): The network profile definition.
* **provisioningState**: 'Allocating' | 'CheckingQuota' | 'Connecting' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state.
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
* **name**: 'SafeNet Luna Network HSM A790' | 'payShield10K_LMK1_CPS250' | 'payShield10K_LMK1_CPS2500' | 'payShield10K_LMK1_CPS60' | 'payShield10K_LMK2_CPS250' | 'payShield10K_LMK2_CPS2500' | 'payShield10K_LMK2_CPS60' | string: SKU of the dedicated HSM

## SystemData
### Properties
* **createdAt**: string: The timestamp of dedicated hsm resource creation (UTC).
* **createdBy**: string: The identity that created dedicated hsm resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity.
* **lastModifiedAt**: string: The timestamp of dedicated hsm resource last modification (UTC).
* **lastModifiedBy**: string: The identity that last modified dedicated hsm resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

