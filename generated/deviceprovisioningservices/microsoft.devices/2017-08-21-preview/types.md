# Microsoft.Devices @ 2017-08-21-preview

## Resource Microsoft.Devices/provisioningServices@2017-08-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-21-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IotDpsPropertiesDescription (Required)
* **sku**: IotDpsSkuInfo (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Devices/provisioningServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Devices/provisioningServices/certificates@2017-08-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-21-preview' (ReadOnly, DeployTimeConstant)
* **certificate**: string (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CertificateProperties (ReadOnly)
* **type**: 'Microsoft.Devices/provisioningServices/certificates' (ReadOnly, DeployTimeConstant)

## IotDpsPropertiesDescription
### Properties
* **allocationPolicy**: 'GeoLatency' | 'Hashed' | 'Static'
* **authorizationPolicies**: SharedAccessSignatureAuthorizationRule_AccessRightsDescription_[]
* **deviceProvisioningHostName**: string (ReadOnly)
* **idScope**: string (ReadOnly)
* **iotHubs**: IotHubDefinitionDescription[]
* **provisioningState**: string
* **serviceOperationsHostName**: string (ReadOnly)
* **state**: 'Activating' | 'ActivationFailed' | 'Active' | 'Deleted' | 'Deleting' | 'DeletionFailed' | 'FailingOver' | 'FailoverFailed' | 'Resuming' | 'Suspended' | 'Suspending' | 'Transitioning'

## SharedAccessSignatureAuthorizationRule_AccessRightsDescription_
### Properties
* **keyName**: string (Required)
* **primaryKey**: string
* **rights**: 'DeviceConnect' | 'EnrollmentRead' | 'EnrollmentWrite' | 'RegistrationStatusRead' | 'RegistrationStatusWrite' | 'ServiceConfig' (Required)
* **secondaryKey**: string

## IotHubDefinitionDescription
### Properties
* **allocationWeight**: int
* **applyAllocationPolicy**: bool
* **connectionString**: string (Required)
* **location**: string (Required)
* **name**: string (ReadOnly)

## IotDpsSkuInfo
### Properties
* **capacity**: int
* **name**: 'S1'
* **tier**: string (ReadOnly)

## Dictionary<string,String>
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

