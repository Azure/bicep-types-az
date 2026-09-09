# Microsoft.Support @ 2021-06-01-preview

## Function lookUpResourceId (Microsoft.Support@2021-06-01-preview)
* **Resource**: Microsoft.Support
* **ApiVersion**: 2021-06-01-preview
* **Input**: [LookUpResourceIdRequest](#lookupresourceidrequest)
* **Output**: [LookUpResourceIdResponse](#lookupresourceidresponse)

## LookUpResourceIdRequest
### Properties
* **identifier**: string: The System generated Id that is unique. Use supportTicketId property for Microsoft.Support/supportTickets resource type.
* **type**: 'Microsoft.Support/supportTickets': The type of resource.

## LookUpResourceIdResponse
### Properties
* **resourceId**: string: The resource Id of support resource type.

