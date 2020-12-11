# Microsoft.Compute.Admin @ 2018-02-09

## Resource Microsoft.Compute.Admin/locations/quotas@2018-02-09
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-02-09' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: QuotaProperties
* **type**: 'Microsoft.Compute.Admin/locations/quotas' (ReadOnly, DeployTimeConstant)

## QuotaProperties
### Properties
* **availabilitySetCount**: int
* **coresLimit**: int
* **maxAllocationPremiumManagedDisksAndSnapshots**: int
* **maxAllocationStandardManagedDisksAndSnapshots**: int
* **virtualMachineCount**: int
* **vmScaleSetCount**: int

