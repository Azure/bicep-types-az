# Microsoft.Portal @ 2019-01-01-preview

## Resource Microsoft.Portal/dashboards@2019-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DashboardProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Portal/dashboards' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Portal/tenantConfigurations@2019-01-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConfigurationProperties
* **type**: 'Microsoft.Portal/tenantConfigurations' (ReadOnly, DeployTimeConstant)

## DashboardProperties
### Properties
* **lenses**: Dictionary<string,DashboardLens>
* **metadata**: Dictionary<string,Object>

## Dictionary<string,DashboardLens>
### Properties
### Additional Properties
* **Additional Properties Type**: DashboardLens

## DashboardLens
### Properties
* **metadata**: Dictionary<string,Object>
* **order**: int (Required)
* **parts**: Dictionary<string,DashboardParts> (Required)

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,DashboardParts>
### Properties
### Additional Properties
* **Additional Properties Type**: DashboardParts

## DashboardParts
### Properties
* **metadata**: Dictionary<string,Object>
* **position**: schemas:1_position (Required)

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

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

