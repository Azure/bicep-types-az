# Neon.Postgres @ 2025-06-23-preview

## Resource Neon.Postgres/organizations@2025-06-23-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-23-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_\-.: ]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [LiftrBaseDataOrganizationProperties](#liftrbasedataorganizationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Neon.Postgres/organizations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Neon.Postgres/organizations/projects@2025-06-23-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-23-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^\S.{0,62}\S$|^\S$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Neon.Postgres/organizations/projects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Neon.Postgres/organizations/projects/branches@2025-06-23-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-23-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^\S.{0,62}\S$|^\S$"} (Required, DeployTimeConstant): The resource name
* **properties**: [BranchProperties](#branchproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Neon.Postgres/organizations/projects/branches' (ReadOnly, DeployTimeConstant): The resource type

## Resource Neon.Postgres/organizations/projects/branches/endpoints@2025-06-23-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-23-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^\S.{0,62}\S$|^\S$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EndpointProperties](#endpointproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Neon.Postgres/organizations/projects/branches/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Neon.Postgres/organizations/projects/branches/neonDatabases@2025-06-23-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-23-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^\S.{0,62}\S$|^\S$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NeonDatabaseProperties](#neondatabaseproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Neon.Postgres/organizations/projects/branches/neonDatabases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Neon.Postgres/organizations/projects/branches/neonRoles@2025-06-23-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-23-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^\S.{0,62}\S$|^\S$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NeonRoleProperties](#neonroleproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Neon.Postgres/organizations/projects/branches/neonRoles' (ReadOnly, DeployTimeConstant): The resource type

## Attributes
### Properties
* **name**: string (Required): Name of the attribute
* **value**: string (Required): Value of the attribute

## AutoscalingSize
### Properties
* **autoscalingLimitMaxCu**: int (Required): The maximum compute units for autoscaling
* **autoscalingLimitMinCu**: int (Required): The minimum compute units for autoscaling

## BranchProperties
### Properties
* **attributes**: [Attributes](#attributes)[]: Additional attributes for the entity
* **branch**: string {pattern: "^\S.{0,126}\S$|^\S$"}: Name of the branch
* **branchId**: string {pattern: "^[a-z0-9-]{1,60}$"}: Unique identifier for the branch
* **computeHours**: string (ReadOnly): Compute hours for the branch
* **createdAt**: string (ReadOnly): Timestamp indicating when the entity was created
* **databaseName**: string: Database name associated with the branch
* **databases**: [NeonDatabaseProperties](#neondatabaseproperties)[]: Neon Databases associated with the branch
* **dataSize**: string (ReadOnly): Total data size in MB for the branch
* **endpoints**: [EndpointProperties](#endpointproperties)[]: Endpoints associated with the branch
* **entityId**: string {pattern: "^[a-z0-9-]{1,60}$"} (ReadOnly): Unique identifier for the entity
* **entityName**: string {pattern: "^\S.{0,62}\S$|^\S$"}: Name of the resource
* **isDefault**: bool (ReadOnly): Branch default status
* **lastActive**: string (ReadOnly): Last active compute for the branch
* **parentId**: string {pattern: "^[a-z0-9-]{1,60}$"}: The ID of the parent branch
* **projectId**: string: The ID of the project this branch belongs to
* **protected**: bool (ReadOnly): Branch protected status
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **roleName**: string: Role name associated with the branch
* **roles**: [NeonRoleProperties](#neonroleproperties)[]: Roles associated with the branch

## DefaultEndpointSettings
### Properties
* **autoscalingLimitMaxCu**: int (Required): Maximum compute units for autoscaling.
* **autoscalingLimitMinCu**: int (Required): Minimum compute units for autoscaling.

## EndpointProperties
### Properties
* **attributes**: [Attributes](#attributes)[]: Additional attributes for the entity
* **branchId**: string: The ID of the branch this endpoint belongs to
* **computeName**: string {pattern: "^\S.{0,62}\S$|^\S$"}: Name of the compute endpoint
* **createdAt**: string (ReadOnly): Timestamp indicating when the entity was created
* **endpointId**: string {pattern: "^[a-z0-9-]{1,60}$"}: Unique identifier for the compute endpoint
* **endpointType**: 'read_only' | 'read_write' | string: The type of the endpoint
* **entityId**: string {pattern: "^[a-z0-9-]{1,60}$"} (ReadOnly): Unique identifier for the entity
* **entityName**: string {pattern: "^\S.{0,62}\S$|^\S$"}: Name of the resource
* **lastActive**: string (ReadOnly): The timestamp when the compute endpoint was last active
* **projectId**: string: The ID of the project this endpoint belongs to
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **size**: [AutoscalingSize](#autoscalingsize): The compute units size range for autoscaling (MinCU-MaxCU)
* **status**: 'active' | 'idle' | 'init' | string (ReadOnly): The current status of the compute endpoint

## LiftrBaseCompanyDetails
### Properties
* **businessPhone**: string: Business phone number of the company
* **companyName**: string: Company name
* **country**: string: Country name of the company
* **domain**: string: Domain of the user
* **numberOfEmployees**: int: Number of employees in the company
* **officeAddress**: string: Office address of the company

## LiftrBaseDataOrganizationProperties
### Properties
* **companyDetails**: [LiftrBaseCompanyDetails](#liftrbasecompanydetails) (Required): Details of the company.
* **marketplaceDetails**: [LiftrBaseMarketplaceDetails](#liftrbasemarketplacedetails) (Required): Marketplace details of the resource.
* **partnerOrganizationProperties**: [LiftrBaseDataPartnerOrganizationProperties](#liftrbasedatapartnerorganizationproperties): Neon Organization properties
* **projectProperties**: [ProjectProperties](#projectproperties): Neon Project Properties
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **userDetails**: [LiftrBaseUserDetails](#liftrbaseuserdetails) (Required): Details of the user.

## LiftrBaseDataPartnerOrganizationProperties
### Properties
* **organizationId**: string: Organization Id in partner's system
* **organizationName**: string {minLength: 1, maxLength: 50, pattern: "^\S.{0,62}\S$|^\S$"} (Required): Organization name in partner's system
* **singleSignOnProperties**: [LiftrBaseSingleSignOnProperties](#liftrbasesinglesignonproperties): Single Sign On properties for the organization

## LiftrBaseMarketplaceDetails
### Properties
* **offerDetails**: [LiftrBaseOfferDetails](#liftrbaseofferdetails) (Required): Offer details for the marketplace that is selected by the user
* **subscriptionId**: string: SaaS subscription id for the the marketplace offer
* **subscriptionStatus**: 'PendingFulfillmentStart' | 'Subscribed' | 'Suspended' | 'Unsubscribed' | string: Marketplace subscription status

## LiftrBaseOfferDetails
### Properties
* **offerId**: string (Required): Offer Id for the marketplace offer
* **planId**: string (Required): Plan Id for the marketplace offer
* **planName**: string: Plan Name for the marketplace offer
* **publisherId**: string (Required): Publisher Id for the marketplace offer
* **termId**: string: Term Id for the marketplace offer
* **termUnit**: string: Term Name for the marketplace offer

## LiftrBaseSingleSignOnProperties
### Properties
* **aadDomains**: string[]: List of AAD domains fetched from Microsoft Graph for user.
* **enterpriseAppId**: string: AAD enterprise application Id used to setup SSO
* **singleSignOnState**: 'Disable' | 'Enable' | 'Initial' | string: State of the Single Sign On for the organization
* **singleSignOnUrl**: string: URL for SSO to be used by the partner to redirect the user to their system

## LiftrBaseUserDetails
### Properties
* **emailAddress**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"}: Email address of the user
* **firstName**: string: First name of the user
* **lastName**: string: Last name of the user
* **phoneNumber**: string: User's phone number
* **upn**: string: User's principal name

## NeonDatabaseProperties
### Properties
* **attributes**: [Attributes](#attributes)[]: Additional attributes for the entity
* **branchId**: string: The ID of the branch this database belongs to
* **createdAt**: string (ReadOnly): Timestamp indicating when the entity was created
* **databaseName**: string {pattern: "^\S.{0,62}\S$|^\S$"}: Name of the database
* **entityId**: string {pattern: "^[a-z0-9-]{1,60}$"} (ReadOnly): Unique identifier for the entity
* **entityName**: string {pattern: "^\S.{0,62}\S$|^\S$"}: Name of the resource
* **lastUpdated**: string (ReadOnly): Timestamp indicating when the database was last updated
* **ownerName**: string: The name of the role that owns the database
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.

## NeonRoleProperties
### Properties
* **attributes**: [Attributes](#attributes)[]: Additional attributes for the entity
* **branchId**: string: The ID of the branch this role belongs to
* **createdAt**: string (ReadOnly): Timestamp indicating when the entity was created
* **entityId**: string {pattern: "^[a-z0-9-]{1,60}$"} (ReadOnly): Unique identifier for the entity
* **entityName**: string {pattern: "^\S.{0,62}\S$|^\S$"}: Name of the resource
* **isSuperUser**: bool: Indicates whether the role has superuser privileges
* **lastUpdated**: string (ReadOnly): Timestamp indicating when the role was last updated
* **owns**: string (ReadOnly): Databases name associated with the role
* **permissions**: string[]: Permissions assigned to the role
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **roleName**: string {pattern: "^\S.{0,62}\S$|^\S$"}: Name of the role

## ProjectProperties
### Properties
* **attributes**: [Attributes](#attributes)[]: Additional attributes for the entity
* **branch**: [BranchProperties](#branchproperties): The Branch properties of the project. This is optional
* **createdAt**: string (ReadOnly): Timestamp indicating when the entity was created
* **databases**: [NeonDatabaseProperties](#neondatabaseproperties)[]: Neon Databases associated with the project
* **defaultEndpointSettings**: [DefaultEndpointSettings](#defaultendpointsettings): Default endpoint settings for the project.
* **endpoints**: [EndpointProperties](#endpointproperties)[]: Endpoints associated with the project
* **entityId**: string {pattern: "^[a-z0-9-]{1,60}$"} (ReadOnly): Unique identifier for the entity
* **entityName**: string {pattern: "^\S.{0,62}\S$|^\S$"}: Name of the resource
* **historyRetention**: int: The retention period for project history in seconds.
* **pgVersion**: int: Postgres version for the project
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **regionId**: string: Region where the project is created
* **roles**: [NeonRoleProperties](#neonroleproperties)[]: Roles associated with the project
* **storage**: int: Data Storage bytes per hour for the project

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

