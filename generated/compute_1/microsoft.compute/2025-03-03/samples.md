# Microsoft.Compute
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.compute/galleries

Create a community gallery.
```bicep
resource exampleResource 'Microsoft.Compute/galleries@2025-03-03' = {
  name: 'example'
  location: 'West US'
  properties: {
    description: 'This is the gallery description.'
    sharingProfile: {
      communityGalleryInfo: {
        eula: 'eula'
        publicNamePrefix: 'PirPublic'
        publisherContact: 'pir@microsoft.com'
        publisherUri: 'uri'
      }
      permissions: 'Community'
    }
  }
}
```

Create or update a simple gallery with sharing profile.
```bicep
resource exampleResource 'Microsoft.Compute/galleries@2025-03-03' = {
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

Create or update a simple gallery with soft deletion enabled.
```bicep
resource exampleResource 'Microsoft.Compute/galleries@2025-03-03' = {
  name: 'example'
  location: 'West US'
  properties: {
    description: 'This is the gallery description.'
    softDeletePolicy: {
      isSoftDeleteEnabled: true
    }
  }
}
```

Create or update a simple gallery with system-assigned and user-assigned managed identities.
```bicep
resource exampleResource 'Microsoft.Compute/galleries@2025-03-03' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myIdentity': {
      }
    }
  }
  location: 'West US'
  properties: {
    description: 'This is the gallery description.'
  }
}
```

Create or update a simple gallery.
```bicep
resource exampleResource 'Microsoft.Compute/galleries@2025-03-03' = {
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
resource exampleResource 'Microsoft.Compute/galleries/applications@2025-03-03' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    description: 'This is the gallery application description.'
    customActions: [
      {
        name: 'myCustomAction'
        description: 'This is the custom action description.'
        parameters: [
          {
            name: 'myCustomActionParameter'
            type: 'String'
            description: 'This is the description of the parameter'
            defaultValue: 'default value of parameter.'
            required: false
          }
        ]
        script: 'myCustomActionScript'
      }
    ]
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
resource exampleResource 'Microsoft.Compute/galleries/applications/versions@2025-03-03' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    publishingProfile: {
      customActions: [
        {
          name: 'myCustomAction'
          description: 'This is the custom action description.'
          parameters: [
            {
              name: 'myCustomActionParameter'
              type: 'String'
              description: 'This is the description of the parameter'
              defaultValue: 'default value of parameter.'
              required: false
            }
          ]
          script: 'myCustomActionScript'
        }
      ]
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
          excludeFromLatest: false
          regionalReplicaCount: 1
          storageAccountType: 'Standard_LRS'
        }
      ]
    }
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false
    }
  }
}
```

## microsoft.compute/galleries/images

Create or update a simple gallery image.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/images@2025-03-03' = {
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

Create or update a simple Gallery Image Version using community gallery image as source.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2025-03-03' = {
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
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherWestUSDiskEncryptionSet'
                lun: 0
              }
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet'
                lun: 1
              }
            ]
            osDiskImage: {
              diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet'
            }
          }
          excludeFromLatest: false
          regionalReplicaCount: 1
        }
        {
          name: 'East US'
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherEastUSDiskEncryptionSet'
                lun: 0
              }
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet'
                lun: 1
              }
            ]
            osDiskImage: {
              diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet'
            }
          }
          excludeFromLatest: false
          regionalReplicaCount: 2
          storageAccountType: 'Standard_ZRS'
        }
      ]
    }
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false
      blockDeletionBeforeEndOfLife: false
    }
    storageProfile: {
      source: {
        communityGalleryImageId: '/communityGalleries/{communityGalleryName}/images/{communityGalleryImageName}'
      }
    }
  }
}
```

