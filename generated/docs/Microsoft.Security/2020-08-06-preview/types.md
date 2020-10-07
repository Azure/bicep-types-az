# Microsoft.Security @ 2020-08-06-preview

## Microsoft.Security/iotDefenderSettings
### Properties
* **apiVersion**: '2020-08-06-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: IotDefenderSettingsProperties
* **type**: 'Microsoft.Security/iotDefenderSettings' (ReadOnly, DeployTimeConstant)

## IotDefenderSettingsProperties
### Properties
* **deviceQuota**: int (Required)
* **sentinelWorkspaceResourceIds**: string[] (Required)

