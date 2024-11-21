# Microsoft.VirtualMachineImages
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.virtualmachineimages/imagetemplates

Create an Image Template.
```bicep
resource exampleResource 'Microsoft.VirtualMachineImages/imageTemplates@2019-02-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    customize: [
      {
        name: 'Shell Customizer Example'
        type: 'Shell'
        script: 'https://example.com/path/to/script.sh'
      }
    ]
    distribute: [
      {
        type: 'ManagedImage'
        imageId: '/subscriptions/{subscription-id}/resourceGroups/rg1/providers/Microsoft.Compute/images/image_it_1'
        location: '1_location'
        runOutputName: 'image_it_pir_1'
        tags: {
          tagName: 'value'
        }
      }
    ]
    source: {
      type: 'ManagedImage'
      imageId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/images/source_image'
    }
  }
  tags: {
    imagetemplate_tag1: 'IT_T1'
    imagetemplate_tag2: 'IT_T2'
  }
}
```
