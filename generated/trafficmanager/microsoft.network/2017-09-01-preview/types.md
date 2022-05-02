# Microsoft.Network @ 2017-09-01-preview

## Resource Microsoft.Network/trafficmanagerprofiles/heatMaps@2017-09-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [HeatMapProperties](#heatmapproperties) (ReadOnly): Class representing a Traffic Manager HeatMap properties.
* **type**: 'Microsoft.Network/trafficmanagerprofiles/heatMaps' (ReadOnly, DeployTimeConstant): The resource type

## HeatMapProperties
### Properties
* **endpoints**: [HeatMapEndpoint](#heatmapendpoint)[] (ReadOnly): The endpoints used in this HeatMap calculation.
* **endTime**: string (ReadOnly): The ending of the time window for this HeatMap, exclusive.
* **startTime**: string (ReadOnly): The beginning of the time window for this HeatMap, inclusive.
* **trafficFlows**: [TrafficFlow](#trafficflow)[] (ReadOnly): The traffic flows produced in this HeatMap calculation.

## HeatMapEndpoint
### Properties
* **endpointId**: int (ReadOnly): A number uniquely identifying this endpoint in query experiences.
* **resourceId**: string (ReadOnly): The ARM Resource ID of this Traffic Manager endpoint.

## TrafficFlow
### Properties
* **latitude**: int (ReadOnly): The approximate latitude that these queries originated from.
* **longitude**: int (ReadOnly): The approximate longitude that these queries originated from.
* **queryExperiences**: [QueryExperience](#queryexperience)[] (ReadOnly): The query experiences produced in this HeatMap calculation.
* **sourceIp**: string (ReadOnly): The IP address that this query experience originated from.

## QueryExperience
### Properties
* **endpointId**: int (ReadOnly): The id of the endpoint from the 'endpoints' array which these queries were routed to.
* **latency**: int (ReadOnly): The latency experienced by queries originating from this location.
* **queryCount**: int (ReadOnly): The number of queries originating from this location.

