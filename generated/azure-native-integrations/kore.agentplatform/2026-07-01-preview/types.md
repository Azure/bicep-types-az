# Kore.AgentPlatform @ 2026-07-01-preview

## Resource Kore.AgentPlatform/organizations@2026-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 2, maxLength: 50, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{0,48}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OrganizationProperties](#organizationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Kore.AgentPlatform/organizations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Kore.AgentPlatform/organizations/workspaces@2026-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 2, maxLength: 100, pattern: "^[a-zA-Z0-9][a-zA-Z0-9-]{0,98}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Kore.AgentPlatform/organizations/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Function activateSaaS (Kore.AgentPlatform@2026-07-01-preview)
* **Resource**: Kore.AgentPlatform
* **ApiVersion**: 2026-07-01-preview
* **Input**: [ActivateSaaSParameterRequest](#activatesaasparameterrequest)
* **Output**: [SaaSResourceDetailsResponse](#saasresourcedetailsresponse)

## Function getWorkspaceDetails (Kore.AgentPlatform/organizations/workspaces@2026-07-01-preview)
* **Resource**: Kore.AgentPlatform/organizations/workspaces
* **ApiVersion**: 2026-07-01-preview
* **Output**: [WorkspaceDetail](#workspacedetail)

## Function linkSaaS (Kore.AgentPlatform/organizations/workspaces@2026-07-01-preview)
* **Resource**: Kore.AgentPlatform/organizations/workspaces
* **ApiVersion**: 2026-07-01-preview
* **Input**: [WorkspaceSaaSData](#workspacesaasdata)
* **Output**: any

## Function listLinkedSaaS (Kore.AgentPlatform/organizations/workspaces@2026-07-01-preview)
* **Resource**: Kore.AgentPlatform/organizations/workspaces
* **ApiVersion**: 2026-07-01-preview
* **Output**: [WorkspaceLinkedSaaSListResponse](#workspacelinkedsaaslistresponse)

## Function listWorkspaces (Kore.AgentPlatform/organizations@2026-07-01-preview)
* **Resource**: Kore.AgentPlatform/organizations
* **ApiVersion**: 2026-07-01-preview
* **Output**: [ListWorkspacesResponse](#listworkspacesresponse)

## ActivateSaaSParameterRequest
### Properties
* **publisherId**: string (Required): Publisher Id for the marketplace offer.
* **saasGuid**: string {pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"} (Required): SaaS subscription identifier (GUID) issued by the Azure Marketplace fulfillment API.

## CompanyDetails
### Properties
* **businessType**: string: Industry or line of business.
* **companyName**: string: Company name.
* **country**: string: Country or region of the company.
* **domain**: string: Primary domain of the company.
* **numberOfEmployees**: int: Approximate number of employees.
* **officeAddress**: string: Office address of the company.

## DefaultWorkspaceProperties
### Properties
* **marketplaceDetails**: [LiftrBaseMarketplaceDetails](#liftrbasemarketplacedetails)[] {minLength: 1, maxLength: 20} (Required): Azure Marketplace SaaS subscriptions linked to this Workspace.
At least one entry is required. Mutable to support Marketplace-driven
plan changes.
* **name**: string {minLength: 2, maxLength: 100} (Required): Display name of the default Workspace.
* **product**: 'aiforservice' | 'aiforwork' | string: Marketplace product selected for this Workspace.

## DiscoveredWorkspace
### Properties
* **armResourceId**: string: ARM resource ID when the Workspace is managed through Liftr.
* **isDefault**: bool: Indicates whether this is the default Workspace created with the Organization.
* **isManagedByLiftr**: bool (Required): Indicates whether the Workspace is managed as an ARM resource through Liftr.
* **marketplaceDetails**: [LiftrBaseMarketplaceDetails](#liftrbasemarketplacedetails)[]: Azure Marketplace SaaS subscriptions linked to this Workspace.
* **name**: string (Required): Display name of the Workspace on the partner side.
* **ownerEmail**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"}: Email address of the Workspace owner.
* **partnerResourceId**: string (Required): Partner-issued Workspace identifier.
* **product**: 'aiforservice' | 'aiforwork' | string: Marketplace product selected for this Workspace.
* **status**: 'active' | 'archived' | 'suspended' | string: Lifecycle status of the Workspace as reported by the Kore partner.

## LiftrBaseMarketplaceDetails
### Properties
* **offerDetails**: [LiftrBaseOfferDetails](#liftrbaseofferdetails) (Required): Offer details for the marketplace that is selected by the user
* **saasResourceId**: string: Marketplace SaaS Resource Id
* **subscriptionId**: string: Azure subscription id for the the marketplace offer is purchased from
* **subscriptionStatus**: 'PendingFulfillmentStart' | 'Subscribed' | 'Suspended' | 'Unsubscribed' | string (ReadOnly): Marketplace subscription status

## LiftrBaseOfferDetails
### Properties
* **offerId**: string (Required): Offer Id for the marketplace offer
* **planId**: string: Plan Id for the marketplace offer
* **planName**: string: Plan Name for the marketplace offer
* **publisherId**: string (Required): Publisher Id for the marketplace offer
* **termId**: string: Plan Display Name for the marketplace offer
* **termUnit**: string: Plan Display Name for the marketplace offer

## ListWorkspacesResponse
### Properties
* **value**: [DiscoveredWorkspace](#discoveredworkspace)[] (Required): Workspaces returned by Kore, including Liftr-managed and partner-managed Workspaces.

## OrganizationPartnerProperties
### Properties
* **billingEmail**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"} (Required): Billing contact email address for the Organization.
* **defaultWorkspace**: [DefaultWorkspaceProperties](#defaultworkspaceproperties) (Required): Default Workspace created atomically with the Organization.
Required at create time and immutable thereafter.
After create, manage workspaces (including this default) via the standard
Workspace child resource operations.
* **organizationName**: string {minLength: 2, maxLength: 100} (Required): Display name of the Organization on the partner side.
* **ownerEmail**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"} (Required): Initial owner email for the Organization. JIT-provisioned by the partner if the user does not already exist.
* **partnerResourceId**: string (ReadOnly): Partner-issued Organization identifier (e.g., "org_01...").

## OrganizationProperties
### Properties
* **companyDetails**: [CompanyDetails](#companydetails): Organization-tier company metadata.
* **defaultWorkspaceId**: string (ReadOnly): Partner-issued identifier of the default Workspace for this Organization.
* **partnerProperties**: [OrganizationPartnerProperties](#organizationpartnerproperties) (Required): Partner-specific (Kore) Organization properties.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **singleSignOn**: [SingleSignOnProperties](#singlesignonproperties) (ReadOnly): Single sign-on metadata returned by the partner after Organization creation.
* **user**: [UserDetails](#userdetails) (Required): Azure customer profile metadata used by the partner for JIT provisioning.
* **workspaceCount**: int (ReadOnly): Total count of Workspaces under this Organization.

## SaaSResourceDetailsResponse
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **saasId**: string {pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"}: SaaS subscription identifier (GUID) issued by the Azure Marketplace fulfillment API for the activated SaaS resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## SingleSignOnProperties
### Properties
* **aadDomains**: string[]: List of AAD domains fetched from Microsoft Graph for user.
* **enterpriseAppId**: string: AAD enterprise application Id used to setup SSO
* **state**: 'Disable' | 'Enable' | 'Initial' | string: State of the Single Sign On for the resource
* **type**: 'OpenId' | 'Saml' | string (Required): Type of Single Sign-On mechanism being used
* **url**: string: URL for SSO to be used by the partner to redirect the user to their system

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

## UserDetails
### Properties
* **address**: string: Mailing or office address.
* **alternateEmail**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"}: Alternate email address of the user.
* **emailAddress**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"}: Email address of the user
* **firstName**: string: First name of the user
* **lastName**: string: Last name of the user
* **phoneNumber**: string: User's phone number
* **upn**: string: User's principal name

## WorkspaceDetail
### Properties
* **azureResourceId**: string (Required): Full Azure resource ID of the Workspace.
* **createdAt**: string (Required): Time when the partner Workspace was created, as reported by Kore. This is distinct from ARM-managed `systemData.createdAt`.
* **id**: string (Required): Partner-issued Workspace identifier.
* **organizationId**: string (Required): Partner-issued identifier of the parent Organization.
* **partnerProperties**: [WorkspaceDetailPartnerProperties](#workspacedetailpartnerproperties) (Required): Partner-specific fields returned by the Workspace details action.
* **projects**: [WorkspaceProject](#workspaceproject)[] (Required): Projects under the Workspace.
* **status**: 'active' | 'archived' | 'suspended' | string (Required): Lifecycle status of the Workspace.
* **updatedAt**: string (Required): Time when the partner Workspace was last updated, as reported by Kore. This is distinct from ARM-managed `systemData.lastModifiedAt`.

## WorkspaceDetailPartnerProperties
### Properties
* **default**: bool (Required): Indicates whether this is the Organization's default Workspace.
* **marketplaceDetails**: [WorkspaceMarketplaceDetails](#workspacemarketplacedetails)[] {maxLength: 20} (Required): Marketplace SaaS subscriptions owned by the Workspace.
* **name**: string (Required): Workspace display name.
* **ownerEmail**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"} (Required): Email address of the Workspace owner.
* **retentionDays**: int {minValue: 1, maxValue: 365} (Required): Conversation retention period in days. Valid values are 1 through 365.

## WorkspaceLinkedSaaSItem
### Properties
* **isHiddenSaaS**: bool: Flag indicating if the SaaS resource is hidden.
* **saaSResourceId**: string (Required): ARM resource ID of the Microsoft.SaaS marketplace resource linked to this Workspace.

## WorkspaceLinkedSaaSListResponse
### Properties
* **value**: [WorkspaceLinkedSaaSItem](#workspacelinkedsaasitem)[] (Required): List of SaaS resources linked to this Workspace.

## WorkspaceMarketplaceDetails
### Properties
* **mpId**: string (Required): Globally unique Marketplace SaaS identifier used for billing.
* **offerId**: string (Required): Marketplace offer identifier.
* **planId**: string (Required): Plan identifier within the Marketplace offer.
* **planName**: string: Human-readable plan display name.
* **publisherId**: string: Publisher identifier from Partner Center.
* **resourceId**: string (Required): Azure resource ID of the Marketplace SaaS resource.
* **status**: 'PendingFulfillmentStart' | 'Subscribed' | 'Suspended' | 'Unsubscribed' | string: Azure Marketplace fulfillment subscription status.
* **termId**: string: Marketplace subscription term identifier.

## WorkspacePartnerProperties
### Properties
* **name**: string {minLength: 2, maxLength: 100} (Required): Display name of the Workspace on the partner side.
* **ownerEmail**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"}: Email address of the Workspace owner.
* **partnerResourceId**: string (ReadOnly): Partner-issued Workspace identifier (e.g., "ws_01...").

## WorkspaceProject
### Properties
* **agentCount**: int (Required): Number of agents in the Project.
* **createdAt**: string (Required): Time when the Project was created.
* **createdBy**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"} (Required): Email address of the user who created the Project.
* **description**: string: Project description.
* **id**: string (Required): Partner-issued Project identifier.
* **name**: string (Required): Project display name.
* **status**: 'active' | 'archived' | 'deployed' | 'in-development' | string (Required): Lifecycle status of the Project.
* **updatedAt**: string (Required): Time when the Project was last updated.

## WorkspaceProperties
### Properties
* **isDefault**: bool (ReadOnly): Indicates whether this is the default Workspace created with the Organization.
* **marketplaceDetails**: [LiftrBaseMarketplaceDetails](#liftrbasemarketplacedetails)[] {minLength: 1, maxLength: 20} (Required): Azure Marketplace SaaS subscriptions linked to this Workspace.
At least one entry is required. Mutable to support Marketplace-driven
plan changes.
* **partnerProperties**: [WorkspacePartnerProperties](#workspacepartnerproperties) (Required): Partner-specific (Kore) Workspace properties.
* **product**: 'aiforservice' | 'aiforwork' | string: Marketplace product selected for this Workspace.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **status**: 'active' | 'archived' | 'suspended' | string (ReadOnly): Lifecycle status of the Workspace as reported by the Kore partner.

## WorkspaceSaaSData
### Properties
* **saaSResourceIds**: string[] (Required): ARM resource IDs of the Microsoft.SaaS marketplace resources to link to this Workspace.

