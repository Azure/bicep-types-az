# Microsoft.MobilePacketCore @ 2023-05-15-preview

## Resource Microsoft.MobilePacketCore/networkFunctions@2023-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkFunctionResourceProperties](#networkfunctionresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MobilePacketCore/networkFunctions' (ReadOnly, DeployTimeConstant): The resource type

## NetworkFunctionResourceProperties
### Properties
* **capacity**: int: Capacity of the network function in units of 10000.  This represents the session count or the Simultaneously Attached Users (SAU) count as applicable
* **deploymentNotes**: string: User provided deployment notes.  This is used to optionally provide details about the NF deployment
* **infrastructureElementCount**: int (ReadOnly): Count of infrastructure elements used by this network function (vCPUs, in units of 8)
* **networkFunctionAdministrativeState**: 'Commissioned' | 'Decommissioned' | string (Required): Administrative state of the network function
* **networkFunctionOperationalStatus**: 'Active' | 'Inactive' | 'InstantiatedNotProvisioned' | 'InstantiatedProvisioned' | string (ReadOnly): Operational state of the network function
* **networkFunctionType**: 'AMF' | 'EMS' | 'MME' | 'N3IWF' | 'NRF' | 'NSSF' | 'OperationsPolicyManager' | 'RemotePaaS' | 'SMF' | 'Saegw' | 'SaegwControlPlane' | 'SaegwUserPlane' | 'UPF' | 'ePDG' | string (Required): Type of network function
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **sku**: 'AzureLab' | 'AzureProduction' | 'NexusLab' | 'NexusProduction' | string (Required): Provisioned SKU Value.
* **userDescription**: string: User provided description

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

