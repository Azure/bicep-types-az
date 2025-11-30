# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/pricings

Update pricing on resource (example for Containers plan)
```bicep
resource exampleResource 'Microsoft.Security/pricings@2024-01-01' = {
  name: 'example'
  properties: {
    pricingTier: 'Standard'
    extensions: [
      {
        name: 'ContainerRegistriesVulnerabilityAssessments'
        isEnabled: 'True'
      }
      {
        name: 'ContainerSensor'
        isEnabled: 'True'
      }
      {
        name: 'AgentlessDiscoveryForKubernetes'
        isEnabled: 'True'
      }
      {
        name: 'AgentlessVmScanning'
        additionalExtensionProperties: {
          ExclusionTags: '[]'
        }
        isEnabled: 'True'
      }
      {
        name: 'ContainerIntegrityContribution'
        isEnabled: 'True'
      }
    ]
  }
}
```

Update pricing on resource (example for VirtualMachines plan)
```bicep
resource exampleResource 'Microsoft.Security/pricings@2024-01-01' = {
  name: 'example'
  properties: {
    pricingTier: 'Standard'
    subPlan: 'P1'
  }
}
```

Update pricing on subscription (example for CloudPosture plan)
```bicep
resource exampleResource 'Microsoft.Security/pricings@2024-01-01' = {
  name: 'example'
  properties: {
    pricingTier: 'Standard'
  }
}
```

Update pricing on subscription (example for CloudPosture plan) - partial success
```bicep
resource exampleResource 'Microsoft.Security/pricings@2024-01-01' = {
  name: 'example'
  properties: {
    pricingTier: 'Standard'
  }
}
```

Update pricing on subscription (example for VirtualMachines plan)
```bicep
resource exampleResource 'Microsoft.Security/pricings@2024-01-01' = {
  name: 'example'
  properties: {
    enforce: 'True'
    pricingTier: 'Standard'
    subPlan: 'P2'
  }
}
```
