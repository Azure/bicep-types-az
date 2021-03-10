# Microsoft.OffAzure @ 2020-01-01

## Resource Microsoft.OffAzure/HyperVSites@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SiteProperties](#siteproperties)
* **tags**: [HyperVSiteTags](#hypervsitetags)
* **type**: 'Microsoft.OffAzure/HyperVSites' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OffAzure/HyperVSites/clusters@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [HyperVClusterProperties](#hypervclusterproperties)
* **type**: 'Microsoft.OffAzure/HyperVSites/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OffAzure/HyperVSites/hosts@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [HyperVHostProperties](#hypervhostproperties)
* **type**: 'Microsoft.OffAzure/HyperVSites/hosts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OffAzure/VMwareSites@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SiteProperties](#siteproperties)
* **tags**: [VMwareSiteTags](#vmwaresitetags)
* **type**: 'Microsoft.OffAzure/VMwareSites' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OffAzure/VMwareSites/vCenters@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VCenterProperties](#vcenterproperties)
* **type**: 'Microsoft.OffAzure/VMwareSites/vCenters' (ReadOnly, DeployTimeConstant)

## SiteProperties
### Properties
* **agentDetails**: [SiteAgentProperties](#siteagentproperties)
* **applianceName**: string
* **discoverySolutionId**: string
* **serviceEndpoint**: string (ReadOnly)
* **servicePrincipalIdentityDetails**: [SiteSpnProperties](#sitespnproperties)

## SiteAgentProperties
### Properties
* **id**: string (ReadOnly)
* **keyVaultId**: string
* **keyVaultUri**: string
* **lastHeartBeatUtc**: string (ReadOnly)
* **version**: string (ReadOnly)

## SiteSpnProperties
### Properties
* **aadAuthority**: string
* **applicationId**: string
* **audience**: string
* **objectId**: string
* **rawCertData**: string
* **tenantId**: string

## HyperVSiteTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HyperVClusterProperties
### Properties
* **createdTimestamp**: string (ReadOnly)
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly)
* **fqdn**: string
* **functionalLevel**: int (ReadOnly)
* **hostFqdnList**: string[]
* **runAsAccountId**: string
* **status**: string (ReadOnly)
* **updatedTimestamp**: string (ReadOnly)

## HealthErrorDetails
### Properties
* **code**: string (ReadOnly)
* **id**: int (ReadOnly)
* **message**: string (ReadOnly)
* **messageParameters**: [HealthErrorDetailsMessageParameters](#healtherrordetailsmessageparameters) (ReadOnly)
* **possibleCauses**: string (ReadOnly)
* **recommendedAction**: string (ReadOnly)
* **severity**: string (ReadOnly)
* **source**: string (ReadOnly)
* **summaryMessage**: string (ReadOnly)

## HealthErrorDetailsMessageParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HyperVHostProperties
### Properties
* **createdTimestamp**: string (ReadOnly)
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly)
* **fqdn**: string
* **runAsAccountId**: string
* **updatedTimestamp**: string (ReadOnly)
* **version**: string (ReadOnly)

## VMwareSiteTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VCenterProperties
### Properties
* **createdTimestamp**: string (ReadOnly)
* **errors**: [HealthErrorDetails](#healtherrordetails)[] (ReadOnly)
* **fqdn**: string
* **instanceUuid**: string (ReadOnly)
* **perfStatisticsLevel**: string (ReadOnly)
* **port**: string
* **runAsAccountId**: string
* **updatedTimestamp**: string (ReadOnly)
* **version**: string (ReadOnly)

