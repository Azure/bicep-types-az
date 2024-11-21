# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/customassessmentautomations

Create a Custom Assessment Automation
```bicep
resource exampleResource 'Microsoft.Security/customAssessmentAutomations@2021-07-01-preview' = {
  name: 'example'
  properties: {
    description: 'Data should be encrypted'
    compressedQuery: 'DQAKAEkAYQBtAF8ARwByAG8AdQBwAA0ACgB8ACAAZQB4AHQAZQBuAGQAIABIAGUAYQBsAHQAaABTAHQAYQB0AHUAcwAgAD0AIABpAGYAZgAoAHQAbwBzAHQAcgBpAG4AZwAoAFIAZQBjAG8AcgBkAC4AVQBzAGUAcgBOAGEAbQBlACkAIABjAG8AbgB0AGEAaQBuAHMAIAAnAHUAcwBlAHIAJwAsACAAJwBVAE4ASABFAEEATABUAEgAWQAnACwAIAAnAEgARQBBAEwAVABIAFkAJwApAA0ACgA='
    displayName: 'Password Policy'
    remediationDescription: 'Encrypt store by...'
    severity: 'Medium'
    supportedCloud: 'AWS'
  }
}
```

## microsoft.security/customentitystoreassignments

Create a custom entity store assignment
```bicep
resource exampleResource 'Microsoft.Security/customEntityStoreAssignments@2021-07-01-preview' = {
  name: 'example'
  properties: {
    principal: 'aaduser=f3923a3e-ad57-4752-b1a9-fbf3c8e5e082;72f988bf-86f1-41af-91ab-2d7cd011db47'
  }
}
```

## microsoft.security/securityconnectors

Create or update a security connector
```bicep
resource exampleResource 'Microsoft.Security/securityConnectors@2021-07-01-preview' = {
  name: 'example'
  etag: 'etag value (must be supplied for update)'
  location: 'Central US'
  properties: {
    cloudName: 'AWS'
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
