# Microsoft.Discovery
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.discovery/bookshelves

Bookshelves_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.Discovery/bookshelves@2026-02-01-preview' = {
  name: 'example'
  location: 'uksouth'
  properties: {
    customerManagedKeys: 'Enabled'
    keyVaultProperties: {
      identityClientId: '00000011-1111-2222-2222-123456789111'
      keyName: 'tjjzitmclgtahulm'
      keyVaultUri: 'https://microsoft.com/a'
      keyVersion: 'dnoogjozeqlpubvkxwrujbncstsm'
    }
    logAnalyticsClusterId: '/subscriptions/31735C59-6307-4464-8B80-3675223F23D2/providers/Microsoft.OperationalInsights/clusters/cluster1'
    privateEndpointSubnetId: '/subscriptions/31735C59-6307-4464-8B80-3675223F23D2/providers/Microsoft.Network/virtualNetworks/virtualnetwork1/subnets/privateEndpointSubnet1'
    publicNetworkAccess: 'Enabled'
    searchSubnetId: '/subscriptions/31735C59-6307-4464-8B80-3675223F23D2/providers/Microsoft.Network/virtualNetworks/virtualnetwork1/subnets/searchSubnet1'
    workloadIdentities: {
      key8334: {
      }
    }
  }
  tags: {
    key782: 'hmvugqbu'
  }
}
```

## microsoft.discovery/bookshelves/privateendpointconnections

BookshelfPrivateEndpointConnections_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.Discovery/bookshelves/privateEndpointConnections@2026-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateEndpoint: {
    }
    privateLinkServiceConnectionState: {
      description: 'lknyprq'
      actionsRequired: 'vgqhrxvmviabfgmafqtbej'
      status: 'Pending'
    }
  }
}
```

## microsoft.discovery/storagecontainers

StorageContainers_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.Discovery/storageContainers@2026-02-01-preview' = {
  name: 'example'
  location: 'uksouth'
  properties: {
    storageStore: {
      kind: 'AzureStorageBlob'
      storageAccountId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.Storage/storageAccounts/storageaccount'
    }
  }
  tags: {
    key9976: 'waghigmzxlvfqwribpxamwx'
  }
}
```

## microsoft.discovery/storagecontainers/storageassets

StorageAssets_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.Discovery/storageContainers/storageAssets@2026-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'uksouth'
  properties: {
    path: 'qmvrklgqdif'
    description: 'gwlk'
  }
  tags: {
    key5443: 'dneh'
  }
}
```

## microsoft.discovery/supercomputers

Supercomputers_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.Discovery/supercomputers@2026-02-01-preview' = {
  name: 'example'
  location: 'uksouth'
  properties: {
    customerManagedKeys: 'Enabled'
    diskEncryptionSetId: '/subscriptions/31735C59-6307-4464-8B80-3675223F23D2/providers/Microsoft.Compute/diskEncryptionSets/diskencryptionset1'
    identities: {
      clusterIdentity: {
        id: '/subscriptions/31735C59-6307-4464-8B80-3675223F23D2/providers/Microsoft.ManagedIdentity/userAssignedIdentities/managedid1'
      }
      kubeletIdentity: {
        id: '/subscriptions/31735C59-6307-4464-8B80-3675223F23D2/providers/Microsoft.ManagedIdentity/userAssignedIdentities/managedid1'
      }
      workloadIdentities: {
        key1149: {
        }
      }
    }
    logAnalyticsClusterId: '/subscriptions/31735C59-6307-4464-8B80-3675223F23D2/providers/Microsoft.OperationalInsights/clusters/cluster1'
    managementSubnetId: '/subscriptions/31735C59-6307-4464-8B80-3675223F23D2/providers/Microsoft.Network/virtualNetworks/virtualnetwork1/subnets/managementSubnet1'
    outboundType: 'LoadBalancer'
    subnetId: '/subscriptions/31735C59-6307-4464-8B80-3675223F23D2/providers/Microsoft.Network/virtualNetworks/virtualnetwork1/subnets/subnet1'
    systemSku: 'Standard_D4s_v6'
  }
  tags: {
    key5625: 'spcjwrxnslfkiqbzdkhhbano'
  }
}
```

## microsoft.discovery/supercomputers/nodepools

NodePools_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.Discovery/supercomputers/nodePools@2026-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'uksouth'
  properties: {
    maxNodeCount: 4
    minNodeCount: 0
    scaleSetPriority: 'Regular'
    subnetId: '/subscriptions/31735C59-6307-4464-8B80-3675223F23D2/providers/Microsoft.Network/virtualNetworks/virtualnetwork1/subnets/subnet1'
    vmSize: 'Standard_NC24ads_A100_v4'
  }
  tags: {
    key6074: 'qlnvwgazrqmwauqqvxntjtoye'
  }
}
```

