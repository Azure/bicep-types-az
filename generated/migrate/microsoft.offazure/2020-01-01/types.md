# Microsoft.OffAzure @ 2020-01-01

## Resource Microsoft.OffAzure/HyperVSites@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SiteProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.OffAzure/HyperVSites' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OffAzure/HyperVSites/clusters@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HyperVClusterProperties
* **type**: 'Microsoft.OffAzure/HyperVSites/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OffAzure/HyperVSites/hosts@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: HyperVHostProperties
* **type**: 'Microsoft.OffAzure/HyperVSites/hosts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OffAzure/VMwareSites@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SiteProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.OffAzure/VMwareSites' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OffAzure/VMwareSites/vCenters@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VCenterProperties
* **type**: 'Microsoft.OffAzure/VMwareSites/vCenters' (ReadOnly, DeployTimeConstant)

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
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HyperVHostProperties
### Properties
* **createdTimestamp**: string (ReadOnly)
* **errors**: HealthErrorDetails[] (ReadOnly)
* **fqdn**: string
* **runAsAccountId**: string
* **updatedTimestamp**: string (ReadOnly)
* **version**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

