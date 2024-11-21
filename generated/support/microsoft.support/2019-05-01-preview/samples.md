# Microsoft.Support
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.support/supporttickets

Create a ticket for Billing related issues
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2019-05-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    contactDetails: {
      country: 'usa'
      firstName: 'abc'
      lastName: 'xyz'
      preferredContactMethod: 'email'
      preferredSupportLanguage: 'en-US'
      preferredTimeZone: 'Pacific Standard Time'
      primaryEmailAddress: 'abc@contoso.com'
    }
    problemClassificationId: '/providers/Microsoft.Support/services/billing_service_guid/problemClassifications/billing_problemClassification_guid'
    serviceId: '/providers/Microsoft.Support/services/billing_service_guid'
    severity: 'moderate'
    title: 'my title'
  }
}
```

Create a ticket for Subscription Management related issues
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2019-05-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    contactDetails: {
      country: 'usa'
      firstName: 'abc'
      lastName: 'xyz'
      preferredContactMethod: 'email'
      preferredSupportLanguage: 'en-US'
      preferredTimeZone: 'Pacific Standard Time'
      primaryEmailAddress: 'abc@contoso.com'
    }
    problemClassificationId: '/providers/Microsoft.Support/services/subscription_management_service_guid/problemClassifications/subscription_management_problemClassification_guid'
    serviceId: '/providers/Microsoft.Support/services/subscription_management_service_guid'
    severity: 'moderate'
    title: 'my title'
  }
}
```

