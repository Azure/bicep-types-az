# Microsoft.Automation @ 2018-01-15

## Resource Microsoft.Automation/automationAccounts/compilationjobs@2018-01-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly): Gets or sets the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DscCompilationJobCreatePropertiesOrDscCompilationJobProperties](#dsccompilationjobcreatepropertiesordsccompilationjobproperties) (Required): Gets or sets the list of compilation job properties.
* **tags**: [DscCompilationJobCreateParametersTags](#dsccompilationjobcreateparameterstags) (WriteOnly): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts/compilationjobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/nodeConfigurations@2018-01-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DscNodeConfigurationCreateOrUpdateParametersPropertiesOrDscNodeConfigurationProperties](#dscnodeconfigurationcreateorupdateparameterspropertiesordscnodeconfigurationproperties): Node configuration properties
* **tags**: [DscNodeConfigurationCreateOrUpdateParametersTags](#dscnodeconfigurationcreateorupdateparameterstags) (WriteOnly): Gets or sets the tags attached to the resource.
* **type**: 'Microsoft.Automation/automationAccounts/nodeConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Automation/automationAccounts/nodes@2018-01-15 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DscNodeProperties](#dscnodeproperties) (ReadOnly): The properties of a DscNode.
* **type**: 'Microsoft.Automation/automationAccounts/nodes' (ReadOnly, DeployTimeConstant): The resource type

## ContentHash
### Properties
* **algorithm**: string (Required): Gets or sets the content hash algorithm used to hash the content.
* **value**: string (Required): Gets or sets expected hash value of the content.

## ContentSourceOrDscNodeConfigurationPropertiesSource
### Properties
* **hash**: [ContentHash](#contenthash) (WriteOnly): Gets or sets the hash.
* **type**: 'embeddedContent' | 'uri' | string (WriteOnly): Gets or sets the content source type.
* **value**: string (WriteOnly): Gets or sets the value of the content. This is based on the content source type.
* **version**: string (WriteOnly): Gets or sets the version of the content.

## DscCompilationJobCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DscCompilationJobCreatePropertiesOrDscCompilationJobProperties
### Properties
* **configuration**: [DscConfigurationAssociationProperty](#dscconfigurationassociationproperty) (Required): Gets or sets the configuration.
* **creationTime**: string (ReadOnly): Gets the creation time of the job.
* **endTime**: string (ReadOnly): Gets the end time of the job.
* **exception**: string (ReadOnly): Gets the exception of the job.
* **incrementNodeConfigurationBuild**: bool (WriteOnly): If a new build version of NodeConfiguration is required.
* **jobId**: string (ReadOnly): Gets the id of the job.
* **lastModifiedTime**: string (ReadOnly): Gets the last modified time of the job.
* **lastStatusModifiedTime**: string (ReadOnly): Gets the last status modified time of the job.
* **parameters**: [DscCompilationJobCreatePropertiesParameters](#dsccompilationjobcreatepropertiesparameters): Gets or sets the parameters of the job.
* **provisioningState**: 'Failed' | 'Processing' | 'Succeeded' | 'Suspended' | string (ReadOnly): The current provisioning state of the job.
* **runOn**: string (ReadOnly): Gets or sets the runOn which specifies the group name where the job is to be executed.
* **startedBy**: string (ReadOnly): Gets the compilation job started by.
* **startTime**: string (ReadOnly): Gets the start time of the job.
* **status**: 'Activating' | 'Blocked' | 'Completed' | 'Disconnected' | 'Failed' | 'New' | 'Removing' | 'Resuming' | 'Running' | 'Stopped' | 'Stopping' | 'Suspended' | 'Suspending' | string (ReadOnly): Gets or sets the status of the job.
* **statusDetails**: string (ReadOnly): Gets or sets the status details of the job.

## DscCompilationJobCreatePropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DscConfigurationAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the Dsc configuration.

## DscNodeConfigurationAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the dsc node configuration.

## DscNodeConfigurationCreateOrUpdateParametersPropertiesOrDscNodeConfigurationProperties
### Properties
* **configuration**: [DscConfigurationAssociationProperty](#dscconfigurationassociationproperty) (Required): Gets or sets the configuration of the node.
* **creationTime**: string (ReadOnly): Gets or sets creation time.
* **incrementNodeConfigurationBuild**: bool: If a new build version of NodeConfiguration is required.
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **nodeCount**: int (ReadOnly): Number of nodes with this node configuration assigned
* **source**: [ContentSourceOrDscNodeConfigurationPropertiesSource](#contentsourceordscnodeconfigurationpropertiessource) (Required): Gets or sets the source.

## DscNodeConfigurationCreateOrUpdateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DscNodeExtensionHandlerAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the extension handler.
* **version**: string: Gets or sets the version of the extension handler.

## DscNodeProperties
### Properties
* **accountId**: string: Gets or sets the account id of the node.
* **etag**: string: Gets or sets the etag of the resource.
* **extensionHandler**: [DscNodeExtensionHandlerAssociationProperty](#dscnodeextensionhandlerassociationproperty)[]: Gets or sets the list of extensionHandler properties for a Node.
* **ip**: string: Gets or sets the ip of the node.
* **lastSeen**: string: Gets or sets the last seen time of the node.
* **nodeConfiguration**: [DscNodeConfigurationAssociationProperty](#dscnodeconfigurationassociationproperty): Gets or sets the configuration of the node.
* **nodeId**: string: Gets or sets the node id.
* **registrationTime**: string: Gets or sets the registration time of the node.
* **status**: string: Gets or sets the status of the node.
* **totalCount**: int: Gets the total number of records matching filter criteria.

