# Microsoft.Compute

## microsoft.compute/disks

Create a managed disk by copying a snapshot.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2018-09-30' = {
  name: 'example'
  name: 'myDisk'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Copy'
      sourceResourceId: 'subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot'
    }
  }
}
```

Create a managed disk by importing an unmanaged blob from a different subscription.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2018-09-30' = {
  name: 'example'
  name: 'myDisk'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Import'
      sourceUri: 'https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd'
      storageAccountId: 'subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/myStorageAccount'
    }
  }
}
```

Create a managed disk by importing an unmanaged blob from the same subscription.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2018-09-30' = {
  name: 'example'
  name: 'myDisk'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Import'
      sourceUri: 'https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd'
    }
  }
}
```

Create a managed disk from a platform image.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2018-09-30' = {
  name: 'example'
  name: 'myDisk'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'FromImage'
      imageReference: {
        id: '/Subscriptions/{subscriptionId}/Providers/Microsoft.Compute/Locations/uswest/Publishers/Microsoft/ArtifactTypes/VMImage/Offers/{offer}'
      }
    }
    osType: 'Windows'
  }
}
```

Create a managed disk from an existing managed disk in the same or different subscription.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2018-09-30' = {
  name: 'example'
  name: 'myDisk2'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Copy'
      sourceResourceId: 'subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/myDisk1'
    }
  }
}
```

Create an empty managed disk.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2018-09-30' = {
  name: 'example'
  name: 'myDisk'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Empty'
    }
    diskSizeGB: 200
  }
}
```

## microsoft.compute/snapshots

Create a snapshot by importing an unmanaged blob from a different subscription.
```bicep
resource exampleResource 'Microsoft.Compute/snapshots@2018-09-30' = {
  name: 'example'
  name: 'mySnapshot1'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Import'
      sourceUri: 'https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd'
      storageAccountId: 'subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/myStorageAccount'
    }
  }
}
```

Create a snapshot by importing an unmanaged blob from the same subscription.
```bicep
resource exampleResource 'Microsoft.Compute/snapshots@2018-09-30' = {
  name: 'example'
  name: 'mySnapshot1'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Import'
      sourceUri: 'https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd'
    }
  }
}
```

Create a snapshot from an existing snapshot in the same or a different subscription.
```bicep
resource exampleResource 'Microsoft.Compute/snapshots@2018-09-30' = {
  name: 'example'
  name: 'mySnapshot2'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Copy'
      sourceResourceId: 'subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot1'
    }
  }
}
```
