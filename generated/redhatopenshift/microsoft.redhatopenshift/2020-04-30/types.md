# Microsoft.RedHatOpenShift @ 2020-04-30

## Resource Microsoft.RedHatOpenShift/openShiftClusters@2020-04-30 (Async)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OpenShiftClusterProperties](#openshiftclusterproperties): OpenShiftClusterProperties represents an OpenShift cluster's properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.RedHatOpenShift/openShiftClusters' (ReadOnly, DeployTimeConstant): The resource type

## Function listCredentials (Microsoft.RedHatOpenShift/openShiftClusters@2020-04-30)
* **Resource**: Microsoft.RedHatOpenShift/openShiftClusters
* **ApiVersion**: 2020-04-30
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
* **ip**: string: The IP of the cluster API server (immutable).
* **url**: string: The URL to access the cluster API server (immutable).
* **visibility**: 'Private' | 'Public': Visibility represents visibility.

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
* **visibility**: 'Private' | 'Public': Visibility represents visibility.

## MasterProfile
### Properties
* **subnetId**: string: The Azure resource ID of the master subnet (immutable).
* **vmSize**: 'Standard_D2s_v3' | 'Standard_D4s_v3' | 'Standard_D8s_v3': VMSize represents a VM size.

## NetworkProfile
### Properties
* **podCidr**: string: The CIDR used for OpenShift/Kubernetes Pods (immutable).
* **serviceCidr**: string: The CIDR used for OpenShift/Kubernetes Services (immutable).

## ServicePrincipalProfile
### Properties
* **clientId**: string: The client ID used for the cluster (immutable).
* **clientSecret**: string: The client secret used for the cluster (immutable).

## WorkerProfile
### Properties
* **count**: int: The number of worker VMs.  Must be between 3 and 20 (immutable).
* **diskSizeGB**: int: The disk size of the worker VMs.  Must be 128 or greater (immutable).
* **name**: string: The worker profile name.  Must be "worker" (immutable).
* **subnetId**: string: The Azure resource ID of the worker subnet (immutable).
* **vmSize**: 'Standard_D2s_v3' | 'Standard_D4s_v3' | 'Standard_D8s_v3': VMSize represents a VM size.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OpenShiftClusterCredentials
### Properties
* **kubeadminPassword**: string (ReadOnly): The password for the kubeadmin user
* **kubeadminUsername**: string (ReadOnly): The username for the kubeadmin user

