# Microsoft.EdgeOperator @ 2026-06-01-preview

## Resource Microsoft.EdgeOperator/observabilityConfiguration@2026-06-01-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ObservabilityConfigurationProperties](#observabilityconfigurationproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.EdgeOperator/observabilityConfiguration' (ReadOnly, DeployTimeConstant): The resource type

## ObservabilityConfigurationProperties
### Properties
* **cloud**: string (ReadOnly): The cloud environment name. Defaults to `AzureCloud` when omitted by the service.
* **location**: string (ReadOnly): The Azure region where the observability configuration applies.
* **originalLocation**: string (ReadOnly): The original Azure region when the service remapped the requested location.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **resourceGroup**: string (ReadOnly): The resource group that owns the observability configuration.
* **servicePrincipalId**: string (ReadOnly): The Microsoft Entra application ID used for observability authentication.
* **subscriptionId**: string (ReadOnly): The customer Azure subscription ID associated with observability onboarding. This is distinct from the operator subscription ID in the request URI path.
* **tenantId**: string (ReadOnly): The Microsoft Entra tenant ID associated with the observability configuration.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

