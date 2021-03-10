# Microsoft.GuestConfiguration @ 2018-11-20

## Resource Microsoft.GuestConfiguration/guestConfigurationAssignments@2018-11-20
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2018-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GuestConfigurationAssignmentProperties](#guestconfigurationassignmentproperties)
* **type**: 'Microsoft.GuestConfiguration/guestConfigurationAssignments' (ReadOnly, DeployTimeConstant)

## GuestConfigurationAssignmentProperties
### Properties
* **assignmentHash**: string (ReadOnly)
* **complianceStatus**: 'Compliant' | 'NonCompliant' | 'Pending' (ReadOnly)
* **context**: string
* **guestConfiguration**: [GuestConfigurationNavigation](#guestconfigurationnavigation)
* **lastComplianceStatusChecked**: string (ReadOnly)
* **latestReportId**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Created' | 'Failed' | 'Succeeded' (ReadOnly)

## GuestConfigurationNavigation
### Properties
* **configurationParameter**: [ConfigurationParameter](#configurationparameter)[]
* **configurationSetting**: [ConfigurationSetting](#configurationsetting)
* **contentHash**: string (ReadOnly)
* **contentUri**: string (ReadOnly)
* **kind**: 'DSC'
* **name**: string
* **version**: string

## ConfigurationParameter
### Properties
* **name**: string
* **value**: string

## ConfigurationSetting
### Properties
* **actionAfterReboot**: 'ContinueConfiguration' | 'StopConfiguration'
* **allowModuleOverwrite**: 'False' | 'True'
* **configurationMode**: 'ApplyAndAutoCorrect' | 'ApplyAndMonitor' | 'ApplyOnly'
* **configurationModeFrequencyMins**: int
* **rebootIfNeeded**: 'False' | 'True'
* **refreshFrequencyMins**: int

