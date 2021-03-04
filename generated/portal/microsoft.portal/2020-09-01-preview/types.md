# Microsoft.Portal @ 2020-09-01-preview

## Resource Microsoft.Portal/dashboards@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DashboardProperties
* **tags**: DashboardTags
* **type**: 'Microsoft.Portal/dashboards' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Portal/tenantConfigurations@2020-09-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: ConfigurationProperties
* **type**: 'Microsoft.Portal/tenantConfigurations' (ReadOnly, DeployTimeConstant)

## DashboardProperties
### Properties
* **lenses**: DashboardLens[]
* **metadata**: DashboardPropertiesMetadata

## DashboardLens
### Properties
* **metadata**: DashboardLensMetadata
* **order**: int (Required)
* **parts**: DashboardParts[] (Required)

## DashboardLensMetadata
### Properties

## DashboardParts
### Properties
* **metadata**: DashboardPartMetadata
* **position**: DashboardPartsPosition (Required)

## DashboardPartMetadata
* **Discriminator**: type

### Base Properties
### MarkdownPartMetadata
#### Properties
* **inputs**: array
* **settings**: MarkdownPartMetadataSettings
* **type**: 'Extension/HubsExtension/PartType/MarkdownPart' (Required)


## MarkdownPartMetadata
### Properties
* **inputs**: array
* **settings**: MarkdownPartMetadataSettings
* **type**: 'Extension/HubsExtension/PartType/MarkdownPart' (Required)

## MarkdownPartMetadataSettings
### Properties
* **content**: MarkdownPartMetadataSettingsContent

## MarkdownPartMetadataSettingsContent
### Properties
* **settings**: MarkdownPartMetadataSettingsContentSettings

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

## ConfigurationProperties
### Properties
* **enforcePrivateMarkdownStorage**: bool

