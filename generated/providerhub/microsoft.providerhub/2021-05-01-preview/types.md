# Microsoft.ProviderHub @ 2021-05-01-preview

## Resource Microsoft.ProviderHub/providerRegistrations@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProviderRegistrationProperties](#providerregistrationproperties)
* **type**: 'Microsoft.ProviderHub/providerRegistrations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/customRollouts@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomRolloutProperties](#customrolloutproperties) (Required): Properties of the rollout.
* **type**: 'Microsoft.ProviderHub/providerRegistrations/customRollouts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/defaultRollouts@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DefaultRolloutProperties](#defaultrolloutproperties): Properties of the rollout.
* **type**: 'Microsoft.ProviderHub/providerRegistrations/defaultRollouts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/notificationRegistrations@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NotificationRegistrationProperties](#notificationregistrationproperties)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/notificationRegistrations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/operations@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **contents**: [OperationsDefinition](#operationsdefinition)[] (Required, WriteOnly): Array of OperationsDefinition
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [OperationsDefinition](#operationsdefinition) (ReadOnly)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/operations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceTypeRegistrationProperties](#resourcetyperegistrationproperties)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SkuResourceProperties](#skuresourceproperties)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SkuResourceProperties](#skuresourceproperties)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SkuResourceProperties](#skuresourceproperties)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/skus@2021-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SkuResourceProperties](#skuresourceproperties)
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant): The resource type

