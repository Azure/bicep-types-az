# Microsoft.SerialConsole

## microsoft.serialconsole/serialports

Create a new serial port resource.
```bicep
resource exampleResource 'Microsoft.SerialConsole/serialPorts@2024-07-01' = {
  name: 'example'
  properties: {
    state: 'enabled'
  }
}
```
