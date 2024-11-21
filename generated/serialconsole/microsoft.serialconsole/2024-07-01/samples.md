# Microsoft.SerialConsole
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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
