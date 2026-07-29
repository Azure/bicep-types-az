# Microsoft.Devices @ 2025-02-01-preview

## Resource Microsoft.Devices/provisioningServices@2025-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IotDpsPropertiesDescription](#iotdpspropertiesdescription) (Required): Service specific properties for a provisioning service
* **resourcegroup**: string: The resource group of the resource.
* **sku**: [IotDpsSkuInfo](#iotdpsskuinfo) (Required): Sku info for a provisioning Service.
* **subscriptionid**: string: The subscription id of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Devices/provisioningServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Devices/provisioningServices/certificates@2025-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The entity tag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateProperties](#certificateproperties): properties of a certificate
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Devices/provisioningServices/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Devices/provisioningServices/privateEndpointConnections@2025-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (Required): The properties of a private endpoint connection
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Devices/provisioningServices/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Devices/provisioningServices/privateLinkResources@2025-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GroupIdInformationProperties](#groupidinformationproperties) (ReadOnly): The properties for a group information object
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Devices/provisioningServices/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Function generateVerificationCode (Microsoft.Devices/provisioningServices/certificates@2025-02-01-preview)
* **Resource**: Microsoft.Devices/provisioningServices/certificates
* **ApiVersion**: 2025-02-01-preview
* **Output**: [VerificationCodeResponse](#verificationcoderesponse)

## Function listkeys (Microsoft.Devices/provisioningServices/keys@2025-02-01-preview)
* **Resource**: Microsoft.Devices/provisioningServices/keys
* **ApiVersion**: 2025-02-01-preview
* **Output**: [SharedAccessSignatureAuthorizationRuleAccessRightsDescription](#sharedaccesssignatureauthorizationruleaccessrightsdescription)

## Function listkeys (Microsoft.Devices/provisioningServices@2025-02-01-preview)
* **Resource**: Microsoft.Devices/provisioningServices
* **ApiVersion**: 2025-02-01-preview
* **Output**: [SharedAccessSignatureAuthorizationRuleListResult](#sharedaccesssignatureauthorizationrulelistresult)

## Function verify (Microsoft.Devices/provisioningServices/certificates@2025-02-01-preview)
* **Resource**: Microsoft.Devices/provisioningServices/certificates
* **ApiVersion**: 2025-02-01-preview
* **Input**: [VerificationCodeRequest](#verificationcoderequest)
* **Output**: [CertificateResponse](#certificateresponse)

## CertificateProperties
### Properties
* **certificate**: any: base-64 representation of X509 certificate .cer file or just .pem file content.
* **created**: string (ReadOnly): The certificate's creation date and time.
* **expiry**: string (ReadOnly): The certificate's expiration date and time.
* **isVerified**: bool: Determines whether certificate has been verified.
* **subject**: string (ReadOnly): The certificate's subject name.
* **thumbprint**: string (ReadOnly): The certificate's thumbprint.
* **updated**: string (ReadOnly): The certificate's last update date and time.

## CertificateResponse
### Properties
* **etag**: string (ReadOnly): The entity tag.
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [CertificateProperties](#certificateproperties): properties of a certificate
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## DeviceRegistryNamespaceDescription
### Properties
* **authenticationType**: 'SystemAssigned' | 'UserAssigned' | string (Required): Device Registry Namespace MI authentication type: UserAssigned, SystemAssigned.
* **resourceId**: string (Required): The ARM resource ID of the Device Registry namespace.
* **selectedUserAssignedIdentityResourceId**: string: The selected user-assigned identity resource Id associated with Device Registry namespace. This is required when authenticationType is UserAssigned.

## GroupIdInformationProperties
### Properties
* **groupId**: string: The group id
* **requiredMembers**: string[]: The required members for a specific group id
* **requiredZoneNames**: string[]: The required DNS zones for a specific group id

## IotDpsPropertiesDescription
### Properties
* **allocationPolicy**: 'GeoLatency' | 'Hashed' | 'Static' | string: Allocation policy to be used by this provisioning service.
* **authorizationPolicies**: [SharedAccessSignatureAuthorizationRuleAccessRightsDescription](#sharedaccesssignatureauthorizationruleaccessrightsdescription)[]: List of authorization keys for a provisioning service.
* **deviceProvisioningHostName**: string (ReadOnly): Device endpoint for this provisioning service.
* **deviceRegistryNamespace**: [DeviceRegistryNamespaceDescription](#deviceregistrynamespacedescription): The Device Registry namespace that is linked to the provisioning service.
* **enableDataResidency**: bool: Optional.
Indicates if the DPS instance has Data Residency enabled, removing the cross geo-pair disaster recovery.
* **idScope**: string (ReadOnly): Unique identifier of this provisioning service.
* **iotHubs**: [IotHubDefinitionDescription](#iothubdefinitiondescription)[]: List of IoT hubs associated with this provisioning service.
* **ipFilterRules**: [IpFilterRule](#ipfilterrule)[]: The IP filter rules.
* **portalOperationsHostName**: string: Portal endpoint to enable CORS for this provisioning service.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]: Private endpoint connections created on this IotHub
* **provisioningState**: string: The ARM provisioning state of the provisioning service.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether requests from Public Network are allowed
* **serviceOperationsHostName**: string (ReadOnly): Service endpoint for provisioning service.
* **state**: 'Activating' | 'ActivationFailed' | 'Active' | 'Deleted' | 'Deleting' | 'DeletionFailed' | 'FailingOver' | 'FailoverFailed' | 'Resuming' | 'Suspended' | 'Suspending' | 'Transitioning' | string: Current state of the provisioning service.

## IotDpsSkuInfo
### Properties
* **capacity**: int: The number of units to provision
* **name**: 'S1' | string: Sku name.
* **tier**: string (ReadOnly): Pricing tier name of the provisioning service.

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

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The resource identifier.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (Required): The properties of a private endpoint connection
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint property of a private endpoint connection
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): The current state of a private endpoint connection

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: Actions required for a private endpoint connection
* **description**: string (Required): The description for the current state of a private endpoint connection
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string (Required): The status of a private endpoint connection

## SharedAccessSignatureAuthorizationRuleAccessRightsDescription
### Properties
* **keyName**: string (Required): Name of the key.
* **primaryKey**: string: Primary SAS key value.
* **rights**: 'DeviceConnect' | 'EnrollmentRead' | 'EnrollmentWrite' | 'RegistrationStatusRead' | 'RegistrationStatusWrite' | 'ServiceConfig' | string (Required): Rights that this key has.
* **secondaryKey**: string: Secondary SAS key value.

## SharedAccessSignatureAuthorizationRuleListResult
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [SharedAccessSignatureAuthorizationRuleAccessRightsDescription](#sharedaccesssignatureauthorizationruleaccessrightsdescription)[] (Required): The SharedAccessSignatureAuthorizationRuleAccessRightsDescription items on this page

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

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## VerificationCodeRequest
### Properties
* **certificate**: string: base-64 representation of X509 certificate .cer file or just .pem file content.

## VerificationCodeResponse
### Properties
* **etag**: string (ReadOnly): Request etag.
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (ReadOnly): Name of certificate.
* **properties**: [VerificationCodeResponseProperties](#verificationcoderesponseproperties)
* **type**: string (ReadOnly): The resource type.

## VerificationCodeResponseProperties
### Properties
* **certificate**: any: base-64 representation of X509 certificate .cer file or just .pem file content.
* **created**: string: Certificate created time.
* **expiry**: string: Code expiry.
* **isVerified**: bool: Indicate if the certificate is verified by owner of private key.
* **subject**: string: Certificate subject.
* **thumbprint**: string: Certificate thumbprint.
* **updated**: string: Certificate updated time.
* **verificationCode**: string: Verification code.

