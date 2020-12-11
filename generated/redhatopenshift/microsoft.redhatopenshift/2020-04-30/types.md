# Microsoft.RedHatOpenShift @ 2020-04-30

## Resource Microsoft.RedHatOpenShift/openShiftClusters@2020-04-30
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-30' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OpenShiftClusterProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.RedHatOpenShift/openShiftClusters' (ReadOnly, DeployTimeConstant)

## OpenShiftClusterProperties
### Properties
* **apiserverProfile**: APIServerProfile
* **clusterProfile**: ClusterProfile
* **consoleProfile**: ConsoleProfile
* **ingressProfiles**: IngressProfile[]
* **masterProfile**: MasterProfile
* **networkProfile**: NetworkProfile
* **provisioningState**: 'AdminUpdating' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **servicePrincipalProfile**: ServicePrincipalProfile
* **workerProfiles**: WorkerProfile[]

## APIServerProfile
### Properties
* **ip**: string
* **url**: string
* **visibility**: 'Private' | 'Public'

## ClusterProfile
### Properties
* **domain**: string
* **pullSecret**: string
* **resourceGroupId**: string
* **version**: string

## ConsoleProfile
### Properties
* **url**: string

## IngressProfile
### Properties
* **ip**: string
* **name**: string
* **visibility**: 'Private' | 'Public'

## MasterProfile
### Properties
* **subnetId**: string
* **vmSize**: 'Standard_D2s_v3' | 'Standard_D4s_v3' | 'Standard_D8s_v3'

## NetworkProfile
### Properties
* **podCidr**: string
* **serviceCidr**: string

## ServicePrincipalProfile
### Properties
* **clientId**: string
* **clientSecret**: string

## WorkerProfile
### Properties
* **count**: int
* **diskSizeGB**: int
* **name**: string
* **subnetId**: string
* **vmSize**: 'Standard_D2s_v3' | 'Standard_D4s_v3' | 'Standard_D8s_v3'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