## microsoft.discovery/tools

Tools_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.Discovery/tools@2026-02-01-preview' = {
  name: 'example'
  location: 'uksouth'
  properties: {
    definitionContent: {
      name: 'discovery'
      description: 'Advanced DFT computational tools for molecular geometry optimization and property calculations'
      actions: [
        {
          name: 'GeometryOptimization'
          description: 'Optimize geometry of \'xyz\'s from the input data asset. This is a prerequisite for all other discovery computations.'
          command: 'python3 submit_dft.py '
          environment_variables: [
            {
              name: 'OUTPUT_DIRECTORY_PATH'
              value: '{{ outputDataAssetId }}'
            }
          ]
          input_schema: {
            type: 'object'
            properties: {
              basisSet: {
                type: 'string'
                description: 'Basis set. Must be one of the supported basis sets (e.g., def2-svp, def2-tzvp).'
              }
              inputDataAssetId: {
                type: 'string'
                description: 'Identifier of the input data asset'
              }
              outputDataAssetId: {
                type: 'string'
                description: 'Identifier to use for the new output data asset which will be created.'
              }
              xyzColumnName: {
                type: 'string'
                description: 'Column containing xyz data within the input data table asset'
              }
            }
            required: [
              'inputDataAssetId'
              'xyzColumnName'
            ]
          }
        }
      ]
      tool_id: 'discovery-m1'
    }
    environmentVariables: {
      key5460: 'xtjzjghbist'
    }
    version: 'sjepxewtq'
  }
  tags: {
    key2611: 'cgsblxvyzevbd'
  }
}
```

## microsoft.discovery/workspaces

Workspaces_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.Discovery/workspaces@2026-02-01-preview' = {
  name: 'example'
  location: 'uksouth'
  properties: {
    agentSubnetId: '/subscriptions/31735C59-6307-4464-8B80-3675223F23D2/providers/Microsoft.Network/virtualNetworks/virtualnetwork1/subnets/agentSubnet1'
    customerManagedKeys: 'Enabled'
    keyVaultProperties: {
      keyName: 'yfplarzdfwsut'
      keyVaultUri: 'https://microsoft.com/a'
      keyVersion: 'qlsjcf'
    }
    logAnalyticsClusterId: '/subscriptions/31735C59-6307-4464-8B80-3675223F23D2/providers/Microsoft.OperationalInsights/clusters/cluster1'
    privateEndpointSubnetId: '/subscriptions/31735C59-6307-4464-8B80-3675223F23D2/providers/Microsoft.Network/virtualNetworks/virtualnetwork1/subnets/privateEndpointSubnet1'
    publicNetworkAccess: 'Enabled'
    supercomputerIds: [
      '/subscriptions/31735C59-6307-4464-8B80-3675223F23D2/resourceGroups/rgdiscovery/providers/Microsoft.Discovery/supercomputers/supercomputer12'
    ]
    workspaceIdentity: {
      id: '/subscriptions/31735C59-6307-4464-8B80-3675223F23D2/providers/Microsoft.ManagedIdentity/userAssignedIdentities/managedid1'
    }
    workspaceSubnetId: '/subscriptions/31735C59-6307-4464-8B80-3675223F23D2/providers/Microsoft.Network/virtualNetworks/virtualnetwork1/subnets/workspaceSubnet1'
  }
  tags: {
    key5364: 'xiwdefebkbfffgqlzmqaeqsqeq'
  }
}
```

## microsoft.discovery/workspaces/chatmodeldeployments

ChatModelDeployments_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.Discovery/workspaces/chatModelDeployments@2026-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'uksouth'
  properties: {
    modelFormat: 'tcttsgevrsuflt'
    modelName: 'nvwdoluhukiachlyrdnpxusxsc'
  }
  tags: {
    key4822: 'fpesmhjievwzxmhxszcgpztivcgw'
  }
}
```

## microsoft.discovery/workspaces/privateendpointconnections

WorkspacePrivateEndpointConnections_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.Discovery/workspaces/privateEndpointConnections@2026-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateEndpoint: {
    }
    privateLinkServiceConnectionState: {
      description: 'lknyprq'
      actionsRequired: 'vgqhrxvmviabfgmafqtbej'
      status: 'Pending'
    }
  }
}
```

## microsoft.discovery/workspaces/projects

