# Microsoft.Relationships @ 2023-09-01-preview

## Resource Microsoft.Relationships/dependencyOf@2023-09-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DependencyOfRelationshipProperties](#dependencyofrelationshipproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Relationships/dependencyOf' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Relationships/serviceGroupMember@2023-09-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceGroupMemberRelationshipProperties](#servicegroupmemberrelationshipproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Relationships/serviceGroupMember' (ReadOnly, DeployTimeConstant): The resource type

## DependencyOfRelationshipProperties
### Properties
* **metadata**: [RelationshipMetadata](#relationshipmetadata) (Required, ReadOnly): Metadata about the relationship.
* **originInformation**: [RelationshipOriginInformation](#relationshiporigininformation) (Required, ReadOnly): Information about the origin of the relationship.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the relationship.
* **sourceId**: string (Required, ReadOnly): The relationship source resource id.
* **targetId**: string (Required): The relationship target resource id.
* **targetTenant**: string: The relationship target tenant id.

## RelationshipMetadata
### Properties
* **sourceType**: string (Required, ReadOnly): The type of the relationship source resource.
* **targetType**: string (Required, ReadOnly): The type of the relationship target resource.

## RelationshipOriginInformation
### Properties
* **discoveryEngine**: string (ReadOnly): The name of the discovery engine that created the relationship.
* **relationshipOriginType**: 'ServiceExplicitlyCreated' | 'SystemDiscoveredByRule' | 'UserDiscoveredByRule' | 'UserExplicitlyCreated' | string (Required, ReadOnly): Identifies the origin type of the relationship.

## ServiceGroupMemberRelationshipProperties
### Properties
* **metadata**: [RelationshipMetadata](#relationshipmetadata) (Required, ReadOnly): Metadata about the relationship.
* **originInformation**: [RelationshipOriginInformation](#relationshiporigininformation) (Required, ReadOnly): Information about the origin of the relationship.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the relationship.
* **sourceId**: string (Required, ReadOnly): The relationship source resource id.
* **targetId**: string (Required): The relationship target resource id.
* **targetTenant**: string: The relationship target tenant id.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

