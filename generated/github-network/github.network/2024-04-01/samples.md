# GitHub.Network
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## github.network/networksettings

networkSettingsCreate
```bicep
resource exampleResource 'GitHub.Network/networkSettings@2024-04-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    businessId: 'GitHub'
    subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resourceGroup/providers/Microsoft.Network/virtualNetworks/vnet/subnets/subnet'
  }
  tags: {
  }
}
```
