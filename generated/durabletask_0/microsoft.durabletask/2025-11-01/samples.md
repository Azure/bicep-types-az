# Microsoft.DurableTask
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.durabletask/schedulers

Schedulers_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DurableTask/schedulers@2025-11-01' = {
  name: 'example'
  location: 'northcentralus'
  properties: {
    ipAllowlist: [
      '10.0.0.0/8'
    ]
    sku: {
      name: 'Dedicated'
    }
  }
  tags: {
    department: 'research'
    development: 'true'
  }
}
```

## microsoft.durabletask/schedulers/retentionpolicies

RetentionPolicies_CreateOrReplace_MaximumSet
```bicep
resource exampleResource 'Microsoft.DurableTask/schedulers/retentionPolicies@2025-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    retentionPolicies: [
      {
        retentionPeriodInDays: 30
      }
      {
        orchestrationState: 'Failed'
        retentionPeriodInDays: 10
      }
    ]
  }
}
```

## microsoft.durabletask/schedulers/taskhubs

TaskHubs_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DurableTask/schedulers/taskHubs@2025-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```
