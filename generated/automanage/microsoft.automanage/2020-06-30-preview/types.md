# Microsoft.Automanage @ 2020-06-30-preview

## Resource Microsoft.Automanage/accounts@2020-06-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [AccountIdentity](#accountidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Automanage/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automanage/configurationProfileAssignments@2020-06-30-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-06-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConfigurationProfileAssignmentProperties](#configurationprofileassignmentproperties)
* **type**: 'Microsoft.Automanage/configurationProfileAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Automanage/configurationProfilePreferences@2020-06-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-30-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConfigurationProfilePreferenceProperties](#configurationprofilepreferenceproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Automanage/configurationProfilePreferences' (ReadOnly, DeployTimeConstant)

## AccountIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ConfigurationProfileAssignmentProperties
### Properties
* **accountId**: string
* **compliance**: [ConfigurationProfileAssignmentCompliance](#configurationprofileassignmentcompliance)
* **configurationProfile**: 'Azure virtual machine best practices – Dev/Test' | 'Azure virtual machine best practices – Production'
* **configurationProfilePreferenceId**: string
* **provisioningState**: 'Created' | 'Failed' | 'Succeeded' (ReadOnly)
* **targetId**: string

## ConfigurationProfileAssignmentCompliance
### Properties
* **updateStatus**: 'Created' | 'Failed' | 'Succeeded' (ReadOnly)

## ConfigurationProfilePreferenceProperties
### Properties
* **antiMalware**: [ConfigurationProfilePreferenceAntiMalware](#configurationprofilepreferenceantimalware)
* **vmBackup**: [ConfigurationProfilePreferenceVmBackup](#configurationprofilepreferencevmbackup)

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
### Properties
### Additional Properties
* **Additional Properties Type**: string

