# Microsoft.Automanage @ 2020-06-30-preview

## Microsoft.Automanage/accounts
### Properties
* **apiVersion**: '2020-06-30-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: AccountIdentity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Automanage/accounts' (ReadOnly, DeployTimeConstant)

## AccountIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Automanage/configurationProfileAssignments
### Properties
* **apiVersion**: '2020-06-30-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConfigurationProfileAssignmentProperties
* **type**: 'Microsoft.Automanage/configurationProfileAssignments' (ReadOnly, DeployTimeConstant)

## ConfigurationProfileAssignmentProperties
### Properties
* **accountId**: string
* **compliance**: ConfigurationProfileAssignmentCompliance
* **configurationProfile**: 'Azure virtual machine best practices – Dev/Test' | 'Azure virtual machine best practices – Production'
* **configurationProfilePreferenceId**: string
* **provisioningState**: 'Created' | 'Failed' | 'Succeeded' (ReadOnly)
* **targetId**: string

## ConfigurationProfileAssignmentCompliance
### Properties
* **updateStatus**: 'Created' | 'Failed' | 'Succeeded' (ReadOnly)

## Microsoft.Automanage/configurationProfilePreferences
### Properties
* **apiVersion**: '2020-06-30-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConfigurationProfilePreferenceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Automanage/configurationProfilePreferences' (ReadOnly, DeployTimeConstant)

## ConfigurationProfilePreferenceProperties
### Properties
* **antiMalware**: ConfigurationProfilePreferenceAntiMalware
* **vmBackup**: ConfigurationProfilePreferenceVmBackup

## ConfigurationProfilePreferenceAntiMalware
### Properties
* **enableRealTimeProtection**: 'False' | 'True'
* **exclusions**: any
* **runScheduledScan**: 'False' | 'True'
* **scanDay**: string
* **scanTimeInMinutes**: string
* **scanType**: 'Full' | 'Quick'

## ConfigurationProfilePreferenceVmBackup
### Properties
* **instantRpRetentionRangeInDays**: int
* **retentionPolicy**: string
* **schedulePolicy**: string
* **timeZone**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

