# Microsoft.OffAzureSpringBoot
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.offazurespringboot/springbootsites

springbootsites_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzureSpringBoot/springbootsites@2024-04-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: 'rywvpbfsqovhlfirtwisugsdsfsgf'
    type: 'lvsb'
  }
  location: 'tgobtvxktootwhhvjtsmpddvlqlrq'
  properties: {
    masterSiteId: 'xsoimrgshsactearljwuljmi'
    migrateProjectId: 'wwuattybgco'
  }
  tags: {
    key3558: 'xeuhtglamqzj'
  }
}
```

springbootsites_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzureSpringBoot/springbootsites@2024-04-01-preview' = {
  name: 'example'
  location: 'tgobtvxktootwhhvjtsmpddvlqlrq'
}
```

## microsoft.offazurespringboot/springbootsites/springbootapps

springbootapps_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzureSpringBoot/springbootsites/springbootapps@2024-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    appName: 'wrauwfegjfccym'
    appPort: 12
    appType: 'axzunlh'
    applicationConfigurations: [
      {
        key: 'wrbnwhqxjextxgdfbonuynvs'
        value: 'jnmaf'
      }
    ]
    artifactName: 'wrauwfegjfccym'
    bindingPorts: [
      11
    ]
    buildJdkVersion: 'ipzruwqqulkpvhzymqegntz'
    certificates: [
      'xpiqqob'
    ]
    checksum: 'gpzumvbzfnhhmuehveanctiamr'
    dependencies: [
      'zrtted'
    ]
    environments: [
      'afhprevtcx'
    ]
    instanceCount: 5
    instances: [
      {
        instanceCount: 5
        jvmMemoryInMB: 128
        machineArmId: 'lsstlommxuskyhnwyxh'
      }
    ]
    jarFileLocation: 'wfptqclncaqycyfbfih'
    jvmMemoryInMB: 1
    jvmOptions: [
      'nytejjoytevmvlgnfwb'
    ]
    lastModifiedTime: '2022-12-02T09:28:24.094Z'
    machineArmIds: [
      'lsstlommxuskyhnwyxh'
    ]
    miscs: [
      {
        key: 'fobsfetkynfmkziei'
        value: 'k'
      }
    ]
    runtimeJdkVersion: 'eblzujbsulpeilykqyjso'
    servers: [
      'gvfhsohasdx'
    ]
    springBootVersion: 'euggigfiii'
    staticContentLocations: [
      'wvvajfkbtmjftir'
    ]
  }
}
```

springbootapps_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzureSpringBoot/springbootsites/springbootapps@2024-04-01-preview' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.offazurespringboot/springbootsites/springbootservers

springbootservers_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzureSpringBoot/springbootsites/springbootservers@2024-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    errors: [
    ]
    fqdnAndIpAddressList: [
    ]
    machineArmId: 'fvfkiapbqsprnbzczdfmuryknrna'
    port: 10
    server: 'thhuxocfyqpeluqcgnypi'
    springBootApps: 17
    totalApps: 5
  }
}
```

springbootservers_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzureSpringBoot/springbootsites/springbootservers@2024-04-01-preview' = {
  parent: parentResource 
  name: 'example'
}
```