Create or update a simple Gallery Image Version using managed image as source.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2025-03-03' = {
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
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherWestUSDiskEncryptionSet'
                lun: 0
              }
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet'
                lun: 1
              }
            ]
            osDiskImage: {
              diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet'
            }
          }
          excludeFromLatest: false
          regionalReplicaCount: 1
        }
        {
          name: 'East US'
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherEastUSDiskEncryptionSet'
                lun: 0
              }
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet'
                lun: 1
              }
            ]
            osDiskImage: {
              diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet'
            }
          }
          excludeFromLatest: false
          regionalReplicaCount: 2
          storageAccountType: 'Standard_ZRS'
        }
      ]
    }
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false
      blockDeletionBeforeEndOfLife: false
    }
    storageProfile: {
      source: {
        id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}'
      }
    }
  }
}
```

Create or update a simple Gallery Image Version using shallow replication mode.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2025-03-03' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    publishingProfile: {
      replicationMode: 'Shallow'
      targetRegions: [
        {
          name: 'West US'
          excludeFromLatest: false
          regionalReplicaCount: 1
        }
      ]
    }
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false
      blockDeletionBeforeEndOfLife: false
    }
    storageProfile: {
      source: {
        id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}'
      }
    }
  }
}
```

Create or update a simple Gallery Image Version using shared image as source.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2025-03-03' = {
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
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherWestUSDiskEncryptionSet'
                lun: 0
              }
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet'
                lun: 1
              }
            ]
            osDiskImage: {
              diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet'
            }
          }
          excludeFromLatest: false
          regionalReplicaCount: 1
        }
        {
          name: 'East US'
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherEastUSDiskEncryptionSet'
                lun: 0
              }
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet'
                lun: 1
              }
            ]
            osDiskImage: {
              diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet'
            }
          }
          excludeFromLatest: false
          regionalReplicaCount: 2
          storageAccountType: 'Standard_ZRS'
        }
      ]
    }
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false
      blockDeletionBeforeEndOfLife: false
    }
    storageProfile: {
      source: {
        id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/galleries/{galleryName}/images/{imageDefinitionName}/versions/{versionName}'
      }
    }
  }
}
```

Create or update a simple Gallery Image Version using snapshots as a source.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2025-03-03' = {
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
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet'
                lun: 1
              }
            ]
            osDiskImage: {
              diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet'
            }
          }
          excludeFromLatest: false
          regionalReplicaCount: 1
        }
        {
          name: 'East US'
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet'
                lun: 1
              }
            ]
            osDiskImage: {
              diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet'
            }
          }
          excludeFromLatest: false
          regionalReplicaCount: 2
          storageAccountType: 'Standard_ZRS'
        }
      ]
    }
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false
      blockDeletionBeforeEndOfLife: false
    }
    storageProfile: {
      dataDiskImages: [
        {
          hostCaching: 'None'
          lun: 1
          source: {
            id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/disks/{dataDiskName}'
          }
        }
      ]
      osDiskImage: {
        hostCaching: 'ReadOnly'
        source: {
          id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/snapshots/{osSnapshotName}'
        }
      }
    }
  }
}
```

Create or update a simple Gallery Image Version using vhd as a source with custom UEFI keys.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2025-03-03' = {
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
          excludeFromLatest: false
          regionalReplicaCount: 1
        }
        {
          name: 'East US'
          excludeFromLatest: false
          regionalReplicaCount: 2
          storageAccountType: 'Standard_ZRS'
        }
      ]
    }
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false
      blockDeletionBeforeEndOfLife: false
    }
    securityProfile: {
      uefiSettings: {
        additionalSignatures: {
          db: [
            {
              type: 'x509'
              value: [
                '<x509 value>'
              ]
            }
          ]
          dbx: [
            {
              type: 'x509'
              value: [
                '<x509 value>'
              ]
            }
          ]
          kek: [
            {
              type: 'sha256'
              value: [
                '<sha256 value>'
              ]
            }
          ]
        }
        signatureTemplateNames: [
          'MicrosoftUefiCertificateAuthorityTemplate'
        ]
      }
    }
    storageProfile: {
      dataDiskImages: [
        {
          hostCaching: 'None'
          lun: 1
          source: {
            storageAccountId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/{storageAccount}'
            uri: 'https://gallerysourcencus.blob.core.windows.net/myvhds/Windows-Server-2012-R2-20171216-en.us-128GB.vhd'
          }
        }
      ]
      osDiskImage: {
        hostCaching: 'ReadOnly'
        source: {
          storageAccountId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/{storageAccount}'
          uri: 'https://gallerysourcencus.blob.core.windows.net/myvhds/Windows-Server-2012-R2-20171216-en.us-128GB.vhd'
        }
      }
    }
  }
}
```

Create or update a simple Gallery Image Version using vhd as a source.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2025-03-03' = {
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
          excludeFromLatest: false
          regionalReplicaCount: 1
        }
        {
          name: 'East US'
          excludeFromLatest: false
          regionalReplicaCount: 2
          storageAccountType: 'Standard_ZRS'
        }
      ]
    }
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false
      blockDeletionBeforeEndOfLife: false
    }
    storageProfile: {
      dataDiskImages: [
        {
          hostCaching: 'None'
          lun: 1
          source: {
            storageAccountId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/{storageAccount}'
            uri: 'https://gallerysourcencus.blob.core.windows.net/myvhds/Windows-Server-2012-R2-20171216-en.us-128GB.vhd'
          }
        }
      ]
      osDiskImage: {
        hostCaching: 'ReadOnly'
        source: {
          storageAccountId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/{storageAccount}'
          uri: 'https://gallerysourcencus.blob.core.windows.net/myvhds/Windows-Server-2012-R2-20171216-en.us-128GB.vhd'
        }
      }
    }
  }
}
```

