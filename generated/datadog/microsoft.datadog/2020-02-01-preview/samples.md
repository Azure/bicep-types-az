# Microsoft.Datadog

## microsoft.datadog/agreements

MarketplaceAgreements_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Datadog/agreements@2020-02-01-preview' = {
  name: 'example'
  properties: {
    accepted: true
  }
}
```

## microsoft.datadog/monitors

Monitors_Create
```bicep
resource exampleResource 'Microsoft.Datadog/monitors@2020-02-01-preview' = {
  name: 'example'
  name: 'myMonitor'
  location: 'West US'
  properties: {
    datadogOrganizationProperties: {
      name: 'myOrg'
      enterpriseAppId: '00000000-0000-0000-0000-000000000000'
      linkingAuthCode: 'someAuthCode'
      linkingClientId: '00000000-0000-0000-0000-000000000000'
      subscription: 'pro'
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

## microsoft.datadog/monitors/tagrules

TagRules_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Datadog/monitors/tagRules@2020-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
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

## microsoft.datadog/monitors/singlesignonconfigurations

SingleSignOnConfigurations_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Datadog/monitors/singleSignOnConfigurations@2020-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enterpriseAppId: '00000000-0000-0000-0000-000000000000'
    singleSignOnState: 'Enable'
  }
}
```
