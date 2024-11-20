# Microsoft.SecretSyncController

## microsoft.secretsynccontroller/azurekeyvaultsecretproviderclasses

AzureKeyVaultSecretProviderClasses_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SecretSyncController/azureKeyVaultSecretProviderClasses@2024-08-21-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg-ssc-example/providers/Microsoft.ExtendedLocation/customLocations/example-custom-location'
    type: 'CustomLocation'
  }
  location: 'eastus'
  properties: {
    clientId: '00000000-0000-0000-0000-000000000000'
    keyvaultName: 'example-ssc-key-vault'
    tenantId: '00000000-0000-0000-0000-000000000000'
    objects: 'array: |\n  - |\n    objectName: my-secret-object\n    objectType: secret\n    objectVersionHistory: 1'
  }
  tags: {
    example-tag: 'example-tag-value'
  }
}
```

## microsoft.secretsynccontroller/secretsyncs

SecretSyncs_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SecretSyncController/secretSyncs@2024-08-21-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg-ssc-example/providers/Microsoft.ExtendedLocation/customLocations/example-custom-location'
    type: 'CustomLocation'
  }
  location: 'eastus'
  properties: {
    kubernetesSecretType: 'Opaque'
    objectSecretMapping: [
      {
        sourcePath: 'kv-secret-name/0'
        targetKey: 'kv-secret-name/0'
      }
    ]
    secretProviderClassName: 'akvspc-ssc-example'
    serviceAccountName: 'example-k8s-sa-name'
  }
  tags: {
    example-tag: 'example-tag-value'
  }
}
```
