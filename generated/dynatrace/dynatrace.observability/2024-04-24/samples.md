# Dynatrace.Observability
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## dynatrace.observability/monitors

Monitors_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'Dynatrace.Observability/monitors@2024-04-24' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'West US 2'
  properties: {
    dynatraceEnvironmentProperties: {
      accountInfo: {
      }
      environmentInfo: {
      }
      singleSignOnProperties: {
      }
    }
    liftrResourceCategory: 'Unknown'
    marketplaceSubscriptionStatus: 'Active'
    monitoringStatus: 'Enabled'
    planData: {
      billingCycle: 'Monthly'
      effectiveDate: '2019-08-30T15:14:33+02:00'
      planDetails: 'dynatraceapitestplan'
      usageType: 'Committed'
    }
    provisioningState: 'Accepted'
    userInfo: {
      country: 'westus2'
      emailAddress: 'alice@microsoft.com'
      firstName: 'Alice'
      lastName: 'Bobab'
      phoneNumber: '123456'
    }
  }
  tags: {
    Environment: 'Dev'
  }
}
```

Monitors_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'Dynatrace.Observability/monitors@2024-04-24' = {
  name: 'example'
  location: 'West US 2'
  properties: {
  }
}
```

## dynatrace.observability/monitors/singlesignonconfigurations

SingleSignOn_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'Dynatrace.Observability/monitors/singleSignOnConfigurations@2024-04-24' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aadDomains: [
      'mpliftrdt20210811outlook.onmicrosoft.com'
    ]
    enterpriseAppId: '00000000-0000-0000-0000-000000000000'
    provisioningState: 'Accepted'
    singleSignOnState: 'Enable'
    singleSignOnUrl: 'https://www.dynatrace.io'
  }
}
```

SingleSignOn_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'Dynatrace.Observability/monitors/singleSignOnConfigurations@2024-04-24' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aadDomains: [
      'mpliftrdt20210811outlook.onmicrosoft.com'
    ]
    singleSignOnUrl: 'https://www.dynatrace.io'
  }
}
```

## dynatrace.observability/monitors/tagrules

TagRules_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'Dynatrace.Observability/monitors/tagRules@2024-04-24' = {
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
      sendAadLogs: 'Enabled'
      sendActivityLogs: 'Enabled'
      sendSubscriptionLogs: 'Enabled'
    }
    metricRules: {
      filteringTags: [
        {
          name: 'Environment'
          action: 'Include'
          value: 'Prod'
        }
      ]
      sendingMetrics: 'Enabled'
    }
    provisioningState: 'Accepted'
  }
}
```

TagRules_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'Dynatrace.Observability/monitors/tagRules@2024-04-24' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```
