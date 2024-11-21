# Microsoft.Support
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.support/fileworkspaces/files

Create a file workspace
```bicep
resource exampleResource 'Microsoft.Support/fileWorkspaces/files@2022-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    chunkSize: 41423
    fileSize: 41423
    numberOfChunks: 1
  }
}
```

## microsoft.support/supporttickets

Create a ticket for Billing related issues
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2022-09-01-preview' = {
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
    fileWorkspaceName: '6f16735c-1530836f-e9970f1a-2e49-47b7-96cd-9746b83aa066'
    problemClassificationId: '/providers/Microsoft.Support/services/billing_service_guid/problemClassifications/billing_problemClassification_guid'
    serviceId: '/providers/Microsoft.Support/services/billing_service_guid'
    severity: 'moderate'
    supportPlanId: 'U291cmNlOlNDTSxDbGFyaWZ5SW5zdGFsbGF0aW9uU2l0ZUlkOjcsTGluZUl0ZW1JZDo5ODY1NzIyOSxDb250cmFjdElkOjk4NjU5MTk0LFN1YnNjcmlwdGlvbklkOjc2Y2I3N2ZhLThiMTctNGVhYi05NDkzLWI2NWRhY2U5OTgxMyw='
    title: 'my title'
  }
}
```

Create a ticket for Subscription Management related issues
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2022-09-01-preview' = {
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
    fileWorkspaceName: '6f16735c-1530836f-e9970f1a-2e49-47b7-96cd-9746b83aa066'
    problemClassificationId: '/providers/Microsoft.Support/services/subscription_management_service_guid/problemClassifications/subscription_management_problemClassification_guid'
    serviceId: '/providers/Microsoft.Support/services/subscription_management_service_guid'
    severity: 'moderate'
    supportPlanId: 'U291cmNlOlNDTSxDbGFyaWZ5SW5zdGFsbGF0aW9uU2l0ZUlkOjcsTGluZUl0ZW1JZDo5ODY1NzIyOSxDb250cmFjdElkOjk4NjU5MTk0LFN1YnNjcmlwdGlvbklkOjc2Y2I3N2ZhLThiMTctNGVhYi05NDkzLWI2NWRhY2U5OTgxMyw='
    title: 'my title'
  }
}
```

