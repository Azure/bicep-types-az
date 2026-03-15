# Microsoft.Compute
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.compute/diskaccesses

Create a disk access resource.
```bicep
resource exampleResource 'Microsoft.Compute/diskAccesses@2021-12-01' = {
  name: 'example'
  location: 'West US'
}
```

## microsoft.compute/diskaccesses/privateendpointconnections

Approve a Private Endpoint Connection under a disk access resource.
```bicep
resource exampleResource 'Microsoft.Compute/diskAccesses/privateEndpointConnections@2021-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approving myPrivateEndpointConnection'
      status: 'Approved'
    }
  }
}
```

## microsoft.compute/diskencryptionsets

Create a disk encryption set with key vault from a different subscription.
```bicep
resource exampleResource 'Microsoft.Compute/diskEncryptionSets@2021-12-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'West US'
  properties: {
    activeKey: {
      keyUrl: 'https://myvaultdifferentsub.vault-int.azure-int.net/keys/{key}'
    }
    encryptionType: 'EncryptionAtRestWithCustomerKey'
  }
}
```

Create a disk encryption set.
```bicep
resource exampleResource 'Microsoft.Compute/diskEncryptionSets@2021-12-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'West US'
  properties: {
    activeKey: {
      keyUrl: 'https://myvmvault.vault-int.azure-int.net/keys/{key}'
      sourceVault: {
        id: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.KeyVault/vaults/myVMVault'
      }
    }
    encryptionType: 'EncryptionAtRestWithCustomerKey'
  }
}
```

## microsoft.compute/disks

Create a confidential VM supported disk encrypted with customer managed key
```bicep
resource exampleResource 'Microsoft.Compute/disks@2021-12-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'FromImage'
      imageReference: {
        id: '/Subscriptions/{subscriptionId}/Providers/Microsoft.Compute/Locations/westus/Publishers/{publisher}/ArtifactTypes/VMImage/Offers/{offer}/Skus/{sku}/Versions/1.0.0'
      }
    }
    osType: 'Windows'
    securityProfile: {
      secureVMDiskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName}'
      securityType: 'ConfidentialVM_DiskEncryptedWithCustomerKey'
    }
  }
}
```

Create a managed disk and associate with disk access resource.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2021-12-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Empty'
    }
    diskAccessId: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskAccesses/{existing-diskAccess-name}'
    diskSizeGB: 200
    networkAccessPolicy: 'AllowPrivate'
  }
}
```

Create a managed disk and associate with disk encryption set.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2021-12-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Empty'
    }
    diskSizeGB: 200
    encryption: {
      diskEncryptionSetId: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSets/{existing-diskEncryptionSet-name}'
    }
  }
}
```

Create a managed disk by copying a snapshot.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2021-12-01' = {
  name: 'example'
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
resource exampleResource 'Microsoft.Compute/disks@2021-12-01' = {
  name: 'example'
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
resource exampleResource 'Microsoft.Compute/disks@2021-12-01' = {
  name: 'example'
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
resource exampleResource 'Microsoft.Compute/disks@2021-12-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'FromImage'
      imageReference: {
        id: '/Subscriptions/{subscriptionId}/Providers/Microsoft.Compute/Locations/westus/Publishers/{publisher}/ArtifactTypes/VMImage/Offers/{offer}/Skus/{sku}/Versions/1.0.0'
      }
    }
    osType: 'Windows'
  }
}
```

Create a managed disk from an existing managed disk in the same or different subscription.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2021-12-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Copy'
      sourceResourceId: 'subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/myDisk1'
    }
  }
}
```

Create a managed disk from ImportSecure create option
```bicep
resource exampleResource 'Microsoft.Compute/disks@2021-12-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'ImportSecure'
      securityDataUri: 'https://mystorageaccount.blob.core.windows.net/osimages/vmgs.vhd'
      sourceUri: 'https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd'
      storageAccountId: 'subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/myStorageAccount'
    }
    osType: 'Windows'
    securityProfile: {
      securityType: 'ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey'
    }
  }
}
```

Create a managed disk from UploadPreparedSecure create option
```bicep
resource exampleResource 'Microsoft.Compute/disks@2021-12-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'UploadPreparedSecure'
      uploadSizeBytes: 10737418752
    }
    osType: 'Windows'
    securityProfile: {
      securityType: 'TrustedLaunch'
    }
  }
}
```

Create a managed disk with dataAccessAuthMode
```bicep
resource exampleResource 'Microsoft.Compute/disks@2021-12-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Empty'
    }
    dataAccessAuthMode: 'AzureActiveDirectory'
    diskSizeGB: 200
  }
}
```

Create a managed disk with security profile
```bicep
resource exampleResource 'Microsoft.Compute/disks@2021-12-01' = {
  name: 'example'
  location: 'North Central US'
  properties: {
    creationData: {
      createOption: 'FromImage'
      imageReference: {
        id: '/Subscriptions/{subscriptionId}/Providers/Microsoft.Compute/Locations/uswest/Publishers/Microsoft/ArtifactTypes/VMImage/Offers/{offer}'
      }
    }
    osType: 'Windows'
    securityProfile: {
      securityType: 'TrustedLaunch'
    }
  }
}
```

Create a managed disk with ssd zrs account type.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2021-12-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Empty'
    }
    diskSizeGB: 200
  }
  sku: {
    name: 'Premium_ZRS'
  }
}
```

Create a managed upload disk.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2021-12-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Upload'
      uploadSizeBytes: 10737418752
    }
  }
}
```

Create an empty managed disk in extended location.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2021-12-01' = {
  name: 'example'
  extendedLocation: {
    name: '{edge-zone-id}'
    type: 'EdgeZone'
  }
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Empty'
    }
    diskSizeGB: 200
  }
}
```

Create an empty managed disk.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2021-12-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Empty'
    }
    diskSizeGB: 200
  }
}
```

Create an ultra managed disk with logicalSectorSize 512E
```bicep
resource exampleResource 'Microsoft.Compute/disks@2021-12-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Empty'
      logicalSectorSize: 512
    }
    diskSizeGB: 200
  }
  sku: {
    name: 'UltraSSD_LRS'
  }
}
```

## microsoft.compute/snapshots

Create a snapshot by importing an unmanaged blob from a different subscription.
```bicep
resource exampleResource 'Microsoft.Compute/snapshots@2021-12-01' = {
  name: 'example'
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
resource exampleResource 'Microsoft.Compute/snapshots@2021-12-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Import'
      sourceUri: 'https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd'
    }
  }
}
```

Create a snapshot from an existing snapshot in the same or a different subscription in a different region.
```bicep
resource exampleResource 'Microsoft.Compute/snapshots@2021-12-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'CopyStart'
      sourceResourceId: 'subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot1'
    }
  }
}
```

Create a snapshot from an existing snapshot in the same or a different subscription.
```bicep
resource exampleResource 'Microsoft.Compute/snapshots@2021-12-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Copy'
      sourceResourceId: 'subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot1'
    }
  }
}
```
