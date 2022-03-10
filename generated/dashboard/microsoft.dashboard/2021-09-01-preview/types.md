# Microsoft.Dashboard @ 2021-09-01-preview

## Resource Microsoft.Dashboard/grafana@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedIdentity](#managedidentity): The managed identity of a resource.
* **location**: string: The geo-location where the grafana resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GrafanaResourceProperties](#grafanaresourceproperties): Properties specific to the grafana resource.
* **sku**: [ResourceSku](#resourcesku)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [GrafanaResourceTags](#grafanaresourcetags): The tags for grafana resource.
* **type**: 'Microsoft.Dashboard/grafana' (ReadOnly, DeployTimeConstant): The resource type

## ManagedIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the system assigned identity.
* **tenantId**: string (ReadOnly): The tenant id of the system assigned identity.
* **type**: 'None' | 'SystemAssigned': The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the resource.
* **userAssignedIdentities**: [ManagedIdentityUserAssignedIdentities](#managedidentityuserassignedidentities): Dictionary of user assigned identities.

## ManagedIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## GrafanaResourceProperties
### Properties
* **endpoint**: string (ReadOnly): The endpoint of the Grafana instance.
* **grafanaVersion**: string (ReadOnly): The Grafana software version.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating'
* **zoneRedundancy**: 'Disabled' | 'Enabled'

## ResourceSku
### Properties
* **name**: string (Required)

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## GrafanaResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