Projects_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.Discovery/workspaces/projects@2026-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'uksouth'
  properties: {
    settings: {
      behaviorPreferences: 'zjhzrtkwdmwbueseguplzpxeqvbqrknwvxxgtwtpldnguihcbprdwsihucbrmhyvmxuvldlgtrheqehrpcmdqtjknlyjnzdvphjicifbuvlsjgoaiaeunshmuupogxhwywntzhdvrdkknumgyofeltjqyenfiemerqsafaphhzgkwqrnuhbxklclishnnailctvcdjzvfroakitqkmllziocaolmyvytjmqhivljovriyicparifitswaynjsczcpfsgwyjsojiwqzauscpgmxqhznkofwydrjauiwkwkjrvclbufqmzyftfwjkymalhwkpiabljammjstpsknxqouabruobyznqnscucrvurarbbtefmaqiqfkyykuifojikmnkfgnjyagxwpjilfjyfpkqjdgrupitpqbvebmhsizeomzxqekqbsqqnlkefolbgbnfavtliixrvqxcbcxrxnpozucsvseddpjzsydiebyxxdehaniinfvfbflqwmyqelsjquigikebmfuuhdervonditfsummrsuokoqtessdmwptawejkqkkmtzgomamsbcbpviejbirvdwbcoenrsxeyayglvygsknetjuxdmbroritqklncrrnstwuaoohrqnypxfgbvfofsabnrgofobhdkktjyuhrxzmkrwglqczjlrfxbcbrplqmocjbphkjpdfxrfpkfrvlqqmiwftsuhxmjpimvngakbpkcvdevwubfqjjpnjmoiruabwxtzqehlwangolxjeqzjbfxltrgchuiginrgaeaztcqwacogzhvuhxcolvlzmoulikspebsdjyqlzgrtkqobkszfspnjftmnzsbyctxhkjsyemlehnqqhvvfdtrfarpjgaklmvbwukaykstipsnejnpnwaxskppilmgcdebupwpyyqajergevjizlhkiinvvqojrnegwbilhaktgjfkkefnwfbcxmjgylidekqjvgkxvnxdrttxzoyndupwqvlebbfgyiddgixrhcdbfkgakpausgcmjsgpqsjonrrrodgzzkworpvxzjzgtdbzqerqwjhjwoescduqwdwxsgmgyxolhlpdhuvscmzuuiynntspcyjlyngexpardjklyycnyquvbtfwlnqzxujowoljfvpnbyyoqiblxiiojiaeqpoblnrgttqmjqvqjaawevmbxgmbsaumjutbxhywkvhrljzcpitnunwfvtyiglqwlcngffnzdnfvccfqgdiazxoxgsepfqlyoxnofvogtsudsxarqpxhpidrwbykeypszgcbbyshljhlxperpdysagbmumexubjzimbetfayqfcbdkdpfsqrfuisioggdewxmeuihqitkwqfvmmwfppxfoigaoskgzedlhtmjagcbvwwnfkeyocceioccfjmxvtjutydhwapxkgdgjxuquujkdjtbkwhrlbxgclyqdcdnexitthelxajidteqtahvjwoovaripeuzycrdazmmzvpcecahnyentvdqdfteddmddcllromsumkucqhcgdelqsotimumwulnplxqeckhwgngafyvjlykdyotciabfkkdbqlfgwxkjreelzdswbaqzhiweqopubmxlestbvcrdimtiyleisfsvheanokuaipbniseceonfqlbrfofrhbuwtuirnrooflajdyrzwgcmpztgeyzrgvohijxrwrgsmfxagjuuygqtbyilneezxkmcbjoyhljlnesiuhgznvxzglpemwqfpixqlppehxeqzwhuxfcknkmpfttpywxaimzrsfalarhtoiwenlulyoadfdcyvsahzngcashxrchwrxknrvzhldforskqsktvltfuuxhummulwcfvezmfedfobzyfryrrzbypsvakkgppvhhicjydgzmnhcxsfqrdwgbmitmzzmjyzgvzusjigujfohqdlgmrtxmvvxoaxyfiyrgvfawkyynjykpmejzqmrpzitetxhqcjrqspglkzricplkrecaiumajvsobcddohclhmyinyteblkxqoqnoiyfwspencqszjbsnpyokusxgptshytgzqkynhncmqgrxaeugwyzxxqubfdkozfqrdeveopnhyvjcpjziogeyinlvcbhwltteivcnkfehvatnbvkfoqedljupaxholukhagwcasdgagdhpmkiumdclzstyexknhlojeoqkuejmnbuhdwgskgbqfomxvkgziun'
    }
    storageContainerIds: [
      '/subscriptions/31735C59-6307-4464-8B80-3675223F23D2/resourceGroups/rgdiscovery/providers/Microsoft.Discovery/storageContainers/storageContainer12'
    ]
  }
  tags: {
    key717: 'tdn'
  }
}
```
