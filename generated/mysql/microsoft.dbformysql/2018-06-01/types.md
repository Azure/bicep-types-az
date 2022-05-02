# Microsoft.DBforMySQL @ 2018-06-01

## Resource Microsoft.DBforMySQL/servers/advisors@2018-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any (ReadOnly): Any object
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
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of a private endpoint connection.
* **type**: 'Microsoft.DBforMySQL/servers/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DBforMySQL/servers/privateLinkResources@2018-06-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Properties of a private link resource.
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

## RecommendationActionProperties
### Properties
* **actionId**: int (ReadOnly): Recommendation action identifier.
* **advisorName**: string (ReadOnly): Advisor name.
* **createdTime**: string (ReadOnly): Recommendation action creation time.
* **details**: [RecommendationActionPropertiesDetails](#recommendationactionpropertiesdetails) (ReadOnly): Recommendation action details.
* **expirationTime**: string (ReadOnly): Recommendation action expiration time.
* **reason**: string (ReadOnly): Recommendation action reason.
* **recommendationType**: string (ReadOnly): Recommendation action type.
* **sessionId**: string (ReadOnly): Recommendation action session identifier.

## RecommendationActionPropertiesDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpointProperty](#privateendpointproperty)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionStateProperty](#privatelinkserviceconnectionstateproperty)
* **provisioningState**: string (ReadOnly): State of the private endpoint connection.

## PrivateEndpointProperty
### Properties
* **id**: string: Resource id of the private endpoint.

## PrivateLinkServiceConnectionStateProperty
### Properties
* **actionsRequired**: string (ReadOnly): The actions required for private link service connection.
* **description**: string (Required): The private link service connection description.
* **status**: string (Required): The private link service connection status.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.

## QueryTextProperties
### Properties
* **queryId**: string (ReadOnly): Query identifier unique to the server.
* **queryText**: string (ReadOnly): Query text.

## QueryStatisticProperties
### Properties
* **aggregationFunction**: string (ReadOnly): Aggregation function name.
* **databaseNames**: string[] (ReadOnly): The list of database names.
* **endTime**: string (ReadOnly): Observation end time.
* **metricDisplayName**: string (ReadOnly): Metric display name.
* **metricName**: string (ReadOnly): Metric name.
* **metricValue**: int (ReadOnly): Metric value.
* **metricValueUnit**: string (ReadOnly): Metric value unit.
* **queryExecutionCount**: int (ReadOnly): Number of query executions in this time interval.
* **queryId**: string (ReadOnly): Database query identifier.
* **startTime**: string (ReadOnly): Observation start time.

## WaitStatisticProperties
### Properties
* **count**: int (ReadOnly): Wait event count observed in this time interval.
* **databaseName**: string (ReadOnly): Database Name.
* **endTime**: string (ReadOnly): Observation end time.
* **eventName**: string (ReadOnly): Wait event name.
* **eventTypeName**: string (ReadOnly): Wait event type name.
* **queryId**: int (ReadOnly): Database query identifier.
* **startTime**: string (ReadOnly): Observation start time.
* **totalTimeInMs**: int (ReadOnly): Total time of wait in milliseconds in this time interval.
* **userId**: int (ReadOnly): Database user identifier.

