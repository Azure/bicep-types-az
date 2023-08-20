# Microsoft.ResourceConnector @ 2022-10-27

## Resource Microsoft.ResourceConnector/appliances@2022-10-27
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-27' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplianceProperties](#applianceproperties): The set of properties specific to an Appliance
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ResourceConnector/appliances' (ReadOnly, DeployTimeConstant): The resource type

## Function listClusterUserCredential (Microsoft.ResourceConnector/appliances@2022-10-27)
* **Resource**: Microsoft.ResourceConnector/appliances
* **ApiVersion**: 2022-10-27
* **Output**: [ApplianceListCredentialResults](#appliancelistcredentialresults)

## Function listkeys (Microsoft.ResourceConnector/appliances@2022-10-27)
* **Resource**: Microsoft.ResourceConnector/appliances
* **ApiVersion**: 2022-10-27
* **Output**: [ApplianceListKeysResults](#appliancelistkeysresults)

## ApplianceCredentialKubeconfig
### Properties
* **name**: 'clusterCustomerUser' | 'clusterUser' | string (ReadOnly): Name which contains the role of the kubeconfig.
* **value**: string (ReadOnly): Contains the kubeconfig value.

## ApplianceListCredentialResults
### Properties
* **hybridConnectionConfig**: [HybridConnectionConfig](#hybridconnectionconfig) (ReadOnly): Contains the REP (rendezvous endpoint) and “Listener” access token from notification service (NS).
* **kubeconfigs**: [ApplianceCredentialKubeconfig](#appliancecredentialkubeconfig)[] (ReadOnly): The list of appliance kubeconfigs.

## ApplianceListKeysResults
### Properties
* **artifactProfiles**: [ApplianceListKeysResultsArtifactProfiles](#appliancelistkeysresultsartifactprofiles) (ReadOnly): Map of artifacts that contains a list of ArtifactProfile used to upload artifacts such as logs.
* **kubeconfigs**: [ApplianceCredentialKubeconfig](#appliancecredentialkubeconfig)[] (ReadOnly): The list of appliance kubeconfigs.
* **sshKeys**: [ApplianceListKeysResultsSshKeys](#appliancelistkeysresultssshkeys) (ReadOnly): Map of Customer User Public, Private SSH Keys and Certificate when available.

## ApplianceListKeysResultsArtifactProfiles
### Properties
### Additional Properties
* **Additional Properties Type**: [ArtifactProfile](#artifactprofile)

## ApplianceListKeysResultsSshKeys
### Properties
### Additional Properties
* **Additional Properties Type**: [SSHKey](#sshkey)

## ApplianceProperties
### Properties
* **distro**: 'AKSEdge' | string: Represents a supported Fabric/Infra. (AKSEdge etc...).
* **infrastructureConfig**: [AppliancePropertiesInfrastructureConfig](#appliancepropertiesinfrastructureconfig): Contains infrastructure information about the Appliance
* **provisioningState**: string (ReadOnly): The current deployment or provisioning state, which only appears in the response.
* **publicKey**: string: Certificates pair used to download MSI certificate from HIS. Can only be set once.
* **status**: 'Connected' | 'Connecting' | 'ETCDSnapshotFailed' | 'ImageDeprovisioning' | 'ImageDownloaded' | 'ImageDownloading' | 'ImagePending' | 'ImageProvisioned' | 'ImageProvisioning' | 'ImageUnknown' | 'None' | 'Offline' | 'PostUpgrade' | 'PreUpgrade' | 'PreparingForUpgrade' | 'Running' | 'UpdatingCAPI' | 'UpdatingCloudOperator' | 'UpdatingCluster' | 'UpgradeClusterExtensionFailedToDelete' | 'UpgradeComplete' | 'UpgradeFailed' | 'UpgradePrerequisitesCompleted' | 'UpgradingKVAIO' | 'Validating' | 'ValidatingETCDHealth' | 'ValidatingImageDownload' | 'ValidatingImageUpload' | 'ValidatingSFSConnectivity' | 'WaitingForCloudOperator' | 'WaitingForHeartbeat' | 'WaitingForKVAIO' | string (ReadOnly): Appliance’s health and state of connection to on-prem
* **version**: string: Version of the Appliance

## AppliancePropertiesInfrastructureConfig
### Properties
* **provider**: 'HCI' | 'SCVMM' | 'VMWare' | string: Information about the connected appliance.

## ArtifactProfile
### Properties
* **endpoint**: string (ReadOnly): Endpoint is the URL to upload artifacts to.

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
* **certificate**: string (ReadOnly): Certificate associated with the public key if the key is signed.
* **creationTimeStamp**: int (ReadOnly): Certificate creation timestamp (Unix).
* **expirationTimeStamp**: int (ReadOnly): Certificate expiration timestamp (Unix).
* **privateKey**: string (ReadOnly): Private Key.
* **publicKey**: string (ReadOnly): Public Key.

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

