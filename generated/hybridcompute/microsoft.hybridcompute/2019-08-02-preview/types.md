# Microsoft.HybridCompute @ 2019-08-02-preview

## Resource Microsoft.HybridCompute/machines@2019-08-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Hybrid Compute Machine Managed Identity
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MachineProperties](#machineproperties): Hybrid Compute Machine properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.HybridCompute/machines' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridCompute/machines/extensions@2019-08-02-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Hybrid Compute Machine Managed Identity
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MachineExtensionProperties](#machineextensionproperties): Describes Machine Extension Properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.HybridCompute/machines/extensions' (ReadOnly, DeployTimeConstant): The resource type

## ErrorDetail
### Properties
* **code**: string (Required): The error's code.
* **details**: [ErrorDetail](#errordetail)[]: Additional error details.
* **message**: string (Required): A human readable error message.
* **target**: string: Indicates which property in the request is responsible for the error.

## Identity
### Properties
* **principalId**: string (ReadOnly): The identity's principal id.
* **tenantId**: string (ReadOnly): The identity's tenant id.
* **type**: string: The identity type.

## MachineExtensionInstanceView
### Properties
* **name**: string: The machine extension name.
* **status**: [MachineExtensionInstanceViewStatus](#machineextensioninstanceviewstatus): Instance view status.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## MachineExtensionInstanceViewStatus
### Properties
* **code**: string: The status code.
* **displayStatus**: string: The short localizable label for the status.
* **level**: 'Error' | 'Info' | 'Warning': The level code.
* **message**: string: The detailed status message, including for alerts and error messages.
* **time**: string: The time of the status.

## MachineExtensionProperties
### Properties
* **autoUpgradeMinorVersion**: bool: Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
* **forceUpdateTag**: string: How the extension handler should be forced to update even if the extension configuration has not changed.
* **instanceView**: [MachineExtensionInstanceView](#machineextensioninstanceview): The machine extension instance view.
* **protectedSettings**: any: The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **publisher**: string: The name of the extension handler publisher.
* **settings**: any: Json formatted public settings for the extension.
* **type**: string: Specifies the type of the extension; an example is "CustomScriptExtension".
* **typeHandlerVersion**: string: Specifies the version of the script handler.

## MachineProperties
### Properties
* **agentVersion**: string (ReadOnly): The hybrid machine agent full version.
* **clientPublicKey**: string: Public Key that the client provides to be used during initial resource onboarding
* **displayName**: string (ReadOnly): Specifies the hybrid machine display name.
* **errorDetails**: [ErrorDetail](#errordetail)[] (ReadOnly): Details about the error state.
* **extensions**: [MachineExtensionInstanceView](#machineextensioninstanceview)[]: Machine Extensions information
* **lastStatusChange**: string (ReadOnly): The time of the last status change.
* **machineFqdn**: string (ReadOnly): Specifies the hybrid machine FQDN.
* **osName**: string: The Operating System running on the hybrid machine.
* **osProfile**: [OSProfile](#osprofile) (ReadOnly): Specifies the operating system settings for the hybrid machine.
* **osVersion**: string: The version of Operating System running on the hybrid machine.
* **physicalLocation**: string: Resource's Physical Location
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **status**: 'Connected' | 'Disconnected' | 'Error' (ReadOnly): The status of the hybrid machine agent.
* **vmId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): Specifies the hybrid machine unique ID.

## OSProfile
### Properties
* **computerName**: string (ReadOnly): Specifies the host OS name of the hybrid machine.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

