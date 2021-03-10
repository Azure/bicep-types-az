# Microsoft.HardwareSecurityModules @ 2018-10-31-preview

## Resource Microsoft.HardwareSecurityModules/dedicatedHSMs@2018-10-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-31-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DedicatedHsmProperties](#dedicatedhsmproperties) (Required)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.HardwareSecurityModules/dedicatedHSMs' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## DedicatedHsmProperties
### Properties
* **networkProfile**: [NetworkProfile](#networkprofile)
* **provisioningState**: 'Allocating' | 'CheckingQuota' | 'Connecting' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **stampId**: string
* **statusMessage**: string (ReadOnly)

## NetworkProfile
### Properties
* **networkInterfaces**: [NetworkInterface](#networkinterface)[]
* **subnet**: [ApiEntityReference](#apientityreference)

## NetworkInterface
### Properties
* **id**: string (ReadOnly)
* **privateIpAddress**: string

## ApiEntityReference
### Properties
* **id**: string

## Sku
### Properties
* **name**: 'SafeNet Luna Network HSM A790'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

