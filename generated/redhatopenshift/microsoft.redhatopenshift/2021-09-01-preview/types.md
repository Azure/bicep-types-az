# Microsoft.RedHatOpenShift @ 2021-09-01-preview

## Resource Microsoft.RedHatOpenShift/openShiftClusters@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OpenShiftClusterProperties](#openshiftclusterproperties): The cluster properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.RedHatOpenShift/openShiftClusters' (ReadOnly, DeployTimeConstant): The resource type

## Function listAdminCredentials (Microsoft.RedHatOpenShift/openShiftClusters@2021-09-01-preview)
* **Resource**: Microsoft.RedHatOpenShift/openShiftClusters
* **ApiVersion**: 2021-09-01-preview
* **Output**: [OpenShiftClusterAdminKubeconfig](#openshiftclusteradminkubeconfig)

## Function listCredentials (Microsoft.RedHatOpenShift/openShiftClusters@2021-09-01-preview)
* **Resource**: Microsoft.RedHatOpenShift/openShiftClusters
* **ApiVersion**: 2021-09-01-preview
* **Output**: [OpenShiftClusterCredentials](#openshiftclustercredentials)

## APIServerProfile
### Properties
* **ip**: string: The IP of the cluster API server.
* **url**: string: The URL to access the cluster API server.
* **visibility**: 'Private' | 'Public' | string: API server visibility.

## ClusterProfile
### Properties
* **domain**: string: The domain for the cluster.
* **pullSecret**: string: The pull secret for the cluster.
* **resourceGroupId**: string: The ID of the cluster resource group.
* **version**: string: The version of the cluster.

## ConsoleProfile
### Properties
* **url**: string: The URL to access the cluster console.

## IngressProfile
### Properties
* **ip**: string: The IP of the ingress.
* **name**: string: The ingress profile name.
* **visibility**: 'Private' | 'Public' | string: Ingress visibility.

## MasterProfile
### Properties
* **diskEncryptionSetId**: string: The resource ID of an associated DiskEncryptionSet, if applicable.
* **encryptionAtHost**: 'Disabled' | 'Enabled' | string: Whether master virtual machines are encrypted at host.
* **subnetId**: string: The Azure resource ID of the master subnet.
* **vmSize**: 'Standard_D16as_v4' | 'Standard_D16s_v3' | 'Standard_D2s_v3' | 'Standard_D32as_v4' | 'Standard_D32s_v3' | 'Standard_D4as_v4' | 'Standard_D4s_v3' | 'Standard_D8as_v4' | 'Standard_D8s_v3' | 'Standard_E16s_v3' | 'Standard_E32s_v3' | 'Standard_E4s_v3' | 'Standard_E64i_v3' | 'Standard_E64is_v3' | 'Standard_E8s_v3' | 'Standard_F16s_v2' | 'Standard_F32s_v2' | 'Standard_F4s_v2' | 'Standard_F72s_v2' | 'Standard_F8s_v2' | 'Standard_G5' | 'Standard_GS5' | 'Standard_M128ms' | string: The size of the master VMs.

## NetworkProfile
### Properties
* **podCidr**: string: The CIDR used for OpenShift/Kubernetes Pods.
* **serviceCidr**: string: The CIDR used for OpenShift/Kubernetes Services.
* **softwareDefinedNetwork**: 'OVNKubernetes' | 'OpenShiftSDN' | string: The software defined network (SDN) to use when installing the cluster.

## OpenShiftClusterAdminKubeconfig
### Properties
* **kubeconfig**: string: The base64-encoded kubeconfig file.

## OpenShiftClusterCredentials
### Properties
* **kubeadminPassword**: string: The password for the kubeadmin user.
* **kubeadminUsername**: string: The username for the kubeadmin user.

## OpenShiftClusterProperties
### Properties
* **apiserverProfile**: [APIServerProfile](#apiserverprofile): The cluster API server profile.
* **clusterProfile**: [ClusterProfile](#clusterprofile): The cluster profile.
* **consoleProfile**: [ConsoleProfile](#consoleprofile): The console profile.
* **ingressProfiles**: [IngressProfile](#ingressprofile)[]: The cluster ingress profiles.
* **masterProfile**: [MasterProfile](#masterprofile): The cluster master profile.
* **networkProfile**: [NetworkProfile](#networkprofile): The cluster network profile.
* **provisioningState**: 'AdminUpdating' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The cluster provisioning state.
* **servicePrincipalProfile**: [ServicePrincipalProfile](#serviceprincipalprofile): The cluster service principal profile.
* **workerProfiles**: [WorkerProfile](#workerprofile)[]: The cluster worker profiles.

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

## WorkerProfile
### Properties
* **count**: int: The number of worker VMs.
* **diskEncryptionSetId**: string: The resource ID of an associated DiskEncryptionSet, if applicable.
* **diskSizeGB**: int: The disk size of the worker VMs.
* **encryptionAtHost**: 'Disabled' | 'Enabled' | string: Whether master virtual machines are encrypted at host.
* **name**: string: The worker profile name.
* **subnetId**: string: The Azure resource ID of the worker subnet.
* **vmSize**: 'Standard_D16as_v4' | 'Standard_D16s_v3' | 'Standard_D2s_v3' | 'Standard_D32as_v4' | 'Standard_D32s_v3' | 'Standard_D4as_v4' | 'Standard_D4s_v3' | 'Standard_D8as_v4' | 'Standard_D8s_v3' | 'Standard_E16s_v3' | 'Standard_E32s_v3' | 'Standard_E4s_v3' | 'Standard_E64i_v3' | 'Standard_E64is_v3' | 'Standard_E8s_v3' | 'Standard_F16s_v2' | 'Standard_F32s_v2' | 'Standard_F4s_v2' | 'Standard_F72s_v2' | 'Standard_F8s_v2' | 'Standard_G5' | 'Standard_GS5' | 'Standard_M128ms' | string: The size of the worker VMs.

