# Microsoft.Impact
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.impact/connectors

CreateConnector
```bicep
resource exampleResource 'Microsoft.Impact/connectors@2026-01-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/eu2cgroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1': {
      }
    }
  }
  properties: {
    connectorType: 'AzureMonitor'
  }
}
```

## microsoft.impact/workloadimpacts

Reporting a connectivity impact
```bicep
resource exampleResource 'Microsoft.Impact/workloadImpacts@2026-01-01-preview' = {
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
resource exampleResource 'Microsoft.Impact/workloadImpacts@2026-01-01-preview' = {
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
resource exampleResource 'Microsoft.Impact/workloadImpacts@2026-01-01-preview' = {
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
resource exampleResource 'Microsoft.Impact/workloadImpacts@2026-01-01-preview' = {
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

WorkloadImpacts_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Impact/workloadImpacts@2026-01-01-preview' = {
  name: 'example'
  properties: {
    additionalProperties: {
    }
    armCorrelationIds: [
      '4D045314-435A-41DA-B0A4-2CA7E9F87D12'
    ]
    clientIncidentDetails: {
      clientIncidentId: '123456'
      clientIncidentSource: 'AzureDevops'
    }
    confidenceLevel: 'Low'
    connectivity: {
      port: 6
      source: {
        azureResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resource-rg/providers/Microsoft.compute/virtualmachines/vm1'
      }
      target: {
        azureResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resource-rg/providers/Microsoft.compute/virtualmachines/vm2'
      }
      protocol: 'TCP'
    }
    detectionType: 'BusinessAlert'
    durationInSec: 26
    durationMarginInSec: 28
    endDateTime: '2024-12-04T19:51:13.274Z'
    errorDetails: {
      errorCode: '504'
      errorMessage: 'Gateway timeout error'
    }
    hitCount: 21
    impactCategory: 'Resource.Other'
    impactDescription: 'test description'
    impactGroupId: 'testGroup1'
    impactedResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resource-rg/providers/Microsoft.Sql/sqlserver/dbservername'
    ongoingImpact: true
    performance: [
      {
        actual: 20
        expected: 23
        expectedValueRange: {
          max: 27
          min: 1
        }
        metricName: 'testMetric'
        unit: 'ByteSeconds'
      }
    ]
    severity: 'Critical'
    startDateTime: '2024-12-04T19:51:13.274Z'
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
resource exampleResource 'Microsoft.Impact/workloadImpacts/insights@2026-01-01-preview' = {
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
