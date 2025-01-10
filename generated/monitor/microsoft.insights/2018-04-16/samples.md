# Microsoft.Insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.insights/scheduledqueryrules

Create or Update rule - AlertingAction
```bicep
resource exampleResource 'Microsoft.Insights/scheduledQueryRules@2018-04-16' = {
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'log alert description'
    action: {
      aznsAction: {
        actionGroup: [
        ]
        customWebhookPayload: '{}'
        emailSubject: 'Email Header'
      }
      'odata.type': 'Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.AlertingAction'
      severity: '1'
      trigger: {
        metricTrigger: {
          metricColumn: 'Computer'
          metricTriggerType: 'Consecutive'
          threshold: 5
          thresholdOperator: 'GreaterThan'
        }
        threshold: 3
        thresholdOperator: 'GreaterThan'
      }
    }
    enabled: 'true'
    schedule: {
      frequencyInMinutes: 15
      timeWindowInMinutes: 15
    }
    source: {
      dataSourceId: '/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Rac46PostSwapRG/providers/Microsoft.OperationalInsights/workspaces/sampleWorkspace'
      query: 'Heartbeat | summarize AggregatedValue = count() by bin(TimeGenerated, 5m)'
      queryType: 'ResultCount'
    }
  }
  tags: {
  }
}
```

Create or Update rule - AlertingAction with Cross-Resource
```bicep
resource exampleResource 'Microsoft.Insights/scheduledQueryRules@2018-04-16' = {
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'Sample Cross Resource alert'
    action: {
      aznsAction: {
        actionGroup: [
          '/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Rac46PostSwapRG/providers/microsoft.insights/actiongroups/test-ag'
        ]
        emailSubject: 'Cross Resource Mail!!'
      }
      'odata.type': 'Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.AlertingAction'
      severity: '3'
      trigger: {
        threshold: 5000
        thresholdOperator: 'GreaterThan'
      }
    }
    enabled: 'true'
    schedule: {
      frequencyInMinutes: 60
      timeWindowInMinutes: 60
    }
    source: {
      authorizedResources: [
        '/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Rac46PostSwapRG/providers/Microsoft.OperationalInsights/workspaces/sampleWorkspace'
        '/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Rac46PostSwapRG/providers/microsoft.insights/components/sampleAI'
      ]
      dataSourceId: '/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Rac46PostSwapRG/providers/microsoft.insights/components/sampleAI'
      query: 'union requests, workspace("sampleWorkspace").Update'
      queryType: 'ResultCount'
    }
  }
  tags: {
  }
}
```

Create or Update rule - LogToMetricAction
```bicep
resource exampleResource 'Microsoft.Insights/scheduledQueryRules@2018-04-16' = {
  name: 'example'
  location: 'West Europe'
  properties: {
    description: 'log to metric description'
    action: {
      criteria: [
        {
          dimensions: [
          ]
          metricName: 'Average_% Idle Time'
        }
      ]
      'odata.type': 'Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.LogToMetricAction'
    }
    enabled: 'true'
    source: {
      dataSourceId: '/subscriptions/af52d502-a447-4bc6-8cb7-4780fbb00490/resourceGroups/alertsweu/providers/Microsoft.OperationalInsights/workspaces/alertsweu'
    }
  }
  tags: {
  }
}
```
