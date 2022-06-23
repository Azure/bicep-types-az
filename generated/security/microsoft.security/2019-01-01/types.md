# Microsoft.Security @ 2019-01-01

## Resource Microsoft.Security/advancedThreatProtectionSettings@2019-01-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [AdvancedThreatProtectionProperties](#advancedthreatprotectionproperties): The Advanced Threat Protection settings.
* **type**: 'Microsoft.Security/advancedThreatProtectionSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/locations/alerts@2019-01-01 (ReadOnly)
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertProperties](#alertproperties) (ReadOnly): describes security alert properties.
* **type**: 'Microsoft.Security/locations/alerts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/settings@2019-01-01
* **Valid Scope(s)**: Subscription
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'MCAS' | 'WDATP' | string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Security/settings' (ReadOnly, DeployTimeConstant): The resource type
### DataExportSettings
#### Properties
* **kind**: 'DataExportSettings' (Required): the kind of the settings string (DataExportSettings)
* **properties**: [DataExportSettingProperties](#dataexportsettingproperties): Data export setting data


## AdvancedThreatProtectionProperties
### Properties
* **isEnabled**: bool: Indicates whether Advanced Threat Protection is enabled.

## AlertConfidenceReason
### Properties
* **reason**: string (ReadOnly): description of the confidence reason
* **type**: string (ReadOnly): Type of confidence factor

## AlertEntity
### Properties
* **type**: string (ReadOnly): Type of entity
### Additional Properties
* **Additional Properties Type**: any

## AlertExtendedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AlertProperties
### Properties
* **actionTaken**: string (ReadOnly): The action that was taken as a response to the alert (Active, Blocked etc.)
* **alertDisplayName**: string (ReadOnly): Display name of the alert type
* **alertName**: string (ReadOnly): Name of the alert type
* **associatedResource**: string (ReadOnly): Azure resource ID of the associated resource
* **canBeInvestigated**: bool (ReadOnly): Whether this alert can be investigated with Azure Security Center
* **compromisedEntity**: string (ReadOnly): The entity that the incident happened on
* **confidenceReasons**: [AlertConfidenceReason](#alertconfidencereason)[]: reasons the alert got the confidenceScore value
* **confidenceScore**: int (ReadOnly): level of confidence we have on the alert
* **correlationKey**: string (ReadOnly): Alerts with the same CorrelationKey will be grouped together in Ibiza.
* **description**: string (ReadOnly): Description of the incident and what it means
* **detectedTimeUtc**: string (ReadOnly): The time the incident was detected by the vendor
* **entities**: [AlertEntity](#alertentity)[]: objects that are related to this alerts
* **extendedProperties**: [AlertExtendedProperties](#alertextendedproperties): Changing set of properties depending on the alert type.
* **instanceId**: string (ReadOnly): Instance ID of the alert.
* **isIncident**: bool (ReadOnly): Whether this alert is for incident type or not (otherwise - single alert)
* **remediationSteps**: string (ReadOnly): Recommended steps to reradiate the incident
* **reportedSeverity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): Estimated severity of this alert
* **reportedTimeUtc**: string (ReadOnly): The time the incident was reported to Microsoft.Security in UTC
* **state**: string (ReadOnly): State of the alert (Active, Dismissed etc.)
* **subscriptionId**: string (ReadOnly): Azure subscription ID of the resource that had the security alert or the subscription ID of the workspace that this resource reports to
* **systemSource**: string (ReadOnly): The type of the alerted resource (Azure, Non-Azure)
* **vendorName**: string (ReadOnly): Name of the vendor that discovered the incident
* **workspaceArmId**: string (ReadOnly): Azure resource ID of the workspace that the alert was reported to.

## DataExportSettingProperties
### Properties
* **enabled**: bool (Required): Is the data export setting is enabled

