# Microsoft.HardwareSecurityModules @ 2018-10-31-preview

## Resource Microsoft.HardwareSecurityModules/dedicatedHSMs@2018-10-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-31-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DedicatedHsmProperties (Required)
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.HardwareSecurityModules/dedicatedHSMs' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## DedicatedHsmProperties
### Properties
* **networkProfile**: NetworkProfile
* **provisioningState**: 'Allocating' | 'CheckingQuota' | 'Connecting' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **stampId**: string
* **statusMessage**: string (ReadOnly)

## NetworkProfile
### Properties
* **networkInterfaces**: NetworkInterface[]
* **subnet**: ApiEntityReference

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

