# Microsoft.ProviderHub @ 2020-11-20

## Resource Microsoft.ProviderHub/providerRegistrations@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ProviderRegistrationProperties
* **type**: 'Microsoft.ProviderHub/providerRegistrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/customRollouts@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CustomRolloutProperties (Required)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/customRollouts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/defaultRollouts@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DefaultRolloutProperties
* **type**: 'Microsoft.ProviderHub/providerRegistrations/defaultRollouts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/notificationRegistrations@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NotificationRegistrationProperties
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
* **properties**: ResourceTypeRegistrationProperties
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/skus@2020-11-20
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-11-20' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant)

## ProviderRegistrationProperties
### Properties
* **capabilities**: ResourceProviderCapabilities[]
* **featuresRule**: ResourceProviderManifestPropertiesFeaturesRule
* **management**: ResourceProviderManifestPropertiesManagement
* **namespace**: string
* **providerAuthentication**: ResourceProviderManifestPropertiesProviderAuthentication
* **providerAuthorizations**: ResourceProviderAuthorization[]
* **providerHubMetadata**: ProviderRegistrationPropertiesProviderHubMetadata
* **providerType**: 'AuthorizationFree' | 'External' | 'Hidden' | 'Internal' | 'LegacyRegistrationRequired' | 'NotSpecified' | 'RegistrationFree' | 'TenantOnly'
* **providerVersion**: string
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure'
* **requestHeaderOptions**: ResourceProviderManifestPropertiesRequestHeaderOptions
* **requiredFeatures**: string[]
* **subscriptionLifecycleNotificationSpecifications**: ProviderRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications
* **templateDeploymentOptions**: ResourceProviderManifestPropertiesTemplateDeploymentOptions

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
* **resourceAccessRoles**: array
* **schemaOwners**: string[]
* **serviceTreeInfos**: ServiceTreeInfo[]

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
* **providerAuthentication**: ProviderHubMetadataProviderAuthentication
* **providerAuthorizations**: ResourceProviderAuthorization[]
* **thirdPartyProviderAuthorization**: ProviderHubMetadataThirdPartyProviderAuthorization

## ProviderHubMetadataProviderAuthentication
### Properties
* **allowedAudiences**: string[] (Required)

## ProviderHubMetadataThirdPartyProviderAuthorization
### Properties
* **authorizations**: LightHouseAuthorization[]
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
* **softDeleteTTL**: any
* **subscriptionStateOverrideActions**: SubscriptionStateOverrideAction[]

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
* **specification**: CustomRolloutPropertiesSpecification (Required)
* **status**: CustomRolloutPropertiesStatus

## CustomRolloutPropertiesSpecification
### Properties
* **canary**: CustomRolloutSpecificationCanary (Required)
* **providerRegistration**: CustomRolloutSpecificationProviderRegistration
* **resourceTypeRegistrations**: ResourceTypeRegistration[]

## CustomRolloutSpecificationCanary
### Properties
* **regions**: string[]

## CustomRolloutSpecificationProviderRegistration
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: ProviderRegistrationProperties
* **type**: string (ReadOnly)

## ResourceTypeRegistration
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: ResourceTypeRegistrationProperties
* **type**: string (ReadOnly)

## ResourceTypeRegistrationProperties
### Properties
* **allowedUnauthorizedActions**: string[]
* **authorizationActionMappings**: AuthorizationActionMapping[]
* **checkNameAvailabilitySpecifications**: ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecifications
* **defaultApiVersion**: string
* **disallowedActionVerbs**: string[]
* **enableAsyncOperation**: bool
* **enableThirdPartyS2S**: bool
* **endpoints**: ResourceTypeEndpoint[]
* **extendedLocations**: ExtendedLocationOptions[]
* **extensionOptions**: ResourceTypeRegistrationPropertiesExtensionOptions
* **featuresRule**: ResourceTypeRegistrationPropertiesFeaturesRule
* **identityManagement**: ResourceTypeRegistrationPropertiesIdentityManagement
* **isPureProxy**: bool
* **linkedAccessChecks**: LinkedAccessCheck[]
* **loggingRules**: LoggingRule[]
* **marketplaceType**: 'AddOn' | 'Bypass' | 'NotSpecified' | 'Store'
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure'
* **regionality**: 'Global' | 'NotSpecified' | 'Regional'
* **requestHeaderOptions**: ResourceTypeRegistrationPropertiesRequestHeaderOptions
* **requiredFeatures**: string[]
* **resourceDeletionPolicy**: 'CascadeDeleteAll' | 'CascadeDeleteProxyOnlyChildren' | 'NotSpecified'
* **resourceMovePolicy**: ResourceTypeRegistrationPropertiesResourceMovePolicy
* **routingType**: 'CascadeExtension' | 'Default' | 'Extension' | 'Failover' | 'Fanout' | 'HostBased' | 'LocationBased' | 'ProxyOnly' | 'Tenant'
* **serviceTreeInfos**: ServiceTreeInfo[]
* **subscriptionLifecycleNotificationSpecifications**: ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications
* **subscriptionStateRules**: SubscriptionStateRule[]
* **swaggerSpecifications**: SwaggerSpecification[]
* **templateDeploymentOptions**: ResourceTypeRegistrationPropertiesTemplateDeploymentOptions
* **throttlingRules**: ThrottlingRule[]

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
* **extensions**: ResourceTypeExtension[]
* **featuresRule**: ResourceTypeEndpointFeaturesRule
* **locations**: string[]
* **requiredFeatures**: string[]
* **timeout**: any

