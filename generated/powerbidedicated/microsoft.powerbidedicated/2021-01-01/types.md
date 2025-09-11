# Microsoft.PowerBIDedicated @ 2021-01-01

## Resource Microsoft.PowerBIDedicated/autoScaleVCores@2021-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[-a-zA-Z0-9_]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AutoScaleVCoreProperties](#autoscalevcoreproperties): Properties of an auto scale v-core resource.
* **sku**: [AutoScaleVCoreSku](#autoscalevcoresku) (Required): The SKU of the auto scale v-core resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.PowerBIDedicated/autoScaleVCores' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.PowerBIDedicated/capacities@2021-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DedicatedCapacityProperties](#dedicatedcapacityproperties): Properties of the provision operation request.
* **sku**: [CapacitySku](#capacitysku) (Required): The SKU of the PowerBI Dedicated capacity resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.PowerBIDedicated/capacities' (ReadOnly, DeployTimeConstant): The resource type

## AutoScaleVCoreProperties
### Properties
* **capacityLimit**: int: The maximum capacity of an auto scale v-core resource.
* **capacityObjectId**: string: The object ID of the capacity resource associated with the auto scale v-core resource.
* **provisioningState**: 'Succeeded' | string (ReadOnly): The current deployment state of an auto scale v-core resource. The provisioningState is to indicate states for resource provisioning.

## AutoScaleVCoreSku
### Properties
* **capacity**: int: The capacity of an auto scale v-core resource.
* **name**: string (Required): Name of the SKU level.
* **tier**: 'AutoScale' | string: The name of the Azure pricing tier to which the SKU applies.

## CapacitySku
### Properties
* **capacity**: int: The capacity of the SKU.
* **name**: string (Required): Name of the SKU level.
* **tier**: 'AutoPremiumHost' | 'PBIE_Azure' | 'Premium' | string: The name of the Azure pricing tier to which the SKU applies.

## DedicatedCapacityAdministrators
### Properties
* **members**: string[]: An array of administrator user identities.

## DedicatedCapacityProperties
### Properties
* **administration**: [DedicatedCapacityAdministrators](#dedicatedcapacityadministrators): A collection of Dedicated capacity administrators
* **friendlyName**: string (ReadOnly): Capacity name
* **mode**: 'Gen1' | 'Gen2' | string: Specifies the generation of the Power BI Embedded capacity. If no value is specified, the default value 'Gen2' is used. [Learn More](https://docs.microsoft.com/power-bi/developer/embedded/power-bi-embedded-generation-2)
* **provisioningState**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' | string (ReadOnly): The current deployment state of PowerBI Dedicated resource. The provisioningState is to indicate states for resource provisioning.
* **state**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' | string (ReadOnly): The current state of PowerBI Dedicated resource. The state is to indicate more states outside of resource provisioning.
* **tenantId**: string (ReadOnly): Tenant ID for the capacity. Used for creating Pro Plus capacity.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

