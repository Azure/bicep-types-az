# Microsoft.Orbital
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.orbital/contactprofiles

Create a contact profile
```bicep
resource exampleResource 'Microsoft.Orbital/contactProfiles@2022-11-01' = {
  name: 'example'
  location: 'eastus2'
  properties: {
    autoTrackingConfiguration: 'disabled'
    eventHubUri: '/subscriptions/c1be1141-a7c9-4aac-9608-3c2e2f1152c3/resourceGroups/contoso-Rgp/providers/Microsoft.EventHub/namespaces/contosoHub/eventhubs/contosoHub'
    links: [
      {
        name: 'contoso-uplink'
        channels: [
          {
            name: 'contoso-uplink-channel'
            bandwidthMHz: 2
            centerFrequencyMHz: 2250
            endPoint: {
              endPointName: 'ContosoTest_Uplink'
              ipAddress: '10.1.0.4'
              port: '50000'
              protocol: 'TCP'
            }
          }
        ]
        direction: 'Uplink'
        eirpdBW: 45
        gainOverTemperature: 0
        polarization: 'LHCP'
      }
      {
        name: 'contoso-downlink'
        channels: [
          {
            name: 'contoso-downlink-channel'
            bandwidthMHz: 15
            centerFrequencyMHz: 8160
            endPoint: {
              endPointName: 'ContosoTest_Downlink'
              ipAddress: '10.1.0.5'
              port: '50001'
              protocol: 'UDP'
            }
          }
        ]
        direction: 'Downlink'
        eirpdBW: 0
        gainOverTemperature: 25
        polarization: 'RHCP'
      }
    ]
    minimumElevationDegrees: 5
    minimumViableContactDuration: 'PT1M'
    networkConfiguration: {
      subnetId: '/subscriptions/c1be1141-a7c9-4aac-9608-3c2e2f1152c3/resourceGroups/contoso-Rgp/providers/Microsoft.Network/virtualNetworks/contoso-vnet/subnets/orbital-delegated-subnet'
    }
    thirdPartyConfigurations: [
      {
        missionConfiguration: 'Ksat_MissionConfiguration'
        providerName: 'KSAT'
      }
      {
        missionConfiguration: 'Viasat_Configuration'
        providerName: 'VIASAT'
      }
    ]
  }
}
```

## microsoft.orbital/spacecrafts

Create a spacecraft
```bicep
resource exampleResource 'Microsoft.Orbital/spacecrafts@2022-11-01' = {
  name: 'example'
  location: 'eastus2'
  properties: {
    links: [
      {
        name: 'uplink_lhcp1'
        bandwidthMHz: 2
        centerFrequencyMHz: 2250
        direction: 'Uplink'
        polarization: 'LHCP'
      }
      {
        name: 'downlink_rhcp1'
        bandwidthMHz: 15
        centerFrequencyMHz: 8160
        direction: 'Downlink'
        polarization: 'RHCP'
      }
    ]
    noradId: '36411'
    titleLine: 'CONTOSO_SAT'
    tleLine1: '1 27424U 02022A   22167.05119303  .00000638  00000+0  15103-3 0  9994'
    tleLine2: '2 27424  98.2477 108.9546 0000928  92.9194 327.0802 14.57300770 69982'
  }
}
```

## microsoft.orbital/spacecrafts/contacts

Create a contact
```bicep
resource exampleResource 'Microsoft.Orbital/spacecrafts/contacts@2022-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    contactProfile: {
      id: '/subscriptions/c1be1141-a7c9-4aac-9608-3c2e2f1152c3/resourceGroups/contoso-Rgp/providers/Microsoft.Orbital/contactProfiles/CONTOSO-CP'
    }
    groundStationName: 'EASTUS2_0'
    reservationEndTime: '2023-02-22T11:10:45Z'
    reservationStartTime: '2023-02-22T10:58:30Z'
  }
}
```
