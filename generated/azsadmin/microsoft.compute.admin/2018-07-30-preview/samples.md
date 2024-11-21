# Microsoft.Compute.Admin
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.compute.admin/locations/artifacttypes/publishers/offers/skus/versions

Creates a new platform image.
```bicep
resource exampleResource 'Microsoft.Compute.Admin/locations/artifactTypes/publishers/offers/skus/versions@2018-07-30-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    osDisk: {
      osType: 'Linux'
      uri: 'https://test.blob.local.azurestack.external/test/medium.vhd'
    }
  }
}
```

## microsoft.compute.admin/locations/artifacttypes/publishers/types/versions

Create a Virtual Machine Extension Image.
```bicep
resource exampleResource 'Microsoft.Compute.Admin/locations/artifactTypes/publishers/types/versions@2018-07-30-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    computeRole: 'N/A'
    isSystemExtension: false
    sourceBlob: {
      uri: 'https://test.blob.local.azurestack.external/test/Microsoft.Powershell.DSC_2.19.0.0.zip'
    }
    supportMultipleExtensions: true
    vmOsType: 'Linux'
    vmScaleSetEnabled: false
  }
}
```

## microsoft.compute.admin/locations/diskmigrationjobs

Create a disk migration job.
```bicep
resource exampleResource 'Microsoft.Compute.Admin/locations/diskmigrationjobs@2018-07-30-preview' = {
  parent: parentResource 
  name: 'example'
  0: {
    location: 'redmond'
    properties: {
      diskId: '423e4eb4-f791-4d13-ad5b-4d415733b0d6'
      sharePath: '\\\\SU1FileServer.mydomain.com\\SU1_ObjStore_4'
      status: 'Unattached'
    }
  }
  1: {
    location: 'redmond'
    properties: {
      diskId: '48dc9b56-5883-4011-9dc3-0e527f33e6ab'
      sharePath: '\\\\SU1FileServer.mydomain.com\\SU1_ObjStore_2'
      status: 'Unattached'
    }
  }
}
```

## microsoft.compute.admin/locations/quotas

Creates or Updates a Compute Quota.
```bicep
resource exampleResource 'Microsoft.Compute.Admin/locations/quotas@2018-07-30-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    availabilitySetCount: 2
    coresLimit: 2
    ddagpuCount: 6
    maxAllocationPremiumManagedDisksAndSnapshots: 1024
    maxAllocationStandardManagedDisksAndSnapshots: 1024
    partitionedGpuCount: 0
    virtualMachineCount: 2
    vmScaleSetCount: 2
  }
}
```
