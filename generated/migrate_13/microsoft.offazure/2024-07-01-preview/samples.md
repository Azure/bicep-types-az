# Microsoft.OffAzure
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.offazure/hypervsites

HypervSitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/hypervSites@2024-07-01-preview' = {
  name: 'example'
  location: 'jzfqhihimugilssu'
  properties: {
    agentDetails: {
      keyVaultId: 'chqtsrpahfayfuqrusmbakvgdqny'
      keyVaultUri: 'w'
    }
    applianceName: 'bplbumeu'
    discoveryScenario: 'Migrate'
    discoverySolutionId: 'sqgvbumhsdeunojunhypdunvcutlev'
    provisioningState: 'Created'
    servicePrincipalIdentityDetails: {
      aadAuthority: 'pykd'
      applicationId: 'lg'
      audience: 'emwqxwwqqzwk'
      machineResourceId: '/subscriptions/204898ee-cd13-4332-b9d4-55ca5c25496d/resourceGroups/abcd/providers/Microsoft.HybridCompute/machines/efgh'
      objectId: 'etkbysdzluxvpxkciooxjjmvl'
      rawCertData: 'kewdmdjrt'
      tenantId: 'aqvsxunpdlrxclnpudkykycsdf'
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
    key9210: 'yitjyobwfkbprpkfcmogsywoot'
  }
}
```

## microsoft.offazure/hypervsites/clusters

HypervClusterController_CreateCluster_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/hypervSites/clusters@2024-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fqdn: 'rpfphmlbzericn'
    hostFqdnList: [
      'ozzrrnscesqywisszgtrnqkxp'
    ]
    provisioningState: 'Created'
    runAsAccountId: 'qgqrfeczloubuaitiudd'
  }
}
```

## microsoft.offazure/hypervsites/hosts

HypervHostController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/hypervSites/hosts@2024-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fqdn: 'lk'
    provisioningState: 'Created'
    runAsAccountId: 'epkvjlsbaigwfxwgzo'
  }
}
```

## microsoft.offazure/importsites

ImportSitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/importSites@2024-07-01-preview' = {
  name: 'example'
  location: 'adfizitxdfwwrkgywpqqupuhkvwie'
  properties: {
    discoverySolutionId: 'cgwjekybxrlaunxf'
    provisioningState: 'Created'
  }
  tags: {
    key592: 'pj'
  }
}
```

## microsoft.offazure/mastersites

MasterSitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites@2024-07-01-preview' = {
  name: 'example'
  location: 'g'
  properties: {
    allowMultipleSites: true
    customerStorageAccountArmId: 'tndgdhvguaaa'
    provisioningState: 'Created'
    publicNetworkAccess: 'NotSpecified'
    sites: [
      'lzbawsokqsbzpsocpiwbsjxf'
    ]
  }
  tags: {
    key5556: 'htomzlbxaiqgcmaaq'
  }
}
```

## microsoft.offazure/mastersites/privateendpointconnections

PrivateEndpointConnectionController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/privateEndpointConnections@2024-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateEndpoint: {
    }
    privateLinkServiceConnectionState: {
      description: 'zieisbmqzndfwsnt'
      actionsRequired: 'easeoi'
      status: 'Approved'
    }
    provisioningState: 'Created'
  }
}
```

## microsoft.offazure/mastersites/sqlsites

SqlSitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/sqlSites@2024-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    discoveryScenario: 'Migrate'
    provisioningState: 'Created'
    siteAppliancePropertiesCollection: [
      {
        agentDetails: {
          keyVaultId: 'chqtsrpahfayfuqrusmbakvgdqny'
          keyVaultUri: 'w'
        }
        applianceName: 'jqv'
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
}
```

## microsoft.offazure/mastersites/sqlsites/discoverysitedatasources

SqlDiscoverySiteDataSourceController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/sqlSites/discoverySiteDataSources@2024-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    discoverySiteId: 'ndmdh'
    provisioningState: 'Created'
  }
}
```

## microsoft.offazure/mastersites/webappsites

WebAppSitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/webAppSites@2024-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    discoveryScenario: 'Migrate'
    provisioningState: 'Created'
    siteAppliancePropertiesCollection: [
      {
        agentDetails: {
          keyVaultId: 'chqtsrpahfayfuqrusmbakvgdqny'
          keyVaultUri: 'w'
        }
        applianceName: 'jqv'
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
}
```

## microsoft.offazure/mastersites/webappsites/discoverysitedatasources

WebAppDiscoverySiteDataSourcesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/webAppSites/discoverySiteDataSources@2024-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    discoverySiteId: 'gsqqojvnjtbdabo'
    provisioningState: 'Created'
  }
}
```

## microsoft.offazure/serversites

ServerSitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/serverSites@2024-07-01-preview' = {
  name: 'example'
  location: 'rutllgppwqgtiklewhuesohgqb'
  properties: {
    agentDetails: {
      keyVaultId: 'chqtsrpahfayfuqrusmbakvgdqny'
      keyVaultUri: 'w'
    }
    applianceName: 'nhhwywytwjbhjtpwxkcxqhqmcrowg'
    discoveryScenario: 'Migrate'
    discoverySolutionId: 'dlsekq'
    provisioningState: 'Created'
    servicePrincipalIdentityDetails: {
      aadAuthority: 'pykd'
      applicationId: 'lg'
      audience: 'emwqxwwqqzwk'
      machineResourceId: '/subscriptions/204898ee-cd13-4332-b9d4-55ca5c25496d/resourceGroups/abcd/providers/Microsoft.HybridCompute/machines/efgh'
      objectId: 'etkbysdzluxvpxkciooxjjmvl'
      rawCertData: 'kewdmdjrt'
      tenantId: 'aqvsxunpdlrxclnpudkykycsdf'
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
    key8004: 'abecvbhselathbrca'
  }
}
```

## microsoft.offazure/vmwaresites

SitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/vmwareSites@2024-07-01-preview' = {
  name: 'example'
  location: 'wcccoelallobfu'
  properties: {
    agentDetails: {
      keyVaultId: 'chqtsrpahfayfuqrusmbakvgdqny'
      keyVaultUri: 'w'
    }
    applianceName: 'nhhwywytwjbhjtpwxkcxqhqmcrowg'
    discoveryScenario: 'Migrate'
    discoverySolutionId: 'dlsekq'
    provisioningState: 'Created'
    servicePrincipalIdentityDetails: {
      aadAuthority: 'pykd'
      applicationId: 'lg'
      audience: 'emwqxwwqqzwk'
      machineResourceId: '/subscriptions/204898ee-cd13-4332-b9d4-55ca5c25496d/resourceGroups/abcd/providers/Microsoft.HybridCompute/machines/efgh'
      objectId: 'etkbysdzluxvpxkciooxjjmvl'
      rawCertData: 'kewdmdjrt'
      tenantId: 'aqvsxunpdlrxclnpudkykycsdf'
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
    key2178: 'gfjjytrnctgvmi'
  }
}
```

## microsoft.offazure/vmwaresites/vcenters

VcenterController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/vmwareSites/vcenters@2024-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fqdn: 'fuclodcnofphkcrnex'
    friendlyName: 'qvycnab'
    port: 'bdospcacndrchuqluozmwrvetxul'
    provisioningState: 'Created'
    runAsAccountId: 'pqbieohxxmfri'
  }
}
```
