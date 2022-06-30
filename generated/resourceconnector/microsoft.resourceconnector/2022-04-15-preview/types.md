# Microsoft.ResourceConnector @ 2022-04-15-preview

## Resource Microsoft.ResourceConnector/appliances@2022-04-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplianceProperties](#applianceproperties): The set of properties specific to an Appliance
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ResourceConnector/appliances' (ReadOnly, DeployTimeConstant): The resource type

## Function listClusterCustomerUserCredential (Microsoft.ResourceConnector/appliances@2022-04-15-preview)
* **Resource**: Microsoft.ResourceConnector/appliances
* **ApiVersion**: 2022-04-15-preview
* **Output**: [ApplianceListClusterCustomerUserCredentialResults](#appliancelistclustercustomerusercredentialresults)

## Function listClusterUserCredential (Microsoft.ResourceConnector/appliances@2022-04-15-preview)
* **Resource**: Microsoft.ResourceConnector/appliances
* **ApiVersion**: 2022-04-15-preview
* **Output**: [ApplianceListCredentialResults](#appliancelistcredentialresults)

## ApplianceCredentialKubeconfig
### Properties
* **name**: 'clusterCustomerUser' | 'clusterUser' | string (ReadOnly): Name which contains the role of the kubeconfig.
* **value**: string (ReadOnly): Contains the kubeconfig value.

## ApplianceListClusterCustomerUserCredentialResults
### Properties
* **kubeconfigs**: [ApplianceCredentialKubeconfig](#appliancecredentialkubeconfig)[] (ReadOnly): The list of appliance kubeconfigs.
* **sshKeys**: [ApplianceListClusterCustomerUserCredentialResultsSshKeys](#appliancelistclustercustomerusercredentialresultssshkeys) (ReadOnly): Map of Customer User Public and Private SSH Keys

## ApplianceListClusterCustomerUserCredentialResultsSshKeys
### Properties
### Additional Properties
* **Additional Properties Type**: [SSHKey](#sshkey)

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
* **status**: 'Connected' | 'Connecting' | 'None' | 'Offline' | 'PostUpgrade' | 'PreUpgrade' | 'PreparingForUpgrade' | 'Running' | 'UpdatingCAPI' | 'UpdatingCloudOperator' | 'UpdatingCluster' | 'UpgradeClusterExtensionFailedToDelete' | 'UpgradeComplete' | 'UpgradeFailed' | 'UpgradePrerequisitesCompleted' | 'Validating' | 'WaitingForCloudOperator' | 'WaitingForHeartbeat' | string (ReadOnly): Appliance’s health and state of connection to on-prem
* **version**: string: Version of the Appliance

## AppliancePropertiesInfrastructureConfig
### Properties
* **provider**: 'HCI' | 'KubeVirt' | 'OpenStack' | 'SCVMM' | 'VMWare' | string: Information about the connected appliance.

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

## SSHKey
### Properties
* **privateKey**: string: User Private Key.
* **publicKey**: string: User Public Key.

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

