# Microsoft.Portal @ 2020-09-01-preview

## Resource Microsoft.Portal/dashboards@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DashboardProperties](#dashboardproperties): The shared dashboard properties.
* **tags**: [DashboardTags](#dashboardtags): Resource tags
* **type**: 'Microsoft.Portal/dashboards' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Portal/tenantConfigurations@2020-09-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProperties](#configurationproperties): Tenant configuration properties.
* **type**: 'Microsoft.Portal/tenantConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## ConfigurationProperties
### Properties
* **enforcePrivateMarkdownStorage**: bool: When flag is set to true Markdown tile will require external storage configuration (URI). The inline content configuration will be prohibited.

## DashboardLens
### Properties
* **metadata**: [DashboardLensMetadata](#dashboardlensmetadata): The dashboard len's metadata.
* **order**: int (Required): The lens order.
* **parts**: [DashboardParts](#dashboardparts)[] (Required): The dashboard parts.

## DashboardLensMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DashboardPartMetadata
* **Discriminator**: type

### Base Properties
### MarkdownPartMetadata
#### Properties
* **inputs**: any[]: Input to dashboard part.
* **settings**: [MarkdownPartMetadataSettings](#markdownpartmetadatasettings): Markdown part settings.
* **type**: 'Extension/HubsExtension/PartType/MarkdownPart' (Required): The type of dashboard part.


## DashboardParts
### Properties
* **metadata**: [DashboardPartMetadata](#dashboardpartmetadata): The dashboard part's metadata.
* **position**: [DashboardPartsPosition](#dashboardpartsposition) (Required): The dashboard's part position.

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

## DashboardProperties
### Properties
* **lenses**: [DashboardLens](#dashboardlens)[]: The dashboard lenses.
* **metadata**: [DashboardPropertiesMetadata](#dashboardpropertiesmetadata): The dashboard metadata.

## DashboardPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DashboardTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MarkdownPartMetadataSettings
### Properties
* **content**: [MarkdownPartMetadataSettingsContent](#markdownpartmetadatasettingscontent): The content of markdown part.

## MarkdownPartMetadataSettingsContent
### Properties
* **settings**: [MarkdownPartMetadataSettingsContentSettings](#markdownpartmetadatasettingscontentsettings): The setting of the content of markdown part.

## MarkdownPartMetadataSettingsContentSettings
### Properties
* **content**: string: The content of the markdown part.
* **markdownSource**: int: The source of the content of the markdown part.
* **markdownUri**: string: The uri of markdown content.
* **subtitle**: string: The subtitle of the markdown part.
* **title**: string: The title of the markdown part.

