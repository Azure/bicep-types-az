# Microsoft.ProviderHub @ 2024-09-01

## Resource Microsoft.ProviderHub/providerMonitorSettings@2024-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProviderMonitorSettingProperties](#providermonitorsettingproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ProviderHub/providerMonitorSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations@2024-09-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Direct' | 'Hybrid' | 'Managed' | string: Provider registration kind. This Metadata is also used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProviderRegistrationProperties](#providerregistrationproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ProviderHub/providerRegistrations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/authorizedApplications@2024-09-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizedApplicationProperties](#authorizedapplicationproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ProviderHub/providerRegistrations/authorizedApplications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/customRollouts@2024-09-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {maxLength: 260, pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CustomRolloutProperties](#customrolloutproperties) (Required): Properties of the rollout.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ProviderHub/providerRegistrations/customRollouts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/defaultRollouts@2024-09-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {maxLength: 260, pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DefaultRolloutProperties](#defaultrolloutproperties): Properties of the rollout.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ProviderHub/providerRegistrations/defaultRollouts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/newRegionFrontloadRelease@2024-09-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FrontloadPayloadPropertiesOrDefaultRolloutProperties](#frontloadpayloadpropertiesordefaultrolloutproperties) (Required): Properties of the frontload payload.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ProviderHub/providerRegistrations/newRegionFrontloadRelease' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/notificationRegistrations@2024-09-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NotificationRegistrationProperties](#notificationregistrationproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ProviderHub/providerRegistrations/notificationRegistrations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/operations@2024-09-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [OperationsPutContentProperties](#operationsputcontentproperties) (WriteOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly, WriteOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ProviderHub/providerRegistrations/operations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations@2024-09-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Direct' | 'Hybrid' | 'Managed' | string: Resource type registration kind. This Metadata is also used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceTypeRegistrationProperties](#resourcetyperegistrationproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2024-09-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SkuResourceProperties](#skuresourceproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2024-09-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SkuResourceProperties](#skuresourceproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus@2024-09-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SkuResourceProperties](#skuresourceproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/skus@2024-09-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SkuResourceProperties](#skuresourceproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/skus' (ReadOnly, DeployTimeConstant): The resource type

## AdditionalAuthorization
### Properties
* **applicationId**: string
* **roleDefinitionId**: string

## AllowedResourceName
### Properties
* **getActionVerb**: string: Get action verb.
* **name**: string: Resource name.

## AllowedUnauthorizedActionsExtension
### Properties
* **action**: string: The action.
* **intent**: 'DEFERRED_ACCESS_CHECK' | 'LOW_PRIVILEGE' | 'NOT_SPECIFIED' | 'RP_CONTRACT' | string: The intent.

## ApiProfile
### Properties
* **apiVersion**: string: Api version.
* **profileVersion**: string: Profile version.

## ApplicationDataAuthorization
### Properties
* **resourceTypes**: string[]: The resource types from the defined resource types in the provider namespace that the application can access. If no resource types are specified and the role is service owner, the default is * which is all resource types
* **role**: 'LimitedOwner' | 'ServiceOwner' | string (Required): The ownership role the application has on the resource types. The service owner role gives the application owner permissions. The limited owner role gives elevated permissions but does not allow all the permissions of a service owner, such as read/write on internal metadata.

## ApplicationProviderAuthorization
### Properties
* **managedByRoleDefinitionId**: string: The managed by role definition ID for the application.
* **roleDefinitionId**: string: The role definition ID for the application.

## AsyncOperationPollingRules
### Properties
* **additionalOptions**: 'ProtectedAsyncOperationPolling' | 'ProtectedAsyncOperationPollingAuditOnly' | string: The additional options.
* **authorizationActions**: string[]: The authorization actions.

## AsyncTimeoutRule
### Properties
* **actionName**: string
* **timeout**: string: This is a TimeSpan property

## AuthorizationActionMapping
### Properties
* **desired**: string: The desired action name.
* **original**: string: The original action name.

