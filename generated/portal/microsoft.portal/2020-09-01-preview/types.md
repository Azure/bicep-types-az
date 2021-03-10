# Microsoft.Portal @ 2020-09-01-preview

## Resource Microsoft.Portal/dashboards@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DashboardProperties](#dashboardproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Portal/dashboards' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Portal/tenantConfigurations@2020-09-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConfigurationProperties](#configurationproperties)
* **type**: 'Microsoft.Portal/tenantConfigurations' (ReadOnly, DeployTimeConstant)

## DashboardProperties
### Properties
* **lenses**: [DashboardLens](#dashboardlens)[]
* **metadata**: [Dictionary<string,Object>](#dictionarystringobject)

## DashboardLens
### Properties
* **metadata**: [Dictionary<string,Object>](#dictionarystringobject)
* **order**: int (Required)
* **parts**: [DashboardParts](#dashboardparts)[] (Required)

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DashboardParts
### Properties
* **metadata**: [DashboardPartMetadata](#dashboardpartmetadata)
* **position**: [schemas:1_position](#schemas1position) (Required)

## DashboardPartMetadata
* **Discriminator**: type
### Base Properties
### Extension/HubsExtension/PartType/MarkdownPart
#### Properties
* **inputs**: any[]
* **settings**: [schemas:3_settings](#schemas3settings)
* **type**: 'Extension/HubsExtension/PartType/MarkdownPart' (Required)


## Extension/HubsExtension/PartType/MarkdownPart
### Properties
* **inputs**: any[]
* **settings**: [schemas:3_settings](#schemas3settings)
* **type**: 'Extension/HubsExtension/PartType/MarkdownPart' (Required)

## schemas:3_settings
### Properties
* **content**: [schemas:3_settings_content](#schemas3settingscontent)

## schemas:3_settings_content
### Properties
* **settings**: [schemas:3_settings_content_settings](#schemas3settingscontentsettings)

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
* **metadata**: [Dictionary<string,Object>](#dictionarystringobject)
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

