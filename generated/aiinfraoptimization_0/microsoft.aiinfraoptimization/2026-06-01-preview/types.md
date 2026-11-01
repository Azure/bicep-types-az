# Microsoft.AIInfraOptimization @ 2026-06-01-preview

## Function recommendVmSku (Microsoft.AIInfraOptimization/locations@2026-06-01-preview)
* **Resource**: Microsoft.AIInfraOptimization/locations
* **ApiVersion**: 2026-06-01-preview
* **Input**: [RecommendVmSkuRequest](#recommendvmskurequest)
* **Output**: [RecommendVmSkuResponse](#recommendvmskuresponse)

## RecommendVmSkuAccelerator
### Properties
* **countPerVm**: int (Required): The number of accelerator devices in each virtual machine.
* **memoryGiBPerAccelerator**: int (Required): The memory capacity of a single accelerator device, in gibibytes.
* **model**: string (Required): The accelerator model name, for example `A100` or `H100`.

## RecommendVmSkuBenchmark
### Properties
* **benchmarkModel**: string: The model the benchmark was measured on.
* **level**: 'Benchmarked' | 'TopologyMatched' | string (Required): How closely the benchmark evidence matches the recommended topology.
* **modelClass**: string (Required): The model size class the benchmark covers, for example `70b`.
* **operatingSystem**: string: The operating system the benchmark was measured on.
* **p99TpotMs**: int: The 99th-percentile time per output token observed in the benchmark, in milliseconds.
* **p99TtftMs**: int: The 99th-percentile time to first token observed in the benchmark, in milliseconds.
* **scenario**: string (Required): The benchmark scenario, for example `Server` or `Offline`.
* **software**: string: The serving software the benchmark was measured with.
* **submissionId**: string: The identifier of the selected benchmark submission.
* **submitter**: string: The organization that published the benchmark submission.
* **submitterCount**: int (Required): The number of submitters that published results for this configuration.
* **system**: string: The system the benchmark was measured on.
* **throughput**: int: The throughput observed in the benchmark submission.
* **throughputUnit**: string: The unit the observed throughput is expressed in, for example `Tokens/s`.
* **weightDataTypes**: string: The weight data types used in the benchmark submission.

## RecommendVmSkuCost
### Properties
* **currencyCode**: string {pattern: "^[A-Za-z]{3}$"} (Required): The ISO 4217 currency code all amounts in this object are expressed in.
* **deploymentHourly**: int (Required): The price per hour for the whole deployment, in the stated currency.
* **error**: [RecommendVmSkuStageError](#recommendvmskustageerror): The error that prevented subscription-scoped pricing from being resolved, if any.
* **priceAsOf**: string: The date and time the price was observed.
* **source**: 'AzureRetail' | 'AzureSubscription' | 'StaticPreview' | string (Required): The source the price was resolved from.
* **vmHourly**: int (Required): The price per hour for a single virtual machine, in the stated currency.

## RecommendVmSkuDeployment
### Properties
* **procurementOption**: 'OnDemand' | 'Spot' | string: The Azure virtual machine procurement option.
* **replicaCount**: int {minValue: 1}: The number of deployment replicas used for cost, quota, and placement calculations.

## RecommendVmSkuHourlyCost
### Properties
* **amount**: int: The maximum cost per hour for the whole deployment. Must be greater than zero when supplied.
* **currencyCode**: string {pattern: "^[A-Za-z]{3}$"}: The ISO 4217 currency code the amount is expressed in. The recommendation service currently supports `USD`.

## RecommendVmSkuMemory
### Properties
* **kvCacheGiBPerRequest**: int (Required): The key-value cache memory required for a single concurrent request, in gibibytes.
* **kvCacheGiBTotal**: int (Required): The key-value cache memory required for all concurrent requests on a replica, in gibibytes.
* **modelAndKvCacheGiB**: int (Required): The combined model-weight and key-value cache memory required per replica, in gibibytes.
* **modelWeightsGiB**: int (Required): The memory required for the model weights, in gibibytes.

## RecommendVmSkuModel
### Properties
* **headDim**: int {minValue: 1}: The attention head dimension, used for architecture-aware key-value cache sizing. Supply all architecture fields together with a parameter count.
* **huggingFaceModelId**: string: The Hugging Face model identifier, for example `meta-llama/Llama-3.1-70B-Instruct`.
* **maxContextLength**: int {minValue: 1}: The maximum context length the model supports, in tokens. Used only as an upper bound for the sizing context length when Hugging Face metadata provides no usable maximum.
* **numKeyValueHeads**: int {minValue: 1}: The model key-value head count, used for architecture-aware key-value cache sizing. Supply all architecture fields together with a parameter count.
* **numLayers**: int {minValue: 1}: The model layer count, used for architecture-aware key-value cache sizing. Supply all architecture fields together with a parameter count.
* **parameterCount**: int {minValue: 1}: The logical total model parameter count, including all mixture-of-experts experts. May be supplied with or without a model identifier.
* **weightPrecision**: 'BF16' | 'FP16' | 'FP32' | 'FP4' | 'FP8' | 'INT4' | 'INT8' | string: The precision the model weights are served at. Matched case-insensitively.

## RecommendVmSkuOptimization
### Properties
* **maxDeploymentCostPerHour**: [RecommendVmSkuHourlyCost](#recommendvmskuhourlycost): The deployment-wide hourly cost ceiling.
* **rankingPreference**: 'Cost' | 'Latency' | string: The preference used to rank the recommended options.

## RecommendVmSkuOption
### Properties
* **azureMlRecommended**: bool: Whether the Azure Machine Learning model catalog recommends this virtual machine size for the model.
* **benchmark**: [RecommendVmSkuBenchmark](#recommendvmskubenchmark): The external benchmark evidence selected for this option.
* **cost**: [RecommendVmSkuCost](#recommendvmskucost) (Required): The deployment cost for this option.
* **documentationUrl**: string: A URL to the Azure documentation page for this virtual machine size.
* **performanceEstimate**: [RecommendVmSkuPerformanceEstimate](#recommendvmskuperformanceestimate): The advisory deployment throughput and per-request latency estimate for this option.
* **placement**: [RecommendVmSkuPlacement](#recommendvmskuplacement): The capacity placement evidence for this option. Returned only when `subscriptionOptions.includePlacement` is set.
* **quota**: [RecommendVmSkuQuota](#recommendvmskuquota): The subscription quota evidence for this option. Returned only when `subscriptionOptions.includeQuota` is set.
* **readiness**: [RecommendVmSkuReadiness](#recommendvmskureadiness) (Required): How ready this option is to deploy.
* **recommendationRank**: int (Required): The rank of this option within the response, where 1 is the best match.
* **topology**: [RecommendVmSkuTopology](#recommendvmskutopology) (Required): The deployment topology for this option.
* **vmSize**: string (Required): The Azure virtual machine size name, for example `Standard_NC24ads_A100_v4`.

## RecommendVmSkuPerformanceEstimate
### Properties
* **deploymentOutputTokensPerSecond**: int (Required): The estimated number of output tokens generated per second across the whole deployment.
* **ttftMs**: int (Required): The estimated time to first token for a single request, in milliseconds.

## RecommendVmSkuPlacement
### Properties
* **error**: [RecommendVmSkuStageError](#recommendvmskustageerror): The error that prevented placement from being evaluated, if any.
* **reason**: string: A human-readable explanation of the placement status.
* **recommendedAvailabilityZones**: string[]: The availability zones recommended for the deployment, in preference order.
* **status**: 'Evaluated' | 'Failed' | 'NotEvaluated' | 'Unsupported' | string (Required): The outcome of the placement query.

## RecommendVmSkuQuota
### Properties
* **error**: [RecommendVmSkuStageError](#recommendvmskustageerror): The error that prevented quota from being evaluated, if any.
* **increase**: [RecommendVmSkuQuotaIncrease](#recommendvmskuquotaincrease): The quota increase required before this option can be deployed.
* **maxAvailableReplicaCount**: int: The maximum number of replicas that can be deployed with the available quota.
* **reason**: string: A human-readable explanation of the quota status.
* **status**: 'Available' | 'Unavailable' | 'Unknown' | string (Required): Whether subscription quota is sufficient for the requested deployment.

## RecommendVmSkuQuotaIncrease
### Properties
* **limits**: [RecommendVmSkuQuotaLimit](#recommendvmskuquotalimit)[] (Required): The individual quota limits that block the requested deployment.
* **portalUrl**: string (Required): A URL to the Azure portal page for submitting the quota increase.

## RecommendVmSkuQuotaLimit
### Properties
* **currentLimit**: int (Required): The current quota limit.
* **currentUsage**: int (Required): The current usage against the quota.
* **name**: string (Required): The name of the quota to raise.
* **requiredLimit**: int (Required): The quota limit required to deploy the workload.

## RecommendVmSkuReadiness
### Properties
* **reason**: string (Required): A human-readable explanation of the readiness status.
* **status**: 'QuotaIncreaseRequired' | 'ReadyToAttempt' | 'Unavailable' | 'VerificationRequired' | string (Required): The current actionability of the recommendation.

## RecommendVmSkuRequest
### Properties
* **deployment**: [RecommendVmSkuDeployment](#recommendvmskudeployment): Deployment scale and Azure virtual machine procurement option.
* **model**: [RecommendVmSkuModel](#recommendvmskumodel): Model identity, sizing inputs, and optional maximum model context length.
* **optimization**: [RecommendVmSkuOptimization](#recommendvmskuoptimization): Ranking preference and optional deployment-wide hourly cost limit.
* **subscriptionOptions**: [RecommendVmSkuSubscriptionOptions](#recommendvmskusubscriptionoptions): The subscription-scoped lookups to include in the recommendation.
* **targetVmSizes**: (string {maxLength: 128})[] {minLength: 1, maxLength: 50}: The Azure virtual machine candidate set. When supplied, only these virtual machine sizes are ranked. Entries must be non-blank and unique, compared case-insensitively.
* **workload**: [RecommendVmSkuWorkload](#recommendvmskuworkload): Inference request concurrency and token shape assumptions.

## RecommendVmSkuResponse
### Properties
* **options**: [RecommendVmSkuOption](#recommendvmskuoption)[] (Required): The recommended virtual machine size options, ordered from the best to the worst match.
* **sizing**: [RecommendVmSkuSizing](#recommendvmskusizing) (Required): The resolved workload sizing shared by every option.

## RecommendVmSkuSizing
### Properties
* **basis**: [RecommendVmSkuSizingBasis](#recommendvmskusizingbasis) (Required): The sources used for the sizing calculation.
* **memory**: [RecommendVmSkuMemory](#recommendvmskumemory) (Required): The memory calculation shared by every returned option.
* **model**: [RecommendVmSkuSizingModel](#recommendvmskusizingmodel) (Required): The resolved model identity and weight precision.
* **workload**: [RecommendVmSkuSizingWorkload](#recommendvmskusizingworkload) (Required): The resolved per-replica workload inputs used for memory sizing.

## RecommendVmSkuSizingBasis
### Properties
* **contextLengthSource**: 'Default' | 'Request' | string (Required): Where the context length was resolved from.
* **modelWeightsCalculation**: 'ArtifactSize' | 'EstimatedFromParameterCount' | string (Required): How the model weight memory was calculated.
* **parameterCountSource**: 'HuggingFace' | 'Request' | string (Required): Where the model parameter count was resolved from.

## RecommendVmSkuSizingModel
### Properties
* **huggingFaceModelId**: string: The Hugging Face model identifier the sizing metadata was resolved from.
* **parameterCount**: int (Required): The logical total model parameter count used for sizing.
* **weightPrecision**: 'BF16' | 'FP16' | 'FP32' | 'FP4' | 'FP8' | 'INT4' | 'INT8' | string (Required): The precision the model weights were sized at.

## RecommendVmSkuSizingWorkload
### Properties
* **contextLength**: int (Required): The context length, in tokens, used to size the key-value cache: the sum of `promptTokens` and `maxOutputTokens` when a token budget is supplied, otherwise the service default.
* **maxConcurrentRequestsPerReplica**: int (Required): The maximum number of simultaneous inference requests handled by each replica.

## RecommendVmSkuStageError
### Properties
* **code**: 'DataUnavailable' | 'DependencyError' | 'EvaluationBudgetExceeded' | 'PartitionCapacityExceeded' | 'Throttled' | 'TimedOut' | string (Required): The reason the stage did not complete.
* **message**: string (Required): A human-readable description of the error.

## RecommendVmSkuSubscriptionOptions
### Properties
* **includePlacement**: bool: Whether to query placement scores for candidate virtual machine sizes with available quota.
* **includePricing**: bool: Whether to fetch subscription-scoped virtual machine pricing.
* **includeQuota**: bool: Whether to evaluate subscription quota for candidate virtual machine sizes.

## RecommendVmSkuTokenBudget
### Properties
* **maxOutputTokens**: int {minValue: 0, maxValue: 131072}: The maximum number of generated output tokens per inference request. Must be supplied together with `promptTokens`, and the two must total from 1 through 131072.
* **promptTokens**: int {minValue: 0, maxValue: 131072}: The number of prompt, or input, tokens per inference request. Must be supplied together with `maxOutputTokens`, and the two must total from 1 through 131072.

## RecommendVmSkuTopology
### Properties
* **accelerator**: [RecommendVmSkuAccelerator](#recommendvmskuaccelerator) (Required): The accelerator hardware available in each virtual machine.
* **estimatedNodeCountPerReplica**: int (Required): The estimated number of virtual machine nodes required for a single replica.
* **estimatedTotalNodeCount**: int (Required): The estimated total number of virtual machine nodes across all replicas.

## RecommendVmSkuWorkload
### Properties
* **maxConcurrentRequestsPerReplica**: int {minValue: 1}: The maximum number of simultaneous inference requests handled by each deployment replica.
* **tokenBudget**: [RecommendVmSkuTokenBudget](#recommendvmskutokenbudget): The prompt and output token budget used for key-value cache sizing.