## AuthorizedApplicationProperties
### Properties
* **dataAuthorizations**: [ApplicationDataAuthorization](#applicationdataauthorization)[]: The authorizations that determine the level of data access permissions on the specified resource types.
* **providerAuthorization**: [ApplicationProviderAuthorization](#applicationproviderauthorization)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure' | string (ReadOnly): The provisioning state.

## CustomRolloutProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure' | string (ReadOnly): The provisioned state of the resource.
* **specification**: [CustomRolloutPropertiesSpecification](#customrolloutpropertiesspecification) (Required): The specification.
* **status**: [CustomRolloutPropertiesStatus](#customrolloutpropertiesstatus): The status.

## CustomRolloutPropertiesSpecification
### Properties
* **autoProvisionConfig**: [CustomRolloutSpecificationAutoProvisionConfig](#customrolloutspecificationautoprovisionconfig): The auto provisioning configuration.
* **canary**: [CustomRolloutSpecificationCanary](#customrolloutspecificationcanary): The canary region configuration.
* **providerRegistration**: [CustomRolloutSpecificationProviderRegistration](#customrolloutspecificationproviderregistration): The provider registration.
* **refreshSubscriptionRegistration**: bool: Whether refreshing subscription registration is enabled or disabled.
* **releaseScopes**: string[]: The list of ARM regions scoped for the release.
* **resourceTypeRegistrations**: [ResourceTypeRegistration](#resourcetyperegistration)[]: The resource type registrations.
* **skipReleaseScopeValidation**: bool: Whether release scope validation should be skipped.

## CustomRolloutPropertiesStatus
### Properties
* **completedRegions**: string[]: The completed regions.
* **failedOrSkippedRegions**: [CustomRolloutStatusFailedOrSkippedRegions](#customrolloutstatusfailedorskippedregions): The failed or skipped regions.
* **manifestCheckinStatus**: [CustomRolloutStatusManifestCheckinStatus](#customrolloutstatusmanifestcheckinstatus): The manifest checkin status.

## CustomRolloutSpecificationAutoProvisionConfig
### Properties
* **resourceGraph**: bool
* **storage**: bool

## CustomRolloutSpecificationCanary
### Properties
* **regions**: string[]

## CustomRolloutSpecificationProviderRegistration
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **kind**: 'Direct' | 'Hybrid' | 'Managed' | string: Provider registration kind. This Metadata is also used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ProviderRegistrationProperties](#providerregistrationproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## CustomRolloutStatusFailedOrSkippedRegions
### Properties
### Additional Properties
* **Additional Properties Type**: [ExtendedErrorInfo](#extendederrorinfo)

## CustomRolloutStatusManifestCheckinStatus
### Properties
* **commitId**: string: The commit id.
* **isCheckedIn**: bool (Required): Whether the manifest is checked in.
* **pullRequest**: string: The pull request.
* **statusMessage**: string (Required): The status message.

## DefaultRolloutProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure' | string (ReadOnly): The provisioned state of the resource.
* **specification**: [DefaultRolloutPropertiesSpecification](#defaultrolloutpropertiesspecification): The default rollout specification.
* **status**: [DefaultRolloutPropertiesStatus](#defaultrolloutpropertiesstatus): The default rollout status.

## DefaultRolloutPropertiesSpecification
### Properties
* **autoProvisionConfig**: [DefaultRolloutSpecificationAutoProvisionConfig](#defaultrolloutspecificationautoprovisionconfig): The auto provisioning config.
* **canary**: [DefaultRolloutSpecificationCanary](#defaultrolloutspecificationcanary): The canary traffic region configuration.
* **expeditedRollout**: [DefaultRolloutSpecificationExpeditedRollout](#defaultrolloutspecificationexpeditedrollout): The expedited rollout definition.
* **highTraffic**: [DefaultRolloutSpecificationHighTraffic](#defaultrolloutspecificationhightraffic): The high traffic region configuration.
* **lowTraffic**: [DefaultRolloutSpecificationLowTraffic](#defaultrolloutspecificationlowtraffic): The low traffic region configuration.
* **mediumTraffic**: [DefaultRolloutSpecificationMediumTraffic](#defaultrolloutspecificationmediumtraffic): The medium traffic region configuration.
* **providerRegistration**: [DefaultRolloutSpecificationProviderRegistration](#defaultrolloutspecificationproviderregistration): The provider registration.
* **resourceTypeRegistrations**: [ResourceTypeRegistration](#resourcetyperegistration)[]: The resource type registrations.
* **restOfTheWorldGroupOne**: [DefaultRolloutSpecificationRestOfTheWorldGroupOne](#defaultrolloutspecificationrestoftheworldgroupone): The rest of the world group one region configuration.
* **restOfTheWorldGroupTwo**: [DefaultRolloutSpecificationRestOfTheWorldGroupTwo](#defaultrolloutspecificationrestoftheworldgrouptwo): The rest of the world group two region configuration.

## DefaultRolloutPropertiesStatus
### Properties
* **completedRegions**: string[]: The completed regions.
* **failedOrSkippedRegions**: [RolloutStatusBaseFailedOrSkippedRegions](#rolloutstatusbasefailedorskippedregions): The failed or skipped regions.
* **manifestCheckinStatus**: [DefaultRolloutStatusManifestCheckinStatus](#defaultrolloutstatusmanifestcheckinstatus): The manifest checkin status.
* **nextTrafficRegion**: 'Canary' | 'HighTraffic' | 'LowTraffic' | 'MediumTraffic' | 'None' | 'NotSpecified' | 'RestOfTheWorldGroupOne' | 'RestOfTheWorldGroupTwo' | string: The next traffic region.
* **nextTrafficRegionScheduledTime**: string: The next traffic region scheduled time.
* **subscriptionReregistrationResult**: 'ConditionalUpdate' | 'Failed' | 'ForcedUpdate' | 'NotApplicable' | string: The subscription reregistration result.

## DefaultRolloutSpecificationAutoProvisionConfig
### Properties
* **resourceGraph**: bool: Whether auto provisioning for resource graph is enabled.
* **storage**: bool: Whether auto provisioning for storage is enabled.

## DefaultRolloutSpecificationCanary
### Properties
* **regions**: string[]: The regions.
* **skipRegions**: string[]: The skip regions.

## DefaultRolloutSpecificationExpeditedRollout
### Properties
* **enabled**: bool: Indicates whether expedited rollout is enabled/disabled

## DefaultRolloutSpecificationHighTraffic
### Properties
* **regions**: string[]
* **waitDuration**: string: The wait duration.

## DefaultRolloutSpecificationLowTraffic
### Properties
* **regions**: string[]
* **waitDuration**: string: The wait duration.

## DefaultRolloutSpecificationMediumTraffic
### Properties
* **regions**: string[]
* **waitDuration**: string: The wait duration.

## DefaultRolloutSpecificationProviderRegistration
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **kind**: 'Direct' | 'Hybrid' | 'Managed' | string: Provider registration kind. This Metadata is also used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ProviderRegistrationProperties](#providerregistrationproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## DefaultRolloutSpecificationRestOfTheWorldGroupOne
### Properties
* **regions**: string[]
* **waitDuration**: string: The wait duration.

## DefaultRolloutSpecificationRestOfTheWorldGroupTwo
### Properties
* **regions**: string[]
* **waitDuration**: string: The wait duration.

## DefaultRolloutStatusManifestCheckinStatus
### Properties
* **commitId**: string: The commit id.
* **isCheckedIn**: bool (Required): Whether the manifest is checked in.
* **pullRequest**: string: The pull request.
* **statusMessage**: string (Required): The status message.

## DeleteDependency
### Properties
* **linkedProperty**: string: Linked property.
* **linkedType**: string: Linked type.
* **requiredFeatures**: string[]: Required features.

## EndpointInformation
### Properties
* **endpoint**: string: The endpoint.
* **endpointType**: 'Eventhub' | 'Webhook' | string: The endpoint type.
* **schemaVersion**: string: The schema version.

## ExtendedErrorInfo
### Properties
* **additionalInfo**: [TypedErrorInfo](#typederrorinfo)[]: The additional error information.
* **code**: string: The error code.
* **details**: [ExtendedErrorInfo](#extendederrorinfo)[]: The error details.
* **message**: string: The error message.
* **target**: string: The target of the error.

## ExtendedLocationOptions
### Properties
* **supportedPolicy**: 'All' | 'NotSpecified' | string
* **type**: 'ArcZone' | 'CustomLocation' | 'EdgeZone' | 'NotSpecified' | string: The type.

## FanoutLinkedNotificationRule
### Properties
* **actions**: string[]: The actions.
* **dstsConfiguration**: [FanoutLinkedNotificationRuleDstsConfiguration](#fanoutlinkednotificationruledstsconfiguration): The dsts configuration.
* **endpoints**: [ResourceProviderEndpoint](#resourceproviderendpoint)[]: The endpoints.
* **tokenAuthConfiguration**: [TokenAuthConfiguration](#tokenauthconfiguration): The token auth configuration.

## FanoutLinkedNotificationRuleDstsConfiguration
### Properties
* **serviceDnsName**: string: This is a URI property.
* **serviceName**: string (Required): The service name.

## FilterRule
### Properties
* **endpointInformation**: [EndpointInformation](#endpointinformation)[]: The endpoint information.
* **filterQuery**: string: The filter query.

## FrontloadPayloadPropertiesOrDefaultRolloutProperties
### Properties
* **copyFromLocation**: string (Required, WriteOnly): The copy from location.
* **environmentType**: 'All' | 'Canary' | 'Fairfax' | 'Mooncake' | 'NotSpecified' | 'Prod' | string (Required, WriteOnly): The environment type.
* **excludeResourceTypes**: string[] (Required, WriteOnly): The resource types to exclude.
* **frontloadLocation**: string (Required, WriteOnly): The frontload location.
* **ignoreFields**: string[] (Required, WriteOnly): The fields to ignore.
* **includeResourceTypes**: string[] (Required, WriteOnly): The resource types to include.
* **operationType**: string (Required, WriteOnly): The operation type.
* **overrideEndpointLevelFields**: [FrontloadPayloadPropertiesOverrideEndpointLevelFields](#frontloadpayloadpropertiesoverrideendpointlevelfields) (Required, WriteOnly): The endpoint level fields to override.
* **overrideManifestLevelFields**: [FrontloadPayloadPropertiesOverrideManifestLevelFields](#frontloadpayloadpropertiesoverridemanifestlevelfields) (Required, WriteOnly): The manifest level fields to override.
* **providerNamespace**: string (Required, WriteOnly): The provider namespace.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure' | string (ReadOnly): The provisioned state of the resource.
* **serviceFeatureFlag**: 'Create' | 'DoNotCreate' | string (Required, WriteOnly): The service feature flag.
* **specification**: [DefaultRolloutPropertiesSpecification](#defaultrolloutpropertiesspecification) (ReadOnly): The default rollout specification.
* **status**: [DefaultRolloutPropertiesStatus](#defaultrolloutpropertiesstatus) (ReadOnly): The default rollout status.

## FrontloadPayloadPropertiesOverrideEndpointLevelFields
### Properties
* **apiVersion**: string (Required): The api version.
* **apiVersions**: string[] (Required): The api versions.
* **dstsConfiguration**: [ResourceTypeEndpointBaseDstsConfiguration](#resourcetypeendpointbasedstsconfiguration) (Required): The dsts configuration.
* **enabled**: bool (Required): Whether it's enabled.
* **endpointType**: 'Canary' | 'NotSpecified' | 'Production' | 'TestInProduction' | string (Required): The endpoint type.
* **endpointUri**: string (Required): The endpoint uri.
* **featuresRule**: [ResourceTypeEndpointBaseFeaturesRule](#resourcetypeendpointbasefeaturesrule) (Required): The features rule.
* **locations**: string[] (Required): The locations.
* **requiredFeatures**: string[] (Required): The required features.
* **skuLink**: string (Required): The sku link.
* **timeout**: string (Required): This is a TimeSpan property.
* **zones**: string[] (Required): The zones.

## FrontloadPayloadPropertiesOverrideManifestLevelFields
### Properties
* **resourceHydrationAccounts**: [ResourceHydrationAccount](#resourcehydrationaccount)[]: The resource hydration accounts.

## LegacyDisallowedCondition
### Properties
* **disallowedLegacyOperations**: ('Action' | 'AzureAsyncOperationWaiting' | 'Create' | 'Delete' | 'DeploymentCleanup' | 'EvaluateDeploymentOutput' | 'NotSpecified' | 'Read' | 'ResourceCacheWaiting' | 'Waiting' | string)[]: The disallowed legacy operations.
* **feature**: string: Feature string.

## LightHouseAuthorization
### Properties
* **principalId**: string (Required): The principal id.
* **roleDefinitionId**: string (Required): The role definition id.

## LinkedAccessCheck
### Properties
* **actionName**: string: The action name.
* **linkedAction**: string: The linked action.
* **linkedActionVerb**: string: The linked action verb.
* **linkedProperty**: string: The linked property.
* **linkedType**: string: The linked type.

## LinkedNotificationRule
### Properties
* **actions**: string[]: The actions.
* **actionsOnFailedOperation**: string[]: The actions on failed operation.
* **fastPathActions**: string[]: The fast path actions.
* **fastPathActionsOnFailedOperation**: string[]: The fast path action on failed operation.
* **linkedNotificationTimeout**: string: This is a TimeSpan property.

## LinkedOperationRule
### Properties
* **dependsOnTypes**: string[]: Depends on types.
* **linkedAction**: 'Blocked' | 'Enabled' | 'NotSpecified' | 'Validate' | string (Required): The linked action.
* **linkedOperation**: 'CrossResourceGroupResourceMove' | 'CrossSubscriptionResourceMove' | 'None' | string (Required): The linked operation.

## LocalizedOperationDefinition
### Properties
* **actionType**: 'Internal' | 'NotSpecified': The action type.
* **display**: [LocalizedOperationDefinitionDisplay](#localizedoperationdefinitiondisplay) (Required): Display information of the operation.
* **isDataAction**: bool: Indicates whether the operation applies to data-plane.
* **name**: string (Required): Name of the operation.
* **origin**: 'NotSpecified' | 'System' | 'User': The origin.

## LocalizedOperationDefinitionDisplay
### Properties
* **cs**: [LocalizedOperationDisplayDefinitionCs](#localizedoperationdisplaydefinitioncs): Display information of the operation for cs locale.
* **de**: [LocalizedOperationDisplayDefinitionDe](#localizedoperationdisplaydefinitionde): Display information of the operation for de locale.
* **default**: [LocalizedOperationDisplayDefinitionDefault](#localizedoperationdisplaydefinitiondefault) (Required): Display information of the operation.
* **en**: [LocalizedOperationDisplayDefinitionEn](#localizedoperationdisplaydefinitionen): Display information of the operation for en locale.
* **es**: [LocalizedOperationDisplayDefinitionEs](#localizedoperationdisplaydefinitiones): Display information of the operation for es locale.
* **fr**: [LocalizedOperationDisplayDefinitionFr](#localizedoperationdisplaydefinitionfr): Display information of the operation for fr locale.
* **hu**: [LocalizedOperationDisplayDefinitionHu](#localizedoperationdisplaydefinitionhu): Display information of the operation for hu locale.
* **it**: [LocalizedOperationDisplayDefinitionIt](#localizedoperationdisplaydefinitionit): Display information of the operation for it locale.
* **ja**: [LocalizedOperationDisplayDefinitionJa](#localizedoperationdisplaydefinitionja): Display information of the operation for ja locale.
* **ko**: [LocalizedOperationDisplayDefinitionKo](#localizedoperationdisplaydefinitionko): Display information of the operation for ko locale.
* **nl**: [LocalizedOperationDisplayDefinitionNl](#localizedoperationdisplaydefinitionnl): Display information of the operation for nl locale.
* **pl**: [LocalizedOperationDisplayDefinitionPl](#localizedoperationdisplaydefinitionpl): Display information of the operation for pl locale.
* **ptBR**: [LocalizedOperationDisplayDefinitionPtBR](#localizedoperationdisplaydefinitionptbr): Display information of the operation for pt-BR locale.
* **ptPT**: [LocalizedOperationDisplayDefinitionPt](#localizedoperationdisplaydefinitionpt): Display information of the operation for pt-PT locale.
* **ru**: [LocalizedOperationDisplayDefinitionRu](#localizedoperationdisplaydefinitionru): Display information of the operation for ru locale.
* **sv**: [LocalizedOperationDisplayDefinitionSv](#localizedoperationdisplaydefinitionsv): Display information of the operation for sv locale.
* **zhHans**: [LocalizedOperationDisplayDefinitionZhHans](#localizedoperationdisplaydefinitionzhhans): Display information of the operation for zh-Hans locale.
* **zhHant**: [LocalizedOperationDisplayDefinitionZhHant](#localizedoperationdisplaydefinitionzhhant): Display information of the operation for zh-Hant locale.

## LocalizedOperationDisplayDefinitionCs
### Properties
* **description**: string (Required): The description.
* **operation**: string (Required): The operation.
* **provider**: string (Required): The provider.
* **resource**: string (Required): The resource.

## LocalizedOperationDisplayDefinitionDe
### Properties
* **description**: string (Required): The description.
* **operation**: string (Required): The operation.
* **provider**: string (Required): The provider.
* **resource**: string (Required): The resource.

## LocalizedOperationDisplayDefinitionDefault
### Properties
* **description**: string (Required): The description.
* **operation**: string (Required): The operation.
* **provider**: string (Required): The provider.
* **resource**: string (Required): The resource.

## LocalizedOperationDisplayDefinitionEn
### Properties
* **description**: string (Required): The description.
* **operation**: string (Required): The operation.
* **provider**: string (Required): The provider.
* **resource**: string (Required): The resource.

## LocalizedOperationDisplayDefinitionEs
### Properties
* **description**: string (Required): The description.
* **operation**: string (Required): The operation.
* **provider**: string (Required): The provider.
* **resource**: string (Required): The resource.

## LocalizedOperationDisplayDefinitionFr
### Properties
* **description**: string (Required): The description.
* **operation**: string (Required): The operation.
* **provider**: string (Required): The provider.
* **resource**: string (Required): The resource.

## LocalizedOperationDisplayDefinitionHu
### Properties
* **description**: string (Required): The description.
* **operation**: string (Required): The operation.
* **provider**: string (Required): The provider.
* **resource**: string (Required): The resource.

## LocalizedOperationDisplayDefinitionIt
### Properties
* **description**: string (Required): The description.
* **operation**: string (Required): The operation.
* **provider**: string (Required): The provider.
* **resource**: string (Required): The resource.

## LocalizedOperationDisplayDefinitionJa
### Properties
* **description**: string (Required): The description.
* **operation**: string (Required): The operation.
* **provider**: string (Required): The provider.
* **resource**: string (Required): The resource.

## LocalizedOperationDisplayDefinitionKo
### Properties
* **description**: string (Required): The description.
* **operation**: string (Required): The operation.
* **provider**: string (Required): The provider.
* **resource**: string (Required): The resource.

## LocalizedOperationDisplayDefinitionNl
### Properties
* **description**: string (Required): The description.
* **operation**: string (Required): The operation.
* **provider**: string (Required): The provider.
* **resource**: string (Required): The resource.

## LocalizedOperationDisplayDefinitionPl
### Properties
* **description**: string (Required): The description.
* **operation**: string (Required): The operation.
* **provider**: string (Required): The provider.
* **resource**: string (Required): The resource.

## LocalizedOperationDisplayDefinitionPt
### Properties
* **description**: string (Required): The description.
* **operation**: string (Required): The operation.
* **provider**: string (Required): The provider.
* **resource**: string (Required): The resource.

## LocalizedOperationDisplayDefinitionPtBR
### Properties
* **description**: string (Required): The description.
* **operation**: string (Required): The operation.
* **provider**: string (Required): The provider.
* **resource**: string (Required): The resource.

## LocalizedOperationDisplayDefinitionRu
### Properties
* **description**: string (Required): The description.
* **operation**: string (Required): The operation.
* **provider**: string (Required): The provider.
* **resource**: string (Required): The resource.

## LocalizedOperationDisplayDefinitionSv
### Properties
* **description**: string (Required): The description.
* **operation**: string (Required): The operation.
* **provider**: string (Required): The provider.
* **resource**: string (Required): The resource.

## LocalizedOperationDisplayDefinitionZhHans
### Properties
* **description**: string (Required): The description.
* **operation**: string (Required): The operation.
* **provider**: string (Required): The provider.
* **resource**: string (Required): The resource.

## LocalizedOperationDisplayDefinitionZhHant
### Properties
* **description**: string (Required): The description.
* **operation**: string (Required): The operation.
* **provider**: string (Required): The provider.
* **resource**: string (Required): The resource.

## LocationQuotaRule
### Properties
* **location**: string: The location.
* **policy**: 'Default' | 'None' | 'Restricted' | string: The policy.
* **quotaId**: string: The quota id.

## LoggingRule
### Properties
* **action**: string (Required): The action.
* **detailLevel**: 'Body' | 'None' | string (Required): The detail level.
* **direction**: 'None' | 'Request' | 'Response' | string (Required): The direction.
* **hiddenPropertyPaths**: [LoggingRuleHiddenPropertyPaths](#loggingrulehiddenpropertypaths): The hidden property paths.

## LoggingRuleHiddenPropertyPaths
### Properties
* **hiddenPathsOnRequest**: string[]: The hidden paths on request.
* **hiddenPathsOnResponse**: string[]: The hidden paths on response.

## Notification
### Properties
* **notificationType**: 'SubscriptionNotification' | 'Unspecified' | string: The notification type.
* **skipNotifications**: 'Disabled' | 'Enabled' | 'Unspecified' | string: Whether notifications should be skipped.

## NotificationEndpoint
### Properties
* **locations**: string[]: The locations.
* **notificationDestination**: string: The notification destination.

## NotificationRegistrationProperties
### Properties
* **includedEvents**: string[]: The included events.
* **messageScope**: 'NotSpecified' | 'RegisteredSubscriptions' | string: The message scope.
* **notificationEndpoints**: [NotificationEndpoint](#notificationendpoint)[]: The notification endpoints.
* **notificationMode**: 'EventHub' | 'NotSpecified' | 'WebHook' | string: The notification mode.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure' | string (ReadOnly): The provisioned state of the resource.

## OpenApiConfiguration
### Properties
* **validation**: [OpenApiValidation](#openapivalidation): The open api validation.

## OpenApiValidation
### Properties
* **allowNoncompliantCollectionResponse**: bool: Indicates whether a non compliance response is allowed for a LIST call

## OperationsPutContentProperties
### Properties
* **contents**: [LocalizedOperationDefinition](#localizedoperationdefinition)[]: Operations content.

## ProviderHubMetadataProviderAuthentication
### Properties
* **allowedAudiences**: string[] (Required): The allowed audiences.

## ProviderHubMetadataThirdPartyProviderAuthorization
### Properties
* **authorizations**: [LightHouseAuthorization](#lighthouseauthorization)[]: The authorizations.
* **managedByTenantId**: string: The managed by tenant id.

## ProviderMonitorSettingProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure' | string (ReadOnly): The provisioning state.

## ProviderRegistrationProperties
### Properties
* **capabilities**: [ResourceProviderCapabilities](#resourceprovidercapabilities)[]: The capabilities.
* **crossTenantTokenValidation**: 'EnsureSecureValidation' | 'PassthroughInsecureToken' | string: The cross tenant token validation.
* **customManifestVersion**: string: Custom manifest version.
* **dstsConfiguration**: [ResourceProviderManifestPropertiesDstsConfiguration](#resourceprovidermanifestpropertiesdstsconfiguration): The dsts configuration.
* **enableTenantLinkedNotification**: bool: The enable tenant linked notification.
* **featuresRule**: [ResourceProviderManifestPropertiesFeaturesRule](#resourceprovidermanifestpropertiesfeaturesrule): The features rule.
* **globalNotificationEndpoints**: [ResourceProviderEndpoint](#resourceproviderendpoint)[]: The global notification endpoints.
* **legacyNamespace**: string: Legacy namespace.
* **legacyRegistrations**: string[]: Legacy registrations.
* **linkedNotificationRules**: [FanoutLinkedNotificationRule](#fanoutlinkednotificationrule)[]: The linked notification rules.
* **management**: [ResourceProviderManifestPropertiesManagement](#resourceprovidermanifestpropertiesmanagement): The resource provider management.
* **managementGroupGlobalNotificationEndpoints**: [ResourceProviderEndpoint](#resourceproviderendpoint)[]: Management groups global notification endpoints.
* **metadata**: any: The metadata.
* **namespace**: string: The namespace.
* **notificationOptions**: 'EmitSpendingLimit' | 'None' | 'NotSpecified' | string: Notification options.
* **notifications**: [Notification](#notification)[]: The notifications.
* **notificationSettings**: [ResourceProviderManifestPropertiesNotificationSettings](#resourceprovidermanifestpropertiesnotificationsettings): Notification settings.
* **optionalFeatures**: string[]: Optional features.
* **privateResourceProviderConfiguration**: [ProviderRegistrationPropertiesPrivateResourceProviderConfiguration](#providerregistrationpropertiesprivateresourceproviderconfiguration): The private resource provider configuration.
* **providerAuthentication**: [ResourceProviderManifestPropertiesProviderAuthentication](#resourceprovidermanifestpropertiesproviderauthentication): The provider authentication.
* **providerAuthorizations**: [ResourceProviderAuthorization](#resourceproviderauthorization)[]: The provider authorizations.
* **providerHubMetadata**: [ProviderRegistrationPropertiesProviderHubMetadata](#providerregistrationpropertiesproviderhubmetadata): The provider hub metadata.
* **providerType**: 'AuthorizationFree' | 'External' | 'Hidden' | 'Internal' | 'LegacyRegistrationRequired' | 'NotSpecified' | 'RegistrationFree' | 'TenantOnly' | string: The provider type.
* **providerVersion**: string: The provider version.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure' | string (ReadOnly): The provisioning state.
* **requestHeaderOptions**: [ResourceProviderManifestPropertiesRequestHeaderOptions](#resourceprovidermanifestpropertiesrequestheaderoptions): The request header options.
* **requiredFeatures**: string[]: The required features.
* **resourceGroupLockOptionDuringMove**: [ResourceProviderManifestPropertiesResourceGroupLockOptionDuringMove](#resourceprovidermanifestpropertiesresourcegrouplockoptionduringmove): Resource group lock option during move.
* **resourceHydrationAccounts**: [ResourceHydrationAccount](#resourcehydrationaccount)[]: resource hydration accounts
* **resourceProviderAuthorizationRules**: [ResourceProviderAuthorizationRules](#resourceproviderauthorizationrules): The resource provider authorization rules.
* **responseOptions**: [ResourceProviderManifestPropertiesResponseOptions](#resourceprovidermanifestpropertiesresponseoptions): Response options.
* **serviceName**: string: The service name.
* **services**: [ResourceProviderService](#resourceproviderservice)[]: The services.
* **subscriptionLifecycleNotificationSpecifications**: [ProviderRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications](#providerregistrationpropertiessubscriptionlifecyclenotificationspecifications): The subscription lifecycle notification specifications.
* **templateDeploymentOptions**: [ResourceProviderManifestPropertiesTemplateDeploymentOptions](#resourceprovidermanifestpropertiestemplatedeploymentoptions): The template deployment options.
* **tokenAuthConfiguration**: [TokenAuthConfiguration](#tokenauthconfiguration): The token auth configuration.

## ProviderRegistrationPropertiesPrivateResourceProviderConfiguration
### Properties
* **allowedSubscriptions**: string[]: The allowed subscriptions.

## ProviderRegistrationPropertiesProviderHubMetadata
### Properties
* **directRpRoleDefinitionId**: string: The direct RP role definition id.
* **globalAsyncOperationResourceTypeName**: string: The global async operation resource type name.
* **providerAuthentication**: [ProviderHubMetadataProviderAuthentication](#providerhubmetadataproviderauthentication): The provider authentication.
* **providerAuthorizations**: [ResourceProviderAuthorization](#resourceproviderauthorization)[]: The provider authorizations.
* **regionalAsyncOperationResourceTypeName**: string: The regional async operation resource type name.
* **thirdPartyProviderAuthorization**: [ProviderHubMetadataThirdPartyProviderAuthorization](#providerhubmetadatathirdpartyproviderauthorization): The third party provider authorization.

## ProviderRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications
### Properties
* **softDeleteTTL**: string: The soft delete TTL.
* **subscriptionStateOverrideActions**: [SubscriptionStateOverrideAction](#subscriptionstateoverrideaction)[]: The subscription state override actions.

## QuotaRule
### Properties
* **locationRules**: [LocationQuotaRule](#locationquotarule)[]: The location rules.
* **quotaPolicy**: 'Default' | 'None' | 'Restricted' | string: The quota policy.
* **requiredFeatures**: string[]: The required features.

## ResourceAccessRole
### Properties
* **actions**: string[]: The actions.
* **allowedGroupClaims**: string[]: The allowed group claims.

## ResourceConcurrencyControlOption
### Properties
* **policy**: 'NotSpecified' | 'SynchronizeBeginExtension' | string: The policy.

## ResourceHydrationAccount
### Properties
* **accountName**: string: The account name.
* **encryptedKey**: string {sensitive}: The encrypted key.
* **maxChildResourceConsistencyJobLimit**: int: The max child resource consistency job limit.
* **subscriptionId**: string: The subscription id.

## ResourceProviderAuthorization
### Properties
* **allowedThirdPartyExtensions**: [ThirdPartyExtension](#thirdpartyextension)[]: The allowed third party extensions.
* **applicationId**: string: The application id.
* **groupingTag**: string: The grouping tag.
* **managedByAuthorization**: [ResourceProviderAuthorizationManagedByAuthorization](#resourceproviderauthorizationmanagedbyauthorization): Managed by authorization.
* **managedByRoleDefinitionId**: string: The managed by role definition id.
* **roleDefinitionId**: string: The role definition id.

## ResourceProviderAuthorizationManagedByAuthorization
### Properties
* **additionalAuthorizations**: [AdditionalAuthorization](#additionalauthorization)[]
* **allowManagedByInheritance**: bool: Indicates whether the managed by resource role definition ID should be inherited.
* **managedByResourceRoleDefinitionId**: string: The managed by resource role definition ID for the application.

## ResourceProviderAuthorizationRules
### Properties
* **asyncOperationPollingRules**: [AsyncOperationPollingRules](#asyncoperationpollingrules): The async operation polling rules.

## ResourceProviderCapabilities
### Properties
* **effect**: 'Allow' | 'Disallow' | 'NotSpecified' | string (Required): The effect.
* **quotaId**: string (Required): The quota id.
* **requiredFeatures**: string[]: The required features.

## ResourceProviderEndpoint
### Properties
* **apiVersions**: string[]: The api versions.
* **enabled**: bool: Whether the endpoint is enabled.
* **endpointType**: 'Canary' | 'NotSpecified' | 'Production' | 'TestInProduction' | string: The endpoint type.
* **endpointUri**: string: The endpoint uri.
* **featuresRule**: [ResourceProviderEndpointFeaturesRule](#resourceproviderendpointfeaturesrule): The feature rules.
* **locations**: string[]: The locations.
* **requiredFeatures**: string[]: The required features.
* **skuLink**: string: The sku link.
* **timeout**: string: The timeout.

## ResourceProviderEndpointFeaturesRule
### Properties
* **requiredFeaturesPolicy**: 'All' | 'Any' | string (Required): The required feature policy.

## ResourceProviderManagementErrorResponseMessageOptions
### Properties
* **serverFailureResponseMessageType**: 'NotSpecified' | 'OutageReporting' | string: Type of server failure response message.

## ResourceProviderManagementExpeditedRolloutMetadata
### Properties
* **enabled**: bool: Expedited rollout enabled?
* **expeditedRolloutIntent**: 'Hotfix' | 'NotSpecified' | string: Expedited rollout intent.

## ResourceProviderManifestPropertiesDstsConfiguration
### Properties
* **serviceDnsName**: string: This is a URI property.
* **serviceName**: string (Required): The service name.

## ResourceProviderManifestPropertiesFeaturesRule
### Properties
* **requiredFeaturesPolicy**: 'All' | 'Any' | string (Required): The required feature policy.

## ResourceProviderManifestPropertiesManagement
### Properties
* **authorizationOwners**: string[]: The authorization owners.
* **canaryManifestOwners**: string[]: List of manifest owners for canary.
* **errorResponseMessageOptions**: [ResourceProviderManagementErrorResponseMessageOptions](#resourceprovidermanagementerrorresponsemessageoptions): Options for error response messages.
* **expeditedRolloutMetadata**: [ResourceProviderManagementExpeditedRolloutMetadata](#resourceprovidermanagementexpeditedrolloutmetadata): Metadata for expedited rollout.
* **expeditedRolloutSubmitters**: string[]: List of expedited rollout submitters.
* **incidentContactEmail**: string: The incident contact email.
* **incidentRoutingService**: string: The incident routing service.
* **incidentRoutingTeam**: string: The incident routing team.
* **manifestOwners**: string[]: The manifest owners.
* **pcCode**: string: The profit center code for the subscription.
* **profitCenterProgramId**: string: The profit center program id for the subscription.
* **resourceAccessPolicy**: 'AcisActionAllowed' | 'AcisReadAllowed' | 'NotSpecified': The resource access policy.
* **resourceAccessRoles**: [ResourceAccessRole](#resourceaccessrole)[]: The resource access roles.
* **schemaOwners**: string[]: The schema owners.
* **serviceTreeInfos**: [ServiceTreeInfo](#servicetreeinfo)[]: The service tree infos.

## ResourceProviderManifestPropertiesNotificationSettings
### Properties
* **subscriberSettings**: [SubscriberSetting](#subscribersetting)[]

## ResourceProviderManifestPropertiesProviderAuthentication
### Properties
* **allowedAudiences**: string[] (Required): The allowed audiences.

## ResourceProviderManifestPropertiesRequestHeaderOptions
### Properties
* **optInHeaders**: 'ClientGroupMembership' | 'ClientPrincipalNameEncoded' | 'MSIResourceIdEncoded' | 'ManagementGroupAncestorsEncoded' | 'NotSpecified' | 'PrivateLinkId' | 'PrivateLinkResourceId' | 'PrivateLinkVnetTrafficTag' | 'ResourceGroupLocation' | 'SignedAuxiliaryTokens' | 'SignedUserToken' | 'UnboundedClientGroupMembership' | string: The opt in headers.
* **optOutHeaders**: 'NotSpecified' | 'SystemDataCreatedByLastModifiedBy' | string: The opt out headers.

## ResourceProviderManifestPropertiesResourceGroupLockOptionDuringMove
### Properties
* **blockActionVerb**: 'Action' | 'Delete' | 'NotSpecified' | 'Read' | 'Unrecognized' | 'Write' | string: The action verb that will be blocked when the resource group is locked during move.

## ResourceProviderManifestPropertiesResponseOptions
### Properties
* **serviceClientOptionsType**: 'DisableAutomaticDecompression' | 'NotSpecified' | string

## ResourceProviderManifestPropertiesTemplateDeploymentOptions
### Properties
* **preflightOptions**: ('ContinueDeploymentOnFailure' | 'DefaultValidationOnly' | 'None' | string)[]: The preflight options.
* **preflightSupported**: bool: Whether preflight is supported.

## ResourceProviderService
### Properties
* **serviceName**: string: The service name.
* **status**: 'Active' | 'Inactive' | string: The status.

## ResourceTypeEndpoint
### Properties
* **apiVersion**: string: Api version.
* **apiVersions**: string[]: The api versions.
* **dataBoundary**: 'EU' | 'Global' | 'NotDefined' | 'US' | string: The data boundary.
* **dstsConfiguration**: [ResourceTypeEndpointDstsConfiguration](#resourcetypeendpointdstsconfiguration): The dsts configuration.
* **enabled**: bool: Whether the endpoint is enabled.
* **endpointType**: 'Canary' | 'NotSpecified' | 'Production' | 'TestInProduction' | string: The endpoint type.
* **endpointUri**: string: The endpoint uri.
* **extensions**: [ResourceTypeExtension](#resourcetypeextension)[]: The extensions.
* **featuresRule**: [ResourceTypeEndpointFeaturesRule](#resourcetypeendpointfeaturesrule): The features rule.
* **kind**: 'Direct' | 'Managed' | string: Resource type endpoint kind. This Metadata is also used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **locations**: string[]: The locations.
* **requiredFeatures**: string[]: The required features.
* **skuLink**: string: The sku link.
* **timeout**: string: The timeout.
* **tokenAuthConfiguration**: [TokenAuthConfiguration](#tokenauthconfiguration): The token auth configuration.
* **zones**: string[]: List of zones.

## ResourceTypeEndpointBaseDstsConfiguration
### Properties
* **serviceDnsName**: string: This is a URI property.
* **serviceName**: string (Required): The service name.

## ResourceTypeEndpointBaseFeaturesRule
### Properties
* **requiredFeaturesPolicy**: 'All' | 'Any' | string (Required): The required feature policy.

## ResourceTypeEndpointDstsConfiguration
### Properties
* **serviceDnsName**: string: This is a URI property.
* **serviceName**: string (Required): The service name.

## ResourceTypeEndpointFeaturesRule
### Properties
* **requiredFeaturesPolicy**: 'All' | 'Any' | string (Required): The required feature policy.

## ResourceTypeExtension
### Properties
* **endpointUri**: string: The endpoint uri.
* **extensionCategories**: ('BestMatchOperationBegin' | 'NotSpecified' | 'ResourceCreationBegin' | 'ResourceCreationCompleted' | 'ResourceCreationValidate' | 'ResourceDeletionBegin' | 'ResourceDeletionCompleted' | 'ResourceDeletionValidate' | 'ResourceMoveBegin' | 'ResourceMoveCompleted' | 'ResourcePatchBegin' | 'ResourcePatchCompleted' | 'ResourcePatchValidate' | 'ResourcePostAction' | 'ResourceReadBegin' | 'ResourceReadValidate' | 'SubscriptionLifecycleNotification' | 'SubscriptionLifecycleNotificationDeletion' | string)[]: The extension categories.
* **timeout**: string: The timeout.

## ResourceTypeExtensionOptionsResourceCreationBegin
### Properties
* **request**: ('DoNotMergeExistingReadOnlyAndSecretProperties' | 'IncludeInternalMetadata' | 'NotSpecified' | string)[]: The request.
* **response**: ('DoNotMergeExistingReadOnlyAndSecretProperties' | 'IncludeInternalMetadata' | 'NotSpecified' | string)[]: The response.

## ResourceTypeOnBehalfOfToken
### Properties
* **actionName**: string: The action name.
* **lifeTime**: string: This is a TimeSpan property.

## ResourceTypeRegistration
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **kind**: 'Direct' | 'Hybrid' | 'Managed' | string: Resource type registration kind. This Metadata is also used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ResourceTypeRegistrationProperties](#resourcetyperegistrationproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## ResourceTypeRegistrationProperties
### Properties
* **additionalOptions**: 'ProtectedAsyncOperationPolling' | 'ProtectedAsyncOperationPollingAuditOnly' | string: The additional options.
* **addResourceListTargetLocations**: bool: Add resource list target locations?
* **allowedResourceNames**: [AllowedResourceName](#allowedresourcename)[]: The allowed resource names.
* **allowedTemplateDeploymentReferenceActions**: string[]: Allowed template deployment reference actions.
* **allowedUnauthorizedActions**: string[]: The allowed unauthorized actions.
* **allowedUnauthorizedActionsExtensions**: [AllowedUnauthorizedActionsExtension](#allowedunauthorizedactionsextension)[]: The allowed unauthorized actions extensions.
* **allowEmptyRoleAssignments**: bool: The allow empty role assignments.
* **apiProfiles**: [ApiProfile](#apiprofile)[]: The api profiles.
* **asyncOperationResourceTypeName**: string: The async operation resource type name.
* **asyncTimeoutRules**: [AsyncTimeoutRule](#asynctimeoutrule)[]: Async timeout rules
* **authorizationActionMappings**: [AuthorizationActionMapping](#authorizationactionmapping)[]: The authorization action mappings
* **availabilityZoneRule**: [ResourceTypeRegistrationPropertiesAvailabilityZoneRule](#resourcetyperegistrationpropertiesavailabilityzonerule): The availability zone rule.
* **capacityRule**: [ResourceTypeRegistrationPropertiesCapacityRule](#resourcetyperegistrationpropertiescapacityrule): Capacity rule.
* **category**: 'FreeForm' | 'Internal' | 'None' | 'PureProxy' | string: The category.
* **checkNameAvailabilitySpecifications**: [ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecifications](#resourcetyperegistrationpropertieschecknameavailabilityspecifications): The check name availability specifications.
* **commonApiVersions**: string[]: Common API versions for the resource type.
* **crossTenantTokenValidation**: 'EnsureSecureValidation' | 'PassthroughInsecureToken' | string: The cross tenant token validation.
* **defaultApiVersion**: string: The default api version.
* **disallowedActionVerbs**: string[]: The disallowed action verbs.
* **disallowedEndUserOperations**: string[]: The disallowed end user operations.
* **dstsConfiguration**: [ResourceTypeRegistrationPropertiesDstsConfiguration](#resourcetyperegistrationpropertiesdstsconfiguration): The dsts configuration.
* **enableAsyncOperation**: bool: Whether async operation is enabled.
* **enableThirdPartyS2S**: bool: Whether third party S2S is enabled.
* **endpoints**: [ResourceTypeEndpoint](#resourcetypeendpoint)[]: The extensions.
* **extendedLocations**: [ExtendedLocationOptions](#extendedlocationoptions)[]: The extended locations.
* **extensionOptions**: [ResourceTypeRegistrationPropertiesExtensionOptions](#resourcetyperegistrationpropertiesextensionoptions): The extension options.
* **featuresRule**: [ResourceTypeRegistrationPropertiesFeaturesRule](#resourcetyperegistrationpropertiesfeaturesrule): The features rule.
* **frontdoorRequestMode**: 'NotSpecified' | 'UseManifest' | string: The frontdoor request mode.
* **groupingTag**: string: Grouping tag.
* **identityManagement**: [ResourceTypeRegistrationPropertiesIdentityManagement](#resourcetyperegistrationpropertiesidentitymanagement): The identity management.
* **isPureProxy**: bool: Whether it is pure proxy.
* **legacyName**: string: The legacy name.
* **legacyNames**: string[]: The legacy names.
* **legacyPolicy**: [ResourceTypeRegistrationPropertiesLegacyPolicy](#resourcetyperegistrationpropertieslegacypolicy): The legacy policy.
* **linkedAccessChecks**: [LinkedAccessCheck](#linkedaccesscheck)[]: The linked access checks.
* **linkedNotificationRules**: [LinkedNotificationRule](#linkednotificationrule)[]: The linked notification rules.
* **linkedOperationRules**: [LinkedOperationRule](#linkedoperationrule)[]: The linked operation rules.
* **loggingRules**: [LoggingRule](#loggingrule)[]: The logging rules.
* **management**: [ResourceTypeRegistrationPropertiesManagement](#resourcetyperegistrationpropertiesmanagement): The resource provider management.
* **manifestLink**: string: Manifest link.
* **marketplaceOptions**: [ResourceTypeRegistrationPropertiesMarketplaceOptions](#resourcetyperegistrationpropertiesmarketplaceoptions): Marketplace options.
* **marketplaceType**: 'AddOn' | 'Bypass' | 'NotSpecified' | 'Store': The marketplace type.
* **metadata**: [ResourceTypeRegistrationPropertiesMetadata](#resourcetyperegistrationpropertiesmetadata): The metadata.
* **notifications**: [Notification](#notification)[]: The notifications.
* **onBehalfOfTokens**: [ResourceTypeOnBehalfOfToken](#resourcetypeonbehalfoftoken): The on behalf of tokens.
* **openApiConfiguration**: [OpenApiConfiguration](#openapiconfiguration): The open api configuration.
* **policyExecutionType**: 'BypassPolicies' | 'ExecutePolicies' | 'ExpectPartialPutRequests' | 'NotSpecified' | string: The policy execution type.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure' | string (ReadOnly): The provisioning state.
* **quotaRule**: [QuotaRule](#quotarule): The quota rule.
* **regionality**: 'Global' | 'NotSpecified' | 'Regional' | string: The regionality.
* **requestHeaderOptions**: [ResourceTypeRegistrationPropertiesRequestHeaderOptions](#resourcetyperegistrationpropertiesrequestheaderoptions): The request header options.
* **requiredFeatures**: string[]: The required features.
* **resourceCache**: [ResourceTypeRegistrationPropertiesResourceCache](#resourcetyperegistrationpropertiesresourcecache): Resource cache options.
* **resourceConcurrencyControlOptions**: [ResourceTypeRegistrationPropertiesResourceConcurrencyControlOptions](#resourcetyperegistrationpropertiesresourceconcurrencycontroloptions): The resource concurrency control options.
* **resourceDeletionPolicy**: 'CascadeDeleteAll' | 'CascadeDeleteProxyOnlyChildren' | 'NotSpecified' | string: The resource deletion policy.
* **resourceGraphConfiguration**: [ResourceTypeRegistrationPropertiesResourceGraphConfiguration](#resourcetyperegistrationpropertiesresourcegraphconfiguration): The resource graph configuration.
* **resourceManagementOptions**: [ResourceTypeRegistrationPropertiesResourceManagementOptions](#resourcetyperegistrationpropertiesresourcemanagementoptions): Resource management options.
* **resourceMovePolicy**: [ResourceTypeRegistrationPropertiesResourceMovePolicy](#resourcetyperegistrationpropertiesresourcemovepolicy): The resource move policy.
* **resourceProviderAuthorizationRules**: [ResourceProviderAuthorizationRules](#resourceproviderauthorizationrules): The resource provider authorization rules.
* **resourceQueryManagement**: [ResourceTypeRegistrationPropertiesResourceQueryManagement](#resourcetyperegistrationpropertiesresourcequerymanagement): Resource query management options.
* **resourceSubType**: 'AsyncOperation' | 'NotSpecified' | string: The resource sub type.
* **resourceTypeCommonAttributeManagement**: [ResourceTypeRegistrationPropertiesResourceTypeCommonAttributeManagement](#resourcetyperegistrationpropertiesresourcetypecommonattributemanagement): Resource type common attribute management.
* **resourceValidation**: 'NotSpecified' | 'ProfaneWords' | 'ReservedWords' | string: The resource validation.
* **routingRule**: [ResourceTypeRegistrationPropertiesRoutingRule](#resourcetyperegistrationpropertiesroutingrule): Routing rule.
* **routingType**: 'BypassEndpointSelectionOptimization' | 'CascadeAuthorizedExtension' | 'CascadeExtension' | 'ChildFanout' | 'Default' | 'Extension' | 'Failover' | 'Fanout' | 'HostBased' | 'LocationBased' | 'LocationMapping' | 'ProxyOnly' | 'ServiceFanout' | 'Tenant' | string: The resource routing type.
* **serviceTreeInfos**: [ServiceTreeInfo](#servicetreeinfo)[]: The service tree infos.
* **skuLink**: string: The sku link.
* **subscriptionLifecycleNotificationSpecifications**: [ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications](#resourcetyperegistrationpropertiessubscriptionlifecyclenotificationspecifications): The subscription lifecycle notification specifications.
* **subscriptionStateRules**: [SubscriptionStateRule](#subscriptionstaterule)[]: The subscription state rules.
* **supportsTags**: bool: Whether tags are supported.
* **swaggerSpecifications**: [SwaggerSpecification](#swaggerspecification)[]: The swagger specifications.
* **templateDeploymentOptions**: [ResourceTypeRegistrationPropertiesTemplateDeploymentOptions](#resourcetyperegistrationpropertiestemplatedeploymentoptions): The template deployment options.
* **templateDeploymentPolicy**: [ResourceTypeRegistrationPropertiesTemplateDeploymentPolicy](#resourcetyperegistrationpropertiestemplatedeploymentpolicy): The template deployment policy.
* **throttlingRules**: [ThrottlingRule](#throttlingrule)[]: The throttling rules.
* **tokenAuthConfiguration**: [TokenAuthConfiguration](#tokenauthconfiguration): The token auth configuration.

## ResourceTypeRegistrationPropertiesAvailabilityZoneRule
### Properties
* **availabilityZonePolicy**: 'MultiZoned' | 'NotSpecified' | 'SingleZoned' | string

## ResourceTypeRegistrationPropertiesCapacityRule
### Properties
* **capacityPolicy**: 'Default' | 'Restricted' | string: Capacity policy.
* **skuAlias**: string: Sku alias

## ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecifications
### Properties
* **enableDefaultValidation**: bool: Whether default validation is enabled.
* **resourceTypesWithCustomValidation**: string[]: The resource types with custom validation.

## ResourceTypeRegistrationPropertiesDstsConfiguration
### Properties
* **serviceDnsName**: string: This is a URI property.
* **serviceName**: string (Required): The service name.

## ResourceTypeRegistrationPropertiesExtensionOptions
### Properties
* **resourceCreationBegin**: [ResourceTypeExtensionOptionsResourceCreationBegin](#resourcetypeextensionoptionsresourcecreationbegin): Resource creation begin.

## ResourceTypeRegistrationPropertiesFeaturesRule
### Properties
* **requiredFeaturesPolicy**: 'All' | 'Any' | string (Required): The required feature policy.

## ResourceTypeRegistrationPropertiesIdentityManagement
### Properties
* **applicationId**: string: The application id.
* **applicationIds**: string[]: The application ids.
* **delegationAppIds**: string[]: The delegation app ids.
* **type**: 'Actor' | 'DelegatedResourceIdentity' | 'NotSpecified' | 'SystemAssigned' | 'UserAssigned' | string: The type.

## ResourceTypeRegistrationPropertiesLegacyPolicy
### Properties
* **disallowedConditions**: [LegacyDisallowedCondition](#legacydisallowedcondition)[]
* **disallowedLegacyOperations**: ('Action' | 'AzureAsyncOperationWaiting' | 'Create' | 'Delete' | 'DeploymentCleanup' | 'EvaluateDeploymentOutput' | 'NotSpecified' | 'Read' | 'ResourceCacheWaiting' | 'Waiting' | string)[]

## ResourceTypeRegistrationPropertiesManagement
### Properties
* **authorizationOwners**: string[]: The authorization owners.
* **canaryManifestOwners**: string[]: List of manifest owners for canary.
* **errorResponseMessageOptions**: [ResourceProviderManagementErrorResponseMessageOptions](#resourceprovidermanagementerrorresponsemessageoptions): Options for error response messages.
* **expeditedRolloutMetadata**: [ResourceProviderManagementExpeditedRolloutMetadata](#resourceprovidermanagementexpeditedrolloutmetadata): Metadata for expedited rollout.
* **expeditedRolloutSubmitters**: string[]: List of expedited rollout submitters.
* **incidentContactEmail**: string: The incident contact email.
* **incidentRoutingService**: string: The incident routing service.
* **incidentRoutingTeam**: string: The incident routing team.
* **manifestOwners**: string[]: The manifest owners.
* **pcCode**: string: The profit center code for the subscription.
* **profitCenterProgramId**: string: The profit center program id for the subscription.
* **resourceAccessPolicy**: 'AcisActionAllowed' | 'AcisReadAllowed' | 'NotSpecified': The resource access policy.
* **resourceAccessRoles**: [ResourceAccessRole](#resourceaccessrole)[]: The resource access roles.
* **schemaOwners**: string[]: The schema owners.
* **serviceTreeInfos**: [ServiceTreeInfo](#servicetreeinfo)[]: The service tree infos.

## ResourceTypeRegistrationPropertiesMarketplaceOptions
### Properties
* **addOnPlanConversionAllowed**: bool: Add-on plan conversion allowed.

## ResourceTypeRegistrationPropertiesMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ResourceTypeRegistrationPropertiesRequestHeaderOptions
### Properties
* **optInHeaders**: 'ClientGroupMembership' | 'ClientPrincipalNameEncoded' | 'MSIResourceIdEncoded' | 'ManagementGroupAncestorsEncoded' | 'NotSpecified' | 'PrivateLinkId' | 'PrivateLinkResourceId' | 'PrivateLinkVnetTrafficTag' | 'ResourceGroupLocation' | 'SignedAuxiliaryTokens' | 'SignedUserToken' | 'UnboundedClientGroupMembership' | string: The opt in headers.
* **optOutHeaders**: 'NotSpecified' | 'SystemDataCreatedByLastModifiedBy' | string: The opt out headers.

## ResourceTypeRegistrationPropertiesResourceCache
### Properties
* **enableResourceCache**: bool: Enable resource cache.
* **resourceCacheExpirationTimespan**: string: Resource cache expiration timespan. This is a TimeSpan property.

## ResourceTypeRegistrationPropertiesResourceConcurrencyControlOptions
### Properties
### Additional Properties
* **Additional Properties Type**: [ResourceConcurrencyControlOption](#resourceconcurrencycontroloption)

## ResourceTypeRegistrationPropertiesResourceGraphConfiguration
### Properties
* **apiVersion**: string: The api version.
* **enabled**: bool: Whether it's enabled.

## ResourceTypeRegistrationPropertiesResourceManagementOptions
### Properties
* **batchProvisioningSupport**: [ResourceTypeRegistrationPropertiesResourceManagementOptionsBatchProvisioningSupport](#resourcetyperegistrationpropertiesresourcemanagementoptionsbatchprovisioningsupport): Batch provisioning support.
* **deleteDependencies**: [DeleteDependency](#deletedependency)[]: Delete dependencies.
* **nestedProvisioningSupport**: [ResourceTypeRegistrationPropertiesResourceManagementOptionsNestedProvisioningSupport](#resourcetyperegistrationpropertiesresourcemanagementoptionsnestedprovisioningsupport): Nested provisioning support.

## ResourceTypeRegistrationPropertiesResourceManagementOptionsBatchProvisioningSupport
### Properties
* **supportedOperations**: 'Delete' | 'Get' | 'NotSpecified' | string: Supported operations.

## ResourceTypeRegistrationPropertiesResourceManagementOptionsNestedProvisioningSupport
### Properties
* **minimumApiVersion**: string: Minimum API version.

## ResourceTypeRegistrationPropertiesResourceMovePolicy
### Properties
* **crossResourceGroupMoveEnabled**: bool: Whether cross resource group move is enabled.
* **crossSubscriptionMoveEnabled**: bool: Whether cross subscription move is enabled.
* **validationRequired**: bool: Whether validation is required.

## ResourceTypeRegistrationPropertiesResourceQueryManagement
### Properties
* **filterOption**: 'EnableSubscriptionFilterOnTenant' | 'NotSpecified' | string: Filter option.

## ResourceTypeRegistrationPropertiesResourceTypeCommonAttributeManagement
### Properties
* **commonApiVersionsMergeMode**: 'Merge' | 'Overwrite' | string: Common api versions merge mode.

## ResourceTypeRegistrationPropertiesRoutingRule
### Properties
* **hostResourceType**: string: Hosted resource type.

## ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications
### Properties
* **softDeleteTTL**: string: The soft delete TTL.
* **subscriptionStateOverrideActions**: [SubscriptionStateOverrideAction](#subscriptionstateoverrideaction)[]: The subscription state override actions.

## ResourceTypeRegistrationPropertiesTemplateDeploymentOptions
### Properties
* **preflightOptions**: ('ContinueDeploymentOnFailure' | 'DefaultValidationOnly' | 'None' | string)[]: The preflight options.
* **preflightSupported**: bool: Whether preflight is supported.

## ResourceTypeRegistrationPropertiesTemplateDeploymentPolicy
### Properties
* **capabilities**: 'Default' | 'Preflight' | string (Required): The capabilities.
* **preflightNotifications**: 'None' | 'UnregisteredSubscriptions' | string: The preflight notifications.
* **preflightOptions**: 'DeploymentRequests' | 'None' | 'RegisteredOnly' | 'TestOnly' | 'ValidationRequests' | string (Required): The preflight options.

## RolloutStatusBaseFailedOrSkippedRegions
### Properties
### Additional Properties
* **Additional Properties Type**: [ExtendedErrorInfo](#extendederrorinfo)

## ServiceTreeInfo
### Properties
* **componentId**: string: The component id.
* **readiness**: 'ClosingDown' | 'Deprecated' | 'GA' | 'InDevelopment' | 'InternalOnly' | 'PrivatePreview' | 'PublicPreview' | 'RemovedFromARM' | 'Retired' | string: The readiness.
* **serviceId**: string: The service id.

## SkuCapability
### Properties
* **name**: string (Required): The name.
* **value**: string (Required): The value.

## SkuCost
### Properties
* **extendedUnit**: string: The extended unit.
* **meterId**: string (Required): The meter id.
* **quantity**: int: The quantity.

## SkuLocationInfo
### Properties
* **extendedLocations**: string[]: The extended locations.
* **location**: string (Required): The location.
* **type**: 'ArcZone' | 'CustomLocation' | 'EdgeZone' | 'NotSpecified' | string: The type.
* **zoneDetails**: [SkuZoneDetail](#skuzonedetail)[]: The zone details.
* **zones**: string[]: The zones.

## SkuResourceProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'MovingResources' | 'NotSpecified' | 'RolloutInProgress' | 'Running' | 'Succeeded' | 'TransientFailure' | string (ReadOnly): The provisioning state.
* **skuSettings**: [SkuSetting](#skusetting)[] (Required): The sku settings.

## SkuSetting
### Properties
* **capabilities**: [SkuCapability](#skucapability)[]: The capabilities.
* **capacity**: [SkuSettingCapacity](#skusettingcapacity): The capacity.
* **costs**: [SkuCost](#skucost)[]: The costs.
* **family**: string: The family.
* **kind**: string: The kind.
* **locationInfo**: [SkuLocationInfo](#skulocationinfo)[]: The location info.
* **locations**: string[]: The locations.
* **name**: string (Required): The name.
* **requiredFeatures**: string[]: The required features.
* **requiredQuotaIds**: string[]: The required quota ids.
* **size**: string: The size.
* **tier**: string: The tier.

## SkuSettingCapacity
### Properties
* **default**: int: The default.
* **maximum**: int: The maximum.
* **minimum**: int (Required): The minimum.
* **scaleType**: 'Automatic' | 'Manual' | 'None' | string: The scale type.

## SkuZoneDetail
### Properties
* **capabilities**: [SkuCapability](#skucapability)[]: The capabilities.
* **name**: string[]: The name.

## SubscriberSetting
### Properties
* **filterRules**: [FilterRule](#filterrule)[]: The filter rules.

## SubscriptionStateOverrideAction
### Properties
* **action**: 'BillingCancellation' | 'DeleteAllResources' | 'NoOp' | 'NotDefined' | 'SoftDeleteAllResources' | 'UndoSoftDelete' | string (Required): The action.
* **state**: 'Deleted' | 'Registered' | 'Suspended' | 'SuspendedToDeleted' | 'SuspendedToRegistered' | 'SuspendedToUnregistered' | 'SuspendedToWarned' | 'Unregistered' | 'Warned' | 'WarnedToDeleted' | 'WarnedToRegistered' | 'WarnedToSuspended' | 'WarnedToUnregistered' | string (Required): The state.

## SubscriptionStateRule
### Properties
* **allowedActions**: string[]: The allowed actions.
* **state**: 'Deleted' | 'Disabled' | 'Enabled' | 'NotDefined' | 'PastDue' | 'Warned' | string: The subscription state.

## SwaggerSpecification
### Properties
* **apiVersions**: string[]: The api versions.
* **swaggerSpecFolderUri**: string: The swagger spec folder uri.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## ThirdPartyExtension
### Properties
* **name**: string: Name of third party extension.

## ThrottlingMetric
### Properties
* **interval**: string: The interval.
* **limit**: int (Required): The limit.
* **type**: 'NotSpecified' | 'NumberOfRequests' | 'NumberOfResources' | string (Required): The throttling metric type

## ThrottlingRule
### Properties
* **action**: string (Required): The action.
* **applicationId**: string[]: The application id.
* **metrics**: [ThrottlingMetric](#throttlingmetric)[] (Required): The metrics.
* **requiredFeatures**: string[]: The required features.

## TokenAuthConfiguration
### Properties
* **authenticationScheme**: 'Bearer' | 'PoP' | string: The authentication scheme.
* **disableCertificateAuthenticationFallback**: bool: Whether certification authentication fallback is disabled.
* **signedRequestScope**: 'Endpoint' | 'ResourceUri' | string: The signed request scope.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TypedErrorInfo
### Properties
* **info**: any (ReadOnly): The error information.
* **type**: string (Required): The type of the error.

