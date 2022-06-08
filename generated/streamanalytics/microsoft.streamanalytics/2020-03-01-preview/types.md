# Microsoft.StreamAnalytics @ 2020-03-01-preview

## Resource Microsoft.StreamAnalytics/clusters@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The current entity tag for the cluster. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): The properties associated with a Stream Analytics cluster.
* **sku**: [ClusterSku](#clustersku): The SKU of the cluster. This determines the size/capacity of the cluster. Required on PUT (CreateOrUpdate) requests.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.StreamAnalytics/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StreamAnalytics/clusters/privateEndpoints@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Unique opaque string (generally a GUID) that represents the metadata state of the resource (private endpoint) and changes whenever the resource is updated. Required on PUT (CreateOrUpdate) requests.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointProperties](#privateendpointproperties): The properties associated with a private endpoint.
* **type**: 'Microsoft.StreamAnalytics/clusters/privateEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Function listStreamingJobs (Microsoft.StreamAnalytics/clusters@2020-03-01-preview)
* **Resource**: Microsoft.StreamAnalytics/clusters
* **ApiVersion**: 2020-03-01-preview
* **Output**: [ClusterJobListResult](#clusterjoblistresult)

## ClusterJob
### Properties
* **id**: string (ReadOnly): Resource ID of the streaming job.
* **jobState**: 'Created' | 'Degraded' | 'Deleting' | 'Failed' | 'Restarting' | 'Running' | 'Scaling' | 'Starting' | 'Stopped' | 'Stopping' | string (ReadOnly): The current execution state of the streaming job.
* **streamingUnits**: int (ReadOnly): The number of streaming units that are used by the streaming job.

## ClusterJobListResult
### Properties
* **nextLink**: string (ReadOnly): The URL to fetch the next set of streaming jobs.
* **value**: [ClusterJob](#clusterjob)[] (ReadOnly): A list of streaming jobs.

## ClusterProperties
### Properties
* **capacityAllocated**: int (ReadOnly): Represents the number of streaming units currently being used on the cluster.
* **capacityAssigned**: int (ReadOnly): Represents the sum of the SUs of all streaming jobs associated with the cluster. If all of the jobs were running, this would be the capacity allocated.
* **clusterId**: string (ReadOnly): Unique identifier for the cluster.
* **createdDate**: string (ReadOnly): The date this cluster was created.
* **provisioningState**: 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): The status of the cluster provisioning. The three terminal states are: Succeeded, Failed and Canceled

## ClusterSku
### Properties
* **capacity**: int: Denotes the number of streaming units the cluster can support. Valid values for this property are multiples of 36 with a minimum value of 36 and maximum value of 216. Required on PUT (CreateOrUpdate) requests.
* **name**: 'Default' | string: Specifies the SKU name of the cluster. Required on PUT (CreateOrUpdate) requests.

## PrivateEndpointProperties
### Properties
* **createdDate**: string (ReadOnly): The date when this private endpoint was created.
* **manualPrivateLinkServiceConnections**: [PrivateLinkServiceConnection](#privatelinkserviceconnection)[]: A list of connections to the remote resource. Immutable after it is set.

## PrivateLinkConnectionState
### Properties
* **actionsRequired**: string (ReadOnly): A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string (ReadOnly): The reason for approval/rejection of the connection.
* **status**: string (ReadOnly): Indicates whether the connection has been Approved/Rejected/Removed by the owner of the remote resource/service.

## PrivateLinkServiceConnection
### Properties
* **properties**: [PrivateLinkServiceConnectionProperties](#privatelinkserviceconnectionproperties): Bag of properties defining a privatelinkServiceConnection.

## PrivateLinkServiceConnectionProperties
### Properties
* **groupIds**: string[]: The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to. Required on PUT (CreateOrUpdate) requests.
* **privateLinkServiceConnectionState**: [PrivateLinkConnectionState](#privatelinkconnectionstate): A collection of read-only information about the state of the connection to the private remote resource.
* **privateLinkServiceId**: string: The resource id of the private link service. Required on PUT (CreateOrUpdate) requests.
* **requestMessage**: string (ReadOnly): A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

