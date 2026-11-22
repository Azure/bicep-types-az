# Microsoft.CostManagement @ 2026-10-01-preview

## Function estimatePrices (Microsoft.CostManagement@2026-10-01-preview)
* **Resource**: Microsoft.CostManagement
* **ApiVersion**: 2026-10-01-preview
* **Input**: [EstimateContent](#estimatecontent)
* **Output**: [EstimateResult](#estimateresult)

## EstimateAppliedValue
### Properties
* **field**: string {maxLength: 4096} (Required, ReadOnly): JSON Pointer of the field within the decoded resource and usage inputs, such as /usage/accessTier.
* **value**: [EstimateValue](#estimatevalue) (Required, ReadOnly): The value the server priced for this field.

## EstimateComponentResult
### Properties
* **component**: string {maxLength: 128} (Required, ReadOnly): Stable business component name, unique within the entry.
* **meterIds**: (string {maxLength: 36})[] {maxLength: 128} (ReadOnly): Resolved internal pricing meter identifiers, distinct from customer resource IDs. Absent when unresolved or not needed.
* **monthly**: [EstimateCostSummary](#estimatecostsummary) (Required, ReadOnly): Component's recurring monthly cost.
* **upfront**: [EstimateCostSummary](#estimatecostsummary) (Required, ReadOnly): Component's upfront charge. A known non-applicable charge is Complete with amount zero.

## EstimateContent
### Properties
* **resources**: [EstimateResourceInput](#estimateresourceinput)[] {minLength: 1, maxLength: 100} (Required): Charge-once entries. Position correlates results; no customer identifiers are accepted.

## EstimateCostSummary
### Properties
* **amount**: int {minValue: 0, maxValue: 1000000000} (ReadOnly): Complete amount only.
* **knownAmount**: int {minValue: 0, maxValue: 1000000000} (ReadOnly): Sum of known costs only, not a total or an upper bound. Present only for Partial.
* **status**: 'Complete' | 'Partial' | 'Unavailable' | string (Required, ReadOnly): Independent completeness of this monthly or upfront summary.

## EstimateDiagnostic
### Properties
* **code**: string {maxLength: 128} (Required, ReadOnly): Machine-readable code, such as RateUnavailable, AllowanceContextRequired or InputCanonicalized.
* **component**: string {maxLength: 128} (ReadOnly): Affected business component name when the issue is component-specific.
* **message**: string {maxLength: 1024} (Required, ReadOnly): Explanation without input values, customer information or tokens.
* **target**: string {maxLength: 4096} (ReadOnly): Optional RFC 6901 request location, using entry positions and business field names only.

## EstimateEffectiveConfiguration
### Properties
* **appliedValues**: [EstimateAppliedValue](#estimateappliedvalue)[] {maxLength: 20000} (Required, ReadOnly): Every field the server set or changed: defaulted fields, assumed usage quantities and canonicalized spellings. Every other priced value is exactly what the caller submitted.
* **assumedUsageFields**: (string {maxLength: 4096})[] {maxLength: 20000} (Required, ReadOnly): JSON Pointers of usage quantities the caller omitted and the server assumed, such as /usage/storedGB. A non-empty list means the price rests on quantities the caller did not state.
* **defaultedFields**: (string {maxLength: 4096})[] {maxLength: 20000} (Required, ReadOnly): JSON Pointers of configuration defaults the server applied to omitted inputs.
* **resourceApiVersion**: string {maxLength: 32} (Required, ReadOnly): The supported source resource API version.
* **resourceType**: string {maxLength: 256} (Required, ReadOnly): The supported resource type, in its canonical spelling.

## EstimateNamedValue
### Properties
* **name**: string {minLength: 1, maxLength: 128} (Required): Unique sibling business name, not a customer resource name or a path expression.
* **value**: [EstimateValue](#estimatevalue) (Required): Typed value. Null and coercion from another JSON kind are not accepted.

## EstimateResourceInput
### Properties
* **inputs**: [EstimateNamedValue](#estimatenamedvalue)[] {maxLength: 128} (Required): Two named object inputs: resource (an allowlisted subset of the native ARM resource) and usage (consumption and purchase assumptions). Omitted values are completed only by applicable advertised defaults.
* **resourceApiVersion**: string {minLength: 1, maxLength: 32} (Required): Supported source resource API version; the service never evaluates that resource or deploys it.
* **resourceType**: string {minLength: 1, maxLength: 256} (Required): Supported resource type, matched case-insensitively.

## EstimateResourceResult
### Properties
* **assumptions**: [EstimateDiagnostic](#estimatediagnostic)[] {maxLength: 1000} (Required, ReadOnly): Defaults and other assumptions actually applied to this entry.
* **components**: [EstimateComponentResult](#estimatecomponentresult)[] {maxLength: 10000} (Required, ReadOnly): Component breakdown, including components whose cost could not be determined.
* **configuration**: [EstimateEffectiveConfiguration](#estimateeffectiveconfiguration) (ReadOnly): What the server set or changed in the priced configuration. Absent only when a catalog failure prevented complete validation.
* **inputIndex**: int {minValue: 0, maxValue: 99} (Required, ReadOnly): Zero-based input position; not a customer resource identifier.
* **issues**: [EstimateDiagnostic](#estimatediagnostic)[] {maxLength: 1000} (Required, ReadOnly): Reasons for incomplete coverage or costs. Nonempty whenever either summary is incomplete.
* **monthly**: [EstimateCostSummary](#estimatecostsummary) (Required, ReadOnly): Known and unknown recurring costs for this entry.
* **upfront**: [EstimateCostSummary](#estimatecostsummary) (Required, ReadOnly): Known and unknown upfront charges, never included in monthly.

## EstimateResult
### Properties
* **assumptions**: [EstimateDiagnostic](#estimatediagnostic)[] {maxLength: 1000} (Required, ReadOnly): Request-wide assumptions; never raw input values or customer identifiers.
* **coverage**: 'SubmittedPricingInputs' (Required, ReadOnly): Fixed scope marker, not a completeness enum: this operation prices only
submitted inputs, never an entire template or deployment. Completeness is
reported by each charge period's status. Callers separately track template
preparation and coverage gaps.
* **currency**: string {minLength: 3, maxLength: 3} (Required, ReadOnly): Subscription billing currency for every amount; never a caller-selected currency or silent fallback.
* **pricingAsOf**: string (Required, ReadOnly): UTC instant used to select applicable prices. This is not a future price guarantee.
* **results**: [EstimateResourceResult](#estimateresourceresult)[] {minLength: 1, maxLength: 100} (Required, ReadOnly): Exactly one result per input, in the same order.
* **totals**: [EstimateTotals](#estimatetotals) (Required, ReadOnly): Independent recurring and upfront totals.

## EstimateTotals
### Properties
* **monthly**: [EstimateCostSummary](#estimatecostsummary) (Required, ReadOnly): Recurring monthly aggregate; an upfront payment is never included.
* **upfront**: [EstimateCostSummary](#estimatecostsummary) (Required, ReadOnly): Upfront aggregate, without amortization.

## EstimateValue
* **Discriminator**: kind

### Base Properties

### EstimateArrayValue
#### Properties
* **items**: [EstimateValue](#estimatevalue)[] {maxLength: 1024} (Required): Explicit items, recursively validated. Empty items is distinct from an omitted array.
* **kind**: 'array' (Required): Exact discriminator selecting a supported typed variant.

### EstimateBooleanValue
#### Properties
* **kind**: 'boolean' (Required): Exact discriminator selecting a supported typed variant.
* **value**: bool (Required): Explicit boolean; omission is distinct from false.

### EstimateNumberValue
#### Properties
* **kind**: 'number' (Required): Exact discriminator selecting a supported typed variant.
* **value**: int {minValue: -9007199254740991, maxValue: 9007199254740991} (Required): Parsed using decimal arithmetic. Integer magnitude must not exceed 9007199254740991; non-integer magnitude must not exceed 1000000000. Excess precision and out-of-range values are rejected, not rounded or coerced.

### EstimateObjectValue
#### Properties
* **kind**: 'object' (Required): Exact discriminator selecting a supported typed variant.
* **members**: [EstimateNamedValue](#estimatenamedvalue)[] {maxLength: 128} (Required): Unique, case-sensitive member names. Empty members is an explicit empty object, not an omitted input.

### EstimateStringValue
#### Properties
* **kind**: 'string' (Required): Exact discriminator selecting a supported typed variant.
* **value**: string {maxLength: 1024} (Required): Text accepted only when permitted by the selected input definition.


