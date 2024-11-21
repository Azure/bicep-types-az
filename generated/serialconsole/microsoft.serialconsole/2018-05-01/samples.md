# Microsoft.SerialConsole

## microsoft.serialconsole/serialports

Create a new serial port resource.
```bicep
resource exampleResource 'Microsoft.SerialConsole/serialPorts@2018-05-01' = {
  name: 'example'
  properties: {
    state: 'enabled'
  }
}
```
