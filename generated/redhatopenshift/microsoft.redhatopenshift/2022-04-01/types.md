# Microsoft.RedHatOpenShift @ 2022-04-01

## Resource Microsoft.RedHatOpenShift/openShiftClusters@2022-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OpenShiftClusterProperties](#openshiftclusterproperties): OpenShiftClusterProperties represents an OpenShift cluster's properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.RedHatOpenShift/openShiftClusters' (ReadOnly, DeployTimeConstant): The resource type

## Function listAdminCredentials (Microsoft.RedHatOpenShift/openShiftClusters@2022-04-01)
* **Resource**: Microsoft.RedHatOpenShift/openShiftClusters
* **ApiVersion**: 2022-04-01
* **Output**: [OpenShiftClusterAdminKubeconfig](#openshiftclusteradminkubeconfig)

## Function listCredentials (Microsoft.RedHatOpenShift/openShiftClusters@2022-04-01)
* **Resource**: Microsoft.RedHatOpenShift/openShiftClusters
* **ApiVersion**: 2022-04-01
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
* **fipsValidatedModules**: 'Disabled' | 'Enabled': FipsValidatedModules determines if FIPS is used.
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
* **vmSize**: string: VM size availability varies by region.
If a node contains insufficient compute resources (memory, cpu, etc.), pods might fail to run correctly.
For more details on restricted VM sizes, see: https://docs.microsoft.com/en-us/azure/openshift/support-policies-v4#supported-virtual-machine-sizes

## NetworkProfile
### Properties
* **podCidr**: string: The CIDR used for OpenShift/Kubernetes Pods.
* **serviceCidr**: string: The CIDR used for OpenShift/Kubernetes Services.

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
* **vmSize**: string: VM size availability varies by region.
If a node contains insufficient compute resources (memory, cpu, etc.), pods might fail to run correctly.
For more details on restricted VM sizes, see: https://docs.microsoft.com/en-us/azure/openshift/support-policies-v4#supported-virtual-machine-sizes

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

