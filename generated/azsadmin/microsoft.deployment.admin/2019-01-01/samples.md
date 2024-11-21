# Microsoft.Deployment.Admin
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.deployment.admin/locations/filecontainers

Creates a new file container.
```bicep
resource exampleResource 'Microsoft.Deployment.Admin/locations/fileContainers@2019-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    postCopyAction: 'Unzip'
    sourceUri: 'https://deploymentproviderbvts.blob.redmond.ext-n22r1708.masd.stbtest.microsoft.com/temp/Microsoft.NullProvider.1.1.zip'
  }
}
```
