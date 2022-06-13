# Microsoft.OffAzure @ 2020-07-07

## Resource Microsoft.OffAzure/HyperVSites@2020-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-07' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: eTag for concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure location in which Sites is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties): Nested properties of Hyper-V site.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [HyperVSiteTags](#hypervsitetags): Dictionary of <string>
* **type**: 'Microsoft.OffAzure/HyperVSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/HyperVSites/clusters@2020-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-07' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HyperVClusterProperties](#hypervclusterproperties): Nested properties of the cluster.
* **type**: 'Microsoft.OffAzure/HyperVSites/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/HyperVSites/hosts@2020-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-07' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HyperVHostProperties](#hypervhostproperties): Nested properties.
* **type**: 'Microsoft.OffAzure/HyperVSites/hosts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/MasterSites@2020-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-07' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: eTag for concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure location in which Sites is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MasterSiteProperties](#mastersiteproperties): Nested properties of Master site.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.OffAzure/MasterSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/masterSites/privateEndpointConnections@2020-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-07' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Gets the tag for optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly): Gets the properties of the object.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.OffAzure/masterSites/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/VMwareSites@2020-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-07' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: eTag for concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure location in which Sites is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties): Nested properties of VMWare site.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [VMwareSiteTags](#vmwaresitetags): Dictionary of <string>
* **type**: 'Microsoft.OffAzure/VMwareSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/VMwareSites/vCenters@2020-07-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-07' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VCenterProperties](#vcenterproperties): vCenter nested properties.
* **type**: 'Microsoft.OffAzure/VMwareSites/vCenters' (ReadOnly, DeployTimeConstant): The resource type

## HealthErrorDetails
### Properties
* **code**: string (ReadOnly): Error name.
* **id**: int (ReadOnly): Error ID.
* **message**: string (ReadOnly): Error message.
* **messageParameters**: [HealthErrorDetailsMessageParameters](#healtherrordetailsmessageparameters) (ReadOnly): Message parameters.
* **possibleCauses**: string (ReadOnly): Possible causes of error.
* **recommendedAction**: string (ReadOnly): Recommended action to resolve error.
* **severity**: string (ReadOnly): Error severity.
* **source**: string (ReadOnly): Error source.
* **summaryMessage**: string (ReadOnly): Error summary message.

## HealthErrorDetailsMessageParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HyperVClusterProperties
### Properties
* **createdTimestamp**: string (ReadOnly): Timestamp marking Hyper-V cluster creation.
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly): Errors for Hyper-V clusters.
* **fqdn**: string: FQDN/IPAddress of the Hyper-V cluster.
* **functionalLevel**: int (ReadOnly): Functional level of the Hyper-V cluster.
* **hostFqdnList**: string[]: List of hosts (FQDN) currently being tracked by the cluster.
* **runAsAccountId**: string: Run as account ID of the Hyper-V cluster.
* **status**: string (ReadOnly): Status of the Hyper-V cluster.
* **updatedTimestamp**: string (ReadOnly): Timestamp marking last updated on the Hyper-V cluster.

## HyperVHostProperties
### Properties
* **createdTimestamp**: string (ReadOnly): Timestamp marking Hyper-V host creation.
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly): Errors for Hyper-V hosts.
* **fqdn**: string: FQDN/IPAddress of the Hyper-V host.
* **runAsAccountId**: string: Run as account ID of the Hyper-V host.
* **updatedTimestamp**: string (ReadOnly): Timestamp marking last updated on the Hyper-V host.
* **version**: string (ReadOnly): Version of the Hyper-V host.

## HyperVSiteTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MasterSiteProperties
### Properties
* **allowMultipleSites**: bool: Value indicating whether multiple sites per site type are allowed.
* **customerStorageAccountArmId**: string: Gets or sets a value for customer storage account ARM id.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): Gets the private endpoint connections.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | 'NotSpecified' | string: Gets or sets the state of public network access.
* **sites**: string[]: List of sites that are a part of Master Site.

## PrivateEndpointConnection
### Properties
* **eTag**: string (ReadOnly): Gets the tag for optimistic concurrency control.
* **id**: string (ReadOnly): Relative URL to get this Sites.
* **name**: string (ReadOnly): Gets the name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly): Gets the properties of the object.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): Gets the resource type.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [ResourceId](#resourceid) (ReadOnly)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate)
* **provisioningState**: 'Accepted' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string

## ResourceId
### Properties
* **id**: string (ReadOnly)

## SiteAgentProperties
### Properties
* **id**: string (ReadOnly): ID of the agent.
* **keyVaultId**: string: Key vault ARM Id.
* **keyVaultUri**: string: Key vault URI.
* **lastHeartBeatUtc**: string (ReadOnly): Last heartbeat time of the agent in UTC.
* **version**: string (ReadOnly): Version of the agent.

## SiteProperties
### Properties
* **agentDetails**: [SiteAgentProperties](#siteagentproperties): On-premises agent details.
* **applianceName**: string: Appliance Name.
* **discoverySolutionId**: string: ARM ID of migration hub solution for SDS.
* **serviceEndpoint**: string (ReadOnly): Service endpoint.
* **servicePrincipalIdentityDetails**: [SiteSpnProperties](#sitespnproperties): Service principal identity details used by agent for communication to the service.

## SiteSpnProperties
### Properties
* **aadAuthority**: string: AAD Authority URL which was used to request the token for the service principal.
* **applicationId**: string: Application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **audience**: string: Intended audience for the service principal.
* **objectId**: string: Object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
* **rawCertData**: string: Raw certificate data for building certificate expiry flows.
* **tenantId**: string: Tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## VCenterProperties
### Properties
* **createdTimestamp**: string (ReadOnly): Timestamp marking vCenter creation.
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly): Error details.
* **fqdn**: string: FQDN/IPAddress of the vCenter.
* **instanceUuid**: string (ReadOnly): Instance UUID of the vCenter.
* **perfStatisticsLevel**: string (ReadOnly): Performance statistics enabled on the vCenter.
* **port**: string: Port of the vCenter.
* **runAsAccountId**: string: Run as account ID of the vCenter.
* **updatedTimestamp**: string (ReadOnly): Timestamp marking last updated on the vCenter.
* **version**: string (ReadOnly): Version of the vCenter.

## VMwareSiteTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

