# Microsoft.Compute.Admin @ 2021-01-01

## Resource Microsoft.Compute.Admin/locations/quotas@2021-01-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaProperties](#quotaproperties): Properties for a Compute Quota
* **type**: 'Microsoft.Compute.Admin/locations/quotas' (ReadOnly, DeployTimeConstant): The resource type

## QuotaProperties
### Properties
* **availabilitySetCount**: int: Maximum number of availability sets allowed.
* **coresLimit**: int: Maximum number of cores allowed.
* **ddagpuCount**: int: Maximum number of dda gpus allowed.
* **maxAllocationPremiumManagedDisksAndSnapshots**: int: Maximum number of managed disks and snapshots of type premium allowed.
* **maxAllocationStandardManagedDisksAndSnapshots**: int: Maximum number of managed disks and snapshots of type standard allowed.
* **partitionedGpuCount**: int: Maximum number of partitioned gpus allowed.
* **virtualMachineCount**: int: Maximum number of virtual machines allowed.
* **vmScaleSetCount**: int: Maximum number of scale sets allowed.

