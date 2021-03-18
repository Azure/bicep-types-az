# Microsoft.MachineLearningServices @ 2020-08-01

## Resource Microsoft.MachineLearningServices/workspaces@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkspaceProperties](#workspaceproperties)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/computes@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Compute](#compute)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/connections@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkspaceConnectionProps](#workspaceconnectionprops)
* **type**: 'Microsoft.MachineLearningServices/workspaces/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' (Required)
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities)

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties](#componentssgqdofschemasidentitypropertiesuserassignedidentitiesadditionalproperties)

## ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## WorkspaceProperties
### Properties
* **allowPublicAccessWhenBehindVnet**: bool
* **applicationInsights**: string
* **containerRegistry**: string
* **creationTime**: string (ReadOnly)
* **description**: string
* **discoveryUrl**: string
* **encryption**: [EncryptionProperty](#encryptionproperty)
* **friendlyName**: string
* **hbiWorkspace**: bool
* **imageBuildCompute**: string
* **keyVault**: string
* **notebookInfo**: [NotebookResourceInfo](#notebookresourceinfo) (ReadOnly)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **privateLinkCount**: int (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **serviceProvisionedResourceGroup**: string (ReadOnly)
* **sharedPrivateLinkResources**: [SharedPrivateLinkResource](#sharedprivatelinkresource)[]
* **storageAccount**: string
* **workspaceId**: string (ReadOnly)

## EncryptionProperty
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties) (Required)
* **status**: 'Disabled' | 'Enabled' (Required)

## KeyVaultProperties
### Properties
* **identityClientId**: string
* **keyIdentifier**: string (Required)
* **keyVaultArmId**: string (Required)

## NotebookResourceInfo
### Properties
* **fqdn**: string
* **notebookPreparationError**: [NotebookPreparationError](#notebookpreparationerror)
* **resourceId**: string

## NotebookPreparationError
### Properties
* **errorMessage**: string
* **statusCode**: int

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout'

## SharedPrivateLinkResource
### Properties
* **name**: string
* **properties**: [SharedPrivateLinkResourceProperty](#sharedprivatelinkresourceproperty)

## SharedPrivateLinkResourceProperty
### Properties
* **groupId**: string
* **privateLinkResourceId**: string
* **requestMessage**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout'

## Sku
### Properties
* **name**: string
* **tier**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Compute
* **Discriminator**: computeType

### Base Properties
* **computeLocation**: string
* **createdOn**: string (ReadOnly)
* **description**: string
* **isAttachedCompute**: bool (ReadOnly)
* **modifiedOn**: string (ReadOnly)
* **provisioningErrors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **resourceId**: string
### AKS
#### Properties
* **computeType**: 'AKS' (Required)
* **properties**: [AKSProperties](#aksproperties)

### AmlCompute
#### Properties
* **computeType**: 'AmlCompute' (Required)
* **properties**: [AmlComputeProperties](#amlcomputeproperties)

### ComputeInstance
#### Properties
* **computeType**: 'ComputeInstance' (Required)
* **properties**: [ComputeInstanceProperties](#computeinstanceproperties)

### Databricks
#### Properties
* **computeType**: 'Databricks' (Required)
* **properties**: [DatabricksProperties](#databricksproperties)

### DataFactory
#### Properties
* **computeType**: 'DataFactory' (Required)

### DataLakeAnalytics
#### Properties
* **computeType**: 'DataLakeAnalytics' (Required)
* **properties**: [DataLakeAnalyticsProperties](#datalakeanalyticsproperties)

### HDInsight
#### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: [HDInsightProperties](#hdinsightproperties)

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: [VirtualMachineProperties](#virtualmachineproperties)


## MachineLearningServiceError
### Properties
* **error**: [ErrorResponse](#errorresponse) (ReadOnly)

## ErrorResponse
### Properties
* **code**: string (ReadOnly)
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly)
* **message**: string (ReadOnly)

## ErrorDetail
### Properties
* **code**: string (Required)
* **message**: string (Required)

## AKS
### Properties
* **computeType**: 'AKS' (Required)
* **properties**: [AKSProperties](#aksproperties)

## AKSProperties
### Properties
* **agentCount**: int
* **agentVmSize**: string
* **aksNetworkingConfiguration**: [AksNetworkingConfiguration](#aksnetworkingconfiguration)
* **clusterFqdn**: string
* **sslConfiguration**: [SslConfiguration](#sslconfiguration)
* **systemServices**: [SystemService](#systemservice)[] (ReadOnly)

## AksNetworkingConfiguration
### Properties
* **dnsServiceIP**: string
* **dockerBridgeCidr**: string
* **serviceCidr**: string
* **subnetId**: string

## SslConfiguration
### Properties
* **cert**: string
* **cname**: string
* **key**: string
* **status**: 'Auto' | 'Disabled' | 'Enabled'

## SystemService
### Properties
* **publicIpAddress**: string (ReadOnly)
* **systemServiceType**: string (ReadOnly)
* **version**: string (ReadOnly)

## AmlCompute
### Properties
* **computeType**: 'AmlCompute' (Required)
* **properties**: [AmlComputeProperties](#amlcomputeproperties)

## AmlComputeProperties
### Properties
* **allocationState**: 'Resizing' | 'Steady' (ReadOnly)
* **allocationStateTransitionTime**: string (ReadOnly)
* **currentNodeCount**: int (ReadOnly)
* **errors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly)
* **nodeStateCounts**: [NodeStateCounts](#nodestatecounts) (ReadOnly)
* **osType**: 'Linux' | 'Windows'
* **remoteLoginPortPublicAccess**: 'Disabled' | 'Enabled' | 'NotSpecified'
* **scaleSettings**: [ScaleSettings](#scalesettings)
* **subnet**: [ResourceId](#resourceid)
* **targetNodeCount**: int (ReadOnly)
* **userAccountCredentials**: [UserAccountCredentials](#useraccountcredentials)
* **vmPriority**: 'Dedicated' | 'LowPriority'
* **vmSize**: string

## NodeStateCounts
### Properties
* **idleNodeCount**: int (ReadOnly)
* **leavingNodeCount**: int (ReadOnly)
* **preemptedNodeCount**: int (ReadOnly)
* **preparingNodeCount**: int (ReadOnly)
* **runningNodeCount**: int (ReadOnly)
* **unusableNodeCount**: int (ReadOnly)

## ScaleSettings
### Properties
* **maxNodeCount**: int (Required)
* **minNodeCount**: int
* **nodeIdleTimeBeforeScaleDown**: string

## ResourceId
### Properties
* **id**: string (Required)

## UserAccountCredentials
### Properties
* **adminUserName**: string (Required)
* **adminUserPassword**: string
* **adminUserSshPublicKey**: string

## ComputeInstance
### Properties
* **computeType**: 'ComputeInstance' (Required)
* **properties**: [ComputeInstanceProperties](#computeinstanceproperties)

## ComputeInstanceProperties
### Properties
* **applications**: [ComputeInstanceApplication](#computeinstanceapplication)[] (ReadOnly)
* **applicationSharingPolicy**: 'Personal' | 'Shared'
* **computeInstanceAuthorizationType**: 'personal'
* **connectivityEndpoints**: [ComputeInstanceConnectivityEndpoints](#computeinstanceconnectivityendpoints) (ReadOnly)
* **createdBy**: [ComputeInstanceCreatedBy](#computeinstancecreatedby) (ReadOnly)
* **errors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly)
* **lastOperation**: [ComputeInstanceLastOperation](#computeinstancelastoperation) (ReadOnly)
* **personalComputeInstanceSettings**: [PersonalComputeInstanceSettings](#personalcomputeinstancesettings)
* **sshSettings**: [ComputeInstanceSshSettings](#computeinstancesshsettings)
* **state**: 'CreateFailed' | 'Creating' | 'Deleting' | 'JobRunning' | 'Restarting' | 'Running' | 'SettingUp' | 'SetupFailed' | 'Starting' | 'Stopped' | 'Stopping' | 'Unknown' | 'Unusable' | 'UserSettingUp' | 'UserSetupFailed' (ReadOnly)
* **subnet**: [ResourceId](#resourceid)
* **vmSize**: string

## ComputeInstanceApplication
### Properties
* **displayName**: string
* **endpointUri**: string

## ComputeInstanceConnectivityEndpoints
### Properties
* **privateIpAddress**: string (ReadOnly)
* **publicIpAddress**: string (ReadOnly)

## ComputeInstanceCreatedBy
### Properties
* **userId**: string (ReadOnly)
* **userName**: string (ReadOnly)
* **userOrgId**: string (ReadOnly)

## ComputeInstanceLastOperation
### Properties
* **operationName**: 'Create' | 'Delete' | 'Reimage' | 'Restart' | 'Start' | 'Stop'
* **operationStatus**: 'CreateFailed' | 'DeleteFailed' | 'InProgress' | 'ReimageFailed' | 'RestartFailed' | 'StartFailed' | 'StopFailed' | 'Succeeded'
* **operationTime**: string

## PersonalComputeInstanceSettings
### Properties
* **assignedUser**: [AssignedUser](#assigneduser)

## AssignedUser
### Properties
* **objectId**: string (Required)
* **tenantId**: string (Required)

## ComputeInstanceSshSettings
### Properties
* **adminPublicKey**: string
* **adminUserName**: string (ReadOnly)
* **sshPort**: int (ReadOnly)
* **sshPublicAccess**: 'Disabled' | 'Enabled'

## Databricks
### Properties
* **computeType**: 'Databricks' (Required)
* **properties**: [DatabricksProperties](#databricksproperties)

## DatabricksProperties
### Properties
* **databricksAccessToken**: string

## DataFactory
### Properties
* **computeType**: 'DataFactory' (Required)

## DataLakeAnalytics
### Properties
* **computeType**: 'DataLakeAnalytics' (Required)
* **properties**: [DataLakeAnalyticsProperties](#datalakeanalyticsproperties)

## DataLakeAnalyticsProperties
### Properties
* **dataLakeStoreAccountName**: string

## HDInsight
### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: [HDInsightProperties](#hdinsightproperties)

## HDInsightProperties
### Properties
* **address**: string
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials)
* **sshPort**: int

## VirtualMachineSshCredentials
### Properties
* **password**: string
* **privateKeyData**: string
* **publicKeyData**: string
* **username**: string

## VirtualMachine
### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: [VirtualMachineProperties](#virtualmachineproperties)

## VirtualMachineProperties
### Properties
* **address**: string
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials)
* **sshPort**: int
* **virtualMachineSize**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceConnectionProps
### Properties
* **authType**: string
* **category**: string
* **target**: string
* **value**: string

