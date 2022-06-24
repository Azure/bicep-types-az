# Microsoft.DBforMySQL @ 2018-06-01

## Resource Microsoft.DBforMySQL/servers/advisors@2018-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any (ReadOnly): The properties of a recommendation action advisor.
* **type**: 'Microsoft.DBforMySQL/servers/advisors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/servers/advisors/recommendedActions@2018-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RecommendationActionProperties](#recommendationactionproperties) (ReadOnly): The properties of a recommendation action.
* **type**: 'Microsoft.DBforMySQL/servers/advisors/recommendedActions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/servers/privateEndpointConnections@2018-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: 'Microsoft.DBforMySQL/servers/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/servers/privateLinkResources@2018-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): The private link resource group id.
* **type**: 'Microsoft.DBforMySQL/servers/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/servers/queryTexts@2018-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QueryTextProperties](#querytextproperties) (ReadOnly): The properties of a query text.
* **type**: 'Microsoft.DBforMySQL/servers/queryTexts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/servers/topQueryStatistics@2018-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QueryStatisticProperties](#querystatisticproperties) (ReadOnly): The properties of a query statistic.
* **type**: 'Microsoft.DBforMySQL/servers/topQueryStatistics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/servers/waitStatistics@2018-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WaitStatisticProperties](#waitstatisticproperties) (ReadOnly): The properties of a wait statistic.
* **type**: 'Microsoft.DBforMySQL/servers/waitStatistics' (ReadOnly, DeployTimeConstant): The resource type

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty): Private endpoint which the connection belongs to.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty): Connection state of the private endpoint connection.
* **provisioningState**: string (ReadOnly): State of the private endpoint connection.

## PrivateEndpointProperty
### Properties
* **id**: string: Resource id of the private endpoint.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly): The actions required for private link service connection.
* **description**: string (Required): The private link service connection description.
* **status**: string (Required): The private link service connection status.

## QueryStatisticProperties
### Properties
* **aggregationFunction**: string: Aggregation function name.
* **databaseNames**: string[]: The list of database names.
* **endTime**: string: Observation end time.
* **metricDisplayName**: string: Metric display name.
* **metricName**: string: Metric name.
* **metricValue**: int: Metric value.
* **metricValueUnit**: string: Metric value unit.
* **queryExecutionCount**: int: Number of query executions in this time interval.
* **queryId**: string: Database query identifier.
* **startTime**: string: Observation start time.

## QueryTextProperties
### Properties
* **queryId**: string: Query identifier unique to the server.
* **queryText**: string: Query text.

## RecommendationActionProperties
### Properties
* **actionId**: int: Recommendation action identifier.
* **advisorName**: string: Advisor name.
* **createdTime**: string: Recommendation action creation time.
* **details**: [RecommendationActionPropertiesDetails](#recommendationactionpropertiesdetails): Recommendation action details.
* **expirationTime**: string: Recommendation action expiration time.
* **reason**: string: Recommendation action reason.
* **recommendationType**: string: Recommendation action type.
* **sessionId**: string: Recommendation action session identifier.

## RecommendationActionPropertiesDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WaitStatisticProperties
### Properties
* **count**: int: Wait event count observed in this time interval.
* **databaseName**: string: Database Name.
* **endTime**: string: Observation end time.
* **eventName**: string: Wait event name.
* **eventTypeName**: string: Wait event type name.
* **queryId**: int: Database query identifier.
* **startTime**: string: Observation start time.
* **totalTimeInMs**: int: Total time of wait in milliseconds in this time interval.
* **userId**: int: Database user identifier.

