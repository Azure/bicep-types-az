# Microsoft.BillingTrust
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.billingtrust/assessments

Create or update the BusinessVerification assessment for a billing account
```bicep
resource exampleResource 'Microsoft.BillingTrust/assessments@2026-03-17-preview' = {
  name: 'example'
  properties: {
    assessmentType: 'BusinessVerification'
  }
}
```

Create or update the Edu assessment for an enrollment
```bicep
resource exampleResource 'Microsoft.BillingTrust/assessments@2026-03-17-preview' = {
  name: 'example'
  properties: {
    assessmentType: 'Edu'
    initialValues: [
      {
        domains: [
          {
            domainNames: [
              'students.contoso.edu'
              'faculty.contoso.edu'
            ]
            tenantId: '11111111-1111-1111-1111-111111111111'
          }
        ]
        kind: 'eduQualification'
      }
    ]
  }
}
```

Create or update the PayeeEnrollment assessment for a billing account
```bicep
resource exampleResource 'Microsoft.BillingTrust/assessments@2026-03-17-preview' = {
  name: 'example'
  properties: {
    assessmentType: 'PayeeEnrollment'
  }
}
```

Create or update the PayeeProfile assessment for a billing account
```bicep
resource exampleResource 'Microsoft.BillingTrust/assessments@2026-03-17-preview' = {
  name: 'example'
  properties: {
    assessmentType: 'PayeeProfile'
  }
}
```

## microsoft.billingtrust/assessments/rules

Create or update an eduQualification rule
```bicep
resource exampleResource 'Microsoft.BillingTrust/assessments/rules@2026-03-17-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    domains: [
      {
        domainNames: [
          'students.contoso.edu'
          'faculty.contoso.edu'
        ]
        tenantId: '11111111-1111-1111-1111-111111111111'
      }
    ]
    kind: 'eduQualification'
  }
}
```
