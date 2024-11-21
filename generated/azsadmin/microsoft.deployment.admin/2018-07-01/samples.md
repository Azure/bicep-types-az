# Microsoft.Deployment.Admin

## microsoft.deployment.admin/locations/filecontainers

Creates a new file container.
```bicep
resource exampleResource 'Microsoft.Deployment.Admin/locations/fileContainers@2018-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    postCopyAction: 'Unzip'
    sourceUri: 'https://deploymentproviderbvts.blob.redmond.ext-n22r1708.masd.stbtest.microsoft.com/temp/Microsoft.NullProvider.1.1.zip'
  }
}
```
