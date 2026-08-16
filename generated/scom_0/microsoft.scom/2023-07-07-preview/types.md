# Microsoft.Scom @ 2023-07-07-preview

## Resource Microsoft.Scom/managedInstances@2023-07-07-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-07-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedIdentity](#managedidentity): The Azure Active Directory identity of the SCOM instance
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MonitoringInstanceProperties](#monitoringinstanceproperties): The properties of a SCOM instance resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Scom/managedInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Scom/managedInstances/managedGateways@2023-07-07-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-07-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedGatewayProperties](#managedgatewayproperties) (ReadOnly): The properties of a gateway resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Scom/managedInstances/managedGateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Scom/managedInstances/monitoredResources@2023-07-07-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-07-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-_]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MonitoredResourceProperties](#monitoredresourceproperties) (ReadOnly): The properties of a monitored resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Scom/managedInstances/monitoredResources' (ReadOnly, DeployTimeConstant): The resource type

## Function linkLogAnalytics (Microsoft.Scom/managedInstances@2023-07-07-preview)
* **Resource**: Microsoft.Scom/managedInstances
* **ApiVersion**: 2023-07-07-preview
* **Input**: [LogAnalyticsConfiguration](#loganalyticsconfiguration)
* **Output**: [LogAnalyticsConfiguration](#loganalyticsconfiguration)

## Function patchServers (Microsoft.Scom/managedInstances@2023-07-07-preview)
* **Resource**: Microsoft.Scom/managedInstances
* **ApiVersion**: 2023-07-07-preview
* **Output**: [PatchServersResponseProperties](#patchserversresponseproperties)

## Function setServerCount (Microsoft.Scom/managedInstances@2023-07-07-preview)
* **Resource**: Microsoft.Scom/managedInstances
* **ApiVersion**: 2023-07-07-preview
* **Input**: [ScalingProperties](#scalingproperties)
* **Output**: [SetServerCountResponseProperties](#setservercountresponseproperties)

## Function unlinkLogAnalytics (Microsoft.Scom/managedInstances@2023-07-07-preview)
* **Resource**: Microsoft.Scom/managedInstances
* **ApiVersion**: 2023-07-07-preview
* **Output**: [UnlinkLogAnalyticsResponseProperties](#unlinkloganalyticsresponseproperties)

## Function updateLogAnalytics (Microsoft.Scom/managedInstances@2023-07-07-preview)
* **Resource**: Microsoft.Scom/managedInstances
* **ApiVersion**: 2023-07-07-preview
* **Input**: [LogAnalyticsUpdateConfiguration](#loganalyticsupdateconfiguration)
* **Output**: [LogAnalyticsUpdateConfiguration](#loganalyticsupdateconfiguration)

## AzureHybridBenefitProperties
### Properties
* **scomLicenseType**: 'AzureHybridBenefit' | 'None' | string: SCOM license type. Maximize savings by using license you already own
* **sqlServerLicenseType**: 'AzureHybridBenefit' | 'None' | string: SQL Server license type. Maximize savings by using Azure Hybrid Benefit for SQL Server with license you already own
* **windowsServerLicenseType**: 'AzureHybridBenefit' | 'None' | string: Specifies that the image or disk that is being used was licensed on-premises. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json)

## DatabaseInstanceProperties
### Properties
* **databaseFqdn**: string (ReadOnly): Fully qualified domain name of existing database instance
* **databaseInstanceId**: string: Resource Id of existing database instance
* **dwDatabaseId**: string (ReadOnly): Resource Id of warehouse database on database instance
* **dwDatabaseName**: string (ReadOnly): Name of warehouse database on database instance
* **operationalDatabaseId**: string (ReadOnly): Resource Id of operational database on database instance

## DomainControllerProperties
### Properties
* **dnsServer**: string: IP address of DNS server
* **domainName**: string: Fully qualified domain name
* **ouPath**: string: Organizational Unit path in which the SCOM servers will be present

## DomainUserCredentials
### Properties
* **keyVaultUrl**: string: Key vault url to get the domain username and password
* **passwordSecret**: string: Domain Password secret
* **userNameSecret**: string: Domain user name secret

## GmsaDetails
### Properties
* **dnsName**: string: Frontend DNS name for Load Balancer which will be used by Agents to initiate communication
* **gmsaAccount**: string: gMSA account under which context all Management Server services will run
* **loadBalancerIP**: string: Frontend IP configuration for Load Balancer, which should be an available IP in customer VNet
* **managementServerGroupName**: string: OnPrem AD Computer Group where we will join VMs for ease of management

## LogAnalyticsConfiguration
### Properties
* **dataTypes**: ('Audit' | 'Event' | 'Performance' | 'State' | string)[]: The types of data to be ingested to Log Analytics workspace.
* **importData**: bool: A one-time optional parameter to import data of last 7 days.
* **workspaceId**: string: The resource ID of the Log Analytics workspace to be used.

## LogAnalyticsUpdateConfiguration
### Properties
* **dataTypes**: ('Audit' | 'Event' | 'Performance' | 'State' | string)[]: The types of data to be ingested to Log Analytics workspace.

## ManagedGatewayProperties
### Properties
* **computerName**: string: ComputerName of the gateway to be monitored.
* **connectionStatus**: string (ReadOnly): The connection status of the gateway resource.
* **domainName**: string: The domain name associated with the gateway to be monitored.
* **healthStatus**: string (ReadOnly): The health status of the gateway resource.
* **installType**: string (ReadOnly): Install type of gateway resource.
* **managementServerEndpoint**: string (ReadOnly): The management server endpoint to which the gateway is directed.
* **provisioningState**: string (ReadOnly)
* **resourceId**: string: ArmId of the gateway to be monitored.
* **resourceLocation**: string: Location of the gateway to be monitored.
* **version**: string (ReadOnly): The version of the gateway resource.

## ManagedIdentity
### Properties
* **principalId**: string (ReadOnly): System Assigned Identity ObjectId.
* **tenantId**: string (ReadOnly): The Azure Active Directory tenant id.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string: The identity type
* **userAssignedIdentities**: [ManagedIdentityUserAssignedIdentities](#managedidentityuserassignedidentities): The resource ids of the user assigned identities to use

## ManagedIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentity](#useridentity)

## ManagedInstanceOperationStatus
### Properties
* **id**: string (ReadOnly): Operation id
* **operationName**: string (ReadOnly): Operation Name
* **operationState**: string (ReadOnly): Operation status

## ManagementServerProperties
### Properties
* **fqdn**: string (ReadOnly): Management server Fully Qualified Domain Name.
* **healthState**: string (ReadOnly): Management server health state.
* **serverName**: string (ReadOnly): Management server Name
* **serverRoles**: string (ReadOnly): Represent whether the Server is a Management Server and/or Web Console Server.
* **vmResId**: string (ReadOnly): Azure VM Resource Id of the Management server.

## MonitoredResourceProperties
### Properties
* **agentVersion**: string (ReadOnly): The version of the monitored resource agent version.
* **computerName**: string: ComputerName of the monitored resource.
* **connectionStatus**: string (ReadOnly): The connection status of the monitored resource.
* **domainName**: string: The domain name associated with the monitored resource.
* **healthStatus**: string (ReadOnly): The health status of the monitored resource.
* **installType**: string (ReadOnly): Install type of monitored resource.
* **managementServerEndpoint**: string (ReadOnly): The management server endpoint to which the monitored resource is directed.
* **provisioningState**: string (ReadOnly)
* **resourceId**: string: ArmId of the monitored resource.
* **resourceLocation**: string: Location of the monitored resource.

## MonitoringInstanceProperties
### Properties
* **azureHybridBenefit**: [AzureHybridBenefitProperties](#azurehybridbenefitproperties): The properties to enable Azure Hybrid benefit for various SCOM infrastructure license.
* **databaseInstance**: [DatabaseInstanceProperties](#databaseinstanceproperties): The database instance where the SCOM Operational and Warehouse databases will be stored.
* **domainController**: [DomainControllerProperties](#domaincontrollerproperties): Domain controller details
* **domainUserCredentials**: [DomainUserCredentials](#domainusercredentials): Domain user which will be used to join VMs to domain and login to VMs.
* **gmsaDetails**: [GmsaDetails](#gmsadetails): Gmsa Details for load balancer and vmss
* **logAnalyticsProperties**: [LogAnalyticsConfiguration](#loganalyticsconfiguration) (ReadOnly): Details of Log Analytics workspace and data being ingested.
* **managementEndpoints**: [ManagementServerProperties](#managementserverproperties)[] (ReadOnly): List of management server endpoints
* **operationsStatus**: [ManagedInstanceOperationStatus](#managedinstanceoperationstatus)[] (ReadOnly): Gets status of current and latest SCOM managed instance operations.
* **productVersion**: string (ReadOnly): SCOM product version to be installed on instance
* **provisioningState**: string (ReadOnly): Gets or sets the provisioning state.
* **vNetSubnetId**: string: Virtual Network subnet id on which Aquila instance will be provisioned

## PatchServersResponseProperties
### Properties
* **status**: string: Status of the patch operation

## ScalingProperties
### Properties
* **serverCount**: int {minValue: 1, maxValue: 100}: Required management server count

## SetServerCountResponseProperties
### Properties
* **serverCount**: int: Management server count

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

## UnlinkLogAnalyticsResponseProperties
### Properties
* **status**: string: Status of the unlink operation

## UserIdentity
### Properties
* **clientId**: string (ReadOnly): The Azure Active Directory client id.
* **principalId**: string (ReadOnly): The Azure Active Directory principal id.

