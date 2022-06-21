# Microsoft.Network @ 2017-09-01-preview

## Resource Microsoft.Network/trafficmanagerprofiles/heatMaps@2017-09-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [HeatMapProperties](#heatmapproperties) (ReadOnly): The properties of the Traffic Manager HeatMap.
* **type**: 'Microsoft.Network/trafficmanagerprofiles/heatMaps' (ReadOnly, DeployTimeConstant): The resource type

## HeatMapEndpoint
### Properties
* **endpointId**: int: A number uniquely identifying this endpoint in query experiences.
* **resourceId**: string: The ARM Resource ID of this Traffic Manager endpoint.

## HeatMapProperties
### Properties
* **endpoints**: [HeatMapEndpoint](#heatmapendpoint)[]: The endpoints used in this HeatMap calculation.
* **endTime**: string: The ending of the time window for this HeatMap, exclusive.
* **startTime**: string: The beginning of the time window for this HeatMap, inclusive.
* **trafficFlows**: [TrafficFlow](#trafficflow)[]: The traffic flows produced in this HeatMap calculation.

## QueryExperience
### Properties
* **endpointId**: int (Required): The id of the endpoint from the 'endpoints' array which these queries were routed to.
* **latency**: int: The latency experienced by queries originating from this location.
* **queryCount**: int (Required): The number of queries originating from this location.

## TrafficFlow
### Properties
* **latitude**: int: The approximate latitude that these queries originated from.
* **longitude**: int: The approximate longitude that these queries originated from.
* **queryExperiences**: [QueryExperience](#queryexperience)[]: The query experiences produced in this HeatMap calculation.
* **sourceIp**: string: The IP address that this query experience originated from.