Create or update a simple Gallery Image Version using VM as source.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2025-03-03' = {
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
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherWestUSDiskEncryptionSet'
                lun: 0
              }
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet'
                lun: 1
              }
            ]
            osDiskImage: {
              diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet'
            }
          }
          excludeFromLatest: false
          regionalReplicaCount: 2
        }
        {
          name: 'East US'
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherEastUSDiskEncryptionSet'
                lun: 0
              }
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet'
                lun: 1
              }
            ]
            osDiskImage: {
              diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet'
            }
          }
          excludeFromLatest: false
          regionalReplicaCount: 2
          storageAccountType: 'Standard_ZRS'
        }
      ]
    }
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false
      blockDeletionBeforeEndOfLife: false
    }
    storageProfile: {
      source: {
        virtualMachineId: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/virtualMachines/{vmName}'
      }
    }
  }
}
```

Create or update a simple Gallery Image Version with Direct Drive replicas
```bicep
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2025-03-03' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    publishingProfile: {
      targetRegions: [
        {
          name: 'West US'
          additionalReplicaSets: [
            {
              regionalReplicaCount: 1
              storageAccountType: 'PreviumV2_LRS'
            }
          ]
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherWestUSDiskEncryptionSet'
                lun: 0
              }
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet'
                lun: 1
              }
            ]
            osDiskImage: {
              diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet'
            }
          }
          excludeFromLatest: false
          regionalReplicaCount: 1
        }
        {
          name: 'East US'
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherEastUSDiskEncryptionSet'
                lun: 0
              }
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet'
                lun: 1
              }
            ]
            osDiskImage: {
              diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet'
            }
          }
          excludeFromLatest: false
          regionalReplicaCount: 2
          storageAccountType: 'Standard_ZRS'
        }
      ]
    }
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false
    }
    storageProfile: {
      source: {
        id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}'
      }
    }
  }
}
```

Create or update a simple Gallery Image Version with StorageAccountStrategy and regional StorageAccountType override.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2025-03-03' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    publishingProfile: {
      storageAccountStrategy: 'PreferStandard_ZRS'
      targetRegions: [
        {
          name: 'West US'
        }
        {
          name: 'East US'
        }
        {
          name: 'East US 2'
          storageAccountType: 'Premium_LRS'
        }
      ]
    }
    storageProfile: {
      source: {
        virtualMachineId: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/virtualMachines/{vmName}'
      }
    }
  }
}
```

