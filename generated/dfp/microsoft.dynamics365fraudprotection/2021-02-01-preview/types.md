# Microsoft.Dynamics365FraudProtection @ 2021-02-01-preview

## Resource Microsoft.Dynamics365FraudProtection/instances@2021-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the DFP resource.
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DFPInstanceProperties](#dfpinstanceproperties): Properties of the provision operation request.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [DFPInstanceTags](#dfpinstancetags): Key-value pairs of additional resource provisioning properties.
* **type**: 'Microsoft.Dynamics365FraudProtection/instances' (ReadOnly, DeployTimeConstant): The resource type

## Function checkNameAvailability (Microsoft.Dynamics365FraudProtection/locations@2021-02-01-preview)
* **Resource**: Microsoft.Dynamics365FraudProtection/locations
* **ApiVersion**: 2021-02-01-preview
* **Input**: [CheckInstanceNameAvailabilityParameters](#checkinstancenameavailabilityparameters)
* **Output**: [CheckInstanceNameAvailabilityResult](#checkinstancenameavailabilityresult)

## CheckInstanceNameAvailabilityParameters
### Properties
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z][a-z0-9]*$"}: Name for checking availability.
* **type**: string: The resource type of DFP instance.

## CheckInstanceNameAvailabilityResult
### Properties
* **message**: string: The detailed message of the request unavailability.
* **nameAvailable**: bool: Indicator of availability of the DFP instance name.
* **reason**: string: The reason of unavailability.

## DFPInstanceAdministrators
### Properties
* **members**: string[]: An array of administrator user identities.

## DFPInstanceProperties
### Properties
* **administration**: [DFPInstanceAdministrators](#dfpinstanceadministrators): A collection of DFP instance administrators
* **provisioningState**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' | string (ReadOnly): The current deployment state of DFP resource. The provisioningState is to indicate states for resource provisioning.

## DFPInstanceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

