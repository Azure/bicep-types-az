# Microsoft.HybridCloud
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.hybridcloud/cloudconnections

Create a Cloud Connection
```bicep
resource exampleResource 'Microsoft.HybridCloud/cloudConnections@2023-01-01-preview' = {
  name: 'example'
  location: 'West US'
  properties: {
    cloudConnector: {
      id: '/subscriptions/subid/resourceGroups/demo-rg/providers/Microsoft.HybridCloud/cloudConnectors/123456789012'
    }
    remoteResourceId: 'arn:aws:ec2:us-east-1:123456789012:VPNGateway/vgw-043da592550819c8a'
    sharedKey: 'password123'
    virtualHub: {
      id: '/subscriptions/subid/resourceGroups/demo-rg/providers/Microsoft.Network/VirtualHubs/testHub'
    }
  }
}
```

## microsoft.hybridcloud/cloudconnectors

Create a Cloud Connector
```bicep
resource exampleResource 'Microsoft.HybridCloud/cloudConnectors@2023-01-01-preview' = {
  name: 'example'
  location: 'West US'
  properties: {
    accountId: '123456789012'
    cloudType: 'AWS'
  }
}
```
