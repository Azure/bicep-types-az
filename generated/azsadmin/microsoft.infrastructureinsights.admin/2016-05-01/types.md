# Microsoft.InfrastructureInsights.Admin @ 2016-05-01

## Resource Microsoft.InfrastructureInsights.Admin/regionHealths/alerts@2016-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AlertModel
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.InfrastructureInsights.Admin/regionHealths/alerts' (ReadOnly, DeployTimeConstant)

## AlertModel
### Properties
* **alertId**: string
* **alertProperties**: Dictionary<string,String>
* **closedByUserAlias**: string
* **closedTimestamp**: string
* **createdTimestamp**: string
* **description**: Dictionary<string,String>[]
* **faultId**: string
* **faultTypeId**: string
* **hasValidRemediationAction**: bool
* **impactedResourceDisplayName**: string
* **impactedResourceId**: string
* **lastUpdatedTimestamp**: string
* **remediation**: Dictionary<string,String>[]
* **resourceProviderRegistrationId**: string
* **resourceRegistrationId**: string
* **severity**: string
* **state**: string
* **title**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

