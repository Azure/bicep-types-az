# Microsoft.Impact
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.impact/connectors

Connectors_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Impact/connectors@2024-05-01-preview' = {
  name: 'example'
  properties: {
    connectorType: 'AzureMonitor'
  }
}
```

## microsoft.impact/workloadimpacts

Reporting a connectivity impact
```bicep
resource exampleResource 'Microsoft.Impact/workloadImpacts@2024-05-01-preview' = {
  name: 'example'
  properties: {
    clientIncidentDetails: {
      clientIncidentId: 'AA123'
      clientIncidentSource: 'Jira'
    }
    connectivity: {
      port: 1443
      source: {
        azureResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resourceSub/providers/Microsoft.compute/virtualmachines/vm1'
      }
      target: {
        azureResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resourceSub/providers/Microsoft.compute/virtualmachines/vm2'
      }
      protocol: 'TCP'
    }
    endDateTime: {
    }
    impactCategory: 'Resource.Connectivity'
    impactDescription: 'conection failure'
    impactedResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resource-rg/providers/Microsoft.Sql/sqlserver/dbservercontext'
    startDateTime: '2022-06-15T05:59:46.6517821Z'
    workload: {
      context: 'webapp/scenario1'
      toolset: 'Other'
    }
  }
}
```

Reporting Arm operation failure
```bicep
resource exampleResource 'Microsoft.Impact/workloadImpacts@2024-05-01-preview' = {
  name: 'example'
  properties: {
    armCorrelationIds: [
      '00000000-0000-0000-0000-000000000000'
    ]
    clientIncidentDetails: {
      clientIncidentId: 'AA123'
      clientIncidentSource: 'Jira'
    }
    endDateTime: {
    }
    impactCategory: 'ArmOperation'
    impactDescription: 'deletion of resource failed'
    impactedResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resource-rg/providers/Microsoft.Sql/sqlserver/dbservercontext'
    startDateTime: '2022-06-15T05:59:46.6517821Z'
    workload: {
      context: 'webapp/scenario1'
      toolset: 'Other'
    }
  }
}
```

Reporting availability related impact
```bicep
resource exampleResource 'Microsoft.Impact/workloadImpacts@2024-05-01-preview' = {
  name: 'example'
  properties: {
    clientIncidentDetails: {
      clientIncidentId: 'AA123'
      clientIncidentSource: 'Jira'
    }
    endDateTime: {
    }
    impactCategory: 'Availability'
    impactDescription: 'read calls failed'
    impactedResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resource-rg/providers/Microsoft.Sql/sqlserver/dbservercontext'
    startDateTime: '2022-06-15T05:59:46.6517821Z'
    workload: {
      context: 'webapp/scenario1'
      toolset: 'Other'
    }
  }
}
```

Reporting performance related impact
```bicep
resource exampleResource 'Microsoft.Impact/workloadImpacts@2024-05-01-preview' = {
  name: 'example'
  properties: {
    clientIncidentDetails: {
      clientIncidentId: 'AA123'
      clientIncidentSource: 'Jira'
    }
    endDateTime: {
    }
    impactCategory: 'Resource.Performance'
    impactDescription: 'high cpu utilization'
    impactedResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resource-rg/providers/Microsoft.Sql/sqlserver/dbservercontext'
    performance: [
      {
        actual: 90
        expected: 60
        metricName: 'CPU'
        unit: 'garbage'
      }
    ]
    startDateTime: '2022-06-15T05:59:46.6517821Z'
    workload: {
      context: 'webapp/scenario1'
      toolset: 'Other'
    }
  }
}
```

## microsoft.impact/workloadimpacts/insights

Creating an insight
```bicep
resource exampleResource 'Microsoft.Impact/workloadImpacts/insights@2024-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    category: 'repair'
    content: {
      description: 'At 2018-11-08T00:00:00Z UTC, your services dependent on these resources <link href=”…”>VM1</link> may have experienced an issue. <br/><div>We have identified an outage that affected these resources(s). You can look at outage information on <link href="https:// portal.azure.com/#view/Microsoft_Azure_Health/AzureHealthBrowseBlade/~/serviceIssues/trackingId/NL2W-VCZ">NL2W-VCZ</link> link.<div>'
      title: 'Impact Has been correlated to an outage'
    }
    eventTime: '2023-06-15T04:00:00.009223Z'
    impact: {
      impactId: '/subscriptions/00000000-0000-0000-0000-000000000000/providers/microsoft.Impact/workloadImpacts/impactid22'
      impactedResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resource-rg/providers/Microsoft.Sql/sqlserver/dbservername'
      startTime: '2023-06-15T01:00:00.009223Z'
    }
    insightUniqueId: '00000000-0000-0000-0000-000000000000'
    status: 'resolved'
  }
}
```
