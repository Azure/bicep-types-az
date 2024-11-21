# Microsoft.VirtualMachineImages

## microsoft.virtualmachineimages/imagetemplates

Create an Image Template with a user assigned identity configured
```bicep
resource exampleResource 'Microsoft.VirtualMachineImages/imageTemplates@2019-05-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity_1: {
      }
    }
  }
  location: 'westus'
  properties: {
    customize: [
      {
        name: 'Shell Customizer Example'
        type: 'Shell'
        scriptUri: 'https://example.com/path/to/script.sh'
      }
    ]
    distribute: [
      {
        type: 'ManagedImage'
        artifactTags: {
          tagName: 'value'
        }
        imageId: '/subscriptions/{subscription-id}/resourceGroups/rg1/providers/Microsoft.Compute/images/image_it_1'
        location: '1_location'
        runOutputName: 'image_it_pir_1'
      }
    ]
    source: {
      type: 'ManagedImage'
      imageId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/images/source_image'
    }
    vmProfile: {
      vmSize: 'Standard_D2s_v3'
    }
  }
  tags: {
    imagetemplate_tag1: 'IT_T1'
    imagetemplate_tag2: 'IT_T2'
  }
}
```

Create an Image Template.
```bicep
resource exampleResource 'Microsoft.VirtualMachineImages/imageTemplates@2019-05-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    customize: [
      {
        name: 'Shell Customizer Example'
        type: 'Shell'
        scriptUri: 'https://example.com/path/to/script.sh'
      }
    ]
    distribute: [
      {
        type: 'ManagedImage'
        artifactTags: {
          tagName: 'value'
        }
        imageId: '/subscriptions/{subscription-id}/resourceGroups/rg1/providers/Microsoft.Compute/images/image_it_1'
        location: '1_location'
        runOutputName: 'image_it_pir_1'
      }
    ]
    source: {
      type: 'ManagedImage'
      imageId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/images/source_image'
    }
    vmProfile: {
      vmSize: 'Standard_D2s_v3'
    }
  }
  tags: {
    imagetemplate_tag1: 'IT_T1'
    imagetemplate_tag2: 'IT_T2'
  }
}
```
