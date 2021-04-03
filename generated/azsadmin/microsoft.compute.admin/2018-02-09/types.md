# Microsoft.Compute.Admin @ 2018-02-09

## Resource Microsoft.Compute.Admin/locations/quotas@2018-02-09
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-02-09' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaProperties](#quotaproperties): Properties for a Compute Quota
* **type**: 'Microsoft.Compute.Admin/locations/quotas' (ReadOnly, DeployTimeConstant): The resource type

## QuotaProperties
### Properties
* **availabilitySetCount**: int: Maximum number of availability sets allowed.
* **coresLimit**: int: Maximum number of cores allowed.
* **maxAllocationPremiumManagedDisksAndSnapshots**: int: Maximum number of managed disks and snapshots of type premium allowed.
* **maxAllocationStandardManagedDisksAndSnapshots**: int: Maximum number of managed disks and snapshots of type standard allowed.
* **virtualMachineCount**: int: Maximum number of virtual machines allowed.
* **vmScaleSetCount**: int: Maximum number of scale sets allowed.

