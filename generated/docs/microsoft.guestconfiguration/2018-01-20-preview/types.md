# Microsoft.GuestConfiguration @ 2018-01-20-preview

## Microsoft.GuestConfiguration/guestConfigurationAssignments
### Properties
* **apiVersion**: '2018-01-20-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: GuestConfigurationAssignmentProperties
* **type**: 'Microsoft.GuestConfiguration/guestConfigurationAssignments' (ReadOnly, DeployTimeConstant)

## GuestConfigurationAssignmentProperties
### Properties
* **assignmentHash**: string (ReadOnly)
* **complianceReason**: string (ReadOnly)
* **complianceStatus**: 'Compliant' | 'NotCompliant' | 'Pending' (ReadOnly)
* **guestConfiguration**: GuestConfigurationNavigation
* **latestReportId**: string (ReadOnly)
* **location**: string (ReadOnly)
* **provisioningState**: 'Succeeded' (ReadOnly)

## GuestConfigurationNavigation
### Properties
* **configurationParameter**: ConfigurationParameterList
* **kind**: 'DSC'
* **name**: string (ReadOnly)
* **type**: string (ReadOnly)

## ConfigurationParameterList
### Properties
* **value**: ConfigurationParameter[]

## ConfigurationParameter
### Properties
* **name**: string (ReadOnly)
* **value**: string (ReadOnly)

