# Microsoft.Datadog
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.datadog/agreements

MarketplaceAgreements_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Datadog/agreements@2024-03-01' = {
  name: 'example'
  properties: {
    accepted: true
  }
}
```

## microsoft.datadog/monitors

Monitors_Create
```bicep
resource exampleResource 'Microsoft.Datadog/monitors@2024-03-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    datadogOrganizationProperties: {
      name: 'myOrg'
      cspm: false
      enterpriseAppId: '00000000-0000-0000-0000-000000000000'
      id: 'myOrg123'
      linkingAuthCode: 'someAuthCode'
      linkingClientId: '00000000-0000-0000-0000-000000000000'
    }
    monitoringStatus: 'Enabled'
    userInfo: {
      name: 'Alice'
      emailAddress: 'alice@microsoft.com'
      phoneNumber: '123-456-7890'
    }
  }
  sku: {
    name: 'free_Monthly'
  }
  tags: {
    Environment: 'Dev'
  }
}
```

## microsoft.datadog/monitors/monitoredsubscriptions

Monitors_AddMonitoredSubscriptions
```bicep
resource exampleResource 'Microsoft.Datadog/monitors/monitoredSubscriptions@2024-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    monitoredSubscriptionList: [
      {
        status: 'Active'
        subscriptionId: '/subscriptions/00000000-0000-0000-0000-000000000000'
        tagRules: {
          automuting: true
          logRules: {
            filteringTags: [
              {
                name: 'Environment'
                action: 'Include'
                value: 'Prod'
              }
              {
                name: 'Environment'
                action: 'Exclude'
                value: 'Dev'
              }
            ]
            sendAadLogs: false
            sendResourceLogs: true
            sendSubscriptionLogs: true
          }
          metricRules: {
            filteringTags: [
            ]
          }
        }
      }
      {
        status: 'Failed'
        subscriptionId: '/subscriptions/00000000-0000-0000-0000-000000000001'
        tagRules: {
          automuting: true
          logRules: {
            filteringTags: [
              {
                name: 'Environment'
                action: 'Include'
                value: 'Prod'
              }
              {
                name: 'Environment'
                action: 'Exclude'
                value: 'Dev'
              }
            ]
            sendAadLogs: false
            sendResourceLogs: true
            sendSubscriptionLogs: true
          }
          metricRules: {
            filteringTags: [
            ]
          }
        }
      }
    ]
    operation: 'AddBegin'
  }
}
```

## microsoft.datadog/monitors/singlesignonconfigurations

SingleSignOnConfigurations_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Datadog/monitors/singleSignOnConfigurations@2024-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enterpriseAppId: '00000000-0000-0000-0000-000000000000'
    singleSignOnState: 'Enable'
  }
}
```

## microsoft.datadog/monitors/tagrules

TagRules_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Datadog/monitors/tagRules@2024-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    automuting: true
    logRules: {
      filteringTags: [
        {
          name: 'Environment'
          action: 'Include'
          value: 'Prod'
        }
        {
          name: 'Environment'
          action: 'Exclude'
          value: 'Dev'
        }
      ]
      sendAadLogs: false
      sendResourceLogs: true
      sendSubscriptionLogs: true
    }
    metricRules: {
      filteringTags: [
      ]
    }
  }
}
```
