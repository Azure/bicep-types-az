# Microsoft.SerialConsole @ 2018-05-01

## Resource Microsoft.SerialConsole/serialPorts@2018-05-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2018-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SerialPortProperties](#serialportproperties): The properties of the serial port.
* **type**: 'Microsoft.SerialConsole/serialPorts' (ReadOnly, DeployTimeConstant): The resource type

## SerialPortProperties
### Properties
* **state**: 'disabled' | 'enabled': Specifies whether the port is enabled for a serial console connection.

