# Microsoft.Network @ 2019-11-01

## Resource Microsoft.Network/NetworkExperimentProfiles@2019-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProfileProperties](#profileproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/NetworkExperimentProfiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Network/NetworkExperimentProfiles/Experiments@2019-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ExperimentProperties](#experimentproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Network/NetworkExperimentProfiles/Experiments' (ReadOnly, DeployTimeConstant)

## ProfileProperties
### Properties
* **enabledState**: 'Disabled' | 'Enabled'
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExperimentProperties
### Properties
* **description**: string
* **enabledState**: 'Disabled' | 'Enabled'
* **endpointA**: [Endpoint](#endpoint)
* **endpointB**: [Endpoint](#endpoint)
* **resourceState**: 'Creating' | 'Deleting' | 'Disabled' | 'Disabling' | 'Enabled' | 'Enabling'
* **scriptFileUri**: string (ReadOnly)
* **status**: string (ReadOnly)

## Endpoint
### Properties
* **endpoint**: string
* **name**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

