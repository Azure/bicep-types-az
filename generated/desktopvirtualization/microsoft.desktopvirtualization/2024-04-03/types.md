# Microsoft.DesktopVirtualization @ 2024-04-03

## Resource Microsoft.DesktopVirtualization/appAttachPackages@2024-04-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 100, pattern: "^[a-z0-9]([a-z0-9]|(-(?!-))){1,61}[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AppAttachPackageProperties](#appattachpackageproperties) (Required): Detailed properties for App Attach Package
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/appAttachPackages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/applicationGroups@2024-04-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-03' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceModelWithAllowedPropertySetIdentity](#resourcemodelwithallowedpropertysetidentity)
* **kind**: string {pattern: "^[-\w\._,\(\)]+$"}: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. E.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): The geo-location where the resource lives
* **managedBy**: string: The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **plan**: [ResourceModelWithAllowedPropertySetPlan](#resourcemodelwithallowedpropertysetplan)
* **properties**: [ApplicationGroupProperties](#applicationgroupproperties) (Required): Detailed properties for ApplicationGroup
* **sku**: [ResourceModelWithAllowedPropertySetSku](#resourcemodelwithallowedpropertysetsku)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/applicationGroups/applications@2024-04-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 24, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationProperties](#applicationproperties) (Required): Detailed properties for Application
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/applicationGroups/desktops@2024-04-03 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 24, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DesktopProperties](#desktopproperties) (ReadOnly): Detailed properties for Desktop
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups/desktops' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools@2024-04-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-03' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceModelWithAllowedPropertySetIdentity](#resourcemodelwithallowedpropertysetidentity)
* **kind**: string {pattern: "^[-\w\._,\(\)]+$"}: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. E.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): The geo-location where the resource lives
* **managedBy**: string: The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **plan**: [ResourceModelWithAllowedPropertySetPlan](#resourcemodelwithallowedpropertysetplan)
* **properties**: [HostPoolProperties](#hostpoolproperties) (Required): Detailed properties for HostPool
* **sku**: [ResourceModelWithAllowedPropertySetSku](#resourcemodelwithallowedpropertysetsku)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/hostPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools/msixPackages@2024-04-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 100, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MsixPackageProperties](#msixpackageproperties) (Required): Detailed properties for MSIX Package
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/hostPools/msixPackages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools/privateEndpointConnections@2024-04-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/hostPools/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools/sessionHosts@2024-04-03 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 48, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SessionHostProperties](#sessionhostproperties) (ReadOnly): Detailed properties for SessionHost
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/hostPools/sessionHosts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools/sessionHosts/userSessions@2024-04-03 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 24} (Required, DeployTimeConstant): The resource name
* **properties**: [UserSessionProperties](#usersessionproperties) (ReadOnly): Detailed properties for UserSession
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/hostPools/sessionHosts/userSessions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/scalingPlans@2024-04-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-03' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceModelWithAllowedPropertySetIdentity](#resourcemodelwithallowedpropertysetidentity)
* **kind**: string {pattern: "^[-\w\._,\(\)]+$"}: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. E.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): The geo-location where the resource lives
* **managedBy**: string: The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **plan**: [ResourceModelWithAllowedPropertySetPlan](#resourcemodelwithallowedpropertysetplan)
* **properties**: [ScalingPlanProperties](#scalingplanproperties) (Required): Detailed properties for scaling plan.
* **sku**: [ResourceModelWithAllowedPropertySetSku](#resourcemodelwithallowedpropertysetsku)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/scalingPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/scalingPlans/personalSchedules@2024-04-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 64, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScalingPlanPersonalScheduleProperties](#scalingplanpersonalscheduleproperties) (Required): Detailed properties for ScalingPlanPersonalSchedule
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/scalingPlans/personalSchedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/scalingPlans/pooledSchedules@2024-04-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 64, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScalingPlanPooledScheduleProperties](#scalingplanpooledscheduleproperties) (Required): Detailed properties for ScalingPlanPooledSchedule
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/scalingPlans/pooledSchedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/workspaces@2024-04-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-03' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceModelWithAllowedPropertySetIdentity](#resourcemodelwithallowedpropertysetidentity)
* **kind**: string {pattern: "^[-\w\._,\(\)]+$"}: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type. E.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): The geo-location where the resource lives
* **managedBy**: string: The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **plan**: [ResourceModelWithAllowedPropertySetPlan](#resourcemodelwithallowedpropertysetplan)
* **properties**: [WorkspaceProperties](#workspaceproperties): Detailed properties for Workspace
* **sku**: [ResourceModelWithAllowedPropertySetSku](#resourcemodelwithallowedpropertysetsku)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/workspaces/privateEndpointConnections@2024-04-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Function listRegistrationTokens (Microsoft.DesktopVirtualization/hostPools@2024-04-03)
* **Resource**: Microsoft.DesktopVirtualization/hostPools
* **ApiVersion**: 2024-04-03
* **Output**: [RegistrationTokenList](#registrationtokenlist)

## AgentUpdateProperties
### Properties
* **maintenanceWindows**: [MaintenanceWindowProperties](#maintenancewindowproperties)[]: List of maintenance windows. Maintenance windows are 2 hours long.
* **maintenanceWindowTimeZone**: string: Time zone for maintenance as defined in https://docs.microsoft.com/en-us/dotnet/api/system.timezoneinfo.findsystemtimezonebyid?view=net-5.0. Must be set if useLocalTime is true.
* **type**: 'Default' | 'Scheduled' | string: The type of maintenance for session host components.
* **useSessionHostLocalTime**: bool: Whether to use localTime of the virtual machine.

## AppAttachPackageInfoProperties
### Properties
* **certificateExpiry**: string: Date certificate expires, found in the appxmanifest.xml.
* **certificateName**: string: Certificate name found in the appxmanifest.xml.
* **displayName**: string: User friendly Name to be displayed in the portal.
* **imagePath**: string: VHD/CIM image path on Network Share.
* **isActive**: bool: Make this version of the package the active one across the hostpool.
* **isPackageTimestamped**: 'NotTimestamped' | 'Timestamped' | string: Is package timestamped so it can ignore the certificate expiry date
* **isRegularRegistration**: bool: Specifies how to register Package in feed.
* **lastUpdated**: string: Date Package was last updated, found in the appxmanifest.xml.
* **packageAlias**: string: Alias of App Attach Package. Assigned at import time
* **packageApplications**: [MsixPackageApplications](#msixpackageapplications)[]: List of package applications.
* **packageDependencies**: [MsixPackageDependencies](#msixpackagedependencies)[]: List of package dependencies.
* **packageFamilyName**: string: Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name.
* **packageFullName**: string: Package Full Name from appxmanifest.xml.
* **packageName**: string: Package Name from appxmanifest.xml.
* **packageRelativePath**: string: Relative Path to the package inside the image.
* **version**: string: Package version found in the appxmanifest.xml.

## AppAttachPackageProperties
### Properties
* **failHealthCheckOnStagingFailure**: 'DoNotFail' | 'NeedsAssistance' | 'Unhealthy' | string: Parameter indicating how the health check should behave if this package fails staging
* **hostPoolReferences**: string[]: List of Hostpool resource Ids.
* **image**: [AppAttachPackageInfoProperties](#appattachpackageinfoproperties): Detailed properties for App Attach Package
* **keyVaultURL**: string: URL path to certificate name located in keyVault
* **provisioningState**: 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the App Attach Package.

## ApplicationGroupProperties
### Properties
* **applicationGroupType**: 'Desktop' | 'RemoteApp' | string (Required): Resource Type of ApplicationGroup.
* **cloudPcResource**: bool (ReadOnly): Is cloud pc resource.
* **description**: string: Description of ApplicationGroup.
* **friendlyName**: string: Friendly name of ApplicationGroup.
* **hostPoolArmPath**: string (Required): HostPool arm path of ApplicationGroup.
* **objectId**: string (ReadOnly): ObjectId of ApplicationGroup. (internal use)
* **showInFeed**: bool: Boolean representing whether the applicationGroup is show in the feed.
* **workspaceArmPath**: string (ReadOnly): Workspace arm path of ApplicationGroup.

## ApplicationProperties
### Properties
* **applicationType**: 'InBuilt' | 'MsixApplication' | string: Resource Type of Application.
* **commandLineArguments**: string: Command Line Arguments for Application.
* **commandLineSetting**: 'Allow' | 'DoNotAllow' | 'Require' | string (Required): Specifies whether this published application can be launched with command line arguments provided by the client, command line arguments specified at publish time, or no command line arguments at all.
* **description**: string: Description of Application.
* **filePath**: string: Specifies a path for the executable file for the application.
* **friendlyName**: string: Friendly name of Application.
* **iconContent**: any (ReadOnly): the icon a 64 bit string as a byte array.
* **iconHash**: string (ReadOnly): Hash of the icon.
* **iconIndex**: int: Index of the icon.
* **iconPath**: string: Path to icon.
* **msixPackageApplicationId**: string: Specifies the package application Id for MSIX applications
* **msixPackageFamilyName**: string: Specifies the package family name for MSIX applications
* **objectId**: string (ReadOnly): ObjectId of Application. (internal use)
* **showInPortal**: bool: Specifies whether to show the RemoteApp program in the RD Web Access server.

## DesktopProperties
### Properties
* **description**: string: Description of Desktop.
* **friendlyName**: string: Friendly name of Desktop.
* **iconContent**: any (ReadOnly): The icon a 64 bit string as a byte array.
* **iconHash**: string (ReadOnly): Hash of the icon.
* **objectId**: string (ReadOnly): ObjectId of Desktop. (internal use)

## HostPoolProperties
### Properties
* **agentUpdate**: [AgentUpdateProperties](#agentupdateproperties): The session host configuration for updating agent, monitoring agent, and stack component.
* **appAttachPackageReferences**: string[] (ReadOnly): List of App Attach Package links.
* **applicationGroupReferences**: string[] (ReadOnly): List of applicationGroup links.
* **cloudPcResource**: bool (ReadOnly): Is cloud pc resource.
* **customRdpProperty**: string: Custom rdp property of HostPool.
* **description**: string: Description of HostPool.
* **friendlyName**: string: Friendly name of HostPool.
* **hostPoolType**: 'BYODesktop' | 'Personal' | 'Pooled' | string (Required): HostPool type for desktop.
* **loadBalancerType**: 'BreadthFirst' | 'DepthFirst' | 'Persistent' | string (Required): The type of the load balancer.
* **maxSessionLimit**: int: The max session limit of HostPool.
* **objectId**: string (ReadOnly): ObjectId of HostPool. (internal use)
* **personalDesktopAssignmentType**: 'Automatic' | 'Direct' | string: PersonalDesktopAssignment type for HostPool.
* **preferredAppGroupType**: 'Desktop' | 'None' | 'RailApplications' | string (Required): The type of preferred application group type, default to Desktop Application Group
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connection associated with the specified resource
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'EnabledForClientsOnly' | 'EnabledForSessionHostsOnly' | string: Enabled allows this resource to be accessed from both public and private networks, Disabled allows this resource to only be accessed via private endpoints
* **registrationInfo**: [RegistrationInfo](#registrationinfo): The registration info of HostPool.
* **ring**: int: The ring number of HostPool.
* **ssoadfsAuthority**: string: URL to customer ADFS server for signing WVD SSO certificates.
* **ssoClientId**: string: ClientId for the registered Relying Party used to issue WVD SSO certificates.
* **ssoClientSecretKeyVaultPath**: string: Path to Azure KeyVault storing the secret used for communication to ADFS.
* **ssoSecretType**: 'Certificate' | 'CertificateInKeyVault' | 'SharedKey' | 'SharedKeyInKeyVault' | string: The type of single sign on Secret Type.
* **startVMOnConnect**: bool: The flag to turn on/off StartVMOnConnect feature.
* **validationEnvironment**: bool: Is validation environment.
* **vmTemplate**: string: VM template for sessionhosts configuration within hostpool.

## MaintenanceWindowProperties
### Properties
* **dayOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday': Day of the week.
* **hour**: int: The update start hour of the day. (0 - 23)

## MsixPackageApplications
### Properties
* **appId**: string: Package Application Id, found in appxmanifest.xml.
* **appUserModelID**: string: Used to activate Package Application. Consists of Package Name and ApplicationID. Found in appxmanifest.xml.
* **description**: string: Description of Package Application.
* **friendlyName**: string: User friendly name.
* **iconImageName**: string: User friendly name.
* **rawIcon**: any: the icon a 64 bit string as a byte array.
* **rawPng**: any: the icon a 64 bit string as a byte array.

## MsixPackageDependencies
### Properties
* **dependencyName**: string: Name of package dependency.
* **minVersion**: string: Dependency version required.
* **publisher**: string: Name of dependency publisher.

## MsixPackageProperties
### Properties
* **displayName**: string: User friendly Name to be displayed in the portal.
* **imagePath**: string: VHD/CIM image path on Network Share.
* **isActive**: bool: Make this version of the package the active one across the hostpool.
* **isRegularRegistration**: bool: Specifies how to register Package in feed.
* **lastUpdated**: string: Date Package was last updated, found in the appxmanifest.xml.
* **packageApplications**: [MsixPackageApplications](#msixpackageapplications)[]: List of package applications.
* **packageDependencies**: [MsixPackageDependencies](#msixpackagedependencies)[]: List of package dependencies.
* **packageFamilyName**: string: Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name.
* **packageName**: string: Package Name from appxmanifest.xml.
* **packageRelativePath**: string: Relative Path to the package inside the image.
* **version**: string: Package version found in the appxmanifest.xml.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## RegistrationInfo
### Properties
* **expirationTime**: string: Expiration time of registration token.
* **registrationTokenOperation**: 'Delete' | 'None' | 'Update' | string: The type of resetting the token.
* **token**: string: The registration token base64 encoded string.

## RegistrationTokenList
### Properties
* **nextLink**: string (ReadOnly): Link to the next page of results.
* **value**: [RegistrationTokenMinimal](#registrationtokenminimal)[]: List of RegistrationToken definitions.

## RegistrationTokenMinimal
### Properties
* **expirationTime**: string: Expiration time of registration token.
* **token**: string {sensitive}: The registration token base64 encoded string.

## ResourceModelWithAllowedPropertySetIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of resource identity. The value must be an UUID.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of resource. The value must be an UUID.
* **type**: 'SystemAssigned': The identity type.

## ResourceModelWithAllowedPropertySetPlan
### Properties
* **name**: string (Required): A user defined name of the 3rd Party Artifact that is being procured.
* **product**: string (Required): The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding.
* **promotionCode**: string: A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
* **publisher**: string (Required): The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
* **version**: string: The version of the desired product/artifact.

## ResourceModelWithAllowedPropertySetSku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. E.g. P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

## ScalingHostPoolReference
### Properties
* **hostPoolArmPath**: string: Arm path of referenced hostpool.
* **scalingPlanEnabled**: bool: Is the scaling plan enabled for this hostpool.

## ScalingPlanPersonalScheduleProperties
### Properties
* **daysOfWeek**: ('Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday')[]: Set of days of the week on which this schedule is active.
* **offPeakActionOnDisconnect**: 'Deallocate' | 'Hibernate' | 'None' | string: Action to be taken after a user disconnect during the off-peak period.
* **offPeakActionOnLogoff**: 'Deallocate' | 'Hibernate' | 'None' | string: Action to be taken after a logoff during the off-peak period.
* **offPeakMinutesToWaitOnDisconnect**: int {minValue: 0}: The time in minutes to wait before performing the desired session handling action when a user disconnects during the off-peak period.
* **offPeakMinutesToWaitOnLogoff**: int {minValue: 0}: The time in minutes to wait before performing the desired session handling action when a user logs off during the off-peak period.
* **offPeakStartTime**: [Time](#time): Starting time for off-peak period.
* **offPeakStartVMOnConnect**: 'Disable' | 'Enable' | string: The desired configuration of Start VM On Connect for the hostpool during the off-peak phase.
* **peakActionOnDisconnect**: 'Deallocate' | 'Hibernate' | 'None' | string: Action to be taken after a user disconnect during the peak period.
* **peakActionOnLogoff**: 'Deallocate' | 'Hibernate' | 'None' | string: Action to be taken after a logoff during the peak period.
* **peakMinutesToWaitOnDisconnect**: int {minValue: 0}: The time in minutes to wait before performing the desired session handling action when a user disconnects during the peak period.
* **peakMinutesToWaitOnLogoff**: int {minValue: 0}: The time in minutes to wait before performing the desired session handling action when a user logs off during the peak period.
* **peakStartTime**: [Time](#time): Starting time for peak period.
* **peakStartVMOnConnect**: 'Disable' | 'Enable' | string: The desired configuration of Start VM On Connect for the hostpool during the peak phase.
* **rampDownActionOnDisconnect**: 'Deallocate' | 'Hibernate' | 'None' | string: Action to be taken after a user disconnect during the ramp down period.
* **rampDownActionOnLogoff**: 'Deallocate' | 'Hibernate' | 'None' | string: Action to be taken after a logoff during the ramp down period.
* **rampDownMinutesToWaitOnDisconnect**: int {minValue: 0}: The time in minutes to wait before performing the desired session handling action when a user disconnects during the ramp down period.
* **rampDownMinutesToWaitOnLogoff**: int {minValue: 0}: The time in minutes to wait before performing the desired session handling action when a user logs off during the ramp down period.
* **rampDownStartTime**: [Time](#time): Starting time for ramp down period.
* **rampDownStartVMOnConnect**: 'Disable' | 'Enable' | string: The desired configuration of Start VM On Connect for the hostpool during the ramp down phase.
* **rampUpActionOnDisconnect**: 'Deallocate' | 'Hibernate' | 'None' | string: Action to be taken after a user disconnect during the ramp up period.
* **rampUpActionOnLogoff**: 'Deallocate' | 'Hibernate' | 'None' | string: Action to be taken after a logoff during the ramp up period.
* **rampUpAutoStartHosts**: 'All' | 'None' | 'WithAssignedUser' | string: The desired startup behavior during the ramp up period for personal vms in the hostpool.
* **rampUpMinutesToWaitOnDisconnect**: int {minValue: 0}: The time in minutes to wait before performing the desired session handling action when a user disconnects during the ramp up period.
* **rampUpMinutesToWaitOnLogoff**: int {minValue: 0}: The time in minutes to wait before performing the desired session handling action when a user logs off during the ramp up period.
* **rampUpStartTime**: [Time](#time): Starting time for ramp up period.
* **rampUpStartVMOnConnect**: 'Disable' | 'Enable' | string: The desired configuration of Start VM On Connect for the hostpool during the ramp up phase. If this is disabled, session hosts must be turned on using rampUpAutoStartHosts or by turning them on manually.

## ScalingPlanPooledScheduleProperties
### Properties
* **daysOfWeek**: ('Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday')[]: Set of days of the week on which this schedule is active.
* **offPeakLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst' | string: Load balancing algorithm for off-peak period.
* **offPeakStartTime**: [Time](#time): Starting time for off-peak period.
* **peakLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst' | string: Load balancing algorithm for peak period.
* **peakStartTime**: [Time](#time): Starting time for peak period.
* **rampDownCapacityThresholdPct**: int {minValue: 1, maxValue: 100}: Capacity threshold for ramp down period.
* **rampDownForceLogoffUsers**: bool: Should users be logged off forcefully from hosts.
* **rampDownLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst' | string: Load balancing algorithm for ramp down period.
* **rampDownMinimumHostsPct**: int {minValue: 0, maxValue: 100}: Minimum host percentage for ramp down period.
* **rampDownNotificationMessage**: string: Notification message for users during ramp down period.
* **rampDownStartTime**: [Time](#time): Starting time for ramp down period.
* **rampDownStopHostsWhen**: 'ZeroActiveSessions' | 'ZeroSessions' | string: Specifies when to stop hosts during ramp down period.
* **rampDownWaitTimeMinutes**: int: Number of minutes to wait to stop hosts during ramp down period.
* **rampUpCapacityThresholdPct**: int {minValue: 1, maxValue: 100}: Capacity threshold for ramp up period.
* **rampUpLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst' | string: Load balancing algorithm for ramp up period.
* **rampUpMinimumHostsPct**: int {minValue: 0, maxValue: 100}: Minimum host percentage for ramp up period.
* **rampUpStartTime**: [Time](#time): Starting time for ramp up period.

## ScalingPlanProperties
### Properties
* **description**: string: Description of scaling plan.
* **exclusionTag**: string: Exclusion tag for scaling plan.
* **friendlyName**: string: User friendly name of scaling plan.
* **hostPoolReferences**: [ScalingHostPoolReference](#scalinghostpoolreference)[]: List of ScalingHostPoolReference definitions.
* **hostPoolType**: 'Pooled' | string: HostPool type for desktop.
* **objectId**: string (ReadOnly): ObjectId of scaling plan. (internal use)
* **schedules**: [ScalingSchedule](#scalingschedule)[]: List of ScalingPlanPooledSchedule definitions.
* **timeZone**: string (Required): Timezone of the scaling plan.

## ScalingSchedule
### Properties
* **daysOfWeek**: ('Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string)[]: Set of days of the week on which this schedule is active.
* **name**: string: Name of the ScalingPlanPooledSchedule.
* **offPeakLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst' | string: Load balancing algorithm for off-peak period.
* **offPeakStartTime**: [Time](#time): Starting time for off-peak period.
* **peakLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst' | string: Load balancing algorithm for peak period.
* **peakStartTime**: [Time](#time): Starting time for peak period.
* **rampDownCapacityThresholdPct**: int {minValue: 1, maxValue: 100}: Capacity threshold for ramp down period.
* **rampDownForceLogoffUsers**: bool: Should users be logged off forcefully from hosts.
* **rampDownLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst' | string: Load balancing algorithm for ramp down period.
* **rampDownMinimumHostsPct**: int {minValue: 0, maxValue: 100}: Minimum host percentage for ramp down period.
* **rampDownNotificationMessage**: string: Notification message for users during ramp down period.
* **rampDownStartTime**: [Time](#time): Starting time for ramp down period.
* **rampDownStopHostsWhen**: 'ZeroActiveSessions' | 'ZeroSessions' | string: Specifies when to stop hosts during ramp down period.
* **rampDownWaitTimeMinutes**: int: Number of minutes to wait to stop hosts during ramp down period.
* **rampUpCapacityThresholdPct**: int {minValue: 1, maxValue: 100}: Capacity threshold for ramp up period.
* **rampUpLoadBalancingAlgorithm**: 'BreadthFirst' | 'DepthFirst' | string: Load balancing algorithm for ramp up period.
* **rampUpMinimumHostsPct**: int {minValue: 0, maxValue: 100}: Minimum host percentage for ramp up period.
* **rampUpStartTime**: [Time](#time): Starting time for ramp up period.

## SessionHostHealthCheckFailureDetails
### Properties
* **errorCode**: int (ReadOnly): Error code corresponding for the failure.
* **lastHealthCheckDateTime**: string (ReadOnly): The timestamp of the last update.
* **message**: string (ReadOnly): Failure message: hints on what is wrong and how to recover.

## SessionHostHealthCheckReport
### Properties
* **additionalFailureDetails**: [SessionHostHealthCheckFailureDetails](#sessionhosthealthcheckfailuredetails) (ReadOnly): Additional detailed information on the failure.
* **healthCheckName**: 'AppAttachHealthCheck' | 'DomainJoinedCheck' | 'DomainReachable' | 'DomainTrustCheck' | 'FSLogixHealthCheck' | 'MetaDataServiceCheck' | 'MonitoringAgentCheck' | 'SupportedEncryptionCheck' | 'SxSStackListenerCheck' | 'UrlsAccessibleCheck' | 'WebRTCRedirectorCheck' | string (ReadOnly): Represents the name of the health check operation performed.
* **healthCheckResult**: 'HealthCheckFailed' | 'HealthCheckSucceeded' | 'SessionHostShutdown' | 'Unknown' | string (ReadOnly): Represents the Health state of the health check we performed.

## SessionHostProperties
### Properties
* **agentVersion**: string: Version of agent on SessionHost.
* **allowNewSession**: bool: Allow a new session.
* **assignedUser**: string: User assigned to SessionHost.
* **friendlyName**: string: Friendly name of SessionHost
* **lastHeartBeat**: string: Last heart beat from SessionHost.
* **lastUpdateTime**: string (ReadOnly): The timestamp of the last update.
* **objectId**: string (ReadOnly): ObjectId of SessionHost. (internal use)
* **osVersion**: string: The version of the OS on the session host.
* **resourceId**: string (ReadOnly): Resource Id of SessionHost's underlying virtual machine.
* **sessionHostHealthCheckResults**: [SessionHostHealthCheckReport](#sessionhosthealthcheckreport)[] (ReadOnly): List of SessionHostHealthCheckReports
* **sessions**: int: Number of sessions on SessionHost.
* **status**: 'Available' | 'Disconnected' | 'DomainTrustRelationshipLost' | 'FSLogixNotHealthy' | 'NeedsAssistance' | 'NoHeartbeat' | 'NotJoinedToDomain' | 'Shutdown' | 'SxSStackListenerNotReady' | 'Unavailable' | 'UpgradeFailed' | 'Upgrading' | string: Status for a SessionHost.
* **statusTimestamp**: string (ReadOnly): The timestamp of the status.
* **sxSStackVersion**: string: The version of the side by side stack on the session host.
* **updateErrorMessage**: string: The error message.
* **updateState**: 'Failed' | 'Initial' | 'Pending' | 'Started' | 'Succeeded' | string: Update state of a SessionHost.
* **virtualMachineId**: string (ReadOnly): Virtual Machine Id of SessionHost's underlying virtual machine.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## Time
### Properties
* **hour**: int {minValue: 0, maxValue: 23} (Required): The hour.
* **minute**: int {minValue: 0, maxValue: 59} (Required): The minute.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserSessionProperties
### Properties
* **activeDirectoryUserName**: string: The active directory user name.
* **applicationType**: 'Desktop' | 'RemoteApp' | string: Application type of application.
* **createTime**: string: The timestamp of the user session create.
* **objectId**: string (ReadOnly): ObjectId of user session. (internal use)
* **sessionState**: 'Active' | 'Disconnected' | 'LogOff' | 'Pending' | 'Unknown' | 'UserProfileDiskMounted' | string: State of user session.
* **userPrincipalName**: string: The user principal name.

## WorkspaceProperties
### Properties
* **applicationGroupReferences**: string[]: List of applicationGroup resource Ids.
* **cloudPcResource**: bool (ReadOnly): Is cloud pc resource.
* **description**: string: Description of Workspace.
* **friendlyName**: string: Friendly name of Workspace.
* **objectId**: string (ReadOnly): ObjectId of Workspace. (internal use)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connection associated with the specified resource
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Enabled allows this resource to be accessed from both public and private networks, Disabled allows this resource to only be accessed via private endpoints

