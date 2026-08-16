# Microsoft.Devices @ 2017-11-15

## Resource Microsoft.Devices/provisioningServices@2017-11-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-11-15' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IotDpsPropertiesDescription](#iotdpspropertiesdescription) (Required): Service specific properties for a provisioning service
* **sku**: [IotDpsSkuInfo](#iotdpsskuinfo) (Required): SKU info for a provisioning service.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.Devices/provisioningServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Devices/provisioningServices/certificates@2017-11-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-11-15' (ReadOnly, DeployTimeConstant): The resource api version
* **certificate**: string (WriteOnly): Base-64 representation of the X509 leaf certificate .cer file or just .pem file content.
* **etag**: string (ReadOnly): The entity tag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {maxLength: 256} (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateProperties](#certificateproperties) (ReadOnly): properties of a certificate
* **type**: 'Microsoft.Devices/provisioningServices/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Function generateVerificationCode (Microsoft.Devices/provisioningServices/certificates@2017-11-15)
* **Resource**: Microsoft.Devices/provisioningServices/certificates
* **ApiVersion**: 2017-11-15
* **Output**: [VerificationCodeResponse](#verificationcoderesponse)

## Function listkeys (Microsoft.Devices/provisioningServices@2017-11-15)
* **Resource**: Microsoft.Devices/provisioningServices
* **ApiVersion**: 2017-11-15
* **Output**: [SharedAccessSignatureAuthorizationRuleListResult](#sharedaccesssignatureauthorizationrulelistresult)

## Function listkeys (Microsoft.Devices/provisioningServices/keys@2017-11-15)
* **Resource**: Microsoft.Devices/provisioningServices/keys
* **ApiVersion**: 2017-11-15
* **Output**: [SharedAccessSignatureAuthorizationRuleAccessRightsDescription](#sharedaccesssignatureauthorizationruleaccessrightsdescription)

## Function verify (Microsoft.Devices/provisioningServices/certificates@2017-11-15)
* **Resource**: Microsoft.Devices/provisioningServices/certificates
* **ApiVersion**: 2017-11-15
* **Input**: [VerificationCodeRequest](#verificationcoderequest)
* **Output**: [CertificateResponse](#certificateresponse)

## CertificateProperties
### Properties
* **created**: string (ReadOnly): The certificate's creation date and time.
* **expiry**: string (ReadOnly): The certificate's expiration date and time.
* **isVerified**: bool (ReadOnly): Determines whether certificate has been verified.
* **subject**: string (ReadOnly): The certificate's subject name.
* **thumbprint**: string (ReadOnly): The certificate's thumbprint.
* **updated**: string (ReadOnly): The certificate's last update date and time.

## CertificateResponse
### Properties
* **etag**: string (ReadOnly): The entity tag.
* **id**: string (ReadOnly): The resource identifier.
* **name**: string (ReadOnly): The name of the certificate.
* **properties**: [CertificateProperties](#certificateproperties): properties of a certificate
* **type**: string (ReadOnly): The resource type.

## IotDpsPropertiesDescription
### Properties
* **allocationPolicy**: 'GeoLatency' | 'Hashed' | 'Static' | string: Allocation policy to be used by this provisioning service.
* **authorizationPolicies**: [SharedAccessSignatureAuthorizationRuleAccessRightsDescription](#sharedaccesssignatureauthorizationruleaccessrightsdescription)[]: List of authorization keys for a provisioning service.
* **deviceProvisioningHostName**: string (ReadOnly): Device endpoint for this provisioning service.
* **idScope**: string (ReadOnly): Unique identifier of this provisioning service.
* **iotHubs**: [IotHubDefinitionDescription](#iothubdefinitiondescription)[]: List of IoT hubs associated with this provisioning service.
* **provisioningState**: string: The ARM provisioning state of the provisioning service.
* **serviceOperationsHostName**: string (ReadOnly): Service endpoint for provisioning service.
* **state**: 'Activating' | 'ActivationFailed' | 'Active' | 'Deleted' | 'Deleting' | 'DeletionFailed' | 'FailingOver' | 'FailoverFailed' | 'Resuming' | 'Suspended' | 'Suspending' | 'Transitioning' | string: Current state of the provisioning service.

## IotDpsSkuInfo
### Properties
* **capacity**: int: The number of units to provision
* **name**: 'S1' | string: Sku name.
* **tier**: string (ReadOnly): Pricing tier name of the provisioning service.

## IotHubDefinitionDescription
### Properties
* **allocationWeight**: int: Weight to apply for a given IoT hub.
* **applyAllocationPolicy**: bool: Flag for applying allocationPolicy or not for a given IoT hub.
* **connectionString**: string (Required): Connection string of the IoT hub.
* **location**: string (Required): ARM region of the IoT hub.
* **name**: string (ReadOnly): Host name of the IoT hub.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SharedAccessSignatureAuthorizationRuleAccessRightsDescription
### Properties
* **keyName**: string (Required): Name of the key.
* **primaryKey**: string: Primary SAS key value.
* **rights**: 'DeviceConnect' | 'EnrollmentRead' | 'EnrollmentWrite' | 'RegistrationStatusRead' | 'RegistrationStatusWrite' | 'ServiceConfig' | string (Required): Rights that this key has.
* **secondaryKey**: string: Secondary SAS key value.

## SharedAccessSignatureAuthorizationRuleListResult
### Properties
* **nextLink**: string (ReadOnly): The next link.
* **value**: [SharedAccessSignatureAuthorizationRuleAccessRightsDescription](#sharedaccesssignatureauthorizationruleaccessrightsdescription)[]: The list of shared access policies.

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
* **created**: string: Certificate created time.
* **expiry**: string: Code expiry.
* **isVerified**: bool: Indicate if the certificate is verified by owner of private key.
* **subject**: string: Certificate subject.
* **thumbprint**: string: Certificate thumbprint.
* **updated**: string: Certificate updated time.
* **verificationCode**: string: Verification code.

