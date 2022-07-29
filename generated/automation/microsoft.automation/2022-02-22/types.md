# Microsoft.Automation @ 2022-02-22

## Resource Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups@2022-02-22
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-22' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HybridRunbookWorkerGroupCreateOrUpdatePropertiesOrHybridRunbookWorkerGroupProperties](#hybridrunbookworkergroupcreateorupdatepropertiesorhybridrunbookworkergroupproperties): Gets or sets hybrid runbook worker group create or update properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Resource system metadata.
* **type**: 'Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups' (ReadOnly, DeployTimeConstant): The resource type

## HybridRunbookWorkerGroupCreateOrUpdatePropertiesOrHybridRunbookWorkerGroupProperties
### Properties
* **credential**: [RunAsCredentialAssociationProperty](#runascredentialassociationproperty): Sets the credential of a worker group.
* **groupType**: 'System' | 'User' | string (ReadOnly): Type of the HybridWorkerGroup.

## RunAsCredentialAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the credential.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

