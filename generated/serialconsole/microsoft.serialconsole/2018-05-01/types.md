# Microsoft.SerialConsole @ 2018-05-01

## Resource Microsoft.SerialConsole/serialPorts@2018-05-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SerialPortProperties](#serialportproperties): The properties of the serial port.
* **type**: 'Microsoft.SerialConsole/serialPorts' (ReadOnly, DeployTimeConstant): The resource type

## Function connect (Microsoft.SerialConsole/serialPorts@2018-05-01)
* **Resource**: Microsoft.SerialConsole/serialPorts
* **ApiVersion**: 2018-05-01
* **Output**: [SerialPortConnectResult](#serialportconnectresult)

## Function disableConsole (Microsoft.SerialConsole/consoleServices@2018-05-01)
* **Resource**: Microsoft.SerialConsole/consoleServices
* **ApiVersion**: 2018-05-01
* **Output**: [DisableSerialConsoleResult](#disableserialconsoleresult)

## Function enableConsole (Microsoft.SerialConsole/consoleServices@2018-05-01)
* **Resource**: Microsoft.SerialConsole/consoleServices
* **ApiVersion**: 2018-05-01
* **Output**: [EnableSerialConsoleResult](#enableserialconsoleresult)

## DisableSerialConsoleResult
### Properties
* **disabled**: bool: Whether or not Serial Console is disabled.

## EnableSerialConsoleResult
### Properties
* **disabled**: bool: Whether or not Serial Console is disabled (enabled).

## SerialPortConnectResult
### Properties
* **connectionString**: string: Connection string to the serial port of the resource.

## SerialPortProperties
### Properties
* **state**: 'disabled' | 'enabled': Specifies whether the port is enabled for a serial console connection.

