# Microsoft.AzureStack @ 2020-06-01-preview

## Resource Microsoft.AzureStack/cloudManifestFiles@2020-06-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The entity tag used for optimistic concurrency when modifying the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CloudManifestFileProperties](#cloudmanifestfileproperties) (ReadOnly): Cloud specific manifest data.
* **type**: 'Microsoft.AzureStack/cloudManifestFiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStack/linkedSubscriptions@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The entity tag used for optimistic concurrency when modifying the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): The kind of the resource.
* **location**: 'global' | string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedSubscriptionParameterPropertiesOrLinkedSubscriptionProperties](#linkedsubscriptionparameterpropertiesorlinkedsubscriptionproperties) (Required): Properties of the Linked Subscription resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Custom tags for the resource.
* **type**: 'Microsoft.AzureStack/linkedSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStack/registrations@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The entity tag used for optimistic concurrency when modifying the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): The kind of the resource.
* **location**: 'global' | string (Required): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegistrationParameterPropertiesOrRegistrationProperties](#registrationparameterpropertiesorregistrationproperties) (Required): Properties of the Azure Stack registration resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Custom tags for the resource.
* **type**: 'Microsoft.AzureStack/registrations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStack/registrations/customerSubscriptions@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The entity tag used for optimistic concurrency when modifying the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomerSubscriptionProperties](#customersubscriptionproperties): Customer subscription properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AzureStack/registrations/customerSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureStack/registrations/products@2020-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The entity tag used for optimistic concurrency when modifying the resource.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProductNestedProperties](#productnestedproperties) (ReadOnly): Properties of the product resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.AzureStack/registrations/products' (ReadOnly, DeployTimeConstant): The resource type

## Function listDetails (Microsoft.AzureStack/registrations/products@2020-06-01-preview)
* **Resource**: Microsoft.AzureStack/registrations/products
* **ApiVersion**: 2020-06-01-preview
* **Output**: [ExtendedProduct](#extendedproduct)

## CloudManifestFileDeploymentData
### Properties
* **customCloudVerificationKey**: string: Signing verification public key.
* **customEnvironmentEndpoints**: [CloudManifestFileEnvironmentEndpoints](#cloudmanifestfileenvironmentendpoints): Environment endpoints.
* **externalDsmsCertificates**: string: Dsms external certificates.

## CloudManifestFileEnvironmentEndpoints
### Properties
* **customCloudArmEndpoint**: string: ARM endpoint.
* **externalDsmsEndpoint**: string: Dsms endpoint.

## CloudManifestFileProperties
### Properties
* **deploymentData**: [CloudManifestFileDeploymentData](#cloudmanifestfiledeploymentdata): Cloud specific manifest data.
* **signature**: string: Signature of the cloud specific manifest data.

## Compatibility
### Properties
* **description**: string: Full error message if any compatibility issues are found
* **isCompatible**: bool: Tells if product is compatible with current device
* **issues**: 'ADFSIdentitySystemRequired' | 'AzureADIdentitySystemRequired' | 'CapacityBillingModelRequired' | 'ConnectionToAzureRequired' | 'ConnectionToInternetRequired' | 'DevelopmentBillingModelRequired' | 'DisconnectedEnvironmentRequired' | 'HigherDeviceVersionRequired' | 'LowerDeviceVersionRequired' | 'PayAsYouGoBillingModelRequired' | string[]: List of all issues found
* **message**: string: Short error message if any compatibility issues are found

## CustomerSubscriptionProperties
### Properties
* **tenantId**: string: Tenant Id.

## DataDiskImage
### Properties
* **lun**: int (ReadOnly): The LUN.
* **sourceBlobSasUri**: string (ReadOnly): SAS key for source blob.

## ExtendedProduct
### Properties
* **galleryPackageBlobSasUri**: string (ReadOnly): The URI to the .azpkg file that provides information required for showing product in the gallery.
* **productKind**: string (ReadOnly): Specifies the kind of the product (virtualMachine or virtualMachineExtension).
* **properties**: [ExtendedProductProperties](#extendedproductproperties) (ReadOnly): Specifies additional properties describing the product.

## ExtendedProductProperties
### Properties
* **computeRole**: 'IaaS' | 'None' | 'PaaS' | string (ReadOnly): Specifies kind of compute role included in the package.
* **dataDiskImages**: [DataDiskImage](#datadiskimage)[] (ReadOnly): List of attached data disks.
* **isSystemExtension**: bool (ReadOnly): Specifies if product is a Virtual Machine Extension.
* **osDiskImage**: [OsDiskImage](#osdiskimage) (ReadOnly): OS disk image used by product.
* **sourceBlob**: [Uri](#uri) (ReadOnly): Specifies a download location where content can be downloaded from.
* **supportMultipleExtensions**: bool (ReadOnly): Indicates if specified product supports multiple extensions.
* **version**: string (ReadOnly): Specifies product version.
* **vmOsType**: 'Linux' | 'None' | 'Windows' | string (ReadOnly): Specifies operating system used by the product.
* **vmScaleSetEnabled**: bool (ReadOnly): Indicates if virtual machine Scale Set is enabled in the specified product.

## IconUris
### Properties
* **hero**: string: URI to hero icon.
* **large**: string: URI to large icon.
* **medium**: string: URI to medium icon.
* **small**: string: URI to small icon.
* **wide**: string: URI to wide icon.

## LinkedSubscriptionParameterPropertiesOrLinkedSubscriptionProperties
### Properties
* **deviceConnectionStatus**: string (ReadOnly): The status of the remote management connection of the Azure Stack device.
* **deviceId**: string (ReadOnly): The identifier of the Azure Stack device for remote management.
* **deviceLinkState**: string (ReadOnly): The connection state of the Azure Stack device.
* **deviceObjectId**: string (ReadOnly): The object identifier associated with the Azure Stack device connecting to Azure.
* **lastConnectedTime**: string (ReadOnly): The last remote management connection time for the Azure Stack device connected to the linked subscription resource.
* **linkedSubscriptionId**: string (Required): The identifier associated with the device subscription.
* **registrationResourceId**: string (Required): The identifier associated with the device registration.

## OsDiskImage
### Properties
* **operatingSystem**: 'Linux' | 'None' | 'Windows' | string (ReadOnly): OS operating system type.
* **sourceBlobSasUri**: string (ReadOnly): SAS key for source blob.

## ProductLink
### Properties
* **displayName**: string: The description of the link.
* **uri**: string: The URI corresponding to the link.

## ProductNestedProperties
### Properties
* **billingPartNumber**: string: The part number used for billing purposes.
* **compatibility**: [Compatibility](#compatibility): Product compatibility with current device.
* **description**: string: The description of the product.
* **displayName**: string: The display name of the product.
* **galleryItemIdentity**: string: The identifier of the gallery item corresponding to the product.
* **iconUris**: [IconUris](#iconuris): Additional links available for this product.
* **legalTerms**: string: The legal terms.
* **links**: [ProductLink](#productlink)[]: Additional links available for this product.
* **offer**: string: The offer representing the product.
* **offerVersion**: string: The version of the product offer.
* **payloadLength**: int: The length of product content.
* **privacyPolicy**: string: The privacy policy.
* **productKind**: string: The kind of the product (virtualMachine or virtualMachineExtension)
* **productProperties**: [ProductProperties](#productproperties): Additional properties for the product.
* **publisherDisplayName**: string: The user-friendly name of the product publisher.
* **publisherIdentifier**: string: Publisher identifier.
* **sku**: string: The product SKU.
* **vmExtensionType**: string: The type of the Virtual Machine Extension.

## ProductProperties
### Properties
* **version**: string: The version.

## RegistrationParameterPropertiesOrRegistrationProperties
### Properties
* **billingModel**: string (ReadOnly): Specifies the billing mode for the Azure Stack registration.
* **cloudId**: string (ReadOnly): The identifier of the registered Azure Stack.
* **objectId**: string (ReadOnly): The object identifier associated with the Azure Stack connecting to Azure.
* **registrationToken**: string (Required, WriteOnly): The token identifying registered Azure Stack

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

## Uri
### Properties
* **uri**: string (ReadOnly): The URI.

