# Microsoft.ContainerService @ 2022-09-02-preview

## Resource Microsoft.ContainerService/fleets@2022-09-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FleetProperties](#fleetproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ContainerService/fleets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerService/fleets/members@2022-09-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-09-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FleetMemberProperties](#fleetmemberproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ContainerService/fleets/members' (ReadOnly, DeployTimeConstant): The resource type

## Function listCredentials (Microsoft.ContainerService/fleets@2022-09-02-preview)
* **Resource**: Microsoft.ContainerService/fleets
* **ApiVersion**: 2022-09-02-preview
* **Output**: [FleetCredentialResults](#fleetcredentialresults)

## FleetCredentialResult
### Properties
* **name**: string (ReadOnly): The name of the credential.
* **value**: any (ReadOnly): Base64-encoded Kubernetes configuration file.

## FleetCredentialResults
### Properties
* **kubeconfigs**: [FleetCredentialResult](#fleetcredentialresult)[] (ReadOnly): Array of base64-encoded Kubernetes configuration files.

## FleetHubProfile
### Properties
* **dnsPrefix**: string: DNS prefix used to create the FQDN for the Fleet hub.
* **fqdn**: string (ReadOnly): The FQDN of the Fleet hub.
* **kubernetesVersion**: string (ReadOnly): The Kubernetes version of the Fleet hub.

## FleetMemberProperties
### Properties
* **clusterResourceId**: string (Required): The ARM resource id of the cluster that joins the Fleet. Must be a valid Azure resource id. e.g.: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{clusterName}'.
* **provisioningState**: 'Canceled' | 'Failed' | 'Joining' | 'Leaving' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

## FleetProperties
### Properties
* **hubProfile**: [FleetHubProfile](#fleethubprofile): The FleetHubProfile configures the Fleet's hub.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

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

