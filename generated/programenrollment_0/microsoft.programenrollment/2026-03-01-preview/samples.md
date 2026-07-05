# Microsoft.ProgramEnrollment
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.programenrollment/eduenrollments

Create or update an edu enrollment
```bicep
resource exampleResource 'Microsoft.ProgramEnrollment/eduEnrollments@2026-03-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    domains: [
      {
        domainNames: [
          'university.edu'
          'college.edu'
        ]
        tenantId: '00000000-0000-0000-0000-000000000001'
      }
    ]
  }
}
```
