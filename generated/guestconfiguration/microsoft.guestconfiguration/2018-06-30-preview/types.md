# Microsoft.GuestConfiguration @ 2018-06-30-preview

## Resource Microsoft.GuestConfiguration/guestConfigurationAssignments@2018-06-30-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2018-06-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Region where the VM is located.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GuestConfigurationAssignmentProperties](#guestconfigurationassignmentproperties): Properties of the Guest configuration assignment.
* **type**: 'Microsoft.GuestConfiguration/guestConfigurationAssignments' (ReadOnly, DeployTimeConstant): The resource type

## ConfigurationParameter
### Properties
* **name**: string (ReadOnly): Name of the configuration parameter.
* **value**: string (ReadOnly): Value of the configuration parameter.

## ConfigurationSetting
### Properties
* **actionAfterReboot**: 'ContinueConfiguration' | 'StopConfiguration' | string: Specifies what happens after a reboot during the application of a configuration. The possible values are ContinueConfiguration and StopConfiguration
* **allowModuleOverwrite**: bool: If true - new configurations downloaded from the pull service are allowed to overwrite the old ones on the target node. Otherwise, false
* **configurationMode**: 'ApplyAndAutoCorrect' | 'ApplyAndMonitor' | 'ApplyOnly' | string: Specifies how the LCM(Local Configuration Manager) actually applies the configuration to the target nodes. Possible values are ApplyOnly, ApplyAndMonitor, and ApplyAndAutoCorrect.
* **configurationModeFrequencyMins**: int: How often, in minutes, the current configuration is checked and applied. This property is ignored if the ConfigurationMode property is set to ApplyOnly. The default value is 15.
* **rebootIfNeeded**: bool: Set this to true to automatically reboot the node after a configuration that requires reboot is applied. Otherwise, you will have to manually reboot the node for any configuration that requires it. The default value is false. To use this setting when a reboot condition is enacted by something other than DSC (such as Windows Installer), combine this setting with the xPendingReboot module.
* **refreshFrequencyMins**: int: The time interval, in minutes, at which the LCM checks a pull service to get updated configurations. This value is ignored if the LCM is not configured in pull mode. The default value is 30.

## GuestConfigurationAssignmentProperties
### Properties
* **assignmentHash**: string (ReadOnly): Combined hash of the configuration package and parameters.
* **complianceStatus**: 'Compliant' | 'NonCompliant' | 'Pending' | string (ReadOnly): A value indicating compliance status of the virtual machine for the assigned guest configuration.
* **context**: string: The source which initiated the guest configuration assignment. Ex: Azure Policy
* **guestConfiguration**: [GuestConfigurationNavigation](#guestconfigurationnavigation): The guest configuration to assign.
* **lastComplianceStatusChecked**: string (ReadOnly): Date and time when last compliance status was checked.
* **latestReportId**: string (ReadOnly): Id of the latest report for the guest configuration assignment.
* **provisioningState**: 'Canceled' | 'Created' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state, which only appears in the response.

## GuestConfigurationNavigation
### Properties
* **configurationParameter**: [ConfigurationParameter](#configurationparameter)[]: The configuration parameters for the guest configuration.
* **configurationSetting**: [ConfigurationSetting](#configurationsetting): The configuration setting for the guest configuration.
* **contentHash**: string (ReadOnly): Combined hash of the guest configuration package and configuration parameters.
* **contentUri**: string (ReadOnly): Uri of the storage where guest configuration package is uploaded.
* **kind**: 'DSC' | string: Kind of the guest configuration. For example:DSC
* **name**: string: Name of the guest configuration.
* **version**: string: Version of the guest configuration.

