# Microsoft.ProviderHub @ 2020-11-20

## Resource Microsoft.ProviderHub/providerRegistrations@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProviderRegistrationProperties (ReadOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/customRollouts@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CustomRolloutProperties (ReadOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/customRollouts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/defaultRollouts@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DefaultRolloutProperties (ReadOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/defaultRollouts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/notificationRegistrations@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NotificationRegistrationProperties (ReadOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/notificationRegistrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/operations@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/operations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ResourceTypeRegistrationProperties (ReadOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SkuResourceProperties (ReadOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SkuResourceProperties (ReadOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SkuResourceProperties (ReadOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/skus@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SkuResourceProperties (ReadOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant)

## ProviderRegistrationProperties
### Properties
* **capabilities**: ResourceProviderCapabilities[] (ReadOnly)
* **featuresRule**: ResourceProviderManifestPropertiesFeaturesRule (ReadOnly)
* **management**: ResourceProviderManifestPropertiesManagement (ReadOnly)
* **metadata**: any (ReadOnly)
* **namespace**: string (ReadOnly)
* **providerAuthentication**: ResourceProviderManifestPropertiesProviderAuthentication (ReadOnly)
* **providerAuthorizations**: ResourceProviderAuthorization[] (ReadOnly)
* **providerHubMetadata**: ProviderRegistrationPropertiesProviderHubMetadata (ReadOnly)
* **providerType**: 'AuthorizationFree' | 'External' | 'Hidden' | 'Internal' | 'LegacyRegistrationRequired' | 'NotSpecified' | 'RegistrationFree' | 'TenantOnly' (ReadOnly)
* **providerVersion**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure' (ReadOnly)
* **requestHeaderOptions**: ResourceProviderManifestPropertiesRequestHeaderOptions (ReadOnly)
* **requiredFeatures**: string[] (ReadOnly)
* **subscriptionLifecycleNotificationSpecifications**: ProviderRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications (ReadOnly)
* **templateDeploymentOptions**: ResourceProviderManifestPropertiesTemplateDeploymentOptions (ReadOnly)

## ResourceProviderCapabilities
### Properties
* **effect**: 'Allow' | 'Disallow' | 'NotSpecified' (ReadOnly)
* **quotaId**: string (ReadOnly)
* **requiredFeatures**: string[] (ReadOnly)

## ResourceProviderManifestPropertiesFeaturesRule
### Properties
* **requiredFeaturesPolicy**: 'All' | 'Any' (ReadOnly)

## ResourceProviderManifestPropertiesManagement
### Properties
* **incidentContactEmail**: string (ReadOnly)
* **incidentRoutingService**: string (ReadOnly)
* **incidentRoutingTeam**: string (ReadOnly)
* **manifestOwners**: string[] (ReadOnly)
* **resourceAccessPolicy**: 'AcisActionAllowed' | 'AcisReadAllowed' | 'NotSpecified' (ReadOnly)
* **resourceAccessRoles**: any[] (ReadOnly)
* **schemaOwners**: string[] (ReadOnly)
* **serviceTreeInfos**: ServiceTreeInfo[] (ReadOnly)

## ServiceTreeInfo
### Properties
* **componentId**: string (ReadOnly)
* **serviceId**: string (ReadOnly)

## ResourceProviderManifestPropertiesProviderAuthentication
### Properties
* **allowedAudiences**: string[] (ReadOnly)

## ResourceProviderAuthorization
### Properties
* **applicationId**: string (ReadOnly)
* **managedByRoleDefinitionId**: string (ReadOnly)
* **roleDefinitionId**: string (ReadOnly)

## ProviderRegistrationPropertiesProviderHubMetadata
### Properties
* **providerAuthentication**: ProviderHubMetadataProviderAuthentication (ReadOnly)
* **providerAuthorizations**: ResourceProviderAuthorization[] (ReadOnly)
* **thirdPartyProviderAuthorization**: ProviderHubMetadataThirdPartyProviderAuthorization (ReadOnly)

## ProviderHubMetadataProviderAuthentication
### Properties
* **allowedAudiences**: string[] (ReadOnly)

## ProviderHubMetadataThirdPartyProviderAuthorization
### Properties
* **authorizations**: LightHouseAuthorization[] (ReadOnly)
* **managedByTenantId**: string (ReadOnly)

