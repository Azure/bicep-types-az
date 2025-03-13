# Microsoft.RedHatOpenShift @ 2024-08-12-preview

## Resource Microsoft.RedHatOpenShift/locations/openShiftVersions@2024-08-12-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-08-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^(\d+)\.(\d+)\.(\d+)(.*)"} (Required, DeployTimeConstant): The resource name
* **properties**: [OpenShiftVersionProperties](#openshiftversionproperties) (ReadOnly): The properties for the OpenShiftVersion resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.RedHatOpenShift/locations/openShiftVersions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RedHatOpenShift/locations/platformWorkloadIdentityRoleSets@2024-08-12-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-08-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 63, pattern: "^(\d+)\.(\d+)"} (Required, DeployTimeConstant): The resource name
* **properties**: [PlatformWorkloadIdentityRoleSetProperties](#platformworkloadidentityrolesetproperties) (ReadOnly): The properties for the PlatformWorkloadIdentityRoleSet resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.RedHatOpenShift/locations/platformWorkloadIdentityRoleSets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.RedHatOpenShift/openShiftClusters@2024-08-12-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-08-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Identity stores information about the cluster MSI(s) in a workload identity cluster.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OpenShiftClusterProperties](#openshiftclusterproperties): The cluster properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.RedHatOpenShift/openShiftClusters' (ReadOnly, DeployTimeConstant): The resource type

## Function listAdminCredentials (Microsoft.RedHatOpenShift/openShiftClusters@2024-08-12-preview)
* **Resource**: Microsoft.RedHatOpenShift/openShiftClusters
* **ApiVersion**: 2024-08-12-preview
* **Output**: [OpenShiftClusterAdminKubeconfig](#openshiftclusteradminkubeconfig)

## Function listCredentials (Microsoft.RedHatOpenShift/openShiftClusters@2024-08-12-preview)
* **Resource**: Microsoft.RedHatOpenShift/openShiftClusters
* **ApiVersion**: 2024-08-12-preview
* **Output**: [OpenShiftClusterCredentials](#openshiftclustercredentials)

## APIServerProfile
### Properties
* **ip**: string (ReadOnly): The IP of the cluster API server.
* **url**: string (ReadOnly): The URL to access the cluster API server.
* **visibility**: 'Private' | 'Public' | string: API server visibility.

## ClusterProfile
### Properties
* **domain**: string: The domain for the cluster.
* **fipsValidatedModules**: 'Disabled' | 'Enabled' | string: If FIPS validated crypto modules are used
* **oidcIssuer**: string: The URL of the managed OIDC issuer in a workload identity cluster.
* **pullSecret**: string: The pull secret for the cluster.
* **resourceGroupId**: string: The ID of the cluster resource group.
* **version**: string: The version of the cluster.

## ConsoleProfile
### Properties
* **url**: string (ReadOnly): The URL to access the cluster console.

## EffectiveOutboundIP
### Properties
* **id**: string: The fully qualified Azure resource id of an IP address resource.

## IngressProfile
### Properties
* **ip**: string (ReadOnly): The IP of the ingress.
* **name**: string: The ingress profile name.
* **visibility**: 'Private' | 'Public' | string: Ingress visibility.

## LoadBalancerProfile
### Properties
* **effectiveOutboundIps**: [EffectiveOutboundIP](#effectiveoutboundip)[] (ReadOnly): The list of effective outbound IP addresses of the public load balancer.
* **managedOutboundIps**: [ManagedOutboundIPs](#managedoutboundips): The desired managed outbound IPs for the cluster public load balancer.

## ManagedOutboundIPs
### Properties
* **count**: int: Count represents the desired number of IPv4 outbound IPs created and managed by Azure for the cluster public load balancer.  Allowed values are in the range of 1 - 20.  The default value is 1.

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

## MasterProfile
### Properties
* **diskEncryptionSetId**: string: The resource ID of an associated DiskEncryptionSet, if applicable.
* **encryptionAtHost**: 'Disabled' | 'Enabled' | string: Whether master virtual machines are encrypted at host.
* **subnetId**: string: The Azure resource ID of the master subnet.
* **vmSize**: string: The size of the master VMs.

## NetworkProfile
### Properties
* **loadBalancerProfile**: [LoadBalancerProfile](#loadbalancerprofile): The cluster load balancer profile.
* **outboundType**: 'Loadbalancer' | 'UserDefinedRouting' | string: The OutboundType used for egress traffic.
* **podCidr**: string: The CIDR used for OpenShift/Kubernetes Pods.
* **preconfiguredNSG**: 'Disabled' | 'Enabled' | string: Specifies whether subnets are pre-attached with an NSG
* **serviceCidr**: string: The CIDR used for OpenShift/Kubernetes Services.

## OpenShiftClusterAdminKubeconfig
### Properties
* **kubeconfig**: string {sensitive}: The base64-encoded kubeconfig file.

## OpenShiftClusterCredentials
### Properties
* **kubeadminPassword**: string {sensitive}: The password for the kubeadmin user.
* **kubeadminUsername**: string: The username for the kubeadmin user.

## OpenShiftClusterProperties
### Properties
* **apiserverProfile**: [APIServerProfile](#apiserverprofile): The cluster API server profile.
* **clusterProfile**: [ClusterProfile](#clusterprofile): The cluster profile.
* **consoleProfile**: [ConsoleProfile](#consoleprofile): The console profile.
* **ingressProfiles**: [IngressProfile](#ingressprofile)[]: The cluster ingress profiles.
* **masterProfile**: [MasterProfile](#masterprofile): The cluster master profile.
* **networkProfile**: [NetworkProfile](#networkprofile): The cluster network profile.
* **platformWorkloadIdentityProfile**: [PlatformWorkloadIdentityProfile](#platformworkloadidentityprofile): The workload identity profile.
* **provisioningState**: 'AdminUpdating' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The cluster provisioning state.
* **servicePrincipalProfile**: [ServicePrincipalProfile](#serviceprincipalprofile): The cluster service principal profile.
* **workerProfiles**: [WorkerProfile](#workerprofile)[]: The cluster worker profiles.
* **workerProfilesStatus**: [WorkerProfile](#workerprofile)[] (ReadOnly): The cluster worker profiles status.

## OpenShiftVersionProperties
### Properties
* **version**: string: Version represents the version to create the cluster at.

## PlatformWorkloadIdentity
### Properties
* **clientId**: string (ReadOnly): The ClientID of the PlatformWorkloadIdentity resource
* **objectId**: string (ReadOnly): The ObjectID of the PlatformWorkloadIdentity resource
* **resourceId**: string: The resource ID of the PlatformWorkloadIdentity resource

## PlatformWorkloadIdentityProfile
### Properties
* **platformWorkloadIdentities**: [PlatformWorkloadIdentityProfilePlatformWorkloadIdentities](#platformworkloadidentityprofileplatformworkloadidentities): Dictionary of <PlatformWorkloadIdentity>
* **upgradeableTo**: string: UpgradeableTo stores a single OpenShift version a workload identity cluster can be upgraded to

## PlatformWorkloadIdentityProfilePlatformWorkloadIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [PlatformWorkloadIdentity](#platformworkloadidentity)

## PlatformWorkloadIdentityRole
### Properties
* **operatorName**: string: OperatorName represents the name of the operator that this role is for.
* **roleDefinitionId**: string: RoleDefinitionID represents the resource ID of the role definition.
* **roleDefinitionName**: string: RoleDefinitionName represents the name of the role.

## PlatformWorkloadIdentityRoleSetProperties
### Properties
* **openShiftVersion**: string: OpenShiftVersion represents the version associated with this set of roles.
* **platformWorkloadIdentityRoles**: [PlatformWorkloadIdentityRole](#platformworkloadidentityrole)[]: PlatformWorkloadIdentityRoles represents the set of roles associated with this version.

## ServicePrincipalProfile
### Properties
* **clientId**: string: The client ID used for the cluster.
* **clientSecret**: string: The client secret used for the cluster.

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

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## WorkerProfile
### Properties
* **count**: int: The number of worker VMs.
* **diskEncryptionSetId**: string: The resource ID of an associated DiskEncryptionSet, if applicable.
* **diskSizeGB**: int: The disk size of the worker VMs.
* **encryptionAtHost**: 'Disabled' | 'Enabled' | string: Whether master virtual machines are encrypted at host.
* **name**: string: The worker profile name.
* **subnetId**: string: The Azure resource ID of the worker subnet.
* **vmSize**: string: The size of the worker VMs.

