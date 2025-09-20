# Microsoft.Migrate @ 2024-03-03-preview

## Resource Microsoft.Migrate/assessmentProjects/hypervcollectors@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorPropertiesBaseWithAgent](#collectorpropertiesbasewithagent): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/hypervcollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/importcollectors@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorPropertiesBase](#collectorpropertiesbase): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/importcollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/importSqlCollectors@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ImportSqlCollectorProperties](#importsqlcollectorproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/importSqlCollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/servercollectors@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorPropertiesBaseWithAgent](#collectorpropertiesbasewithagent): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/servercollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/sqlcollectors@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorPropertiesBaseWithAgent](#collectorpropertiesbasewithagent): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/sqlcollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/vmwarecollectors@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorPropertiesBaseWithAgent](#collectorpropertiesbasewithagent): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/vmwarecollectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/assessmentProjects/webAppCollectors@2024-03-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[^<>&:\?/#]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CollectorPropertiesBaseWithAgent](#collectorpropertiesbasewithagent): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Migrate/assessmentProjects/webAppCollectors' (ReadOnly, DeployTimeConstant): The resource type

## CollectorAgentPropertiesBase
### Properties
* **id**: string: Gets the collector agent id.
* **lastHeartbeatUtc**: string: Gets the collector last heartbeat time.
* **spnDetails**: [CollectorAgentSpnPropertiesBase](#collectoragentspnpropertiesbase): Gets or sets the SPN details.
* **version**: string: Gets the collector agent version.

## CollectorAgentSpnPropertiesBase
### Properties
* **applicationId**: string: Gets the AAD application id.
* **audience**: string: Gets the AAD audience url.
* **authority**: string: Gets the AAD authority endpoint.
* **objectId**: string: Gets the object id of the AAD application.
* **tenantId**: string: Gets the tenant id of the AAD application.

## CollectorPropertiesBase
### Properties
* **createdTimestamp**: string (ReadOnly): Gets the Timestamp when collector was created.
* **discoverySiteId**: string: Gets the discovery site id.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **updatedTimestamp**: string (ReadOnly): Timestamp when collector was last updated.

## CollectorPropertiesBaseWithAgent
### Properties
* **agentProperties**: [CollectorAgentPropertiesBase](#collectoragentpropertiesbase): Gets or sets the collector agent properties.
* **createdTimestamp**: string (ReadOnly): Gets the Timestamp when collector was created.
* **discoverySiteId**: string: Gets the discovery site id.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **updatedTimestamp**: string (ReadOnly): Timestamp when collector was last updated.

## ImportSqlCollectorProperties
### Properties
* **createdTimestamp**: string (ReadOnly): When was import SQL collector first created.
* **discoverySiteId**: string: The sql db extended details.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **updatedTimestamp**: string (ReadOnly): When was import SQL collector last updated.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

