# Microsoft.PowerBIDedicated @ 2021-01-01

## Resource Microsoft.PowerBIDedicated/autoScaleVCores@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AutoScaleVCoreProperties](#autoscalevcoreproperties)
* **sku**: [AutoScaleVCoreSku](#autoscalevcoresku) (Required)
* **systemData**: [SystemData](#systemdata)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.PowerBIDedicated/autoScaleVCores' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.PowerBIDedicated/capacities@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DedicatedCapacityProperties](#dedicatedcapacityproperties)
* **sku**: [CapacitySku](#capacitysku) (Required)
* **systemData**: [SystemData](#systemdata)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.PowerBIDedicated/capacities' (ReadOnly, DeployTimeConstant)

## AutoScaleVCoreProperties
### Properties
* **capacityLimit**: int
* **capacityObjectId**: string
* **provisioningState**: 'Succeeded' (ReadOnly)

## AutoScaleVCoreSku
### Properties
* **capacity**: int
* **name**: string (Required)
* **tier**: 'AutoScale'

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DedicatedCapacityProperties
### Properties
* **administration**: [DedicatedCapacityAdministrators](#dedicatedcapacityadministrators)
* **mode**: 'Gen1' | 'Gen2'
* **provisioningState**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' (ReadOnly)
* **state**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' (ReadOnly)

## DedicatedCapacityAdministrators
### Properties
* **members**: string[]

## CapacitySku
### Properties
* **name**: string (Required)
* **tier**: 'AutoPremiumHost' | 'PBIE_Azure' | 'Premium'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

