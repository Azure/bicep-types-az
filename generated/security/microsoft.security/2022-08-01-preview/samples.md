# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/securityconnectors

Create or update a security connector
```bicep
resource exampleResource 'Microsoft.Security/securityConnectors@2022-08-01-preview' = {
  name: 'example'
  etag: 'etag value (must be supplied for update)'
  location: 'Central US'
  properties: {
    environmentData: {
      environmentType: 'AwsAccount'
    }
    environmentName: 'AWS'
    hierarchyIdentifier: 'exampleHierarchyId'
    offerings: [
      {
        nativeCloudConnection: {
          cloudRoleArn: 'arn:aws:iam::00000000:role/ASCMonitor'
        }
        offeringType: 'CspmMonitorAws'
      }
    ]
  }
  tags: {
  }
}
```
