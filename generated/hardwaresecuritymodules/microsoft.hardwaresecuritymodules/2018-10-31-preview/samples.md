# Microsoft.HardwareSecurityModules

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
