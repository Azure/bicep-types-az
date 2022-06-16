# Microsoft.RedHatOpenShift @ 2020-04-30

## Resource Microsoft.RedHatOpenShift/openShiftClusters@2020-04-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OpenShiftClusterProperties](#openshiftclusterproperties): The cluster properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.RedHatOpenShift/openShiftClusters' (ReadOnly, DeployTimeConstant): The resource type

## Function listCredentials (Microsoft.RedHatOpenShift/openShiftClusters@2020-04-30)
* **Resource**: Microsoft.RedHatOpenShift/openShiftClusters
* **ApiVersion**: 2020-04-30
* **Output**: [OpenShiftClusterCredentials](#openshiftclustercredentials)

## APIServerProfile
### Properties
* **ip**: string: The IP of the cluster API server (immutable).
* **url**: string: The URL to access the cluster API server (immutable).
* **visibility**: 'Private' | 'Public' | string: API server visibility (immutable).

## ClusterProfile
### Properties
* **domain**: string: The domain for the cluster (immutable).
* **pullSecret**: string: The pull secret for the cluster (immutable).
* **resourceGroupId**: string: The ID of the cluster resource group (immutable).
* **version**: string: The version of the cluster (immutable).

## ConsoleProfile
### Properties
* **url**: string: The URL to access the cluster console (immutable).

## IngressProfile
### Properties
* **ip**: string: The IP of the ingress (immutable).
* **name**: string: The ingress profile name.  Must be "default" (immutable).
* **visibility**: 'Private' | 'Public' | string: Ingress visibility (immutable).

## MasterProfile
### Properties
* **subnetId**: string: The Azure resource ID of the master subnet (immutable).
* **vmSize**: 'Standard_D2s_v3' | 'Standard_D4s_v3' | 'Standard_D8s_v3' | string: The size of the master VMs (immutable).

## NetworkProfile
### Properties
* **podCidr**: string: The CIDR used for OpenShift/Kubernetes Pods (immutable).
* **serviceCidr**: string: The CIDR used for OpenShift/Kubernetes Services (immutable).

## OpenShiftClusterCredentials
### Properties
* **kubeadminPassword**: string: The password for the kubeadmin user
* **kubeadminUsername**: string: The username for the kubeadmin user

## OpenShiftClusterProperties
### Properties
* **apiserverProfile**: [APIServerProfile](#apiserverprofile): The cluster API server profile.
* **clusterProfile**: [ClusterProfile](#clusterprofile): The cluster profile.
* **consoleProfile**: [ConsoleProfile](#consoleprofile): The console profile.
* **ingressProfiles**: [IngressProfile](#ingressprofile)[]: The cluster ingress profiles.
* **masterProfile**: [MasterProfile](#masterprofile): The cluster master profile.
* **networkProfile**: [NetworkProfile](#networkprofile): The cluster network profile.
* **provisioningState**: 'AdminUpdating' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: The cluster provisioning state (immutable).
* **servicePrincipalProfile**: [ServicePrincipalProfile](#serviceprincipalprofile): The cluster service principal profile.
* **workerProfiles**: [WorkerProfile](#workerprofile)[]: The cluster worker profiles.

## ServicePrincipalProfile
### Properties
* **clientId**: string: The client ID used for the cluster (immutable).
* **clientSecret**: string: The client secret used for the cluster (immutable).

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkerProfile
### Properties
* **count**: int: The number of worker VMs.  Must be between 3 and 20 (immutable).
* **diskSizeGB**: int: The disk size of the worker VMs.  Must be 128 or greater (immutable).
* **name**: string: The worker profile name.  Must be "worker" (immutable).
* **subnetId**: string: The Azure resource ID of the worker subnet (immutable).
* **vmSize**: 'Standard_D2s_v3' | 'Standard_D4s_v3' | 'Standard_D8s_v3' | string: The size of the worker VMs (immutable).

