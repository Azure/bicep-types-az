# Microsoft.ResourceConnector @ 2021-10-31-preview

## Resource Microsoft.ResourceConnector/appliances@2021-10-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-10-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplianceProperties](#applianceproperties): The set of properties specific to an Appliance
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ResourceConnector/appliances' (ReadOnly, DeployTimeConstant): The resource type

## Function listClusterUserCredential (Microsoft.ResourceConnector/appliances@2021-10-31-preview)
* **Resource**: Microsoft.ResourceConnector/appliances
* **ApiVersion**: 2021-10-31-preview
* **Output**: [ApplianceListCredentialResults](#appliancelistcredentialresults)

## ApplianceCredentialKubeconfig
### Properties
* **name**: 'clusterUser' | string (ReadOnly): Name which contains the role of the kubeconfig.
* **value**: string (ReadOnly): Contains the kubeconfig value.

## ApplianceListCredentialResults
### Properties
* **hybridConnectionConfig**: [HybridConnectionConfig](#hybridconnectionconfig) (ReadOnly): Contains the REP (rendezvous endpoint) and “Listener” access token from notification service (NS).
* **kubeconfigs**: [ApplianceCredentialKubeconfig](#appliancecredentialkubeconfig)[] (ReadOnly): The list of appliance kubeconfigs.

## ApplianceProperties
### Properties
* **distro**: 'AKSEdge' | string: Represents a supported Fabric/Infra. (AKSEdge etc...).
* **infrastructureConfig**: [AppliancePropertiesInfrastructureConfig](#appliancepropertiesinfrastructureconfig): Contains infrastructure information about the Appliance
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response.
* **publicKey**: string: Certificates pair used to download MSI certificate from HIS
* **status**: 'Connected' | 'Running' | 'Validating' | 'WaitingForHeartbeat' | string (ReadOnly): Appliance’s health and state of connection to on-prem
* **version**: string (ReadOnly): Version of the Appliance

## AppliancePropertiesInfrastructureConfig
### Properties
* **provider**: 'HCI' | 'SCVMM' | 'VMWare' | string: Information about the connected appliance.

## HybridConnectionConfig
### Properties
* **expirationTime**: int (ReadOnly): Timestamp when this token will be expired.
* **hybridConnectionName**: string (ReadOnly): Name of the connection
* **relay**: string (ReadOnly): Name of the notification service.
* **token**: string (ReadOnly): Listener access token

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | string: The identity type.

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