Create or update a simple gallery image version with target extended locations specified.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2025-03-03' = {
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
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherWestUSDiskEncryptionSet'
                lun: 0
              }
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet'
                lun: 1
              }
            ]
            osDiskImage: {
              diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet'
            }
          }
          excludeFromLatest: false
          regionalReplicaCount: 1
        }
        {
          name: 'East US'
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherEastUSDiskEncryptionSet'
                lun: 0
              }
              {
                diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet'
                lun: 1
              }
            ]
            osDiskImage: {
              diskEncryptionSetId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet'
            }
          }
          excludeFromLatest: false
          regionalReplicaCount: 2
          storageAccountType: 'Standard_ZRS'
        }
      ]
    }
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false
      blockDeletionBeforeEndOfLife: false
    }
    storageProfile: {
      source: {
        id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}'
      }
    }
  }
}
```

## microsoft.compute/galleries/invmaccesscontrolprofiles

Create or update a gallery inVMAccessControlProfile.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/inVMAccessControlProfiles@2025-03-03' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    applicableHostEndpoint: 'WireServer'
    osType: 'Linux'
  }
}
```

## microsoft.compute/galleries/invmaccesscontrolprofiles/versions

Create or update a Gallery InVMAccessControlProfile Version.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/inVMAccessControlProfiles/versions@2025-03-03' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    defaultAccess: 'Allow'
    excludeFromLatest: false
    mode: 'Audit'
    rules: {
      identities: [
        {
          name: 'WinPA'
          exePath: 'C:\\Windows\\System32\\cscript.exe'
          groupName: 'Administrators'
          processName: 'cscript'
          userName: 'SYSTEM'
        }
      ]
      privileges: [
        {
          name: 'GoalState'
          path: '/machine'
          queryParameters: {
            comp: 'goalstate'
          }
        }
      ]
      roleAssignments: [
        {
          identities: [
            'WinPA'
          ]
          role: 'Provisioning'
        }
      ]
      roles: [
        {
          name: 'Provisioning'
          privileges: [
            'GoalState'
          ]
        }
      ]
    }
    targetLocations: [
      {
        name: 'West US'
      }
      {
        name: 'South Central US'
      }
    ]
  }
}
```

## microsoft.compute/galleries/scripts

Create or update a simple gallery Script.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/scripts@2025-03-03' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    description: 'This is the gallery script description.'
    eula: 'This is the gallery script EULA.'
    privacyStatementUri: '{myPrivacyStatementUri}'
    releaseNoteUri: '{myReleaseNoteUri}'
    supportedOSType: 'Windows'
  }
}
```

## microsoft.compute/galleries/scripts/versions

Create or update a simple gallery Script Version.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/scripts/versions@2025-03-03' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    publishingProfile: {
      endOfLifeDate: '2027-07-01T07:00:00Z'
      replicaCount: 2
      source: {
        parameters: [
          {
            name: 'location'
            type: 'String'
            defaultValue: 'westus'
            required: true
          }
          {
            name: 'myGalleryScriptParameter1'
            type: 'String'
            description: 'description of the parameter'
            defaultValue: 'default value of parameter'
            required: true
          }
          {
            name: 'myGalleryScriptParameter2'
            type: 'String'
            description: 'description of the parameter'
            defaultValue: 'default value of parameter'
            required: false
          }
          {
            name: 'numberOfUnits'
            type: 'Int'
            description: 'description of the parameter'
            defaultValue: '3'
            maxValue: '5'
            minValue: '1'
            required: true
          }
          {
            name: 'weightOfUnit'
            type: 'Double'
            description: 'description of the parameter'
            defaultValue: '0.6'
            maxValue: '2'
            minValue: '0.1'
            required: true
          }
          {
            name: 'typeOfProduct'
            type: 'Enum'
            description: 'description of the parameter'
            defaultValue: 'Fruit'
            enumValues: [
              'Fruit'
              'Vegetable'
              'Greens'
              'Nuts'
            ]
            required: false
          }
        ]
        scriptLink: 'https://mystorageaccount.blob.core.windows.net/mycontainer/myScript.ps1?{sasKey}'
      }
      storageAccountType: 'Standard_LRS'
      targetRegions: [
        {
          name: 'West US'
          excludeFromLatest: false
          regionalReplicaCount: 2
          storageAccountType: 'Standard_LRS'
        }
      ]
    }
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false
    }
  }
}
```
