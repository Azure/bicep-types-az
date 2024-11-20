# Microsoft.VirtualMachineImages

## microsoft.virtualmachineimages/imagetemplates

Create an Image Template.
```bicep
resource exampleResource 'Microsoft.VirtualMachineImages/imageTemplates@2018-02-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    customize: [
      {
        name: 'Shell Customizer Example'
        type: 'shell'
        script: 'https://example.com/path/to/script.sh'
      }
    ]
    distribute: [
      {
        type: 'managedImage'
        imageId: '/subscriptions/{subscription-id}/resourceGroups/rg1/providers/Microsoft.Compute/images/image_it_1'
        location: '1_location'
        runOutputName: 'image_it_pir_1'
        tags: {
          tagName: 'value'
        }
      }
    ]
    source: {
      type: 'ISO'
      sha256Checksum: '120acbca7b3d55465eb9f8ef53ad7365f2997d42d4f83d7cc285bf5c71e1131f'
      sourceURI: 'http://redhat.com/path/to/installation.iso'
    }
  }
  tags: {
    imagetemplate_tag1: 'IT_T1'
    imagetemplate_tag2: 'IT_T2'
  }
}
```
