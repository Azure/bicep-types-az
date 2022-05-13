# Microsoft.RedHatOpenShift @ 2021-09-01-preview

## Resource Microsoft.RedHatOpenShift/openShiftClusters@2021-09-01-preview (Async)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OpenShiftClusterProperties](#openshiftclusterproperties): OpenShiftClusterProperties represents an OpenShift cluster's properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
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

## OpenShiftClusterProperties
### Properties
* **apiserverProfile**: [APIServerProfile](#apiserverprofile): APIServerProfile represents an API server profile.
* **clusterProfile**: [ClusterProfile](#clusterprofile): ClusterProfile represents a cluster profile.
* **consoleProfile**: [ConsoleProfile](#consoleprofile): ConsoleProfile represents a console profile.
* **ingressProfiles**: [IngressProfile](#ingressprofile)[]: The cluster ingress profiles.
* **masterProfile**: [MasterProfile](#masterprofile): MasterProfile represents a master profile.
* **networkProfile**: [NetworkProfile](#networkprofile): NetworkProfile represents a network profile.
* **provisioningState**: 'AdminUpdating' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating': ProvisioningState represents a provisioning state.
* **servicePrincipalProfile**: [ServicePrincipalProfile](#serviceprincipalprofile): ServicePrincipalProfile represents a service principal profile.
* **workerProfiles**: [WorkerProfile](#workerprofile)[]: The cluster worker profiles.

## APIServerProfile
### Properties
* **ip**: string: The IP of the cluster API server.
* **url**: string: The URL to access the cluster API server.
* **visibility**: 'Private' | 'Public': Visibility represents visibility.

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
* **visibility**: 'Private' | 'Public': Visibility represents visibility.

## MasterProfile
### Properties
* **diskEncryptionSetId**: string: The resource ID of an associated DiskEncryptionSet, if applicable.
* **encryptionAtHost**: 'Disabled' | 'Enabled': EncryptionAtHost represents encryption at host state
* **subnetId**: string: The Azure resource ID of the master subnet.
* **vmSize**: 'Standard_D16as_v4' | 'Standard_D16s_v3' | 'Standard_D2s_v3' | 'Standard_D32as_v4' | 'Standard_D32s_v3' | 'Standard_D4as_v4' | 'Standard_D4s_v3' | 'Standard_D8as_v4' | 'Standard_D8s_v3' | 'Standard_E16s_v3' | 'Standard_E32s_v3' | 'Standard_E4s_v3' | 'Standard_E64i_v3' | 'Standard_E64is_v3' | 'Standard_E8s_v3' | 'Standard_F16s_v2' | 'Standard_F32s_v2' | 'Standard_F4s_v2' | 'Standard_F72s_v2' | 'Standard_F8s_v2' | 'Standard_G5' | 'Standard_GS5' | 'Standard_M128ms': VMSize represents a VM size.

## NetworkProfile
### Properties
* **podCidr**: string: The CIDR used for OpenShift/Kubernetes Pods.
* **serviceCidr**: string: The CIDR used for OpenShift/Kubernetes Services.
* **softwareDefinedNetwork**: 'OVNKubernetes' | 'OpenShiftSDN': SoftwareDefinedNetwork constants.

## ServicePrincipalProfile
### Properties
* **clientId**: string: The client ID used for the cluster.
* **clientSecret**: string: The client secret used for the cluster.

## WorkerProfile
### Properties
* **count**: int: The number of worker VMs.
* **diskEncryptionSetId**: string: The resource ID of an associated DiskEncryptionSet, if applicable.
* **diskSizeGB**: int: The disk size of the worker VMs.
* **encryptionAtHost**: 'Disabled' | 'Enabled': EncryptionAtHost represents encryption at host state
* **name**: string: The worker profile name.
* **subnetId**: string: The Azure resource ID of the worker subnet.
* **vmSize**: 'Standard_D16as_v4' | 'Standard_D16s_v3' | 'Standard_D2s_v3' | 'Standard_D32as_v4' | 'Standard_D32s_v3' | 'Standard_D4as_v4' | 'Standard_D4s_v3' | 'Standard_D8as_v4' | 'Standard_D8s_v3' | 'Standard_E16s_v3' | 'Standard_E32s_v3' | 'Standard_E4s_v3' | 'Standard_E64i_v3' | 'Standard_E64is_v3' | 'Standard_E8s_v3' | 'Standard_F16s_v2' | 'Standard_F32s_v2' | 'Standard_F4s_v2' | 'Standard_F72s_v2' | 'Standard_F8s_v2' | 'Standard_G5' | 'Standard_GS5' | 'Standard_M128ms': VMSize represents a VM size.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OpenShiftClusterAdminKubeconfig
### Properties
* **kubeconfig**: string (ReadOnly): The base64-encoded kubeconfig file.

## OpenShiftClusterCredentials
### Properties
* **kubeadminPassword**: string (ReadOnly): The password for the kubeadmin user.
* **kubeadminUsername**: string (ReadOnly): The username for the kubeadmin user.

