# Microsoft.GuestConfiguration @ 2018-01-20-preview

## Resource Microsoft.GuestConfiguration/guestConfigurationAssignments@2018-01-20-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2018-01-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Region where the VM is located.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GuestConfigurationAssignmentProperties](#guestconfigurationassignmentproperties): Properties of guest configuration assignment object.
* **type**: 'Microsoft.GuestConfiguration/guestConfigurationAssignments' (ReadOnly, DeployTimeConstant): The resource type

## GuestConfigurationAssignmentProperties
### Properties
* **assignmentHash**: string (ReadOnly): Combined hash of the configuration package and parameters.
* **complianceReason**: string (ReadOnly): Reason for the complianceStatus for the assigned guest configuration.
* **complianceStatus**: 'Compliant' | 'NotCompliant' | 'Pending' | string (ReadOnly): A value indicating compliance status of the virtual machine for the assigned guest configuration.
* **guestConfiguration**: [GuestConfigurationNavigation](#guestconfigurationnavigation): Guest configuration is an artifact that encapsulates DSC configuration and its dependencies. The artifact is a zip file containing DSC configuration (as MOF) and dependent resources and other dependencies like modules.
* **latestReportId**: string (ReadOnly): Id of the latest guest configuration assignment report.
* **location**: string (ReadOnly): Region where VM is located.
* **provisioningState**: 'Succeeded' | string (ReadOnly): The provisioning state, which only appears in the response.

## GuestConfigurationNavigation
### Properties
* **configurationParameter**: [ConfigurationParameterList](#configurationparameterlist): Represents the list for configuration parameters.
* **kind**: 'DSC' | string: Kind of the guest configuration. For example:DSC
* **name**: string: Name of the guest configuration.
* **type**: string: Type of the guest configuration.

## ConfigurationParameterList
### Properties
* **value**: [ConfigurationParameter](#configurationparameter)[]: Represents the list for configuration parameters.

## ConfigurationParameter
### Properties
* **name**: string (ReadOnly): Name of the configuration parameter.
* **value**: string (ReadOnly): Value of the configuration parameter.

