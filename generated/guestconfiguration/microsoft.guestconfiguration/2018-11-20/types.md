# Microsoft.GuestConfiguration @ 2018-11-20

## Resource Microsoft.GuestConfiguration/guestConfigurationAssignments@2018-11-20
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2018-11-20' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Region where the VM is located.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GuestConfigurationAssignmentProperties](#guestconfigurationassignmentproperties): Guest configuration assignment properties.
* **type**: 'Microsoft.GuestConfiguration/guestConfigurationAssignments' (ReadOnly, DeployTimeConstant): The resource type

## GuestConfigurationAssignmentProperties
### Properties
* **assignmentHash**: string (ReadOnly): Combined hash of the configuration package and parameters.
* **complianceStatus**: 'Compliant' | 'NonCompliant' | 'Pending' (ReadOnly): A value indicating compliance status of the machine for the assigned guest configuration.
* **context**: string: The source which initiated the guest configuration assignment. Ex: Azure Policy
* **guestConfiguration**: [GuestConfigurationNavigation](#guestconfigurationnavigation): Guest configuration is an artifact that encapsulates DSC configuration and its dependencies. The artifact is a zip file containing DSC configuration (as MOF) and dependent resources and other dependencies like modules.
* **lastComplianceStatusChecked**: string (ReadOnly): Date and time when last compliance status was checked.
* **latestReportId**: string (ReadOnly): Id of the latest report for the guest configuration assignment.
* **provisioningState**: 'Canceled' | 'Created' | 'Failed' | 'Succeeded' (ReadOnly): The provisioning state, which only appears in the response.

## GuestConfigurationNavigation
### Properties
* **configurationParameter**: [ConfigurationParameter](#configurationparameter)[]: The configuration parameters for the guest configuration.
* **configurationSetting**: [ConfigurationSetting](#configurationsetting): Configuration setting of LCM (Local Configuration Manager).
* **contentHash**: string (ReadOnly): Combined hash of the guest configuration package and configuration parameters.
* **contentUri**: string (ReadOnly): Uri of the storage where guest configuration package is uploaded.
* **kind**: 'DSC': Kind of the guest configuration. For example:DSC
* **name**: string: Name of the guest configuration.
* **version**: string: Version of the guest configuration.

## ConfigurationParameter
### Properties
* **name**: string: Name of the configuration parameter.
* **value**: string: Value of the configuration parameter.

## ConfigurationSetting
### Properties
* **actionAfterReboot**: 'ContinueConfiguration' | 'StopConfiguration': Specifies what happens after a reboot during the application of a configuration. The possible values are ContinueConfiguration and StopConfiguration
* **allowModuleOverwrite**: bool: If true - new configurations downloaded from the pull service are allowed to overwrite the old ones on the target node. Otherwise, false
* **configurationMode**: 'ApplyAndAutoCorrect' | 'ApplyAndMonitor' | 'ApplyOnly': Specifies how the LCM(Local Configuration Manager) actually applies the configuration to the target nodes. Possible values are ApplyOnly, ApplyAndMonitor, and ApplyAndAutoCorrect.
* **configurationModeFrequencyMins**: int: How often, in minutes, the current configuration is checked and applied. This property is ignored if the ConfigurationMode property is set to ApplyOnly. The default value is 15.
* **rebootIfNeeded**: bool: Set this to true to automatically reboot the node after a configuration that requires reboot is applied. Otherwise, you will have to manually reboot the node for any configuration that requires it. The default value is false. To use this setting when a reboot condition is enacted by something other than DSC (such as Windows Installer), combine this setting with the xPendingReboot module.
* **refreshFrequencyMins**: int: The time interval, in minutes, at which the LCM checks a pull service to get updated configurations. This value is ignored if the LCM is not configured in pull mode. The default value is 30.

