# Microsoft.OffAzure @ 2020-07-07

## Microsoft.OffAzure/HyperVSites
### Properties
* **apiVersion**: '2020-07-07' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SiteProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.OffAzure/HyperVSites' (ReadOnly, DeployTimeConstant)

## SiteProperties
### Properties
* **agentDetails**: SiteAgentProperties
* **applianceName**: string
* **discoverySolutionId**: string
* **serviceEndpoint**: string (ReadOnly)
* **servicePrincipalIdentityDetails**: SiteSpnProperties

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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.OffAzure/HyperVSites/clusters
### Properties
* **apiVersion**: '2020-07-07' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HyperVClusterProperties
* **type**: 'Microsoft.OffAzure/HyperVSites/clusters' (ReadOnly, DeployTimeConstant)

## HyperVClusterProperties
### Properties
* **createdTimestamp**: string (ReadOnly)
* **errors**: HealthErrorDetails[] (ReadOnly)
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
* **messageParameters**: Dictionary<string,String> (ReadOnly)
* **possibleCauses**: string (ReadOnly)
* **recommendedAction**: string (ReadOnly)
* **severity**: string (ReadOnly)
* **source**: string (ReadOnly)
* **summaryMessage**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.OffAzure/HyperVSites/hosts
### Properties
* **apiVersion**: '2020-07-07' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HyperVHostProperties
* **type**: 'Microsoft.OffAzure/HyperVSites/hosts' (ReadOnly, DeployTimeConstant)

## HyperVHostProperties
### Properties
* **createdTimestamp**: string (ReadOnly)
* **errors**: HealthErrorDetails[] (ReadOnly)
* **fqdn**: string
* **runAsAccountId**: string
* **updatedTimestamp**: string (ReadOnly)
* **version**: string (ReadOnly)

## Microsoft.OffAzure/MasterSites
### Properties
* **apiVersion**: '2020-07-07' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MasterSiteProperties
* **type**: 'Microsoft.OffAzure/MasterSites' (ReadOnly, DeployTimeConstant)

## MasterSiteProperties
### Properties
* **allowMultipleSites**: bool
* **publicNetworkAccess**: string
* **sites**: string[]

## Microsoft.OffAzure/VMwareSites
### Properties
* **apiVersion**: '2020-07-07' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SiteProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.OffAzure/VMwareSites' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.OffAzure/VMwareSites/vCenters
### Properties
* **apiVersion**: '2020-07-07' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VCenterProperties
* **type**: 'Microsoft.OffAzure/VMwareSites/vCenters' (ReadOnly, DeployTimeConstant)

## VCenterProperties
### Properties
* **createdTimestamp**: string (ReadOnly)
* **errors**: HealthErrorDetails[] (ReadOnly)
* **fqdn**: string
* **instanceUuid**: string (ReadOnly)
* **perfStatisticsLevel**: string (ReadOnly)
* **port**: string
* **runAsAccountId**: string
* **updatedTimestamp**: string (ReadOnly)
* **version**: string (ReadOnly)

