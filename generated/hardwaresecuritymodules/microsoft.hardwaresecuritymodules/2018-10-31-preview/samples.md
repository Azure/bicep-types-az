# Microsoft.HardwareSecurityModules
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.hardwaresecuritymodules/dedicatedhsms

Create a new or update an existing dedicated HSM
```bicep
resource exampleResource 'Microsoft.HardwareSecurityModules/dedicatedHSMs@2018-10-31-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    networkProfile: {
      networkInterfaces: [
        {
          privateIpAddress: '1.0.0.1'
        }
      ]
      subnet: {
        id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/hsm-group/providers/Microsoft.Network/virtualNetworks/stamp01/subnets/stamp01'
      }
    }
    stampId: 'stamp01'
  }
  sku: {
    name: 'SafeNet Luna Network HSM A790'
  }
  tags: {
    Dept: 'hsm'
    Environment: 'dogfood'
  }
}
```

Create a new or update an existing payment HSM
```bicep
resource exampleResource 'Microsoft.HardwareSecurityModules/dedicatedHSMs@2018-10-31-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    networkProfile: {
      networkInterfaces: [
        {
          privateIpAddress: '1.0.0.1'
        }
      ]
      subnet: {
        id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/hsm-group/providers/Microsoft.Network/virtualNetworks/stamp01/subnets/stamp01'
      }
    }
    stampId: 'stamp01'
  }
  sku: {
    name: 'payShield10K_LMK1_CPS60'
  }
  tags: {
    Dept: 'hsm'
    Environment: 'dogfood'
  }
}
```
