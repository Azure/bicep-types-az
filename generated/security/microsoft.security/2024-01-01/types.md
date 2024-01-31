# Microsoft.Security @ 2024-01-01

## Resource Microsoft.Security/pricings@2024-01-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
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
* **enforce**: 'False' | 'True' | string: If set to "False", it allows the descendants of this scope to override the pricing configuration set on this scope (allows setting inherited="False"). If set to "True", it prevents overrides and forces this pricing configuration on all the descendants of this scope. This field is only available for subscription-level pricing.
* **extensions**: [Extension](#extension)[]: Optional. List of extensions offered under a plan.
* **freeTrialRemainingTime**: string (ReadOnly): The duration left for the subscriptions free trial period - in ISO 8601 format (e.g. P3Y6M4DT12H30M5S).
* **inherited**: 'False' | 'True' | string (ReadOnly): "inherited" = "True" indicates that the current scope inherits its pricing configuration from its parent. The ID of the parent scope that provides the inherited configuration is displayed in the "inheritedFrom" field. On the other hand, "inherited" = "False" indicates that the current scope has its own pricing configuration explicitly set, and does not inherit from its parent. This field is read only and available only for resource-level pricing.
* **inheritedFrom**: string (ReadOnly): The id of the scope inherited from. "Null" if not inherited. This field is only available for resource-level pricing.
* **pricingTier**: 'Free' | 'Standard' | string (Required): Indicates whether the Defender plan is enabled on the selected scope. Microsoft Defender for Cloud is provided in two pricing tiers: free and standard. The standard tier offers advanced security capabilities, while the free tier offers basic security features.
* **replacedBy**: string[] (ReadOnly): Optional. List of plans that replace this plan. This property exists only if this plan is deprecated.
* **resourcesCoverageStatus**: 'FullyCovered' | 'NotCovered' | 'PartiallyCovered' | string (ReadOnly): This field is available for subscription-level only, and reflects the coverage status of the resources under the subscription. Please note: The "pricingTier" field reflects the plan status of the subscription. However, since the plan status can also be defined at the resource level, there might be misalignment between the subscription's plan status and the resource status. This field helps indicate the coverage status of the resources.
* **subPlan**: string: The sub-plan selected for a Standard pricing configuration, when more than one sub-plan is available. Each sub-plan enables a set of security features. When not specified, full plan is applied. For VirtualMachines plan, available sub plans are 'P1' & 'P2', where for resource level only 'P1' sub plan is supported.

