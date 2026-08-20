# Informatica.DataManagement @ 2024-11-29-preview

## Resource Informatica.DataManagement/organizations@2024-11-29-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-29-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OrganizationProperties](#organizationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Informatica.DataManagement/organizations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Informatica.DataManagement/organizations/serverlessRuntimes@2024-11-29-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-29-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **name**: string {pattern: "^[a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [InformaticaServerlessRuntimeProperties](#informaticaserverlessruntimeproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Informatica.DataManagement/organizations/serverlessRuntimes' (ReadOnly, DeployTimeConstant): The resource type

## Function checkDependencies (Informatica.DataManagement/organizations/serverlessRuntimes@2024-11-29-preview)
* **Resource**: Informatica.DataManagement/organizations/serverlessRuntimes
* **ApiVersion**: 2024-11-29-preview
* **Output**: [CheckDependenciesResponse](#checkdependenciesresponse)

## Function getAllServerlessRuntimes (Informatica.DataManagement/organizations@2024-11-29-preview)
* **Resource**: Informatica.DataManagement/organizations
* **ApiVersion**: 2024-11-29-preview
* **Output**: [InformaticaServerlessRuntimeResourceList](#informaticaserverlessruntimeresourcelist)

## Function getServerlessMetadata (Informatica.DataManagement/organizations@2024-11-29-preview)
* **Resource**: Informatica.DataManagement/organizations
* **ApiVersion**: 2024-11-29-preview
* **Output**: [ServerlessMetadataResponse](#serverlessmetadataresponse)

## Function serverlessResourceById (Informatica.DataManagement/organizations/serverlessRuntimes@2024-11-29-preview)
* **Resource**: Informatica.DataManagement/organizations/serverlessRuntimes
* **ApiVersion**: 2024-11-29-preview
* **Output**: [InformaticaServerlessRuntimeResource](#informaticaserverlessruntimeresource)

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

## ApplicationTypeMetadata
### Properties
* **name**: string: Application type name
* **value**: string: Application type value

## CdiConfigProps
### Properties
* **applicationConfigs**: [ApplicationConfigs](#applicationconfigs)[] (Required): ApplicationConfigs of the CDI or CDIE.
* **engineName**: string (Required): EngineName of the application config.
* **engineVersion**: string (Required): EngineVersion of the application config.

## CheckDependenciesResponse
### Properties
* **count**: int (Required): Count of dependencies
* **id**: string (Required): id of resource
* **references**: [ServerlessRuntimeDependency](#serverlessruntimedependency)[] (Required): List of dependencies

## CompanyDetails
### Properties
* **business**: string: Business phone number
* **companyName**: string: company Name
* **country**: string: Country name
* **domain**: string: Domain name
* **numberOfEmployees**: int: Number Of Employees
* **officeAddress**: string: Office Address

## ComputeUnitsMetadata
### Properties
* **name**: string: ComputeUnit name
* **value**: string[]: ComputeUnit value

## InfaRuntimeResourceFetchMetaData
### Properties
* **createdBy**: string (Required): Created by
* **createdTime**: string (Required): Created time
* **description**: string: Description of the runtime resource
* **id**: string (Required): Informatica serverless runtime id
* **name**: string (Required): Environment name
* **serverlessConfigProperties**: [InfaServerlessFetchConfigProperties](#infaserverlessfetchconfigproperties) (Required): Serverless Config Properties
* **status**: string (Required): Status of the environment
* **statusLocalized**: string (Required): Display message for the given status
* **statusMessage**: string (Required): status message
* **type**: 'SERVERLESS' | string (Required): Environment Type
* **updatedBy**: string (Required): Last Updated by
* **updatedTime**: string (Required): Updated Time

## InfaServerlessFetchConfigProperties
### Properties
* **advancedCustomProperties**: string: Advanced custom properties
* **applicationType**: string: applicationType name
* **computeUnits**: string: Compute Units
* **executionTimeout**: string: Execution timeout
* **platform**: string: Serverless Account Platform
* **region**: string: region name for the runtime environment
* **resourceGroupName**: string: Resource group name
* **serverlessArmResourceId**: string: Serverless Arm Resource ID
* **serverlessRuntimeDataDisks**: [ServerlessRuntimeDataDisk](#serverlessruntimedatadisk)[]: Serverless runtime data disks
* **subnet**: string: subnet name
* **subscriptionId**: string: subscription ID
* **supplementaryFileLocation**: string: Supplementary File location
* **tags**: string: Tags for the resource
* **tenantId**: string: Tenant ID
* **vnet**: string: virtual network

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
* **serverlessRuntimeDataDisks**: [ServerlessRuntimeDataDisk](#serverlessruntimedatadisk)[]: Serverless runtime data disks
* **serverlessRuntimeNetworkProfile**: [ServerlessRuntimeNetworkProfile](#serverlessruntimenetworkprofile): Informatica Serverless Network profile properties.
* **serverlessRuntimeTags**: [ServerlessRuntimeTag](#serverlessruntimetag)[]: Serverless Runtime Tags
* **serverlessRuntimeUserContextProperties**: [ServerlessRuntimeUserContextProperties](#serverlessruntimeusercontextproperties): Serverless runtime user context properties
* **supplementaryFileLocation**: string: Supplementary file location.

## InformaticaServerlessRuntimeResource
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **name**: string (ReadOnly): The name of the resource
* **properties**: [InformaticaServerlessRuntimeProperties](#informaticaserverlessruntimeproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## InformaticaServerlessRuntimeResourceList
### Properties
* **informaticaRuntimeResources**: [InfaRuntimeResourceFetchMetaData](#infaruntimeresourcefetchmetadata)[] (Required): List of runtime resources for the fetch all API

## LinkOrganization
### Properties
* **token**: string {sensitive} (WriteOnly): Link organization token

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MarketplaceDetails
### Properties
* **marketplaceSubscriptionId**: string: Marketplace Subscription Id
* **marketplaceSubscriptionStatus**: 'PendingFulfillmentStart' | 'Subscribe' | 'Suspend' | 'Unsubscribe' | string (ReadOnly): Marketplace subscription status of a resource
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
* **linkOrganization**: [LinkOrganization](#linkorganization) (WriteOnly): Link Organization
* **marketplaceDetails**: [MarketplaceDetails](#marketplacedetails): Marketplace details.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State of the resource.
* **userDetails**: [UserDetails](#userdetails): User details

## RegionsMetadata
### Properties
* **id**: string: Region Id
* **name**: string: Region name

## ServerlessConfigProperties
### Properties
* **applicationTypes**: [ApplicationTypeMetadata](#applicationtypemetadata)[]: List of application types supported by informatica
* **computeUnits**: [ComputeUnitsMetadata](#computeunitsmetadata)[]: The list of compute units with possible array of values
* **executionTimeout**: string: Serverless Runtime execution timeout
* **platform**: 'AZURE' | string: Platform types
* **regions**: [RegionsMetadata](#regionsmetadata)[]: List of supported serverless informatica regions

## ServerlessMetadataResponse
### Properties
* **serverlessConfigProperties**: [ServerlessConfigProperties](#serverlessconfigproperties): serverless config properties
* **serverlessRuntimeConfigProperties**: [ServerlessRuntimeConfigProperties](#serverlessruntimeconfigproperties): serverless runtime config properties
* **type**: 'SERVERLESS' | string: type of the runtime environment.

## ServerlessRuntimeConfigProperties
### Properties
* **cdiConfigProps**: [CdiConfigProps](#cdiconfigprops)[]: The List of Informatica Serverless Runtime CDI Config Properties.
* **cdieConfigProps**: [CdiConfigProps](#cdiconfigprops)[]: The List of Informatica Serverless Runtime CDIE Config Properties.

## ServerlessRuntimeDataDisk
### Properties
* **mountOptions**: string: Mount options
* **serverHostOrIpAddress**: string: Server Host or IP Address
* **sourceMount**: string: Source mount point
* **targetMount**: string: Target mount point
* **type**: string: Type of the data disk

## ServerlessRuntimeDependency
### Properties
* **appContextId**: string (Required): Application context ID
* **description**: string (Required): description of Dependency
* **documentType**: string (Required): document type
* **id**: string (Required): Dependency ID
* **lastUpdatedTime**: string (Required): Last Update Time
* **path**: string (Required): Dependency path

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

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## UserDetails
### Properties
* **emailAddress**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"}: User email address.
* **firstName**: string {maxLength: 50}: User first name.
* **lastName**: string {maxLength: 50}: User last name.
* **phoneNumber**: string {maxLength: 40}: Phone number of the user used by for contacting them if needed
* **upn**: string: UPN of user

