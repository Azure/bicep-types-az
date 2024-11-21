# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/servervulnerabilityassessmentssettings

Set a server vulnerability assessments setting of the kind settingKind on the subscription
```bicep
resource exampleResource 'Microsoft.Security/serverVulnerabilityAssessmentsSettings@2023-05-01' = {
  name: 'example'
  kind: 'AzureServersSetting'
  properties: {
    selectedProvider: 'MdeTvm'
  }
}
```