## ResourceTypeExtension
### Properties
* **endpointUri**: string
* **extensionCategories**: 'NotSpecified' | 'ResourceCreationBegin' | 'ResourceCreationCompleted' | 'ResourceCreationValidate' | 'ResourceDeletionBegin' | 'ResourceDeletionCompleted' | 'ResourceDeletionValidate' | 'ResourceMoveBegin' | 'ResourceMoveCompleted' | 'ResourcePatchBegin' | 'ResourcePatchCompleted' | 'ResourcePatchValidate' | 'ResourcePostAction' | 'ResourceReadBegin' | 'ResourceReadValidate' | 'SubscriptionLifecycleNotification'[]
* **timeout**: any

## ResourceTypeEndpointFeaturesRule
### Properties
* **requiredFeaturesPolicy**: 'All' | 'Any' (Required)

## ExtendedLocationOptions
### Properties
* **supportedPolicy**: string
* **type**: string

## ResourceTypeRegistrationPropertiesExtensionOptions
### Properties
* **resourceCreationBegin**: ResourceTypeExtensionOptionsResourceCreationBegin

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
* **hiddenPropertyPaths**: LoggingRuleHiddenPropertyPaths

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
* **softDeleteTTL**: any
* **subscriptionStateOverrideActions**: SubscriptionStateOverrideAction[]

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
* **metrics**: ThrottlingMetric[] (Required)
* **requiredFeatures**: string[]

## ThrottlingMetric
### Properties
* **interval**: any
* **limit**: int (Required)
* **type**: 'NotSpecified' | 'NumberOfRequests' | 'NumberOfResources' (Required)

## CustomRolloutPropertiesStatus
### Properties
* **completedRegions**: string[]
* **failedOrSkippedRegions**: CustomRolloutStatusFailedOrSkippedRegions

## CustomRolloutStatusFailedOrSkippedRegions
### Properties
### Additional Properties
* **Additional Properties Type**: ExtendedErrorInfo

## ExtendedErrorInfo
### Properties
* **additionalInfo**: TypedErrorInfo[]
* **code**: string
* **details**: ExtendedErrorInfo[]
* **message**: string
* **target**: string

## TypedErrorInfo
### Properties
* **type**: string (Required)

## DefaultRolloutProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure'
* **specification**: DefaultRolloutPropertiesSpecification
* **status**: DefaultRolloutPropertiesStatus

## DefaultRolloutPropertiesSpecification
### Properties
* **canary**: DefaultRolloutSpecificationCanary
* **highTraffic**: DefaultRolloutSpecificationHighTraffic
* **lowTraffic**: DefaultRolloutSpecificationLowTraffic
* **mediumTraffic**: DefaultRolloutSpecificationMediumTraffic
* **providerRegistration**: DefaultRolloutSpecificationProviderRegistration
* **resourceTypeRegistrations**: ResourceTypeRegistration[]
* **restOfTheWorldGroupOne**: DefaultRolloutSpecificationRestOfTheWorldGroupOne
* **restOfTheWorldGroupTwo**: DefaultRolloutSpecificationRestOfTheWorldGroupTwo

## DefaultRolloutSpecificationCanary
### Properties
* **regions**: string[]
* **skipRegions**: string[]

## DefaultRolloutSpecificationHighTraffic
### Properties
* **regions**: string[]
* **waitDuration**: any

## DefaultRolloutSpecificationLowTraffic
### Properties
* **regions**: string[]
* **waitDuration**: any

## DefaultRolloutSpecificationMediumTraffic
### Properties
* **regions**: string[]
* **waitDuration**: any

## DefaultRolloutSpecificationProviderRegistration
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: ProviderRegistrationProperties
* **type**: string (ReadOnly)

## DefaultRolloutSpecificationRestOfTheWorldGroupOne
### Properties
* **regions**: string[]
* **waitDuration**: any

## DefaultRolloutSpecificationRestOfTheWorldGroupTwo
### Properties
* **regions**: string[]
* **waitDuration**: any

## DefaultRolloutPropertiesStatus
### Properties
* **completedRegions**: string[]
* **failedOrSkippedRegions**: RolloutStatusBaseFailedOrSkippedRegions
* **nextTrafficRegion**: 'Canary' | 'HighTraffic' | 'LowTraffic' | 'MediumTraffic' | 'None' | 'NotSpecified' | 'RestOfTheWorldGroupOne' | 'RestOfTheWorldGroupTwo'
* **nextTrafficRegionScheduledTime**: string
* **subscriptionReregistrationResult**: 'ConditionalUpdate' | 'Failed' | 'ForcedUpdate' | 'NotApplicable'

## RolloutStatusBaseFailedOrSkippedRegions
### Properties
### Additional Properties
* **Additional Properties Type**: ExtendedErrorInfo

## NotificationRegistrationProperties
### Properties
* **includedEvents**: string[]
* **messageScope**: 'NotSpecified' | 'RegisteredSubscriptions'
* **notificationEndpoints**: NotificationEndpoint[]
* **notificationMode**: 'EventHub' | 'NotSpecified' | 'WebHook'

## NotificationEndpoint
### Properties
* **locations**: string[]
* **notificationDestination**: string

