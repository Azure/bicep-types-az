# Microsoft.Compute
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.compute/galleries

Create a community gallery.
```bicep
resource exampleResource 'Microsoft.Compute/galleries@2022-08-03' = {
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
resource exampleResource 'Microsoft.Compute/galleries@2022-08-03' = {
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
resource exampleResource 'Microsoft.Compute/galleries@2022-08-03' = {
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

Create or update a simple gallery.
```bicep
resource exampleResource 'Microsoft.Compute/galleries@2022-08-03' = {
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
resource exampleResource 'Microsoft.Compute/galleries/applications@2022-08-03' = {
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
resource exampleResource 'Microsoft.Compute/galleries/applications/versions@2022-08-03' = {
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
resource exampleResource 'Microsoft.Compute/galleries/images@2022-08-03' = {
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
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2022-08-03' = {
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
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2022-08-03' = {
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
    }
    storageProfile: {
      source: {
        id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}'
      }
    }
  }
}
```

Create or update a simple Gallery Image Version using mix of disks and snapshots as a source.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2022-08-03' = {
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

Create or update a simple Gallery Image Version using shallow replication mode.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2022-08-03' = {
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
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2022-08-03' = {
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
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2022-08-03' = {
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
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2022-08-03' = {
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
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2022-08-03' = {
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
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2022-08-03' = {
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
    }
    storageProfile: {
      source: {
        id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/virtualMachines/{vmName}'
      }
    }
  }
}
```

Create or update a simple gallery image version with target extended locations specified.
```bicep
resource exampleResource 'Microsoft.Compute/galleries/images/versions@2022-08-03' = {
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
    }
    storageProfile: {
      source: {
        id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}'
      }
    }
  }
}
```
