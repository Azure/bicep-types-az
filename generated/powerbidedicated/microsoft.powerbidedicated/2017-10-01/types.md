# Microsoft.PowerBIDedicated @ 2017-10-01

## Resource Microsoft.PowerBIDedicated/capacities@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the PowerBI Dedicated resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DedicatedCapacityProperties](#dedicatedcapacityproperties): Properties of the provision operation request.
* **sku**: [ResourceSku](#resourcesku) (Required): The SKU of the PowerBI Dedicated resource.
* **tags**: [ResourceTags](#resourcetags): Key-value pairs of additional resource provisioning properties.
* **type**: 'Microsoft.PowerBIDedicated/capacities' (ReadOnly, DeployTimeConstant): The resource type

## DedicatedCapacityAdministrators
### Properties
* **members**: string[]: An array of administrator user identities.

## DedicatedCapacityProperties
### Properties
* **administration**: [DedicatedCapacityAdministrators](#dedicatedcapacityadministrators): A collection of Dedicated capacity administrators
* **friendlyName**: string (ReadOnly): Capacity name
* **mode**: string (ReadOnly): The capacity mode.
* **provisioningState**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' | string (ReadOnly): The current deployment state of PowerBI Dedicated resource. The provisioningState is to indicate states for resource provisioning.
* **state**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' | string (ReadOnly): The current state of PowerBI Dedicated resource. The state is to indicate more states outside of resource provisioning.
* **tenantId**: string (ReadOnly): Tenant ID for the capacity. Used for creating Pro Plus capacity.

## ResourceSku
### Properties
* **capacity**: int: The capacity of the SKU.
* **name**: string (Required): Name of the SKU level.
* **tier**: 'PBIE_Azure' | string: The name of the Azure pricing tier to which the SKU applies.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

