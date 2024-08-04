# Microsoft.Orbital @ 2024-03-01

## Resource Microsoft.Orbital/edgeSites@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 2, maxLength: 64, pattern: "^[A-Za-z][A-Za-z0-9-_]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [EdgeSiteProperties](#edgesiteproperties) (Required): The properties bag for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Orbital/edgeSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Orbital/groundStations@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 2, maxLength: 64, pattern: "^[A-Za-z][A-Za-z0-9-_]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GroundStationProperties](#groundstationproperties): Properties of the Ground Station.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Orbital/groundStations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Orbital/l2Connections@2024-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 2, maxLength: 64, pattern: "^[A-Za-z][A-Za-z0-9-_]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [L2ConnectionProperties](#l2connectionproperties) (Required): The properties bag for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Orbital/l2Connections' (ReadOnly, DeployTimeConstant): The resource type

## Function listL2Connections (Microsoft.Orbital/groundStations@2024-03-01)
* **Resource**: Microsoft.Orbital/groundStations
* **ApiVersion**: 2024-03-01
* **Output**: [ResourceIdListResult](#resourceidlistresult)

## Function listL2Connections (Microsoft.Orbital/edgeSites@2024-03-01)
* **Resource**: Microsoft.Orbital/edgeSites
* **ApiVersion**: 2024-03-01
* **Output**: [ResourceIdListResult](#resourceidlistresult)

## EdgeSiteProperties
### Properties
* **globalCommunicationsSite**: [EdgeSitesPropertiesGlobalCommunicationsSite](#edgesitespropertiesglobalcommunicationssite) (Required): A reference to global communications site.

## EdgeSitesPropertiesGlobalCommunicationsSite
### Properties
* **id**: string (Required): Resource ID.

## GroundStationProperties
### Properties
* **altitudeMeters**: int: Altitude of the ground station.
* **capabilities**: ('Communication' | 'EarthObservation' | string)[] (Required): Ground station capabilities.
* **city**: string: City of ground station.
* **globalCommunicationsSite**: [GroundStationsPropertiesGlobalCommunicationsSite](#groundstationspropertiesglobalcommunicationssite) (Required): A reference to global communications site.
* **latitudeDegrees**: int: Latitude of the ground station in decimal degrees.
* **longitudeDegrees**: int: Longitude of the ground station in decimal degrees.
* **providerName**: string: Ground station provider name.
* **releaseMode**: 'GA' | 'Preview' | string (ReadOnly): Release Status of a ground station.

## GroundStationsPropertiesGlobalCommunicationsSite
### Properties
* **id**: string (Required): Resource ID.

## L2ConnectionProperties
### Properties
* **circuitId**: string (ReadOnly): Globally-unique identifier for this connection that is to be used as a circuit ID.
* **edgeSite**: [L2ConnectionsPropertiesEdgeSite](#l2connectionspropertiesedgesite) (Required): A reference to an Microsoft.Orbital/edgeSites resource to route traffic for.
* **edgeSitePartnerRouter**: [L2ConnectionsPropertiesEdgeSitePartnerRouter](#l2connectionspropertiesedgesitepartnerrouter) (Required): The name of the partner router that cross-connects with the Orbital Edge Router at the edge site.
* **groundStation**: [L2ConnectionsPropertiesGroundStation](#l2connectionspropertiesgroundstation) (Required): A reference to an Microsoft.Orbital/groundStations resource to route traffic for.
* **groundStationPartnerRouter**: [L2ConnectionsPropertiesGroundStationPartnerRouter](#l2connectionspropertiesgroundstationpartnerrouter) (Required): The name of the partner router to establish a connection to within the ground station.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The current state of the resource's creation, deletion, or modification.
* **vlanId**: int {minValue: 1, maxValue: 4094} (Required): The VLAN ID for the L2 connection.

## L2ConnectionsPropertiesEdgeSite
### Properties
* **id**: string (Required): Resource ID.

## L2ConnectionsPropertiesEdgeSitePartnerRouter
### Properties
* **name**: string (Required): The unique name of the partner router that cross-connects with the Orbital Edge Router at the edge site.

## L2ConnectionsPropertiesGroundStation
### Properties
* **id**: string (Required): Resource ID.

## L2ConnectionsPropertiesGroundStationPartnerRouter
### Properties
* **name**: string (Required): The unique name of the partner router that cross-connects with the Orbital Edge Router at the ground station site.

## ResourceIdListResult
### Properties
* **nextLink**: string (ReadOnly): The URL to get the next set of results.
* **value**: [ResourceIdListResultValueItem](#resourceidlistresultvalueitem)[]: A list of Azure Resource IDs.

## ResourceIdListResult
### Properties
* **nextLink**: string (ReadOnly): The URL to get the next set of results.
* **value**: [ResourceIdListResultValueItem](#resourceidlistresultvalueitem)[]: A list of Azure Resource IDs.

## ResourceIdListResultValueItem
### Properties
* **id**: string: The Azure Resource ID.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

