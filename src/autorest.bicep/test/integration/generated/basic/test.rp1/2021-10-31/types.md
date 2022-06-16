# Test.Rp1 @ 2021-10-31

## Resource Test.Rp1/testType1@2021-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TestType1CreateOrUpdatePropertiesOrTestType1Properties](#testtype1createorupdatepropertiesortesttype1properties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Test.Rp1/testType1' (ReadOnly, DeployTimeConstant): The resource type

## Function listArrayOfFoos (Test.Rp1/testType1@2021-10-31)
* **Resource**: Test.Rp1/testType1
* **ApiVersion**: 2021-10-31
* **Output**: [FoosResponse](#foosresponse)[]

## Function listFoos (Test.Rp1/testType1@2021-10-31)
* **Resource**: Test.Rp1/testType1
* **ApiVersion**: 2021-10-31
* **Input**: [FoosRequest](#foosrequest)
* **Output**: [FoosResponse](#foosresponse)

## EncryptionProperties
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Key vault properties.
* **status**: 'disabled' | 'enabled' | string: Indicates whether or not the encryption is enabled for container registry.

## FoosRequest
### Properties
* **locationData**: [LocationData](#locationdata): Metadata pertaining to the geographic location of the resource.
* **someString**: string (Required): The foo request string

## FoosResponse
### Properties
* **someString**: string: The foo response string

## FoosResponse
### Properties
* **someString**: string: The foo response string

## KeyVaultProperties
### Properties
* **identity**: string: The client ID of the identity which will be used to access key vault.
* **keyIdentifier**: string: Key vault uri to access the encryption key.

## LocationData
### Properties
* **city**: string: The city or locality where the resource is located.
* **countryOrRegion**: string: The country or region where the resource is located
* **district**: string: The district, state, or province where the resource is located.
* **name**: string (Required): A canonical name for the geographic or physical location.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TestType1CreateOrUpdatePropertiesOrTestType1Properties
### Properties
* **basicString**: string: Description for a basic string property.
* **encryptionProperties**: [EncryptionProperties](#encryptionproperties): TestType1 encryption properties
* **locationData**: [LocationData](#locationdata) (ReadOnly): Metadata pertaining to the geographic location of the resource.
* **skuTier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
* **stringEnum**: 'Bar' | 'Foo' | string: Description for a basic enum property.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

