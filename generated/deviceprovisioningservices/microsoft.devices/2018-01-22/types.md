# Microsoft.Devices @ 2018-01-22

## Resource Microsoft.Devices/provisioningServices@2018-01-22
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-22' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IotDpsPropertiesDescription](#iotdpspropertiesdescription) (Required): the service specific properties of a provisioning service, including keys, linked iot hubs, current state, and system generated properties such as hostname and idScope
* **sku**: [IotDpsSkuInfo](#iotdpsskuinfo) (Required): List of possible provisioning service SKUs.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.Devices/provisioningServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Devices/provisioningServices/certificates@2018-01-22
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-22' (ReadOnly, DeployTimeConstant): The resource api version
* **certificate**: string (WriteOnly): Base-64 representation of the X509 leaf certificate .cer file or just .pem file content.
* **etag**: string (ReadOnly): The entity tag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateProperties](#certificateproperties) (ReadOnly): The description of an X509 CA Certificate.
* **type**: 'Microsoft.Devices/provisioningServices/certificates' (ReadOnly, DeployTimeConstant): The resource type

## IotDpsPropertiesDescription
### Properties
* **allocationPolicy**: 'GeoLatency' | 'Hashed' | 'Static': Allocation policy to be used by this provisioning service.
* **authorizationPolicies**: [SharedAccessSignatureAuthorizationRuleAccessRightsDescription](#sharedaccesssignatureauthorizationruleaccessrightsdescription)[]: List of authorization keys for a provisioning service.
* **deviceProvisioningHostName**: string (ReadOnly): Device endpoint for this provisioning service.
* **idScope**: string (ReadOnly): Unique identifier of this provisioning service.
* **iotHubs**: [IotHubDefinitionDescription](#iothubdefinitiondescription)[]: List of IoT hubs associated with this provisioning service.
* **provisioningState**: string: The ARM provisioning state of the provisioning service.
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
* **connectionString**: string (Required): Connection string og the IoT hub.
* **location**: string (Required): ARM region of the IoT hub.
* **name**: string (ReadOnly): Host name of the IoT hub.

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
* **created**: string (ReadOnly): The certificate's creation date and time.
* **expiry**: string (ReadOnly): The certificate's expiration date and time.
* **isVerified**: bool (ReadOnly): Determines whether certificate has been verified.
* **subject**: string (ReadOnly): The certificate's subject name.
* **thumbprint**: string (ReadOnly): The certificate's thumbprint.
* **updated**: string (ReadOnly): The certificate's last update date and time.

