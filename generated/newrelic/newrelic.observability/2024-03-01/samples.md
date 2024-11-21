# NewRelic.Observability

## newrelic.observability/monitors

Monitors_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'NewRelic.Observability/monitors@2024-03-01' = {
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
resource exampleResource 'NewRelic.Observability/monitors/tagRules@2024-03-01' = {
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
resource exampleResource 'NewRelic.Observability/monitors/tagRules@2024-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```
