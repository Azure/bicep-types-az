# Microsoft.CostManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.costmanagement/exports

BillingAccountCreateOrUpdateExport
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2019-11-01' = {
  name: 'example'
  properties: {
    format: 'Csv'
    definition: {
      type: 'Usage'
      dataSet: {
        aggregation: {
          costSum: {
            name: 'PreTaxCost'
            function: 'Sum'
          }
        }
        configuration: {
          columns: [
            'Date'
            'MeterId'
            'InstanceId'
            'ResourceLocation'
            'PreTaxCost'
          ]
        }
        filter: {
          and: [
            {
              or: [
                {
                  dimensions: {
                    name: 'ResourceLocation'
                    operator: 'In'
                    values: [
                      'East US'
                      'West Europe'
                    ]
                  }
                }
                {
                  tags: {
                    name: 'Environment'
                    operator: 'In'
                    values: [
                      'UAT'
                      'Prod'
                    ]
                  }
                }
              ]
            }
            {
              dimensions: {
                name: 'ResourceGroup'
                operator: 'In'
                values: [
                  'API'
                ]
              }
            }
          ]
        }
        granularity: 'Daily'
        grouping: [
          {
            name: 'SubscriptionName'
            type: 'Dimension'
          }
          {
            name: 'Environment'
            type: 'Tag'
          }
        ]
      }
      timeframe: 'MonthToDate'
    }
    deliveryInfo: {
      destination: {
        container: 'exports'
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Storage/storageAccounts/ccmeastusdiag182'
        rootFolderPath: 'ad-hoc'
      }
    }
    schedule: {
      recurrence: 'Weekly'
      recurrencePeriod: {
        from: '2018-06-01T00:00:00Z'
        to: '2018-10-31T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```

DepartmentCreateOrUpdateExport
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2019-11-01' = {
  name: 'example'
  properties: {
    format: 'Csv'
    definition: {
      type: 'Usage'
      dataSet: {
        aggregation: {
          costSum: {
            name: 'PreTaxCost'
            function: 'Sum'
          }
        }
        configuration: {
          columns: [
            'Date'
            'MeterId'
            'InstanceId'
            'ResourceLocation'
            'PreTaxCost'
          ]
        }
        filter: {
          and: [
            {
              or: [
                {
                  dimensions: {
                    name: 'ResourceLocation'
                    operator: 'In'
                    values: [
                      'East US'
                      'West Europe'
                    ]
                  }
                }
                {
                  tags: {
                    name: 'Environment'
                    operator: 'In'
                    values: [
                      'UAT'
                      'Prod'
                    ]
                  }
                }
              ]
            }
            {
              dimensions: {
                name: 'ResourceGroup'
                operator: 'In'
                values: [
                  'API'
                ]
              }
            }
          ]
        }
        granularity: 'Daily'
        grouping: [
          {
            name: 'SubscriptionName'
            type: 'Dimension'
          }
          {
            name: 'Environment'
            type: 'Tag'
          }
        ]
      }
      timeframe: 'MonthToDate'
    }
    deliveryInfo: {
      destination: {
        container: 'exports'
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Storage/storageAccounts/ccmeastusdiag182'
        rootFolderPath: 'ad-hoc'
      }
    }
    schedule: {
      recurrence: 'Weekly'
      recurrencePeriod: {
        from: '2018-06-01T00:00:00Z'
        to: '2018-10-31T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```

EnrollmentAccountCreateOrUpdateExport
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2019-11-01' = {
  name: 'example'
  properties: {
    format: 'Csv'
    definition: {
      type: 'Usage'
      dataSet: {
        aggregation: {
          costSum: {
            name: 'PreTaxCost'
            function: 'Sum'
          }
        }
        configuration: {
          columns: [
            'Date'
            'MeterId'
            'InstanceId'
            'ResourceLocation'
            'PreTaxCost'
          ]
        }
        filter: {
          and: [
            {
              or: [
                {
                  dimensions: {
                    name: 'ResourceLocation'
                    operator: 'In'
                    values: [
                      'East US'
                      'West Europe'
                    ]
                  }
                }
                {
                  tags: {
                    name: 'Environment'
                    operator: 'In'
                    values: [
                      'UAT'
                      'Prod'
                    ]
                  }
                }
              ]
            }
            {
              dimensions: {
                name: 'ResourceGroup'
                operator: 'In'
                values: [
                  'API'
                ]
              }
            }
          ]
        }
        granularity: 'Daily'
        grouping: [
          {
            name: 'SubscriptionName'
            type: 'Dimension'
          }
          {
            name: 'Environment'
            type: 'Tag'
          }
        ]
      }
      timeframe: 'MonthToDate'
    }
    deliveryInfo: {
      destination: {
        container: 'exports'
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Storage/storageAccounts/ccmeastusdiag182'
        rootFolderPath: 'ad-hoc'
      }
    }
    schedule: {
      recurrence: 'Weekly'
      recurrencePeriod: {
        from: '2018-06-01T00:00:00Z'
        to: '2018-10-31T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```

ManagementGroupCreateOrUpdateExport
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2019-11-01' = {
  name: 'example'
  properties: {
    format: 'Csv'
    definition: {
      type: 'Usage'
      dataSet: {
        aggregation: {
          costSum: {
            name: 'PreTaxCost'
            function: 'Sum'
          }
        }
        configuration: {
          columns: [
            'Date'
            'MeterId'
            'InstanceId'
            'ResourceLocation'
            'PreTaxCost'
          ]
        }
        filter: {
          and: [
            {
              or: [
                {
                  dimensions: {
                    name: 'ResourceLocation'
                    operator: 'In'
                    values: [
                      'East US'
                      'West Europe'
                    ]
                  }
                }
                {
                  tags: {
                    name: 'Environment'
                    operator: 'In'
                    values: [
                      'UAT'
                      'Prod'
                    ]
                  }
                }
              ]
            }
            {
              dimensions: {
                name: 'ResourceGroup'
                operator: 'In'
                values: [
                  'API'
                ]
              }
            }
          ]
        }
        granularity: 'Daily'
        grouping: [
          {
            name: 'SubscriptionName'
            type: 'Dimension'
          }
          {
            name: 'Environment'
            type: 'Tag'
          }
        ]
      }
      timeframe: 'MonthToDate'
    }
    deliveryInfo: {
      destination: {
        container: 'exports'
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Storage/storageAccounts/ccmeastusdiag182'
        rootFolderPath: 'ad-hoc'
      }
    }
    schedule: {
      recurrence: 'Weekly'
      recurrencePeriod: {
        from: '2018-06-01T00:00:00Z'
        to: '2018-10-31T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```

ResourceGroupCreateOrUpdateExport
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2019-11-01' = {
  name: 'example'
  properties: {
    format: 'Csv'
    definition: {
      type: 'Usage'
      dataSet: {
        aggregation: {
          costSum: {
            name: 'PreTaxCost'
            function: 'Sum'
          }
        }
        configuration: {
          columns: [
            'Date'
            'MeterId'
            'InstanceId'
            'ResourceLocation'
            'PreTaxCost'
          ]
        }
        filter: {
          and: [
            {
              or: [
                {
                  dimensions: {
                    name: 'ResourceLocation'
                    operator: 'In'
                    values: [
                      'East US'
                      'West Europe'
                    ]
                  }
                }
                {
                  tags: {
                    name: 'Environment'
                    operator: 'In'
                    values: [
                      'UAT'
                      'Prod'
                    ]
                  }
                }
              ]
            }
            {
              dimensions: {
                name: 'ResourceGroup'
                operator: 'In'
                values: [
                  'API'
                ]
              }
            }
          ]
        }
        granularity: 'Daily'
        grouping: [
          {
            name: 'SubscriptionName'
            type: 'Dimension'
          }
          {
            name: 'Environment'
            type: 'Tag'
          }
        ]
      }
      timeframe: 'MonthToDate'
    }
    deliveryInfo: {
      destination: {
        container: 'exports'
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Storage/storageAccounts/ccmeastusdiag182'
        rootFolderPath: 'ad-hoc'
      }
    }
    schedule: {
      recurrence: 'Weekly'
      recurrencePeriod: {
        from: '2018-06-01T00:00:00Z'
        to: '2018-10-31T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```

SubscriptionCreateOrUpdateExport
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2019-11-01' = {
  name: 'example'
  properties: {
    format: 'Csv'
    definition: {
      type: 'Usage'
      dataSet: {
        aggregation: {
          costSum: {
            name: 'PreTaxCost'
            function: 'Sum'
          }
        }
        configuration: {
          columns: [
            'Date'
            'MeterId'
            'InstanceId'
            'ResourceLocation'
            'PreTaxCost'
          ]
        }
        filter: {
          and: [
            {
              or: [
                {
                  dimensions: {
                    name: 'ResourceLocation'
                    operator: 'In'
                    values: [
                      'East US'
                      'West Europe'
                    ]
                  }
                }
                {
                  tags: {
                    name: 'Environment'
                    operator: 'In'
                    values: [
                      'UAT'
                      'Prod'
                    ]
                  }
                }
              ]
            }
            {
              dimensions: {
                name: 'ResourceGroup'
                operator: 'In'
                values: [
                  'API'
                ]
              }
            }
          ]
        }
        granularity: 'Daily'
        grouping: [
          {
            name: 'SubscriptionName'
            type: 'Dimension'
          }
          {
            name: 'Environment'
            type: 'Tag'
          }
        ]
      }
      timeframe: 'MonthToDate'
    }
    deliveryInfo: {
      destination: {
        container: 'exports'
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Storage/storageAccounts/ccmeastusdiag182'
        rootFolderPath: 'ad-hoc'
      }
    }
    schedule: {
      recurrence: 'Weekly'
      recurrencePeriod: {
        from: '2018-06-01T00:00:00Z'
        to: '2018-10-31T00:00:00Z'
      }
      status: 'Active'
    }
  }
}
```

## microsoft.costmanagement/settings

CreateOrUpdateSetting
```bicep
resource exampleResource 'Microsoft.CostManagement/settings@2019-11-01' = {
  name: 'example'
  properties: {
    cache: [
      {
        name: '72f988bf-86f1-41af-91ab-2d7cd011db47'
        channel: 'Modern'
        id: '/providers/Microsoft.Management/managementGroups/72f988bf-86f1-41af-91ab-2d7cd011db47'
        parent: '/providers/Microsoft.Management/managementGroups/acm'
        status: 'enabled'
        subchannel: 'NotApplicable'
      }
    ]
    scope: '/subscriptions/00000000-0000-0000-0000-000000000000'
    startOn: 'LastUsed'
  }
}
```

## microsoft.costmanagement/views

CreateOrUpdatePrivateView
```bicep
resource exampleResource 'Microsoft.CostManagement/views@2019-11-01' = {
  name: 'example'
  eTag: '"1d4ff9fe66f1d10"'
  properties: {
    accumulated: 'true'
    chart: 'Table'
    displayName: 'swagger Example'
    kpis: [
      {
        type: 'Forecast'
        enabled: true
        id: {
        }
      }
      {
        type: 'Budget'
        enabled: true
        id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MYDEVTESTRG/providers/Microsoft.Consumption/budgets/swaggerDemo'
      }
    ]
    metric: 'ActualCost'
    pivots: [
      {
        name: 'ServiceName'
        type: 'Dimension'
      }
      {
        name: 'MeterCategory'
        type: 'Dimension'
      }
      {
        name: 'swaggerTagKey'
        type: 'TagKey'
      }
    ]
    query: {
      type: 'Usage'
      dataSet: {
        aggregation: {
          totalCost: {
            name: 'PreTaxCost'
            function: 'Sum'
          }
        }
        granularity: 'Daily'
        grouping: [
        ]
        sorting: [
          {
            name: 'UsageDate'
            direction: 'Ascending'
          }
        ]
      }
      timeframe: 'MonthToDate'
    }
  }
}
```
