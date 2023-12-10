# Microsoft.EdgeMarketplace @ 2023-08-01

## Resource Microsoft.EdgeMarketplace/offers@2023-08-01 (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OfferProperties](#offerproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.EdgeMarketplace/offers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EdgeMarketplace/publishers@2023-08-01 (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-08-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PublisherProperties](#publisherproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.EdgeMarketplace/publishers' (ReadOnly, DeployTimeConstant): The resource type

## IconFileUris
### Properties
* **large**: string: uri of large icon
* **medium**: string: uri of medium icon
* **small**: string: uri of small icon
* **wide**: string: uri of wide icon

## MarketplaceSku
### Properties
* **catalogPlanId**: string (Required): The catalog plan id
* **description**: string: The description
* **displayName**: string: The display name of marketplace sku
* **displayRank**: int: The display rank of the sku
* **generation**: string: The generation
* **longSummary**: string: The long summary
* **marketplaceSkuId**: string (Required): The marketplace sku id
* **marketplaceSkuVersions**: [MarketplaceSkuVersion](#marketplaceskuversion)[]: The marketplace sku version
* **operatingSystem**: [SkuOperatingSystem](#skuoperatingsystem): The operating system supported
* **summary**: string: The summary
* **type**: string: The type of marketplace sku

## MarketplaceSkuVersion
### Properties
* **minimumDownloadSizeInMb**: int: The size of the download
* **name**: string (Required): The name of sku version
* **sizeOnDiskInMb**: int: The size of the image
* **stageName**: string: The stage name

## OfferContent
### Properties
* **availability**: 'Private' | 'Public' | string: The availability of the offer
* **categoryIds**: string[]: The category ids
* **description**: string: The description
* **displayName**: string (Required): The display name of the offer
* **iconFileUris**: [IconFileUris](#iconfileuris): The icon files
* **longSummary**: string: The long summary
* **offerId**: string (Required): The offer id
* **offerPublisher**: [OfferPublisher](#offerpublisher): The publisher of the offer
* **offerType**: string: The offer type
* **operatingSystems**: string[]: The operating systems
* **popularity**: int: The popularity of the offer
* **releaseType**: 'GA' | 'Preview' | string: The release type of the offer
* **summary**: string: The summary
* **supportUri**: string: The support uri
* **termsAndConditions**: [TermsAndConditions](#termsandconditions): The terms and conditions

## OfferProperties
### Properties
* **contentUrl**: string: The content url
* **contentVersion**: string: The content version
* **marketplaceSkus**: [MarketplaceSku](#marketplacesku)[]: The marketplace skus
* **offerContent**: [OfferContent](#offercontent) (Required): The offer content
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string: The resource provisioning state

## OfferPublisher
### Properties
* **publisherDisplayName**: string (Required): The publisher name
* **publisherId**: string (Required): The publisher Id

## PublisherProperties
### Properties
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (Required): The resource provisioning state

## SkuOperatingSystem
### Properties
* **family**: string: The family of the operating system
* **name**: string (Required): The name of the operating system
* **type**: string: The type of the operating system

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TermsAndConditions
### Properties
* **legalTermsType**: string: The type of legal terms
* **legalTermsUri**: string: The legal terms and conditions uri
* **privacyPolicyUri**: string: The privacy policy uri

