# Microsoft.Devices @ 2017-08-21-preview

## Resource Microsoft.Devices/provisioningServices@2017-08-21-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IotDpsPropertiesDescription](#iotdpspropertiesdescription) (Required)
* **sku**: [IotDpsSkuInfo](#iotdpsskuinfo) (Required): List of possible provisioning service SKUs.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.Devices/provisioningServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Devices/provisioningServices/certificates@2017-08-21-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **certificate**: string (WriteOnly): Base-64 representation of the X509 leaf certificate .cer file or just .pem file content.
* **etag**: string (ReadOnly): The entity tag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {maxLength: 256} (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateProperties](#certificateproperties) (ReadOnly): The description of an X509 CA Certificate.
* **type**: 'Microsoft.Devices/provisioningServices/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Function generateVerificationCode (Microsoft.Devices/provisioningServices/certificates@2017-08-21-preview)
* **Resource**: Microsoft.Devices/provisioningServices/certificates
* **ApiVersion**: 2017-08-21-preview
* **Output**: [VerificationCodeResponse](#verificationcoderesponse)

## Function listkeys (Microsoft.Devices/provisioningServices@2017-08-21-preview)
* **Resource**: Microsoft.Devices/provisioningServices
* **ApiVersion**: 2017-08-21-preview
* **Output**: [SharedAccessSignatureAuthorizationRuleListResult](#sharedaccesssignatureauthorizationrulelistresult)

## Function listkeys (Microsoft.Devices/provisioningServices/keys@2017-08-21-preview)
* **Resource**: Microsoft.Devices/provisioningServices/keys
* **ApiVersion**: 2017-08-21-preview
* **Output**: [SharedAccessSignatureAuthorizationRuleAccessRightsDescription](#sharedaccesssignatureauthorizationruleaccessrightsdescription)

## Function verify (Microsoft.Devices/provisioningServices/certificates@2017-08-21-preview)
* **Resource**: Microsoft.Devices/provisioningServices/certificates
* **ApiVersion**: 2017-08-21-preview
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
* **properties**: [CertificateProperties](#certificateproperties): The description of an X509 CA Certificate.
* **type**: string (ReadOnly): The resource type.

## IotDpsPropertiesDescription
### Properties
* **allocationPolicy**: 'GeoLatency' | 'Hashed' | 'Static' | string: Allocation policy to be used by this provisioning service.
* **authorizationPolicies**: [SharedAccessSignatureAuthorizationRuleAccessRightsDescription](#sharedaccesssignatureauthorizationruleaccessrightsdescription)[]
* **deviceProvisioningHostName**: string (ReadOnly): Device endpoint for this provisioning service.
* **idScope**: string (ReadOnly): Unique identifier of this provisioning service.
* **iotHubs**: [IotHubDefinitionDescription](#iothubdefinitiondescription)[]: List of IoT hubs associated with this provisioning service.
* **provisioningState**: string: The ARM provisioning state of the provisioning service.
* **serviceOperationsHostName**: string (ReadOnly): Service endpoint for provisioning service.
* **state**: 'Activating' | 'ActivationFailed' | 'Active' | 'Deleted' | 'Deleting' | 'DeletionFailed' | 'FailingOver' | 'FailoverFailed' | 'Resuming' | 'Suspended' | 'Suspending' | 'Transitioning' | string: Current state of the provisioning service.

## IotDpsSkuInfo
### Properties
* **capacity**: int: The number of services of the selected tier allowed in the subscription.
* **name**: 'S1' | string
* **tier**: string (ReadOnly): Pricing tier of the provisioning service.

## IotHubDefinitionDescription
### Properties
* **allocationWeight**: int
* **applyAllocationPolicy**: bool
* **connectionString**: string (Required): Connection string og the IoT hub.
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
* **nextLink**: string (ReadOnly)
* **value**: [SharedAccessSignatureAuthorizationRuleAccessRightsDescription](#sharedaccesssignatureauthorizationruleaccessrightsdescription)[]

## VerificationCodeRequest
### Properties
* **certificate**: string

## VerificationCodeResponse
### Properties
* **created**: string: Certificate created time.
* **etag**: string: Request etag.
* **expiry**: string: Code expiry.
* **isVerified**: bool: Indicate if the certificate is verified by owner of private key.
* **name**: string: Name of certificate.
* **subject**: string: Certificate subject.
* **thumbprint**: string: Certificate thumbprint.
* **updated**: string: Certificate updated time.
* **verificationCode**: string: Verification code.

