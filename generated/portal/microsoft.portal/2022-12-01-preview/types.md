# Microsoft.Portal @ 2022-12-01-preview

## Resource Microsoft.Portal/dashboards@2022-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DashboardPropertiesWithProvisioningState](#dashboardpropertieswithprovisioningstate): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Portal/dashboards' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Portal/tenantConfigurations@2022-12-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2022-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^(?!con$|prn$|aux$|nul$|com[1-9]$)(?!.*[._-]{2,})[a-zA-Z0-9]([a-zA-Z0-9-._]*[a-zA-Z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProperties](#configurationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Portal/tenantConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## ConfigurationProperties
### Properties
* **enforcePrivateMarkdownStorage**: bool: When flag is set to true Markdown tile will require external storage configuration (URI). The inline content configuration will be prohibited.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.

## DashboardLens
### Properties
* **metadata**: any: The dashboard len's metadata.
* **order**: int (Required): The lens order.
* **parts**: [DashboardParts](#dashboardparts)[] (Required): The dashboard parts.

## DashboardPartMetadata
* **Discriminator**: type

### Base Properties

### MarkdownPartMetadata
#### Properties
* **inputs**: any[]: Input to dashboard part.
* **settings**: [MarkdownPartMetadataSettings](#markdownpartmetadatasettings): Markdown part settings.
* **type**: 'Extension/HubsExtension/PartType/MarkdownPart' (Required): The dashboard part metadata type.


## DashboardParts
### Properties
* **metadata**: [DashboardPartMetadata](#dashboardpartmetadata): The dashboard part's metadata.
* **position**: [DashboardPartsPosition](#dashboardpartsposition) (Required): The dashboard's part position.

## DashboardPartsPosition
### Properties
* **colSpan**: int (Required): The dashboard's part column span.
* **metadata**: any: The dashboard part's metadata.
* **rowSpan**: int (Required): The dashboard's part row span.
* **x**: int (Required): The dashboard's part x coordinate.
* **y**: int (Required): The dashboard's part y coordinate.

## DashboardPropertiesWithProvisioningState
### Properties
* **lenses**: [DashboardLens](#dashboardlens)[]: The dashboard lenses.
* **metadata**: any: The dashboard metadata.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last operation.

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

