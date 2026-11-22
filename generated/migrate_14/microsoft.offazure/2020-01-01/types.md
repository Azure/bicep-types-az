# Microsoft.OffAzure @ 2020-01-01

## Resource Microsoft.OffAzure/HyperVSites@2020-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: eTag for concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure location in which Sites is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties): Nested properties of Hyper-V site.
* **tags**: [HyperVSiteTags](#hypervsitetags): Dictionary of <string>
* **type**: 'Microsoft.OffAzure/HyperVSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/HyperVSites/clusters@2020-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HyperVClusterProperties](#hypervclusterproperties): Nested properties of the cluster.
* **type**: 'Microsoft.OffAzure/HyperVSites/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/HyperVSites/hosts@2020-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HyperVHostProperties](#hypervhostproperties): Nested properties.
* **type**: 'Microsoft.OffAzure/HyperVSites/hosts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/VMwareSites@2020-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: eTag for concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Azure location in which Sites is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SiteProperties](#siteproperties): Nested properties of VMWare site.
* **tags**: [VMwareSiteTags](#vmwaresitetags): Dictionary of <string>
* **type**: 'Microsoft.OffAzure/VMwareSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OffAzure/VMwareSites/vCenters@2020-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VCenterProperties](#vcenterproperties): vCenter nested properties.
* **type**: 'Microsoft.OffAzure/VMwareSites/vCenters' (ReadOnly, DeployTimeConstant): The resource type

## Function healthSummary (Microsoft.OffAzure/HyperVSites@2020-01-01)
* **Resource**: Microsoft.OffAzure/HyperVSites
* **ApiVersion**: 2020-01-01
* **Output**: [SiteHealthSummaryCollection](#sitehealthsummarycollection)

## Function healthSummary (Microsoft.OffAzure/VMwareSites@2020-01-01)
* **Resource**: Microsoft.OffAzure/VMwareSites
* **ApiVersion**: 2020-01-01
* **Output**: [SiteHealthSummaryCollection](#sitehealthsummarycollection)

## Function refresh (Microsoft.OffAzure/HyperVSites@2020-01-01)
* **Resource**: Microsoft.OffAzure/HyperVSites
* **ApiVersion**: 2020-01-01
* **Output**: any

## Function refresh (Microsoft.OffAzure/VMwareSites@2020-01-01)
* **Resource**: Microsoft.OffAzure/VMwareSites
* **ApiVersion**: 2020-01-01
* **Output**: any

## Function start (Microsoft.OffAzure/VMwareSites/machines@2020-01-01)
* **Resource**: Microsoft.OffAzure/VMwareSites/machines
* **ApiVersion**: 2020-01-01
* **Output**: any

## Function stop (Microsoft.OffAzure/VMwareSites/machines@2020-01-01)
* **Resource**: Microsoft.OffAzure/VMwareSites/machines
* **ApiVersion**: 2020-01-01
* **Output**: any

## Function summary (Microsoft.OffAzure/HyperVSites@2020-01-01)
* **Resource**: Microsoft.OffAzure/HyperVSites
* **ApiVersion**: 2020-01-01
* **Output**: [HyperVSiteUsage](#hypervsiteusage)

## Function summary (Microsoft.OffAzure/VMwareSites@2020-01-01)
* **Resource**: Microsoft.OffAzure/VMwareSites
* **ApiVersion**: 2020-01-01
* **Output**: [VMwareSiteUsage](#vmwaresiteusage)

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

## HyperVSiteUsage
### Properties
* **clusterCount**: int: Number of clusters part of the site.
* **hostCount**: int: Number of hosts part of the site.
* **machineCount**: int: Number of machines discovered in the site.
* **runAsAccountCount**: int: Number of run as accounts in the site.

## SiteAgentProperties
### Properties
* **id**: string (ReadOnly): ID of the agent.
* **keyVaultId**: string: Key vault ARM Id.
* **keyVaultUri**: string: Key vault URI.
* **lastHeartBeatUtc**: string (ReadOnly): Last heartbeat time of the agent in UTC.
* **version**: string (ReadOnly): Version of the agent.

## SiteHealthSummary
### Properties
* **affectedObjectsCount**: int: Count of affected objects.
* **affectedResources**: string[]: Affected resources.
* **affectedResourceType**: string (ReadOnly): Affected resource type.
* **applianceName**: string (ReadOnly): Appliance name.
* **errorCode**: string (ReadOnly): Error code.
* **errorId**: int (ReadOnly): Error Id.
* **errorMessage**: string (ReadOnly): Error message.
* **hitCount**: int: Hit count of the error.
* **remediationGuidance**: string (ReadOnly): Remediation guidance.
* **severity**: string (ReadOnly): Severity of error.
* **summaryMessage**: string (ReadOnly): Summary message.

## SiteHealthSummaryCollection
### Properties
* **nextLink**: string (ReadOnly): Value of next link.
* **value**: [SiteHealthSummary](#sitehealthsummary)[] (ReadOnly): List of SiteHealthSummary.

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

## VMwareSiteUsage
### Properties
* **machineCount**: int: Number of machines discovered in the site.
* **runAsAccountCount**: int: Number of run as accounts in the site.
* **vCenterCount**: int: Number of vCenters part of the site.