Create a ticket for Technical issue related to a specific resource
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2019-05-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    contactDetails: {
      country: 'usa'
      firstName: 'abc'
      lastName: 'xyz'
      preferredContactMethod: 'email'
      preferredSupportLanguage: 'en-US'
      preferredTimeZone: 'Pacific Standard Time'
      primaryEmailAddress: 'abc@contoso.com'
    }
    problemClassificationId: '/providers/Microsoft.Support/services/virtual_machine_running_linux_service_guid/problemClassifications/problemClassification_guid'
    serviceId: '/providers/Microsoft.Support/services/cddd3eb5-1830-b494-44fd-782f691479dc'
    severity: 'moderate'
    technicalTicketDetails: {
      resourceId: '/subscriptions/subid/resourceGroups/test/providers/Microsoft.Compute/virtualMachines/testserver'
    }
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for Active Jobs and Job Schedules for a Batch account
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2019-05-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    contactDetails: {
      country: 'usa'
      firstName: 'abc'
      lastName: 'xyz'
      preferredContactMethod: 'email'
      preferredSupportLanguage: 'en-US'
      preferredTimeZone: 'Pacific Standard Time'
      primaryEmailAddress: 'abc@contoso.com'
    }
    problemClassificationId: '/providers/Microsoft.Support/services/quota_service_guid/problemClassifications/batch_problemClassification_guid'
    quotaTicketDetails: {
      quotaChangeRequestSubType: 'Account'
      quotaChangeRequestVersion: '1.0'
      quotaChangeRequests: [
        {
          payload: '{"AccountName":"test","NewLimit":200,"Type":"Jobs"}'
          region: 'EastUS'
        }
      ]
    }
    serviceId: '/providers/Microsoft.Support/services/quota_service_guid'
    severity: 'moderate'
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for Compute VM Cores
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2019-05-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    contactDetails: {
      country: 'usa'
      firstName: 'abc'
      lastName: 'xyz'
      preferredContactMethod: 'email'
      preferredSupportLanguage: 'en-US'
      preferredTimeZone: 'Pacific Standard Time'
      primaryEmailAddress: 'abc@contoso.com'
    }
    problemClassificationId: '/providers/Microsoft.Support/services/quota_service_guid/problemClassifications/cores_problemClassification_guid'
    quotaTicketDetails: {
      quotaChangeRequestVersion: '1.0'
      quotaChangeRequests: [
        {
          payload: '{"SKU":"DSv3 Series","NewLimit":104}'
          region: 'EastUS'
        }
      ]
    }
    serviceId: '/providers/Microsoft.Support/services/quota_service_guid'
    severity: 'moderate'
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for DTUs for SQL Data Warehouse
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2019-05-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    contactDetails: {
      country: 'usa'
      firstName: 'abc'
      lastName: 'xyz'
      preferredContactMethod: 'email'
      preferredSupportLanguage: 'en-US'
      preferredTimeZone: 'Pacific Standard Time'
      primaryEmailAddress: 'abc@contoso.com'
    }
    problemClassificationId: '/providers/Microsoft.Support/services/quota_service_guid/problemClassifications/sql_datawarehouse_problemClassification_guid'
    quotaTicketDetails: {
      quotaChangeRequestSubType: 'DTUs'
      quotaChangeRequestVersion: '1.0'
      quotaChangeRequests: [
        {
          payload: '{"ServerName":"testserver","NewLimit":54000}'
          region: 'EastUS'
        }
      ]
    }
    serviceId: '/providers/Microsoft.Support/services/quota_service_guid'
    severity: 'moderate'
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for DTUs for SQL Database
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2019-05-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    contactDetails: {
      country: 'usa'
      firstName: 'abc'
      lastName: 'xyz'
      preferredContactMethod: 'email'
      preferredSupportLanguage: 'en-US'
      preferredTimeZone: 'Pacific Standard Time'
      primaryEmailAddress: 'abc@contoso.com'
    }
    problemClassificationId: '/providers/Microsoft.Support/services/quota_service_guid/problemClassifications/sql_database_problemClassification_guid'
    quotaTicketDetails: {
      quotaChangeRequestSubType: 'DTUs'
      quotaChangeRequestVersion: '1.0'
      quotaChangeRequests: [
        {
          payload: '{"ServerName":"testserver","NewLimit":54000}'
          region: 'EastUS'
        }
      ]
    }
    serviceId: '/providers/Microsoft.Support/services/quota_service_guid'
    severity: 'moderate'
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for Low-priority cores for a Batch account
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2019-05-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    contactDetails: {
      country: 'usa'
      firstName: 'abc'
      lastName: 'xyz'
      preferredContactMethod: 'email'
      preferredSupportLanguage: 'en-US'
      preferredTimeZone: 'Pacific Standard Time'
      primaryEmailAddress: 'abc@contoso.com'
    }
    problemClassificationId: '/providers/Microsoft.Support/services/quota_service_guid/problemClassifications/batch_problemClassification_guid'
    quotaTicketDetails: {
      quotaChangeRequestSubType: 'Account'
      quotaChangeRequestVersion: '1.0'
      quotaChangeRequests: [
        {
          payload: '{"AccountName":"test","NewLimit":200,"Type":"LowPriority"}'
          region: 'EastUS'
        }
      ]
    }
    serviceId: '/providers/Microsoft.Support/services/quota_service_guid'
    severity: 'moderate'
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for Low-priority cores for Machine Learning service
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2019-05-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    contactDetails: {
      country: 'usa'
      firstName: 'abc'
      lastName: 'xyz'
      preferredContactMethod: 'email'
      preferredSupportLanguage: 'en-US'
      preferredTimeZone: 'Pacific Standard Time'
      primaryEmailAddress: 'abc@contoso.com'
    }
    problemClassificationId: '/providers/Microsoft.Support/services/quota_service_guid/problemClassifications/machine_learning_service_problemClassification_guid'
    quotaTicketDetails: {
      quotaChangeRequestSubType: 'Account'
      quotaChangeRequestVersion: '1.0'
      quotaChangeRequests: [
        {
          payload: '{"NewLimit":200,"Type":"LowPriority"}'
          region: 'EastUS'
        }
      ]
    }
    serviceId: '/providers/Microsoft.Support/services/quota_service_guid'
    severity: 'moderate'
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for number of Batch accounts for a subscription
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2019-05-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    contactDetails: {
      country: 'usa'
      firstName: 'abc'
      lastName: 'xyz'
      preferredContactMethod: 'email'
      preferredSupportLanguage: 'en-US'
      preferredTimeZone: 'Pacific Standard Time'
      primaryEmailAddress: 'abc@contoso.com'
    }
    problemClassificationId: '/providers/Microsoft.Support/services/quota_service_guid/problemClassifications/batch_problemClassification_guid'
    quotaTicketDetails: {
      quotaChangeRequestSubType: 'Subscription'
      quotaChangeRequestVersion: '1.0'
      quotaChangeRequests: [
        {
          payload: '{"NewLimit":200,"Type":"Account"}'
          region: 'EastUS'
        }
      ]
    }
    serviceId: '/providers/Microsoft.Support/services/quota_service_guid'
    severity: 'moderate'
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for Pools for a Batch account
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2019-05-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    contactDetails: {
      country: 'usa'
      firstName: 'abc'
      lastName: 'xyz'
      preferredContactMethod: 'email'
      preferredSupportLanguage: 'en-US'
      preferredTimeZone: 'Pacific Standard Time'
      primaryEmailAddress: 'abc@contoso.com'
    }
    problemClassificationId: '/providers/Microsoft.Support/services/quota_service_guid/problemClassifications/batch_problemClassification_guid'
    quotaTicketDetails: {
      quotaChangeRequestSubType: 'Account'
      quotaChangeRequestVersion: '1.0'
      quotaChangeRequests: [
        {
          payload: '{"AccountName":"test","NewLimit":200,"Type":"Pools"}'
          region: 'EastUS'
        }
      ]
    }
    serviceId: '/providers/Microsoft.Support/services/quota_service_guid'
    severity: 'moderate'
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for Servers for SQL Data Warehouse
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2019-05-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    contactDetails: {
      country: 'usa'
      firstName: 'abc'
      lastName: 'xyz'
      preferredContactMethod: 'email'
      preferredSupportLanguage: 'en-US'
      preferredTimeZone: 'Pacific Standard Time'
      primaryEmailAddress: 'abc@contoso.com'
    }
    problemClassificationId: '/providers/Microsoft.Support/services/quota_service_guid/problemClassifications/sql_datawarehouse_problemClassification_guid'
    quotaTicketDetails: {
      quotaChangeRequestSubType: 'Servers'
      quotaChangeRequestVersion: '1.0'
      quotaChangeRequests: [
        {
          payload: '{"NewLimit":200}'
          region: 'EastUS'
        }
      ]
    }
    serviceId: '/providers/Microsoft.Support/services/quota_service_guid'
    severity: 'moderate'
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for Servers for SQL Database
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2019-05-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    contactDetails: {
      country: 'usa'
      firstName: 'abc'
      lastName: 'xyz'
      preferredContactMethod: 'email'
      preferredSupportLanguage: 'en-US'
      preferredTimeZone: 'Pacific Standard Time'
      primaryEmailAddress: 'abc@contoso.com'
    }
    problemClassificationId: '/providers/Microsoft.Support/services/quota_service_guid/problemClassifications/sql_database_problemClassification_guid'
    quotaTicketDetails: {
      quotaChangeRequestSubType: 'Servers'
      quotaChangeRequestVersion: '1.0'
      quotaChangeRequests: [
        {
          payload: '{"NewLimit":200}'
          region: 'EastUS'
        }
      ]
    }
    serviceId: '/providers/Microsoft.Support/services/quota_service_guid'
    severity: 'moderate'
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for specific VM family cores for a Batch account
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2019-05-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    contactDetails: {
      country: 'usa'
      firstName: 'abc'
      lastName: 'xyz'
      preferredContactMethod: 'email'
      preferredSupportLanguage: 'en-US'
      preferredTimeZone: 'Pacific Standard Time'
      primaryEmailAddress: 'abc@contoso.com'
    }
    problemClassificationId: '/providers/Microsoft.Support/services/quota_service_guid/problemClassifications/batch_problemClassification_guid'
    quotaTicketDetails: {
      quotaChangeRequestSubType: 'Account'
      quotaChangeRequestVersion: '1.0'
      quotaChangeRequests: [
        {
          payload: '{"AccountName":"test","VMFamily":"standardA0_A7Family","NewLimit":200,"Type":"Dedicated"}'
          region: 'EastUS'
        }
      ]
    }
    serviceId: '/providers/Microsoft.Support/services/quota_service_guid'
    severity: 'moderate'
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for specific VM family cores for Machine Learning service
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2019-05-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    contactDetails: {
      country: 'usa'
      firstName: 'abc'
      lastName: 'xyz'
      preferredContactMethod: 'email'
      preferredSupportLanguage: 'en-US'
      preferredTimeZone: 'Pacific Standard Time'
      primaryEmailAddress: 'abc@contoso.com'
    }
    problemClassificationId: '/providers/Microsoft.Support/services/quota_service_guid/problemClassifications/machine_learning_service_problemClassification_guid'
    quotaTicketDetails: {
      quotaChangeRequestSubType: 'Account'
      quotaChangeRequestVersion: '1.0'
      quotaChangeRequests: [
        {
          payload: '{"VMFamily":"standardA0_A7Family","NewLimit":200,"Type":"Dedicated"}'
          region: 'EastUS'
        }
      ]
    }
    serviceId: '/providers/Microsoft.Support/services/quota_service_guid'
    severity: 'moderate'
    title: 'my title'
  }
}
```

## microsoft.support/supporttickets/communications

AddCommunicationToSubscriptionTicket
```bicep
resource exampleResource 'Microsoft.Support/supportTickets/communications@2019-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    body: 'This is a test message from a customer!'
    sender: 'user@contoso.com'
    subject: 'This is a test message from a customer!'
  }
}
```
