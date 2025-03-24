# Microsoft.ContainerRegistry.Admin @ 2019-11-01-preview

## Resource Microsoft.ContainerRegistry.Admin/locations/capacities@2019-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerRegistryCapacityProperty](#containerregistrycapacityproperty) (ReadOnly): Container registry capacity property.
* **type**: 'Microsoft.ContainerRegistry.Admin/locations/capacities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry.Admin/locations/configurations@2019-11-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerRegistryConfigurationProperty](#containerregistryconfigurationproperty) (Required): Container registry configuration property.
* **type**: 'Microsoft.ContainerRegistry.Admin/locations/configurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry.Admin/locations/quotas@2019-11-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerRegistryQuotaProperties](#containerregistryquotaproperties): Container registry quota properties.
* **type**: 'Microsoft.ContainerRegistry.Admin/locations/quotas' (ReadOnly, DeployTimeConstant): The resource type

## ContainerRegistryCapacityProperty
### Properties
* **allowPush**: bool: Flag denotes if pushes are blocked for all registries.
* **maximumCapacityInGiB**: int: Total storage capacity (GiB) which can used by the registry.
* **registriesConsumptionInGiB**: int: Total storage capacity (GiB) consumed by the registry.

## ContainerRegistryConfigurationProperty
### Properties
* **maximumCapacityInGiB**: int (Required): Total storage capacity (GiB) which can used by the registry.

## ContainerRegistryQuotaProperties
### Properties
* **capacityPerRegistryInGiB**: int: Storage capacity (GiB) of each registry.
* **numberOfRegistries**: int: Total number of container registry accounts.

