# Microsoft.ProgrammableConnectivity @ 2024-01-15-preview

## Resource Microsoft.ProgrammableConnectivity/gateways@2024-01-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z]{1}[a-zA-Z0-9-_]{2,127}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GatewayProperties](#gatewayproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ProgrammableConnectivity/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProgrammableConnectivity/operatorApiConnections@2024-01-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z]{1}[a-zA-Z0-9-_]{2,127}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OperatorApiConnectionProperties](#operatorapiconnectionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ProgrammableConnectivity/operatorApiConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProgrammableConnectivity/operatorApiPlans@2024-01-15-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-01-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z]{1}[a-zA-Z0-9-_]{2,127}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OperatorApiPlanProperties](#operatorapiplanproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ProgrammableConnectivity/operatorApiPlans' (ReadOnly, DeployTimeConstant): The resource type

## ApplicationProperties
### Properties
* **applicationDescription**: string: Description of the application.
* **applicationType**: string: The category that describes the application.
* **legalName**: string: Legal name of the organization owning the application.
* **name**: string: Name of the application.
* **organizationDescription**: string: A description of the organization owning the application.
* **privacyContactEmailAddress**: string: Email address of the Privacy contact or Data Protection officer of the organization.
* **taxNumber**: string: Unique Tax Number for the user's organization in the country/region the APC Gateway is being purchased.

## GatewayProperties
### Properties
* **gatewayBaseUrl**: string (ReadOnly): Base URL of the Gateway resource. This is the URL that the users would use to make Network API requests to the Operators via Azure.
* **operatorApiConnections**: string[] (ReadOnly): List of Operator API Connections selected by the user.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation on the Gateway resource.

## MarketplaceProperties
### Properties
* **legacyOfferId**: string: Azure marketplace Legacy Offer ID for this plan. This is used to fetch the details of the plan from the Azure marketplace.
* **offerId**: string: Azure marketplace Offer ID for this plan.
* **planId**: string: Azure marketplace Plan ID for this plan.
* **publisherId**: string: Azure marketplace Publisher ID for this plan.
* **termId**: string: Azure marketplace Term ID for this plan.

## OperatorApiConnectionProperties
### Properties
* **accountType**: 'AzureManaged' | 'UserManaged' | string (Required): Type of the account the user has with the Operator's Network API infrastructure. AzureManaged | UserManaged.
* **appId**: string: Application ID of the App Developer that is registered with the Operator in a specific country/region.
* **appSecret**: string {sensitive} (WriteOnly): Application secret linked to the 'appId'. This should be stored securely and is not returned back when the resource information is read.
* **camaraApiName**: string (ReadOnly): The Network API for the current operator in the country/region provided in the linked Operator API Plan.
* **configuredApplication**: [ApplicationProperties](#applicationproperties): Details about the Application that would use the Operator's Network APIs.
* **gatewayId**: string (Required): Reference to the APC Gateway resource ID.
* **operatorApiPlanId**: string (Required): Reference to the Operator API Plan Resource ID.
* **operatorName**: string (ReadOnly): Name of the Operator in the linked Operator API Plan belongs to.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **saasProperties**: [SaasProperties](#saasproperties): Details about the SaaS offer purchased from the marketplace.
* **status**: [Status](#status) (ReadOnly): The status of the OperatorApiConnection resource.

## OperatorApiPlanProperties
### Properties
* **camaraApiName**: string: Standardized Network API name defined by CAMARA specifications.
* **limits**: string: The limits, if any, will be imposed by the operator.
* **marketplaceProperties**: [MarketplaceProperties](#marketplaceproperties): Azure marketplace properties for this plan.
* **markets**: string[]: List of country/region names where this plan is being supported by Azure Marketplace.
* **operatorName**: string: Name of the Operator this plan belongs to.
* **operatorRegions**: string[]: List of country/region names where this plan is being supported by the Operator.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation on the Gateway resource.
* **supportedLocations**: string[]: List of Azure regions where this offer is supported.

## SaasProperties
### Properties
* **saasResourceId**: string: Resource ID of the SaaS offer purchased from the marketplace.
* **saasSubscriptionId**: string: Subscription ID of the SaaS offer purchased from the marketplace.

## Status
### Properties
* **reason**: string: Explanation of the current state of the OperatorApiConnection resource.
* **state**: string: Current state of the OperatorApiConnection resource.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

