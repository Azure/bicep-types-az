# Microsoft.PortalServices @ 2024-04-01-preview

## Resource Microsoft.PortalServices/copilotSettings@2024-04-01-preview
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: Tenant
### Properties
* **apiVersion**: '2024-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [CopilotSettingsProperties](#copilotsettingsproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.PortalServices/copilotSettings' (ReadOnly, DeployTimeConstant): The resource type

## Function compilefile (Microsoft.PortalServices@2024-04-01-preview)
* **Resource**: Microsoft.PortalServices
* **ApiVersion**: 2024-04-01-preview
* **Input**: [PortalTenantCompileFileProperties](#portaltenantcompilefileproperties)
* **Output**: [PortalTenantCompileFileResult](#portaltenantcompilefileresult)

## CopilotSettingsProperties
### Properties
* **accessControlEnabled**: bool (Required): Boolean indicating if role-based access control is enabled for copilot in this tenant.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the last provisioning operation performed on the resource.

## PortalTenantCompileFileProperties
### Properties
* **contents**: [PortalTenantCompileFilePropertiesContents](#portaltenantcompilefilepropertiescontents) (Required): The contents of the file.
* **files**: [PortalTenantCompileFilePropertiesFiles](#portaltenantcompilefilepropertiesfiles): The contents of referenced files. The property name is the relative file path and the value is its contents.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Ready' | 'Running' | 'Succeeded' | 'Updating' | string (ReadOnly): The current registration or provisioning state which only appears in the response.
* **stringSource**: [PortalTenantCompileFilePropertiesStringSource](#portaltenantcompilefilepropertiesstringsource): The contents of the string source.

## PortalTenantCompileFilePropertiesContents
### Properties
### Additional Properties
* **Additional Properties Type**: any

## PortalTenantCompileFilePropertiesFiles
### Properties
### Additional Properties
* **Additional Properties Type**: any

## PortalTenantCompileFilePropertiesStringSource
### Properties
### Additional Properties
* **Additional Properties Type**: any

## PortalTenantCompileFileResult
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

