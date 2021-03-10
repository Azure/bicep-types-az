# Microsoft.Portal @ 2020-09-01-preview

## Resource Microsoft.Portal/dashboards@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DashboardProperties](#dashboardproperties)
* **tags**: [DashboardTags](#dashboardtags)
* **type**: 'Microsoft.Portal/dashboards' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Portal/tenantConfigurations@2020-09-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ConfigurationProperties](#configurationproperties)
* **type**: 'Microsoft.Portal/tenantConfigurations' (ReadOnly, DeployTimeConstant)

## DashboardProperties
### Properties
* **lenses**: [DashboardLens](#dashboardlens)[]
* **metadata**: [DashboardPropertiesMetadata](#dashboardpropertiesmetadata)

## DashboardLens
### Properties
* **metadata**: [DashboardLensMetadata](#dashboardlensmetadata)
* **order**: int (Required)
* **parts**: [DashboardParts](#dashboardparts)[] (Required)

## DashboardLensMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DashboardParts
### Properties
* **metadata**: [DashboardPartMetadata](#dashboardpartmetadata)
* **position**: [DashboardPartsPosition](#dashboardpartsposition) (Required)

## DashboardPartMetadata
* **Discriminator**: type

### Base Properties
### MarkdownPartMetadata
#### Properties
* **inputs**: any[]
* **settings**: [MarkdownPartMetadataSettings](#markdownpartmetadatasettings)
* **type**: 'Extension/HubsExtension/PartType/MarkdownPart' (Required)


## MarkdownPartMetadata
### Properties
* **inputs**: any[]
* **settings**: [MarkdownPartMetadataSettings](#markdownpartmetadatasettings)
* **type**: 'Extension/HubsExtension/PartType/MarkdownPart' (Required)

## MarkdownPartMetadataSettings
### Properties
* **content**: [MarkdownPartMetadataSettingsContent](#markdownpartmetadatasettingscontent)

## MarkdownPartMetadataSettingsContent
### Properties
* **settings**: [MarkdownPartMetadataSettingsContentSettings](#markdownpartmetadatasettingscontentsettings)

## MarkdownPartMetadataSettingsContentSettings
### Properties
* **content**: string
* **markdownSource**: int
* **markdownUri**: string
* **subtitle**: string
* **title**: string

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

## ConfigurationProperties
### Properties
* **enforcePrivateMarkdownStorage**: bool

