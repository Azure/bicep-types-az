# Microsoft.SerialConsole @ 2023-01-01

## Resource Microsoft.SerialConsole/serialPorts@2023-01-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SerialPortProperties](#serialportproperties): The properties of the serial port.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.SerialConsole/serialPorts' (ReadOnly, DeployTimeConstant): The resource type

## Function connect (Microsoft.SerialConsole/serialPorts@2023-01-01)
* **Resource**: Microsoft.SerialConsole/serialPorts
* **ApiVersion**: 2023-01-01
* **Output**: [SerialPortConnectResult](#serialportconnectresult)

## Function disableConsole (Microsoft.SerialConsole/consoleServices@2023-01-01)
* **Resource**: Microsoft.SerialConsole/consoleServices
* **ApiVersion**: 2023-01-01
* **Output**: [DisableSerialConsoleResult](#disableserialconsoleresult)

## Function enableConsole (Microsoft.SerialConsole/consoleServices@2023-01-01)
* **Resource**: Microsoft.SerialConsole/consoleServices
* **ApiVersion**: 2023-01-01
* **Output**: [EnableSerialConsoleResult](#enableserialconsoleresult)

## DisableSerialConsoleResult
### Properties
* **disabled**: bool: Whether or not Serial Console is disabled.

## EnableSerialConsoleResult
### Properties
* **disabled**: bool: Whether or not Serial Console is disabled.

## SerialPortConnectResult
### Properties
* **connectionString**: string: Connection string to the serial port of the resource.

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