## LightHouseAuthorization
### Properties
* **principalId**: string (ReadOnly)
* **roleDefinitionId**: string (ReadOnly)

## ResourceProviderManifestPropertiesRequestHeaderOptions
### Properties
* **optInHeaders**: 'ClientGroupMembership' | 'NotSpecified' | 'SignedAuxiliaryTokens' | 'SignedUserToken' | 'UnboundedClientGroupMembership' (ReadOnly)

## ProviderRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications
### Properties
* **softDeleteTTL**: string (ReadOnly)
* **subscriptionStateOverrideActions**: SubscriptionStateOverrideAction[] (ReadOnly)

## SubscriptionStateOverrideAction
### Properties
* **action**: 'BillingCancellation' | 'DeleteAllResources' | 'NoOp' | 'NotDefined' | 'SoftDeleteAllResources' | 'UndoSoftDelete' (ReadOnly)
* **state**: 'Deleted' | 'Registered' | 'Suspended' | 'SuspendedToDeleted' | 'SuspendedToRegistered' | 'SuspendedToUnregistered' | 'SuspendedToWarned' | 'Unregistered' | 'Warned' | 'WarnedToDeleted' | 'WarnedToRegistered' | 'WarnedToSuspended' | 'WarnedToUnregistered' (ReadOnly)

## ResourceProviderManifestPropertiesTemplateDeploymentOptions
### Properties
* **preflightOptions**: 'ContinueDeploymentOnFailure' | 'DefaultValidationOnly' | 'None'[] (ReadOnly)
* **preflightSupported**: bool (ReadOnly)

## CustomRolloutProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure' (ReadOnly)
* **specification**: CustomRolloutPropertiesSpecification (ReadOnly)
* **status**: CustomRolloutPropertiesStatus (ReadOnly)

## CustomRolloutPropertiesSpecification
### Properties
* **canary**: CustomRolloutSpecificationCanary (ReadOnly)
* **providerRegistration**: CustomRolloutSpecificationProviderRegistration (ReadOnly)
* **resourceTypeRegistrations**: ResourceTypeRegistration[] (ReadOnly)

## CustomRolloutSpecificationCanary
### Properties
* **regions**: string[] (ReadOnly)

## CustomRolloutSpecificationProviderRegistration
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: ProviderRegistrationProperties (ReadOnly)
* **type**: string (ReadOnly)

## ResourceTypeRegistration
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: ResourceTypeRegistrationProperties (ReadOnly)
* **type**: string (ReadOnly)