## ProviderRegistrationProperties
### Properties
* **capabilities**: [ResourceProviderCapabilities](#resourceprovidercapabilities)[]: Array of ResourceProviderCapabilities
* **featuresRule**: [ResourceProviderManifestPropertiesFeaturesRule](#resourceprovidermanifestpropertiesfeaturesrule)
* **management**: [ResourceProviderManifestPropertiesManagement](#resourceprovidermanifestpropertiesmanagement)
* **metadata**: any: Anything
* **namespace**: string
* **providerAuthentication**: [ResourceProviderManifestPropertiesProviderAuthentication](#resourceprovidermanifestpropertiesproviderauthentication)
* **providerAuthorizations**: [ResourceProviderAuthorization](#resourceproviderauthorization)[]: Array of ResourceProviderAuthorization
* **providerHubMetadata**: [ProviderRegistrationPropertiesProviderHubMetadata](#providerregistrationpropertiesproviderhubmetadata)
* **providerType**: 'AuthorizationFree' | 'External' | 'Hidden' | 'Internal' | 'LegacyRegistrationRequired' | 'NotSpecified' | 'RegistrationFree' | 'TenantOnly'
* **providerVersion**: string
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure'
* **requestHeaderOptions**: [ResourceProviderManifestPropertiesRequestHeaderOptions](#resourceprovidermanifestpropertiesrequestheaderoptions)
* **requiredFeatures**: string[]: Array of ResourceProviderManifestPropertiesRequiredFeaturesItem

## ResourceProviderCapabilities
### Properties
* **effect**: 'Allow' | 'Disallow' | 'NotSpecified' (Required)
* **quotaId**: string (Required)
* **requiredFeatures**: string[]: Array of ResourceProviderCapabilitiesRequiredFeaturesItem

## ResourceProviderManifestPropertiesFeaturesRule
### Properties
* **requiredFeaturesPolicy**: 'All' | 'Any' (Required)

## ResourceProviderManifestPropertiesManagement
### Properties
* **incidentContactEmail**: string
* **incidentRoutingService**: string
* **incidentRoutingTeam**: string
* **manifestOwners**: string[]: Array of ResourceProviderManagementManifestOwnersItem
* **resourceAccessPolicy**: 'AcisActionAllowed' | 'AcisReadAllowed' | 'NotSpecified'
* **resourceAccessRoles**: any[]: Array of any
* **schemaOwners**: string[]: Array of ResourceProviderManagementSchemaOwnersItem
* **serviceTreeInfos**: [ServiceTreeInfo](#servicetreeinfo)[]: Array of ServiceTreeInfo

## ServiceTreeInfo
### Properties
* **componentId**: string
* **serviceId**: string

## ResourceProviderManifestPropertiesProviderAuthentication
### Properties
* **allowedAudiences**: string[] (Required): Array of ResourceProviderAuthenticationAllowedAudiencesItem

## ResourceProviderAuthorization
### Properties
* **applicationId**: string
* **managedByRoleDefinitionId**: string
* **roleDefinitionId**: string

## ProviderRegistrationPropertiesProviderHubMetadata
### Properties
* **providerAuthentication**: [ProviderHubMetadataProviderAuthentication](#providerhubmetadataproviderauthentication)
* **providerAuthorizations**: [ResourceProviderAuthorization](#resourceproviderauthorization)[]: Array of ResourceProviderAuthorization
* **thirdPartyProviderAuthorization**: [ProviderHubMetadataThirdPartyProviderAuthorization](#providerhubmetadatathirdpartyproviderauthorization)

## ProviderHubMetadataProviderAuthentication
### Properties
* **allowedAudiences**: string[] (Required): Array of ResourceProviderAuthenticationAllowedAudiencesItem

## ProviderHubMetadataThirdPartyProviderAuthorization
### Properties
* **authorizations**: [LightHouseAuthorization](#lighthouseauthorization)[]: Array of LightHouseAuthorization
* **managedByTenantId**: string

## LightHouseAuthorization
### Properties
* **principalId**: string (Required)
* **roleDefinitionId**: string (Required)

## ResourceProviderManifestPropertiesRequestHeaderOptions
### Properties
* **optInHeaders**: 'ClientGroupMembership' | 'NotSpecified' | 'SignedAuxiliaryTokens' | 'SignedUserToken' | 'UnboundedClientGroupMembership'

## CustomRolloutProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure'
* **specification**: [CustomRolloutPropertiesSpecification](#customrolloutpropertiesspecification) (Required)
* **status**: [CustomRolloutPropertiesStatus](#customrolloutpropertiesstatus)

## CustomRolloutPropertiesSpecification
### Properties
* **canary**: [CustomRolloutSpecificationCanary](#customrolloutspecificationcanary) (Required)
* **providerRegistration**: [CustomRolloutSpecificationProviderRegistration](#customrolloutspecificationproviderregistration)
* **resourceTypeRegistrations**: [ResourceTypeRegistration](#resourcetyperegistration)[]: Array of ResourceTypeRegistration

## CustomRolloutSpecificationCanary
### Properties
* **regions**: string[]: Array of TrafficRegionsItem

## CustomRolloutSpecificationProviderRegistration
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ProviderRegistrationProperties](#providerregistrationproperties)
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## ResourceTypeRegistration
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ResourceTypeRegistrationProperties](#resourcetyperegistrationproperties)
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## ResourceTypeRegistrationProperties
### Properties
* **allowedUnauthorizedActions**: string[]: Array of ResourceTypeRegistrationPropertiesAllowedUnauthorizedActionsItem
* **authorizationActionMappings**: [AuthorizationActionMapping](#authorizationactionmapping)[]: Array of AuthorizationActionMapping
* **checkNameAvailabilitySpecifications**: [ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecifications](#resourcetyperegistrationpropertieschecknameavailabilityspecifications)
* **defaultApiVersion**: string
* **disallowedActionVerbs**: string[]: Array of ResourceTypeRegistrationPropertiesDisallowedActionVerbsItem
* **enableAsyncOperation**: bool
* **enableThirdPartyS2S**: bool
* **endpoints**: [ResourceTypeEndpoint](#resourcetypeendpoint)[]: Array of ResourceTypeEndpoint
* **extendedLocations**: [ExtendedLocationOptions](#extendedlocationoptions)[]: Array of ExtendedLocationOptions
* **extensionOptions**: [ResourceTypeRegistrationPropertiesExtensionOptions](#resourcetyperegistrationpropertiesextensionoptions)
* **featuresRule**: [ResourceTypeRegistrationPropertiesFeaturesRule](#resourcetyperegistrationpropertiesfeaturesrule)
* **identityManagement**: [ResourceTypeRegistrationPropertiesIdentityManagement](#resourcetyperegistrationpropertiesidentitymanagement)
* **isPureProxy**: bool
* **linkedAccessChecks**: [LinkedAccessCheck](#linkedaccesscheck)[]: Array of LinkedAccessCheck
* **loggingRules**: [LoggingRule](#loggingrule)[]: Array of LoggingRule
* **management**: [ResourceTypeRegistrationPropertiesManagement](#resourcetyperegistrationpropertiesmanagement)
* **marketplaceType**: 'AddOn' | 'Bypass' | 'NotSpecified' | 'Store'
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure'
* **regionality**: 'Global' | 'NotSpecified' | 'Regional'
* **requestHeaderOptions**: [ResourceTypeRegistrationPropertiesRequestHeaderOptions](#resourcetyperegistrationpropertiesrequestheaderoptions)
* **requiredFeatures**: string[]: Array of ResourceTypeRegistrationPropertiesRequiredFeaturesItem
* **resourceConcurrencyControlOptions**: [ResourceTypeRegistrationPropertiesResourceConcurrencyControlOptions](#resourcetyperegistrationpropertiesresourceconcurrencycontroloptions): Dictionary of <ResourceConcurrencyControlOption>
* **resourceDeletionPolicy**: 'CascadeDeleteAll' | 'CascadeDeleteProxyOnlyChildren' | 'NotSpecified'
* **resourceGraphConfiguration**: [ResourceTypeRegistrationPropertiesResourceGraphConfiguration](#resourcetyperegistrationpropertiesresourcegraphconfiguration)
* **resourceMovePolicy**: [ResourceTypeRegistrationPropertiesResourceMovePolicy](#resourcetyperegistrationpropertiesresourcemovepolicy)
* **routingType**: 'CascadeExtension' | 'Default' | 'Extension' | 'Failover' | 'Fanout' | 'HostBased' | 'LocationBased' | 'ProxyOnly' | 'Tenant'
* **serviceTreeInfos**: [ServiceTreeInfo](#servicetreeinfo)[]: Array of ServiceTreeInfo
* **subscriptionLifecycleNotificationSpecifications**: [ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications](#resourcetyperegistrationpropertiessubscriptionlifecyclenotificationspecifications)
* **subscriptionStateRules**: [SubscriptionStateRule](#subscriptionstaterule)[]: Array of SubscriptionStateRule
* **swaggerSpecifications**: [SwaggerSpecification](#swaggerspecification)[]: Array of SwaggerSpecification
* **templateDeploymentOptions**: [ResourceTypeRegistrationPropertiesTemplateDeploymentOptions](#resourcetyperegistrationpropertiestemplatedeploymentoptions)
* **throttlingRules**: [ThrottlingRule](#throttlingrule)[]: Array of ThrottlingRule

## AuthorizationActionMapping
### Properties
* **desired**: string
* **original**: string

## ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecifications
### Properties
* **enableDefaultValidation**: bool
* **resourceTypesWithCustomValidation**: string[]: Array of CheckNameAvailabilitySpecificationsResourceTypesWithCustomValidationItem

## ResourceTypeEndpoint
### Properties
* **apiVersions**: string[]: Array of ResourceTypeEndpointApiVersionsItem
* **enabled**: bool
* **extensions**: [ResourceTypeExtension](#resourcetypeextension)[]: Array of ResourceTypeExtension
* **featuresRule**: [ResourceTypeEndpointFeaturesRule](#resourcetypeendpointfeaturesrule)
* **locations**: string[]: Array of ResourceTypeEndpointLocationsItem
* **requiredFeatures**: string[]: Array of ResourceTypeEndpointRequiredFeaturesItem
* **timeout**: string

## ResourceTypeExtension
### Properties
* **endpointUri**: string
* **extensionCategories**: 'NotSpecified' | 'ResourceCreationBegin' | 'ResourceCreationCompleted' | 'ResourceCreationValidate' | 'ResourceDeletionBegin' | 'ResourceDeletionCompleted' | 'ResourceDeletionValidate' | 'ResourceMoveBegin' | 'ResourceMoveCompleted' | 'ResourcePatchBegin' | 'ResourcePatchCompleted' | 'ResourcePatchValidate' | 'ResourcePostAction' | 'ResourceReadBegin' | 'ResourceReadValidate' | 'SubscriptionLifecycleNotification'[]: Array of ExtensionCategory
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
* **request**: 'DoNotMergeExistingReadOnlyAndSecretProperties' | 'IncludeInternalMetadata' | 'NotSpecified'[]: Array of ExtensionOptionType
* **response**: 'DoNotMergeExistingReadOnlyAndSecretProperties' | 'IncludeInternalMetadata' | 'NotSpecified'[]: Array of ExtensionOptionType

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
* **hiddenPathsOnRequest**: string[]: Array of LoggingHiddenPropertyPathHiddenPathsOnRequestItem
* **hiddenPathsOnResponse**: string[]: Array of LoggingHiddenPropertyPathHiddenPathsOnResponseItem

## ResourceTypeRegistrationPropertiesManagement
### Properties
* **incidentContactEmail**: string
* **incidentRoutingService**: string
* **incidentRoutingTeam**: string
* **manifestOwners**: string[]: Array of ResourceProviderManagementManifestOwnersItem
* **resourceAccessPolicy**: 'AcisActionAllowed' | 'AcisReadAllowed' | 'NotSpecified'
* **resourceAccessRoles**: any[]: Array of any
* **schemaOwners**: string[]: Array of ResourceProviderManagementSchemaOwnersItem
* **serviceTreeInfos**: [ServiceTreeInfo](#servicetreeinfo)[]: Array of ServiceTreeInfo

## ResourceTypeRegistrationPropertiesRequestHeaderOptions
### Properties
* **optInHeaders**: 'ClientGroupMembership' | 'NotSpecified' | 'SignedAuxiliaryTokens' | 'SignedUserToken' | 'UnboundedClientGroupMembership'

## ResourceTypeRegistrationPropertiesResourceConcurrencyControlOptions
### Properties
### Additional Properties
* **Additional Properties Type**: [ResourceConcurrencyControlOption](#resourceconcurrencycontroloption)

## ResourceConcurrencyControlOption
### Properties
* **policy**: 'NotSpecified' | 'SynchronizeBeginExtension'

## ResourceTypeRegistrationPropertiesResourceGraphConfiguration
### Properties
* **apiVersion**: string
* **enabled**: bool

## ResourceTypeRegistrationPropertiesResourceMovePolicy
### Properties
* **crossResourceGroupMoveEnabled**: bool
* **crossSubscriptionMoveEnabled**: bool
* **validationRequired**: bool

## ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications
### Properties
* **softDeleteTTL**: string
* **subscriptionStateOverrideActions**: [SubscriptionStateOverrideAction](#subscriptionstateoverrideaction)[]: Array of SubscriptionStateOverrideAction

## SubscriptionStateOverrideAction
### Properties
* **action**: 'BillingCancellation' | 'DeleteAllResources' | 'NoOp' | 'NotDefined' | 'SoftDeleteAllResources' | 'UndoSoftDelete' (Required)
* **state**: 'Deleted' | 'Registered' | 'Suspended' | 'SuspendedToDeleted' | 'SuspendedToRegistered' | 'SuspendedToUnregistered' | 'SuspendedToWarned' | 'Unregistered' | 'Warned' | 'WarnedToDeleted' | 'WarnedToRegistered' | 'WarnedToSuspended' | 'WarnedToUnregistered' (Required)

## SubscriptionStateRule
### Properties
* **allowedActions**: string[]: Array of SubscriptionStateRuleAllowedActionsItem
* **state**: 'Deleted' | 'Disabled' | 'Enabled' | 'NotDefined' | 'PastDue' | 'Warned'

## SwaggerSpecification
### Properties
* **apiVersions**: string[]: Array of SwaggerSpecificationApiVersionsItem
* **swaggerSpecFolderUri**: string

## ResourceTypeRegistrationPropertiesTemplateDeploymentOptions
### Properties
* **preflightOptions**: 'ContinueDeploymentOnFailure' | 'DefaultValidationOnly' | 'None'[]: Array of PreflightOption
* **preflightSupported**: bool

## ThrottlingRule
### Properties
* **action**: string (Required)
* **metrics**: [ThrottlingMetric](#throttlingmetric)[] (Required): Array of ThrottlingMetric
* **requiredFeatures**: string[]: Array of ThrottlingRuleRequiredFeaturesItem

## ThrottlingMetric
### Properties
* **interval**: string
* **limit**: int (Required)
* **type**: 'NotSpecified' | 'NumberOfRequests' | 'NumberOfResources' (Required)

## CustomRolloutPropertiesStatus
### Properties
* **completedRegions**: string[]: Array of CustomRolloutStatusCompletedRegionsItem
* **failedOrSkippedRegions**: [CustomRolloutStatusFailedOrSkippedRegions](#customrolloutstatusfailedorskippedregions): Dictionary of <ExtendedErrorInfo>

## CustomRolloutStatusFailedOrSkippedRegions
### Properties
### Additional Properties
* **Additional Properties Type**: [ExtendedErrorInfo](#extendederrorinfo)

## ExtendedErrorInfo
### Properties
* **additionalInfo**: [TypedErrorInfo](#typederrorinfo)[]: Array of TypedErrorInfo
* **code**: string
* **details**: [ExtendedErrorInfo](#extendederrorinfo)[]: Array of ExtendedErrorInfo
* **message**: string
* **target**: string

## TypedErrorInfo
### Properties
* **info**: any (ReadOnly): Any object
* **type**: string (Required)

## DefaultRolloutProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure'
* **specification**: [DefaultRolloutPropertiesSpecification](#defaultrolloutpropertiesspecification)
* **status**: [DefaultRolloutPropertiesStatus](#defaultrolloutpropertiesstatus)

## DefaultRolloutPropertiesSpecification
### Properties
* **canary**: [DefaultRolloutSpecificationCanary](#defaultrolloutspecificationcanary)
* **expeditedRollout**: [DefaultRolloutSpecificationExpeditedRollout](#defaultrolloutspecificationexpeditedrollout)
* **highTraffic**: [DefaultRolloutSpecificationHighTraffic](#defaultrolloutspecificationhightraffic)
* **lowTraffic**: [DefaultRolloutSpecificationLowTraffic](#defaultrolloutspecificationlowtraffic)
* **mediumTraffic**: [DefaultRolloutSpecificationMediumTraffic](#defaultrolloutspecificationmediumtraffic)
* **providerRegistration**: [DefaultRolloutSpecificationProviderRegistration](#defaultrolloutspecificationproviderregistration)
* **resourceTypeRegistrations**: [ResourceTypeRegistration](#resourcetyperegistration)[]: Array of ResourceTypeRegistration
* **restOfTheWorldGroupOne**: [DefaultRolloutSpecificationRestOfTheWorldGroupOne](#defaultrolloutspecificationrestoftheworldgroupone)
* **restOfTheWorldGroupTwo**: [DefaultRolloutSpecificationRestOfTheWorldGroupTwo](#defaultrolloutspecificationrestoftheworldgrouptwo)

## DefaultRolloutSpecificationCanary
### Properties
* **regions**: string[]: Array of CanaryTrafficRegionRolloutConfigurationRegionsItem
* **skipRegions**: string[]: Array of CanaryTrafficRegionRolloutConfigurationSkipRegionsItem

## DefaultRolloutSpecificationExpeditedRollout
### Properties
* **enabled**: bool: Indicates whether expedited rollout is enabled/disabled

## DefaultRolloutSpecificationHighTraffic
### Properties
* **regions**: string[]: Array of TrafficRegionsItem
* **waitDuration**: string

## DefaultRolloutSpecificationLowTraffic
### Properties
* **regions**: string[]: Array of TrafficRegionsItem
* **waitDuration**: string

## DefaultRolloutSpecificationMediumTraffic
### Properties
* **regions**: string[]: Array of TrafficRegionsItem
* **waitDuration**: string

## DefaultRolloutSpecificationProviderRegistration
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ProviderRegistrationProperties](#providerregistrationproperties)
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## DefaultRolloutSpecificationRestOfTheWorldGroupOne
### Properties
* **regions**: string[]: Array of TrafficRegionsItem
* **waitDuration**: string

## DefaultRolloutSpecificationRestOfTheWorldGroupTwo
### Properties
* **regions**: string[]: Array of TrafficRegionsItem
* **waitDuration**: string

## DefaultRolloutPropertiesStatus
### Properties
* **completedRegions**: string[]: Array of RolloutStatusBaseCompletedRegionsItem
* **failedOrSkippedRegions**: [RolloutStatusBaseFailedOrSkippedRegions](#rolloutstatusbasefailedorskippedregions): Dictionary of <ExtendedErrorInfo>
* **nextTrafficRegion**: 'Canary' | 'HighTraffic' | 'LowTraffic' | 'MediumTraffic' | 'None' | 'NotSpecified' | 'RestOfTheWorldGroupOne' | 'RestOfTheWorldGroupTwo'
* **nextTrafficRegionScheduledTime**: string
* **subscriptionReregistrationResult**: 'ConditionalUpdate' | 'Failed' | 'ForcedUpdate' | 'NotApplicable'

## RolloutStatusBaseFailedOrSkippedRegions
### Properties
### Additional Properties
* **Additional Properties Type**: [ExtendedErrorInfo](#extendederrorinfo)

## NotificationRegistrationProperties
### Properties
* **includedEvents**: string[]: Array of NotificationRegistrationPropertiesIncludedEventsItem
* **messageScope**: 'NotSpecified' | 'RegisteredSubscriptions'
* **notificationEndpoints**: [NotificationEndpoint](#notificationendpoint)[]: Array of NotificationEndpoint
* **notificationMode**: 'EventHub' | 'NotSpecified' | 'WebHook'
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure'

## NotificationEndpoint
### Properties
* **locations**: string[]: Array of NotificationEndpointLocationsItem
* **notificationDestination**: string

## OperationsDefinition
### Properties
* **actionType**: 'Internal' | 'NotSpecified' (WriteOnly)
* **display**: [OperationsDefinitionDisplay](#operationsdefinitiondisplay) (Required, WriteOnly): Display information of the operation.
* **isDataAction**: bool (WriteOnly): Indicates whether the operation applies to data-plane.
* **name**: string (Required, WriteOnly): Name of the operation.
* **origin**: 'NotSpecified' | 'System' | 'User' (WriteOnly)
* **properties**: any (WriteOnly): Anything

## OperationsDefinitionDisplay
### Properties
* **description**: string (Required, WriteOnly)
* **operation**: string (Required, WriteOnly)
* **provider**: string (Required, WriteOnly)
* **resource**: string (Required, WriteOnly)

## SkuResourceProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure'
* **skuSettings**: [SkuSetting](#skusetting)[] (Required): Array of SkuSetting

## SkuSetting
### Properties
* **capabilities**: [SkuCapability](#skucapability)[]: Array of SkuCapability
* **capacity**: [SkuSettingCapacity](#skusettingcapacity)
* **costs**: [SkuCost](#skucost)[]: Array of SkuCost
* **family**: string
* **kind**: string
* **locationInfo**: [SkuLocationInfo](#skulocationinfo)[]: Array of SkuLocationInfo
* **locations**: string[]: Array of SkuSettingLocationsItem
* **name**: string (Required)
* **requiredFeatures**: string[]: Array of SkuSettingRequiredFeaturesItem
* **requiredQuotaIds**: string[]: Array of SkuSettingRequiredQuotaIdsItem
* **size**: string
* **tier**: string

## SkuCapability
### Properties
* **name**: string (Required)
* **value**: string (Required)

## SkuSettingCapacity
### Properties
* **default**: int
* **maximum**: int
* **minimum**: int (Required)
* **scaleType**: 'Automatic' | 'Manual' | 'None'

## SkuCost
### Properties
* **extendedUnit**: string
* **meterId**: string (Required)
* **quantity**: int

## SkuLocationInfo
### Properties
* **extendedLocations**: string[]: Array of SkuLocationInfoExtendedLocationsItem
* **location**: string (Required)
* **type**: 'ArcZone' | 'EdgeZone' | 'NotSpecified'
* **zoneDetails**: [SkuZoneDetail](#skuzonedetail)[]: Array of SkuZoneDetail
* **zones**: string[]: Array of SkuLocationInfoZonesItem

## SkuZoneDetail
### Properties
* **capabilities**: [SkuCapability](#skucapability)[]: Array of SkuCapability
* **name**: string[]: Array of SkuZoneDetailNameItem

