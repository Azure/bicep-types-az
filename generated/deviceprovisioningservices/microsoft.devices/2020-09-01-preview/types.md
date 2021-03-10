# Microsoft.Devices @ 2020-09-01-preview

## Resource Microsoft.Devices/provisioningServices@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ArmIdentity](#armidentity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IotDpsPropertiesDescription](#iotdpspropertiesdescription) (Required)
* **sku**: [IotDpsSkuInfo](#iotdpsskuinfo) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Devices/provisioningServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Devices/provisioningServices/certificates@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **certificate**: string (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CertificateProperties](#certificateproperties) (ReadOnly)
* **type**: 'Microsoft.Devices/provisioningServices/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Devices/provisioningServices/privateEndpointConnections@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (Required)
* **type**: 'Microsoft.Devices/provisioningServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## ArmIdentity
### Properties
* **identityType**: string
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **userAssignedIdentities**: [Dictionary<string,ArmUserIdentity>](#dictionarystringarmuseridentity)

## Dictionary<string,ArmUserIdentity>
### Properties
### Additional Properties
* **Additional Properties Type**: [ArmUserIdentity](#armuseridentity)

## ArmUserIdentity
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## IotDpsPropertiesDescription
### Properties
* **allocationPolicy**: 'GeoLatency' | 'Hashed' | 'Static'
* **authorizationPolicies**: [SharedAccessSignatureAuthorizationRule_AccessRightsDescription_](#sharedaccesssignatureauthorizationruleaccessrightsdescription)[]
* **deviceProvisioningHostName**: string (ReadOnly)
* **encryption**: [EncryptionPropertiesDescription](#encryptionpropertiesdescription)
* **idScope**: string (ReadOnly)
* **iotHubs**: [IotHubDefinitionDescription](#iothubdefinitiondescription)[]
* **ipFilterRules**: [IpFilterRule](#ipfilterrule)[]
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]
* **provisioningState**: string
* **publicNetworkAccess**: 'Disabled' | 'Enabled'
* **serviceOperationsHostName**: string (ReadOnly)
* **state**: 'Activating' | 'ActivationFailed' | 'Active' | 'Deleted' | 'Deleting' | 'DeletionFailed' | 'FailingOver' | 'FailoverFailed' | 'Resuming' | 'Suspended' | 'Suspending' | 'Transitioning'

## SharedAccessSignatureAuthorizationRule_AccessRightsDescription_
### Properties
* **keyName**: string (Required)
* **primaryKey**: string
* **rights**: 'DeviceConnect' | 'EnrollmentRead' | 'EnrollmentWrite' | 'RegistrationStatusRead' | 'RegistrationStatusWrite' | 'ServiceConfig' (Required)
* **secondaryKey**: string

## EncryptionPropertiesDescription
### Properties
* **identity**: [EncryptionKeyIdentity](#encryptionkeyidentity)
* **keySource**: string
* **keyVaultProperties**: [KeyVaultKeyProperties](#keyvaultkeyproperties)[]

## EncryptionKeyIdentity
### Properties
* **userAssignedIdentity**: string

## KeyVaultKeyProperties
### Properties
* **keyIdentifier**: string

## IotHubDefinitionDescription
### Properties
* **allocationWeight**: int
* **applyAllocationPolicy**: bool
* **connectionString**: string (Required)
* **location**: string (Required)
* **name**: string (ReadOnly)

## IpFilterRule
### Properties
* **action**: 'Accept' | 'Reject' (Required)
* **filterName**: string (Required)
* **ipMask**: string (Required)
* **target**: 'all' | 'deviceApi' | 'serviceApi'

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (Required)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string (Required)
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' (Required)

## IotDpsSkuInfo
### Properties
* **capacity**: int
* **name**: 'S1'
* **tier**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CertificateProperties
### Properties
* **created**: string (ReadOnly)
* **expiry**: string (ReadOnly)
* **isVerified**: bool (ReadOnly)
* **subject**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **updated**: string (ReadOnly)

