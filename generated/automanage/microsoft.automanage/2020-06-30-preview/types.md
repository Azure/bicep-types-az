# Microsoft.Automanage @ 2020-06-30-preview

## Resource Microsoft.Automanage/accounts@2020-06-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [AccountIdentity](#accountidentity): The identity of the Automanage account.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Automanage/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automanage/configurationProfileAssignments@2020-06-30-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-06-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProfileAssignmentProperties](#configurationprofileassignmentproperties): Properties of the configuration profile assignment.
* **type**: 'Microsoft.Automanage/configurationProfileAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automanage/configurationProfilePreferences@2020-06-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProfilePreferenceProperties](#configurationprofilepreferenceproperties): Properties of the configuration profile preference.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Automanage/configurationProfilePreferences' (ReadOnly, DeployTimeConstant): The resource type

## AccountIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of Automanage account identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the Automanage account.
* **type**: 'None' | 'SystemAssigned': The type of identity used for the Automanage account. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.

## ConfigurationProfileAssignmentCompliance
### Properties
* **updateStatus**: 'Created' | 'Failed' | 'Succeeded' | string (ReadOnly): The state of compliance, which only appears in the response.

## ConfigurationProfileAssignmentProperties
### Properties
* **accountId**: string: The Automanage account ARM Resource URI
* **compliance**: [ConfigurationProfileAssignmentCompliance](#configurationprofileassignmentcompliance): The configuration setting for the configuration profile.
* **configurationProfile**: 'Azure virtual machine best practices – Dev/Test' | 'Azure virtual machine best practices – Production' | string: A value indicating configuration profile.
* **configurationProfilePreferenceId**: string: The configuration profile custom preferences ARM resource URI
* **provisioningState**: 'Created' | 'Failed' | 'Succeeded' | string (ReadOnly): The state of onboarding, which only appears in the response.
* **targetId**: string: The target VM resource URI

## ConfigurationProfilePreferenceAntiMalware
### Properties
* **enableRealTimeProtection**: 'False' | 'True' | string: Enables or disables Real Time Protection
* **exclusions**: any: Extensions, Paths and Processes that must be excluded from scan
* **runScheduledScan**: 'False' | 'True' | string: Enables or disables a periodic scan for antimalware
* **scanDay**: string: Schedule scan settings day
* **scanTimeInMinutes**: string: Schedule scan settings time
* **scanType**: 'Full' | 'Quick' | string: Type of scheduled scan

## ConfigurationProfilePreferenceProperties
### Properties
* **antiMalware**: [ConfigurationProfilePreferenceAntiMalware](#configurationprofilepreferenceantimalware): The custom preferences for Azure Antimalware.
* **vmBackup**: [ConfigurationProfilePreferenceVmBackup](#configurationprofilepreferencevmbackup): The custom preferences for Azure VM Backup.

## ConfigurationProfilePreferenceVmBackup
### Properties
* **instantRpRetentionRangeInDays**: int: Instant RP retention policy range in days
* **retentionPolicy**: string: Retention policy with the details on backup copy retention ranges.
* **schedulePolicy**: string: Backup schedule specified as part of backup policy.
* **timeZone**: string: TimeZone optional input as string. For example: Pacific Standard Time

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

