# Microsoft.Compute
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.compute/diskaccesses

create a disk access resource.
```bicep
resource exampleResource 'Microsoft.Compute/diskAccesses@2025-01-02' = {
  name: 'example'
  location: 'West US'
}
```

## microsoft.compute/diskaccesses/privateendpointconnections

approve a Private Endpoint Connection under a disk access resource.
```bicep
resource exampleResource 'Microsoft.Compute/diskAccesses/privateEndpointConnections@2025-01-02' = {
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

create a disk encryption set with key vault from a different subscription.
```bicep
resource exampleResource 'Microsoft.Compute/diskEncryptionSets@2025-01-02' = {
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

create a disk encryption set with key vault from a different tenant.
```bicep
resource exampleResource 'Microsoft.Compute/diskEncryptionSets@2025-01-02' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}': {
      }
    }
  }
  location: 'West US'
  properties: {
    activeKey: {
      keyUrl: 'https://myvaultdifferenttenant.vault-int.azure-int.net/keys/{key}'
    }
    encryptionType: 'EncryptionAtRestWithCustomerKey'
    federatedClientId: '00000000-0000-0000-0000-000000000000'
  }
}
```

create a disk encryption set.
```bicep
resource exampleResource 'Microsoft.Compute/diskEncryptionSets@2025-01-02' = {
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

create a confidential VM supported disk encrypted with customer managed key
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
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

create a managed disk and associate with disk access resource.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
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

create a managed disk and associate with disk encryption set.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
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

create a managed disk by copying a snapshot.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
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

create a managed disk by importing an unmanaged blob from a different subscription.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
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

create a managed disk by importing an unmanaged blob from the same subscription.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
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

create a managed disk from a platform image.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
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

create a managed disk from an Azure Compute Gallery community image.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'FromImage'
      galleryImageReference: {
        communityGalleryImageId: '/CommunityGalleries/{communityGalleryPublicGalleryName}/Images/{imageName}/Versions/1.0.0'
      }
    }
    osType: 'Windows'
  }
}
```

create a managed disk from an Azure Compute Gallery direct shared image.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'FromImage'
      galleryImageReference: {
        sharedGalleryImageId: '/SharedGalleries/{sharedGalleryUniqueName}/Images/{imageName}/Versions/1.0.0'
      }
    }
    osType: 'Windows'
  }
}
```

create a managed disk from an Azure Compute Gallery image.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'FromImage'
      galleryImageReference: {
        id: '/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Providers/Microsoft.Compute/Galleries/{galleryName}/Images/{imageName}/Versions/1.0.0'
      }
    }
    osType: 'Windows'
  }
}
```

create a managed disk from an existing managed disk in the same or different subscription.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
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

create a managed disk from elastic san volume snapshot.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'CopyFromSanSnapshot'
      elasticSanResourceId: 'subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.ElasticSan/elasticSans/myElasticSan/volumegroups/myElasticSanVolumeGroup/snapshots/myElasticSanVolumeSnapshot'
    }
  }
}
```

create a managed disk from ImportSecure create option
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
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

create a managed disk from ImportSecure create option with metadata URI for Confidential VM.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'ImportSecure'
      securityDataUri: 'https://mystorageaccount.blob.core.windows.net/osimages/vmgs.vhd'
      securityMetadataUri: 'https://mystorageaccount.blob.core.windows.net/osimages/vmmd.vhd'
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

create a managed disk from UploadPreparedSecure create option
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
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

create a managed disk with availability policy.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
  name: 'example'
  location: 'West US'
  properties: {
    availabilityPolicy: {
      actionOnDiskDelay: 'AutomaticReattach'
    }
    creationData: {
      createOption: 'Empty'
    }
    diskSizeGB: 1024
  }
}
```

create a managed disk with dataAccessAuthMode
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
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

create a managed disk with optimizedForFrequentAttach.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Empty'
    }
    diskSizeGB: 200
    optimizedForFrequentAttach: true
  }
}
```

create a managed disk with performancePlus.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Upload'
      performancePlus: true
    }
  }
}
```

create a managed disk with premium v2 account type.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Empty'
    }
    diskIOPSReadWrite: 125
    diskMBpsReadWrite: 3000
    diskSizeGB: 200
  }
  sku: {
    name: 'PremiumV2_LRS'
  }
}
```

create a managed disk with security profile
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
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

create a managed disk with ssd zrs account type.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
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

create a managed disk with ultra account type with readOnly property set.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Empty'
      logicalSectorSize: 4096
    }
    diskIOPSReadWrite: 125
    diskMBpsReadWrite: 3000
    diskSizeGB: 200
    encryption: {
      type: 'EncryptionAtRestWithPlatformKey'
    }
  }
  sku: {
    name: 'UltraSSD_LRS'
  }
}
```

create a managed upload disk.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
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

create an empty managed disk in extended location.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
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

create an empty managed disk.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
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

create an ultra managed disk with logicalSectorSize 512E
```bicep
resource exampleResource 'Microsoft.Compute/disks@2025-01-02' = {
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
resource exampleResource 'Microsoft.Compute/snapshots@2025-01-02' = {
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
resource exampleResource 'Microsoft.Compute/snapshots@2025-01-02' = {
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

Create a snapshot from an elastic san volume snapshot.
```bicep
resource exampleResource 'Microsoft.Compute/snapshots@2025-01-02' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'CopyFromSanSnapshot'
      elasticSanResourceId: 'subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.ElasticSan/elasticSans/myElasticSan/volumegroups/myElasticSanVolumeGroup/snapshots/myElasticSanVolumeSnapshot'
    }
  }
}
```

Create a snapshot from an existing snapshot in the same or a different subscription in a different region with quicker copy speed.
```bicep
resource exampleResource 'Microsoft.Compute/snapshots@2025-01-02' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'CopyStart'
      provisionedBandwidthCopySpeed: 'Enhanced'
      sourceResourceId: 'subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot1'
    }
  }
}
```

Create a snapshot from an existing snapshot in the same or a different subscription in a different region.
```bicep
resource exampleResource 'Microsoft.Compute/snapshots@2025-01-02' = {
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
resource exampleResource 'Microsoft.Compute/snapshots@2025-01-02' = {
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

create a snapshot which can be instantly accessable.
```bicep
resource exampleResource 'Microsoft.Compute/snapshots@2025-01-02' = {
  name: 'example'
  location: 'West US'
  properties: {
    creationData: {
      createOption: 'Copy'
      instantAccessDurationMinutes: 120
      sourceResourceId: 'subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/myDisk1'
    }
  }
}
```
