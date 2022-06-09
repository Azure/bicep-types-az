# Microsoft.MachineLearningServices @ 2022-02-01-preview

## Resource Microsoft.MachineLearningServices/workspaces@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): The properties of a machine learning workspace.
* **sku**: [Sku](#sku): The resource model definition representing SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [WorkspaceTags](#workspacetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/batchEndpoints@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BatchEndpointDetails](#batchendpointdetails) (Required): Batch endpoint configuration.
* **sku**: [Sku](#sku): The resource model definition representing SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MachineLearningServices/workspaces/batchEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BatchDeploymentDetails](#batchdeploymentdetails) (Required): Batch inference settings per deployment.
* **sku**: [Sku](#sku): The resource model definition representing SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/codes@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CodeContainerDetails](#codecontainerdetails) (Required): Container for code asset versions.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/codes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/codes/versions@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CodeVersionDetails](#codeversiondetails) (Required): Code asset version details.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/codes/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/components@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ComponentContainerDetails](#componentcontainerdetails) (Required): Component container definition.
<see href="https://docs.microsoft.com/en-us/azure/machine-learning/reference-yaml-component-command" />
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/components' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/components/versions@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ComponentVersionDetails](#componentversiondetails) (Required): Definition of a component version: defines resources that span component types.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/components/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/computes@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Compute](#compute): Machine Learning compute object.
* **sku**: [Sku](#sku): The resource model definition representing SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ComputeResourceTags](#computeresourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/connections@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceConnectionProps](#workspaceconnectionprops): Workspace Connection specific properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/data@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataContainerDetails](#datacontainerdetails) (Required): Container for data asset versions.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/data' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/data/versions@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataVersionBaseDetails](#dataversionbasedetails) (Required): Data version base definition
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/data/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/datastores@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatastoreDetails](#datastoredetails) (Required): Base definition for datastore contents configuration.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/datastores' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/environments@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentContainerDetails](#environmentcontainerdetails) (Required): Container for environment specification versions.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/environments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/environments/versions@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentVersionDetails](#environmentversiondetails) (Required): Environment version details.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/environments/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/jobs@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [JobBaseDetails](#jobbasedetails) (Required): Base definition for a job.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/models@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ModelContainerDetails](#modelcontainerdetails) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/models' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/models/versions@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ModelVersionDetails](#modelversiondetails) (Required): Model asset version details.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MachineLearningServices/workspaces/models/versions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/onlineEndpoints@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OnlineEndpointDetails](#onlineendpointdetails) (Required): Online endpoint configuration
* **sku**: [Sku](#sku): The resource model definition representing SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MachineLearningServices/workspaces/onlineEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **kind**: string: Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OnlineDeploymentDetails](#onlinedeploymentdetails) (Required)
* **sku**: [Sku](#sku): The resource model definition representing SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2022-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **sku**: [Sku](#sku): The resource model definition representing SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [PrivateEndpointConnectionTags](#privateendpointconnectiontags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.MachineLearningServices/workspaces@2022-02-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2022-02-01-preview
* **Output**: [ListWorkspaceKeysResult](#listworkspacekeysresult)

## Function listKeys (Microsoft.MachineLearningServices/workspaces/computes@2022-02-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2022-02-01-preview
* **Output**: [ComputeSecrets](#computesecrets)

## Function listkeys (Microsoft.MachineLearningServices/workspaces/batchEndpoints@2022-02-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/batchEndpoints
* **ApiVersion**: 2022-02-01-preview
* **Output**: [EndpointAuthKeys](#endpointauthkeys)

## Function listKeys (Microsoft.MachineLearningServices/workspaces/onlineEndpoints@2022-02-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/onlineEndpoints
* **ApiVersion**: 2022-02-01-preview
* **Output**: [EndpointAuthKeys](#endpointauthkeys)

## Function listNodes (Microsoft.MachineLearningServices/workspaces/computes@2022-02-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2022-02-01-preview
* **Output**: [AmlComputeNodesInformation](#amlcomputenodesinformation)

## Function listNotebookAccessToken (Microsoft.MachineLearningServices/workspaces@2022-02-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2022-02-01-preview
* **Output**: [NotebookAccessTokenResult](#notebookaccesstokenresult)

## Function listNotebookKeys (Microsoft.MachineLearningServices/workspaces@2022-02-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2022-02-01-preview
* **Output**: [ListNotebookKeysResult](#listnotebookkeysresult)

## Function listSecrets (Microsoft.MachineLearningServices/workspaces/datastores@2022-02-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/datastores
* **ApiVersion**: 2022-02-01-preview
* **Output**: [DatastoreSecrets](#datastoresecrets)

## Function listStorageAccountKeys (Microsoft.MachineLearningServices/workspaces@2022-02-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2022-02-01-preview
* **Output**: [ListStorageAccountKeysResult](#liststorageaccountkeysresult)

## AccountKeyDatastoreSecrets
### Properties
* **key**: string: Storage account key.
* **secretsType**: 'AccountKey' | 'Certificate' | 'KerberosKeytab' | 'KerberosPassword' | 'Sas' | 'ServicePrincipal' | string (Required): Enum to determine the datastore secrets type.

## AmlComputeNodeInformation
### Properties
* **nodeId**: string (ReadOnly): ID of the compute node.
* **nodeState**: 'idle' | 'leaving' | 'preempted' | 'preparing' | 'running' | 'unusable' | string (ReadOnly): State of the compute node. Values are idle, running, preparing, unusable, leaving and preempted.
* **port**: int (ReadOnly): SSH port number of the node.
* **privateIpAddress**: string (ReadOnly): Private IP address of the compute node.
* **publicIpAddress**: string (ReadOnly): Public IP address of the compute node.
* **runId**: string (ReadOnly): ID of the Experiment running on the node, if any else null.

## AmlComputeNodesInformation
### Properties
* **nextLink**: string (ReadOnly): The continuation token.
* **nodes**: [AmlComputeNodeInformation](#amlcomputenodeinformation)[] (ReadOnly): The collection of returned AmlCompute nodes details.

## AssetReferenceBase
* **Discriminator**: referenceType

### Base Properties
### DataPathAssetReference
#### Properties
* **datastoreId**: string: ARM resource ID of the datastore where the asset is located.
* **path**: string: The path of the file/directory in the datastore.
* **referenceType**: 'DataPath' (Required): [Required] Specifies the type of asset reference.

### IdAssetReference
#### Properties
* **assetId**: string (Required): [Required] ARM resource ID of the asset.
* **referenceType**: 'Id' (Required): [Required] Specifies the type of asset reference.

### OutputPathAssetReference
#### Properties
* **jobId**: string: ARM resource ID of the job.
* **path**: string: The path of the file/directory in the job output.
* **referenceType**: 'OutputPath' (Required): [Required] Specifies the type of asset reference.


## AutoMLJobEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AutoMLJobOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: [JobOutput](#joboutput)

## AutoMLVertical
* **Discriminator**: taskType

### Base Properties
* **logVerbosity**: 'Critical' | 'Debug' | 'Error' | 'Info' | 'NotSet' | 'Warning' | string: Enum for setting log verbosity.
### Classification
#### Properties
* **allowedModels**: 'BernoulliNaiveBayes' | 'DecisionTree' | 'ExtremeRandomTrees' | 'GradientBoosting' | 'KNN' | 'LightGBM' | 'LinearSVM' | 'LogisticRegression' | 'MultinomialNaiveBayes' | 'RandomForest' | 'SGD' | 'SVM' | 'XGBoostClassifier' | string[]: Allowed models for classification task.
* **blockedModels**: 'BernoulliNaiveBayes' | 'DecisionTree' | 'ExtremeRandomTrees' | 'GradientBoosting' | 'KNN' | 'LightGBM' | 'LinearSVM' | 'LogisticRegression' | 'MultinomialNaiveBayes' | 'RandomForest' | 'SGD' | 'SVM' | 'XGBoostClassifier' | string[]: Blocked models for classification task.
* **primaryMetric**: 'AUCWeighted' | 'Accuracy' | 'AveragePrecisionScoreWeighted' | 'NormMacroRecall' | 'PrecisionScoreWeighted' | string: Primary metrics for classification tasks.
* **taskType**: 'Classification' (Required): [Required] Task type for AutoMLJob.

### Forecasting
#### Properties
* **allowedModels**: 'Arimax' | 'AutoArima' | 'Average' | 'DecisionTree' | 'ElasticNet' | 'ExponentialSmoothing' | 'ExtremeRandomTrees' | 'GradientBoosting' | 'KNN' | 'LassoLars' | 'LightGBM' | 'Naive' | 'Prophet' | 'RandomForest' | 'SGD' | 'SeasonalAverage' | 'SeasonalNaive' | 'TCNForecaster' | 'XGBoostRegressor' | string[]: Allowed models for forecasting task.
* **blockedModels**: 'Arimax' | 'AutoArima' | 'Average' | 'DecisionTree' | 'ElasticNet' | 'ExponentialSmoothing' | 'ExtremeRandomTrees' | 'GradientBoosting' | 'KNN' | 'LassoLars' | 'LightGBM' | 'Naive' | 'Prophet' | 'RandomForest' | 'SGD' | 'SeasonalAverage' | 'SeasonalNaive' | 'TCNForecaster' | 'XGBoostRegressor' | string[]: Blocked models for forecasting task.
* **forecastingSettings**: [ForecastingSettings](#forecastingsettings): Forecasting specific parameters.
* **primaryMetric**: 'NormalizedMeanAbsoluteError' | 'NormalizedRootMeanSquaredError' | 'R2Score' | 'SpearmanCorrelation' | string: Primary metrics for Forecasting task.
* **taskType**: 'Forecasting' (Required): [Required] Task type for AutoMLJob.

### ImageClassification
#### Properties
* **primaryMetric**: 'AUCWeighted' | 'Accuracy' | 'AveragePrecisionScoreWeighted' | 'NormMacroRecall' | 'PrecisionScoreWeighted' | string: Primary metrics for classification tasks.
* **taskType**: 'ImageClassification' (Required): [Required] Task type for AutoMLJob.

### ImageClassificationMultilabel
#### Properties
* **primaryMetric**: 'AUCWeighted' | 'Accuracy' | 'AveragePrecisionScoreWeighted' | 'IOU' | 'NormMacroRecall' | 'PrecisionScoreWeighted' | string: Primary metrics for classification multilabel tasks.
* **taskType**: 'ImageClassificationMultilabel' (Required): [Required] Task type for AutoMLJob.

### ImageInstanceSegmentation
#### Properties
* **primaryMetric**: 'MeanAveragePrecision' | string: Primary metrics for InstanceSegmentation tasks.
* **taskType**: 'ImageInstanceSegmentation' (Required): [Required] Task type for AutoMLJob.

### ImageObjectDetection
#### Properties
* **primaryMetric**: 'MeanAveragePrecision' | string: Primary metrics for Image ObjectDetection task.
* **taskType**: 'ImageObjectDetection' (Required): [Required] Task type for AutoMLJob.

### Regression
#### Properties
* **allowedModels**: 'DecisionTree' | 'ElasticNet' | 'ExtremeRandomTrees' | 'GradientBoosting' | 'KNN' | 'LassoLars' | 'LightGBM' | 'RandomForest' | 'SGD' | 'XGBoostRegressor' | string[]: Allowed models for regression task.
* **blockedModels**: 'DecisionTree' | 'ElasticNet' | 'ExtremeRandomTrees' | 'GradientBoosting' | 'KNN' | 'LassoLars' | 'LightGBM' | 'RandomForest' | 'SGD' | 'XGBoostRegressor' | string[]: Blocked models for regression task.
* **primaryMetric**: 'NormalizedMeanAbsoluteError' | 'NormalizedRootMeanSquaredError' | 'R2Score' | 'SpearmanCorrelation' | string: Primary metrics for Regression task.
* **taskType**: 'Regression' (Required): [Required] Task type for AutoMLJob.

### TextClassification
#### Properties
* **primaryMetric**: 'AUCWeighted' | 'Accuracy' | 'AveragePrecisionScoreWeighted' | 'NormMacroRecall' | 'PrecisionScoreWeighted' | string: Primary metrics for classification tasks.
* **taskType**: 'TextClassification' (Required): [Required] Task type for AutoMLJob.

### TextClassificationMultilabel
#### Properties
* **primaryMetric**: 'AUCWeighted' | 'Accuracy' | 'AveragePrecisionScoreWeighted' | 'IOU' | 'NormMacroRecall' | 'PrecisionScoreWeighted' | string (ReadOnly): Primary metrics for classification multilabel tasks.
* **taskType**: 'TextClassificationMultilabel' (Required): [Required] Task type for AutoMLJob.

### TextNer
#### Properties
* **primaryMetric**: 'AUCWeighted' | 'Accuracy' | 'AveragePrecisionScoreWeighted' | 'NormMacroRecall' | 'PrecisionScoreWeighted' | string (ReadOnly): Primary metrics for classification tasks.
* **taskType**: 'TextNER' (Required): [Required] Task type for AutoMLJob.


## AutoPauseProperties
### Properties
* **delayInMinutes**: int
* **enabled**: bool

## AutoScaleProperties
### Properties
* **enabled**: bool
* **maxNodeCount**: int
* **minNodeCount**: int

## BatchDeploymentDetails
### Properties
* **codeConfiguration**: [CodeConfiguration](#codeconfiguration): Configuration for a scoring code asset.
* **compute**: string: Compute target for batch inference operation.
* **description**: string: Description of the endpoint deployment.
* **environmentId**: string: ARM resource ID of the environment specification for the endpoint deployment.
* **environmentVariables**: [EndpointDeploymentPropertiesBaseEnvironmentVariables](#endpointdeploymentpropertiesbaseenvironmentvariables): Environment variables configuration for the deployment.
* **errorThreshold**: int: Error threshold, if the error count for the entire input goes above this value,
the batch inference will be aborted. Range is [-1, int.MaxValue].
For FileDataset, this value is the count of file failures.
For TabularDataset, this value is the count of record failures.
If set to -1 (the lower bound), all failures during batch inference will be ignored.
* **loggingLevel**: 'Debug' | 'Info' | 'Warning' | string: Log verbosity for batch inferencing.
Increasing verbosity order for logging is : Warning, Info and Debug.
The default value is Info.
* **maxConcurrencyPerInstance**: int: Indicates maximum number of parallelism per instance.
* **miniBatchSize**: int: Size of the mini-batch passed to each batch invocation.
For FileDataset, this is the number of files per mini-batch.
For TabularDataset, this is the size of the records in bytes, per mini-batch.
* **model**: [AssetReferenceBase](#assetreferencebase): Base definition for asset references.
* **outputAction**: 'AppendRow' | 'SummaryOnly' | string: Enum to determine how batch inferencing will handle output
* **outputFileName**: string: Customized output file name for append_row output action.
* **properties**: [EndpointDeploymentPropertiesBaseProperties](#endpointdeploymentpropertiesbaseproperties): Property dictionary. Properties can be added, but not removed or altered.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Scaling' | 'Succeeded' | 'Updating' | string (ReadOnly): Possible values for DeploymentProvisioningState.
* **resources**: [ResourceConfiguration](#resourceconfiguration)
* **retrySettings**: [BatchRetrySettings](#batchretrysettings): Retry settings for a batch inference operation.

## BatchEndpointDefaults
### Properties
* **deploymentName**: string: Name of the deployment that will be default for the endpoint.
This deployment will end up getting 100% traffic when the endpoint scoring URL is invoked.

## BatchEndpointDetails
### Properties
* **authMode**: 'AADToken' | 'AMLToken' | 'Key' | string (Required): Enum to determine endpoint authentication mode.
* **defaults**: [BatchEndpointDefaults](#batchendpointdefaults): Batch endpoint default values
* **description**: string: Description of the inference endpoint.
* **keys**: [EndpointAuthKeys](#endpointauthkeys) (WriteOnly): Keys for endpoint authentication.
* **properties**: [EndpointPropertiesBaseProperties](#endpointpropertiesbaseproperties): Property dictionary. Properties can be added, but not removed or altered.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): State of endpoint provisioning.
* **scoringUri**: string (ReadOnly): Endpoint URI.
* **swaggerUri**: string (ReadOnly): Endpoint Swagger URI.

## BatchRetrySettings
### Properties
* **maxRetries**: int: Maximum retry count for a mini-batch
* **timeout**: string: Invocation timeout for a mini-batch, in ISO 8601 format.

## BuildContext
### Properties
* **contextUri**: string (Required): [Required] URI of the Docker build context used to build the image. Supports blob URIs on environment creation and may return blob or Git URIs.
<seealso href="https://docs.docker.com/engine/reference/commandline/build/#extended-description" />
* **dockerfilePath**: string: Path to the Dockerfile in the build context.
<seealso href="https://docs.docker.com/engine/reference/builder/" />

## CertificateDatastoreSecrets
### Properties
* **certificate**: string: Service principal certificate.
* **secretsType**: 'AccountKey' | 'Certificate' | 'KerberosKeytab' | 'KerberosPassword' | 'Sas' | 'ServicePrincipal' | string (Required): Enum to determine the datastore secrets type.

## CodeConfiguration
### Properties
* **codeId**: string: ARM resource ID of the code asset.
* **scoringScript**: string (Required): [Required] The script to execute on startup. eg. "score.py"

## CodeContainerDetails
### Properties
* **description**: string: The asset description text.
* **isArchived**: bool: Is the asset archived?
* **latestVersion**: string (ReadOnly): The latest version inside this container.
* **nextVersion**: string (ReadOnly): The next auto incremental version
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## CodeVersionDetails
### Properties
* **codeUri**: string: Uri where code is located
* **description**: string: The asset description text.
* **isAnonymous**: bool: If the name version are system generated (anonymous registration).
* **isArchived**: bool: Is the asset archived?
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## CommandJobEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CommandJobInputs
### Properties
### Additional Properties
* **Additional Properties Type**: [JobInput](#jobinput)

## CommandJobLimits
### Properties
* **jobLimitsType**: 'Command' | 'Sweep' | string (Required)
* **timeout**: string: The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds.

## CommandJobOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: [JobOutput](#joboutput)

## ComponentContainerDetails
### Properties
* **description**: string: The asset description text.
* **isArchived**: bool: Is the asset archived?
* **latestVersion**: string (ReadOnly): The latest version inside this container.
* **nextVersion**: string (ReadOnly): The next auto incremental version
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## ComponentVersionDetails
### Properties
* **componentSpec**: any: Any object
* **description**: string: The asset description text.
* **isAnonymous**: bool: If the name version are system generated (anonymous registration).
* **isArchived**: bool: Is the asset archived?
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## Compute
* **Discriminator**: computeType

### Base Properties
* **computeLocation**: string (ReadOnly): Location for the underlying compute
* **createdOn**: string (ReadOnly): The time at which the compute was created.
* **description**: string: The description of the Machine Learning compute.
* **disableLocalAuth**: bool: Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
* **isAttachedCompute**: bool (ReadOnly): Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
* **modifiedOn**: string (ReadOnly): The time at which the compute was last modified.
* **provisioningErrors**: [ErrorResponse](#errorresponse)[] (ReadOnly): Errors during provisioning
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning.
* **resourceId**: string: ARM resource id of the underlying compute
### AKS
#### Properties
* **computeType**: 'AKS' (Required): The type of compute

### AmlCompute
#### Properties
* **computeType**: 'AmlCompute' (Required): The type of compute

### ComputeInstance
#### Properties
* **computeType**: 'ComputeInstance' (Required): The type of compute

### Databricks
#### Properties
* **computeType**: 'Databricks' (Required): The type of compute

### DataFactory
#### Properties
* **computeType**: 'DataFactory' (Required): The type of compute

### DataLakeAnalytics
#### Properties
* **computeType**: 'DataLakeAnalytics' (Required): The type of compute

### HDInsight
#### Properties
* **computeType**: 'HDInsight' (Required): The type of compute

### Kubernetes
#### Properties
* **computeType**: 'Kubernetes' (Required): The type of compute

### SynapseSpark
#### Properties
* **computeType**: 'SynapseSpark' (Required): The type of compute
* **properties**: [SynapseSparkProperties](#synapsesparkproperties)

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required): The type of compute


## ComputeResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ComputeSecrets
* **Discriminator**: computeType

### Base Properties
### AksComputeSecrets
#### Properties
* **computeType**: 'AKS' (Required): The type of compute

### DatabricksComputeSecrets
#### Properties
* **computeType**: 'Databricks' (Required): The type of compute

### VirtualMachineSecrets
#### Properties
* **computeType**: 'VirtualMachine' (Required): The type of compute


## ContainerResourceRequirements
### Properties
* **containerResourceLimits**: [ContainerResourceSettings](#containerresourcesettings)
* **containerResourceRequests**: [ContainerResourceSettings](#containerresourcesettings)

## ContainerResourceSettings
### Properties
* **cpu**: string: Number of vCPUs request/limit for container. More info:
https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
* **gpu**: string: Number of Nvidia GPU cards request/limit for container. More info:
https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
* **memory**: string: Memory size request/limit for container. More info:
https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/

## CosmosDbSettings
### Properties
* **collectionsThroughput**: int: The throughput of the collections in cosmosdb database

## DataContainerDetails
### Properties
* **dataType**: 'MLTable' | 'UriFile' | 'UriFolder' | string (Required): Enum to determine the type of data.
* **description**: string: The asset description text.
* **isArchived**: bool: Is the asset archived?
* **latestVersion**: string (ReadOnly): The latest version inside this container.
* **nextVersion**: string (ReadOnly): The next auto incremental version
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## DatastoreCredentials
* **Discriminator**: credentialsType

### Base Properties
### AccountKeyDatastoreCredentials
#### Properties
* **credentialsType**: 'AccountKey' (Required): [Required] Credential type used to authentication with storage.
* **secrets**: [AccountKeyDatastoreSecrets](#accountkeydatastoresecrets) (Required, WriteOnly): Datastore account key secrets.

### CertificateDatastoreCredentials
#### Properties
* **authorityUrl**: string: Authority URL used for authentication.
* **clientId**: string (Required): [Required] Service principal client ID.
* **credentialsType**: 'Certificate' (Required): [Required] Credential type used to authentication with storage.
* **resourceUrl**: string: Resource the service principal has access to.
* **secrets**: [CertificateDatastoreSecrets](#certificatedatastoresecrets) (Required, WriteOnly): Datastore certificate secrets.
* **tenantId**: string (Required): [Required] ID of the tenant to which the service principal belongs.
* **thumbprint**: string (Required): [Required] Thumbprint of the certificate used for authentication.

### KerberosKeytabCredentials
#### Properties
* **credentialsType**: 'KerberosKeytab' (Required): [Required] Credential type used to authentication with storage.
* **secrets**: [KerberosKeytabSecrets](#kerberoskeytabsecrets) (Required, WriteOnly)

### KerberosPasswordCredentials
#### Properties
* **credentialsType**: 'KerberosPassword' (Required): [Required] Credential type used to authentication with storage.
* **secrets**: [KerberosPasswordSecrets](#kerberospasswordsecrets) (Required, WriteOnly)

### NoneDatastoreCredentials
#### Properties
* **credentialsType**: 'None' (Required): [Required] Credential type used to authentication with storage.

### SasDatastoreCredentials
#### Properties
* **credentialsType**: 'Sas' (Required): [Required] Credential type used to authentication with storage.
* **secrets**: [SasDatastoreSecrets](#sasdatastoresecrets) (Required, WriteOnly): Datastore SAS secrets.

### ServicePrincipalDatastoreCredentials
#### Properties
* **authorityUrl**: string: Authority URL used for authentication.
* **clientId**: string (Required): [Required] Service principal client ID.
* **credentialsType**: 'ServicePrincipal' (Required): [Required] Credential type used to authentication with storage.
* **resourceUrl**: string: Resource the service principal has access to.
* **secrets**: [ServicePrincipalDatastoreSecrets](#serviceprincipaldatastoresecrets) (Required, WriteOnly): Datastore Service Principal secrets.
* **tenantId**: string (Required): [Required] ID of the tenant to which the service principal belongs.


## DatastoreDetails
* **Discriminator**: datastoreType

### Base Properties
* **credentials**: [DatastoreCredentials](#datastorecredentials) (Required): Base definition for datastore credentials.
* **description**: string: The asset description text.
* **isDefault**: bool (ReadOnly): Readonly property to indicate if datastore is the workspace default datastore
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.
### AzureBlobDatastore
#### Properties
* **accountName**: string: Storage account name.
* **containerName**: string: Storage account container name.
* **datastoreType**: 'AzureBlob' (Required): [Required] Storage type backing the datastore.
* **endpoint**: string: Azure cloud endpoint for the storage account.
* **protocol**: string: Protocol used to communicate with the storage account.
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' | 'WorkspaceUserAssignedIdentity' | string

### AzureDataLakeGen1Datastore
#### Properties
* **datastoreType**: 'AzureDataLakeGen1' (Required): [Required] Storage type backing the datastore.
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' | 'WorkspaceUserAssignedIdentity' | string
* **storeName**: string (Required): [Required] Azure Data Lake store name.

### AzureDataLakeGen2Datastore
#### Properties
* **accountName**: string (Required): [Required] Storage account name.
* **datastoreType**: 'AzureDataLakeGen2' (Required): [Required] Storage type backing the datastore.
* **endpoint**: string: Azure cloud endpoint for the storage account.
* **filesystem**: string (Required): [Required] The name of the Data Lake Gen2 filesystem.
* **protocol**: string: Protocol used to communicate with the storage account.
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' | 'WorkspaceUserAssignedIdentity' | string

### AzureFileDatastore
#### Properties
* **accountName**: string (Required): [Required] Storage account name.
* **datastoreType**: 'AzureFile' (Required): [Required] Storage type backing the datastore.
* **endpoint**: string: Azure cloud endpoint for the storage account.
* **fileShareName**: string (Required): [Required] The name of the Azure file share that the datastore points to.
* **protocol**: string: Protocol used to communicate with the storage account.
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' | 'WorkspaceUserAssignedIdentity' | string

### HdfsDatastore
#### Properties
* **datastoreType**: 'Hdfs' (Required): [Required] Storage type backing the datastore.
* **hdfsServerCertificate**: string: The TLS cert of the HDFS server. Needs to be a base64 encoded string. Required if "Https" protocol is selected.
* **nameNodeAddress**: string (Required): [Required] IP Address or DNS HostName.
* **protocol**: string: Protocol used to communicate with the storage account (Https/Http).


## DatastoreSecrets
* **Discriminator**: secretsType

### Base Properties
### AccountKeyDatastoreSecrets
#### Properties
* **key**: string (ReadOnly): Storage account key.
* **secretsType**: 'AccountKey' (Required): [Required] Credential type used to authentication with storage.

### CertificateDatastoreSecrets
#### Properties
* **certificate**: string (ReadOnly): Service principal certificate.
* **secretsType**: 'Certificate' (Required): [Required] Credential type used to authentication with storage.

### KerberosKeytabSecrets
#### Properties
* **kerberosKeytab**: string (ReadOnly): Kerberos keytab secret.
* **secretsType**: 'KerberosKeytab' (Required): [Required] Credential type used to authentication with storage.

### KerberosPasswordSecrets
#### Properties
* **kerberosPassword**: string (ReadOnly): Kerberos password secret.
* **secretsType**: 'KerberosPassword' (Required): [Required] Credential type used to authentication with storage.

### SasDatastoreSecrets
#### Properties
* **sasToken**: string (ReadOnly): Storage container SAS token.
* **secretsType**: 'Sas' (Required): [Required] Credential type used to authentication with storage.

### ServicePrincipalDatastoreSecrets
#### Properties
* **clientSecret**: string (ReadOnly): Service principal secret.
* **secretsType**: 'ServicePrincipal' (Required): [Required] Credential type used to authentication with storage.


## DataVersionBaseDetails
* **Discriminator**: dataType

### Base Properties
* **dataUri**: string (Required): [Required] Uri of the data. Usage/meaning depends on Microsoft.MachineLearning.ManagementFrontEnd.Contracts.V20220201Preview.Assets.DataVersionBase.DataType
* **description**: string: The asset description text.
* **isAnonymous**: bool: If the name version are system generated (anonymous registration).
* **isArchived**: bool: Is the asset archived?
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.
### MLTableData
#### Properties
* **dataType**: 'MLTable' (Required): [Required] Specifies the type of data.
* **referencedUris**: string[]: Uris referenced in the MLTable definition (required for lineage)

### UriFileDataVersion
#### Properties
* **dataType**: 'UriFile' (Required): [Required] Specifies the type of data.

### UriFolderDataVersion
#### Properties
* **dataType**: 'UriFolder' (Required): [Required] Specifies the type of data.


## DistributionConfiguration
* **Discriminator**: distributionType

### Base Properties
### Mpi
#### Properties
* **distributionType**: 'Mpi' (Required): [Required] Specifies the type of distribution framework.
* **processCountPerInstance**: int: Number of processes per MPI node.

### PyTorch
#### Properties
* **distributionType**: 'PyTorch' (Required): [Required] Specifies the type of distribution framework.
* **processCountPerInstance**: int: Number of processes per node.

### TensorFlow
#### Properties
* **distributionType**: 'TensorFlow' (Required): [Required] Specifies the type of distribution framework.
* **parameterServerCount**: int: Number of parameter server tasks.
* **workerCount**: int: Number of workers. If not specified, will default to the instance count.


## EarlyTerminationPolicy
* **Discriminator**: policyType

### Base Properties
* **delayEvaluation**: int: Number of intervals by which to delay the first evaluation.
* **evaluationInterval**: int: Interval (number of runs) between policy evaluations.
### BanditPolicy
#### Properties
* **policyType**: 'Bandit' (Required): [Required] Name of policy configuration
* **slackAmount**: int: Absolute distance allowed from the best performing run.
* **slackFactor**: int: Ratio of the allowed distance from the best performing run.

### MedianStoppingPolicy
#### Properties
* **policyType**: 'MedianStopping' (Required): [Required] Name of policy configuration

### TruncationSelectionPolicy
#### Properties
* **policyType**: 'TruncationSelection' (Required): [Required] Name of policy configuration
* **truncationPercentage**: int: The percentage of runs to cancel at each evaluation interval.


## EncryptionKeyVaultProperties
### Properties
* **identityClientId**: string: For future use - The client id of the identity which will be used to access key vault.
* **keyIdentifier**: string (Required): Key vault uri to access the encryption key.
* **keyVaultArmId**: string (Required): The ArmId of the keyVault where the customer owned encryption key is present.

## EncryptionProperty
### Properties
* **identity**: [IdentityForCmk](#identityforcmk): Identity that will be used to access key vault for encryption at rest
* **keyVaultProperties**: [EncryptionKeyVaultProperties](#encryptionkeyvaultproperties) (Required)
* **status**: 'Disabled' | 'Enabled' | string (Required): Indicates whether or not the encryption is enabled for the workspace.

## EndpointAuthKeys
### Properties
* **primaryKey**: string: The primary key.
* **secondaryKey**: string: The secondary key.

## EndpointAuthKeys
### Properties
* **primaryKey**: string: The primary key.
* **secondaryKey**: string: The secondary key.

## EndpointAuthKeys
### Properties
* **primaryKey**: string: The primary key.
* **secondaryKey**: string: The secondary key.

## EndpointDeploymentPropertiesBaseEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointDeploymentPropertiesBaseEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointDeploymentPropertiesBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointDeploymentPropertiesBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointPropertiesBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EndpointPropertiesBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EnvironmentContainerDetails
### Properties
* **description**: string: The asset description text.
* **isArchived**: bool: Is the asset archived?
* **latestVersion**: string (ReadOnly): The latest version inside this container.
* **nextVersion**: string (ReadOnly): The next auto incremental version
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## EnvironmentVersionDetails
### Properties
* **build**: [BuildContext](#buildcontext): Configuration settings for Docker build context
* **condaFile**: string: Standard configuration file used by Conda that lets you install any kind of package, including Python, R, and C/C++ packages.
<see href="https://repo2docker.readthedocs.io/en/latest/config_files.html#environment-yml-install-a-conda-environment" />
* **description**: string: The asset description text.
* **environmentType**: 'Curated' | 'UserCreated' | string (ReadOnly): Environment type is either user created or curated by Azure ML service
* **image**: string: Name of the image that will be used for the environment.
<seealso href="https://docs.microsoft.com/en-us/azure/machine-learning/how-to-deploy-custom-docker-image#use-a-custom-base-image" />
* **inferenceConfig**: [InferenceContainerProperties](#inferencecontainerproperties)
* **isAnonymous**: bool: If the name version are system generated (anonymous registration).
* **isArchived**: bool: Is the asset archived?
* **osType**: 'Linux' | 'Windows' | string: The type of operating system.
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): Any object
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ErrorResponse
### Properties
* **error**: [ErrorDetail](#errordetail): The error detail.

## FlavorData
### Properties
* **data**: [FlavorData](#flavordata): Model flavor-specific data.

## FlavorData
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ForecastHorizon
* **Discriminator**: mode

### Base Properties
### AutoForecastHorizon
#### Properties
* **mode**: 'Auto' (Required): [Required] Set forecast horizon value selection mode.

### CustomForecastHorizon
#### Properties
* **mode**: 'Custom' (Required): [Required] Set forecast horizon value selection mode.
* **value**: int (Required): [Required] Forecast horizon value.


## ForecastingSettings
### Properties
* **countryOrRegionForHolidays**: string: Country or region for holidays for forecasting tasks.
These should be ISO 3166 two-letter country/region codes, for example 'US' or 'GB'.
* **cvStepSize**: int: Number of periods between the origin time of one CV fold and the next fold. For
example, if `CVStepSize` = 3 for daily data, the origin time for each fold will be
three days apart.
* **featureLags**: 'Auto' | 'None' | string: Flag for generating lags for the numeric features.
* **forecastHorizon**: [ForecastHorizon](#forecasthorizon): The desired maximum forecast horizon in units of time-series frequency.
* **frequency**: string: When forecasting, this parameter represents the period with which the forecast is desired, for example daily, weekly, yearly, etc. The forecast frequency is dataset frequency by default.
* **seasonality**: [Seasonality](#seasonality): Forecasting seasonality.
* **shortSeriesHandlingConfig**: 'Auto' | 'Drop' | 'None' | 'Pad' | string: The parameter defining how if AutoML should handle short time series.
* **targetAggregateFunction**: 'Max' | 'Mean' | 'Min' | 'None' | 'Sum' | string: Target aggregate function.
* **targetLags**: [TargetLags](#targetlags): The number of past periods to lag from the target column.
* **targetRollingWindowSize**: [TargetRollingWindowSize](#targetrollingwindowsize): Forecasting target rolling window size.
* **timeColumnName**: string: The name of the time column. This parameter is required when forecasting to specify the datetime column in the input data used for building the time series and inferring its frequency.
* **timeSeriesIdColumnNames**: string[]: The names of columns used to group a timeseries. It can be used to create multiple series.
If grain is not defined, the data set is assumed to be one time-series. This parameter is used with task type forecasting.
* **useStl**: 'None' | 'Season' | 'SeasonTrend' | string: Configure STL Decomposition of the time-series target column.

## IdentityConfiguration
* **Discriminator**: identityType

### Base Properties
### AmlToken
#### Properties
* **identityType**: 'AMLToken' (Required): [Required] Specifies the type of identity framework.

### ManagedIdentity
#### Properties
* **clientId**: string: Specifies a user-assigned identity by client ID. For system-assigned, do not set this field.
* **identityType**: 'Managed' (Required): [Required] Specifies the type of identity framework.
* **objectId**: string: Specifies a user-assigned identity by object ID. For system-assigned, do not set this field.
* **resourceId**: string: Specifies a user-assigned identity by ARM resource ID. For system-assigned, do not set this field.

### UserIdentity
#### Properties
* **identityType**: 'UserIdentity' (Required): [Required] Specifies the type of identity framework.


## IdentityForCmk
### Properties
* **userAssignedIdentity**: string: The ArmId of the user assigned identity that will be used to access the customer managed key vault

## InferenceContainerProperties
### Properties
* **livenessRoute**: [Route](#route)
* **readinessRoute**: [Route](#route)
* **scoringRoute**: [Route](#route)

## JobBaseDetails
* **Discriminator**: jobType

### Base Properties
* **computeId**: string: ARM resource ID of the compute resource.
* **description**: string: The asset description text.
* **displayName**: string: Display name of job.
* **experimentName**: string: The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
* **identity**: [IdentityConfiguration](#identityconfiguration): Base definition for identity configuration.
* **isArchived**: bool: Is the asset archived?
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **schedule**: [ScheduleBase](#schedulebase): Base definition of a schedule
* **services**: [JobBaseServices](#jobbaseservices): List of JobEndpoints.
For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
* **status**: 'CancelRequested' | 'Canceled' | 'Completed' | 'Failed' | 'Finalizing' | 'NotResponding' | 'NotStarted' | 'Paused' | 'Preparing' | 'Provisioning' | 'Queued' | 'Running' | 'Scheduled' | 'Starting' | 'Unknown' | string (ReadOnly): The status of a job.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.
### AutoMLJob
#### Properties
* **environmentId**: string: The ARM resource ID of the Environment specification for the job.
This is optional value to provide, if not provided, AutoML will default this to Production AutoML curated environment version when running the job.
* **environmentVariables**: [AutoMLJobEnvironmentVariables](#automljobenvironmentvariables): Environment variables included in the job.
* **jobType**: 'AutoML' (Required): [Required] Specifies the type of job.
* **outputs**: [AutoMLJobOutputs](#automljoboutputs): Mapping of output data bindings used in the job.
* **resources**: [ResourceConfiguration](#resourceconfiguration)
* **taskDetails**: [AutoMLVertical](#automlvertical) (Required): AutoML vertical class.
Base class for AutoML verticals - TableVertical/ImageVertical/NLPVertical

### CommandJob
#### Properties
* **codeId**: string: ARM resource ID of the code asset.
* **command**: string (Required): [Required] The command to execute on startup of the job. eg. "python train.py"
* **distribution**: [DistributionConfiguration](#distributionconfiguration): Base definition for job distribution configuration.
* **environmentId**: string (Required): [Required] The ARM resource ID of the Environment specification for the job.
* **environmentVariables**: [CommandJobEnvironmentVariables](#commandjobenvironmentvariables): Environment variables included in the job.
* **inputs**: [CommandJobInputs](#commandjobinputs): Mapping of input data bindings used in the job.
* **jobType**: 'Command' (Required): [Required] Specifies the type of job.
* **limits**: [CommandJobLimits](#commandjoblimits): Command Job limit class.
* **outputs**: [CommandJobOutputs](#commandjoboutputs): Mapping of output data bindings used in the job.
* **parameters**: any (ReadOnly): Any object
* **resources**: [ResourceConfiguration](#resourceconfiguration)

### PipelineJob
#### Properties
* **inputs**: [PipelineJobInputs](#pipelinejobinputs): Inputs for the pipeline job.
* **jobs**: [PipelineJobJobs](#pipelinejobjobs): Jobs construct the Pipeline Job.
* **jobType**: 'Pipeline' (Required): [Required] Specifies the type of job.
* **outputs**: [PipelineJobOutputs](#pipelinejoboutputs): Outputs for the pipeline job
* **settings**: any: Any object

### SweepJob
#### Properties
* **earlyTermination**: [EarlyTerminationPolicy](#earlyterminationpolicy): Early termination policies enable canceling poor-performing runs before they complete
* **inputs**: [SweepJobInputs](#sweepjobinputs): Mapping of input data bindings used in the job.
* **jobType**: 'Sweep' (Required): [Required] Specifies the type of job.
* **limits**: [SweepJobLimits](#sweepjoblimits): Sweep Job limit class.
* **objective**: [Objective](#objective) (Required): Optimization objective.
* **outputs**: [SweepJobOutputs](#sweepjoboutputs): Mapping of output data bindings used in the job.
* **samplingAlgorithm**: [SamplingAlgorithm](#samplingalgorithm) (Required): The Sampling Algorithm used to generate hyperparameter values, along with properties to
configure the algorithm
* **searchSpace**: any (Required): Any object
* **trial**: [TrialComponent](#trialcomponent) (Required): Trial component definition.


## JobBaseServices
### Properties
### Additional Properties
* **Additional Properties Type**: [JobService](#jobservice)

## JobInput
* **Discriminator**: jobInputType

### Base Properties
* **description**: string: Description for the input.
### CustomModelJobInput
#### Properties
* **jobInputType**: 'CustomModel' (Required): [Required] Specifies the type of job.

### LiteralJobInput
#### Properties
* **jobInputType**: 'Literal' (Required): [Required] Specifies the type of job.
* **value**: string (Required): [Required] Literal value for the input.

### MLFlowModelJobInput
#### Properties
* **jobInputType**: 'MLFlowModel' (Required): [Required] Specifies the type of job.

### MLTableJobInput
#### Properties
* **jobInputType**: 'MLTable' (Required): [Required] Specifies the type of job.

### TritonModelJobInput
#### Properties
* **jobInputType**: 'TritonModel' (Required): [Required] Specifies the type of job.

### UriFileJobInput
#### Properties
* **jobInputType**: 'UriFile' (Required): [Required] Specifies the type of job.

### UriFolderJobInput
#### Properties
* **jobInputType**: 'UriFolder' (Required): [Required] Specifies the type of job.


## JobOutput
* **Discriminator**: jobOutputType

### Base Properties
* **description**: string: Description for the output.
### CustomModelJobOutput
#### Properties
* **jobOutputType**: 'CustomModel' (Required): [Required] Specifies the type of job.

### MLFlowModelJobOutput
#### Properties
* **jobOutputType**: 'MLFlowModel' (Required): [Required] Specifies the type of job.

### MLTableJobOutput
#### Properties
* **jobOutputType**: 'MLTable' (Required): [Required] Specifies the type of job.

### TritonModelJobOutput
#### Properties
* **jobOutputType**: 'TritonModel' (Required): [Required] Specifies the type of job.

### UriFileJobOutput
#### Properties
* **jobOutputType**: 'UriFile' (Required): [Required] Specifies the type of job.

### UriFolderJobOutput
#### Properties
* **jobOutputType**: 'UriFolder' (Required): [Required] Specifies the type of job.


## JobService
### Properties
* **endpoint**: string: Url for endpoint.
* **errorMessage**: string (ReadOnly): Any error in the service.
* **jobServiceType**: string: Endpoint type.
* **port**: int: Port for endpoint.
* **properties**: [JobServiceProperties](#jobserviceproperties): Additional properties to set on the endpoint.
* **status**: string (ReadOnly): Status of endpoint.

## JobServiceProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## KerberosKeytabSecrets
### Properties
* **kerberosKeytab**: string: Kerberos keytab secret.
* **secretsType**: 'AccountKey' | 'Certificate' | 'KerberosKeytab' | 'KerberosPassword' | 'Sas' | 'ServicePrincipal' | string (Required): Enum to determine the datastore secrets type.

## KerberosPasswordSecrets
### Properties
* **kerberosPassword**: string: Kerberos password secret.
* **secretsType**: 'AccountKey' | 'Certificate' | 'KerberosKeytab' | 'KerberosPassword' | 'Sas' | 'ServicePrincipal' | string (Required): Enum to determine the datastore secrets type.

## ListNotebookKeysResult
### Properties
* **primaryAccessKey**: string (ReadOnly)
* **secondaryAccessKey**: string (ReadOnly)

## ListNotebookKeysResult
### Properties
* **primaryAccessKey**: string (ReadOnly)
* **secondaryAccessKey**: string (ReadOnly)

## ListStorageAccountKeysResult
### Properties
* **userStorageKey**: string (ReadOnly)

## ListWorkspaceKeysResult
### Properties
* **appInsightsInstrumentationKey**: string (ReadOnly)
* **containerRegistryCredentials**: [RegistryListCredentialsResult](#registrylistcredentialsresult) (ReadOnly)
* **notebookAccessKeys**: [ListNotebookKeysResult](#listnotebookkeysresult) (ReadOnly)
* **userStorageKey**: string (ReadOnly)
* **userStorageResourceId**: string (ReadOnly)

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ModelContainerDetails
### Properties
* **description**: string: The asset description text.
* **isArchived**: bool: Is the asset archived?
* **latestVersion**: string (ReadOnly): The latest version inside this container.
* **nextVersion**: string (ReadOnly): The next auto incremental version
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## ModelVersionDetails
### Properties
* **description**: string: The asset description text.
* **flavors**: [ModelVersionFlavors](#modelversionflavors): Mapping of model flavors to their properties.
* **isAnonymous**: bool: If the name version are system generated (anonymous registration).
* **isArchived**: bool: Is the asset archived?
* **jobName**: string: Name of the training job which produced this model
* **modelType**: 'CustomModel' | 'MLFlowModel' | 'TritonModel' | string: The async operation state.
* **modelUri**: string: The URI path to the model contents.
* **properties**: [ResourceBaseProperties](#resourcebaseproperties): The asset property dictionary.
* **tags**: [ResourceBaseTags](#resourcebasetags): Tag dictionary. Tags can be added, removed, and updated.

## ModelVersionFlavors
### Properties
### Additional Properties
* **Additional Properties Type**: [FlavorData](#flavordata)

## NotebookAccessTokenResult
### Properties
* **accessToken**: string (ReadOnly)
* **expiresIn**: int (ReadOnly)
* **hostName**: string (ReadOnly)
* **notebookResourceId**: string (ReadOnly)
* **publicDns**: string (ReadOnly)
* **refreshToken**: string (ReadOnly)
* **scope**: string (ReadOnly)
* **tokenType**: string (ReadOnly)

## NotebookPreparationError
### Properties
* **errorMessage**: string
* **statusCode**: int

## NotebookResourceInfo
### Properties
* **fqdn**: string
* **notebookPreparationError**: [NotebookPreparationError](#notebookpreparationerror)
* **resourceId**: string: the data plane resourceId that used to initialize notebook component

## Objective
### Properties
* **goal**: 'Maximize' | 'Minimize' | string (Required): Defines supported metric goals for hyperparameter tuning
* **primaryMetric**: string (Required): [Required] Name of the metric to optimize.

## OnlineDeploymentDetails
* **Discriminator**: endpointComputeType

### Base Properties
* **appInsightsEnabled**: bool: If true, enables Application Insights logging.
* **codeConfiguration**: [CodeConfiguration](#codeconfiguration): Configuration for a scoring code asset.
* **description**: string: Description of the endpoint deployment.
* **egressPublicNetworkAccess**: 'Disabled' | 'Enabled' | string: Enum to determine whether PublicNetworkAccess is Enabled or Disabled for egress of a deployment.
* **environmentId**: string: ARM resource ID of the environment specification for the endpoint deployment.
* **environmentVariables**: [EndpointDeploymentPropertiesBaseEnvironmentVariables](#endpointdeploymentpropertiesbaseenvironmentvariables): Environment variables configuration for the deployment.
* **instanceType**: string: Compute instance type.
* **livenessProbe**: [ProbeSettings](#probesettings): Deployment container liveness/readiness probe configuration.
* **model**: string: The URI path to the model.
* **modelMountPath**: string: The path to mount the model in custom container.
* **privateNetworkConnection**: bool: If true, enable private network connection.
DEPRECATED for future API versions. Use EgressPublicNetworkAccess.
* **properties**: [EndpointDeploymentPropertiesBaseProperties](#endpointdeploymentpropertiesbaseproperties): Property dictionary. Properties can be added, but not removed or altered.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Scaling' | 'Succeeded' | 'Updating' | string (ReadOnly): Possible values for DeploymentProvisioningState.
* **readinessProbe**: [ProbeSettings](#probesettings): Deployment container liveness/readiness probe configuration.
* **requestSettings**: [OnlineRequestSettings](#onlinerequestsettings): Online deployment scoring requests configuration.
* **scaleSettings**: [OnlineScaleSettings](#onlinescalesettings): Online deployment scaling configuration.
### KubernetesOnlineDeployment
#### Properties
* **containerResourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements): Resource requirements for each container instance within an online deployment.
* **endpointComputeType**: 'Kubernetes' (Required): [Required] The compute type of the endpoint.

### ManagedOnlineDeployment
#### Properties
* **endpointComputeType**: 'Managed' (Required): [Required] The compute type of the endpoint.


## OnlineEndpointDetails
### Properties
* **authMode**: 'AADToken' | 'AMLToken' | 'Key' | string (Required): Enum to determine endpoint authentication mode.
* **compute**: string: ARM resource ID of the compute if it exists.
optional
* **description**: string: Description of the inference endpoint.
* **keys**: [EndpointAuthKeys](#endpointauthkeys) (WriteOnly): Keys for endpoint authentication.
* **mirrorTraffic**: [OnlineEndpointMirrorTraffic](#onlineendpointmirrortraffic): Percentage of traffic to be mirrored to each deployment without using returned scoring. Traffic values need to sum to utmost 50.
* **properties**: [EndpointPropertiesBaseProperties](#endpointpropertiesbaseproperties): Property dictionary. Properties can be added, but not removed or altered.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): State of endpoint provisioning.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Enum to determine whether PublicNetworkAccess is Enabled or Disabled.
* **scoringUri**: string (ReadOnly): Endpoint URI.
* **swaggerUri**: string (ReadOnly): Endpoint Swagger URI.
* **traffic**: [OnlineEndpointTraffic](#onlineendpointtraffic): Percentage of traffic from endpoint to divert to each deployment. Traffic values need to sum to 100.

## OnlineEndpointMirrorTraffic
### Properties
### Additional Properties
* **Additional Properties Type**: int

## OnlineEndpointTraffic
### Properties
### Additional Properties
* **Additional Properties Type**: int

## OnlineRequestSettings
### Properties
* **maxConcurrentRequestsPerInstance**: int: The number of maximum concurrent requests per node allowed per deployment. Defaults to 1.
* **maxQueueWait**: string: The maximum amount of time a request will stay in the queue in ISO 8601 format.
Defaults to 500ms.
* **requestTimeout**: string: The scoring timeout in ISO 8601 format.
Defaults to 5000ms.

## OnlineScaleSettings
* **Discriminator**: scaleType

### Base Properties
### DefaultScaleSettings
#### Properties
* **scaleType**: 'Default' (Required): [Required] Type of deployment scaling algorithm

### TargetUtilizationScaleSettings
#### Properties
* **maxInstances**: int: The maximum number of instances that the deployment can scale to. The quota will be reserved for max_instances.
* **minInstances**: int: The minimum number of instances to always be present.
* **pollingInterval**: string: The polling interval in ISO 8691 format. Only supports duration with precision as low as Seconds.
* **scaleType**: 'TargetUtilization' (Required): [Required] Type of deployment scaling algorithm
* **targetUtilizationPercentage**: int: Target CPU usage for the autoscaler.


## Password
### Properties
* **name**: string (ReadOnly)
* **value**: string (ReadOnly)

## PipelineJobInputs
### Properties
### Additional Properties
* **Additional Properties Type**: [JobInput](#jobinput)

## PipelineJobJobs
### Properties
### Additional Properties
* **Additional Properties Type**: any

## PipelineJobOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: [JobOutput](#joboutput)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint
* **subnetArmId**: string (ReadOnly): The ARM identifier for Subnet resource that private endpoint links to

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **location**: string: Specifies the location of the resource.
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **sku**: [Sku](#sku): The resource model definition representing SKU
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [PrivateEndpointConnectionTags](#privateendpointconnectiontags): Contains resource tags defined as key/value pairs.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The Private Endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The current provisioning state.

## PrivateEndpointConnectionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateEndpointConnectionTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout' | string: The private endpoint connection status.

## ProbeSettings
### Properties
* **failureThreshold**: int: The number of failures to allow before returning an unhealthy status.
* **initialDelay**: string: The delay before the first probe in ISO 8601 format.
* **period**: string: The length of time between probes in ISO 8601 format.
* **successThreshold**: int: The number of successful probes before returning a healthy status.
* **timeout**: string: The probe timeout in ISO 8601 format.

## RecurrencePattern
### Properties
* **hours**: int[] (Required): [Required] List of hours for recurrence schedule pattern
* **minutes**: int[] (Required): [Required] List of minutes for recurrence schedule pattern
* **weekdays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string[]: List of weekdays for recurrence schedule pattern

## RegistryListCredentialsResult
### Properties
* **location**: string (ReadOnly)
* **passwords**: [Password](#password)[] (ReadOnly): Array of Password
* **username**: string (ReadOnly)

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceBaseTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceConfiguration
### Properties
* **instanceCount**: int: Optional number of instances or nodes used by the compute target.
* **instanceType**: string: Optional type of VM used as supported by the compute target.
* **properties**: [ResourceConfigurationProperties](#resourceconfigurationproperties): Additional properties bag.

## ResourceConfigurationProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Route
### Properties
* **path**: string (Required): [Required] The path for the route.
* **port**: int (Required): [Required] The port for the route.

## SamplingAlgorithm
* **Discriminator**: samplingAlgorithmType

### Base Properties
### BayesianSamplingAlgorithm
#### Properties
* **samplingAlgorithmType**: 'Bayesian' (Required): [Required] The algorithm used for generating hyperparameter values, along with configuration properties

### GridSamplingAlgorithm
#### Properties
* **samplingAlgorithmType**: 'Grid' (Required): [Required] The algorithm used for generating hyperparameter values, along with configuration properties

### RandomSamplingAlgorithm
#### Properties
* **rule**: 'Random' | 'Sobol' | string: The specific type of random algorithm
* **samplingAlgorithmType**: 'Random' (Required): [Required] The algorithm used for generating hyperparameter values, along with configuration properties
* **seed**: int: An optional integer to use as the seed for random number generation


## SasDatastoreSecrets
### Properties
* **sasToken**: string: Storage container SAS token.
* **secretsType**: 'AccountKey' | 'Certificate' | 'KerberosKeytab' | 'KerberosPassword' | 'Sas' | 'ServicePrincipal' | string (Required): Enum to determine the datastore secrets type.

## ScheduleBase
* **Discriminator**: scheduleType

### Base Properties
* **endTime**: string: Specifies end time of schedule in ISO 8601 format.
If not present, the schedule will run indefinitely
* **scheduleStatus**: 'Disabled' | 'Enabled' | string: Enum to describe status of schedule
* **startTime**: string: Specifies start time of schedule in ISO 8601 format.
* **timeZone**: string: Specifies time zone in which the schedule runs.
TimeZone should follow Windows time zone format.
### CronSchedule
#### Properties
* **expression**: string (Required): [Required] Specifies cron expression of schedule.
The expression should follow NCronTab format.
* **scheduleType**: 'Cron' (Required): [Required] Specifies the schedule type

### RecurrenceSchedule
#### Properties
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'Week' | string (Required): Enum to describe the frequency of a recurrence schedule
* **interval**: int (Required): [Required] Specifies schedule interval in conjunction with frequency
* **pattern**: [RecurrencePattern](#recurrencepattern): Recurrence schedule pattern definition
* **scheduleType**: 'Recurrence' (Required): [Required] Specifies the schedule type


## Seasonality
* **Discriminator**: mode

### Base Properties
### AutoSeasonality
#### Properties
* **mode**: 'Auto' (Required): [Required] Seasonality mode.

### CustomSeasonality
#### Properties
* **mode**: 'Custom' (Required): [Required] Seasonality mode.
* **value**: int (Required): [Required] Seasonality value.


## ServiceManagedResourcesSettings
### Properties
* **cosmosDb**: [CosmosDbSettings](#cosmosdbsettings)

## ServicePrincipalDatastoreSecrets
### Properties
* **clientSecret**: string: Service principal secret.
* **secretsType**: 'AccountKey' | 'Certificate' | 'KerberosKeytab' | 'KerberosPassword' | 'Sas' | 'ServicePrincipal' | string (Required): Enum to determine the datastore secrets type.

## SharedPrivateLinkResource
### Properties
* **name**: string: Unique name of the private link.
* **properties**: [SharedPrivateLinkResourceProperty](#sharedprivatelinkresourceproperty): Properties of a shared private link resource.

## SharedPrivateLinkResourceProperty
### Properties
* **groupId**: string: The private link resource group id.
* **privateLinkResourceId**: string: The resource id that private link links to.
* **requestMessage**: string: Request message.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout' | string: The private endpoint connection status.

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. Ex - P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

## SweepJobInputs
### Properties
### Additional Properties
* **Additional Properties Type**: [JobInput](#jobinput)

## SweepJobLimits
### Properties
* **jobLimitsType**: 'Command' | 'Sweep' | string (Required)
* **maxConcurrentTrials**: int: Sweep Job max concurrent trials.
* **maxTotalTrials**: int: Sweep Job max total trials.
* **timeout**: string: The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds.
* **trialTimeout**: string: Sweep Job Trial timeout value.

## SweepJobOutputs
### Properties
### Additional Properties
* **Additional Properties Type**: [JobOutput](#joboutput)

## SynapseSparkProperties
### Properties
* **autoPauseProperties**: [AutoPauseProperties](#autopauseproperties): Auto pause properties
* **autoScaleProperties**: [AutoScaleProperties](#autoscaleproperties): Auto scale properties
* **nodeCount**: int: The number of compute nodes currently assigned to the compute.
* **nodeSize**: string: Node size.
* **nodeSizeFamily**: string: Node size family.
* **poolName**: string: Pool name.
* **resourceGroup**: string: Name of the resource group in which workspace is located.
* **sparkVersion**: string: Spark version.
* **subscriptionId**: string: Azure subscription identifier.
* **workspaceName**: string: Name of Azure Machine Learning workspace.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.

## TargetLags
* **Discriminator**: mode

### Base Properties
### AutoTargetLags
#### Properties
* **mode**: 'Auto' (Required): [Required] Set target lags mode - Auto/Custom

### CustomTargetLags
#### Properties
* **mode**: 'Custom' (Required): [Required] Set target lags mode - Auto/Custom
* **values**: int[] (Required): [Required] Set target lags values.


## TargetRollingWindowSize
* **Discriminator**: mode

### Base Properties
### AutoTargetRollingWindowSize
#### Properties
* **mode**: 'Auto' (Required): [Required] TargetRollingWindowSiz detection mode.

### CustomTargetRollingWindowSize
#### Properties
* **mode**: 'Custom' (Required): [Required] TargetRollingWindowSiz detection mode.
* **value**: int (Required): [Required] TargetRollingWindowSize value.


## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrialComponent
### Properties
* **codeId**: string: ARM resource ID of the code asset.
* **command**: string (Required): [Required] The command to execute on startup of the job. eg. "python train.py"
* **distribution**: [DistributionConfiguration](#distributionconfiguration): Base definition for job distribution configuration.
* **environmentId**: string (Required): [Required] The ARM resource ID of the Environment specification for the job.
* **environmentVariables**: [TrialComponentEnvironmentVariables](#trialcomponentenvironmentvariables): Environment variables included in the job.
* **resources**: [ResourceConfiguration](#resourceconfiguration)

## TrialComponentEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID of the assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the assigned identity.

## WorkspaceConnectionProps
### Properties
* **authType**: string: Authorization type of the workspace connection.
* **category**: string: Category of the workspace connection.
* **target**: string: Target of the workspace connection.
* **value**: string: Value details of the workspace connection.
* **valueFormat**: 'JSON' | string: format for the workspace connection value

## WorkspaceProperties
### Properties
* **allowPublicAccessWhenBehindVnet**: bool: The flag to indicate whether to allow public access when behind VNet.
* **applicationInsights**: string: ARM id of the application insights associated with this workspace.
* **containerRegistry**: string: ARM id of the container registry associated with this workspace.
* **description**: string: The description of this workspace.
* **discoveryUrl**: string: Url for the discovery service to identify regional endpoints for machine learning experimentation services
* **encryption**: [EncryptionProperty](#encryptionproperty)
* **friendlyName**: string: The friendly name for this workspace. This name in mutable
* **hbiWorkspace**: bool: The flag to signal HBI data in the workspace and reduce diagnostic data collected by the service
* **imageBuildCompute**: string: The compute name for image build
* **keyVault**: string: ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
* **mlFlowTrackingUri**: string (ReadOnly): The URI associated with this workspace that machine learning flow must point at to set up tracking.
* **notebookInfo**: [NotebookResourceInfo](#notebookresourceinfo) (ReadOnly)
* **primaryUserAssignedIdentity**: string: The user assigned identity resource id that represents the workspace identity.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of private endpoint connections in the workspace.
* **privateLinkCount**: int (ReadOnly): Count of private connections in the workspace
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether requests from Public Network are allowed.
* **serviceManagedResourcesSettings**: [ServiceManagedResourcesSettings](#servicemanagedresourcessettings)
* **serviceProvisionedResourceGroup**: string (ReadOnly): The name of the managed resource group created by workspace RP in customer subscription if the workspace is CMK workspace
* **sharedPrivateLinkResources**: [SharedPrivateLinkResource](#sharedprivatelinkresource)[]: The list of shared private link resources in this workspace.
* **storageAccount**: string: ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created
* **storageHnsEnabled**: bool (ReadOnly): If the storage associated with the workspace has hierarchical namespace(HNS) enabled.
* **tenantId**: string (ReadOnly): The tenant id associated with this workspace.
* **workspaceId**: string (ReadOnly): The immutable id associated with this workspace.

## WorkspaceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

