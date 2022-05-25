# Microsoft.Network @ 2019-11-01

## Resource Microsoft.Network/NetworkExperimentProfiles@2019-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProfileProperties](#profileproperties): Defines the properties of an experiment
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/NetworkExperimentProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/NetworkExperimentProfiles/Experiments@2019-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExperimentProperties](#experimentproperties): Defines the properties of an experiment
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/NetworkExperimentProfiles/Experiments' (ReadOnly, DeployTimeConstant): The resource type

## ProfileProperties
### Properties
* **enabledState**: 'Disabled' | 'Enabled' | string: The state of the Experiment
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | string (ReadOnly): Defines the server side resource status

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExperimentProperties
### Properties
* **description**: string: The description of the details or intents of the Experiment
* **enabledState**: 'Disabled' | 'Enabled' | string: The state of the Experiment
* **endpointA**: [Endpoint](#endpoint): Defines the endpoint properties
* **endpointB**: [Endpoint](#endpoint): Defines the endpoint properties
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | string (ReadOnly): Defines the server side resource status
* **scriptFileUri**: string (ReadOnly): The uri to the Script used in the Experiment
* **status**: string (ReadOnly): The description of Experiment status from the server side

## Endpoint
### Properties
* **endpoint**: string: The endpoint URL
* **name**: string: The name of the endpoint

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

