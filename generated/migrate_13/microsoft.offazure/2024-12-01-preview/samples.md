# Microsoft.OffAzure
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.offazure/hypervsites

HypervSitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/hypervSites@2024-12-01-preview' = {
  name: 'example'
  location: 'xw'
  properties: {
    agentDetails: {
      keyVaultId: 'uljlwtzuov'
      keyVaultUri: 'pfahtmeieriei'
    }
    applianceName: 'kpaacaqjz'
    discoveryScenario: 'Migrate'
    discoverySolutionId: 'SQLDiscovery'
    provisioningState: 'Created'
    servicePrincipalIdentityDetails: {
      aadAuthority: 'wovlgigjieoy'
      applicationId: 'psnpb'
      audience: 'hctklyzi'
      machineResourceId: '/subscriptions/204898ee-cd13-4332-b9d4-55ca5c25496d/resourceGroups/abcd/providers/Microsoft.HybridCompute/machines/efgh'
      objectId: 'cikjihwlapcdonucmrrdjfkhqqwhzx'
      rawCertData: 'wcusmshqiqsyuwyamo'
      tenantId: '4e7d6b6b-4cf1-4ba1-a907-248fb814aba0'
    }
    siteAppliancePropertiesCollection: [
      {
        agentDetails: {
          keyVaultId: 'chqtsrpahfayfuqrusmbakvgdqny'
          keyVaultUri: 'w'
        }
        applianceName: 'nhhwywytwjbhjtpwxkcxqhqmcrowg'
        servicePrincipalIdentityDetails: {
          aadAuthority: 'pykd'
          applicationId: 'lg'
          audience: 'emwqxwwqqzwk'
          objectId: 'etkbysdzluxvpxkciooxjjmvl'
          rawCertData: 'kewdmdjrt'
          tenantId: 'aqvsxunpdlrxclnpudkykycsdf'
        }
      }
    ]
  }
  tags: {
    key416: 'ustlytldedlkgdfqtcycgeodx'
  }
}
```

## microsoft.offazure/hypervsites/clusters

HypervClusterController_CreateCluster_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/hypervSites/clusters@2024-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fqdn: 'lacbgkrkpqz'
    hostFqdnList: [
      'zlwvwatrballpcfyszlvgzdvyn'
    ]
    provisioningState: 'Created'
    runAsAccountId: 'qwufapcavfbw'
  }
}
```

## microsoft.offazure/hypervsites/hosts

HypervHostController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/hypervSites/hosts@2024-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fqdn: 'bfukiilbxwrtocbikpnuzkynjou'
    provisioningState: 'Created'
    runAsAccountId: 'alenkq'
  }
}
```

## microsoft.offazure/importsites

ImportSitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/importSites@2024-12-01-preview' = {
  name: 'example'
  location: 'kbpwuvbxtmiqell'
  properties: {
    discoverySolutionId: 'SQLDiscovery'
    provisioningState: 'Created'
  }
  tags: {
    key5078: 'mwutujvgbsknlmcbcumdls'
  }
}
```

## microsoft.offazure/mastersites

MasterSitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites@2024-12-01-preview' = {
  name: 'example'
  location: 'laepquvzkpf'
  properties: {
    allowMultipleSites: true
    customerStorageAccountArmId: 'cwmtyrlddgmdv'
    provisioningState: 'Created'
    publicNetworkAccess: 'NotSpecified'
    sites: [
      'asfrsppqbfoalblvxbegd'
    ]
  }
  tags: {
    key5752: 'xnewkoapdoocqxwjeioam'
  }
}
```

## microsoft.offazure/mastersites/privateendpointconnections

PrivateEndpointConnectionController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/privateEndpointConnections@2024-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateEndpoint: {
    }
    privateLinkServiceConnectionState: {
      description: 'fxafsuotjvyxgsfrxfguchnmcsqur'
      actionsRequired: 'xjvbyugooknrfngytxi'
      status: 'Approved'
    }
    provisioningState: 'Created'
  }
}
```

## microsoft.offazure/mastersites/sqlsites

SqlSitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/sqlSites@2024-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    arcScope: {
      locations: [
        'skudnmktdqfwyjvkcxmmyszxe'
      ]
      scopeType: 'SubscriptionOrResourceGroupIds'
      subscriptionOrResourceGroupIds: [
        '/subscriptions/abcdef12-3456-7890-abcd-ef1234567890/resourceGroups/MyResourceGroup'
      ]
      syncType: 'Manual'
      tagSyncMode: 'Enabled'
    }
    discoveryScenario: 'Migrate'
    provisioningState: 'Created'
    siteAppliancePropertiesCollection: [
      {
        agentDetails: {
          keyVaultId: 'gcgiqqcmrxaliuh'
          keyVaultUri: 'iojpezyurumm'
        }
        applianceName: 'mvcyp'
        servicePrincipalIdentityDetails: {
          aadAuthority: 'bohphxovpfaohkayediwaoseckrzvw'
          applicationId: 'vajauhwanjiy'
          audience: 'likebzzzrfgvb'
          objectId: 'wmonpcfhddt'
          rawCertData: 'uinljcnwecsmlitqupkdlch'
          tenantId: 'rxnbqbbjqnndmycpmspzfkhlili'
        }
      }
    ]
  }
}
```

## microsoft.offazure/mastersites/sqlsites/discoverysitedatasources

SqlDiscoverySiteDataSourceController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/sqlSites/discoverySiteDataSources@2024-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    discoverySiteId: 'pwvxmjltxgersleywnsdehnvg'
    provisioningState: 'Created'
  }
}
```

## microsoft.offazure/mastersites/webappsites

WebAppSitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/webAppSites@2024-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    discoveryScenario: 'Migrate'
    provisioningState: 'Created'
    siteAppliancePropertiesCollection: [
      {
        agentDetails: {
          keyVaultId: 'uljlwtzuov'
          keyVaultUri: 'pfahtmeieriei'
        }
        applianceName: 'vldzodqailemjxtcuczua'
        servicePrincipalIdentityDetails: {
          aadAuthority: 'wovlgigjieoy'
          applicationId: 'psnpb'
          audience: 'hctklyzi'
          objectId: 'cikjihwlapcdonucmrrdjfkhqqwhzx'
          rawCertData: 'wcusmshqiqsyuwyamo'
          tenantId: '4e7d6b6b-4cf1-4ba1-a907-248fb814aba0'
        }
      }
    ]
  }
}
```

## microsoft.offazure/mastersites/webappsites/discoverysitedatasources

WebAppDiscoverySiteDataSourcesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/webAppSites/discoverySiteDataSources@2024-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    discoverySiteId: 'vgdnxoeaceaozi'
    provisioningState: 'Created'
  }
}
```

## microsoft.offazure/serversites

ServerSitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/serverSites@2024-12-01-preview' = {
  name: 'example'
  location: 'yandi'
  properties: {
    agentDetails: {
      keyVaultId: 'gcgiqqcmrxaliuh'
      keyVaultUri: 'iojpezyurumm'
    }
    applianceName: 'gwezfr'
    arcScope: {
      locations: [
        'skudnmktdqfwyjvkcxmmyszxe'
      ]
      scopeType: 'SubscriptionOrResourceGroupIds'
      subscriptionOrResourceGroupIds: [
        '/subscriptions/abcdef12-3456-7890-abcd-ef1234567890/resourceGroups/MyResourceGroup'
      ]
      syncType: 'Manual'
      tagSyncMode: 'Enabled'
    }
    discoveryScenario: 'Migrate'
    discoverySolutionId: 'lbgtstoisxizxmdntvyngomwqs'
    provisioningState: 'Created'
    servicePrincipalIdentityDetails: {
      aadAuthority: 'bohphxovpfaohkayediwaoseckrzvw'
      applicationId: 'vajauhwanjiy'
      audience: 'likebzzzrfgvb'
      machineResourceId: '/subscriptions/204898ee-cd13-4332-b9d4-55ca5c25496d/resourceGroups/abcd/providers/Microsoft.HybridCompute/machines/efgh'
      objectId: 'wmonpcfhddt'
      rawCertData: 'uinljcnwecsmlitqupkdlch'
      tenantId: 'rxnbqbbjqnndmycpmspzfkhlili'
    }
    siteAppliancePropertiesCollection: [
      {
        agentDetails: {
          keyVaultId: 'chqtsrpahfayfuqrusmbakvgdqny'
          keyVaultUri: 'w'
        }
        applianceName: 'nhhwywytwjbhjtpwxkcxqhqmcrowg'
        servicePrincipalIdentityDetails: {
          aadAuthority: 'pykd'
          applicationId: 'lg'
          audience: 'emwqxwwqqzwk'
          objectId: 'etkbysdzluxvpxkciooxjjmvl'
          rawCertData: 'kewdmdjrt'
          tenantId: 'aqvsxunpdlrxclnpudkykycsdf'
        }
      }
    ]
  }
  tags: {
    key3376: 'pik'
  }
}
```

## microsoft.offazure/vmwaresites

SitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/vmwareSites@2024-12-01-preview' = {
  name: 'example'
  location: 'duamzcvadpgcmiynldbwcjra'
  properties: {
    agentDetails: {
      keyVaultId: 'uljlwtzuov'
      keyVaultUri: 'pfahtmeieriei'
    }
    applianceName: 'uyeppesjravy'
    discoveryScenario: 'Migrate'
    discoverySolutionId: 'SQLDiscovery'
    provisioningState: 'Created'
    servicePrincipalIdentityDetails: {
      aadAuthority: 'wovlgigjieoy'
      applicationId: 'psnpb'
      audience: 'hctklyzi'
      machineResourceId: '/subscriptions/204898ee-cd13-4332-b9d4-55ca5c25496d/resourceGroups/abcd/providers/Microsoft.HybridCompute/machines/efgh'
      objectId: 'cikjihwlapcdonucmrrdjfkhqqwhzx'
      rawCertData: 'wcusmshqiqsyuwyamo'
      tenantId: '4e7d6b6b-4cf1-4ba1-a907-248fb814aba0'
    }
    siteAppliancePropertiesCollection: [
      {
        agentDetails: {
          keyVaultId: 'chqtsrpahfayfuqrusmbakvgdqny'
          keyVaultUri: 'w'
        }
        applianceName: 'nhhwywytwjbhjtpwxkcxqhqmcrowg'
        servicePrincipalIdentityDetails: {
          aadAuthority: 'pykd'
          applicationId: 'lg'
          audience: 'emwqxwwqqzwk'
          objectId: 'etkbysdzluxvpxkciooxjjmvl'
          rawCertData: 'kewdmdjrt'
          tenantId: 'aqvsxunpdlrxclnpudkykycsdf'
        }
      }
    ]
  }
  tags: {
    key2053: 'hnol'
  }
}
```

## microsoft.offazure/vmwaresites/vcenters

VcenterController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/vmwareSites/vcenters@2024-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fqdn: 'wlngoo'
    friendlyName: 'mihf'
    port: 'bnwginmcsqtsypbpnozdvvimuukh'
    provisioningState: 'Created'
    runAsAccountId: 'ddteoexbctpnkauhvzebgdjjvfinhb'
  }
}
```
