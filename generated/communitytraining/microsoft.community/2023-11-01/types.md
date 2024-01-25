# Microsoft.Community @ 2023-11-01

## Resource Microsoft.Community/communityTrainings@2023-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CommunityTrainingProperties](#communitytrainingproperties): The resource-specific properties for this resource.
* **sku**: [Sku](#sku): The SKU (Stock Keeping Unit) assigned to this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Community/communityTrainings' (ReadOnly, DeployTimeConstant): The resource type

## CommunityTrainingProperties
### Properties
* **disasterRecoveryEnabled**: bool (Required): To indicate whether the Community Training instance has Disaster Recovery enabled
* **identityConfiguration**: [IdentityConfigurationProperties](#identityconfigurationproperties) (Required): The identity configuration of the Community Training resource
* **portalAdminEmailAddress**: string (Required): The email address of the portal admin
* **portalName**: string (Required): The portal name (website name) of the Community Training instance
* **portalOwnerEmailAddress**: string (Required): The email address of the portal owner. Will be used as the primary contact
* **portalOwnerOrganizationName**: string (Required): The organization name of the portal owner
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **zoneRedundancyEnabled**: bool (Required): To indicate whether the Community Training instance has Zone Redundancy enabled

## IdentityConfigurationProperties
### Properties
* **b2cAuthenticationPolicy**: string: The name of the authentication policy registered in ADB2C for the Community Training Resource
* **b2cPasswordResetPolicy**: string: The name of the password reset policy registered in ADB2C for the Community Training Resource
* **clientId**: string (Required): The clientId of the application registered in the selected identity provider for the Community Training Resource
* **clientSecret**: string {sensitive} (Required): The client secret of the application registered in the selected identity provider for the Community Training Resource
* **customLoginParameters**: string: The custom login parameters for the Community Training Resource
* **domainName**: string (Required): The domain name of the selected identity provider for the Community Training Resource
* **identityType**: string (Required): The identity type of the Community Training Resource
* **teamsEnabled**: bool: To indicate whether the Community Training Resource has Teams enabled
* **tenantId**: string (Required): The tenantId of the selected identity provider for the Community Training Resource

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. Ex - P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

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

