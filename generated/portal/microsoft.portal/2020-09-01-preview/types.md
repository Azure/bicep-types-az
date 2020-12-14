# Microsoft.Portal @ 2020-09-01-preview

## Resource Microsoft.Portal/dashboards@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DashboardProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Portal/dashboards' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Portal/tenantConfigurations@2020-09-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConfigurationProperties
* **type**: 'Microsoft.Portal/tenantConfigurations' (ReadOnly, DeployTimeConstant)

## DashboardProperties
### Properties
* **lenses**: DashboardLens[]
* **metadata**: Dictionary<string,Object>

## DashboardLens
### Properties
* **metadata**: Dictionary<string,Object>
* **order**: int (Required)
* **parts**: DashboardParts[] (Required)

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DashboardParts
### Properties
* **metadata**: DashboardPartMetadata
* **position**: schemas:1_position (Required)

## DashboardPartMetadata
* **Discriminator**: type
### Base Properties
### Extension/HubsExtension/PartType/MarkdownPart
#### Properties
* **inputs**: any[]
* **settings**: schemas:3_settings
* **type**: 'Extension/HubsExtension/PartType/MarkdownPart' (Required)


## Extension/HubsExtension/PartType/MarkdownPart
### Properties
* **inputs**: any[]
* **settings**: schemas:3_settings
* **type**: 'Extension/HubsExtension/PartType/MarkdownPart' (Required)

## schemas:3_settings
### Properties
* **content**: schemas:3_settings_content

## schemas:3_settings_content
### Properties
* **settings**: schemas:3_settings_content_settings

## schemas:3_settings_content_settings
### Properties
* **content**: string
* **markdownSource**: int
* **markdownUri**: string
* **subtitle**: string
* **title**: string

## schemas:1_position
### Properties
* **colSpan**: int (Required)
* **metadata**: Dictionary<string,Object>
* **rowSpan**: int (Required)
* **x**: int (Required)
* **y**: int (Required)

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

## ConfigurationProperties
### Properties
* **enforcePrivateMarkdownStorage**: bool

