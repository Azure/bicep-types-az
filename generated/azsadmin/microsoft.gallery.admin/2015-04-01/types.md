# microsoft.gallery.admin @ 2015-04-01

## Resource microsoft.gallery.admin/galleryItems@2015-04-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GalleryItemProperties](#galleryitemproperties) (ReadOnly): Properties of a gallery item.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): List of key-value pairs.
* **type**: 'microsoft.gallery.admin/galleryItems' (ReadOnly, DeployTimeConstant): The resource type

## Artifact
### Properties
* **name**: string: Name of the artifact.
* **type**: 'custom' | 'fragment' | 'metadata' | 'template' | string: Artifact type.
* **uri**: string: URI to the artifact.

## DefinitionTemplates
### Properties
* **defaultDeploymentTemplateId**: string: Default deployment template ID.
* **deploymentFragmentFileUris**: [DefinitionTemplatesDeploymentFragmentFileUris](#definitiontemplatesdeploymentfragmentfileuris) (ReadOnly): List of key-value pairs containing the deployment fragment file IDs defined in the package manifest.
* **deploymentTemplateFileUris**: [DefinitionTemplatesDeploymentTemplateFileUris](#definitiontemplatesdeploymenttemplatefileuris) (ReadOnly): List of key-value containing the deployment template file IDs defined in the package manifest.
* **uiDefinitionFileUri**: string: UI definition file URI.

## DefinitionTemplatesDeploymentFragmentFileUris
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DefinitionTemplatesDeploymentTemplateFileUris
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Filter
### Properties
* **type**: string: Filter type.
* **value**: string: Filter value.

## GalleryItemProperties
### Properties
* **additionalProperties**: [GalleryItemPropertiesAdditionalProperties](#galleryitempropertiesadditionalproperties) (ReadOnly): List of additional properties provided for the item.
* **artifacts**: [Artifact](#artifact)[] (ReadOnly): List of artifacts for the gallery item.
* **categoryIds**: string[] (ReadOnly): List of category IDs the gallery item belongs to.
* **changedTime**: string: Last update time of gallery item.
* **createdTime**: string: The date and time that the gallery item was created.
* **definitionTemplates**: [DefinitionTemplates](#definitiontemplates) (ReadOnly): Definition template for gallery item.
* **description**: string: The description of the gallery item.
* **filters**: [Filter](#filter)[] (ReadOnly): List of filters for the gallery item.
* **iconFileUris**: [GalleryItemPropertiesIconFileUris](#galleryitempropertiesiconfileuris) (ReadOnly): URIs to icon files.
* **identity**: string: Identity of the gallery item.
* **images**: [ImageGroup](#imagegroup)[] (ReadOnly): List of images.
* **itemDisplayName**: string: Displayed name in the portal.
* **itemName**: string: The display name for the gallery item, for the locale of the request.
* **itemType**: 'GalleryItem' | 'ItemGroup' | string: Describes the type of the gallery item, either GalleryItem or ItemGroup.
* **links**: [LinkProperties](#linkproperties)[] (ReadOnly): Links provided for the item.
* **longSummary**: string: Long summary of the gallery item.
* **marketingMaterial**: [MarketingMaterial](#marketingmaterial): Marketing materials for the gallery item.
* **metadata**: [OpenProperty](#openproperty) (ReadOnly): Custom item metadata.
* **products**: [Product](#product)[] (ReadOnly): List of products.
* **properties**: [GalleryItemProperties](#galleryitemproperties) (ReadOnly): List of properties provided for the gallery item.
* **publisher**: string: The publisher of the gallery item.
* **publisherDisplayName**: string: Display name of the publisher.
* **resourceGroupName**: string: Resource group name the gallery item belongs too.
* **screenshotUris**: string[] (ReadOnly): List of screenshot image URIs provided for the item.
* **summary**: string: Short summary of the gallery item.
* **uiDefinitionUri**: string: The URL of the view definition object that defines the UI information that is used when an instance of the gallery item resource definition is created.
* **version**: string: The version identifier of the gallery item, in Major.Minor.Build format.

## GalleryItemProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GalleryItemPropertiesAdditionalProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GalleryItemPropertiesIconFileUris
### Properties
* **hero**: string: URI to the hero icon.
* **large**: string: URI to the large icon.
* **medium**: string: URI to the medium icon.
* **small**: string: URI to the small icon.
* **wide**: string: URI to the wide icon.

## Image
### Properties
* **id**: string: ID of the image.
* **type**: string: Type of image.
* **uri**: string: URI to the image.

## ImageGroup
### Properties
* **context**: string: Image group identifier.
* **items**: [Image](#image)[] (ReadOnly): List of images.

## LinkProperties
### Properties
* **displayName**: string: Display name of the link.
* **id**: string: ID of the link.
* **uri**: string: URI of the link.

## MarketingMaterial
### Properties
* **learnUri**: string: URI to educational material.
* **path**: string: Path to the marketing site.

## OfferDetails
### Properties
* **offerId**: string: Offer identifier.
* **plans**: [Plan](#plan)[] (ReadOnly): List of plans available for the offer.
* **publisherId**: string: Publisher identifier.

## OpenProperty
### Properties
* **properties**: [OpenPropertyProperties](#openpropertyproperties) (ReadOnly): Dictionary of dynamic properties.

## OpenPropertyProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Plan
### Properties
* **description**: string: Description of the plan.
* **displayName**: string: Display name of the plan.
* **planId**: string: Plan identifier.
* **summary**: string: Summary of the plan.

## Product
### Properties
* **displayName**: string: Display name of the product.
* **legalTerms**: string: Legal terms of the product.
* **legalTermsUri**: string: URI to the legal terms of the product.
* **offerDetails**: [OfferDetails](#offerdetails): Offer details of the product.
* **pricingDetailsUri**: string: URI to the pricing details of the product.
* **privacyPolicy**: string: Privacy policy of the product.
* **privacyPolicyUri**: string: URI to the privacy policy of the product.
* **publisherDisplayName**: string: Publisher display name of the product.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

