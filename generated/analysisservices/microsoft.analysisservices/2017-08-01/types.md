# Microsoft.AnalysisServices @ 2017-08-01

## Resource Microsoft.AnalysisServices/servers@2017-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AnalysisServicesServerProperties
* **sku**: ResourceSku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.AnalysisServices/servers' (ReadOnly, DeployTimeConstant)

## Function listGatewayStatus (Microsoft.AnalysisServices/servers@2017-08-01)
* **Resource**: Microsoft.AnalysisServices/servers
* **ApiVersion**: 2017-08-01
* **Output**: GatewayListStatusLive

## AnalysisServicesServerProperties
### Properties
* **asAdministrators**: ServerAdministrators
* **backupBlobContainerUri**: string
* **gatewayDetails**: GatewayDetails
* **ipV4FirewallSettings**: IPv4FirewallSettings
* **managedMode**: int
* **provisioningState**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' (ReadOnly)
* **querypoolConnectionMode**: 'All' | 'ReadOnly'
* **serverFullName**: string (ReadOnly)
* **serverMonitorMode**: int
* **sku**: ResourceSku
* **state**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' (ReadOnly)

## ServerAdministrators
### Properties
* **members**: string[]

## GatewayDetails
### Properties
* **dmtsClusterUri**: string (ReadOnly)
* **gatewayObjectId**: string (ReadOnly)
* **gatewayResourceId**: string

## IPv4FirewallSettings
### Properties
* **enablePowerBIService**: bool
* **firewallRules**: IPv4FirewallRule[]

## IPv4FirewallRule
### Properties
* **firewallRuleName**: string
* **rangeEnd**: string
* **rangeStart**: string

## ResourceSku
### Properties
* **capacity**: int
* **name**: string (Required)
* **tier**: 'Basic' | 'Development' | 'Standard'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GatewayListStatusLive
### Properties
* **status**: int (ReadOnly)

