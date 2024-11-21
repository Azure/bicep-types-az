# Microsoft.AlertsManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.alertsmanagement/prometheusrulegroups

CreatePrometheusRuleGroup
```bicep
resource exampleResource 'Microsoft.AlertsManagement/prometheusRuleGroups@2021-07-22-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    description: 'This is the description of the first rule group'
    rules: [
      {
        expression: 'histogram_quantile(0.99, sum(rate(jobs_duration_seconds_bucket{service="billing-processing"}[5m])) by (job_type))'
        labels: {
          team: 'prod'
        }
        record: 'job_type:billing_jobs_duration_seconds:99p5m'
      }
      {
        actions: [
          {
            actionGroupId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourcegroups/promResourceGroup/providers/microsoft.insights/actiongroups/group2'
            actionProperties: {
              key11: 'value11'
              key12: 'value12'
            }
          }
        ]
        alert: 'Billing_Processing_Very_Slow'
        annotations: {
          annotationName1: 'annotationValue1'
        }
        expression: 'job_type:billing_jobs_duration_seconds:99p5m > 30'
        for: 'PT5M'
        labels: {
          team: 'prod'
        }
        resolveConfiguration: {
          autoResolved: true
          timeToResolve: 'PT10M'
        }
        severity: 2
      }
    ]
    scopes: [
      '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/promResourceGroup/providers/microsoft.monitor/accounts/myMonitoringAccount'
    ]
  }
}
```
