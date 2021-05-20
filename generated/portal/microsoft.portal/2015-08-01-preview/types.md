# Microsoft.Portal @ 2015-08-01-preview

## Resource Microsoft.Portal/dashboards@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DashboardProperties](#dashboardproperties): The shared dashboard properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.Portal/dashboards' (ReadOnly, DeployTimeConstant): The resource type

## DashboardProperties
### Properties
* **lenses**: [Dictionary<string,DashboardLens>](#dictionarystringdashboardlens): The dashboard lenses.
* **metadata**: [Dictionary<string,Object>](#dictionarystringobject): The dashboard metadata.

## Dictionary<string,DashboardLens>
### Properties
### Additional Properties
* **Additional Properties Type**: [DashboardLens](#dashboardlens)

## DashboardLens
### Properties
* **metadata**: [Dictionary<string,Object>](#dictionarystringobject): The dashboard len's metadata.
* **order**: int (Required): The lens order.
* **parts**: [Dictionary<string,DashboardParts>](#dictionarystringdashboardparts) (Required): The dashboard parts.

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,DashboardParts>
### Properties
### Additional Properties
* **Additional Properties Type**: [DashboardParts](#dashboardparts)

## DashboardParts
### Properties
* **metadata**: [Dictionary<string,Object>](#dictionarystringobject): A dashboard part metadata.
* **position**: [schemas:2_position](#schemas2position) (Required): The dashboard's part position.

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## schemas:2_position
### Properties
* **colSpan**: int (Required): The dashboard's part column span.
* **metadata**: [Dictionary<string,Object>](#dictionarystringobject): The dashboard part's metadata.
* **rowSpan**: int (Required): The dashboard's part row span.
* **x**: int (Required): The dashboard's part x coordinate.
* **y**: int (Required): The dashboard's part y coordinate.

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

