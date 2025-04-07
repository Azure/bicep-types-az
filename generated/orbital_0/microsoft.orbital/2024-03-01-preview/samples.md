# Microsoft.Orbital
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.orbital/edgesites

Create Edge Site
```bicep
resource exampleResource 'Microsoft.Orbital/edgeSites@2024-03-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    globalCommunicationsSite: {
      id: '/subscriptions/c1be1141-a7c9-4aac-9608-3c2e2f1152c3/providers/Microsoft.Orbital/globalCommunicationsSites/contoso-Vernon'
    }
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.orbital/groundstations

Create a ground station
```bicep
resource exampleResource 'Microsoft.Orbital/groundStations@2024-03-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    altitudeMeters: 1500.83
    capabilities: [
      'Communication'
    ]
    city: 'redmond'
    globalCommunicationsSite: {
      id: '/subscriptions/c1be1141-a7c9-4aac-9608-3c2e2f1152c3/providers/Microsoft.Orbital/globalCommunicationsSites/contoso-Vernon'
    }
    latitudeDegrees: -122.122
    longitudeDegrees: 47.674
    providerName: 'Microsoft'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

## microsoft.orbital/l2connections

Create L2 Connection
```bicep
resource exampleResource 'Microsoft.Orbital/l2Connections@2024-03-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    edgeSite: {
      id: '/subscriptions/c1be1141-a7c9-4aac-9608-3c2e2f1152c3/resourceGroups/rg1/providers/Microsoft.Orbital/edgeSites/es1'
    }
    edgeSitePartnerRouter: {
      name: 'customerName-SiteName-01'
    }
    groundStation: {
      id: '/subscriptions/c1be1141-a7c9-4aac-9608-3c2e2f1152c3/resourceGroups/rg1/providers/Microsoft.Orbital/groundStations/gs1'
    }
    groundStationPartnerRouter: {
      name: 'customerName-SiteName-01'
    }
    vlanId: 200
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```
