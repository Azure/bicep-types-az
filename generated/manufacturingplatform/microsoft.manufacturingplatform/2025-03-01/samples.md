# Microsoft.ManufacturingPlatform
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.manufacturingplatform/manufacturingdataservices

ManufacturingDataServices_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.ManufacturingPlatform/manufacturingDataServices@2025-03-01' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
      key3165: {
      }
    }
  }
  location: 'tehys'
  properties: {
    aadApplicationId: 'cBaEC5DF-CEaB-Ddae-ecbD-1Afabbd6DAe3'
    adxProfile: {
    }
    aksAdminGroupId: 'dccAbeC7-84Eb-cbde-02Bd-B2cdfcaebb0D'
    aksProfile: {
    }
    cmkProfile: {
      keyUri: 'lqdfesunwlcwpwqohrsmcoieusbedh'
    }
    databaseProfile: {
    }
    denyAssignmentExclusions: [
      {
        type: 'pkwxzngyovmeunimdk'
        id: 'jgkmcnaiascxqner'
      }
    ]
    enableCopilot: true
    enableDiagnosticSettings: true
    eventHubProfile: {
    }
    fabricProfile: {
      keyUri: 'lxvinamjcynylosnvmesrn'
      oneLakePath: 'yy'
      oneLakeUri: 'wir'
    }
    functionAppProfile: {
    }
    managedOnBehalfOfConfiguration: {
    }
    managedResourceGroupConfiguration: {
      name: 'f'
      location: 'qapvuoteqwcpxbqdixnmiq'
    }
    monitoringProfile: {
    }
    openAIProfile: {
      embeddingModelCapacity: 16
      embeddingModelName: 'gvmbmegz'
      embeddingModelSkuName: 'ptrebrxvcytfvutzysjbsiepenjkbz'
      embeddingModelVersion: 'jcywywrzkspz'
      gptModelCapacity: 17
      gptModelName: 'dsbzdlz'
      gptModelSkuName: 'okujmvpatodobzxiagptxmcmzlfu'
      gptModelVersion: 'zvhjpcupzpgcwfooqynjsnexzb'
    }
    redisProfile: {
    }
    redundancyState: 'Zonal'
    resourceState: 'Active'
    storageProfile: {
    }
    userManagedOpenAIProfile: {
      embeddingModelDeploymentName: 'kvrtq'
      gptModelDeploymentName: 'vtflduhntrh'
      id: 'debpgpsj'
    }
    version: 'edudfrrjbywcurasjbnjwtdkflk'
  }
  sku: {
    name: 'fdspjymsjulumvnbml'
    capacity: 2
    family: 'rjuwebwtvuivyjypcee'
    size: 'loyqckvl'
    tier: 'Free'
  }
  tags: {
    key9958: 'ucyxfncon'
  }
}
```
