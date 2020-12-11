# Microsoft.Portal @ 2018-10-01-preview

## Resource Microsoft.Portal/dashboards@2018-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DashboardProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Portal/dashboards' (ReadOnly, DeployTimeConstant)

## DashboardProperties
### Properties
* **lenses**: Dictionary<string,DashboardLens>
* **metadata**: Dictionary<string,Object>

## Dictionary<string,DashboardLens>
### Additional Properties
* **Additional Properties Type**: DashboardLens

## DashboardLens
### Properties
* **metadata**: Dictionary<string,Object>
* **order**: int (Required)
* **parts**: Dictionary<string,DashboardParts> (Required)

## Dictionary<string,Object>
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,DashboardParts>
### Additional Properties
* **Additional Properties Type**: DashboardParts

## DashboardParts
### Properties
* **metadata**: Dictionary<string,Object>
* **position**: schemas:1_position (Required)

## Dictionary<string,Object>
### Additional Properties
* **Additional Properties Type**: any

## schemas:1_position
### Properties
* **colSpan**: int (Required)
* **metadata**: Dictionary<string,Object>
* **rowSpan**: int (Required)
* **x**: int (Required)
* **y**: int (Required)

## Dictionary<string,Object>
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,Object>
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