Create a ticket for Technical issue related to a specific resource
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2022-09-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    advancedDiagnosticConsent: 'Yes'
    contactDetails: {
      country: 'usa'
      firstName: 'abc'
      lastName: 'xyz'
      preferredContactMethod: 'email'
      preferredSupportLanguage: 'en-US'
      preferredTimeZone: 'Pacific Standard Time'
      primaryEmailAddress: 'abc@contoso.com'
    }
    fileWorkspaceName: '6f16735c-1530836f-e9970f1a-2e49-47b7-96cd-9746b83aa066'
    problemClassificationId: '/providers/Microsoft.Support/services/virtual_machine_running_linux_service_guid/problemClassifications/problemClassification_guid'
    problemScopingQuestions: '{"articleId":"076846c1-4c0b-4b21-91c6-1a30246b3867","scopingDetails":[{"question":"When did the problem begin?","controlId":"problem_start_time","orderId":1,"inputType":"static","answer":{"displayValue":"2023-08-31T18:55:00.739Z","value":"2023-08-31T18:55:00.739Z","type":"datetime"}},{"question":"API Type of the Cosmos DB account","controlId":"api_type","orderId":2,"inputType":"static","answer":{"displayValue":"Table","value":"tables","type":"string"}},{"question":"Table name","controlId":"collection_name_table","orderId":11,"inputType":"nonstatic","answer":{"displayValue":"Select Table Name","value":"dont_know_answer","type":"string"}},{"question":"Provide additional details about the issue you\'re facing","controlId":"problem_description","orderId":12,"inputType":"nonstatic","answer":{"displayValue":"test ticket, please ignore and close","value":"test ticket, please ignore and close","type":"string"}}]}'
    secondaryConsent: [
      {
        type: 'virtualmachinerunninglinuxservice'
        userConsent: 'Yes'
      }
    ]
    serviceId: '/providers/Microsoft.Support/services/cddd3eb5-1830-b494-44fd-782f691479dc'
    severity: 'moderate'
    supportPlanId: 'U291cmNlOlNDTSxDbGFyaWZ5SW5zdGFsbGF0aW9uU2l0ZUlkOjcsTGluZUl0ZW1JZDo5ODY1NzIyOSxDb250cmFjdElkOjk4NjU5MTk0LFN1YnNjcmlwdGlvbklkOjc2Y2I3N2ZhLThiMTctNGVhYi05NDkzLWI2NWRhY2U5OTgxMyw='
    technicalTicketDetails: {
      resourceId: '/subscriptions/subid/resourceGroups/test/providers/Microsoft.Compute/virtualMachines/testserver'
    }
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for Active Jobs and Job Schedules for a Batch account
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2022-09-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    advancedDiagnosticConsent: 'Yes'
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
    supportPlanId: 'U291cmNlOlNDTSxDbGFyaWZ5SW5zdGFsbGF0aW9uU2l0ZUlkOjcsTGluZUl0ZW1JZDo5ODY1NzIyOSxDb250cmFjdElkOjk4NjU5MTk0LFN1YnNjcmlwdGlvbklkOjc2Y2I3N2ZhLThiMTctNGVhYi05NDkzLWI2NWRhY2U5OTgxMyw='
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for Azure SQL managed instance
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2022-09-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    advancedDiagnosticConsent: 'Yes'
    contactDetails: {
      country: 'usa'
      firstName: 'abc'
      lastName: 'xyz'
      preferredContactMethod: 'email'
      preferredSupportLanguage: 'en-US'
      preferredTimeZone: 'Pacific Standard Time'
      primaryEmailAddress: 'abc@contoso.com'
    }
    problemClassificationId: '/providers/Microsoft.Support/services/quota_service_guid/problemClassifications/sql_managedinstance_problemClassification_guid'
    quotaTicketDetails: {
      quotaChangeRequestSubType: 'SQLMI'
      quotaChangeRequestVersion: '1.0'
      quotaChangeRequests: [
        {
          payload: '{"NewLimit":200, "Metadata":null, "Type":"vCore"}'
          region: 'EastUS'
        }
        {
          payload: '{"NewLimit":200, "Metadata":null, "Type":"Subnet"}'
          region: 'EastUS'
        }
      ]
    }
    serviceId: '/providers/Microsoft.Support/services/quota_service_guid'
    severity: 'moderate'
    supportPlanId: 'U291cmNlOlNDTSxDbGFyaWZ5SW5zdGFsbGF0aW9uU2l0ZUlkOjcsTGluZUl0ZW1JZDo5ODY1NzIyOSxDb250cmFjdElkOjk4NjU5MTk0LFN1YnNjcmlwdGlvbklkOjc2Y2I3N2ZhLThiMTctNGVhYi05NDkzLWI2NWRhY2U5OTgxMyw='
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for Batch accounts for a subscription
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2022-09-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    advancedDiagnosticConsent: 'Yes'
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
    supportPlanId: 'U291cmNlOlNDTSxDbGFyaWZ5SW5zdGFsbGF0aW9uU2l0ZUlkOjcsTGluZUl0ZW1JZDo5ODY1NzIyOSxDb250cmFjdElkOjk4NjU5MTk0LFN1YnNjcmlwdGlvbklkOjc2Y2I3N2ZhLThiMTctNGVhYi05NDkzLWI2NWRhY2U5OTgxMyw='
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for Compute VM Cores
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2022-09-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    advancedDiagnosticConsent: 'Yes'
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
    supportPlanId: 'U291cmNlOlNDTSxDbGFyaWZ5SW5zdGFsbGF0aW9uU2l0ZUlkOjcsTGluZUl0ZW1JZDo5ODY1NzIyOSxDb250cmFjdElkOjk4NjU5MTk0LFN1YnNjcmlwdGlvbklkOjc2Y2I3N2ZhLThiMTctNGVhYi05NDkzLWI2NWRhY2U5OTgxMyw='
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for DTUs for Azure Synapse Analytics
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2022-09-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    advancedDiagnosticConsent: 'Yes'
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
    supportPlanId: 'U291cmNlOlNDTSxDbGFyaWZ5SW5zdGFsbGF0aW9uU2l0ZUlkOjcsTGluZUl0ZW1JZDo5ODY1NzIyOSxDb250cmFjdElkOjk4NjU5MTk0LFN1YnNjcmlwdGlvbklkOjc2Y2I3N2ZhLThiMTctNGVhYi05NDkzLWI2NWRhY2U5OTgxMyw='
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for DTUs for SQL Database
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2022-09-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    advancedDiagnosticConsent: 'Yes'
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
    supportPlanId: 'U291cmNlOlNDTSxDbGFyaWZ5SW5zdGFsbGF0aW9uU2l0ZUlkOjcsTGluZUl0ZW1JZDo5ODY1NzIyOSxDb250cmFjdElkOjk4NjU5MTk0LFN1YnNjcmlwdGlvbklkOjc2Y2I3N2ZhLThiMTctNGVhYi05NDkzLWI2NWRhY2U5OTgxMyw='
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for Low-priority cores for a Batch account
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2022-09-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    advancedDiagnosticConsent: 'Yes'
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
    supportPlanId: 'U291cmNlOlNDTSxDbGFyaWZ5SW5zdGFsbGF0aW9uU2l0ZUlkOjcsTGluZUl0ZW1JZDo5ODY1NzIyOSxDb250cmFjdElkOjk4NjU5MTk0LFN1YnNjcmlwdGlvbklkOjc2Y2I3N2ZhLThiMTctNGVhYi05NDkzLWI2NWRhY2U5OTgxMyw='
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for Low-priority cores for Machine Learning service
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2022-09-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    advancedDiagnosticConsent: 'Yes'
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
      quotaChangeRequestSubType: 'BatchAml'
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
    supportPlanId: 'U291cmNlOlNDTSxDbGFyaWZ5SW5zdGFsbGF0aW9uU2l0ZUlkOjcsTGluZUl0ZW1JZDo5ODY1NzIyOSxDb250cmFjdElkOjk4NjU5MTk0LFN1YnNjcmlwdGlvbklkOjc2Y2I3N2ZhLThiMTctNGVhYi05NDkzLWI2NWRhY2U5OTgxMyw='
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for Pools for a Batch account
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2022-09-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    advancedDiagnosticConsent: 'Yes'
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
    supportPlanId: 'U291cmNlOlNDTSxDbGFyaWZ5SW5zdGFsbGF0aW9uU2l0ZUlkOjcsTGluZUl0ZW1JZDo5ODY1NzIyOSxDb250cmFjdElkOjk4NjU5MTk0LFN1YnNjcmlwdGlvbklkOjc2Y2I3N2ZhLThiMTctNGVhYi05NDkzLWI2NWRhY2U5OTgxMyw='
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for Servers for Azure Synapse Analytics
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2022-09-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    advancedDiagnosticConsent: 'Yes'
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
    supportPlanId: 'U291cmNlOlNDTSxDbGFyaWZ5SW5zdGFsbGF0aW9uU2l0ZUlkOjcsTGluZUl0ZW1JZDo5ODY1NzIyOSxDb250cmFjdElkOjk4NjU5MTk0LFN1YnNjcmlwdGlvbklkOjc2Y2I3N2ZhLThiMTctNGVhYi05NDkzLWI2NWRhY2U5OTgxMyw='
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for Servers for SQL Database
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2022-09-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    advancedDiagnosticConsent: 'Yes'
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
    supportPlanId: 'U291cmNlOlNDTSxDbGFyaWZ5SW5zdGFsbGF0aW9uU2l0ZUlkOjcsTGluZUl0ZW1JZDo5ODY1NzIyOSxDb250cmFjdElkOjk4NjU5MTk0LFN1YnNjcmlwdGlvbklkOjc2Y2I3N2ZhLThiMTctNGVhYi05NDkzLWI2NWRhY2U5OTgxMyw='
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for services that do not require additional details in the quotaTicketDetails object
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2022-09-01-preview' = {
  name: 'example'
  properties: {
    description: 'Increase the maximum throughput per container limit to 10000 for account foo bar'
    contactDetails: {
      country: 'usa'
      firstName: 'abc'
      lastName: 'xyz'
      preferredContactMethod: 'email'
      preferredSupportLanguage: 'en-US'
      preferredTimeZone: 'Pacific Standard Time'
      primaryEmailAddress: 'abc@contoso.com'
    }
    problemClassificationId: '/providers/Microsoft.Support/services/quota_service_guid/problemClassifications/cosmosdb_problemClassification_guid'
    serviceId: '/providers/Microsoft.Support/services/quota_service_guid'
    severity: 'moderate'
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for specific VM family cores for a Batch account
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2022-09-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    advancedDiagnosticConsent: 'Yes'
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
    supportPlanId: 'U291cmNlOlNDTSxDbGFyaWZ5SW5zdGFsbGF0aW9uU2l0ZUlkOjcsTGluZUl0ZW1JZDo5ODY1NzIyOSxDb250cmFjdElkOjk4NjU5MTk0LFN1YnNjcmlwdGlvbklkOjc2Y2I3N2ZhLThiMTctNGVhYi05NDkzLWI2NWRhY2U5OTgxMyw='
    title: 'my title'
  }
}
```

Create a ticket to request Quota increase for specific VM family cores for Machine Learning service
```bicep
resource exampleResource 'Microsoft.Support/supportTickets@2022-09-01-preview' = {
  name: 'example'
  properties: {
    description: 'my description'
    advancedDiagnosticConsent: 'Yes'
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
      quotaChangeRequestSubType: 'BatchAml'
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
    supportPlanId: 'U291cmNlOlNDTSxDbGFyaWZ5SW5zdGFsbGF0aW9uU2l0ZUlkOjcsTGluZUl0ZW1JZDo5ODY1NzIyOSxDb250cmFjdElkOjk4NjU5MTk0LFN1YnNjcmlwdGlvbklkOjc2Y2I3N2ZhLThiMTctNGVhYi05NDkzLWI2NWRhY2U5OTgxMyw='
    title: 'my title'
  }
}
```

## microsoft.support/supporttickets/communications

AddCommunicationToSubscriptionTicket
```bicep
resource exampleResource 'Microsoft.Support/supportTickets/communications@2022-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    body: 'This is a test message from a customer!'
    sender: 'user@contoso.com'
    subject: 'This is a test message from a customer!'
  }
}
```
