# Microsoft.AlertsManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.alertsmanagement/issues

Issue_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.AlertsManagement/issues@2025-03-01-preview' = {
  name: 'example'
  properties: {
    impactTime: '2024-12-13T02:45:33'
    severity: 'Sev2'
    status: 'New'
    title: 'Alert fired on VM CPU'
  }
}
```
