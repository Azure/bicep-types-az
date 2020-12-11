# Microsoft.PowerBIDedicated @ 2017-10-01

## Microsoft.PowerBIDedicated/capacities
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DedicatedCapacityProperties
* **sku**: ResourceSku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.PowerBIDedicated/capacities' (ReadOnly, DeployTimeConstant)

## DedicatedCapacityProperties
### Properties
* **administration**: DedicatedCapacityAdministrators
* **provisioningState**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' (ReadOnly)
* **state**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' (ReadOnly)

## DedicatedCapacityAdministrators
### Properties
* **members**: string[]

## ResourceSku
### Properties
* **name**: string (Required)
* **tier**: 'PBIE_Azure'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

