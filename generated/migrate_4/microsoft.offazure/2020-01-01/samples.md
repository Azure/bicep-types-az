# Microsoft.OffAzure
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.offazure/hypervsites

Create Hyper-V site
```bicep
resource exampleResource 'Microsoft.OffAzure/HyperVSites@2020-01-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    servicePrincipalIdentityDetails: {
      aadAuthority: 'https://login.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47'
      applicationId: 'e9f013df-2a2a-4871-b766-e79867f30348'
      audience: 'https://72f988bf-86f1-41af-91ab-2d7cd011db47/MaheshSite17ac9agentauthaadapp'
      objectId: '2cd492bc-7ef3-4ee0-b301-59a88108b47b'
      tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47'
    }
  }
}
```

## microsoft.offazure/hypervsites/clusters

Add new cluster
```bicep
resource exampleResource 'Microsoft.OffAzure/HyperVSites/clusters@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fqdn: '10.10.10.30'
    runAsAccountId: '/subscriptions/4bd2aa0f-2bd2-4d67-91a8-5a4533d58600/resourceGroups/pajindTest/providers/Microsoft.OffAzure/HyperVSites/appliance1e39site/runasaccounts/Account1'
  }
}
```

## microsoft.offazure/hypervsites/hosts

Add new host
```bicep
resource exampleResource 'Microsoft.OffAzure/HyperVSites/hosts@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fqdn: '10.10.10.20'
    runAsAccountId: 'Account1'
  }
}
```

## microsoft.offazure/vmwaresites

Create VMware site
```bicep
resource exampleResource 'Microsoft.OffAzure/VMwareSites@2020-01-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    servicePrincipalIdentityDetails: {
      aadAuthority: 'https://login.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47'
      applicationId: 'e9f013df-2a2a-4871-b766-e79867f30348'
      audience: 'https://72f988bf-86f1-41af-91ab-2d7cd011db47/MaheshSite17ac9agentauthaadapp'
      objectId: '2cd492bc-7ef3-4ee0-b301-59a88108b47b'
      tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47'
    }
  }
}
```

## microsoft.offazure/vmwaresites/vcenters

Create VMware Vcenter
```bicep
resource exampleResource 'Microsoft.OffAzure/VMwareSites/vCenters@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fqdn: 'idclab-a226vc6'
    runAsAccountId: '/subscriptions/4bd2aa0f-2bd2-4d67-91a8-5a4533d58600/resourceGroups/pajindTest/providers/Microsoft.OffAzure/VMwareSites/appliance1e39site/runasaccounts/account1'
  }
}
```
