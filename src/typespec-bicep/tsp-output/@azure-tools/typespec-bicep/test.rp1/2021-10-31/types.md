# Test.Rp1 @ 2021-10-31

## Resource Test.Rp1/discriminatedUnionTestType@2021-10-31
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiscriminatedUnionTestTypeProperties](#discriminateduniontesttypeproperties): The resource-specific properties for this resource.
* **type**: 'Test.Rp1/discriminatedUnionTestType' (ReadOnly, DeployTimeConstant): The resource type

## Resource Test.Rp1/readOnlyTestType@2021-10-31
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2021-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReadOnlyTestTypeProperties](#readonlytesttypeproperties): The resource-specific properties for this resource.
* **type**: 'Test.Rp1/readOnlyTestType' (ReadOnly, DeployTimeConstant): The resource type

## Resource Test.Rp1/subscriptionScopeType@2021-10-31
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionScopeTypeProperties](#subscriptionscopetypeproperties): The resource-specific properties for this resource.
* **type**: 'Test.Rp1/subscriptionScopeType' (ReadOnly, DeployTimeConstant): The resource type

## Resource Test.Rp1/tenantScopeType@2021-10-31
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2021-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TenantScopeTypeProperties](#tenantscopetypeproperties): The resource-specific properties for this resource.
* **type**: 'Test.Rp1/tenantScopeType' (ReadOnly, DeployTimeConstant): The resource type

## Resource Test.Rp1/testType1@2021-10-31
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TestType1Properties](#testtype1properties): The resource-specific properties for this resource.
* **type**: 'Test.Rp1/testType1' (ReadOnly, DeployTimeConstant): The resource type

## Resource Test.Rp1/writeOnlyTestType@2021-10-31
* **Readable Scope(s)**: None
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WriteOnlyTestTypeProperties](#writeonlytesttypeproperties): The resource-specific properties for this resource.
* **type**: 'Test.Rp1/writeOnlyTestType' (ReadOnly, DeployTimeConstant): The resource type

## Function listFoos (Test.Rp1/testType1@2021-10-31)
* **Resource**: Test.Rp1/testType1
* **ApiVersion**: 2021-10-31
* **Input**: [FoosRequest](#foosrequest)
* **Output**: [FoosResponse](#foosresponse)

## DiscriminatedUnionTestTypeProperties
* **Discriminator**: type

### Base Properties
* **bar**: string: The bar property
* **foo**: string: The foo property

### BranchWithAllInlineProps
#### Properties
* **bar**: string: The bar property
* **buzz**: string: The buzz property
* **fizz**: string: The fizz property
* **foo**: string: The foo property
* **pop**: string: The pop property
* **type**: 'BranchWithAllInlineProps' (Required)

### BranchWithInheritedProps
#### Properties
* **bar**: string: The bar property
* **baz**: string: The baz property
* **foo**: string: The foo property
* **quux**: string: A property defined inline
* **type**: 'BranchWithInheritedProps' (Required)

### BranchWithOverride
#### Properties
* **bar**: string: The bar property
* **foo**: string: The foo property
* **fooOverride**: int: The overridden foo integer property
* **type**: 'BranchWithOverride' (Required)


## EncryptionProperties
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Key vault properties.
* **status**: any | any | string: Indicates whether or not the encryption is enabled for container registry.

## FoosRequest
### Properties
* **locationData**: [LocationData](#locationdata): Location data
* **someString**: string (Required): The foo request string

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
* **countryOrRegion**: string: The country or region where the resource is located.
* **district**: string: The district, state, or province where the resource is located.
* **name**: string (Required): A canonical name for the geographic or physical location.

## Plan
### Properties
* **name**: string: The plan name
* **product**: string: The plan product
* **publisher**: string: The plan publisher

## ReadOnlyTestTypeProperties
### Properties
* **plan**: [Plan](#plan) (ReadOnly): A plan property

## SubscriptionScopeTypeProperties
### Properties
* **basicString**: string: A basic string property.

## TenantScopeTypeProperties
### Properties
* **basicString**: string: A basic string property.

## TestType1Properties
### Properties
* **base64EncodedBytes**: string (ReadOnly): Base64 encoded bytes
* **basicString**: string: Description for a basic string property.
* **binaryBuffer**: string (ReadOnly): A binary buffer property
* **emptyEnum**: string: Description for a empty enum property.
* **encryptionProperties**: [EncryptionProperties](#encryptionproperties): TestType1 encryption properties
* **intWithDefaultValue**: int: An integer with a default value
* **locationData**: [LocationData](#locationdata) (ReadOnly): Metadata pertaining to the geographic location of the resource.
* **password**: string
* **percentageProperty**: int (ReadOnly): A percentage property
* **special.char-property**: string: A property with special characters in its name
* **stringEnum**: any | any | string: Description for a basic enum property.
* **subnetId**: string (ReadOnly): A fully-qualified resource ID
* **uuidProperty**: string: A UUID property

## WriteOnlyTestTypeProperties
### Properties
* **basicString**: string: A basic string property.

