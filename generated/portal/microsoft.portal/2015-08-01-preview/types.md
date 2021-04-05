# Microsoft.Portal @ 2015-08-01-preview

## Resource Microsoft.Portal/dashboards@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DashboardProperties](#dashboardproperties): The shared dashboard properties.
* **tags**: [DashboardTags](#dashboardtags): Resource tags
* **type**: 'Microsoft.Portal/dashboards' (ReadOnly, DeployTimeConstant): The resource type

## DashboardProperties
### Properties
* **lenses**: [DashboardPropertiesLenses](#dashboardpropertieslenses): The dashboard lenses.
* **metadata**: [DashboardPropertiesMetadata](#dashboardpropertiesmetadata): The dashboard metadata.

## DashboardPropertiesLenses
### Properties
### Additional Properties
* **Additional Properties Type**: [DashboardLens](#dashboardlens)

## DashboardLens
### Properties
* **metadata**: [DashboardLensMetadata](#dashboardlensmetadata): The dashboard len's metadata.
* **order**: int (Required): The lens order.
* **parts**: [DashboardLensParts](#dashboardlensparts) (Required): The dashboard parts.

## DashboardLensMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DashboardLensParts
### Properties
### Additional Properties
* **Additional Properties Type**: [DashboardParts](#dashboardparts)

## DashboardParts
### Properties
* **metadata**: [DashboardPartsMetadata](#dashboardpartsmetadata): The dashboard part's metadata.
* **position**: [DashboardPartsPosition](#dashboardpartsposition) (Required): The dashboard's part position.

## DashboardPartsMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DashboardPartsPosition
### Properties
* **colSpan**: int (Required): The dashboard's part column span.
* **metadata**: [DashboardPartsPositionMetadata](#dashboardpartspositionmetadata): The dashboard part's metadata.
* **rowSpan**: int (Required): The dashboard's part row span.
* **x**: int (Required): The dashboard's part x coordinate.
* **y**: int (Required): The dashboard's part y coordinate.

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

