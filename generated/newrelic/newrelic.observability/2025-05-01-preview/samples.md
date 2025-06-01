# NewRelic.Observability
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## newrelic.observability/monitors

Monitors_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'NewRelic.Observability/monitors@2025-05-01-preview' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
      key8903: {
      }
    }
  }
  location: 'k'
  properties: {
    accountCreationSource: 'LIFTR'
    liftrResourceCategory: 'Unknown'
    marketplaceSubscriptionStatus: 'Active'
    monitoringStatus: 'Enabled'
    newRelicAccountProperties: {
      accountInfo: {
        accountId: 'xhqmg'
        ingestionKey: 'wltnimmhqt'
        region: 'ljcf'
      }
      organizationInfo: {
        organizationId: 'k'
      }
      singleSignOnProperties: {
        enterpriseAppId: 'kwiwfz'
        provisioningState: 'Accepted'
        singleSignOnState: 'Initial'
        singleSignOnUrl: 'kvseueuljsxmfwpqctz'
      }
      userId: 'vcscxlncofcuduadesd'
    }
    orgCreationSource: 'LIFTR'
    planData: {
      billingCycle: 'Yearly'
      effectiveDate: '2022-12-05T14:11:37.786Z'
      planDetails: 'tbbiaga'
      usageType: 'PAYG'
    }
    provisioningState: 'Accepted'
    saaSAzureSubscriptionStatus: 'Subscribed'
    saaSData: {
      saaSResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rgNewRelic/providers/Microsoft.SaaS/resources/abcd'
    }
    subscriptionState: 'Suspended'
    userInfo: {
      country: 'hslqnwdanrconqyekwbnttaetv'
      emailAddress: '%6%@4-g.N1.3F-kI1.Ue-.lJso'
      firstName: 'vdftzcggirefejajwahhwhyibutramdaotvnuf'
      lastName: 'bcsztgqovdlmzfkjdrngidwzqsevagexzzilnlc'
      phoneNumber: 'krf'
    }
  }
  tags: {
    key6976: 'oaxfhf'
  }
}
```

## newrelic.observability/monitors/tagrules

TagRules_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'NewRelic.Observability/monitors/tagRules@2025-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    logRules: {
      filteringTags: [
        {
          name: 'saokgpjvdlorciqbjmjxazpee'
          action: 'Include'
          value: 'sarxrqsxouhdjwsrqqicbeirdb'
        }
      ]
      sendAadLogs: 'Enabled'
      sendActivityLogs: 'Enabled'
      sendSubscriptionLogs: 'Enabled'
    }
    metricRules: {
      filteringTags: [
        {
          name: 'saokgpjvdlorciqbjmjxazpee'
          action: 'Include'
          value: 'sarxrqsxouhdjwsrqqicbeirdb'
        }
      ]
      userEmail: 'test@testing.com'
    }
    provisioningState: 'Accepted'
  }
}
```

TagRules_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'NewRelic.Observability/monitors/tagRules@2025-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```
