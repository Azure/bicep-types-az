# Microsoft.Easm @ 2022-04-01-preview

## Resource Microsoft.Easm/workspaces@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceResourceProperties](#workspaceresourceproperties): Workspace properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Easm/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Easm/workspaces/labels@2022-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LabelResourceProperties](#labelresourceproperties): Label properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Easm/workspaces/labels' (ReadOnly, DeployTimeConstant): The resource type

## LabelResourceProperties
### Properties
* **color**: string: Label color.
* **displayName**: string: Label display name.
* **provisioningState**: 'Accepted' | 'Canceled' | 'ConfiguringApplication' | 'Creating' | 'CreatingArtifacts' | 'DeletingArtifacts' | 'Failed' | 'InstallingApplication' | 'MigratingApplicationData' | 'NotSpecified' | 'ProvisioningResources' | 'RunningValidations' | 'Succeeded' | string (ReadOnly): Resource provisioning state.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceResourceProperties
### Properties
* **dataPlaneEndpoint**: string (ReadOnly): Data plane endpoint.
* **provisioningState**: 'Accepted' | 'Canceled' | 'ConfiguringApplication' | 'Creating' | 'CreatingArtifacts' | 'DeletingArtifacts' | 'Failed' | 'InstallingApplication' | 'MigratingApplicationData' | 'NotSpecified' | 'ProvisioningResources' | 'RunningValidations' | 'Succeeded' | string (ReadOnly): Resource provisioning state.

