# Microsoft.Compute
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.compute/diskaccesses

Create a disk access resource.
```bicep
resource exampleResource 'Microsoft.Compute/diskAccesses@2020-09-30' = {
  name: 'example'
  location: 'West US'
}
```

## microsoft.compute/diskaccesses/privateendpointconnections

Approve a Private Endpoint Connection under a disk access resource.
```bicep
resource exampleResource 'Microsoft.Compute/diskAccesses/privateEndpointConnections@2020-09-30' = {
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
resource exampleResource 'Microsoft.Compute/diskEncryptionSets@2020-09-30' = {
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
resource exampleResource 'Microsoft.Compute/diskEncryptionSets@2020-09-30' = {
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

Create a managed disk and associate with disk access resource.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2020-09-30' = {
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
resource exampleResource 'Microsoft.Compute/disks@2020-09-30' = {
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
resource exampleResource 'Microsoft.Compute/disks@2020-09-30' = {
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
resource exampleResource 'Microsoft.Compute/disks@2020-09-30' = {
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
resource exampleResource 'Microsoft.Compute/disks@2020-09-30' = {
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
resource exampleResource 'Microsoft.Compute/disks@2020-09-30' = {
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
resource exampleResource 'Microsoft.Compute/disks@2020-09-30' = {
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

Create a managed upload disk.
```bicep
resource exampleResource 'Microsoft.Compute/disks@2020-09-30' = {
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
resource exampleResource 'Microsoft.Compute/disks@2020-09-30' = {
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
resource exampleResource 'Microsoft.Compute/disks@2020-09-30' = {
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
resource exampleResource 'Microsoft.Compute/disks@2020-09-30' = {
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

## microsoft.compute/galleries

Create or update a simple gallery with sharing profile.
```bicep
resource exampleResource 'Microsoft.Compute/galleries@2020-09-30' = {
  name: 'example'
  location: 'West US'
  properties: {
    description: 'This is the gallery description.'
    sharingProfile: {
      permissions: 'Groups'
    }
  }
}
```

Create or update a simple gallery.
```bicep
resource exampleResource 'Microsoft.Compute/galleries@2020-09-30' = {
  name: 'example'
  location: 'West US'
  properties: {
    description: 'This is the gallery description.'
  }
}
```

## microsoft.compute/galleries/applications

Create or update a simple gallery Application.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/applications@2020-09-30' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    description: 'This is the gallery application description.'
    eula: 'This is the gallery application EULA.'
    privacyStatementUri: 'myPrivacyStatementUri}'
    releaseNoteUri: 'myReleaseNoteUri'
    supportedOSType: 'Windows'
  }
}
```

## microsoft.compute/galleries/applications/versions

Create or update a simple gallery Application Version.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/applications/versions@2020-09-30' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    publishingProfile: {
      endOfLifeDate: '2019-07-01T07:00:00Z'
      manageActions: {
        install: 'powershell -command "Expand-Archive -Path package.zip -DestinationPath C:\\package"'
        remove: 'del C:\\package '
      }
      replicaCount: 1
      source: {
        mediaLink: 'https://mystorageaccount.blob.core.windows.net/mycontainer/package.zip?{sasKey}'
      }
      storageAccountType: 'Standard_LRS'
      targetRegions: [
        {
          name: 'West US'
          regionalReplicaCount: 1
          storageAccountType: 'Standard_LRS'
        }
      ]
    }
  }
}
```

## microsoft.compute/galleries/images

Create or update a simple gallery image.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/images@2020-09-30' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    hyperVGeneration: 'V1'
    identifier: {
      offer: 'myOfferName'
      publisher: 'myPublisherName'
      sku: 'mySkuName'
    }
    osState: 'Generalized'
    osType: 'Windows'
  }
}
```

## microsoft.compute/galleries/images/versions

Create or update a simple Gallery Image Version (Managed Image as source).
```bicep
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2020-09-30' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    publishingProfile: {
      targetRegions: [
        {
          name: 'West US'
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherDiskEncryptionSet'
                lun: 0
              }
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myDiskEncryptionSet'
                lun: 1
              }
            ]
            osDiskImage: {
              diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myDiskEncryptionSet'
            }
          }
          regionalReplicaCount: 1
        }
        {
          name: 'East US'
          regionalReplicaCount: 2
          storageAccountType: 'Standard_ZRS'
        }
      ]
    }
    storageProfile: {
      source: {
        id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}'
      }
    }
  }
}
```

Create or update a simple Gallery Image Version using snapshots as a source.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2020-09-30' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    publishingProfile: {
      targetRegions: [
        {
          name: 'West US'
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherDiskEncryptionSet'
                lun: 1
              }
            ]
            osDiskImage: {
              diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myDiskEncryptionSet'
            }
          }
          regionalReplicaCount: 1
        }
        {
          name: 'East US'
          regionalReplicaCount: 2
          storageAccountType: 'Standard_ZRS'
        }
      ]
    }
    storageProfile: {
      dataDiskImages: [
        {
          hostCaching: 'None'
          lun: 1
          source: {
            id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/snapshots/{diskSnapshotName}'
          }
        }
      ]
      osDiskImage: {
        hostCaching: 'ReadOnly'
        source: {
          id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/snapshots/{snapshotName}'
        }
      }
    }
  }
}
```

Create or update a simple Gallery Image Version using vhd as a source.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2020-09-30' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    publishingProfile: {
      targetRegions: [
        {
          name: 'West US'
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherDiskEncryptionSet'
                lun: 1
              }
            ]
            osDiskImage: {
              diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myDiskEncryptionSet'
            }
          }
          regionalReplicaCount: 1
        }
        {
          name: 'East US'
          regionalReplicaCount: 2
          storageAccountType: 'Standard_ZRS'
        }
      ]
    }
    storageProfile: {
      source: {
        id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Storage/storageAccounts/{storageAccount}'
        uri: 'https://gallerysourcencus.blob.core.windows.net/myvhds/Windows-Server-2012-R2-20171216-en.us-128GB.vhd'
      }
    }
  }
}
```

## microsoft.compute/snapshots

Create a snapshot by importing an unmanaged blob from a different subscription.
```bicep
resource exampleResource 'Microsoft.Compute/snapshots@2020-09-30' = {
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
resource exampleResource 'Microsoft.Compute/snapshots@2020-09-30' = {
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

Create a snapshot from an existing snapshot in the same or a different subscription.
```bicep
resource exampleResource 'Microsoft.Compute/snapshots@2020-09-30' = {
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
