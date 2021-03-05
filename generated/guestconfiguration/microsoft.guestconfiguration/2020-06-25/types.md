# Microsoft.GuestConfiguration @ 2020-06-25

## Resource Microsoft.GuestConfiguration/guestConfigurationAssignments@2020-06-25
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-06-25' (ReadOnly, DeployTimeConstant)
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
* **latestAssignmentReport**: AssignmentReport
* **latestReportId**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Created' | 'Failed' | 'Succeeded' (ReadOnly)
* **targetResourceId**: string (ReadOnly)

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

## AssignmentReport
### Properties
* **assignment**: AssignmentInfo
* **complianceStatus**: 'Compliant' | 'NonCompliant' | 'Pending' (ReadOnly)
* **endTime**: string (ReadOnly)
* **id**: string (ReadOnly)
* **operationType**: 'Consistency' | 'Initial' (ReadOnly)
* **reportId**: string (ReadOnly)
* **resources**: AssignmentReportResource[]
* **startTime**: string (ReadOnly)
* **vm**: VMInfo

## AssignmentInfo
### Properties
* **configuration**: ConfigurationInfo
* **name**: string (ReadOnly)

## ConfigurationInfo
### Properties
* **name**: string (ReadOnly)
* **version**: string (ReadOnly)

## AssignmentReportResource
### Properties
* **complianceStatus**: 'Compliant' | 'NonCompliant' | 'Pending' (ReadOnly)
* **properties**: any (ReadOnly)
* **reasons**: AssignmentReportResourceComplianceReason[]
* **resourceId**: string (ReadOnly)

## AssignmentReportResourceComplianceReason
### Properties
* **code**: string (ReadOnly)
* **phrase**: string (ReadOnly)

## VMInfo
### Properties
* **id**: string (ReadOnly)
* **uuid**: string (ReadOnly)

