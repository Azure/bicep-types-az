# Informatica.DataManagement @ 2024-05-08

## Resource Informatica.DataManagement/organizations@2024-05-08
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-08' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OrganizationProperties](#organizationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Informatica.DataManagement/organizations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Informatica.DataManagement/organizations/serverlessRuntimes@2024-05-08
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-08' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [InformaticaServerlessRuntimeProperties](#informaticaserverlessruntimeproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Informatica.DataManagement/organizations/serverlessRuntimes' (ReadOnly, DeployTimeConstant): The resource type

## AdvancedCustomProperties
### Properties
* **key**: string: advanced custom properties key
* **value**: string: advanced custom properties value

## ApplicationConfigs
### Properties
* **customized**: string (Required): Customized value of the application config.
* **defaultValue**: string (Required): Default value of the application config.
* **name**: string (Required): Name of the application config.
* **platform**: string (Required): Platform type of the application config.
* **type**: string (Required): Type of the application config.
* **value**: string (Required): Value of the application config.

## CdiConfigProps
### Properties
* **applicationConfigs**: [ApplicationConfigs](#applicationconfigs)[] (Required): ApplicationConfigs of the CDI or CDIE.
* **engineName**: string (Required): EngineName of the application config.
* **engineVersion**: string (Required): EngineVersion of the application config.

## CompanyDetails
### Properties
* **business**: string: Business phone number
* **companyName**: string: company Name
* **country**: string: Country name
* **domain**: string: Domain name
* **numberOfEmployees**: int: Number Of Employees
* **officeAddress**: string: Office Address

## InformaticaProperties
### Properties
* **informaticaRegion**: string: Informatica organization region
* **organizationId**: string: Organization id
* **organizationName**: string: Organization name
* **singleSignOnUrl**: string: Single sing on URL for informatica organization

## InformaticaServerlessRuntimeProperties
### Properties
* **advancedCustomProperties**: [AdvancedCustomProperties](#advancedcustomproperties)[]: String KV pairs indicating Advanced custom properties.
* **applicationType**: 'CDI' | 'CDIE' | string: Application type of the Serverless Runtime environment.
* **computeUnits**: string: Compute units of the serverless runtime.
* **description**: string: description of the serverless runtime.
* **executionTimeout**: string: Serverless Execution timeout
* **platform**: 'AZURE' | string: Platform type of the Serverless Runtime.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State of the resource.
* **serverlessAccountLocation**: string (Required): Serverless account creation location
* **serverlessRuntimeConfig**: [ServerlessRuntimeConfigProperties](#serverlessruntimeconfigproperties): Serverless config properties
* **serverlessRuntimeNetworkProfile**: [ServerlessRuntimeNetworkProfile](#serverlessruntimenetworkprofile): Informatica Serverless Network profile properties.
* **serverlessRuntimeTags**: [ServerlessRuntimeTag](#serverlessruntimetag)[]: Serverless Runtime Tags
* **serverlessRuntimeUserContextProperties**: [ServerlessRuntimeUserContextProperties](#serverlessruntimeusercontextproperties): Serverless runtime user context properties
* **supplementaryFileLocation**: string: Supplementary file location.

## LinkOrganization
### Properties
* **token**: string: Link organization token

## MarketplaceDetails
### Properties
* **marketplaceSubscriptionId**: string: Marketplace Subscription Id
* **offerDetails**: [OfferDetails](#offerdetails) (Required): Marketplace offer details.

## NetworkInterfaceConfiguration
### Properties
* **subnetId**: string (Required): Virtual network subnet resource id
* **vnetId**: string (Required): Virtual network resource id
* **vnetResourceGuid**: string: Virtual network resource guid

## OfferDetails
### Properties
* **offerId**: string {maxLength: 250} (Required): Id of the product offering.
* **planId**: string {maxLength: 250} (Required): Id of the product offer plan.
* **planName**: string {maxLength: 250} (Required): Name of the product offer plan.
* **publisherId**: string {maxLength: 250} (Required): Id of the product publisher.
* **termId**: string {maxLength: 250} (Required): Offer plan term id.
* **termUnit**: string {maxLength: 50}: Offer plan term unit.

## OrganizationProperties
### Properties
* **companyDetails**: [CompanyDetails](#companydetails): Company details.
* **informaticaProperties**: [InformaticaProperties](#informaticaproperties): Informatica Organization properties.
* **linkOrganization**: [LinkOrganization](#linkorganization): Link Organization
* **marketplaceDetails**: [MarketplaceDetails](#marketplacedetails): Marketplace details.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State of the resource.
* **userDetails**: [UserDetails](#userdetails): User details

## ServerlessRuntimeConfigProperties
### Properties
* **cdiConfigProps**: [CdiConfigProps](#cdiconfigprops)[]: The List of Informatica Serverless Runtime CDI Config Properties.
* **cdieConfigProps**: [CdiConfigProps](#cdiconfigprops)[]: The List of Informatica Serverless Runtime CDIE Config Properties.

## ServerlessRuntimeNetworkProfile
### Properties
* **networkInterfaceConfiguration**: [NetworkInterfaceConfiguration](#networkinterfaceconfiguration) (Required): Network Interface Configuration Profile

## ServerlessRuntimeTag
### Properties
* **name**: string: The name (also known as the key) of the tag.
* **value**: string: The value of the tag.

## ServerlessRuntimeUserContextProperties
### Properties
* **userContextToken**: string (Required): User context token for OBO flow.

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

## UserDetails
### Properties
* **emailAddress**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"}: User email address.
* **firstName**: string {maxLength: 50}: User first name.
* **lastName**: string {maxLength: 50}: User last name.
* **phoneNumber**: string {maxLength: 40}: Phone number of the user used by for contacting them if needed
* **upn**: string: UPN of user

