# Microsoft.ProviderHub @ 2020-11-20

## Resource Microsoft.ProviderHub/providerRegistrations@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ProviderRegistrationProperties](#providerregistrationproperties)
* **type**: 'Microsoft.ProviderHub/providerRegistrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/customRollouts@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CustomRolloutProperties](#customrolloutproperties) (Required)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/customRollouts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/defaultRollouts@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DefaultRolloutProperties](#defaultrolloutproperties)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/defaultRollouts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/notificationRegistrations@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NotificationRegistrationProperties](#notificationregistrationproperties)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/notificationRegistrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/operations@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **contents**: [OperationsDefinition](#operationsdefinition)[] (Required, WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/operations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ResourceTypeRegistrationProperties](#resourcetyperegistrationproperties)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SkuResourceProperties](#skuresourceproperties) (ReadOnly)
* **skuSettings**: [SkuSetting](#skusetting)[] (Required, WriteOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SkuResourceProperties](#skuresourceproperties) (ReadOnly)
* **skuSettings**: [SkuSetting](#skusetting)[] (Required, WriteOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SkuResourceProperties](#skuresourceproperties) (ReadOnly)
* **skuSettings**: [SkuSetting](#skusetting)[] (Required, WriteOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/skus@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SkuResourceProperties](#skuresourceproperties) (ReadOnly)
* **skuSettings**: [SkuSetting](#skusetting)[] (Required, WriteOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant)

## ProviderRegistrationProperties
### Properties
* **capabilities**: [ResourceProviderCapabilities](#resourceprovidercapabilities)[]
* **featuresRule**: [ResourceProviderManifestPropertiesFeaturesRule](#resourceprovidermanifestpropertiesfeaturesrule)
* **management**: [ResourceProviderManifestPropertiesManagement](#resourceprovidermanifestpropertiesmanagement)
* **metadata**: any
* **namespace**: string
* **providerAuthentication**: [ResourceProviderManifestPropertiesProviderAuthentication](#resourceprovidermanifestpropertiesproviderauthentication)
* **providerAuthorizations**: [ResourceProviderAuthorization](#resourceproviderauthorization)[]
* **providerHubMetadata**: [ProviderRegistrationPropertiesProviderHubMetadata](#providerregistrationpropertiesproviderhubmetadata)
* **providerType**: 'AuthorizationFree' | 'External' | 'Hidden' | 'Internal' | 'LegacyRegistrationRequired' | 'NotSpecified' | 'RegistrationFree' | 'TenantOnly'
* **providerVersion**: string
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure'
* **requestHeaderOptions**: [ResourceProviderManifestPropertiesRequestHeaderOptions](#resourceprovidermanifestpropertiesrequestheaderoptions)
* **requiredFeatures**: string[]
* **subscriptionLifecycleNotificationSpecifications**: [ProviderRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications](#providerregistrationpropertiessubscriptionlifecyclenotificationspecifications)
* **templateDeploymentOptions**: [ResourceProviderManifestPropertiesTemplateDeploymentOptions](#resourceprovidermanifestpropertiestemplatedeploymentoptions)

## ResourceProviderCapabilities
### Properties
* **effect**: 'Allow' | 'Disallow' | 'NotSpecified' (Required)
* **quotaId**: string (Required)
* **requiredFeatures**: string[]

## ResourceProviderManifestPropertiesFeaturesRule
### Properties
* **requiredFeaturesPolicy**: 'All' | 'Any' (Required)

## ResourceProviderManifestPropertiesManagement
### Properties
* **incidentContactEmail**: string
* **incidentRoutingService**: string
* **incidentRoutingTeam**: string
* **manifestOwners**: string[]
* **resourceAccessPolicy**: 'AcisActionAllowed' | 'AcisReadAllowed' | 'NotSpecified'
* **resourceAccessRoles**: any[]
* **schemaOwners**: string[]
* **serviceTreeInfos**: [ServiceTreeInfo](#servicetreeinfo)[]

## ServiceTreeInfo
### Properties
* **componentId**: string
* **serviceId**: string

## ResourceProviderManifestPropertiesProviderAuthentication
### Properties
* **allowedAudiences**: string[] (Required)

## ResourceProviderAuthorization
### Properties
* **applicationId**: string
* **managedByRoleDefinitionId**: string
* **roleDefinitionId**: string

## ProviderRegistrationPropertiesProviderHubMetadata
### Properties
* **providerAuthentication**: [ProviderHubMetadataProviderAuthentication](#providerhubmetadataproviderauthentication)
* **providerAuthorizations**: [ResourceProviderAuthorization](#resourceproviderauthorization)[]
* **thirdPartyProviderAuthorization**: [ProviderHubMetadataThirdPartyProviderAuthorization](#providerhubmetadatathirdpartyproviderauthorization)

## ProviderHubMetadataProviderAuthentication
### Properties
* **allowedAudiences**: string[] (Required)

## ProviderHubMetadataThirdPartyProviderAuthorization
### Properties
* **authorizations**: [LightHouseAuthorization](#lighthouseauthorization)[]
* **managedByTenantId**: string

## LightHouseAuthorization
### Properties
* **principalId**: string (Required)
* **roleDefinitionId**: string (Required)

## ResourceProviderManifestPropertiesRequestHeaderOptions
### Properties
* **optInHeaders**: 'ClientGroupMembership' | 'NotSpecified' | 'SignedAuxiliaryTokens' | 'SignedUserToken' | 'UnboundedClientGroupMembership'

## ProviderRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications
### Properties
* **softDeleteTTL**: string
* **subscriptionStateOverrideActions**: [SubscriptionStateOverrideAction](#subscriptionstateoverrideaction)[]

## SubscriptionStateOverrideAction
### Properties
* **action**: 'BillingCancellation' | 'DeleteAllResources' | 'NoOp' | 'NotDefined' | 'SoftDeleteAllResources' | 'UndoSoftDelete' (Required)
* **state**: 'Deleted' | 'Registered' | 'Suspended' | 'SuspendedToDeleted' | 'SuspendedToRegistered' | 'SuspendedToUnregistered' | 'SuspendedToWarned' | 'Unregistered' | 'Warned' | 'WarnedToDeleted' | 'WarnedToRegistered' | 'WarnedToSuspended' | 'WarnedToUnregistered' (Required)

## ResourceProviderManifestPropertiesTemplateDeploymentOptions
### Properties
* **preflightOptions**: 'ContinueDeploymentOnFailure' | 'DefaultValidationOnly' | 'None'[]
* **preflightSupported**: bool

## CustomRolloutProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure'
* **specification**: [CustomRolloutPropertiesSpecification](#customrolloutpropertiesspecification) (Required)
* **status**: [CustomRolloutPropertiesStatus](#customrolloutpropertiesstatus)

## CustomRolloutPropertiesSpecification
### Properties
* **canary**: [CustomRolloutSpecificationCanary](#customrolloutspecificationcanary) (Required)
* **providerRegistration**: [CustomRolloutSpecificationProviderRegistration](#customrolloutspecificationproviderregistration)
* **resourceTypeRegistrations**: [ResourceTypeRegistration](#resourcetyperegistration)[]

## CustomRolloutSpecificationCanary
### Properties
* **regions**: string[]

## CustomRolloutSpecificationProviderRegistration
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [ProviderRegistrationProperties](#providerregistrationproperties)
* **type**: string (ReadOnly)

## ResourceTypeRegistration
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [ResourceTypeRegistrationProperties](#resourcetyperegistrationproperties)
* **type**: string (ReadOnly)

## ResourceTypeRegistrationProperties
### Properties
* **allowedUnauthorizedActions**: string[]
* **authorizationActionMappings**: [AuthorizationActionMapping](#authorizationactionmapping)[]
* **checkNameAvailabilitySpecifications**: [ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecifications](#resourcetyperegistrationpropertieschecknameavailabilityspecifications)
* **defaultApiVersion**: string
* **disallowedActionVerbs**: string[]
* **enableAsyncOperation**: bool
* **enableThirdPartyS2S**: bool
* **endpoints**: [ResourceTypeEndpoint](#resourcetypeendpoint)[]
* **extendedLocations**: [ExtendedLocationOptions](#extendedlocationoptions)[]
* **extensionOptions**: [ResourceTypeRegistrationPropertiesExtensionOptions](#resourcetyperegistrationpropertiesextensionoptions)
* **featuresRule**: [ResourceTypeRegistrationPropertiesFeaturesRule](#resourcetyperegistrationpropertiesfeaturesrule)
* **identityManagement**: [ResourceTypeRegistrationPropertiesIdentityManagement](#resourcetyperegistrationpropertiesidentitymanagement)
* **isPureProxy**: bool
* **linkedAccessChecks**: [LinkedAccessCheck](#linkedaccesscheck)[]
* **loggingRules**: [LoggingRule](#loggingrule)[]
* **marketplaceType**: 'AddOn' | 'Bypass' | 'NotSpecified' | 'Store'
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure'
* **regionality**: 'Global' | 'NotSpecified' | 'Regional'
* **requestHeaderOptions**: [ResourceTypeRegistrationPropertiesRequestHeaderOptions](#resourcetyperegistrationpropertiesrequestheaderoptions)
* **requiredFeatures**: string[]
* **resourceDeletionPolicy**: 'CascadeDeleteAll' | 'CascadeDeleteProxyOnlyChildren' | 'NotSpecified'
* **resourceMovePolicy**: [ResourceTypeRegistrationPropertiesResourceMovePolicy](#resourcetyperegistrationpropertiesresourcemovepolicy)
* **routingType**: 'CascadeExtension' | 'Default' | 'Extension' | 'Failover' | 'Fanout' | 'HostBased' | 'LocationBased' | 'ProxyOnly' | 'Tenant'
* **serviceTreeInfos**: [ServiceTreeInfo](#servicetreeinfo)[]
* **subscriptionLifecycleNotificationSpecifications**: [ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications](#resourcetyperegistrationpropertiessubscriptionlifecyclenotificationspecifications)
* **subscriptionStateRules**: [SubscriptionStateRule](#subscriptionstaterule)[]
* **swaggerSpecifications**: [SwaggerSpecification](#swaggerspecification)[]
* **templateDeploymentOptions**: [ResourceTypeRegistrationPropertiesTemplateDeploymentOptions](#resourcetyperegistrationpropertiestemplatedeploymentoptions)
* **throttlingRules**: [ThrottlingRule](#throttlingrule)[]

## AuthorizationActionMapping
### Properties
* **desired**: string
* **original**: string

## ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecifications
### Properties
* **enableDefaultValidation**: bool
* **resourceTypesWithCustomValidation**: string[]

## ResourceTypeEndpoint
### Properties
* **apiVersions**: string[]
* **enabled**: bool
* **extensions**: [ResourceTypeExtension](#resourcetypeextension)[]
* **featuresRule**: [ResourceTypeEndpointFeaturesRule](#resourcetypeendpointfeaturesrule)
* **locations**: string[]
* **requiredFeatures**: string[]
* **timeout**: string

## ResourceTypeExtension
### Properties
* **endpointUri**: string
* **extensionCategories**: 'NotSpecified' | 'ResourceCreationBegin' | 'ResourceCreationCompleted' | 'ResourceCreationValidate' | 'ResourceDeletionBegin' | 'ResourceDeletionCompleted' | 'ResourceDeletionValidate' | 'ResourceMoveBegin' | 'ResourceMoveCompleted' | 'ResourcePatchBegin' | 'ResourcePatchCompleted' | 'ResourcePatchValidate' | 'ResourcePostAction' | 'ResourceReadBegin' | 'ResourceReadValidate' | 'SubscriptionLifecycleNotification'[]
* **timeout**: string

## ResourceTypeEndpointFeaturesRule
### Properties
* **requiredFeaturesPolicy**: 'All' | 'Any' (Required)

## ExtendedLocationOptions
### Properties
* **supportedPolicy**: string
* **type**: string

## ResourceTypeRegistrationPropertiesExtensionOptions
### Properties
* **resourceCreationBegin**: [ResourceTypeExtensionOptionsResourceCreationBegin](#resourcetypeextensionoptionsresourcecreationbegin)

## ResourceTypeExtensionOptionsResourceCreationBegin
### Properties
* **request**: 'DoNotMergeExistingReadOnlyAndSecretProperties' | 'IncludeInternalMetadata' | 'NotSpecified'[]
* **response**: 'DoNotMergeExistingReadOnlyAndSecretProperties' | 'IncludeInternalMetadata' | 'NotSpecified'[]

## ResourceTypeRegistrationPropertiesFeaturesRule
### Properties
* **requiredFeaturesPolicy**: 'All' | 'Any' (Required)

## ResourceTypeRegistrationPropertiesIdentityManagement
### Properties
* **applicationId**: string
* **type**: 'Actor' | 'DelegatedResourceIdentity' | 'NotSpecified' | 'SystemAssigned' | 'UserAssigned'

## LinkedAccessCheck
### Properties
* **actionName**: string
* **linkedAction**: string
* **linkedActionVerb**: string
* **linkedProperty**: string
* **linkedType**: string

## LoggingRule
### Properties
* **action**: string (Required)
* **detailLevel**: 'Body' | 'None' (Required)
* **direction**: 'None' | 'Request' | 'Response' (Required)
* **hiddenPropertyPaths**: [LoggingRuleHiddenPropertyPaths](#loggingrulehiddenpropertypaths)

## LoggingRuleHiddenPropertyPaths
### Properties
* **hiddenPathsOnRequest**: string[]
* **hiddenPathsOnResponse**: string[]

## ResourceTypeRegistrationPropertiesRequestHeaderOptions
### Properties
* **optInHeaders**: 'ClientGroupMembership' | 'NotSpecified' | 'SignedAuxiliaryTokens' | 'SignedUserToken' | 'UnboundedClientGroupMembership'

## ResourceTypeRegistrationPropertiesResourceMovePolicy
### Properties
* **crossResourceGroupMoveEnabled**: bool
* **crossSubscriptionMoveEnabled**: bool
* **validationRequired**: bool

## ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications
### Properties
* **softDeleteTTL**: string
* **subscriptionStateOverrideActions**: [SubscriptionStateOverrideAction](#subscriptionstateoverrideaction)[]

## SubscriptionStateRule
### Properties
* **allowedActions**: string[]
* **state**: 'Deleted' | 'Disabled' | 'Enabled' | 'NotDefined' | 'PastDue' | 'Warned'

## SwaggerSpecification
### Properties
* **apiVersions**: string[]
* **swaggerSpecFolderUri**: string

## ResourceTypeRegistrationPropertiesTemplateDeploymentOptions
### Properties
* **preflightOptions**: 'ContinueDeploymentOnFailure' | 'DefaultValidationOnly' | 'None'[]
* **preflightSupported**: bool

## ThrottlingRule
### Properties
* **action**: string (Required)
* **metrics**: [ThrottlingMetric](#throttlingmetric)[] (Required)
* **requiredFeatures**: string[]

## ThrottlingMetric
### Properties
* **interval**: string
* **limit**: int (Required)
* **type**: 'NotSpecified' | 'NumberOfRequests' | 'NumberOfResources' (Required)

## CustomRolloutPropertiesStatus
### Properties
* **completedRegions**: string[]
* **failedOrSkippedRegions**: [CustomRolloutStatusFailedOrSkippedRegions](#customrolloutstatusfailedorskippedregions)

## CustomRolloutStatusFailedOrSkippedRegions
### Properties
### Additional Properties
* **Additional Properties Type**: [ExtendedErrorInfo](#extendederrorinfo)

## ExtendedErrorInfo
### Properties
* **additionalInfo**: [TypedErrorInfo](#typederrorinfo)[]
* **code**: string
* **details**: [ExtendedErrorInfo](#extendederrorinfo)[]
* **message**: string
* **target**: string

## TypedErrorInfo
### Properties
* **info**: any (ReadOnly)
* **type**: string (Required)

## DefaultRolloutProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure'
* **specification**: [DefaultRolloutPropertiesSpecification](#defaultrolloutpropertiesspecification)
* **status**: [DefaultRolloutPropertiesStatus](#defaultrolloutpropertiesstatus)

## DefaultRolloutPropertiesSpecification
### Properties
* **canary**: [DefaultRolloutSpecificationCanary](#defaultrolloutspecificationcanary)
* **highTraffic**: [DefaultRolloutSpecificationHighTraffic](#defaultrolloutspecificationhightraffic)
* **lowTraffic**: [DefaultRolloutSpecificationLowTraffic](#defaultrolloutspecificationlowtraffic)
* **mediumTraffic**: [DefaultRolloutSpecificationMediumTraffic](#defaultrolloutspecificationmediumtraffic)
* **providerRegistration**: [DefaultRolloutSpecificationProviderRegistration](#defaultrolloutspecificationproviderregistration)
* **resourceTypeRegistrations**: [ResourceTypeRegistration](#resourcetyperegistration)[]
* **restOfTheWorldGroupOne**: [DefaultRolloutSpecificationRestOfTheWorldGroupOne](#defaultrolloutspecificationrestoftheworldgroupone)
* **restOfTheWorldGroupTwo**: [DefaultRolloutSpecificationRestOfTheWorldGroupTwo](#defaultrolloutspecificationrestoftheworldgrouptwo)

## DefaultRolloutSpecificationCanary
### Properties
* **regions**: string[]
* **skipRegions**: string[]

## DefaultRolloutSpecificationHighTraffic
### Properties
* **regions**: string[]
* **waitDuration**: string

## DefaultRolloutSpecificationLowTraffic
### Properties
* **regions**: string[]
* **waitDuration**: string

## DefaultRolloutSpecificationMediumTraffic
### Properties
* **regions**: string[]
* **waitDuration**: string

## DefaultRolloutSpecificationProviderRegistration
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [ProviderRegistrationProperties](#providerregistrationproperties)
* **type**: string (ReadOnly)

## DefaultRolloutSpecificationRestOfTheWorldGroupOne
### Properties
* **regions**: string[]
* **waitDuration**: string

## DefaultRolloutSpecificationRestOfTheWorldGroupTwo
### Properties
* **regions**: string[]
* **waitDuration**: string

## DefaultRolloutPropertiesStatus
### Properties
* **completedRegions**: string[]
* **failedOrSkippedRegions**: [RolloutStatusBaseFailedOrSkippedRegions](#rolloutstatusbasefailedorskippedregions)
* **nextTrafficRegion**: 'Canary' | 'HighTraffic' | 'LowTraffic' | 'MediumTraffic' | 'None' | 'NotSpecified' | 'RestOfTheWorldGroupOne' | 'RestOfTheWorldGroupTwo'
* **nextTrafficRegionScheduledTime**: string
* **subscriptionReregistrationResult**: 'ConditionalUpdate' | 'Failed' | 'ForcedUpdate' | 'NotApplicable'

## RolloutStatusBaseFailedOrSkippedRegions
### Properties
### Additional Properties
* **Additional Properties Type**: [ExtendedErrorInfo](#extendederrorinfo)

## NotificationRegistrationProperties
### Properties
* **includedEvents**: string[]
* **messageScope**: 'NotSpecified' | 'RegisteredSubscriptions'
* **notificationEndpoints**: [NotificationEndpoint](#notificationendpoint)[]
* **notificationMode**: 'EventHub' | 'NotSpecified' | 'WebHook'

## NotificationEndpoint
### Properties
* **locations**: string[]
* **notificationDestination**: string

## OperationsDefinition
### Properties
* **actionType**: 'Internal' | 'NotSpecified' (WriteOnly)
* **display**: [OperationsDefinitionDisplay](#operationsdefinitiondisplay) (Required, WriteOnly)
* **isDataAction**: bool (WriteOnly)
* **name**: string (Required, WriteOnly)
* **origin**: 'NotSpecified' | 'System' | 'User' (WriteOnly)
* **properties**: any (WriteOnly)

## OperationsDefinitionDisplay
### Properties
* **description**: string (Required, WriteOnly)
* **operation**: string (Required, WriteOnly)
* **provider**: string (Required, WriteOnly)
* **resource**: string (Required, WriteOnly)

## SkuResourceProperties
### Properties
* **skuSettings**: [SkuSetting](#skusetting)[] (ReadOnly)

## SkuSetting
### Properties
* **capabilities**: [SkuCapability](#skucapability)[] (WriteOnly)
* **capacity**: [SkuSettingCapacity](#skusettingcapacity) (WriteOnly)
* **costs**: [SkuCost](#skucost)[] (WriteOnly)
* **family**: string (WriteOnly)
* **kind**: string (WriteOnly)
* **locationInfo**: [SkuLocationInfo](#skulocationinfo)[] (WriteOnly)
* **locations**: string[] (WriteOnly)
* **name**: string (Required, WriteOnly)
* **requiredFeatures**: string[] (WriteOnly)
* **requiredQuotaIds**: string[] (WriteOnly)
* **size**: string (WriteOnly)
* **tier**: string (WriteOnly)

## SkuCapability
### Properties
* **name**: string (Required, WriteOnly)
* **value**: string (Required, WriteOnly)

## SkuSettingCapacity
### Properties
* **default**: int (WriteOnly)
* **maximum**: int (WriteOnly)
* **minimum**: int (Required, WriteOnly)
* **scaleType**: 'Automatic' | 'Manual' | 'None' (WriteOnly)

## SkuCost
### Properties
* **extendedUnit**: string (WriteOnly)
* **meterId**: string (Required, WriteOnly)
* **quantity**: int (WriteOnly)

## SkuLocationInfo
### Properties
* **extendedLocations**: string[] (WriteOnly)
* **location**: string (Required, WriteOnly)
* **type**: 'ArcZone' | 'EdgeZone' | 'NotSpecified' (WriteOnly)
* **zoneDetails**: [SkuZoneDetail](#skuzonedetail)[] (WriteOnly)
* **zones**: string[] (WriteOnly)

## SkuZoneDetail
### Properties
* **capabilities**: [SkuCapability](#skucapability)[] (WriteOnly)
* **name**: string[] (WriteOnly)

