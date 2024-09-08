# Microsoft.SerialConsole @ 2024-07-01

## Resource Microsoft.SerialConsole/serialPorts@2024-07-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2024-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SerialPortProperties](#serialportproperties): The properties of the serial port.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SerialConsole/serialPorts' (ReadOnly, DeployTimeConstant): The resource type

## SerialPortProperties
### Properties
* **connectionState**: 'active' | 'inactive': Specifies whether the port is currently active.
* **state**: 'disabled' | 'enabled': Specifies whether the port is enabled for a serial console connection.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

