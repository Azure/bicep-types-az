# Microsoft.AlertsManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.alertsmanagement/prometheusrulegroups

Create or Update a cluster centric PrometheusRuleGroup
```bicep
resource exampleResource 'Microsoft.AlertsManagement/prometheusRuleGroups@2023-03-01' = {
  name: 'example'
  location: 'East US'
  properties: {
    description: 'This is a rule group with culster centric configuration'
    clusterName: 'myClusterName'
    interval: 'PT10M'
    rules: [
      {
        actions: [
        ]
        alert: 'Billing_Processing_Very_Slow'
        annotations: {
          annotationName1: 'annotationValue1'
        }
        enabled: true
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
      '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/myResourceGroup/providers/microsoft.monitor/accounts/myAzureMonitorWorkspace'
      '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/myResourceGroup/providers/Microsoft.ContainerService/managedClusters/myClusterName'
    ]
  }
}
```

Create or Update a PrometheusRuleGroup
```bicep
resource exampleResource 'Microsoft.AlertsManagement/prometheusRuleGroups@2023-03-01' = {
  name: 'example'
  location: 'East US'
  properties: {
    description: 'This is the description of the following rule group'
    clusterName: 'myClusterName'
    enabled: true
    interval: 'PT10M'
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
            actionGroupId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourcegroups/myrg/providers/microsoft.insights/actiongroups/myactiongroup'
            actionProperties: {
              key11: 'value11'
              key12: 'value12'
            }
          }
          {
            actionGroupId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourcegroups/myrg/providers/microsoft.insights/actiongroups/myotheractiongroup'
            actionProperties: {
              key21: 'value21'
              key22: 'value22'
            }
          }
        ]
        alert: 'Billing_Processing_Very_Slow'
        annotations: {
          annotationName1: 'annotationValue1'
        }
        enabled: true
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
      '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/myResourceGroup/providers/microsoft.monitor/accounts/myAzureMonitorWorkspace'
    ]
  }
}
```
