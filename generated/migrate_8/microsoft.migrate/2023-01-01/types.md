# Microsoft.Migrate @ 2023-01-01

## Resource Microsoft.Migrate/migrateProjects@2023-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure location in which project is created.
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MigrateProjectProperties](#migrateprojectproperties): Properties of a migrate project.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Migrate/migrateProjects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/migrateProjects/privateEndpointConnectionProxies@2023-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProxyProperties](#privateendpointconnectionproxyproperties): Properties of a private endpoint connection proxy.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Migrate/migrateProjects/privateEndpointConnectionProxies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/migrateProjects/privateEndpointConnections@2023-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Gets the tag for optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Gets the properties of the object.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Migrate/migrateProjects/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/migrateProjects/solutions@2023-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets or sets the ETAG for optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SolutionProperties](#solutionproperties): Gets or sets the properties of the solution.
* **type**: 'Microsoft.Migrate/migrateProjects/solutions' (ReadOnly, DeployTimeConstant): The resource type

## Function cleanupData (Microsoft.Migrate/migrateProjects/solutions@2023-01-01)
* **Resource**: Microsoft.Migrate/migrateProjects/solutions
* **ApiVersion**: 2023-01-01
* **Output**: any

## Function getConfig (Microsoft.Migrate/migrateProjects/solutions@2023-01-01)
* **Resource**: Microsoft.Migrate/migrateProjects/solutions
* **ApiVersion**: 2023-01-01
* **Output**: [SolutionConfig](#solutionconfig)

## Function refreshSummary (Microsoft.Migrate/migrateProjects@2023-01-01)
* **Resource**: Microsoft.Migrate/migrateProjects
* **ApiVersion**: 2023-01-01
* **Input**: [RefreshSummaryInput](#refreshsummaryinput)
* **Output**: [RefreshSummaryResult](#refreshsummaryresult)

## Function registerTool (Microsoft.Migrate/migrateProjects@2023-01-01)
* **Resource**: Microsoft.Migrate/migrateProjects
* **ApiVersion**: 2023-01-01
* **Input**: [RegisterToolInput](#registertoolinput)
* **Output**: [RegistrationResult](#registrationresult)

## Function registrationDetails (Microsoft.Migrate/migrateProjects@2023-01-01)
* **Resource**: Microsoft.Migrate/migrateProjects
* **ApiVersion**: 2023-01-01
* **Input**: [RegistrationDetailsInput](#registrationdetailsinput)
* **Output**: [RegistrationDetailsResponse](#registrationdetailsresponse)

## Function validate (Microsoft.Migrate/migrateProjects/privateEndpointConnectionProxies@2023-01-01)
* **Resource**: Microsoft.Migrate/migrateProjects/privateEndpointConnectionProxies
* **ApiVersion**: 2023-01-01
* **Input**: [PrivateEndpointConnectionProxy](#privateendpointconnectionproxy)
* **Output**: [PrivateEndpointConnectionProxy](#privateendpointconnectionproxy)

## AadAppDetails
### Properties
* **applicationId**: string
* **tenantId**: string

## GroupConnectivityInformation
### Properties
* **customerVisibleFqdns**: string[]
* **groupId**: string
* **id**: string
* **internalFqdn**: string
* **memberName**: string
* **privateLinkServiceArmRegion**: string
* **redirectMapId**: string

## IpConfiguration
### Properties
* **groupId**: string
* **id**: string
* **linkIdentifier**: string
* **memberName**: string
* **privateIpAddress**: string

## MigrateProjectProperties
### Properties
* **lastSummaryRefreshedTime**: string (ReadOnly): Last summary refresh time.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): Gets the private endpoint connections.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'NotSpecified' | string: Gets or sets the state of public network access.
* **refreshSummaryState**: 'Completed' | 'Failed' | 'InProgress' | 'Started' | string (ReadOnly): Refresh summary state.
* **registeredTools**: ('AppServiceMigrationAssistant' | 'Carbonite' | 'CloudSphere' | 'Cloudamize' | 'CorentTech' | 'DataMigrationAssistant' | 'DatabaseMigrationService' | 'Device42' | 'Flexera' | 'JetStream' | 'Lakeside' | 'Modernization' | 'Movere' | 'RackWare' | 'ServerAssessment' | 'ServerAssessmentV1' | 'ServerDiscovery' | 'ServerDiscovery_Import' | 'ServerMigration' | 'ServerMigration_DataReplication' | 'ServerMigration_Replication' | 'Turbonomic' | 'UnifyCloud' | 'Unknown' | 'Zerto' | string)[] (ReadOnly): Register tools inside project.
* **serviceEndpoint**: string: Service endpoint.
* **summary**: [MigrateProjectPropertiesSummary](#migrateprojectpropertiessummary) (ReadOnly): Project summary.
* **utilityStorageAccountId**: string: Utility storage account id.

## MigrateProjectPropertiesSummary
### Properties
### Additional Properties
* **Additional Properties Type**: [ProjectSummary](#projectsummary)

## PrivateEndpointConnection
### Properties
* **eTag**: string (ReadOnly): Gets the tag for optimistic concurrency control.
* **id**: string (ReadOnly): Relative URL to get this Sites.
* **name**: string (ReadOnly): Gets the name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Gets the properties of the object.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): Gets the resource type.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [ResourceId](#resourceid) (ReadOnly): Defines resource ID of a private endpoint connection.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): Gets the properties of the object.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state.

## PrivateEndpointConnectionProxy
### Properties
* **eTag**: string
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProxyProperties](#privateendpointconnectionproxyproperties): Properties of a private endpoint connection proxy.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProxyProperties
### Properties
* **remotePrivateEndpoint**: [PrivateEndpointDetails](#privateendpointdetails) (ReadOnly): Defines Private endpoint additional details.
* **status**: 'Cancelled' | 'Failed' | 'Running' | 'Succeeded' | string (ReadOnly)

## PrivateEndpointDetails
### Properties
* **connectionDetails**: [IpConfiguration](#ipconfiguration)[]
* **id**: string
* **manualPrivateLinkServiceConnections**: [PrivateLinkServiceConnection](#privatelinkserviceconnection)[]
* **privateLinkServiceConnections**: [PrivateLinkServiceConnection](#privatelinkserviceconnection)[]
* **privateLinkServiceProxies**: [PrivateLinkServiceProxy](#privatelinkserviceproxy)[]

## PrivateLinkServiceConnection
### Properties
* **groupIds**: string[]
* **id**: string
* **name**: string
* **requestMessage**: string

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: Action required.
* **description**: string: Description of the object.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Private link connection state.

## PrivateLinkServiceProxy
### Properties
* **groupConnectivityInformation**: [GroupConnectivityInformation](#groupconnectivityinformation)[]
* **id**: string
* **remotePrivateEndpointConnection**: [ResourceId](#resourceid): Defines resource ID of a private endpoint connection.
* **remotePrivateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate): Private endpoint connection state.

## ProjectSummary
### Properties
* **extendedSummary**: [ProjectSummaryExtendedSummary](#projectsummaryextendedsummary): Extended summary.
* **instanceType**: string (ReadOnly): Instance type.
* **lastSummaryRefreshedTime**: string: Last summary refresh time.
* **refreshSummaryState**: 'Completed' | 'Failed' | 'InProgress' | 'Started' | string: Refresh summary state.

## ProjectSummaryExtendedSummary
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RefreshSummaryInput
### Properties
* **goal**: 'DataCenter' | 'Databases' | 'DesktopVirtualization' | 'Servers' | 'WebApplications' | string: Gets or sets the goal for which summary needs to be refreshed.

## RefreshSummaryResult
### Properties
* **isRefreshed**: bool: Gets or sets a value indicating whether the migrate project summary is refreshed.

## RegisterToolInput
### Properties
* **tool**: 'AppServiceMigrationAssistant' | 'Carbonite' | 'CloudSphere' | 'Cloudamize' | 'CorentTech' | 'DataMigrationAssistant' | 'DatabaseMigrationService' | 'Device42' | 'Flexera' | 'JetStream' | 'Lakeside' | 'Modernization' | 'Movere' | 'RackWare' | 'ServerAssessment' | 'ServerAssessmentV1' | 'ServerDiscovery' | 'ServerDiscovery_Import' | 'ServerMigration' | 'ServerMigration_DataReplication' | 'ServerMigration_Replication' | 'Turbonomic' | 'UnifyCloud' | 'Unknown' | 'Zerto' | string: Gets or sets the tool to be registered.

## RegistrationDetailsInput
### Properties
* **applicationDetails**: [AadAppDetails](#aadappdetails)
* **tool**: 'AppServiceMigrationAssistant' | 'Carbonite' | 'CloudSphere' | 'Cloudamize' | 'CorentTech' | 'DataMigrationAssistant' | 'DatabaseMigrationService' | 'Device42' | 'Flexera' | 'JetStream' | 'Lakeside' | 'Modernization' | 'Movere' | 'RackWare' | 'ServerAssessment' | 'ServerAssessmentV1' | 'ServerDiscovery' | 'ServerDiscovery_Import' | 'ServerMigration' | 'ServerMigration_DataReplication' | 'ServerMigration_Replication' | 'Turbonomic' | 'UnifyCloud' | 'Unknown' | 'Zerto' | string: Gets or sets the tool to be registered.

## RegistrationDetailsResponse
### Properties
* **oneTimeKey**: string
* **serviceEndpoint**: string

## RegistrationResult
### Properties
* **isRegistered**: bool: Gets or sets a value indicating whether the tool is registered or not.

## ResourceId
### Properties
* **id**: string (ReadOnly)

## SolutionConfig
### Properties
* **publisherSasUri**: string: Gets or sets the publisher sas uri for the solution.

## SolutionDetails
### Properties
* **assessmentCount**: int: Gets or sets the count of assessments reported by the solution.
* **extendedDetails**: [SolutionDetailsExtendedDetails](#solutiondetailsextendeddetails): Gets or sets the extended details reported by the solution.
* **groupCount**: int: Gets or sets the count of groups reported by the solution.

## SolutionDetailsExtendedDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SolutionProperties
### Properties
* **cleanupState**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Started' | string: Gets or sets the cleanup state of the solution.
* **details**: [SolutionDetails](#solutiondetails): Gets or sets the details of the solution.
* **goal**: 'DataCenter' | 'Databases' | 'DesktopVirtualization' | 'Servers' | 'WebApplications' | string: Gets or sets the goal of the solution.
* **purpose**: 'Assessment' | 'Discovery' | 'Migration' | string: Gets or sets the purpose of the solution.
* **status**: 'Active' | 'Inactive' | string: Gets or sets the current status of the solution.
* **summary**: [SolutionSummary](#solutionsummary): Gets or sets the summary of the solution.
* **tool**: 'AppServiceMigrationAssistant' | 'Carbonite' | 'CloudSphere' | 'Cloudamize' | 'CorentTech' | 'DataMigrationAssistant' | 'DatabaseMigrationService' | 'Device42' | 'Flexera' | 'JetStream' | 'Lakeside' | 'Modernization' | 'Movere' | 'RackWare' | 'ServerAssessment' | 'ServerAssessmentV1' | 'ServerDiscovery' | 'ServerDiscovery_Import' | 'ServerMigration' | 'ServerMigration_DataReplication' | 'ServerMigration_Replication' | 'Turbonomic' | 'UnifyCloud' | 'Unknown' | 'Zerto' | string: Gets or sets the tool being used in the solution.

## SolutionSummary
### Properties
* **instanceType**: string (ReadOnly): Gets the Instance type.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