## ResourceTypeRegistrationProperties
### Properties
* **allowedUnauthorizedActions**: string[] (ReadOnly)
* **authorizationActionMappings**: AuthorizationActionMapping[] (ReadOnly)
* **checkNameAvailabilitySpecifications**: ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecifications (ReadOnly)
* **defaultApiVersion**: string (ReadOnly)
* **disallowedActionVerbs**: string[] (ReadOnly)
* **enableAsyncOperation**: bool (ReadOnly)
* **enableThirdPartyS2S**: bool (ReadOnly)
* **endpoints**: ResourceTypeEndpoint[] (ReadOnly)
* **extendedLocations**: ExtendedLocationOptions[] (ReadOnly)
* **extensionOptions**: ResourceTypeRegistrationPropertiesExtensionOptions (ReadOnly)
* **featuresRule**: ResourceTypeRegistrationPropertiesFeaturesRule (ReadOnly)
* **identityManagement**: ResourceTypeRegistrationPropertiesIdentityManagement (ReadOnly)
* **isPureProxy**: bool (ReadOnly)
* **linkedAccessChecks**: LinkedAccessCheck[] (ReadOnly)
* **loggingRules**: LoggingRule[] (ReadOnly)
* **marketplaceType**: 'AddOn' | 'Bypass' | 'NotSpecified' | 'Store' (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure' (ReadOnly)
* **regionality**: 'Global' | 'NotSpecified' | 'Regional' (ReadOnly)
* **requestHeaderOptions**: ResourceTypeRegistrationPropertiesRequestHeaderOptions (ReadOnly)
* **requiredFeatures**: string[] (ReadOnly)
* **resourceDeletionPolicy**: 'CascadeDeleteAll' | 'CascadeDeleteProxyOnlyChildren' | 'NotSpecified' (ReadOnly)
* **resourceMovePolicy**: ResourceTypeRegistrationPropertiesResourceMovePolicy (ReadOnly)
* **routingType**: 'CascadeExtension' | 'Default' | 'Extension' | 'Failover' | 'Fanout' | 'HostBased' | 'LocationBased' | 'ProxyOnly' | 'Tenant' (ReadOnly)
* **serviceTreeInfos**: ServiceTreeInfo[] (ReadOnly)
* **subscriptionLifecycleNotificationSpecifications**: ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications (ReadOnly)
* **subscriptionStateRules**: SubscriptionStateRule[] (ReadOnly)
* **swaggerSpecifications**: SwaggerSpecification[] (ReadOnly)
* **templateDeploymentOptions**: ResourceTypeRegistrationPropertiesTemplateDeploymentOptions (ReadOnly)
* **throttlingRules**: ThrottlingRule[] (ReadOnly)

## AuthorizationActionMapping
### Properties
* **desired**: string (ReadOnly)
* **original**: string (ReadOnly)

## ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecifications
### Properties
* **enableDefaultValidation**: bool (ReadOnly)
* **resourceTypesWithCustomValidation**: string[] (ReadOnly)

## ResourceTypeEndpoint
### Properties
* **apiVersions**: string[] (ReadOnly)
* **enabled**: bool (ReadOnly)
* **extensions**: ResourceTypeExtension[] (ReadOnly)
* **featuresRule**: ResourceTypeEndpointFeaturesRule (ReadOnly)
* **locations**: string[] (ReadOnly)
* **requiredFeatures**: string[] (ReadOnly)
* **timeout**: string (ReadOnly)

## ResourceTypeExtension
### Properties
* **endpointUri**: string (ReadOnly)
* **extensionCategories**: 'NotSpecified' | 'ResourceCreationBegin' | 'ResourceCreationCompleted' | 'ResourceCreationValidate' | 'ResourceDeletionBegin' | 'ResourceDeletionCompleted' | 'ResourceDeletionValidate' | 'ResourceMoveBegin' | 'ResourceMoveCompleted' | 'ResourcePatchBegin' | 'ResourcePatchCompleted' | 'ResourcePatchValidate' | 'ResourcePostAction' | 'ResourceReadBegin' | 'ResourceReadValidate' | 'SubscriptionLifecycleNotification'[] (ReadOnly)
* **timeout**: string (ReadOnly)

## ResourceTypeEndpointFeaturesRule
### Properties
* **requiredFeaturesPolicy**: 'All' | 'Any' (ReadOnly)

## ExtendedLocationOptions
### Properties
* **supportedPolicy**: string (ReadOnly)
* **type**: string (ReadOnly)

## ResourceTypeRegistrationPropertiesExtensionOptions
### Properties
* **resourceCreationBegin**: ResourceTypeExtensionOptionsResourceCreationBegin (ReadOnly)

## ResourceTypeExtensionOptionsResourceCreationBegin
### Properties
* **request**: 'DoNotMergeExistingReadOnlyAndSecretProperties' | 'IncludeInternalMetadata' | 'NotSpecified'[] (ReadOnly)
* **response**: 'DoNotMergeExistingReadOnlyAndSecretProperties' | 'IncludeInternalMetadata' | 'NotSpecified'[] (ReadOnly)

## ResourceTypeRegistrationPropertiesFeaturesRule
### Properties
* **requiredFeaturesPolicy**: 'All' | 'Any' (ReadOnly)

## ResourceTypeRegistrationPropertiesIdentityManagement
### Properties
* **applicationId**: string (ReadOnly)
* **type**: 'Actor' | 'DelegatedResourceIdentity' | 'NotSpecified' | 'SystemAssigned' | 'UserAssigned' (ReadOnly)

## LinkedAccessCheck
### Properties
* **actionName**: string (ReadOnly)
* **linkedAction**: string (ReadOnly)
* **linkedActionVerb**: string (ReadOnly)
* **linkedProperty**: string (ReadOnly)
* **linkedType**: string (ReadOnly)

## LoggingRule
### Properties
* **action**: string (ReadOnly)
* **detailLevel**: 'Body' | 'None' (ReadOnly)
* **direction**: 'None' | 'Request' | 'Response' (ReadOnly)
* **hiddenPropertyPaths**: LoggingRuleHiddenPropertyPaths (ReadOnly)

## LoggingRuleHiddenPropertyPaths
### Properties
* **hiddenPathsOnRequest**: string[] (ReadOnly)
* **hiddenPathsOnResponse**: string[] (ReadOnly)

## ResourceTypeRegistrationPropertiesRequestHeaderOptions
### Properties
* **optInHeaders**: 'ClientGroupMembership' | 'NotSpecified' | 'SignedAuxiliaryTokens' | 'SignedUserToken' | 'UnboundedClientGroupMembership' (ReadOnly)

## ResourceTypeRegistrationPropertiesResourceMovePolicy
### Properties
* **crossResourceGroupMoveEnabled**: bool (ReadOnly)
* **crossSubscriptionMoveEnabled**: bool (ReadOnly)
* **validationRequired**: bool (ReadOnly)

## ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications
### Properties
* **softDeleteTTL**: string (ReadOnly)
* **subscriptionStateOverrideActions**: SubscriptionStateOverrideAction[] (ReadOnly)

## SubscriptionStateRule
### Properties
* **allowedActions**: string[] (ReadOnly)
* **state**: 'Deleted' | 'Disabled' | 'Enabled' | 'NotDefined' | 'PastDue' | 'Warned' (ReadOnly)

## SwaggerSpecification
### Properties
* **apiVersions**: string[] (ReadOnly)
* **swaggerSpecFolderUri**: string (ReadOnly)

## ResourceTypeRegistrationPropertiesTemplateDeploymentOptions
### Properties
* **preflightOptions**: 'ContinueDeploymentOnFailure' | 'DefaultValidationOnly' | 'None'[] (ReadOnly)
* **preflightSupported**: bool (ReadOnly)

## ThrottlingRule
### Properties
* **action**: string (ReadOnly)
* **metrics**: ThrottlingMetric[] (ReadOnly)
* **requiredFeatures**: string[] (ReadOnly)

## ThrottlingMetric
### Properties
* **interval**: string (ReadOnly)
* **limit**: int (ReadOnly)
* **type**: 'NotSpecified' | 'NumberOfRequests' | 'NumberOfResources' (ReadOnly)

## CustomRolloutPropertiesStatus
### Properties
* **completedRegions**: string[] (ReadOnly)
* **failedOrSkippedRegions**: CustomRolloutStatusFailedOrSkippedRegions (ReadOnly)

## CustomRolloutStatusFailedOrSkippedRegions
### Properties
### Additional Properties
* **Additional Properties Type**: ExtendedErrorInfo

## ExtendedErrorInfo
### Properties
* **additionalInfo**: TypedErrorInfo[] (ReadOnly)
* **code**: string (ReadOnly)
* **details**: ExtendedErrorInfo[] (ReadOnly)
* **message**: string (ReadOnly)
* **target**: string (ReadOnly)

## TypedErrorInfo
### Properties
* **info**: any (ReadOnly)
* **type**: string (ReadOnly)

## DefaultRolloutProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure' (ReadOnly)
* **specification**: DefaultRolloutPropertiesSpecification (ReadOnly)
* **status**: DefaultRolloutPropertiesStatus (ReadOnly)

## DefaultRolloutPropertiesSpecification
### Properties
* **canary**: DefaultRolloutSpecificationCanary (ReadOnly)
* **highTraffic**: DefaultRolloutSpecificationHighTraffic (ReadOnly)
* **lowTraffic**: DefaultRolloutSpecificationLowTraffic (ReadOnly)
* **mediumTraffic**: DefaultRolloutSpecificationMediumTraffic (ReadOnly)
* **providerRegistration**: DefaultRolloutSpecificationProviderRegistration (ReadOnly)
* **resourceTypeRegistrations**: ResourceTypeRegistration[] (ReadOnly)
* **restOfTheWorldGroupOne**: DefaultRolloutSpecificationRestOfTheWorldGroupOne (ReadOnly)
* **restOfTheWorldGroupTwo**: DefaultRolloutSpecificationRestOfTheWorldGroupTwo (ReadOnly)

## DefaultRolloutSpecificationCanary
### Properties
* **regions**: string[] (ReadOnly)
* **skipRegions**: string[] (ReadOnly)

## DefaultRolloutSpecificationHighTraffic
### Properties
* **regions**: string[] (ReadOnly)
* **waitDuration**: string (ReadOnly)

## DefaultRolloutSpecificationLowTraffic
### Properties
* **regions**: string[] (ReadOnly)
* **waitDuration**: string (ReadOnly)

## DefaultRolloutSpecificationMediumTraffic
### Properties
* **regions**: string[] (ReadOnly)
* **waitDuration**: string (ReadOnly)

## DefaultRolloutSpecificationProviderRegistration
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: ProviderRegistrationProperties (ReadOnly)
* **type**: string (ReadOnly)

## DefaultRolloutSpecificationRestOfTheWorldGroupOne
### Properties
* **regions**: string[] (ReadOnly)
* **waitDuration**: string (ReadOnly)

## DefaultRolloutSpecificationRestOfTheWorldGroupTwo
### Properties
* **regions**: string[] (ReadOnly)
* **waitDuration**: string (ReadOnly)

## DefaultRolloutPropertiesStatus
### Properties
* **completedRegions**: string[] (ReadOnly)
* **failedOrSkippedRegions**: RolloutStatusBaseFailedOrSkippedRegions (ReadOnly)
* **nextTrafficRegion**: 'Canary' | 'HighTraffic' | 'LowTraffic' | 'MediumTraffic' | 'None' | 'NotSpecified' | 'RestOfTheWorldGroupOne' | 'RestOfTheWorldGroupTwo' (ReadOnly)
* **nextTrafficRegionScheduledTime**: string (ReadOnly)
* **subscriptionReregistrationResult**: 'ConditionalUpdate' | 'Failed' | 'ForcedUpdate' | 'NotApplicable' (ReadOnly)

## RolloutStatusBaseFailedOrSkippedRegions
### Properties
### Additional Properties
* **Additional Properties Type**: ExtendedErrorInfo

## NotificationRegistrationProperties
### Properties
* **includedEvents**: string[] (ReadOnly)
* **messageScope**: 'NotSpecified' | 'RegisteredSubscriptions' (ReadOnly)
* **notificationEndpoints**: NotificationEndpoint[] (ReadOnly)
* **notificationMode**: 'EventHub' | 'NotSpecified' | 'WebHook' (ReadOnly)

## NotificationEndpoint
### Properties
* **locations**: string[] (ReadOnly)
* **notificationDestination**: string (ReadOnly)

## SkuResourceProperties
### Properties
* **skuSettings**: SkuSetting[] (ReadOnly)

## SkuSetting
### Properties
* **capabilities**: SkuCapability[] (ReadOnly)
* **capacity**: SkuSettingCapacity (ReadOnly)
* **costs**: SkuCost[] (ReadOnly)
* **family**: string (ReadOnly)
* **kind**: string (ReadOnly)
* **locationInfo**: SkuLocationInfo[] (ReadOnly)
* **locations**: string[] (ReadOnly)
* **name**: string (ReadOnly)
* **requiredFeatures**: string[] (ReadOnly)
* **requiredQuotaIds**: string[] (ReadOnly)
* **size**: string (ReadOnly)
* **tier**: string (ReadOnly)

## SkuCapability
### Properties
* **name**: string (ReadOnly)
* **value**: string (ReadOnly)

## SkuSettingCapacity
### Properties
* **default**: int (ReadOnly)
* **maximum**: int (ReadOnly)
* **minimum**: int (ReadOnly)
* **scaleType**: 'Automatic' | 'Manual' | 'None' (ReadOnly)

## SkuCost
### Properties
* **extendedUnit**: string (ReadOnly)
* **meterId**: string (ReadOnly)
* **quantity**: int (ReadOnly)

## SkuLocationInfo
### Properties
* **extendedLocations**: string[] (ReadOnly)
* **location**: string (ReadOnly)
* **type**: 'ArcZone' | 'EdgeZone' | 'NotSpecified' (ReadOnly)
* **zoneDetails**: SkuZoneDetail[] (ReadOnly)
* **zones**: string[] (ReadOnly)

## SkuZoneDetail
### Properties
* **capabilities**: SkuCapability[] (ReadOnly)
* **name**: string[] (ReadOnly)

