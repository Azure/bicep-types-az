# Microsoft.Devices @ 2020-03-01

## Resource Microsoft.Devices/provisioningServices@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IotDpsPropertiesDescription](#iotdpspropertiesdescription) (Required): the service specific properties of a provisioning service, including keys, linked iot hubs, current state, and system generated properties such as hostname and idScope
* **sku**: [IotDpsSkuInfo](#iotdpsskuinfo) (Required): List of possible provisioning service SKUs.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.Devices/provisioningServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Devices/provisioningServices/certificates@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **certificate**: string (WriteOnly): Base-64 representation of the X509 leaf certificate .cer file or just .pem file content.
* **etag**: string (ReadOnly): The entity tag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **isVerified**: bool (WriteOnly): True indicates that the certificate will be created in verified state and proof of possession will not be required.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateProperties](#certificateproperties) (ReadOnly): The description of an X509 CA Certificate.
* **type**: 'Microsoft.Devices/provisioningServices/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Devices/provisioningServices/privateEndpointConnections@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (Required): The properties of a private endpoint connection
* **type**: 'Microsoft.Devices/provisioningServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Function listkeys (Microsoft.Devices/provisioningServices@2020-03-01)
* **Resource**: Microsoft.Devices/provisioningServices
* **ApiVersion**: 2020-03-01
* **Output**: [SharedAccessSignatureAuthorizationRuleListResult](#sharedaccesssignatureauthorizationrulelistresult)

## Function listkeys (Microsoft.Devices/provisioningServices/keys@2020-03-01)
* **Resource**: Microsoft.Devices/provisioningServices/keys
* **ApiVersion**: 2020-03-01
* **Output**: [SharedAccessSignatureAuthorizationRuleAccessRightsDescription](#sharedaccesssignatureauthorizationruleaccessrightsdescription)

## IotDpsPropertiesDescription
### Properties
* **allocationPolicy**: 'GeoLatency' | 'Hashed' | 'Static': Allocation policy to be used by this provisioning service.
* **authorizationPolicies**: [SharedAccessSignatureAuthorizationRuleAccessRightsDescription](#sharedaccesssignatureauthorizationruleaccessrightsdescription)[]: List of authorization keys for a provisioning service.
* **deviceProvisioningHostName**: string (ReadOnly): Device endpoint for this provisioning service.
* **idScope**: string (ReadOnly): Unique identifier of this provisioning service.
* **iotHubs**: [IotHubDefinitionDescription](#iothubdefinitiondescription)[]: List of IoT hubs associated with this provisioning service.
* **ipFilterRules**: [IpFilterRule](#ipfilterrule)[]: The IP filter rules.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]: Private endpoint connections created on this IotHub
* **provisioningState**: string: The ARM provisioning state of the provisioning service.
* **publicNetworkAccess**: 'Disabled' | 'Enabled': Whether requests from Public Network are allowed
* **serviceOperationsHostName**: string (ReadOnly): Service endpoint for provisioning service.
* **state**: 'Activating' | 'ActivationFailed' | 'Active' | 'Deleted' | 'Deleting' | 'DeletionFailed' | 'FailingOver' | 'FailoverFailed' | 'Resuming' | 'Suspended' | 'Suspending' | 'Transitioning': Current state of the provisioning service.

## SharedAccessSignatureAuthorizationRuleAccessRightsDescription
### Properties
* **keyName**: string (Required): Name of the key.
* **primaryKey**: string: Primary SAS key value.
* **rights**: 'DeviceConnect' | 'EnrollmentRead' | 'EnrollmentWrite' | 'RegistrationStatusRead' | 'RegistrationStatusWrite' | 'ServiceConfig' (Required): Rights that this key has.
* **secondaryKey**: string: Secondary SAS key value.

## IotHubDefinitionDescription
### Properties
* **allocationWeight**: int: weight to apply for a given iot h.
* **applyAllocationPolicy**: bool: flag for applying allocationPolicy or not for a given iot hub.
* **connectionString**: string (Required): Connection string of the IoT hub.
* **location**: string (Required): ARM region of the IoT hub.
* **name**: string (ReadOnly): Host name of the IoT hub.

## IpFilterRule
### Properties
* **action**: 'Accept' | 'Reject' (Required): The desired action for requests captured by this rule.
* **filterName**: string (Required): The name of the IP filter rule.
* **ipMask**: string (Required): A string that contains the IP address range in CIDR notation for the rule.
* **target**: 'all' | 'deviceApi' | 'serviceApi': Target for requests captured by this rule.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (ReadOnly): The resource name.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (Required): The properties of a private endpoint connection
* **type**: string (ReadOnly): The resource type.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint property of a private endpoint connection
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): The current state of a private endpoint connection

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The resource identifier.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: Actions required for a private endpoint connection
* **description**: string (Required): The description for the current state of a private endpoint connection
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' (Required): The status of a private endpoint connection

## IotDpsSkuInfo
### Properties
* **capacity**: int: The number of units to provision
* **name**: 'S1': Sku name.
* **tier**: string (ReadOnly): Pricing tier name of the provisioning service.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CertificateProperties
### Properties
* **certificate**: any (ReadOnly): base-64 representation of X509 certificate .cer file or just .pem file content.
* **created**: string (ReadOnly): The certificate's creation date and time.
* **expiry**: string (ReadOnly): The certificate's expiration date and time.
* **isVerified**: bool (ReadOnly): Determines whether certificate has been verified.
* **subject**: string (ReadOnly): The certificate's subject name.
* **thumbprint**: string (ReadOnly): The certificate's thumbprint.
* **updated**: string (ReadOnly): The certificate's last update date and time.

## SharedAccessSignatureAuthorizationRuleListResult
### Properties
* **nextLink**: string (ReadOnly): The next link.
* **value**: [SharedAccessSignatureAuthorizationRuleAccessRightsDescription](#sharedaccesssignatureauthorizationruleaccessrightsdescription)[] (ReadOnly): The list of shared access policies.

## SharedAccessSignatureAuthorizationRuleAccessRightsDescription
### Properties
* **keyName**: string (Required): Name of the key.
* **primaryKey**: string: Primary SAS key value.
* **rights**: 'DeviceConnect' | 'EnrollmentRead' | 'EnrollmentWrite' | 'RegistrationStatusRead' | 'RegistrationStatusWrite' | 'ServiceConfig' (Required): Rights that this key has.
* **secondaryKey**: string: Secondary SAS key value.

