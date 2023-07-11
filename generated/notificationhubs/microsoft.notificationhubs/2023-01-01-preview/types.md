# Microsoft.NotificationHubs @ 2023-01-01-preview

## Resource Microsoft.NotificationHubs/namespaces@2023-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceProperties](#namespaceproperties): Represents namespace properties.
* **sku**: [Sku](#sku) (Required): The Sku description for a namespace
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NotificationHubs/namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NotificationHubs/namespaces/authorizationRules@2023-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Deprecated - only for compatibility.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties): SharedAccessAuthorizationRule properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [SharedAccessAuthorizationRuleResourceTags](#sharedaccessauthorizationruleresourcetags): Deprecated - only for compatibility.
* **type**: 'Microsoft.NotificationHubs/namespaces/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NotificationHubs/namespaces/notificationHubs@2023-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NotificationHubProperties](#notificationhubproperties): NotificationHub properties.
* **sku**: [Sku](#sku): The Sku description for a namespace
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NotificationHubs/namespaces/notificationHubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules@2023-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Deprecated - only for compatibility.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties): SharedAccessAuthorizationRule properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [SharedAccessAuthorizationRuleResourceTags](#sharedaccessauthorizationruleresourcetags): Deprecated - only for compatibility.
* **type**: 'Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NotificationHubs/namespaces/privateEndpointConnections@2023-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Private Endpoint Connection properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.NotificationHubs/namespaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NotificationHubs/namespaces/privateLinkResources@2023-01-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Represents properties of Private Link Resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.NotificationHubs/namespaces/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules@2023-01-01-preview)
* **Resource**: Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules
* **ApiVersion**: 2023-01-01-preview
* **Output**: [ResourceListKeys](#resourcelistkeys)

## Function listKeys (Microsoft.NotificationHubs/namespaces/authorizationRules@2023-01-01-preview)
* **Resource**: Microsoft.NotificationHubs/namespaces/authorizationRules
* **ApiVersion**: 2023-01-01-preview
* **Output**: [ResourceListKeys](#resourcelistkeys)

## AdmCredential
### Properties
* **properties**: [AdmCredentialProperties](#admcredentialproperties) (Required): Description of a NotificationHub AdmCredential.

## AdmCredentialProperties
### Properties
* **authTokenUrl**: string (Required): Gets or sets the URL of the authorization token.
* **clientId**: string (Required): Gets or sets the client identifier.
* **clientSecret**: string (Required): Gets or sets the credential secret access key.

## ApnsCredential
### Properties
* **properties**: [ApnsCredentialProperties](#apnscredentialproperties) (Required): Description of a NotificationHub ApnsCredential.

## ApnsCredentialProperties
### Properties
* **apnsCertificate**: string: Gets or sets the APNS certificate.
* **appId**: string: Gets or sets the issuer (iss) registered claim key, whose value is
your 10-character Team ID, obtained from your developer account
* **appName**: string: Gets or sets the name of the application
* **certificateKey**: string: Gets or sets the certificate key.
* **endpoint**: string (Required): Gets or sets the endpoint of this credential.
* **keyId**: string: Gets or sets a 10-character key identifier (kid) key, obtained from
your developer account
* **thumbprint**: string: Gets or sets the APNS certificate Thumbprint
* **token**: string: Gets or sets provider Authentication Token, obtained through your
developer account

## BaiduCredential
### Properties
* **properties**: [BaiduCredentialProperties](#baiducredentialproperties) (Required): Description of a NotificationHub BaiduCredential.

## BaiduCredentialProperties
### Properties
* **baiduApiKey**: string (Required): Gets or sets baidu Api Key.
* **baiduEndPoint**: string (Required): Gets or sets baidu Endpoint.
* **baiduSecretKey**: string (Required): Gets or sets baidu Secret Key

## BrowserCredential
### Properties
* **properties**: [BrowserCredentialProperties](#browsercredentialproperties) (Required): Description of a NotificationHub BrowserCredential.

## BrowserCredentialProperties
### Properties
* **subject**: string (Required): Gets or sets web push subject.
* **vapidPrivateKey**: string (Required): Gets or sets VAPID private key.
* **vapidPublicKey**: string (Required): Gets or sets VAPID public key.

## GcmCredential
### Properties
* **properties**: [GcmCredentialProperties](#gcmcredentialproperties) (Required): Description of a NotificationHub GcmCredential.

## GcmCredentialProperties
### Properties
* **gcmEndpoint**: string: Gets or sets the GCM endpoint.
* **googleApiKey**: string (Required): Gets or sets the Google API key.

## IpRule
### Properties
* **ipMask**: string (Required): IP mask.
* **rights**: 'Listen' | 'Manage' | 'Send' | string[] (Required): List of access rights.

## MpnsCredential
### Properties
* **properties**: [MpnsCredentialProperties](#mpnscredentialproperties) (Required): Description of a NotificationHub MpnsCredential.

## MpnsCredentialProperties
### Properties
* **certificateKey**: string (Required): Gets or sets the certificate key for this credential.
* **mpnsCertificate**: string (Required): Gets or sets the MPNS certificate.
* **thumbprint**: string (Required): Gets or sets the MPNS certificate Thumbprint

## NamespaceProperties
### Properties
* **createdAt**: string (ReadOnly): Time when the namespace was created.
* **critical**: bool (ReadOnly): Gets or sets whether or not the namespace is set as Critical.
* **dataCenter**: string: Deprecated.
* **enabled**: bool (ReadOnly): Gets or sets whether or not the namespace is currently enabled.
* **metricId**: string (ReadOnly): Azure Insights Metrics id.
* **name**: string (ReadOnly): Name of the Notification Hubs namespace. This is immutable property, set automatically 
by the service when the namespace is created.
* **namespaceType**: 'Messaging' | 'NotificationHub' | string: Defines values for NamespaceType.
* **networkAcls**: [NetworkAcls](#networkacls): A collection of network authorization rules.
* **pnsCredentials**: [PnsCredentials](#pnscredentials): Collection of Notification Hub or Notification Hub Namespace PNS credentials.
* **privateEndpointConnections**: [PrivateEndpointConnectionResource](#privateendpointconnectionresource)[] (ReadOnly): Private Endpoint Connections for namespace
* **provisioningState**: 'Canceled' | 'Disabled' | 'Failed' | 'InProgress' | 'Pending' | 'Succeeded' | 'Unknown' | string: Defines values for OperationProvisioningState.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Type of public network access.
* **region**: string (ReadOnly): Region. The value is always set to the same value as Namespace.Location, so we are deprecating
this property.
* **replicationRegion**: 'AustraliaEast' | 'BrazilSouth' | 'Default' | 'None' | 'NorthEurope' | 'SouthAfricaNorth' | 'SouthEastAsia' | 'WestUs2' | string: Allowed replication region
* **scaleUnit**: string: Gets or sets scaleUnit where the namespace gets created
* **serviceBusEndpoint**: string (ReadOnly): Gets or sets endpoint you can use to perform NotificationHub
operations.
* **status**: 'Created' | 'Creating' | 'Deleting' | 'Suspended' | string: Namespace status.
* **subscriptionId**: string (ReadOnly): Namespace subscription id.
* **updatedAt**: string (ReadOnly): Time when the namespace was updated.
* **zoneRedundancy**: 'Disabled' | 'Enabled' | string: Namespace SKU name.

## NetworkAcls
### Properties
* **ipRules**: [IpRule](#iprule)[]: List of IP rules.
* **publicNetworkRule**: [PublicInternetAuthorizationRule](#publicinternetauthorizationrule): A default (public Internet) network authorization rule, which contains rights if no other network rule matches.

## NotificationHubProperties
### Properties
* **admCredential**: [AdmCredential](#admcredential): Description of a NotificationHub AdmCredential.
* **apnsCredential**: [ApnsCredential](#apnscredential): Description of a NotificationHub ApnsCredential.
* **authorizationRules**: [SharedAccessAuthorizationRuleProperties](#sharedaccessauthorizationruleproperties)[] (ReadOnly): Gets or sets the AuthorizationRules of the created NotificationHub
* **baiduCredential**: [BaiduCredential](#baiducredential): Description of a NotificationHub BaiduCredential.
* **browserCredential**: [BrowserCredential](#browsercredential): Description of a NotificationHub BrowserCredential.
* **dailyMaxActiveDevices**: int (ReadOnly)
* **gcmCredential**: [GcmCredential](#gcmcredential): Description of a NotificationHub GcmCredential.
* **mpnsCredential**: [MpnsCredential](#mpnscredential): Description of a NotificationHub MpnsCredential.
* **name**: string: Gets or sets the NotificationHub name.
* **registrationTtl**: string: Gets or sets the RegistrationTtl of the created NotificationHub
* **wnsCredential**: [WnsCredential](#wnscredential): Description of a NotificationHub WnsCredential.
* **xiaomiCredential**: [XiaomiCredential](#xiaomicredential): Description of a NotificationHub XiaomiCredential.

## PnsCredentials
### Properties
* **admCredential**: [AdmCredential](#admcredential): Description of a NotificationHub AdmCredential.
* **apnsCredential**: [ApnsCredential](#apnscredential): Description of a NotificationHub ApnsCredential.
* **baiduCredential**: [BaiduCredential](#baiducredential): Description of a NotificationHub BaiduCredential.
* **browserCredential**: [BrowserCredential](#browsercredential): Description of a NotificationHub BrowserCredential.
* **gcmCredential**: [GcmCredential](#gcmcredential): Description of a NotificationHub GcmCredential.
* **mpnsCredential**: [MpnsCredential](#mpnscredential): Description of a NotificationHub MpnsCredential.
* **wnsCredential**: [WnsCredential](#wnscredential): Description of a NotificationHub WnsCredential.
* **xiaomiCredential**: [XiaomiCredential](#xiaomicredential): Description of a NotificationHub XiaomiCredential.

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): List of group ids. For Notification Hubs, it always contains a single "namespace" element.
* **privateEndpoint**: [RemotePrivateEndpointConnection](#remoteprivateendpointconnection): Represents a Private Endpoint that is connected to Notification Hubs namespace using Private Endpoint Connection.
* **privateLinkServiceConnectionState**: [RemotePrivateLinkServiceConnectionState](#remoteprivatelinkserviceconnectionstate): State of the Private Link Service connection.
* **provisioningState**: 'Creating' | 'Deleted' | 'Deleting' | 'DeletingByProxy' | 'Succeeded' | 'Unknown' | 'Updating' | 'UpdatingByProxy' | string: State of Private Endpoint Connection.

## PrivateEndpointConnectionResource
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Private Endpoint Connection properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): A Group Id for Private Link. For Notification Hubs, it is always set to "namespace".
* **requiredMembers**: string[] (ReadOnly): Required members. For Notification Hubs, it's always a collection with a single "namespace" item.
* **requiredZoneNames**: string[] (ReadOnly): Required DNS zone names. For Notification Hubs, it contains two CNames for Service Bus and Notification Hubs zones.

## PublicInternetAuthorizationRule
### Properties
* **rights**: 'Listen' | 'Manage' | 'Send' | string[] (Required): List of access rights.

## RemotePrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): ARM resource ID of the Private Endpoint. This may belong to different subscription and resource group than a Notification Hubs namespace.

## RemotePrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string (ReadOnly): Human-friendly description of required actions.
* **description**: string (ReadOnly): Human-friendly description.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: State of Private Link Connection.

## ResourceListKeys
### Properties
* **keyName**: string (ReadOnly): Gets or sets keyName of the created AuthorizationRule
* **primaryConnectionString**: string (ReadOnly): Gets or sets primaryConnectionString of the AuthorizationRule.
* **primaryKey**: string (ReadOnly): Gets or sets primaryKey of the created AuthorizationRule.
* **secondaryConnectionString**: string (ReadOnly): Gets or sets secondaryConnectionString of the created
AuthorizationRule
* **secondaryKey**: string (ReadOnly): Gets or sets secondaryKey of the created AuthorizationRule

## ResourceListKeys
### Properties
* **keyName**: string (ReadOnly): Gets or sets keyName of the created AuthorizationRule
* **primaryConnectionString**: string (ReadOnly): Gets or sets primaryConnectionString of the AuthorizationRule.
* **primaryKey**: string (ReadOnly): Gets or sets primaryKey of the created AuthorizationRule.
* **secondaryConnectionString**: string (ReadOnly): Gets or sets secondaryConnectionString of the created
AuthorizationRule
* **secondaryKey**: string (ReadOnly): Gets or sets secondaryKey of the created AuthorizationRule

## SharedAccessAuthorizationRuleProperties
### Properties
* **claimType**: string (ReadOnly): Gets a string that describes the claim type
* **claimValue**: string (ReadOnly): Gets a string that describes the claim value
* **createdTime**: string (ReadOnly): Gets the created time for this rule
* **keyName**: string (ReadOnly): Gets a string that describes the authorization rule.
* **modifiedTime**: string (ReadOnly): Gets the last modified time for this rule
* **primaryKey**: string: Gets a base64-encoded 256-bit primary key for signing and
validating the SAS token.
* **revision**: int (ReadOnly): Gets the revision number for the rule
* **rights**: 'Listen' | 'Manage' | 'Send' | string[] (Required): Gets or sets the rights associated with the rule.
* **secondaryKey**: string: Gets a base64-encoded 256-bit primary key for signing and
validating the SAS token.

## SharedAccessAuthorizationRuleResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SharedAccessAuthorizationRuleResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **capacity**: int: Gets or sets the capacity of the resource
* **family**: string: Gets or sets the Sku Family
* **name**: 'Basic' | 'Free' | 'Standard' | string (Required): Namespace SKU name.
* **size**: string: Gets or sets the Sku size
* **tier**: string: Gets or sets the tier of particular sku

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WnsCredential
### Properties
* **properties**: [WnsCredentialProperties](#wnscredentialproperties) (Required): Description of a NotificationHub WnsCredential.

## WnsCredentialProperties
### Properties
* **certificateKey**: string: Ges or sets the WNS Certificate Key.
* **packageSid**: string: Gets or sets the package ID for this credential.
* **secretKey**: string: Gets or sets the secret key.
* **windowsLiveEndpoint**: string: Gets or sets the Windows Live endpoint.
* **wnsCertificate**: string: Gets or sets the WNS Certificate.

## XiaomiCredential
### Properties
* **properties**: [XiaomiCredentialProperties](#xiaomicredentialproperties) (Required): Description of a NotificationHub XiaomiCredentialProperties.

## XiaomiCredentialProperties
### Properties
* **appSecret**: string: Gets or sets app secret.
* **endpoint**: string: Gets or sets xiaomi service endpoint.

