# Microsoft.RecoveryServices
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.recoveryservices/vaults/replicationalertsettings

Configures email notifications for this vault.
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/replicationAlertSettings@2016-08-10' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customEmailAddresses: [
      'ronehr@microsoft.com'
    ]
    locale: ''
    sendToOwners: 'false'
  }
}
```

## microsoft.recoveryservices/vaults/replicationfabrics

Creates an Azure Site Recovery fabric.
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/replicationFabrics@2016-08-10' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customDetails: {
      instanceType: 'FabricSpecificCreationInput'
    }
  }
}
```

## microsoft.recoveryservices/vaults/replicationfabrics/replicationnetworks/replicationnetworkmappings

Creates network mapping.
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings@2016-08-10' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fabricSpecificDetails: {
      instanceType: 'VmmToAzure'
    }
    recoveryFabricName: 'Microsoft Azure'
    recoveryNetworkId: '/subscriptions/c183865e-6077-46f2-a3b1-deb0f4f4650a/resourceGroups/siterecoveryProd1/providers/Microsoft.Network/virtualNetworks/vnetavrai'
  }
}
```

## microsoft.recoveryservices/vaults/replicationfabrics/replicationprotectioncontainers

Create a protection container.
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers@2016-08-10' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSpecificInput: [
      {
        instanceType: 'ReplicationProviderSpecificContainerCreationInput'
      }
    ]
  }
}
```

## microsoft.recoveryservices/vaults/replicationfabrics/replicationprotectioncontainers/replicationprotecteditems

Enables protection.
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems@2016-08-10' = {
  parent: parentResource 
  name: 'example'
  properties: {
    policyId: '/Subscriptions/c183865e-6077-46f2-a3b1-deb0f4f4650a/resourceGroups/resourceGroupPS1/providers/Microsoft.RecoveryServices/vaults/vault1/replicationPolicies/protectionprofile1'
    protectableItemId: '/Subscriptions/c183865e-6077-46f2-a3b1-deb0f4f4650a/resourceGroups/resourceGroupPS1/providers/Microsoft.RecoveryServices/vaults/vault1/replicationFabrics/cloud1/replicationProtectionContainers/cloud_6d224fc6-f326-5d35-96de-fbf51efb3179/replicationProtectableItems/f8491e4f-817a-40dd-a90c-af773978c75b'
    providerSpecificDetails: {
      instanceType: 'HyperVReplicaAzure'
    }
  }
}
```

## microsoft.recoveryservices/vaults/replicationfabrics/replicationprotectioncontainers/replicationprotectioncontainermappings

Create protection container mapping.
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings@2016-08-10' = {
  parent: parentResource 
  name: 'example'
  properties: {
    PolicyId: '/Subscriptions/c183865e-6077-46f2-a3b1-deb0f4f4650a/resourceGroups/resourceGroupPS1/providers/Microsoft.RecoveryServices/vaults/vault1/replicationPolicies/protectionprofile1'
    providerSpecificInput: {
    }
    targetProtectionContainerId: 'Microsoft Azure'
  }
}
```

## microsoft.recoveryservices/vaults/replicationfabrics/replicationstorageclassifications/replicationstorageclassificationmappings

Create storage classification mapping.
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings@2016-08-10' = {
  parent: parentResource 
  name: 'example'
  properties: {
    targetStorageClassificationId: '/Subscriptions/9112a37f-0f3e-46ec-9c00-060c6edca071/resourceGroups/resourceGroupPS1/providers/Microsoft.RecoveryServices/vaults/vault1/replicationFabrics/2a48e3770ac08aa2be8bfbd94fcfb1cbf2dcc487b78fb9d3bd778304441b06a0/replicationStorageClassifications/8891569e-aaef-4a46-a4a0-78c14f2d7b09'
  }
}
```

## microsoft.recoveryservices/vaults/replicationfabrics/replicationvcenters

Add vCenter.
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters@2016-08-10' = {
  parent: parentResource 
  name: 'example'
  properties: {
    friendlyName: 'esx-78'
    ipAddress: 'inmtest78'
    port: '443'
    processServerId: '5A720CAB-39CB-F445-BD1662B0B33164B5'
    runAsAccountId: '2'
  }
}
```

## microsoft.recoveryservices/vaults/replicationpolicies

Creates the policy.
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/replicationPolicies@2016-08-10' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSpecificInput: {
      instanceType: 'HyperVReplicaAzure'
    }
  }
}
```

## microsoft.recoveryservices/vaults/replicationrecoveryplans

Creates a recovery plan with the given details.
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/replicationRecoveryPlans@2016-08-10' = {
  parent: parentResource 
  name: 'example'
  properties: {
    failoverDeploymentModel: 'ResourceManager'
    groups: [
      {
        endGroupActions: [
        ]
        groupType: 'Boot'
        replicationProtectedItems: [
          {
            id: '/Subscriptions/c183865e-6077-46f2-a3b1-deb0f4f4650a/resourceGroups/resourceGroupPS1/providers/Microsoft.RecoveryServices/vaults/vault1/replicationFabrics/cloud1/replicationProtectionContainers/cloud_6d224fc6-f326-5d35-96de-fbf51efb3179/replicationProtectedItems/f8491e4f-817a-40dd-a90c-af773978c75b'
            virtualMachineId: 'f8491e4f-817a-40dd-a90c-af773978c75b'
          }
        ]
        startGroupActions: [
        ]
      }
    ]
    primaryFabricId: '/Subscriptions/c183865e-6077-46f2-a3b1-deb0f4f4650a/resourceGroups/resourceGroupPS1/providers/Microsoft.RecoveryServices/vaults/vault1/replicationFabrics/cloud1'
    recoveryFabricId: 'Microsoft Azure'
  }
}
```
