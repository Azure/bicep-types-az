# Microsoft.OffAzure
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.offazure/hypervsites

HypervSitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/hypervSites@2023-06-06' = {
  name: 'example'
  location: 'sctymxdndonxgejdhi'
  properties: {
    agentDetails: {
      keyVaultId: 'awxurtbjmofxuciewsqfgpkccpzw'
      keyVaultUri: 'qizphgqwage'
    }
    applianceName: 'jnpsjguxuzuxbhasiqfijf'
    discoverySolutionId: 'yxajidsykozchjkuxj'
    provisioningState: 'Created'
    servicePrincipalIdentityDetails: {
      aadAuthority: 'yanzipdww'
      applicationId: 'tspgrujepxyxuprkqvfuqbbjrweeqa'
      audience: 'oepwfaozztzvegmzvswafvotj'
      objectId: 'tqrjngpgxnnto'
      rawCertData: 'dotvgkslkmsgvtekgojnhcdrryk'
      tenantId: 'vesmyhu'
    }
  }
  tags: {
    key9741: 'fdbzykkpvhnhsrhiam'
  }
}
```

HypervSitesController_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/hypervSites@2023-06-06' = {
  name: 'example'
  location: 'sctymxdndonxgejdhi'
}
```

## microsoft.offazure/hypervsites/clusters

HypervClusterController_CreateCluster_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/hypervSites/clusters@2023-06-06' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fqdn: 'lyqquicmqfagukcwfquemrkrexic'
    hostFqdnList: [
      'frozqzatdahnwlccznpmw'
    ]
    provisioningState: 'Created'
    runAsAccountId: 'valugnnrofauhagzzxksfjbcwuqhue'
  }
}
```

HypervClusterController_CreateCluster_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/hypervSites/clusters@2023-06-06' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.offazure/hypervsites/hosts

HypervHostController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/hypervSites/hosts@2023-06-06' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fqdn: 'okkwk'
    provisioningState: 'Created'
    runAsAccountId: 'pjgyebznvfxnjzjqt'
  }
}
```

HypervHostController_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/hypervSites/hosts@2023-06-06' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.offazure/importsites

ImportSitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/importSites@2023-06-06' = {
  name: 'example'
  location: 'woctgvdufvkzvjcirjpf'
  properties: {
    discoverySolutionId: 'lfaswhiwdttdpkrvnrpriauexdjs'
    provisioningState: 'Created'
  }
  tags: {
    key2067: 'taqzca'
  }
}
```

ImportSitesController_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/importSites@2023-06-06' = {
  name: 'example'
  location: 'woctgvdufvkzvjcirjpf'
}
```

## microsoft.offazure/mastersites

MasterSitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites@2023-06-06' = {
  name: 'example'
  location: 'plyak'
  properties: {
    allowMultipleSites: true
    customerStorageAccountArmId: 'cdxrihtiskkn'
    provisioningState: 'Created'
    publicNetworkAccess: 'NotSpecified'
    sites: [
      'zxupfq'
    ]
  }
  tags: {
    key7125: 'jbhnzfuxjovyamasouyfhhzhevagvw'
  }
}
```

MasterSitesController_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites@2023-06-06' = {
  name: 'example'
  location: 'plyak'
}
```

## microsoft.offazure/mastersites/privateendpointconnections

PrivateEndpointConnectionController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/privateEndpointConnections@2023-06-06' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateEndpoint: {
    }
    privateLinkServiceConnectionState: {
      description: 'ljdykrrhmzi'
      actionsRequired: 'swxghzuajrasojk'
      status: 'Approved'
    }
    provisioningState: 'Created'
  }
}
```

PrivateEndpointConnectionController_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/privateEndpointConnections@2023-06-06' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.offazure/mastersites/sqlsites

SqlSitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/sqlSites@2023-06-06' = {
  parent: parentResource 
  name: 'example'
  properties: {
    discoveryScenario: 'Migrate'
    provisioningState: 'Created'
    siteAppliancePropertiesCollection: [
      {
        agentDetails: {
          keyVaultId: 'awxurtbjmofxuciewsqfgpkccpzw'
          keyVaultUri: 'qizphgqwage'
        }
        applianceName: 'zpbkpigahvexsxevwafzgsu'
        servicePrincipalIdentityDetails: {
          aadAuthority: 'yanzipdww'
          applicationId: 'tspgrujepxyxuprkqvfuqbbjrweeqa'
          audience: 'oepwfaozztzvegmzvswafvotj'
          objectId: 'tqrjngpgxnnto'
          rawCertData: 'dotvgkslkmsgvtekgojnhcdrryk'
          tenantId: 'vesmyhu'
        }
      }
    ]
  }
}
```

SqlSitesController_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/sqlSites@2023-06-06' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.offazure/mastersites/sqlsites/discoverysitedatasources

