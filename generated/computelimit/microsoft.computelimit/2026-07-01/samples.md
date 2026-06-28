# Microsoft.ComputeLimit
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.computelimit/locations/guestsubscriptions

Create a guest subscription
```bicep
resource exampleResource 'Microsoft.ComputeLimit/locations/guestSubscriptions@2026-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```

## microsoft.computelimit/locations/sharedlimitcaps

Create or update a shared limit cap for a VM family
```bicep
resource exampleResource 'Microsoft.ComputeLimit/locations/sharedLimitCaps@2026-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    defaultMemberCap: 100
    isBoundedCap: true
  }
}
```

## microsoft.computelimit/locations/sharedlimitcaps/membercapoverrides

Create or update a single member cap override
```bicep
resource exampleResource 'Microsoft.ComputeLimit/locations/sharedLimitCaps/memberCapOverrides@2026-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    cap: 250
  }
}
```

## microsoft.computelimit/locations/sharedlimits

Create a shared limit
```bicep
resource exampleResource 'Microsoft.ComputeLimit/locations/sharedLimits@2026-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```
