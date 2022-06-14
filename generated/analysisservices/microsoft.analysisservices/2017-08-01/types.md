# Microsoft.AnalysisServices @ 2017-08-01

## Resource Microsoft.AnalysisServices/servers@2017-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Location of the Analysis Services resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AnalysisServicesServerProperties](#analysisservicesserverproperties): Properties of the provision operation request.
* **sku**: [ResourceSku](#resourcesku) (Required): The SKU of the Analysis Services resource.
* **tags**: [ResourceTags](#resourcetags): Key-value pairs of additional resource provisioning properties.
* **type**: 'Microsoft.AnalysisServices/servers' (ReadOnly, DeployTimeConstant): The resource type

## Function listGatewayStatus (Microsoft.AnalysisServices/servers@2017-08-01)
* **Resource**: Microsoft.AnalysisServices/servers
* **ApiVersion**: 2017-08-01
* **Output**: [GatewayListStatusLive](#gatewayliststatuslive)

## AnalysisServicesServerProperties
### Properties
* **asAdministrators**: [ServerAdministrators](#serveradministrators): A collection of AS server administrators
* **backupBlobContainerUri**: string: The SAS container URI to the backup container.
* **gatewayDetails**: [GatewayDetails](#gatewaydetails): The gateway details configured for the AS server.
* **ipV4FirewallSettings**: [IPv4FirewallSettings](#ipv4firewallsettings): The firewall settings for the AS server.
* **managedMode**: int: The managed mode of the server (0 = not managed, 1 = managed).
* **provisioningState**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' | string (ReadOnly): The current deployment state of Analysis Services resource. The provisioningState is to indicate states for resource provisioning.
* **querypoolConnectionMode**: 'All' | 'ReadOnly': How the read-write server's participation in the query pool is controlled.<br/>It can have the following values: <ul><li>readOnly - indicates that the read-write server is intended not to participate in query operations</li><li>all - indicates that the read-write server can participate in query operations</li></ul>Specifying readOnly when capacity is 1 results in error.
* **serverFullName**: string (ReadOnly): The full name of the Analysis Services resource.
* **serverMonitorMode**: int: The server monitor mode for AS server
* **sku**: [ResourceSku](#resourcesku): The SKU of the Analysis Services resource.
* **state**: 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Succeeded' | 'Suspended' | 'Suspending' | 'Updating' | string (ReadOnly): The current state of Analysis Services resource. The state is to indicate more states outside of resource provisioning.

## GatewayDetails
### Properties
* **dmtsClusterUri**: string (ReadOnly): Uri of the DMTS cluster.
* **gatewayObjectId**: string (ReadOnly): Gateway object id from in the DMTS cluster for the gateway resource.
* **gatewayResourceId**: string: Gateway resource to be associated with the server.

## GatewayListStatusLive
### Properties
* **status**: '0': Live message of list gateway. Status: 0 - Live

## IPv4FirewallRule
### Properties
* **firewallRuleName**: string: The rule name.
* **rangeEnd**: string: The end range of IPv4.
* **rangeStart**: string: The start range of IPv4.

## IPv4FirewallSettings
### Properties
* **enablePowerBIService**: bool: The indicator of enabling PBI service.
* **firewallRules**: [IPv4FirewallRule](#ipv4firewallrule)[]: An array of firewall rules.

## ResourceSku
### Properties
* **capacity**: int: The number of instances in the read only query pool.
* **name**: string (Required): Name of the SKU level.
* **tier**: 'Basic' | 'Development' | 'Standard' | string: The name of the Azure pricing tier to which the SKU applies.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServerAdministrators
### Properties
* **members**: string[]: An array of administrator user identities.

