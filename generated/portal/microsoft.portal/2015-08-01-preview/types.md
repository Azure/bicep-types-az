# Microsoft.Portal @ 2015-08-01-preview

## Resource Microsoft.Portal/dashboards@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
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

## DashboardPartsPosition
### Properties
* **colSpan**: int (Required)
* **metadata**: DashboardPartsPositionMetadata
* **rowSpan**: int (Required)
* **x**: int (Required)
* **y**: int (Required)

## DashboardPartsPositionMetadata
### Properties

## DashboardPropertiesMetadata
### Properties

## DashboardTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

