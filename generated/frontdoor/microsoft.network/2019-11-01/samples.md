# Microsoft.Network
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.network/networkexperimentprofiles

Creates an NetworkExperiment Profile in a Resource Group
```bicep
resource exampleResource 'Microsoft.Network/NetworkExperimentProfiles@2019-11-01' = {
  name: 'example'
  location: 'WestUs'
  properties: {
    enabledState: 'Enabled'
  }
}
```

## microsoft.network/networkexperimentprofiles/experiments

Creates an Experiment
```bicep
resource exampleResource 'Microsoft.Network/NetworkExperimentProfiles/Experiments@2019-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'this is my first experiment!'
    enabledState: 'Enabled'
    endpointA: {
      name: 'endpoint A'
      endpoint: 'endpointA.net'
    }
    endpointB: {
      name: 'endpoint B'
      endpoint: 'endpointB.net'
    }
  }
}
```
