# Microsoft.Monitor @ 2025-05-03-preview

## Resource Microsoft.Monitor/accounts/issues@2025-05-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^(?!-)[a-zA-Z0-9-]+[^-]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [IssueProperties](#issueproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Monitor/accounts/issues' (ReadOnly, DeployTimeConstant): The resource type

## Function listAlerts (Microsoft.Monitor/accounts/issues@2025-05-03-preview)
* **Resource**: Microsoft.Monitor/accounts/issues
* **ApiVersion**: 2025-05-03-preview
* **Input**: [ListParameter](#listparameter)
* **Output**: [PagedRelatedAlert](#pagedrelatedalert)

## Function listResources (Microsoft.Monitor/accounts/issues@2025-05-03-preview)
* **Resource**: Microsoft.Monitor/accounts/issues
* **ApiVersion**: 2025-05-03-preview
* **Input**: [ListParameter](#listparameter)
* **Output**: [PagedRelatedResource](#pagedrelatedresource)

## InvestigationExecution
### Properties
* **completedAt**: string: The time at which the investigation execution completed (in UTC)
* **runState**: 'Canceled' | 'Failed' | 'InProgress' | 'None' | 'Succeeded' | string (Required, ReadOnly): The state of the investigation execution

## InvestigationMetadata
### Properties
* **createdAt**: string (Required): The creation time of the investigation (in UTC)
* **execution**: [InvestigationExecution](#investigationexecution) (Required): The execution details of the investigation
* **id**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): The unique identifier of the investigation
* **runParameters**: [RunParameters](#runparameters) (Required): The parameters that were used to start the investigation

## InvestigationScope
### Properties
* **id**: string (Required): The ID of the scope of the investigation - either an Azure alert ID or an Azure resource ID
* **origin**: [Origin](#origin) (Required): The origin of the scope
* **relevance**: 'Irrelevant' | 'None' | 'Relevant' | string: The relevance of the scope

## IssueProperties
### Properties
* **impactTime**: string (Required): The issue impact time (in UTC)
* **investigations**: [InvestigationMetadata](#investigationmetadata)[] (Required, ReadOnly): The list of investigations in the issue
* **investigationsCount**: int (Required, ReadOnly): The number of investigations in the issue
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **severity**: string (Required): The issue severity
* **status**: 'Canceled' | 'Closed' | 'InProgress' | 'Mitigated' | 'New' | string (Required): The issue status
* **title**: string (Required): The issue title

## ListParameter
### Properties
* **filter**: string: The filter to apply on the operation. For example, to filter by relevance, use "$filter=relevance eq 'Relevant'". Note: this property is currently a placeholder and is not in use.

## Origin
### Properties
* **addedBy**: string (Required): The ID of the origin - for example, in case of 'Manual', the user ID/app ID, and in case of 'Automatic', the name of the automatic system
* **addedByType**: 'Automatic' | 'Manual' | string (Required): The source of the origin - Manual or Automatic

## PagedRelatedAlert
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [RelatedAlert](#relatedalert)[] (Required): The RelatedAlert items on this page

## PagedRelatedResource
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [RelatedResource](#relatedresource)[] (Required): The RelatedResource items on this page

## RelatedAlert
### Properties
* **addedAt**: string (Required, ReadOnly): The time this relation was added to the issue (in UTC)
* **id**: string (Required): The alert ID
* **lastModifiedAt**: string (Required, ReadOnly): The last update time of this relation (in UTC)
* **origin**: [Origin](#origin) (Required, ReadOnly): The source that related the alert to the issue
* **relevance**: 'Irrelevant' | 'None' | 'Relevant' | string (Required): The alerts's relevance status

## RelatedResource
### Properties
* **addedAt**: string (Required, ReadOnly): The time this relation was added to the issue (in UTC)
* **id**: string (Required): The resource ID
* **lastModifiedAt**: string (Required, ReadOnly): The last update time of this relation (in UTC)
* **origin**: [Origin](#origin) (Required, ReadOnly): The source that related the resource to the issue
* **relevance**: 'Irrelevant' | 'None' | 'Relevant' | string (Required): The resource's relevance status

## RunParameters
### Properties
* **alerts**: [InvestigationScope](#investigationscope)[] (Required): The alerts used to run the investigation
* **impactTime**: string (Required): The impact time to investigate (in UTC)
* **resources**: [InvestigationScope](#investigationscope)[] (Required): The resources used to run the investigation

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

