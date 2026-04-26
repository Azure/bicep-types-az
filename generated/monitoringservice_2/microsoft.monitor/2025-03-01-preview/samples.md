# Microsoft.Monitor
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.monitor/slis

CreateSli
```bicep
resource exampleResource 'Microsoft.Monitor/slis@2025-03-01-preview' = {
  name: 'example'
  properties: {
    description: 'Measures the performance characteristics of the GetContosoUsers() API. '
    baselineProperties: {
      baseline: {
        evaluationCalculationType: 'CalendarDays'
        evaluationPeriodDays: 30
        value: 99
      }
    }
    category: 'Latency'
    destinationAmwAccounts: [
      {
        identity: '/subscriptions/<subId>/resourcegroups/<rgId>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/<idName>'
        resourceId: '/subscriptions/<subId>/resourcegroups/<rgId>/providers/microsoft.monitor/accounts/<dest>'
      }
    ]
    enableAlert: true
    evaluationType: 'WindowBased'
    sliProperties: {
      signals: {
        signalFormula: '(A + B) /2'
        signalSources: [
          {
            filters: [
              {
                dimensionName: 'ApiName'
                operator: '=='
                value: 'GetContosoUsers'
              }
            ]
            metricName: 'Stamp1Latency'
            metricNamespace: 'ContosoMetricsWest'
            signalSourceId: 'A'
            sourceAmwAccountManagedIdentity: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myIdentity'
            sourceAmwAccountResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/microsoft.monitor/accounts/myAccount'
            spatialAggregation: {
              type: 'Average'
              dimensions: [
                'Region'
                'ResponseCode'
              ]
            }
            temporalAggregation: {
              type: 'Average'
              windowSizeMinutes: 5
            }
          }
          {
            filters: [
              {
                dimensionName: 'ApiName'
                operator: '=='
                value: 'GetContosoUsers'
              }
            ]
            metricName: 'Stamp2Latency'
            metricNamespace: 'ContosoMetricsEast'
            signalSourceId: 'B'
            sourceAmwAccountManagedIdentity: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myIdentity'
            sourceAmwAccountResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/microsoft.monitor/accounts/myAccount'
            spatialAggregation: {
              type: 'Average'
              dimensions: [
                'Region'
                'ResponseCode'
              ]
            }
            temporalAggregation: {
              type: 'Average'
              windowSizeMinutes: 5
            }
          }
        ]
      }
      windowUptimeCriteria: {
        comparator: '>='
        target: 95
      }
    }
  }
}
```
