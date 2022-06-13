# Microsoft.ExtendedLocation @ 2021-08-31-preview

## Resource Microsoft.ExtendedLocation/customLocations@2021-08-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomLocationProperties](#customlocationproperties): The set of properties specific to a Custom Location
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ExtendedLocation/customLocations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ExtendedLocation/customLocations/resourceSyncRules@2021-08-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceSyncRuleProperties](#resourcesyncruleproperties): The set of properties specific to a Resource Sync Rule
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ExtendedLocation/customLocations/resourceSyncRules' (ReadOnly, DeployTimeConstant): The resource type

## CustomLocationProperties
### Properties
* **authentication**: [CustomLocationPropertiesAuthentication](#customlocationpropertiesauthentication): This is optional input that contains the authentication that should be used to generate the namespace.
* **clusterExtensionIds**: string[]: Contains the reference to the add-on that contains charts to deploy CRDs and operators.
* **displayName**: string: Display name for the Custom Locations location.
* **hostResourceId**: string: Connected Cluster or AKS Cluster. The Custom Locations RP will perform a checkAccess API for listAdminCredentials permissions.
* **hostType**: 'Kubernetes' | string: Type of host the Custom Locations is referencing (Kubernetes, etc...).
* **namespace**: string: Kubernetes namespace that will be created on the specified cluster.
* **provisioningState**: string: Provisioning State for the Custom Location.

## CustomLocationPropertiesAuthentication
### Properties
* **type**: string: The type of the Custom Locations authentication
* **value**: string (WriteOnly): The kubeconfig value.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | string: The identity type.

## MatchExpressionsProperties
### Properties
* **key**: string: Key is the label key that the selector applies to.
* **operator**: string: The Operator field represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
* **values**: string[]: The label value

## ResourceSyncRuleProperties
### Properties
* **priority**: int: Priority represents a priority of the Resource Sync Rule
* **provisioningState**: string (ReadOnly): Provisioning State for the Resource Sync Rule.
* **selector**: [ResourceSyncRulePropertiesSelector](#resourcesyncrulepropertiesselector): A label selector is composed of two parts, matchLabels and matchExpressions. The first part, matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The second part, matchExpressions is a list of resource selector requirements. Valid operators include In, NotIn, Exists, and DoesNotExist. The values set must be non-empty in the case of In and NotIn. The values set must be empty in the case of Exists and DoesNotExist. All of the requirements, from both matchLabels and matchExpressions must all be satisfied in order to match.
* **targetResourceGroup**: string: For an unmapped custom resource, its labels will be used to find matching resource sync rules. If this resource sync rule is one of the matching rules with highest priority, then the unmapped custom resource will be projected to the target resource group associated with this resource sync rule. The user creating this resource sync rule should have write permissions on the target resource group and this write permission will be validated when creating the resource sync rule.

## ResourceSyncRulePropertiesSelector
### Properties
* **matchExpressions**: [MatchExpressionsProperties](#matchexpressionsproperties)[]: MatchExpressions is a list of resource selector requirements. Valid operators include In, NotIn, Exists, and DoesNotExist. The values set must be non-empty in the case of In and NotIn. The values set must be empty in the case of Exists and DoesNotExist.
* **matchLabels**: [ResourceSyncRulePropertiesSelectorMatchLabels](#resourcesyncrulepropertiesselectormatchlabels): MatchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'.

## ResourceSyncRulePropertiesSelectorMatchLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

