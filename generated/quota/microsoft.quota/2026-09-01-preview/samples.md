# Microsoft.Quota
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.quota/quotas

Quotas_Put_Request_ForCompute
```bicep
resource exampleResource 'Microsoft.Quota/quotas@2026-09-01-preview' = {
  name: 'example'
  properties: {
    name: {
      value: 'standardFSv2Family'
    }
    limit: {
      limitObjectType: 'LimitValue'
      value: 10
    }
  }
}
```

Quotas_PutRequest_ForNetwork
```bicep
resource exampleResource 'Microsoft.Quota/quotas@2026-09-01-preview' = {
  name: 'example'
  properties: {
    name: {
      value: 'MinPublicIpInterNetworkPrefixLength'
    }
    limit: {
      limitObjectType: 'LimitValue'
      value: 10
    }
    resourceType: 'MinPublicIpInterNetworkPrefixLength'
  }
}
```

Quotas_PutRequest_ForNetwork_StandardSkuPublicIpAddressesResource
```bicep
resource exampleResource 'Microsoft.Quota/quotas@2026-09-01-preview' = {
  name: 'example'
  properties: {
    name: {
      value: 'StandardSkuPublicIpAddresses'
    }
    limit: {
      limitObjectType: 'LimitValue'
      value: 10
    }
    resourceType: 'PublicIpAddresses'
  }
}
```

Quotas_Request_ForMachineLearningServices_LowPriorityResource
```bicep
resource exampleResource 'Microsoft.Quota/quotas@2026-09-01-preview' = {
  name: 'example'
  properties: {
    name: {
      value: 'TotalLowPriorityCores'
    }
    limit: {
      limitObjectType: 'LimitValue'
      value: 10
    }
    resourceType: 'lowPriority'
  }
}
```

## microsoft.quota/quotatransfers

QuotaTransfers_CreateOrUpdate - autoApprove same-tenant
```bicep
resource exampleResource 'Microsoft.Quota/quotaTransfers@2026-09-01-preview' = {
  name: 'example'
  properties: {
    amount: 25
    autoApprove: true
    billingAccountId: '1234567890'
    destinationSubscriptionId: 'aaaaaaaa-bbbb-cccc-dddd-000000000002'
    displayName: 'Move 25 Dv5 vCPU - auto approved'
    resourceName: 'standardDv5Family'
  }
}
```

QuotaTransfers_CreateOrUpdate - donor submit
```bicep
resource exampleResource 'Microsoft.Quota/quotaTransfers@2026-09-01-preview' = {
  name: 'example'
  properties: {
    amount: 50
    autoApprove: false
    billingAccountId: '1234567890'
    comment: 'Backfill for new prod fleet rollout.'
    destinationSubscriptionId: 'aaaaaaaa-bbbb-cccc-dddd-000000000002'
    displayName: 'Move 50 Dv5 vCPU to recipient'
    resourceName: 'standardDv5Family'
  }
}
```
