# Microsoft.Portal @ 2015-08-01-preview

## Resource Microsoft.Portal/dashboards@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DashboardProperties](#dashboardproperties)
* **tags**: [DashboardTags](#dashboardtags)
* **type**: 'Microsoft.Portal/dashboards' (ReadOnly, DeployTimeConstant)

## DashboardProperties
### Properties
* **lenses**: [DashboardPropertiesLenses](#dashboardpropertieslenses)
* **metadata**: [DashboardPropertiesMetadata](#dashboardpropertiesmetadata)

## DashboardPropertiesLenses
### Properties
### Additional Properties
* **Additional Properties Type**: [DashboardLens](#dashboardlens)

## DashboardLens
### Properties
* **metadata**: [DashboardLensMetadata](#dashboardlensmetadata)
* **order**: int (Required)
* **parts**: [DashboardLensParts](#dashboardlensparts) (Required)

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
* **metadata**: [DashboardPartsMetadata](#dashboardpartsmetadata)
* **position**: [DashboardPartsPosition](#dashboardpartsposition) (Required)

## DashboardPartsMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DashboardPartsPosition
### Properties
* **colSpan**: int (Required)
* **metadata**: [DashboardPartsPositionMetadata](#dashboardpartspositionmetadata)
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

