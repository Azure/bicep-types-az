# Microsoft.InfrastructureInsights.Admin @ 2016-05-01

## Resource Microsoft.InfrastructureInsights.Admin/regionHealths/alerts@2016-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The Azure Region where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertModel](#alertmodel): Contains alert data.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.InfrastructureInsights.Admin/regionHealths/alerts' (ReadOnly, DeployTimeConstant): The resource type

## AlertModel
### Properties
* **alertId**: string: Gets or sets the ID of the alert.
* **alertProperties**: [Dictionary<string,String>](#dictionarystringstring): Properties of the alert.
* **closedByUserAlias**: string: User alias who closed the alert.
* **closedTimestamp**: string: Timestamp when the alert was closed.
* **createdTimestamp**: string: Timestamp when the alert was created.
* **description**: [Dictionary<string,String>](#dictionarystringstring)[]: Description of the alert.
* **faultId**: string: Gets or sets the fault ID of the alert.
* **faultTypeId**: string: Gets or sets the fault type ID of the alert.
* **hasValidRemediationAction**: bool: Indicates if the alert can be remediated.
* **impactedResourceDisplayName**: string: Display name for the impacted item.
* **impactedResourceId**: string: Gets or sets the Resource ID for the impacted item.
* **lastUpdatedTimestamp**: string: Timestamp when the alert was last updated.
* **remediation**: [Dictionary<string,String>](#dictionarystringstring)[]: Gets or sets the admin friendly remediation instructions for the alert.
* **resourceProviderRegistrationId**: string: Gets or sets the registration ID of the service the alert belongs to.
* **resourceRegistrationId**: string: Gets or sets the registration ID of the resource associated with the alert. If the alert is not associated with a resource, the resource registration ID is null.
* **severity**: string: Severity of the alert.
* **state**: string: State of the alert.
* **title**: string: Gets or sets the Resource ID for the impacted item.

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

