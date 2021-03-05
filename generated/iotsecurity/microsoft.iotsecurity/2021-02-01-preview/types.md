# Microsoft.IoTSecurity @ 2021-02-01-preview

## Resource Microsoft.IoTSecurity/defenderSettings@2021-02-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: DefenderSettingsProperties
* **type**: 'Microsoft.IoTSecurity/defenderSettings' (ReadOnly, DeployTimeConstant)

## DefenderSettingsProperties
### Properties
* **deviceQuota**: int (Required)
* **sentinelWorkspaceResourceIds**: string[] (Required)

