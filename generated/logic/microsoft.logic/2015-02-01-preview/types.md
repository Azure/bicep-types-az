# Microsoft.Logic @ 2015-02-01-preview

## Resource Microsoft.Logic/workflows@2015-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowProperties](#workflowproperties): Gets or sets the workflow properties.
* **tags**: [ResourceTags](#resourcetags): Gets or sets the resource tags.
* **type**: 'Microsoft.Logic/workflows' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/workflows/accessKeys@2015-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowAccessKeyProperties](#workflowaccesskeyproperties): Gets or sets the workflow access key properties.
* **type**: 'Microsoft.Logic/workflows/accessKeys' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/workflows/runs@2015-02-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowRunProperties](#workflowrunproperties) (ReadOnly): Gets or sets the workflow run properties.
* **type**: 'Microsoft.Logic/workflows/runs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/workflows/runs/actions@2015-02-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowRunActionProperties](#workflowrunactionproperties) (ReadOnly): Gets or sets the workflow run action properties.
* **type**: 'Microsoft.Logic/workflows/runs/actions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/workflows/triggers@2015-02-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowTriggerProperties](#workflowtriggerproperties) (ReadOnly): Gets or sets the workflow trigger properties.
* **type**: 'Microsoft.Logic/workflows/triggers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/workflows/triggers/histories@2015-02-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowTriggerHistoryProperties](#workflowtriggerhistoryproperties) (ReadOnly): Gets the workflow trigger history properties.
* **type**: 'Microsoft.Logic/workflows/triggers/histories' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/workflows/versions@2015-02-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Gets or sets the resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowVersionProperties](#workflowversionproperties) (ReadOnly): Gets or sets the workflow version properties.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Gets or sets the resource tags.
* **type**: 'Microsoft.Logic/workflows/versions' (ReadOnly, DeployTimeConstant): The resource type

## Function list (Microsoft.Logic/workflows/accessKeys@2015-02-01-preview)
* **Resource**: Microsoft.Logic/workflows/accessKeys
* **ApiVersion**: 2015-02-01-preview
* **Output**: [WorkflowSecretKeys](#workflowsecretkeys)

## ContentHash
### Properties
* **algorithm**: string: Gets or sets the algorithm.
* **value**: string: Gets or sets the value.

## ContentLink
### Properties
* **contentHash**: [ContentHash](#contenthash): Gets or sets the content hash.
* **contentSize**: int: Gets or sets the content size.
* **contentVersion**: string: Gets or sets the content version.
* **metadata**: any: Gets or sets the metadata.
* **uri**: string: Gets or sets the content link URI.

## ResourceReference
### Properties
* **id**: string: Gets or sets the resource id.
* **name**: string (ReadOnly): Gets the resource name.
* **type**: string (ReadOnly): Gets the resource type.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **name**: 'Basic' | 'Free' | 'NotSpecified' | 'Premium' | 'Shared' | 'Standard': Gets or sets the name.
* **plan**: [ResourceReference](#resourcereference): Gets or sets the reference to plan.

## WorkflowAccessKeyProperties
### Properties
* **notAfter**: string: Gets or sets the not-after time.
* **notBefore**: string: Gets or sets the not-before time.

## WorkflowOutputParameter
### Properties
* **error**: any (ReadOnly): Gets the error.
* **metadata**: any: Gets or sets the metadata.
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'NotSpecified' | 'Object' | 'SecureObject' | 'SecureString' | 'String': Gets or sets the type.
* **value**: any: Gets or sets the value.

## WorkflowParameter
### Properties
* **metadata**: any: Gets or sets the metadata.
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'NotSpecified' | 'Object' | 'SecureObject' | 'SecureString' | 'String': Gets or sets the type.
* **value**: any: Gets or sets the value.

## WorkflowProperties
### Properties
* **accessEndpoint**: string (ReadOnly): Gets the access endpoint.
* **changedTime**: string (ReadOnly): Gets the changed time.
* **createdTime**: string (ReadOnly): Gets the created time.
* **definition**: any: Gets or sets the definition.
* **definitionLink**: [ContentLink](#contentlink): Gets or sets the link to definition.
* **parameters**: [WorkflowPropertiesParameters](#workflowpropertiesparameters): Gets or sets the parameters.
* **parametersLink**: [ContentLink](#contentlink): Gets or sets the link to parameters.
* **provisioningState**: 'Moving' | 'NotSpecified' | 'Succeeded' (ReadOnly): Gets the provisioning state.
* **sku**: [Sku](#sku): Gets or sets the sku.
* **state**: 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended': Gets or sets the state.
* **version**: string (ReadOnly): Gets the version.

## WorkflowPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [WorkflowParameter](#workflowparameter)

## WorkflowRunActionProperties
### Properties
* **code**: string (ReadOnly): Gets the code.
* **endTime**: string (ReadOnly): Gets the end time.
* **error**: any (ReadOnly): Gets the error.
* **inputsLink**: [ContentLink](#contentlink) (ReadOnly): Gets the link to inputs.
* **outputsLink**: [ContentLink](#contentlink) (ReadOnly): Gets the link to outputs.
* **startTime**: string (ReadOnly): Gets the start time.
* **status**: 'Aborted' | 'Cancelled' | 'Failed' | 'Faulted' | 'NotSpecified' | 'Paused' | 'Running' | 'Skipped' | 'Succeeded' | 'Suspended' | 'TimedOut' | 'Waiting' (ReadOnly): Gets the status.
* **trackingId**: string (ReadOnly): Gets the trackingId.

## WorkflowRunProperties
### Properties
* **code**: string (ReadOnly): Gets the code.
* **correlationId**: string (ReadOnly): Gets the correlation id.
* **endTime**: string (ReadOnly): Gets the end time.
* **error**: any (ReadOnly): Gets the error.
* **outputs**: [WorkflowRunPropertiesOutputs](#workflowrunpropertiesoutputs) (ReadOnly): Gets the outputs.
* **startTime**: string (ReadOnly): Gets the start time.
* **status**: 'Aborted' | 'Cancelled' | 'Failed' | 'Faulted' | 'NotSpecified' | 'Paused' | 'Running' | 'Skipped' | 'Succeeded' | 'Suspended' | 'TimedOut' | 'Waiting' (ReadOnly): Gets the status.
* **trigger**: [WorkflowRunTrigger](#workflowruntrigger) (ReadOnly): Gets the fired trigger.
* **workflow**: [ResourceReference](#resourcereference) (ReadOnly): Gets the reference to workflow version.

## WorkflowRunPropertiesOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: [WorkflowOutputParameter](#workflowoutputparameter)

## WorkflowRunTrigger
### Properties
* **code**: string (ReadOnly): Gets the code.
* **endTime**: string (ReadOnly): Gets the end time.
* **error**: any (ReadOnly): Gets the error.
* **inputs**: any (ReadOnly): Gets the inputs.
* **inputsLink**: [ContentLink](#contentlink) (ReadOnly): Gets the link to inputs.
* **name**: string (ReadOnly): Gets the name.
* **outputs**: any (ReadOnly): Gets the outputs.
* **outputsLink**: [ContentLink](#contentlink) (ReadOnly): Gets the link to outputs.
* **startTime**: string (ReadOnly): Gets the start time.
* **status**: 'Aborted' | 'Cancelled' | 'Failed' | 'Faulted' | 'NotSpecified' | 'Paused' | 'Running' | 'Skipped' | 'Succeeded' | 'Suspended' | 'TimedOut' | 'Waiting' (ReadOnly): Gets the status.
* **trackingId**: string (ReadOnly): Gets the trackingId.

## WorkflowSecretKeys
### Properties
* **primarySecretKey**: string (ReadOnly): Gets the primary secret key.
* **secondarySecretKey**: string (ReadOnly): Gets the secondary secret key.

## WorkflowTriggerHistoryProperties
### Properties
* **code**: string (ReadOnly): Gets the code.
* **endTime**: string (ReadOnly): Gets the end time.
* **error**: any (ReadOnly): Gets the error.
* **fired**: bool (ReadOnly): Gets a value indicating whether trigger was fired.
* **inputsLink**: [ContentLink](#contentlink) (ReadOnly): Gets the link to input parameters.
* **outputsLink**: [ContentLink](#contentlink) (ReadOnly): Gets the link to output parameters.
* **run**: [ResourceReference](#resourcereference) (ReadOnly): Gets the reference to workflow run.
* **startTime**: string (ReadOnly): Gets the start time.
* **status**: 'Aborted' | 'Cancelled' | 'Failed' | 'Faulted' | 'NotSpecified' | 'Paused' | 'Running' | 'Skipped' | 'Succeeded' | 'Suspended' | 'TimedOut' | 'Waiting' (ReadOnly): Gets the status.
* **trackingId**: string (ReadOnly): Gets the tracking id.

## WorkflowTriggerProperties
### Properties
* **changedTime**: string (ReadOnly): Gets the changed time.
* **createdTime**: string (ReadOnly): Gets the created time.
* **lastExecutionTime**: string (ReadOnly): Gets the last execution time.
* **nextExecutionTime**: string (ReadOnly): Gets the next execution time.
* **provisioningState**: 'Creating' | 'NotSpecified' | 'Succeeded' | 'Updating' (ReadOnly): Gets the provisioning state.
* **recurrence**: [WorkflowTriggerRecurrence](#workflowtriggerrecurrence) (ReadOnly): Gets the workflow trigger recurrence.
* **state**: 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended' (ReadOnly): Gets the state.
* **status**: 'Aborted' | 'Cancelled' | 'Failed' | 'Faulted' | 'NotSpecified' | 'Paused' | 'Running' | 'Skipped' | 'Succeeded' | 'Suspended' | 'TimedOut' | 'Waiting' (ReadOnly): Gets the status.
* **workflow**: [ResourceReference](#resourcereference) (ReadOnly): Gets the reference to workflow.

## WorkflowTriggerRecurrence
### Properties
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'Second' | 'Week' | 'Year': Gets or sets the frequency.
* **interval**: int: Gets or sets the interval.
* **startTime**: string: Gets or sets the start time.
* **timeZone**: string: Gets or sets the time zone.

## WorkflowVersionProperties
### Properties
* **accessEndpoint**: string (ReadOnly): Gets the access endpoint.
* **changedTime**: string (ReadOnly): Gets the changed time.
* **createdTime**: string (ReadOnly): Gets the created time.
* **definition**: any: Gets or sets the definition.
* **definitionLink**: [ContentLink](#contentlink): Gets or sets the link to definition.
* **parameters**: [WorkflowVersionPropertiesParameters](#workflowversionpropertiesparameters): Gets or sets the parameters.
* **parametersLink**: [ContentLink](#contentlink): Gets or sets the link to parameters.
* **sku**: [Sku](#sku): Gets or sets the sku.
* **state**: 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended': Gets or sets the state.
* **version**: string (ReadOnly): Gets the version.

## WorkflowVersionPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [WorkflowParameter](#workflowparameter)

