# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/modernizeprojects

ModernizeProject_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/modernizeProjects@2022-05-01-preview' = {
  name: 'example'
  identity: {
    type: 'None'
    principalId: 'ins'
    tenantId: 'fjnu'
    userAssignedIdentities: {
      key6848: {
        clientId: 'lvlngepacjdjryqmxuvfdxwtkc'
        principalId: 'lumkynazsspljxiiwvz'
      }
    }
  }
  location: 'nbqyuxrgrlhx'
  properties: {
    migrationConfiguration: {
      keyVaultResourceId: 'vekhittkyogvwnqmggknv'
      migrationSolutionResourceId: 'bglfkwtzvqmhwpddwpvtdzaleaioxo'
      storageAccountResourceId: 'dgcoticysafrpynyoxkgrspooiia'
    }
  }
  tags: {
    key8644: 'wfyi'
  }
}
```

## microsoft.migrate/modernizeprojects/migrateagents

MigrateAgent_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/modernizeProjects/migrateAgents@2022-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authenticationIdentity: {
      aadAuthority: 'isbicanvfefdaci'
      applicationId: 'dibfqwjrnzikktkwe'
      audience: 'yrfxszjhkczoyfi'
      objectId: 'xfhhdosr'
      tenantId: 'uwceuawplakwjswbvllffbsz'
    }
    customProperties: {
      instanceType: 'IISWorkload'
    }
    machineId: 'sihoniqzqfz'
    machineName: 'glhejppirkiamgxxro'
  }
  tags: {
    key5560: 'jgffrfcgjrm'
  }
}
```

## microsoft.migrate/modernizeprojects/workloaddeployments

WorkloadDeployment_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/modernizeProjects/workloadDeployments@2022-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customProperties: {
      instanceType: 'IISAKSWorkloadDeployment'
    }
    displayName: 'wqe'
    targetPlatform: 'AzureKubernetesService'
    workloadInstanceProperties: {
      name: 'wonkuhgsafzviuwqerzdmme'
      customProperties: {
        instanceType: 'IISWorkload'
        webAppArmId: 'xseseqsrzdiga'
        webAppSiteName: 'mirgzmy'
      }
      displayName: 'juoorbubchvk'
      masterSiteName: 'ubks'
      migrateAgentId: 'aqgzsxqbk'
      sourceName: 'weuxcqzwpeyzsjhdgqflhxlwjhbz'
      sourcePlatform: 'eh'
    }
  }
  tags: {
    key8241: 'gcyxztzr'
  }
}
```

## microsoft.migrate/modernizeprojects/workloadinstances

WorkloadInstance_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Migrate/modernizeProjects/workloadInstances@2022-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    name: 'wonkuhgsafzviuwqerzdmme'
    customProperties: {
      instanceType: 'IISWorkload'
      webAppArmId: 'xseseqsrzdiga'
      webAppSiteName: 'mirgzmy'
    }
    displayName: 'juoorbubchvk'
    masterSiteName: 'ubks'
    migrateAgentId: 'aqgzsxqbk'
    sourceName: 'weuxcqzwpeyzsjhdgqflhxlwjhbz'
    sourcePlatform: 'eh'
  }
  tags: {
    key2836: 'biqip'
  }
}
```
