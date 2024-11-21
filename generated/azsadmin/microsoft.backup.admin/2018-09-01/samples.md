# Microsoft.Backup.Admin
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.backup.admin/backuplocations

Update new backup location.
```bicep
resource exampleResource 'Microsoft.Backup.Admin/backupLocations@2018-09-01' = {
  name: 'example'
  location: 'local'
  properties: {
    externalStoreDefault: {
      path: '\\\\su1fileserver\\SU1_Infrastructure_2\\BackupStore'
      backupFrequencyInHours: 10
      backupRetentionPeriodInDays: 6
      encryptionCertBase64: 'encryptioncert'
      isBackupSchedulerEnabled: false
      password: 'password'
      userName: 'azurestack\\azurestackadmin'
    }
  }
  tags: {
  }
}
```
