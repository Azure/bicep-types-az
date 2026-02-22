# Microsoft.DesktopVirtualization @ 2025-11-01-preview

## Resource Microsoft.DesktopVirtualization/appAttachPackages@2025-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 100, pattern: "^[a-z0-9]([a-z0-9]|(-(?!-))){1,61}[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AppAttachPackageProperties](#appattachpackageproperties) (Required): Detailed properties for App Attach Package
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/appAttachPackages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/applicationGroups@2025-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): If etag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **kind**: string {pattern: "^[-\w\._,\(\)]+$"}: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): The geo-location where the resource lives
* **managedBy**: string: The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Details of the resource plan.
* **properties**: [ApplicationGroupProperties](#applicationgroupproperties) (Required): Detailed properties for ApplicationGroup
* **sku**: [Sku](#sku): The SKU (Stock Keeping Unit) assigned to this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/applicationGroups/applications@2025-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 24, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationProperties](#applicationproperties) (Required): Detailed properties for Application
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/applicationGroups/desktops@2025-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 24, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DesktopProperties](#desktopproperties) (ReadOnly): Detailed properties for Desktop
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/applicationGroups/desktops' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools@2025-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): If etag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **kind**: string {pattern: "^[-\w\._,\(\)]+$"}: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): The geo-location where the resource lives
* **managedBy**: string: The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Details of the resource plan.
* **properties**: [HostPoolProperties](#hostpoolproperties) (Required): Detailed properties for HostPool
* **sku**: [Sku](#sku): The SKU (Stock Keeping Unit) assigned to this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/hostPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools/activeSessionHostConfigurations@2025-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ActiveSessionHostConfigurationProperties](#activesessionhostconfigurationproperties) (ReadOnly): Detailed properties for ActiveSessionHostConfiguration
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/hostPools/activeSessionHostConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools/msixPackages@2025-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 100, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MsixPackageProperties](#msixpackageproperties) (Required): Detailed properties for MSIX Package
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/hostPools/msixPackages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools/privateEndpointConnections@2025-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/hostPools/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools/sessionHostConfigurations@2025-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SessionHostConfigurationProperties](#sessionhostconfigurationproperties) (Required): Detailed properties for SessionHostConfiguration
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/hostPools/sessionHostConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools/sessionHostManagements@2025-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SessionHostManagementProperties](#sessionhostmanagementproperties) (Required): Detailed properties for SessionHostManagement
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/hostPools/sessionHostManagements' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools/sessionHosts@2025-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 48, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SessionHostProperties](#sessionhostproperties) (ReadOnly): Detailed properties for SessionHost
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/hostPools/sessionHosts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/hostPools/sessionHosts/userSessions@2025-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 24} (Required, DeployTimeConstant): The resource name
* **properties**: [UserSessionProperties](#usersessionproperties) (ReadOnly): Detailed properties for UserSession
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/hostPools/sessionHosts/userSessions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/scalingPlans@2025-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): If etag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **kind**: string {pattern: "^[-\w\._,\(\)]+$"}: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): The geo-location where the resource lives
* **managedBy**: string: The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Details of the resource plan.
* **properties**: [ScalingPlanProperties](#scalingplanproperties) (Required): Detailed properties for scaling plan.
* **sku**: [Sku](#sku): The SKU (Stock Keeping Unit) assigned to this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/scalingPlans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/scalingPlans/personalSchedules@2025-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 64, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScalingPlanPersonalScheduleProperties](#scalingplanpersonalscheduleproperties) (Required): Detailed properties for ScalingPlanPersonalSchedule
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/scalingPlans/personalSchedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/scalingPlans/pooledSchedules@2025-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 64, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScalingPlanPooledScheduleProperties](#scalingplanpooledscheduleproperties) (Required): Detailed properties for ScalingPlanPooledSchedule
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/scalingPlans/pooledSchedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/workspaces@2025-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): If etag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **kind**: string {pattern: "^[-\w\._,\(\)]+$"}: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
* **location**: string (Required): The geo-location where the resource lives
* **managedBy**: string: The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
* **name**: string {minLength: 3, maxLength: 64, pattern: "^[A-Za-z0-9@.\-_ ]*$"} (Required, DeployTimeConstant): The resource name
* **plan**: [Plan](#plan): Details of the resource plan.
* **properties**: [WorkspaceProperties](#workspaceproperties): Detailed properties for Workspace
* **sku**: [Sku](#sku): The SKU (Stock Keeping Unit) assigned to this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DesktopVirtualization/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DesktopVirtualization/workspaces/privateEndpointConnections@2025-11-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DesktopVirtualization/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Function listRegistrationTokens (Microsoft.DesktopVirtualization/hostPools@2025-11-01-preview)
* **Resource**: Microsoft.DesktopVirtualization/hostPools
* **ApiVersion**: 2025-11-01-preview
* **Output**: [RegistrationTokenList](#registrationtokenlist)

## ActiveDirectoryInfoProperties
### Properties
* **domainCredentials**: [KeyVaultCredentialsProperties](#keyvaultcredentialsproperties) (Required): Credentials needed to create the virtual machine.
* **domainName**: string: The domain a virtual machine connected to a hostpool will join.
* **ouPath**: string (Required): The organizational unit(OU) path.

## ActiveSessionHostConfigurationProperties
### Properties
* **availabilityZones**: int[]: Value for availability zones to be used by the session host. Should be from [1,2,3].
* **bootDiagnosticsInfo**: [BootDiagnosticsInfoProperties](#bootdiagnosticsinfoproperties): Boot Diagnostics information.
* **customConfigurationScriptUrl**: string: The uri to the storage blob containing the arm template to be run on the virtual machine after provisioning.
* **diskInfo**: [DiskInfoProperties](#diskinfoproperties) (Required): Disk information.
* **domainInfo**: [DomainInfoProperties](#domaininfoproperties) (Required): Domain configurations of session hosts.
* **friendlyName**: string {maxLength: 260}: Friendly name to describe this version of the SessionHostConfiguration
* **imageInfo**: [ImageInfoProperties](#imageinfoproperties) (Required): Image configurations of the HostPool.
* **networkInfo**: [NetworkInfoProperties](#networkinfoproperties) (Required): Network information.
* **securityInfo**: [SecurityInfoProperties](#securityinfoproperties): Security information.
* **version**: string (ReadOnly): The timestamp of the last update.
* **vmAdminCredentials**: [KeyVaultCredentialsProperties](#keyvaultcredentialsproperties) (Required): Local Admin credentials for session hosts.
* **vmLocation**: string: The Location for the session host to be created in. It will default to the location of the hostpool if not provided.
* **vmNamePrefix**: string {maxLength: 11} (Required): The prefix that should be associated with session host names
* **vmResourceGroup**: string: The ResourceGroup for the session hosts to be created in. It will default to the ResourceGroup of the hostpool if not provided.
* **vmSizeId**: string (Required): The id of the size of a virtual machine connected to a hostpool. Example: Standard_D2as_v6
* **vmTags**: [ActiveSessionHostConfigurationPropertiesVmTags](#activesessionhostconfigurationpropertiesvmtags): Hashtable that lists key/value pair tags to apply to the VMs

## ActiveSessionHostConfigurationPropertiesVmTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **customData**: string: Field that can be populated with custom data and filtered on in list GET calls
* **deploymentScope**: 'Geographical' | 'Regional' | string: DeploymentScope type for AppAttachPackage.
* **failHealthCheckOnStagingFailure**: 'DoNotFail' | 'NeedsAssistance' | 'Unhealthy' | string: Parameter indicating how the health check should behave if this package fails staging
* **hostPoolReferences**: string[]: List of Hostpool resource Ids.
* **image**: [AppAttachPackageInfoProperties](#appattachpackageinfoproperties): Detailed properties for App Attach Package
* **keyVaultURL**: string: URL path to certificate name located in keyVault
* **packageLookbackUrl**: string: Lookback url to third party control plane, is null for native app attach packages
* **packageOwnerName**: string: Specific name of package owner, is "AppAttach" for native app attach packages
* **provisioningState**: 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): The provisioning state of the App Attach Package.

## ApplicationGroupProperties
### Properties
* **applicationGroupType**: 'Desktop' | 'RemoteApp' | string (Required): Resource Type of ApplicationGroup.
* **cloudPcResource**: bool (ReadOnly): Is cloud pc resource.
* **deploymentScope**: 'Geographical' | 'Regional' | string (ReadOnly): DeploymentScope type for ApplicationGroup.
* **description**: string: Description of ApplicationGroup.
* **friendlyName**: string: Friendly name of ApplicationGroup.
* **hostPoolArmPath**: string (Required): HostPool arm path of ApplicationGroup.
* **objectId**: string (ReadOnly): ObjectId of ApplicationGroup. (internal use)
* **oboTenantId**: string: Tenant that the resource is being requested on behalf of.
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

## AzureActiveDirectoryInfoProperties
### Properties
* **mdmProviderGuid**: string (Required): The Mobile Device Management(MDM) guid.

## BootDiagnosticsInfoProperties
### Properties
* **enabled**: bool: Whether boot diagnostics should be enabled on the Virtual Machine.
* **storageUri**: string: Uri of the storage account to use for placing the console output and screenshot. <br><br>If storageUri is not specified while enabling boot diagnostics, managed storage will be used.

## CreateDeleteProperties
### Properties
* **rampDownMaximumHostPoolSize**: int {minValue: 0}: Maximum number of session hosts that may be created by the Scaling Service. This requires the assigned hostpool to have a session host config property.
* **rampDownMinimumHostPoolSize**: int {minValue: 0, maxValue: 59}: Minimum number of session hosts that will be be created by the Scaling Service. Scaling will not delete any hosts when this limit is met. This requires the assigned hostpool to have a session host config property.
* **rampUpMaximumHostPoolSize**: int {minValue: 0}: Maximum number of session hosts that may be created by the Scaling Service. This requires the assigned hostpool to have a session host config property.
* **rampUpMinimumHostPoolSize**: int {minValue: 0, maxValue: 59}: Minimum number of session hosts that will be be created by the Scaling Service. Scaling will not delete any hosts when this limit is met. This requires the assigned hostpool to have a session host config property.

## CustomInfoProperties
### Properties
* **resourceId**: string (Required): The resource ID of the image.

## DesktopProperties
### Properties
* **description**: string: Description of Desktop.
* **friendlyName**: string: Friendly name of Desktop.
* **iconContent**: any (ReadOnly): The icon a 64 bit string as a byte array.
* **iconHash**: string (ReadOnly): Hash of the icon.
* **objectId**: string (ReadOnly): ObjectId of Desktop. (internal use)

## DiffDiskProperties
### Properties
* **option**: 'Local' | string: Specifies the ephemeral disk settings for operating system disk.
* **placement**: 'CacheDisk' | 'ResourceDisk' | string: Gets or sets specifies the ephemeral disk placement for operating system disk. The defaulting behavior is: CacheDisk if one is configured for the VM size otherwise ResourceDisk is used. Refer to the VM size documentation for Windows VM at https://docs.microsoft.com/azure/virtual-machines/windows/sizes and Linux VM at https://docs.microsoft.com/azure/virtual-machines/linux/sizes to check which VM sizes exposes a cache disk. Possible values include: 'CacheDisk', 'ResourceDisk'.

## DiskInfoProperties
### Properties
* **diffDiskSettings**: [DiffDiskProperties](#diffdiskproperties): Specifies the ephemeral disk settings for the operating system disk used by the virtual machine.
* **managedDisk**: [ManagedDiskProperties](#manageddiskproperties): The managed disk parameters.

## DomainInfoProperties
### Properties
* **activeDirectoryInfo**: [ActiveDirectoryInfoProperties](#activedirectoryinfoproperties): Active directory info. Only one should be populated based on the join type.
* **azureActiveDirectoryInfo**: [AzureActiveDirectoryInfoProperties](#azureactivedirectoryinfoproperties): Azure active directory info. Only one should be populated based on the join type.
* **joinType**: 'ActiveDirectory' | 'AzureActiveDirectory' | string (Required): The type of domain join done by the virtual machine.

## HostPoolProperties
### Properties
* **agentUpdate**: [AgentUpdateProperties](#agentupdateproperties): The session host configuration for updating agent, monitoring agent, and stack component.
* **allowRDPShortPathWithPrivateLink**: 'Disabled' | 'Enabled' | string: Controls if the use of RDPShortPath transport is allowed, possibly bypassing Private Link routes.
* **appAttachPackageReferences**: string[] (ReadOnly): List of App Attach Package links.
* **applicationGroupReferences**: string[] (ReadOnly): List of applicationGroup links.
* **cloudPcResource**: bool (ReadOnly): Is cloud pc resource.
* **customRdpProperty**: string: Custom rdp property of HostPool.
* **deploymentScope**: 'Geographical' | 'Regional' | string: DeploymentScope type for HostPool.
* **description**: string: Description of HostPool.
* **directUDP**: 'Default' | 'Disabled' | 'Enabled' | string: Default: AVD-wide settings are used to determine connection availability, Enabled: UDP will attempt this connection type when making connections. This means that this connection is possible, but is not guaranteed, as there are other factors that may prevent this connection type, Disabled: UDP will not attempt this connection type when making connections
* **friendlyName**: string: Friendly name of HostPool.
* **hostPoolType**: 'BYODesktop' | 'Personal' | 'Pooled' | string (Required): HostPool type for desktop.
* **loadBalancerType**: 'BreadthFirst' | 'DepthFirst' | 'MultiplePersistent' | 'Persistent' | string (Required): The type of the load balancer.
* **managedPrivateUDP**: 'Default' | 'Disabled' | 'Enabled' | string: Default: AVD-wide settings are used to determine connection availability, Enabled: UDP will attempt this connection type when making connections. This means that this connection is possible, but is not guaranteed, as there are other factors that may prevent this connection type, Disabled: UDP will not attempt this connection type when making connections
* **managementType**: 'Automated' | 'Standard' | string: The type of management for this hostpool, Automated or Standard. The default value is Automated.
* **maxSessionLimit**: int: The max session limit of HostPool.
* **objectId**: string (ReadOnly): ObjectId of HostPool. (internal use)
* **oboTenantId**: string: Tenant that the resource is being requested on behalf of.
* **personalDesktopAssignmentType**: 'Automatic' | 'Direct' | string: PersonalDesktopAssignment type for HostPool.
* **preferredAppGroupType**: 'Desktop' | 'None' | 'RailApplications' | string (Required): The type of preferred application group type, default to Desktop Application Group
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connection associated with the specified resource
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'EnabledForClientsOnly' | 'EnabledForSessionHostsOnly' | string: Enabled allows this resource to be accessed from both public and private networks, Disabled allows this resource to only be accessed via private endpoints
* **publicUDP**: 'Default' | 'Disabled' | 'Enabled' | string: Default: AVD-wide settings are used to determine connection availability, Enabled: UDP will attempt this connection type when making connections. This means that this connection is possible, but is not guaranteed, as there are other factors that may prevent this connection type, Disabled: UDP will not attempt this connection type when making connections
* **registrationInfo**: [RegistrationInfo](#registrationinfo): The registration info of HostPool.
* **relayUDP**: 'Default' | 'Disabled' | 'Enabled' | string: Default: AVD-wide settings are used to determine connection availability, Enabled: UDP will attempt this connection type when making connections. This means that this connection is possible, but is not guaranteed, as there are other factors that may prevent this connection type, Disabled: UDP will not attempt this connection type when making connections
* **ring**: int: The ring number of HostPool.
* **ssoadfsAuthority**: string: URL to customer ADFS server for signing WVD SSO certificates.
* **ssoClientId**: string: ClientId for the registered Relying Party used to issue WVD SSO certificates.
* **ssoClientSecretKeyVaultPath**: string: Path to Azure KeyVault storing the secret used for communication to ADFS.
* **ssoSecretType**: 'Certificate' | 'CertificateInKeyVault' | 'SharedKey' | 'SharedKeyInKeyVault' | string: The type of single sign on Secret Type.
* **startVMOnConnect**: bool: The flag to turn on/off StartVMOnConnect feature.
* **validationEnvironment**: bool: Is validation environment.
* **vmTemplate**: string: VM template for sessionhosts configuration within hostpool.

## HostPoolUpdateConfigurationProperties
### Properties
* **deleteOriginalVm**: bool: Whether not to save original disk. False by default.
* **logOffDelayMinutes**: int (Required): Grace period before logging off users in minutes.
* **logOffMessage**: string {maxLength: 260}: Log off message sent to user for logoff. Default value is an empty string.
* **maxVmsRemoved**: int {minValue: 1} (Required): The maximum number of virtual machines to be removed during hostpool update.

## ImageInfoProperties
### Properties
* **customInfo**: [CustomInfoProperties](#custominfoproperties): The values to uniquely identify a custom image. Only one should be populated based on the image type.
* **marketplaceInfo**: [MarketplaceInfoProperties](#marketplaceinfoproperties): The values to uniquely identify a marketplace image. Only one should be populated based on the image type.
* **type**: 'Custom' | 'Marketplace' | string (Required): The type of image session hosts use in the hostpool.

## KeyVaultCredentialsProperties
### Properties
* **passwordKeyVaultSecretUri**: string (Required): The uri to access the secret that the password is stored in.
* **usernameKeyVaultSecretUri**: string (Required): The uri to access the secret that the username is stored in.

## MaintenanceWindowProperties
### Properties
* **dayOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday': Day of the week.
* **hour**: int: The update start hour of the day. (0 - 23)

## ManagedDiskProperties
### Properties
* **type**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | string: Managed Disk information.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## MarketplaceInfoProperties
### Properties
* **exactVersion**: string (Required): The version of the image.
* **offer**: string (Required): The offer of the image.
* **publisher**: string (Required): The publisher of the image.
* **sku**: string (Required): The SKU of the image.

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

## NetworkInfoProperties
### Properties
* **securityGroupId**: string: The resource ID of the security group. Any allowable/open ports should be specified in the Network Security Group(NSG).
* **subnetId**: string (Required): The resource ID of the subnet.

## Plan
### Properties
* **name**: string (Required): A user defined name of the 3rd Party Artifact that is being procured.
* **product**: string (Required): The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding.
* **promotionCode**: string: A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
* **publisher**: string (Required): The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
* **version**: string: The version of the desired product/artifact.

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
* **token**: string: The registration token base64 encoded string.

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
* **createDelete**: [CreateDeleteProperties](#createdeleteproperties): The properties that control how Scaling will manage the size of the hostpool by creating and deleting hosts.
* **daysOfWeek**: ('Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday')[]: Set of days of the week on which this schedule is active.
* **name**: string (ReadOnly): Name of the ScalingPlanPooledSchedule
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
* **scalingMethod**: 'CreateDeletePowerManage' | 'PowerManage' | string: The desired scaling method to be used to scale the hosts in the assigned host pool.

## ScalingPlanProperties
### Properties
* **description**: string: Description of scaling plan.
* **exclusionTag**: string: Exclusion tag for scaling plan.
* **friendlyName**: string: User friendly name of scaling plan.
* **hostPoolReferences**: [ScalingHostPoolReference](#scalinghostpoolreference)[]: List of ScalingHostPoolReference definitions.
* **hostPoolType**: 'Personal' | 'Pooled' | string: HostPool type for desktop.
* **objectId**: string (ReadOnly): ObjectId of scaling plan. (internal use)
* **schedules**: [ScalingSchedule](#scalingschedule)[]: List of ScalingPlanPooledSchedule definitions.
* **timeZone**: string (Required): Timezone of the scaling plan.

## ScalingSchedule
### Properties
* **createDelete**: [CreateDeleteProperties](#createdeleteproperties): The properties that control how Scaling will manage the size of the hostpool by creating and deleting hosts.
* **daysOfWeek**: ('Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday')[]: Set of days of the week on which this schedule is active.
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
* **scalingMethod**: 'CreateDeletePowerManage' | 'PowerManage' | string: The desired scaling method to be used to scale the hosts in the assigned host pool.

## SecurityInfoProperties
### Properties
* **secureBootEnabled**: bool: Whether to use secureBoot on the virtual machine.
* **type**: 'ConfidentialVM' | 'Standard' | 'TrustedLaunch' | string: The security type used by virtual machine in hostpool session host. Default is Standard.
* **vTpmEnabled**: bool: Whether to use vTpm on the virtual machine.

## SessionHostConfigurationProperties
### Properties
* **availabilityZones**: int[]: Value for availability zones to be used by the session host. Should be from [1,2,3].
* **bootDiagnosticsInfo**: [BootDiagnosticsInfoProperties](#bootdiagnosticsinfoproperties): Boot Diagnostics Information
* **customConfigurationScriptUrl**: string: The uri to the storage blob containing the arm template to be run on the virtual machine after provisioning.
* **diskInfo**: [DiskInfoProperties](#diskinfoproperties) (Required): Disk Information
* **domainInfo**: [DomainInfoProperties](#domaininfoproperties) (Required): Domain configurations of session hosts.
* **friendlyName**: string {maxLength: 260}: Friendly name to describe this version of the SessionHostConfiguration.
* **imageInfo**: [ImageInfoProperties](#imageinfoproperties) (Required): Image configurations of HostPool.
* **networkInfo**: [NetworkInfoProperties](#networkinfoproperties) (Required): Network information.
* **provisioningState**: 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state of the Session Host Configuration.
* **securityInfo**: [SecurityInfoProperties](#securityinfoproperties): Security Information
* **version**: string (ReadOnly): The timestamp of the last update.
* **vmAdminCredentials**: [KeyVaultCredentialsProperties](#keyvaultcredentialsproperties) (Required): Local Admin credentials for session hosts."
* **vmLocation**: string: The Location for the session host to be created in. It will default to the location of the hostpool if not provided
* **vmNamePrefix**: string {maxLength: 11} (Required): The prefix that should be associated with session host names
* **vmResourceGroup**: string: The ResourceGroup for the session hosts to be created in. It will default to the ResourceGroup of the hostpool if not provided.
* **vmSizeId**: string (Required): The id of the size of a virtual machine connected to a hostpool. Example: Standard_D2as_v6
* **vmTags**: [SessionHostConfigurationPropertiesVmTags](#sessionhostconfigurationpropertiesvmtags): Hashtable that lists key/value pair tags to apply to the VMs

## SessionHostConfigurationPropertiesVmTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## SessionHostManagementProperties
### Properties
* **failedSessionHostCleanupPolicy**: 'KeepAll' | 'KeepNone' | 'KeepOne' | string: The policy that should be applied when the Session Host provisioning operation fails.
* **provisioning**: [SessionHostProvisioningConfigurationProperties](#sessionhostprovisioningconfigurationproperties): Parameters that apply when session hosts are provisioned.
* **scheduledDateTimeZone**: string (Required): Time zone for sessionHostManagement operations as defined in https://docs.microsoft.com/dotnet/api/system.timezoneinfo.findsystemtimezonebyid. Must be set if useLocalTime is true.
* **update**: [HostPoolUpdateConfigurationProperties](#hostpoolupdateconfigurationproperties) (Required): Parameters for a hostpool update.

## SessionHostProperties
### Properties
* **activeSessions**: int (ReadOnly): Number of active sessions on SessionHost.
* **agentVersion**: string (ReadOnly): Version of agent on SessionHost.
* **allowNewSession**: bool: Allow a new session.
* **assignedUser**: string: User assigned to SessionHost.
* **disconnectedSessions**: int (ReadOnly): Number of disconnected sessions on SessionHost.
* **friendlyName**: string: Friendly name of SessionHost
* **lastHeartBeat**: string (ReadOnly): Last heart beat from SessionHost.
* **lastSessionHostUpdateTime**: string (ReadOnly): The last time update was completed.
* **lastUpdateTime**: string (ReadOnly): The timestamp of the last update.
* **objectId**: string (ReadOnly): ObjectId of SessionHost. (internal use)
* **osVersion**: string (ReadOnly): The version of the OS on the session host.
* **pendingSessions**: int (ReadOnly): Number of pending sessions on SessionHost.
* **resourceId**: string (ReadOnly): Resource Id of SessionHost's underlying virtual machine.
* **sessionHostConfiguration**: string (ReadOnly): SessionHostConfiguration version reference at the time the update is initiated, in the format of date time. Example: 2024-04-26T04:56:45Z
* **sessionHostHealthCheckResults**: [SessionHostHealthCheckReport](#sessionhosthealthcheckreport)[] (ReadOnly): List of SessionHostHealthCheckReports
* **sessions**: int (ReadOnly): Number of sessions on SessionHost.
* **status**: 'Available' | 'Disconnected' | 'DomainTrustRelationshipLost' | 'FSLogixNotHealthy' | 'NeedsAssistance' | 'NoHeartbeat' | 'NotJoinedToDomain' | 'Shutdown' | 'SxSStackListenerNotReady' | 'Unavailable' | 'UpgradeFailed' | 'Upgrading' | string (ReadOnly): Status for a SessionHost.
* **statusTimestamp**: string (ReadOnly): The timestamp of the status.
* **sxSStackVersion**: string (ReadOnly): The version of the side by side stack on the session host.
* **updateErrorMessage**: string (ReadOnly): The error message.
* **updateState**: 'Failed' | 'Initial' | 'Pending' | 'Started' | 'Succeeded' | string (ReadOnly): Update state of a SessionHost.
* **virtualMachineId**: string (ReadOnly): Virtual Machine Id of SessionHost's underlying virtual machine.

## SessionHostProvisioningConfigurationProperties
### Properties
* **canaryPolicy**: 'Always' | 'Auto' | 'Never' | string: Policy on whether a Canary VM(a single VM to validate the configuration) should be provisioned during a session host provisioning operation.
* **instanceCount**: int {minValue: 1}: The number of session hosts to exist in the Host Pool.
* **setDrainMode**: bool: Whether the session host should be set in drain mode following provisioning.

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. E.g. P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

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

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

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
* **deploymentScope**: 'Geographical' | 'Regional' | string: DeploymentScope type for Workspace.
* **description**: string: Description of Workspace.
* **friendlyName**: string: Friendly name of Workspace.
* **objectId**: string (ReadOnly): ObjectId of Workspace. (internal use)
* **oboTenantId**: string: Tenant that the resource is being requested on behalf of.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connection associated with the specified resource
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Enabled allows this resource to be accessed from both public and private networks, Disabled allows this resource to only be accessed via private endpoints

