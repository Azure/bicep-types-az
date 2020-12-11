# Microsoft.Network @ 2019-11-01

## Resource Microsoft.Network/NetworkExperimentProfiles@2019-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProfileProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/NetworkExperimentProfiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/NetworkExperimentProfiles/Experiments@2019-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ExperimentProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Network/NetworkExperimentProfiles/Experiments' (ReadOnly, DeployTimeConstant)

## ProfileProperties
### Properties
* **enabledState**: 'Disabled' | 'Enabled'
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ExperimentProperties
### Properties
* **description**: string
* **enabledState**: 'Disabled' | 'Enabled'
* **endpointA**: Endpoint
* **endpointB**: Endpoint
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling'
* **scriptFileUri**: string (ReadOnly)
* **status**: string (ReadOnly)

## Endpoint
### Properties
* **endpoint**: string
* **name**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

