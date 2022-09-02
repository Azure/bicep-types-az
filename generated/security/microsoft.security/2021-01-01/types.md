# Microsoft.Security @ 2021-01-01

## Resource Microsoft.Security/locations/alerts@2021-01-01 (ReadOnly)
* **Valid Scope(s)**: Subscription, ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertProperties](#alertproperties) (ReadOnly): describes security alert properties.
* **type**: 'Microsoft.Security/locations/alerts' (ReadOnly, DeployTimeConstant): The resource type

## AlertEntity
### Properties
* **type**: string (ReadOnly): Type of entity
### Additional Properties
* **Additional Properties Type**: any

## AlertExtendedLinks
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AlertExtendedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AlertProperties
### Properties
* **alertDisplayName**: string (ReadOnly): The display name of the alert.
* **alertType**: string (ReadOnly): Unique identifier for the detection logic (all alert instances from the same detection logic will have the same alertType).
* **alertUri**: string (ReadOnly): A direct link to the alert page in Azure Portal.
* **compromisedEntity**: string (ReadOnly): The display name of the resource most related to this alert.
* **correlationKey**: string (ReadOnly): Key for corelating related alerts. Alerts with the same correlation key considered to be related.
* **description**: string (ReadOnly): Description of the suspicious activity that was detected.
* **endTimeUtc**: string (ReadOnly): The UTC time of the last event or activity included in the alert in ISO8601 format.
* **entities**: [AlertEntity](#alertentity)[] (ReadOnly): A list of entities related to the alert.
* **extendedLinks**: [AlertExtendedLinks](#alertextendedlinks)[] (ReadOnly): Links related to the alert
* **extendedProperties**: [AlertExtendedProperties](#alertextendedproperties): Custom properties for the alert.
* **intent**: 'Collection' | 'CommandAndControl' | 'CredentialAccess' | 'DefenseEvasion' | 'Discovery' | 'Execution' | 'Exfiltration' | 'Exploitation' | 'Impact' | 'InitialAccess' | 'LateralMovement' | 'Persistence' | 'PreAttack' | 'PrivilegeEscalation' | 'Probing' | 'Unknown' | string (ReadOnly): The kill chain related intent behind the alert. For list of supported values, and explanations of Azure Security Center's supported kill chain intents.
* **isIncident**: bool (ReadOnly): This field determines whether the alert is an incident (a compound grouping of several alerts) or a single alert.
* **processingEndTimeUtc**: string (ReadOnly): The UTC processing end time of the alert in ISO8601 format.
* **productComponentName**: string (ReadOnly): The name of Azure Security Center pricing tier which powering this alert. Learn more: https://docs.microsoft.com/en-us/azure/security-center/security-center-pricing
* **productName**: string (ReadOnly): The name of the product which published this alert (Azure Security Center, Azure ATP, Microsoft Defender ATP, O365 ATP, MCAS, and so on).
* **remediationSteps**: string[] (ReadOnly): Manual action items to take to remediate the alert.
* **resourceIdentifiers**: [ResourceIdentifier](#resourceidentifier)[] (ReadOnly): The resource identifiers that can be used to direct the alert to the right product exposure group (tenant, workspace, subscription etc.). There can be multiple identifiers of different type per alert.
* **severity**: 'High' | 'Informational' | 'Low' | 'Medium' | string (ReadOnly): The risk level of the threat that was detected. Learn more: https://docs.microsoft.com/en-us/azure/security-center/security-center-alerts-overview#how-are-alerts-classified.
* **startTimeUtc**: string (ReadOnly): The UTC time of the first event or activity included in the alert in ISO8601 format.
* **status**: 'Active' | 'Dismissed' | 'Resolved' | string (ReadOnly): The life cycle status of the alert.
* **systemAlertId**: string (ReadOnly): Unique identifier for the alert.
* **timeGeneratedUtc**: string (ReadOnly): The UTC time the alert was generated in ISO8601 format.
* **vendorName**: string (ReadOnly): The name of the vendor that raises the alert.

## ResourceIdentifier
* **Discriminator**: type

### Base Properties

### AzureResourceIdentifier
#### Properties
* **azureResourceId**: string (ReadOnly): ARM resource identifier for the cloud resource being alerted on
* **type**: 'AzureResource' (Required): There can be multiple identifiers of different type per alert, this field specify the identifier type.

### LogAnalyticsIdentifier
#### Properties
* **agentId**: string (ReadOnly): (optional) The LogAnalytics agent id reporting the event that this alert is based on.
* **type**: 'LogAnalytics' (Required): There can be multiple identifiers of different type per alert, this field specify the identifier type.
* **workspaceId**: string (ReadOnly): The LogAnalytics workspace id that stores this alert.
* **workspaceResourceGroup**: string (ReadOnly): The azure resource group for the LogAnalytics workspace storing this alert
* **workspaceSubscriptionId**: string (ReadOnly): The azure subscription id for the LogAnalytics workspace storing this alert.


