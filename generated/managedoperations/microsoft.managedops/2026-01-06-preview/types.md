# Microsoft.ManagedOps @ 2026-01-06-preview

## Resource Microsoft.ManagedOps/managedOps@2026-01-06-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2026-01-06-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "default"} (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedOpsProperties](#managedopsproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ManagedOps/managedOps' (ReadOnly, DeployTimeConstant): The resource type

## AzureMonitorConfiguration
### Properties
* **azureMonitorWorkspaceId**: string (Required): Azure monitor workspace resource ID used by the service.

## AzureMonitorInformation
### Properties
* **dcrId**: string (Required): ID of Data Collection Rule (DCR) associated with this service.
* **enablementStatus**: 'Disabled' | 'Enabled' | 'Failed' | 'InProgress' | string (Required): Indicates whether the service is enabled.
* **errorDetails**: [ErrorDetails](#errordetails): Optional error message if the service is in Failed state.

## ChangeTrackingConfiguration
### Properties
* **logAnalyticsWorkspaceId**: string (Required): Log analytics workspace resource ID used by the service.

## ChangeTrackingInformation
### Properties
* **dcrId**: string (Required): ID of Data Collection Rule (DCR) associated with this service.
* **enablementStatus**: 'Disabled' | 'Enabled' | 'Failed' | 'InProgress' | string (Required): Indicates whether the service is enabled.
* **errorDetails**: [ErrorDetails](#errordetails): Optional error message if the service is in Failed state.

## DefenderCspmInformation
### Properties
* **enablementStatus**: 'Disabled' | 'Enabled' | 'Failed' | 'InProgress' | string (Required): Indicates whether the service is enabled.
* **errorDetails**: [ErrorDetails](#errordetails): Optional error message if the service is in Failed state.

## DefenderForServersInformation
### Properties
* **enablementStatus**: 'Disabled' | 'Enabled' | 'Failed' | 'InProgress' | string (Required): Indicates whether the service is enabled.
* **errorDetails**: [ErrorDetails](#errordetails): Optional error message if the service is in Failed state.

## DesiredConfiguration
### Properties
* **azureMonitorInsights**: [AzureMonitorConfiguration](#azuremonitorconfiguration) (Required): Configuration for the Azure Monitor Insights service.
* **changeTrackingAndInventory**: [ChangeTrackingConfiguration](#changetrackingconfiguration) (Required): Configuration for the Change Tracking and Inventory service.
* **defenderCspm**: 'Disable' | 'Enable' | string: Desired enablement state of the Defender Cloud Security Posture Management (CSPM) service.
* **defenderForServers**: 'Disable' | 'Enable' | string: Desired enablement state of the Defender For Servers service.
* **userAssignedManagedIdentityId**: string (Required): User assigned Managed Identity used to perform operations on machines managed by Ops360.

## ErrorDetails
### Properties
* **code**: string (Required): Error code.
* **message**: string (Required): Detailed error message.

## GuestConfigurationInformation
### Properties
* **enablementStatus**: 'Disabled' | 'Enabled' | 'Failed' | 'InProgress' | string (Required): Indicates whether the service is enabled.
* **errorDetails**: [ErrorDetails](#errordetails): Optional error message if the service is in Failed state.

## ManagedOpsProperties
### Properties
* **desiredConfiguration**: [DesiredConfiguration](#desiredconfiguration) (Required): Desired configuration input by the user.
* **policyAssignmentProperties**: [PolicyAssignmentProperties](#policyassignmentproperties) (ReadOnly): Policy assignments created for managing services.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **services**: [ServiceInformation](#serviceinformation) (ReadOnly): Services provisioned by this resource.
* **sku**: [Sku](#sku): Product plan details of this resource.

## PolicyAssignmentProperties
### Properties
* **policyInitiativeAssignmentId**: string (Required): Policy initiative assignment ID.

## ServiceInformation
### Properties
* **azureMonitorInsights**: [AzureMonitorInformation](#azuremonitorinformation) (ReadOnly): Azure Monitor Insights service information.
* **azurePolicyAndMachineConfiguration**: [GuestConfigurationInformation](#guestconfigurationinformation) (ReadOnly): Azure Policy and Machine Configuration service information.
* **azureUpdateManager**: [UpdateManagerInformation](#updatemanagerinformation) (ReadOnly): Azure Update Manager service information.
* **changeTrackingAndInventory**: [ChangeTrackingInformation](#changetrackinginformation) (ReadOnly): Change Tracking and Inventory service information.
* **defenderCspm**: [DefenderCspmInformation](#defendercspminformation) (ReadOnly): Defender for Cloud's Cloud security posture management (CSPM) service information.
* **defenderForServers**: [DefenderForServersInformation](#defenderforserversinformation) (ReadOnly): Defender for Servers service information.

## Sku
### Properties
* **name**: 'ManagedOps' | string (Required): Name of the SKU.
* **tier**: 'Essential' | string (Required): Pricing tier of the SKU.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## UpdateManagerInformation
### Properties
* **enablementStatus**: 'Disabled' | 'Enabled' | 'Failed' | 'InProgress' | string (Required): Indicates whether the service is enabled.
* **errorDetails**: [ErrorDetails](#errordetails): Optional error message if the service is in Failed state.

