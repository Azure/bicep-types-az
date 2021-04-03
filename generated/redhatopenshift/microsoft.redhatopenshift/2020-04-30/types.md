# Microsoft.RedHatOpenShift @ 2020-04-30

## Resource Microsoft.RedHatOpenShift/openShiftClusters@2020-04-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-30' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OpenShiftClusterProperties](#openshiftclusterproperties): OpenShiftClusterProperties represents an OpenShift cluster's properties.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.RedHatOpenShift/openShiftClusters' (ReadOnly, DeployTimeConstant): The resource type

## OpenShiftClusterProperties
### Properties
* **apiserverProfile**: [APIServerProfile](#apiserverprofile): APIServerProfile represents an API server profile.
* **clusterProfile**: [ClusterProfile](#clusterprofile): ClusterProfile represents a cluster profile.
* **consoleProfile**: [ConsoleProfile](#consoleprofile): ConsoleProfile represents a console profile.
* **ingressProfiles**: [IngressProfile](#ingressprofile)[]: The cluster ingress profiles.
* **masterProfile**: [MasterProfile](#masterprofile): MasterProfile represents a master profile.
* **networkProfile**: [NetworkProfile](#networkprofile): NetworkProfile represents a network profile.
* **provisioningState**: 'AdminUpdating' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating': The cluster provisioning state (immutable).
* **servicePrincipalProfile**: [ServicePrincipalProfile](#serviceprincipalprofile): ServicePrincipalProfile represents a service principal profile.
* **workerProfiles**: [WorkerProfile](#workerprofile)[]: The cluster worker profiles.

## APIServerProfile
### Properties
* **ip**: string: The IP of the cluster API server (immutable).
* **url**: string: The URL to access the cluster API server (immutable).
* **visibility**: 'Private' | 'Public': API server visibility (immutable).

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
* **visibility**: 'Private' | 'Public': Ingress visibility (immutable).

## MasterProfile
### Properties
* **subnetId**: string: The Azure resource ID of the master subnet (immutable).
* **vmSize**: 'Standard_D2s_v3' | 'Standard_D4s_v3' | 'Standard_D8s_v3': The size of the master VMs (immutable).

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
* **vmSize**: 'Standard_D2s_v3' | 'Standard_D4s_v3' | 'Standard_D8s_v3': The size of the worker VMs (immutable).

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

