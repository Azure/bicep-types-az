# Microsoft.NetworkFunction @ 2021-09-01-preview

## Resource Microsoft.NetworkFunction/azureTrafficCollectors@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureTrafficCollectorPropertiesFormat](#azuretrafficcollectorpropertiesformat): Properties of the Azure Traffic Collector.
* **systemData**: [TrackedResourceSystemData](#trackedresourcesystemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkFunction/azureTrafficCollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkFunction/azureTrafficCollectors/collectorPolicies@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorPolicyPropertiesFormat](#collectorpolicypropertiesformat): Properties of the Collector Policy.
* **systemData**: [CollectorPolicySystemData](#collectorpolicysystemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.NetworkFunction/azureTrafficCollectors/collectorPolicies' (ReadOnly, DeployTimeConstant): The resource type

## AzureTrafficCollectorPropertiesFormat
### Properties
* **collectorPolicies**: [CollectorPolicy](#collectorpolicy)[]: Collector Policies for Azure Traffic Collector.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the application rule collection resource.
* **virtualHub**: [ResourceReference](#resourcereference): The virtualHub to which the Azure Traffic Collector belongs.

## CollectorPolicy
### Properties
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly): Azure resource Id
* **name**: string (ReadOnly): Azure resource name
* **properties**: [CollectorPolicyPropertiesFormat](#collectorpolicypropertiesformat): Properties of the Collector Policy.
* **systemData**: [CollectorPolicySystemData](#collectorpolicysystemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): Azure resource type

## CollectorPolicyPropertiesFormat
### Properties
* **emissionPolicies**: [EmissionPoliciesPropertiesFormat](#emissionpoliciespropertiesformat)[]: Emission policies.
* **ingestionPolicy**: [IngestionPolicyPropertiesFormat](#ingestionpolicypropertiesformat): Ingestion policies.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state.

## CollectorPolicySystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## EmissionPoliciesPropertiesFormat
### Properties
* **emissionDestinations**: [EmissionPolicyDestination](#emissionpolicydestination)[]: Emission policy destinations.
* **emissionType**: 'IPFIX' | string: Emission format type.

## EmissionPolicyDestination
### Properties
* **destinationType**: 'AzureMonitor' | string: Emission destination type.

## IngestionPolicyPropertiesFormat
### Properties
* **ingestionSources**: [IngestionSourcesPropertiesFormat](#ingestionsourcespropertiesformat)[]: Ingestion Sources.
* **ingestionType**: 'IPFIX' | string: The ingestion type.

## IngestionSourcesPropertiesFormat
### Properties
* **resourceId**: string: Resource ID.
* **sourceType**: 'Resource' | string: Ingestion source type.

## ResourceReference
### Properties
* **id**: string (ReadOnly): Resource ID.

## TrackedResourceSystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

