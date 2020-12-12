# Microsoft.GuestConfiguration @ 2018-06-30-preview

## Resource Microsoft.GuestConfiguration/guestConfigurationAssignments@2018-06-30-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2018-06-30-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: GuestConfigurationAssignmentProperties
* **type**: 'Microsoft.GuestConfiguration/guestConfigurationAssignments' (ReadOnly, DeployTimeConstant)

## GuestConfigurationAssignmentProperties
### Properties
* **assignmentHash**: string (ReadOnly)
* **complianceStatus**: 'Compliant' | 'NonCompliant' | 'Pending' (ReadOnly)
* **context**: string
* **guestConfiguration**: GuestConfigurationNavigation
* **lastComplianceStatusChecked**: string (ReadOnly)
* **latestReportId**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Created' | 'Failed' | 'Succeeded' (ReadOnly)

## GuestConfigurationNavigation
### Properties
* **configurationParameter**: ConfigurationParameter[]
* **configurationSetting**: ConfigurationSetting
* **contentHash**: string (ReadOnly)
* **contentUri**: string (ReadOnly)
* **kind**: 'DSC'
* **name**: string
* **version**: string

## ConfigurationParameter
### Properties
* **name**: string (ReadOnly)
* **value**: string (ReadOnly)

## ConfigurationSetting
### Properties
* **actionAfterReboot**: 'ContinueConfiguration' | 'StopConfiguration' (ReadOnly)
* **allowModuleOverwrite**: 'False' | 'True'
* **configurationMode**: 'ApplyAndAutoCorrect' | 'ApplyAndMonitor' | 'ApplyOnly' (ReadOnly)
* **configurationModeFrequencyMins**: int (ReadOnly)
* **rebootIfNeeded**: 'False' | 'True' (ReadOnly)
* **refreshFrequencyMins**: int (ReadOnly)

