# Microsoft.CostManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.costmanagement/exports

BillingAccountCreateOrUpdateExport
```bicep
resource exampleResource 'Microsoft.CostManagement/exports@2019-10-01' = {
  name: 'example'
  properties: {
    format: 'Csv'
    definition: {
      type: 'Usage'
      dataset: {
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
                  dimension: {
                    name: 'ResourceLocation'
                    operator: 'In'
                    values: [
                      'East US'
                      'West Europe'
                    ]
                  }
                }
                {
                  tag: {
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
              dimension: {
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
resource exampleResource 'Microsoft.CostManagement/exports@2019-10-01' = {
  name: 'example'
  properties: {
    format: 'Csv'
    definition: {
      type: 'Usage'
      dataset: {
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
                  dimension: {
                    name: 'ResourceLocation'
                    operator: 'In'
                    values: [
                      'East US'
                      'West Europe'
                    ]
                  }
                }
                {
                  tag: {
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
              dimension: {
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
resource exampleResource 'Microsoft.CostManagement/exports@2019-10-01' = {
  name: 'example'
  properties: {
    format: 'Csv'
    definition: {
      type: 'Usage'
      dataset: {
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
                  dimension: {
                    name: 'ResourceLocation'
                    operator: 'In'
                    values: [
                      'East US'
                      'West Europe'
                    ]
                  }
                }
                {
                  tag: {
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
              dimension: {
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
resource exampleResource 'Microsoft.CostManagement/exports@2019-10-01' = {
  name: 'example'
  properties: {
    format: 'Csv'
    definition: {
      type: 'Usage'
      dataset: {
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
                  dimension: {
                    name: 'ResourceLocation'
                    operator: 'In'
                    values: [
                      'East US'
                      'West Europe'
                    ]
                  }
                }
                {
                  tag: {
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
              dimension: {
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
resource exampleResource 'Microsoft.CostManagement/exports@2019-10-01' = {
  name: 'example'
  properties: {
    format: 'Csv'
    definition: {
      type: 'Usage'
      dataset: {
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
                  dimension: {
                    name: 'ResourceLocation'
                    operator: 'In'
                    values: [
                      'East US'
                      'West Europe'
                    ]
                  }
                }
                {
                  tag: {
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
              dimension: {
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
resource exampleResource 'Microsoft.CostManagement/exports@2019-10-01' = {
  name: 'example'
  properties: {
    format: 'Csv'
    definition: {
      type: 'Usage'
      dataset: {
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
                  dimension: {
                    name: 'ResourceLocation'
                    operator: 'In'
                    values: [
                      'East US'
                      'West Europe'
                    ]
                  }
                }
                {
                  tag: {
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
              dimension: {
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