SqlDiscoverySiteDataSourceController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/sqlSites/discoverySiteDataSources@2023-06-06' = {
  parent: parentResource 
  name: 'example'
  properties: {
    discoverySiteId: 'xvtylcidvhdspuw'
    provisioningState: 'Created'
  }
}
```

SqlDiscoverySiteDataSourceController_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/sqlSites/discoverySiteDataSources@2023-06-06' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.offazure/mastersites/webappsites

WebAppSitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/webAppSites@2023-06-06' = {
  parent: parentResource 
  name: 'example'
  properties: {
    discoveryScenario: 'Migrate'
    provisioningState: 'Created'
    siteAppliancePropertiesCollection: [
      {
        agentDetails: {
          keyVaultId: 'awxurtbjmofxuciewsqfgpkccpzw'
          keyVaultUri: 'qizphgqwage'
        }
        applianceName: 'zpbkpigahvexsxevwafzgsu'
        servicePrincipalIdentityDetails: {
          aadAuthority: 'yanzipdww'
          applicationId: 'tspgrujepxyxuprkqvfuqbbjrweeqa'
          audience: 'oepwfaozztzvegmzvswafvotj'
          objectId: 'tqrjngpgxnnto'
          rawCertData: 'dotvgkslkmsgvtekgojnhcdrryk'
          tenantId: 'vesmyhu'
        }
      }
    ]
  }
}
```

WebAppSitesController_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/webAppSites@2023-06-06' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.offazure/mastersites/webappsites/discoverysitedatasources

WebAppDiscoverySiteDataSourcesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/webAppSites/discoverySiteDataSources@2023-06-06' = {
  parent: parentResource 
  name: 'example'
  properties: {
    discoverySiteId: 'fwkwva'
    provisioningState: 'Created'
  }
}
```

WebAppDiscoverySiteDataSourcesController_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/masterSites/webAppSites/discoverySiteDataSources@2023-06-06' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.offazure/serversites

ServerSitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/serverSites@2023-06-06' = {
  name: 'example'
  location: 'iipybgplhzhpcfv'
  properties: {
    agentDetails: {
      keyVaultId: 'awxurtbjmofxuciewsqfgpkccpzw'
      keyVaultUri: 'qizphgqwage'
    }
    applianceName: 'zkzibwptff'
    discoverySolutionId: 'lvskpghpphpfumbzxroakznqplomiy'
    provisioningState: 'Created'
    servicePrincipalIdentityDetails: {
      aadAuthority: 'yanzipdww'
      applicationId: 'tspgrujepxyxuprkqvfuqbbjrweeqa'
      audience: 'oepwfaozztzvegmzvswafvotj'
      objectId: 'tqrjngpgxnnto'
      rawCertData: 'dotvgkslkmsgvtekgojnhcdrryk'
      tenantId: 'vesmyhu'
    }
  }
  tags: {
    key4244: 'yryvgpkoefkjkhlcahntgfz'
  }
}
```

ServerSitesController_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/serverSites@2023-06-06' = {
  name: 'example'
  location: 'iipybgplhzhpcfv'
}
```

## microsoft.offazure/vmwaresites

SitesController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/vmwareSites@2023-06-06' = {
  name: 'example'
  location: 'mh'
  properties: {
    agentDetails: {
      keyVaultId: 'awxurtbjmofxuciewsqfgpkccpzw'
      keyVaultUri: 'qizphgqwage'
    }
    applianceName: 'zkzibwptff'
    discoverySolutionId: 'lvskpghpphpfumbzxroakznqplomiy'
    provisioningState: 'Created'
    servicePrincipalIdentityDetails: {
      aadAuthority: 'yanzipdww'
      applicationId: 'tspgrujepxyxuprkqvfuqbbjrweeqa'
      audience: 'oepwfaozztzvegmzvswafvotj'
      objectId: 'tqrjngpgxnnto'
      rawCertData: 'dotvgkslkmsgvtekgojnhcdrryk'
      tenantId: 'vesmyhu'
    }
  }
  tags: {
    key7046: 'qywdefracwwzlugbwgqbt'
  }
}
```

SitesController_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/vmwareSites@2023-06-06' = {
  name: 'example'
  location: 'mh'
}
```

## microsoft.offazure/vmwaresites/vcenters

VcenterController_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/vmwareSites/vcenters@2023-06-06' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fqdn: 'mzrejobgzhpxhynsfpumuhk'
    friendlyName: 'qqsnhutpvockzhwuesuohnfirvxmw'
    port: 'ahagklwzutlumcdhawkrfzmpfypcz'
    provisioningState: 'Created'
    runAsAccountId: 'orrfsvlcuoagqlkkqsd'
  }
}
```

VcenterController_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzure/vmwareSites/vcenters@2023-06-06' = {
  parent: parentResource 
  name: 'example'
}
```
