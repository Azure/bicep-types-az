# Microsoft.Network @ 2019-11-01

## Resource Microsoft.Network/NetworkExperimentProfiles@2019-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets a unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProfileProperties](#profileproperties): The properties of a Profile
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/NetworkExperimentProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Network/NetworkExperimentProfiles/Experiments@2019-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExperimentProperties](#experimentproperties): The properties of an Experiment
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/NetworkExperimentProfiles/Experiments' (ReadOnly, DeployTimeConstant): The resource type

## Endpoint
### Properties
* **endpoint**: string: The endpoint URL
* **name**: string: The name of the endpoint

## ExperimentProperties
### Properties
* **description**: string: The description of the details or intents of the Experiment
* **enabledState**: 'Disabled' | 'Enabled' | string: The state of the Experiment
* **endpointA**: [Endpoint](#endpoint): The endpoint A of an experiment
* **endpointB**: [Endpoint](#endpoint): The endpoint B of an experiment
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | string (ReadOnly): Resource status.
* **scriptFileUri**: string (ReadOnly): The uri to the Script used in the Experiment
* **status**: string (ReadOnly): The description of Experiment status from the server side

## ProfileProperties
### Properties
* **enabledState**: 'Disabled' | 'Enabled' | string: The state of the Experiment
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling' | string (ReadOnly): Resource status.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

