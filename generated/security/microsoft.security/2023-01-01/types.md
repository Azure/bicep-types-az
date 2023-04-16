# Microsoft.Security @ 2023-01-01

## Resource Microsoft.Security/pricings@2023-01-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PricingProperties](#pricingproperties): Pricing data
* **type**: 'Microsoft.Security/pricings' (ReadOnly, DeployTimeConstant): The resource type

## Extension
### Properties
* **additionalExtensionProperties**: [ExtensionAdditionalExtensionProperties](#extensionadditionalextensionproperties): Property values associated with the extension.
* **isEnabled**: 'False' | 'True' | string (Required): Indicates whether the extension is enabled.
* **name**: string (Required): The extension name. Supported values are: <br><br>**AgentlessDiscoveryForKubernetes** - API-based discovery of information about Kubernetes cluster architecture, workload objects, and setup. Required for Kubernetes inventory, identity and network exposure detection, attack path analysis and risk hunting as part of the cloud security explorer.
Available for CloudPosture plan.<br><br>**OnUploadMalwareScanning** - Limits the GB to be scanned per month for each storage account within the subscription. Once this limit reached on a given storage account, Blobs won't be scanned during current calendar month.
Available for StorageAccounts plan.<br><br>**SensitiveDataDiscovery** - Sensitive data discovery identifies Blob storage container with sensitive data such as credentials, credit cards, and more, to help prioritize and investigate security events.
Available for StorageAccounts and CloudPosture plans.<br><br>**ContainerRegistriesVulnerabilityAssessments** - Provides vulnerability management for images stored in your container registries.
Available for CloudPosture and Containers plans.
* **operationStatus**: [OperationStatus](#operationstatus) (ReadOnly): Optional. A status describing the success/failure of the extension's enablement/disablement operation.

## ExtensionAdditionalExtensionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## OperationStatus
### Properties
* **code**: 'Failed' | 'Succeeded' | string: The operation status code.
* **message**: string: Additional information regarding the success/failure of the operation.

## PricingProperties
### Properties
* **deprecated**: bool (ReadOnly): Optional. True if the plan is deprecated. If there are replacing plans they will appear in `replacedBy` property
* **enablementTime**: string (ReadOnly): Optional. If `pricingTier` is `Standard` then this property holds the date of the last time the `pricingTier` was set to `Standard`, when available (e.g 2023-03-01T12:42:42.1921106Z).
* **extensions**: [Extension](#extension)[]: Optional. List of extensions offered under a plan.
* **freeTrialRemainingTime**: string (ReadOnly): The duration left for the subscriptions free trial period - in ISO 8601 format (e.g. P3Y6M4DT12H30M5S).
* **pricingTier**: 'Free' | 'Standard' | string (Required): The pricing tier value. Microsoft Defender for Cloud is provided in two pricing tiers: free and standard. The standard tier offers advanced security capabilities, while the free tier offers basic security features.
* **replacedBy**: string[] (ReadOnly): Optional. List of plans that replace this plan. This property exists only if this plan is deprecated.
* **subPlan**: string: The sub-plan selected for a Standard pricing configuration, when more than one sub-plan is available. Each sub-plan enables a set of security features. When not specified, full plan is applied.

