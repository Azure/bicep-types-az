# Microsoft.RedHatOpenShift @ 2025-12-23-preview

## Resource Microsoft.RedHatOpenShift/hcpOpenShiftClusters@2025-12-23-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-12-23-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z]([-a-zA-Z0-9]{0,52}[a-zA-Z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HcpOpenShiftClusterProperties](#hcpopenshiftclusterproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.RedHatOpenShift/hcpOpenShiftClusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RedHatOpenShift/hcpOpenShiftClusters/externalAuths@2025-12-23-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-12-23-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z]([-a-zA-Z0-9]{0,13}[a-zA-Z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ExternalAuthProperties](#externalauthproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.RedHatOpenShift/hcpOpenShiftClusters/externalAuths' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RedHatOpenShift/hcpOpenShiftClusters/nodePools@2025-12-23-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-12-23-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z]([-a-zA-Z0-9]{0,13}[a-zA-Z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NodePoolProperties](#nodepoolproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.RedHatOpenShift/hcpOpenShiftClusters/nodePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RedHatOpenShift/locations/hcpOpenShiftVersions@2025-12-23-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-12-23-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-\.]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HcpOpenShiftVersionProperties](#hcpopenshiftversionproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.RedHatOpenShift/locations/hcpOpenShiftVersions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RedHatOpenShift/locations/hcpOperatorIdentityRoleSets@2025-12-23-preview
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-12-23-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-\.]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [HcpOperatorIdentityRoleSetProperties](#hcpoperatoridentityrolesetproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.RedHatOpenShift/locations/hcpOperatorIdentityRoleSets' (ReadOnly, DeployTimeConstant): The resource type

## Function requestAdminCredential (Microsoft.RedHatOpenShift/hcpOpenShiftClusters@2025-12-23-preview)
* **Resource**: Microsoft.RedHatOpenShift/hcpOpenShiftClusters
* **ApiVersion**: 2025-12-23-preview
* **Output**: [HcpOpenShiftClusterAdminCredential](#hcpopenshiftclusteradmincredential)

## Function revokeCredentials (Microsoft.RedHatOpenShift/hcpOpenShiftClusters@2025-12-23-preview)
* **Resource**: Microsoft.RedHatOpenShift/hcpOpenShiftClusters
* **ApiVersion**: 2025-12-23-preview
* **Output**: any

## ApiProfile
### Properties
* **authorizedCidrs**: string[] {maxLength: 500}: The list of authorized IPv4 CIDR blocks allowed to access the API server. Maximum 500 entries.
* **url**: string (Required, ReadOnly): URL endpoint for the API server
* **visibility**: 'Private' | 'Public' | string: The internet visibility of the OpenShift API server

## ClusterAutoscalingProfile
### Properties
* **maxNodeProvisionTimeSeconds**: int {minValue: 0}: maxNodeProvisionTimeSeconds is the maximum time to wait for node provisioning before considering the
provisioning to be unsuccessful. The default is 900 seconds, or 15 minutes.
* **maxNodesTotal**: int {minValue: 0}: maxNodesTotal is the maximum allowable number of nodes for the Autoscaler scale out to be operational.
The autoscaler will not grow the cluster beyond this number. If omitted, the autoscaler will not have a maximum limit.
* **maxPodGracePeriodSeconds**: int {minValue: 0}: maxPodGracePeriod is the maximum seconds to wait for graceful pod termination before scaling down a NodePool.
The default is 600 seconds.
* **podPriorityThreshold**: int: podPriorityThreshold enables users to schedule "best-effort" pods, which shouldn't trigger autoscaler actions,
but only run when there are spare resources available. The default is -10.
See the following for more details:
https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#how-does-cluster-autoscaler-work-with-pod-priority-and-preemption

## ClusterImageRegistryProfile
### Properties
* **state**: 'Disabled' | 'Enabled' | string: state indicates the desired ImageStream-backed cluster image registry installation mode.
This can only be set during cluster creation and cannot be changed after cluster creation.
Enabled means the ImageStream-backed image registry will be run as pods on worker nodes in
the cluster. Disabled means the ImageStream-backed image registry will not be present in
the cluster. The default is Enabled.

## ConsoleProfile
### Properties
* **url**: string (Required, ReadOnly): The cluster web console URL endpoint

## CustomerManagedEncryptionProfile
### Properties
* **encryptionType**: 'KMS' | string: The encryption type used.
By default, "KMS" is used.
* **kms**: [KmsEncryptionProfile](#kmsencryptionprofile): The Key Management Service (KMS) encryption key details.

Required when encryptionType is "KMS".

## DnsProfile
### Properties
* **baseDomain**: string (ReadOnly): BaseDomain is the base DNS domain of the cluster.
* **baseDomainPrefix**: string {maxLength: 15, pattern: "^[a-z]([-a-z0-9]*[a-z0-9])?$"}: BaseDomainPrefix is the unique name of the cluster representing the OpenShift's cluster name.
BaseDomainPrefix is the name that will appear in the cluster's DNS, provisioned cloud providers resources

## EtcdDataEncryptionProfile
### Properties
* **customerManaged**: [CustomerManagedEncryptionProfile](#customermanagedencryptionprofile): Specify customer managed encryption key details.
Required when keyManagementMode is "CustomerManaged".
* **keyManagementMode**: 'CustomerManaged' | 'PlatformManaged' | string: Specify the key management strategy used for the encryption key that encrypts the ETCD data.
By default, "PlatformManaged" is used.

## EtcdProfile
### Properties
* **dataEncryption**: [EtcdDataEncryptionProfile](#etcddataencryptionprofile): ETCD Data Encryption settings.
If not specified platform managed keys are used.

## ExternalAuthClaimProfile
### Properties
* **mappings**: [TokenClaimMappingsProfile](#tokenclaimmappingsprofile) (Required): The claim mappings
* **validationRules**: [TokenClaimValidationRule](#tokenclaimvalidationrule)[]: The claim validation rules

## ExternalAuthClientComponentProfile
### Properties
* **authClientNamespace**: string {minLength: 1, maxLength: 63} (Required): The namespace of the external Auth client
This specifies the namespace in which the platform component being configured
to use the identity provider as an authentication mode is running.

It is used in combination with name as a unique identifier.
* **name**: string {minLength: 1, maxLength: 256} (Required): The name of the external auth client

This specifies the name of the platform component being configured to use
the identity provider as an authentication mode.
It is used in combination with namespace as a unique identifier.

## ExternalAuthClientProfile
### Properties
* **clientId**: string {minLength: 1} (Required): External Auth client id
The clientId must appear in the audience field of the TokenIssuerProfile.
* **component**: [ExternalAuthClientComponentProfile](#externalauthclientcomponentprofile) (Required): External Auth client component
* **extraScopes**: string[]: external auth client scopes

This is useful if you have configured claim mappings that requires specific
scopes to be requested beyond the standard OIDC scopes.
When omitted, no additional scopes are requested.
* **type**: 'Confidential' | 'Public' | string (Required): Determines the OIDC provider client type.

## ExternalAuthCondition
### Properties
* **lastTransitionTime**: string (Required, ReadOnly): The last time the condition transitioned from one status to another.
* **message**: string (Required, ReadOnly): This is a human readable message indicating details about the transition.
This may be an empty string.
* **reason**: string (Required, ReadOnly): This contains a programmatic identifier indicating the reason for the condition's last transition.
* **status**: 'False' | 'True' | 'Unknown' | string (Required, ReadOnly): The status of the condition.
* **type**: 'Available' | 'Degraded' | 'Progressing' | string (Required, ReadOnly): This is a PascalCase (or in foo.example.com/PascalCase) code to represent the type of condition.

## ExternalAuthProperties
### Properties
* **claim**: [ExternalAuthClaimProfile](#externalauthclaimprofile) (Required): External Auth claim
This configures how claims are validated and applied.
* **clients**: [ExternalAuthClientProfile](#externalauthclientprofile)[] {maxLength: 20}: External Auth OIDC clients
There must not be more than 20 entries and entries must have unique namespace/name pairs.
* **condition**: [ExternalAuthCondition](#externalauthcondition) (ReadOnly): An observation of the current state with additional information.
* **issuer**: [TokenIssuerProfile](#tokenissuerprofile) (Required): Token Issuer profile
* **provisioningState**: 'Accepted' | 'AwaitingSecret' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state

## GroupClaimProfile
### Properties
* **claim**: string {minLength: 1, maxLength: 256} (Required): Claim name of the external profile
* **prefix**: string: Prefix for the claim external profile
If this is specified prefixPolicy will be set to "Prefix" by default

## HcpOpenShiftClusterAdminCredential
### Properties
* **expirationTimestamp**: string (Required, ReadOnly): Expiration timestamp for the kubeconfig's client certificate
* **kubeconfig**: string {sensitive} (Required, ReadOnly): Admin kubeconfig with a temporary client certificate

## HcpOpenShiftClusterProperties
### Properties
* **api**: [ApiProfile](#apiprofile): Shows the cluster API server profile
* **autoscaling**: [ClusterAutoscalingProfile](#clusterautoscalingprofile): Configure ClusterAutoscaling .
* **clusterImageRegistry**: [ClusterImageRegistryProfile](#clusterimageregistryprofile): OpenShift internal image registry
* **console**: [ConsoleProfile](#consoleprofile) (ReadOnly): Shows the cluster web console information
* **dns**: [DnsProfile](#dnsprofile): Cluster DNS configuration
* **etcd**: [EtcdProfile](#etcdprofile): Configure ETCD.
* **imageDigestMirrors**: [ImageDigestMirror](#imagedigestmirror)[] {maxLength: 240}: imageDigestMirrors is a set of rules to allow pulling images from a
mirrored registry by using digest specifications.

WARNING: Updating this array will redeploy all node pools in the cluster.
* **network**: [NetworkProfile](#networkprofile): Cluster network configuration
* **nodeDrainTimeoutMinutes**: int {minValue: 0, maxValue: 10080}: nodeDrainTimeoutMinutes is the grace period for how long Pod Disruption Budget-protected workloads will be
respected during any node draining operation. After this grace period, any workloads protected by Pod Disruption
Budgets that have not been successfully drained from a node will be forcibly evicted. This is
especially relevant to cluster upgrades.

Valid values are in minutes and from 0 to 10080 minutes (1 week).
0 means that the MachinePool can be drained without any time limitation.

This is the value is used a default for all NodePools. It can be overridden
by specifying nodeDrainTimeoutMinutes for a given NodePool
* **platform**: [PlatformProfile](#platformprofile) (Required): Azure platform configuration
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **version**: [VersionProfile](#versionprofile) (Required): Version of the control plane components

## HcpOpenShiftVersionProperties
### Properties
* **channelGroup**: string (Required): ChannelGroup is the name of the group where this version belongs.
* **enabled**: bool (Required): Enabled indicates if this version can be used to create clusters.
* **endOfLifeTimestamp**: string (Required): EndOfLifeTimestamp is the date and time when this version will reach End of Life.

## HcpOperatorIdentityRoleSetProperties
### Properties
* **controlPlaneOperators**: [OperatorIdentityRoles](#operatoridentityroles)[] (Required): The role definitions required for the User-Assigned managed identities used
by Control Plane operators on a cluster.
* **dataPlaneOperators**: [OperatorIdentityRoles](#operatoridentityroles)[] (Required): The role definitions required for the User-Assigned managed identities used
by Data Plane operators on a cluster.

## ImageDigestMirror
### Properties
* **mirrors**: (string {maxLength: 255})[] {minLength: 1, maxLength: 255} (Required): mirrors is zero or more locations that may also contain the same images. No mirror will
be configured if not specified. Images can be pulled from these mirrors only if they are
referenced by their digests. The mirrored location is obtained by replacing the part of
the input reference that matches source by the mirrors entry, e.g. for
registry.redhat.io/product/repo reference, a (source, mirror) pair *.redhat.io,
mirror.local/redhat causes a mirror.local/redhat/product/repo repository to be used.

The order of mirrors in this list is treated as the user's desired priority, while source
is by default considered lower priority than all mirrors.

If no mirror is specified or all image pulls from the mirror list fail, the image will
continue to be pulled from the repository in the pull spec.

Other cluster configuration, including (but not limited to) other imageDigestMirrors
objects, may impact the exact order mirrors are contacted in, or some mirrors may be
contacted in parallel, so this should be considered a preference rather than a guarantee
of ordering.

mirrors uses one of the following formats:
* host[:port]
* host[:port]/namespace[/namespace...]
* host[:port]/namespace[/namespace...]/repo

for more information about the format, see:
https://github.com/containers/image/blob/main/docs/containers-registries.conf.5.md#choosing-a-registry-toml-table
* **source**: string {maxLength: 255} (Required): source matches the repository that users refer to, e.g. in image pull specifications.
Setting source to a registry hostname, e.g. docker.io, quay.io, or registry.redhat.io,
will match the image pull specification of the corresponding registry.

source uses one of the following formats:
* host[:port]
* host[:port]/namespace[/namespace...]
* host[:port]/namespace[/namespace...]/repo
* [*.]host

for more information about the format, see:
https://github.com/containers/image/blob/main/docs/containers-registries.conf.5.md#choosing-a-registry-toml-table

## KmsEncryptionProfile
### Properties
* **activeKey**: [KmsKey](#kmskey) (Required): The details of the active key.
* **vaultName**: string {minLength: 1, maxLength: 255} (Required): vaultName is the name of the keyvault that contains the secret.
* **visibility**: 'Private' | 'Public' | string (Required): visibility of the keyvault that contains the secret.

## KmsKey
### Properties
* **name**: string {minLength: 1, maxLength: 255} (Required): name is the name of the keyvault key used for encryption/decryption.
* **version**: string {minLength: 1, maxLength: 255} (Required): version contains the version of the key to use.

## Label
### Properties
* **key**: string (Required): The key of the label
* **value**: string: The value of the label

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## NetworkProfile
### Properties
* **hostPrefix**: int: Network host prefix
* **machineCidr**: string: The CIDR block from which to assign machine IP addresses
* **networkType**: 'OVNKubernetes' | 'Other' | string: The main controller responsible for rendering the core networking components
* **podCidr**: string: The CIDR of the pod IP addresses
* **serviceCidr**: string: The CIDR block for assigned service IPs

## NodePoolAutoScaling
### Properties
* **max**: int {minValue: 0}: The maximum number of nodes in the node pool.
Validation:
- Minimum: 0 (must be >= min)
- Maximum: 200 (only when availabilityZone is not specified)
- No maximum when availabilityZone is specified
* **min**: int {minValue: 0}: The minimum number of nodes in the node pool.
Validation:
- Minimum: 0
- Maximum: 200 (only when availabilityZone is not specified)
- No maximum when availabilityZone is specified

## NodePoolPlatformProfile
### Properties
* **availabilityZone**: string: The availability zone for the node pool.
Please read the documentation to see which regions support availability zones
- https://learn.microsoft.com/en-us/azure/availability-zones/az-overview
* **enableEncryptionAtHost**: bool: Whether to enable host based OS and data drive encryption.
- https://learn.microsoft.com/en-us/azure/virtual-machines/disk-encryption#encryption-at-host---end-to-end-encryption-for-your-vm-data
* **osDisk**: [OsDiskProfile](#osdiskprofile): The settings and configuration options for OSDisk
* **subnetId**: string: The Azure resource ID of the worker subnet
Note that a subnet cannot be reused between ARO-HCP Clusters, however the
same subnet can be used for NodePools of the same cluster.
* **vmSize**: string (Required): The VM size according to the documentation:
- https://learn.microsoft.com/en-us/azure/virtual-machines/sizes

## NodePoolProperties
### Properties
* **autoRepair**: bool: Auto-repair
* **autoScaling**: [NodePoolAutoScaling](#nodepoolautoscaling): Representation of a autoscaling in a node pool.
* **labels**: [Label](#label)[]: Kubernetes labels to propagate to the NodePool Nodes
Note that when the labels are updated this is only applied to newly
create nodes in the Nodepool, existing node labels remain unchanged.
* **nodeDrainTimeoutMinutes**: int: nodeDrainTimeoutMinutes is the grace period for how long Pod Disruption Budget-protected workloads will be
respected during any node draining operation. After this grace period, any workloads protected by Pod Disruption
Budgets that have not been successfully drained from a node will be forcibly evicted. This is
especially relevant to cluster upgrades.

Valid values are from 0 to 10080 minutes (1 week) .
0 means that the NodePool can be drained without any time limitation.

If unset the cluster nodeDrainTimeoutMinutes value is used as a default.
* **platform**: [NodePoolPlatformProfile](#nodepoolplatformprofile) (Required): Azure node pool platform configuration
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state
* **replicas**: int {minValue: 0}: The number of worker nodes, it cannot be used together with autoscaling.
Validation:
- Minimum: 0
- Maximum: 200 (only when availabilityZone is not specified)
- No maximum when availabilityZone is specified
* **taints**: [Taint](#taint)[]: Taints for the nodes
* **version**: [NodePoolVersionProfile](#nodepoolversionprofile): OpenShift version for the nodepool

## NodePoolVersionProfile
### Properties
* **channelGroup**: string: ChannelGroup is the name of the set to which this version belongs.
Each version belongs to only a single set.

If not specified, the default value is 'stable'.
* **id**: string (Required): ID is the unique identifier of the version.

## OperatorIdentityRoles
### Properties
* **name**: string (Required): Name of the operator
* **required**: 'Always' | 'OnEnablement' | string (Required): Whether or not the operator is required for installation
* **roleDefinitions**: [RoleDefinition](#roledefinition)[] (Required): The role definitions required to be assigned to the identity assumed by this operator

## OperatorsAuthenticationProfile
### Properties
* **userAssignedIdentities**: [UserAssignedIdentitiesProfile](#userassignedidentitiesprofile) (Required): Represents the information related to Azure User-Assigned managed identities needed
to perform Operators authentication based on Azure User-Assigned Managed Identities

## OsDiskProfile
### Properties
* **diskStorageAccountType**: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | string: The type of the disk storage account
- https://learn.microsoft.com/en-us/azure/virtual-machines/disks-types
* **diskType**: 'Ephemeral' | 'Managed' | string: The type of the OS disk.
- https://learn.microsoft.com/en-us/azure/virtual-machines/ephemeral-os-disks
* **encryptionSetId**: string: The ID of the DiskEncryptionSet resource to use to encrypt the OS disks for the VMs.
This needs to exist in the same subscription id listed in the Hosted Cluster, HostedCluster.Spec.Platform.Azure.SubscriptionID.
DiskEncryptionSetID should also exist in a resource group under the same subscription id and the same location
listed in the Hosted Cluster, HostedCluster.Spec.Platform.Azure.Location.

Details on how to create a Disk Encryption Set can be found here:
https://learn.microsoft.com/en-us/azure/virtual-machines/disks-enable-customer-managed-keys-portal#set-up-your-disk-encryption-set
* **sizeGiB**: int {minValue: 64}: The OS disk size in GiB

## PlatformProfile
### Properties
* **issuerUrl**: string (Required, ReadOnly): URL for the OIDC provider to be used for authentication
to authenticate against user Azure cloud account
* **managedResourceGroup**: string: Resource group name to put cluster resources

If not specified then a unique name is generated from the
following pattern

"aro-hcp-" + clusterName + "-" + UUID

where clusterName means the hcpOpenShiftClusters resource name
(up to 45 characters) followed by a 16-byte universally unique
identifier per RFC 4122.
* **networkSecurityGroupId**: string (Required): ResourceId for the NSG (network security group) attached to the cluster subnet

Note that NSGs cannot be reused for other ARO-HCP clusters.
* **operatorsAuthentication**: [OperatorsAuthenticationProfile](#operatorsauthenticationprofile) (Required): The configuration that the operators of the cluster have to authenticate to Azure
* **outboundType**: 'LoadBalancer' | string: The core outgoing configuration
* **subnetId**: string (Required): The Azure resource ID of the worker subnet
Note that a subnet cannot be reused between ARO-HCP Clusters.
* **vnetIntegrationSubnetId**: string (Required): The Azure resource ID of a subnet that enables direct,
private network connectivity between the hosted control plane
and your cluster's nodes. This subnet must be dedicated to ARO HCP
and cannot be shared with the cluster subnet or any node pool subnets.

## RoleDefinition
### Properties
* **name**: string (Required): The name of the required role definition
* **resourceId**: string (Required): The resource ID of the role definition

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## Taint
### Properties
* **effect**: 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule' | string (Required): The effect of the taint
* **key**: string {minLength: 1, maxLength: 316} (Required): The key of the taint
* **value**: string {maxLength: 63}: The value of the taint

## TokenClaimMappingsProfile
### Properties
* **groups**: [GroupClaimProfile](#groupclaimprofile): The claim mappings groups.
* **username**: [UsernameClaimProfile](#usernameclaimprofile) (Required): The claim mappings username.

## TokenClaimValidationRule
### Properties
* **requiredClaim**: [TokenRequiredClaim](#tokenrequiredclaim): The required claim rule to be applied.
* **type**: 'RequiredClaim' | string: This configures the type of the validation rule.
It defaults to "RequiredClaim"

## TokenIssuerProfile
### Properties
* **audiences**: string[] {minLength: 1, maxLength: 10} (Required): This configures the acceptable audiences the JWT token, issued by the identity
provider, must be issued to. At least one of the entries must match the
'aud' claim in the JWT token.

audiences must contain at least one entry and must not exceed ten entries.
* **ca**: string: The issuer of the token

Certificate bundle to use to validate server certificates for the configured URL.
It must be PEM encoded and when not specified, the system trust is used.
* **url**: string (Required): This configures the URL used to issue tokens by the identity provider.
The Kubernetes API server determines how authentication tokens should be handled
by matching the 'iss' claim in the JWT to the issuerURL of configured identity providers.

issuerURL must use the 'https' scheme.

## TokenRequiredClaim
### Properties
* **claim**: string {minLength: 1} (Required): Claim name for the validation profile
claim is a required field that configures the name of the required claim.
* **requiredValue**: string {minLength: 1} (Required): Required value
requiredValue is a required field that configures the value that 'claim' must
have when taken from the incoming JWT claims.
If the value in the JWT claims does not match, the token
will be rejected for authentication.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentitiesProfile
### Properties
* **controlPlaneOperators**: [UserAssignedIdentitiesProfileControlPlaneOperators](#userassignedidentitiesprofilecontrolplaneoperators) (Required): The set of Azure User-Assigned Managed Identities leveraged for the Control Plane
operators of the cluster. The set of required managed identities is dependent on the
Cluster's OpenShift version.
* **dataPlaneOperators**: [UserAssignedIdentitiesProfileDataPlaneOperators](#userassignedidentitiesprofiledataplaneoperators) (Required): The set of Azure User-Assigned Managed Identities leveraged for the Data Plane
operators of the cluster. The set of required managed identities is dependent on the
Cluster's OpenShift version.
* **serviceManagedIdentity**: string (Required): Represents the information associated to an Azure User-Assigned Managed Identity whose
purpose is to perform service level actions.

## UserAssignedIdentitiesProfileControlPlaneOperators
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentitiesProfileDataPlaneOperators
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## UsernameClaimProfile
### Properties
* **claim**: string {minLength: 1, maxLength: 256} (Required): Claim name of the external profile
* **prefix**: string: Prefix for the claim external profile
Must be set when the prefixPolicy field is set to 'Prefix' and must be unset
otherwise.
* **prefixPolicy**: 'NoPrefix' | 'None' | 'Prefix' | string: Prefix policy is an optional field that configures how a prefix should be
applied to the value of the JWT claim specified in the 'claim' field.

Allowed values are 'Prefix', 'NoPrefix', and 'None'. If not specified, the
default policy is 'None'.

When set to 'Prefix', the value specified in the prefix field will be
prepended to the value of the JWT claim.
The prefix field must be set when prefixPolicy is 'Prefix'.

When set to 'NoPrefix', no prefix will be prepended to the value
of the JWT claim.

When set to 'None', this means no opinion and the platform is left to choose
any prefixes that are applied which is subject to change over time.
Currently, the platform prepends `{issuerURL}#` to the value of the JWT claim
when the claim is not 'email'.
As an example, consider the following scenario:
`prefix` is unset, `issuerURL` is set to `https://myoidc.tld`,
the JWT claims include "username":"userA" and "email":"userA

## VersionProfile
### Properties
* **channelGroup**: string: ChannelGroup is the name of the set to which this version belongs.
Each version belongs to only a single set.

If not specified, the default value is 'stable'.
* **id**: string (Required): ID is the desired X.Y version of the cluster control plane.

