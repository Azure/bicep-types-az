# Microsoft.Portal @ 2018-10-01-preview

## Resource Microsoft.Portal/dashboards@2018-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DashboardProperties
* **tags**: DashboardTags
* **type**: 'Microsoft.Portal/dashboards' (ReadOnly, DeployTimeConstant)

## DashboardProperties
### Properties
* **lenses**: DashboardPropertiesLenses
* **metadata**: DashboardPropertiesMetadata

## DashboardPropertiesLenses
### Properties
### Additional Properties
* **Additional Properties Type**: DashboardLens

## DashboardLens
### Properties
* **metadata**: DashboardLensMetadata
* **order**: int (Required)
* **parts**: DashboardLensParts (Required)

## DashboardLensMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DashboardLensParts
### Properties
### Additional Properties
* **Additional Properties Type**: DashboardParts

## DashboardParts
### Properties
* **metadata**: DashboardPartsMetadata
* **position**: DashboardPartsPosition (Required)

## DashboardPartsMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DashboardPartsPosition
### Properties
* **colSpan**: int (Required)
* **metadata**: DashboardPartsPositionMetadata
* **rowSpan**: int (Required)
* **x**: int (Required)
* **y**: int (Required)

## DashboardPartsPositionMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DashboardPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DashboardTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

