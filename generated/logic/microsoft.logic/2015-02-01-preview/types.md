# Microsoft.Logic @ 2015-02-01-preview

## Resource Microsoft.Logic/workflows@2015-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowProperties](#workflowproperties)
* **tags**: [ResourceTags](#resourcetags): Gets or sets the resource tags.
* **type**: 'Microsoft.Logic/workflows' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/workflows/accessKeys@2015-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowAccessKeyProperties](#workflowaccesskeyproperties)
* **type**: 'Microsoft.Logic/workflows/accessKeys' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/workflows/runs@2015-02-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowRunProperties](#workflowrunproperties) (ReadOnly)
* **type**: 'Microsoft.Logic/workflows/runs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/workflows/runs/actions@2015-02-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowRunActionProperties](#workflowrunactionproperties) (ReadOnly)
* **type**: 'Microsoft.Logic/workflows/runs/actions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/workflows/triggers@2015-02-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowTriggerProperties](#workflowtriggerproperties) (ReadOnly)
* **type**: 'Microsoft.Logic/workflows/triggers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/workflows/triggers/histories@2015-02-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowTriggerHistoryProperties](#workflowtriggerhistoryproperties) (ReadOnly)
* **type**: 'Microsoft.Logic/workflows/triggers/histories' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/workflows/versions@2015-02-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Gets or sets the resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowVersionProperties](#workflowversionproperties) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Gets or sets the resource tags.
* **type**: 'Microsoft.Logic/workflows/versions' (ReadOnly, DeployTimeConstant): The resource type

## Function list (Microsoft.Logic/workflows/accessKeys@2015-02-01-preview)
* **Resource**: Microsoft.Logic/workflows/accessKeys
* **ApiVersion**: 2015-02-01-preview
* **Output**: [WorkflowSecretKeys](#workflowsecretkeys)

## WorkflowProperties
### Properties
* **accessEndpoint**: string (ReadOnly): Gets the access endpoint.
* **changedTime**: string (ReadOnly): Gets the changed time.
* **createdTime**: string (ReadOnly): Gets the created time.
* **definition**: any: Any object
* **definitionLink**: [ContentLink](#contentlink)
* **parameters**: [WorkflowPropertiesParameters](#workflowpropertiesparameters): Gets or sets the parameters.
* **parametersLink**: [ContentLink](#contentlink)
* **provisioningState**: 'Moving' | 'NotSpecified' | 'Succeeded' (ReadOnly)
* **sku**: [Sku](#sku)
* **state**: 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended'
* **version**: string (ReadOnly): Gets the version.

## ContentLink
### Properties
* **contentHash**: [ContentHash](#contenthash)
* **contentSize**: int: Gets or sets the content size.
* **contentVersion**: string: Gets or sets the content version.
* **metadata**: any: Any object
* **uri**: string: Gets or sets the content link URI.

## ContentHash
### Properties
* **algorithm**: string: Gets or sets the algorithm.
* **value**: string: Gets or sets the value.

## WorkflowPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [WorkflowParameter](#workflowparameter)

## WorkflowParameter
### Properties
* **metadata**: any: Any object
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'NotSpecified' | 'Object' | 'SecureObject' | 'SecureString' | 'String'
* **value**: any: Any object

## Sku
### Properties
* **name**: 'Basic' | 'Free' | 'NotSpecified' | 'Premium' | 'Shared' | 'Standard'
* **plan**: [ResourceReference](#resourcereference)

## ResourceReference
### Properties
* **id**: string: Gets or sets the resource id.
* **name**: string (ReadOnly): Gets the resource name.
* **type**: string (ReadOnly): Gets the resource type.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkflowAccessKeyProperties
### Properties
* **notAfter**: string: Gets or sets the not-after time.
* **notBefore**: string: Gets or sets the not-before time.

## WorkflowRunProperties
### Properties
* **code**: string (ReadOnly): Gets the code.
* **correlationId**: string (ReadOnly): Gets the correlation id.
* **endTime**: string (ReadOnly): Gets the end time.
* **error**: any (ReadOnly): Any object
* **outputs**: [WorkflowRunPropertiesOutputs](#workflowrunpropertiesoutputs) (ReadOnly): Gets the outputs.
* **startTime**: string (ReadOnly): Gets the start time.
* **status**: 'Aborted' | 'Cancelled' | 'Failed' | 'Faulted' | 'NotSpecified' | 'Paused' | 'Running' | 'Skipped' | 'Succeeded' | 'Suspended' | 'TimedOut' | 'Waiting' (ReadOnly)
* **trigger**: [WorkflowRunTrigger](#workflowruntrigger) (ReadOnly)
* **workflow**: [ResourceReference](#resourcereference) (ReadOnly)

## WorkflowRunPropertiesOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: [WorkflowOutputParameter](#workflowoutputparameter)

## WorkflowOutputParameter
### Properties
* **error**: any (ReadOnly): Any object
* **metadata**: any (ReadOnly): Any object
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'NotSpecified' | 'Object' | 'SecureObject' | 'SecureString' | 'String' (ReadOnly)
* **value**: any (ReadOnly): Any object

## WorkflowRunTrigger
### Properties
* **code**: string (ReadOnly): Gets the code.
* **endTime**: string (ReadOnly): Gets the end time.
* **error**: any (ReadOnly): Any object
* **inputs**: any (ReadOnly): Any object
* **inputsLink**: [ContentLink](#contentlink) (ReadOnly)
* **name**: string (ReadOnly): Gets the name.
* **outputs**: any (ReadOnly): Any object
* **outputsLink**: [ContentLink](#contentlink) (ReadOnly)
* **startTime**: string (ReadOnly): Gets the start time.
* **status**: 'Aborted' | 'Cancelled' | 'Failed' | 'Faulted' | 'NotSpecified' | 'Paused' | 'Running' | 'Skipped' | 'Succeeded' | 'Suspended' | 'TimedOut' | 'Waiting' (ReadOnly)
* **trackingId**: string (ReadOnly): Gets the trackingId.

## WorkflowRunActionProperties
### Properties
* **code**: string (ReadOnly): Gets the code.
* **endTime**: string (ReadOnly): Gets the end time.
* **error**: any (ReadOnly): Any object
* **inputsLink**: [ContentLink](#contentlink) (ReadOnly)
* **outputsLink**: [ContentLink](#contentlink) (ReadOnly)
* **startTime**: string (ReadOnly): Gets the start time.
* **status**: 'Aborted' | 'Cancelled' | 'Failed' | 'Faulted' | 'NotSpecified' | 'Paused' | 'Running' | 'Skipped' | 'Succeeded' | 'Suspended' | 'TimedOut' | 'Waiting' (ReadOnly)
* **trackingId**: string (ReadOnly): Gets the trackingId.

## WorkflowTriggerProperties
### Properties
* **changedTime**: string (ReadOnly): Gets the changed time.
* **createdTime**: string (ReadOnly): Gets the created time.
* **lastExecutionTime**: string (ReadOnly): Gets the last execution time.
* **nextExecutionTime**: string (ReadOnly): Gets the next execution time.
* **provisioningState**: 'Creating' | 'NotSpecified' | 'Succeeded' | 'Updating' (ReadOnly)
* **recurrence**: [WorkflowTriggerRecurrence](#workflowtriggerrecurrence) (ReadOnly)
* **state**: 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended' (ReadOnly)
* **status**: 'Aborted' | 'Cancelled' | 'Failed' | 'Faulted' | 'NotSpecified' | 'Paused' | 'Running' | 'Skipped' | 'Succeeded' | 'Suspended' | 'TimedOut' | 'Waiting' (ReadOnly)
* **workflow**: [ResourceReference](#resourcereference) (ReadOnly)

## WorkflowTriggerRecurrence
### Properties
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'Second' | 'Week' | 'Year' (ReadOnly)
* **interval**: int (ReadOnly): Gets or sets the interval.
* **startTime**: string (ReadOnly): Gets or sets the start time.
* **timeZone**: string (ReadOnly): Gets or sets the time zone.

## WorkflowTriggerHistoryProperties
### Properties
* **code**: string (ReadOnly): Gets the code.
* **endTime**: string (ReadOnly): Gets the end time.
* **error**: any (ReadOnly): Any object
* **fired**: bool (ReadOnly): Gets a value indicating whether trigger was fired.
* **inputsLink**: [ContentLink](#contentlink) (ReadOnly)
* **outputsLink**: [ContentLink](#contentlink) (ReadOnly)
* **run**: [ResourceReference](#resourcereference) (ReadOnly)
* **startTime**: string (ReadOnly): Gets the start time.
* **status**: 'Aborted' | 'Cancelled' | 'Failed' | 'Faulted' | 'NotSpecified' | 'Paused' | 'Running' | 'Skipped' | 'Succeeded' | 'Suspended' | 'TimedOut' | 'Waiting' (ReadOnly)
* **trackingId**: string (ReadOnly): Gets the tracking id.

## WorkflowVersionProperties
### Properties
* **accessEndpoint**: string (ReadOnly): Gets the access endpoint.
* **changedTime**: string (ReadOnly): Gets the changed time.
* **createdTime**: string (ReadOnly): Gets the created time.
* **definition**: any (ReadOnly): Any object
* **definitionLink**: [ContentLink](#contentlink) (ReadOnly)
* **parameters**: [WorkflowVersionPropertiesParameters](#workflowversionpropertiesparameters) (ReadOnly): Gets or sets the parameters.
* **parametersLink**: [ContentLink](#contentlink) (ReadOnly)
* **sku**: [Sku](#sku) (ReadOnly)
* **state**: 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended' (ReadOnly)
* **version**: string (ReadOnly): Gets the version.

## WorkflowVersionPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [WorkflowParameter](#workflowparameter)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkflowSecretKeys
### Properties
* **primarySecretKey**: string (ReadOnly): Gets the primary secret key.
* **secondarySecretKey**: string (ReadOnly): Gets the secondary secret key.

