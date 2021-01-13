# Microsoft.RedHatOpenShift @ 2021-01-31-preview

## Resource Microsoft.RedHatOpenShift/openShiftClusters@2021-01-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-31-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OpenShiftClusterProperties
* **systemData**: systemData (ReadOnly)
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
* **diskEncryptionSetId**: string
* **encryptionAtHost**: 'Disabled' | 'Enabled'
* **subnetId**: string
* **vmSize**: 'Standard_D16as_v4' | 'Standard_D16s_v3' | 'Standard_D2s_v3' | 'Standard_D32as_v4' | 'Standard_D32s_v3' | 'Standard_D4as_v4' | 'Standard_D4s_v3' | 'Standard_D8as_v4' | 'Standard_D8s_v3' | 'Standard_E16s_v3' | 'Standard_E32s_v3' | 'Standard_E4s_v3' | 'Standard_E8s_v3' | 'Standard_F16s_v2' | 'Standard_F32s_v2' | 'Standard_F4s_v2' | 'Standard_F8s_v2'

## NetworkProfile
### Properties
* **podCidr**: string
* **sdnProvider**: 'OpenShiftSDN' | 'OVNKubernetes'
* **serviceCidr**: string

## ServicePrincipalProfile
### Properties
* **clientId**: string
* **clientSecret**: string

## WorkerProfile
### Properties
* **count**: int
* **diskEncryptionSetId**: string
* **diskSizeGB**: int
* **encryptionAtHost**: 'Disabled' | 'Enabled'
* **name**: string
* **subnetId**: string
* **vmSize**: 'Standard_D16as_v4' | 'Standard_D16s_v3' | 'Standard_D2s_v3' | 'Standard_D32as_v4' | 'Standard_D32s_v3' | 'Standard_D4as_v4' | 'Standard_D4s_v3' | 'Standard_D8as_v4' | 'Standard_D8s_v3' | 'Standard_E16s_v3' | 'Standard_E32s_v3' | 'Standard_E4s_v3' | 'Standard_E8s_v3' | 'Standard_F16s_v2' | 'Standard_F32s_v2' | 'Standard_F4s_v2' | 'Standard_F8s_v2'

## systemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

