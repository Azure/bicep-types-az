# Microsoft.HybridCompute @ 2019-03-18-preview

## Resource Microsoft.HybridCompute/machines@2019-03-18-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-18-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Hybrid Compute Machine Managed Identity
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MachineProperties](#machineproperties): Hybrid Compute Machine properties
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.HybridCompute/machines' (ReadOnly, DeployTimeConstant): The resource type

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

## MachineProperties
### Properties
* **agentVersion**: string (ReadOnly): The hybrid machine agent full version.
* **clientPublicKey**: string: Public Key that the client provides to be used during initial resource onboarding
* **displayName**: string (ReadOnly): Specifies the hybrid machine display name.
* **errorDetails**: [ErrorDetail](#errordetail)[] (ReadOnly): Details about the error state.
* **lastStatusChange**: string (ReadOnly): The time of the last status change.
* **machineFqdn**: string (ReadOnly): Specifies the hybrid machine FQDN.
* **osName**: string (ReadOnly): The Operating System running on the hybrid machine.
* **osProfile**: [OSProfile](#osprofile) (ReadOnly): Specifies the operating system settings for the hybrid machine.
* **osVersion**: string (ReadOnly): The version of Operating System running on the hybrid machine.
* **physicalLocation**: string: Resource's Physical Location
* **provisioningState**: string (ReadOnly): The provisioning state, which only appears in the response.
* **status**: 'Connected' | 'Disconnected' | 'Error' (ReadOnly): The status of the hybrid machine agent.
* **vmId**: string (ReadOnly): Specifies the hybrid machine unique ID.

## OSProfile
### Properties
* **computerName**: string (ReadOnly): Specifies the host OS name of the hybrid machine.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

