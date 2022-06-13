# Microsoft.SignalRService @ 2018-03-01-preview

## Resource Microsoft.SignalRService/SignalR@2018-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Azure GEO region: e.g. West US | East US | North Central US | South Central US | West Europe | North Europe | East Asia | Southeast Asia | etc. 
The geo region of a resource never changes after it is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SignalRCreateOrUpdateProperties](#signalrcreateorupdateproperties): Settings used to provision or configure the resource
* **sku**: [ResourceSku](#resourcesku): The billing information of the resource.(e.g. basic vs. standard)
* **tags**: [SignalRUpdateParametersTags](#signalrupdateparameterstags): A list of key value pairs that describe the resource.
* **type**: 'Microsoft.SignalRService/SignalR' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.SignalRService/SignalR@2018-03-01-preview)
* **Resource**: Microsoft.SignalRService/SignalR
* **ApiVersion**: 2018-03-01-preview
* **Output**: [SignalRKeys](#signalrkeys)

## ResourceSku
### Properties
* **capacity**: int: Optional, integer. If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not 
possible for the resource this may be omitted.
* **family**: string: Optional, string. If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. This is typically a letter + number code, such as A0 or P3.  Required (if sku is specified)
* **size**: string: Optional, string. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard' | string: Optional tier of this particular SKU. `Basic` is deprecated, use `Standard` instead for Basic tier

## SignalRCreateOrUpdateProperties
### Properties
* **externalIP**: string (ReadOnly): The publicly accessible IP of the SignalR service.
* **hostName**: string (ReadOnly): FQDN of the SignalR service instance. Format: xxx.service.signalr.net
* **hostNamePrefix**: string: Prefix for the hostName of the SignalR service. Retained for future use.
The hostname will be of format: &lt;hostNamePrefix&gt;.service.signalr.net.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **publicPort**: int (ReadOnly): The publicly accessibly port of the SignalR service which is designed for browser/client side usage.
* **serverPort**: int (ReadOnly): The publicly accessibly port of the SignalR service which is designed for customer server side usage.
* **version**: string (ReadOnly): Version of the SignalR resource. Probably you need the same or higher version of client SDKs.

## SignalRKeys
### Properties
* **primaryConnectionString**: string (ReadOnly): SignalR connection string constructed via the primaryKey
* **primaryKey**: string (ReadOnly): The primary access key.
* **secondaryConnectionString**: string (ReadOnly): SignalR connection string constructed via the secondaryKey
* **secondaryKey**: string (ReadOnly): The secondary access key.

## SignalRUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

