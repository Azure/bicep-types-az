# Microsoft.SignalRService @ 2018-10-01

## Resource Microsoft.SignalRService/signalR@2018-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Azure GEO region: e.g. West US | East US | North Central US | South Central US | West Europe | North Europe | East Asia | Southeast Asia | etc. 
The geo region of a resource never changes after it is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SignalRCreateOrUpdateProperties](#signalrcreateorupdateproperties): Settings used to provision or configure the resource
* **sku**: [ResourceSku](#resourcesku): The billing information of the resource.(e.g. basic vs. standard)
* **tags**: [SignalRUpdateParametersTags](#signalrupdateparameterstags): A list of key value pairs that describe the resource.
* **type**: 'Microsoft.SignalRService/signalR' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.SignalRService/SignalR@2018-10-01)
* **Resource**: Microsoft.SignalRService/SignalR
* **ApiVersion**: 2018-10-01
* **Output**: [SignalRKeys](#signalrkeys)

## ResourceSku
### Properties
* **capacity**: int: Optional, integer. The unit count of SignalR resource. 1 by default.

If present, following values are allowed:
    Free: 1
    Standard: 1,2,5,10,20,50,100
* **family**: string: Optional string. For future use.
* **name**: string (Required): The name of the SKU. Required.

Allowed values: Standard_S1, Free_F1
* **size**: string: Optional string. For future use.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard' | string: Optional tier of this particular SKU. 'Standard' or 'Free'. 

`Basic` is deprecated, use `Standard` instead.

## SignalRCorsSettings
### Properties
* **allowedOrigins**: string[]: Gets or sets the list of origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). Use "*" to allow all. If omitted, allow all by default.

## SignalRCreateOrUpdateProperties
### Properties
* **cors**: [SignalRCorsSettings](#signalrcorssettings): Cross-Origin Resource Sharing (CORS) settings.
* **externalIP**: string (ReadOnly): The publicly accessible IP of the SignalR service.
* **features**: [SignalRFeature](#signalrfeature)[]: List of SignalR featureFlags. e.g. ServiceMode.

FeatureFlags that are not included in the parameters for the update operation will not be modified.
And the response will only include featureFlags that are explicitly set. 
When a featureFlag is not explicitly set, SignalR service will use its globally default value. 
But keep in mind, the default value doesn't mean "false". It varies in terms of different FeatureFlags.
* **hostName**: string (ReadOnly): FQDN of the SignalR service instance. Format: xxx.service.signalr.net
* **hostNamePrefix**: string: Prefix for the hostName of the SignalR service. Retained for future use.
The hostname will be of format: &lt;hostNamePrefix&gt;.service.signalr.net.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **publicPort**: int (ReadOnly): The publicly accessible port of the SignalR service which is designed for browser/client side usage.
* **serverPort**: int (ReadOnly): The publicly accessible port of the SignalR service which is designed for customer server side usage.
* **version**: string (ReadOnly): Version of the SignalR resource. Probably you need the same or higher version of client SDKs.

## SignalRFeature
### Properties
* **flag**: 'EnableConnectivityLogs' | 'ServiceMode' | string (Required): FeatureFlags is the supported features of Azure SignalR service.
- ServiceMode: Flag for backend server for SignalR service. Values allowed: "Default": have your own backend server; "Serverless": your application doesn't have a backend server; "Classic": for backward compatibility. Support both Default and Serverless mode but not recommended; "PredefinedOnly": for future use.
- EnableConnectivityLogs: "true"/"false", to enable/disable the connectivity log category respectively.
* **properties**: [SignalRFeatureProperties](#signalrfeatureproperties): Optional properties related to this feature.
* **value**: string (Required): Value of the feature flag. See Azure SignalR service document https://docs.microsoft.com/azure/azure-signalr/ for allowed values.

## SignalRFeatureProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

