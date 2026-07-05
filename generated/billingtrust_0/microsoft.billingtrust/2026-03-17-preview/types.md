# Microsoft.BillingTrust @ 2026-03-17-preview

## Resource Microsoft.BillingTrust/assessments@2026-03-17-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2026-03-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [AssessmentProperties](#assessmentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.BillingTrust/assessments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.BillingTrust/assessments/rules@2026-03-17-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2026-03-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_-]{2,63}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [RuleProperties](#ruleproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.BillingTrust/assessments/rules' (ReadOnly, DeployTimeConstant): The resource type

## Function listUploadToken (Microsoft.BillingTrust/assessments@2026-03-17-preview)
* **Resource**: Microsoft.BillingTrust/assessments
* **ApiVersion**: 2026-03-17-preview
* **Output**: [GenerateUploadTokenResponse](#generateuploadtokenresponse)

## AssessmentProperties
### Properties
* **assessmentType**: 'BusinessVerification' | 'Edu' | 'PayeeEnrollment' | 'PayeeProfile' | string (Required): The name of the assessment template whose rules will be evaluated (e.g. 'Edu'). Immutable after creation.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): Error information when evaluationState is failed
* **evaluationState**: 'actionRequired' | 'expired' | 'failed' | 'failedWithOverride' | 'pending' | 'running' | 'succeeded' | 'succeededWithOverride' | 'underReview' | string (ReadOnly): The aggregated evaluation state of all active rules within this assessment
* **initialValues**: [InitialRuleValueBase](#initialrulevaluebase)[] (WriteOnly): Optional initial values applied to the rules created with this assessment. Write-only — these values are routed to the per-kind rules and are not returned on read.
* **nextEvaluation**: string (ReadOnly): The next scheduled re-evaluation of this assessment. Only present when one or more rules in this assessment have a configured recurrence.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource

## DomainEntry
### Properties
* **domainNames**: string[] (Required): Domain names associated with a tenant.
* **error**: [ErrorDetail](#errordetail) (ReadOnly): Error detail when state is `failed` or `actionRequired`. Omitted otherwise. Server-managed.
* **state**: 'actionRequired' | 'failed' | 'pending' | 'succeeded' | string (ReadOnly): The verification state of this domain entry. Server-managed.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The Microsoft Entra tenant ID owning these domains. Defaults to the calling user's tenant when omitted.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## ExternalId
### Properties
* **type**: string {maxLength: 100} (Required): Identifier type. Currently `DUNS` is supported.
* **value**: string {maxLength: 100} (Required): Identifier value (e.g. the DUNS number string).

## GenerateUploadTokenResponse
### Properties
* **token**: string {sensitive} (Required): The time-bound, principal-bound upload token

## InitialRuleValueBase
* **Discriminator**: kind

### Base Properties

### EduInitialValue
#### Properties
* **domains**: [DomainEntry](#domainentry)[] (Required): Per-domain entries to use when populating the education qualification rule. Only `domainNames` and `tenantId` are read from this payload; `state` and `error` on each entry are populated by the service.
* **kind**: 'eduQualification' (Required): The kind of rule to initialize


## RegistrationNumber
### Properties
* **registrationRequirement**: 'notApplicable' | 'optional' | 'required' | string: Whether a registration number is required for the sold-to country.
* **type**: string[]: Allowed registration-number types based on the billing-account country (e.g. `VAT`, `GST`, `EIN`).
* **value**: string {maxLength: 100}: Registration number value (e.g. the VAT / GST / EIN identifier string).

## RuleProperties
* **Discriminator**: kind

### Base Properties
* **error**: [ErrorDetail](#errordetail) (ReadOnly): Error information when evaluationState is `failed` or `actionRequired`. Server-managed.
* **evaluationState**: 'actionRequired' | 'expired' | 'failed' | 'failedWithOverride' | 'pending' | 'running' | 'skipped' | 'succeeded' | 'succeededWithOverride' | 'underReview' | string (ReadOnly): The evaluation state of the rule. Server-managed.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource

### BusinessVerificationRuleProperties
#### Properties
* **externalId**: [ExternalId](#externalid): Optional external-registry identifier (e.g. DUNS) used to disambiguate verification matches. Settable on PATCH while `evaluationState` is `pending` or `actionRequired`.
* **kind**: 'businessVerification' (Required): The kind of rule. Acts as a discriminator for kind-specific properties.
* **registrationNumber**: [RegistrationNumber](#registrationnumber) (ReadOnly): Registration number context (allowed types and registration id). Populated from the billing account at the time the rule is created. Server-managed.
* **soldTo**: [SoldTo](#soldto) (ReadOnly): Sold-to identity used for business verification. Populated from the billing account at the time the rule is created. Server-managed.
* **supplementalDocuments**: string[]: References to supplemental documents (businessVerification rules only; only settable while evaluationState is `pending` or `actionRequired`).
* **taxIds**: [TaxId](#taxid)[] (ReadOnly): Tax ids associated with the sold-to identity. Populated from the billing account at the time the rule is created. Server-managed.

### EduQualificationRuleProperties
#### Properties
* **domains**: [DomainEntry](#domainentry)[]: Per-tenant domain entries to verify.
* **kind**: 'eduQualification' (Required): The kind of rule. Acts as a discriminator for kind-specific properties.
* **supplementalDocuments**: string[]: References to supplemental documents. Settable only when evaluationState is `actionRequired`.


## SoldTo
### Properties
* **addressLine1**: string {maxLength: 256}: First address line. PII — postal address.
* **addressLine2**: string {maxLength: 256}: Second address line. PII — postal address.
* **addressLine3**: string {maxLength: 256}: Third address line. PII — postal address.
* **city**: string {maxLength: 100}: City of the address. PII — postal address.
* **companyName**: string {maxLength: 256}: Company name.
* **country**: string {maxLength: 2, pattern: "^[A-Za-z]{2}$"}: ISO 3166-1 alpha-2 country code of the sold-to address (e.g. `US`, `IE`, `GB`). Populated from the billing account.
* **district**: string {maxLength: 100}: District or sub-region. PII — postal address.
* **email**: string {maxLength: 256, pattern: "^[^@]+@[^@]+\.[^@]+$"}: Contact email address. PII — contact.
* **firstName**: string {maxLength: 100}: Contact first name. PII — contact.
* **lastName**: string {maxLength: 100}: Contact last name. PII — contact.
* **middleName**: string {maxLength: 100}: Contact middle name. PII — contact.
* **phoneNumber**: string {maxLength: 50}: Contact phone number (free-form string; format not validated server-side). PII — contact.
* **postalCode**: string {maxLength: 50}: Postal or ZIP code. PII — postal address.
* **region**: string {maxLength: 100}: State, province, or region. PII — postal address.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TaxId
### Properties
* **country**: string {maxLength: 2, pattern: "^[A-Za-z]{2}$"}: ISO 3166-1 alpha-2 country code the tax id is registered in.
* **scope**: string {maxLength: 100}: Scope of the tax id (e.g. `Federal`, `State`).
* **status**: 'invalid' | 'other' | 'valid' | string: Status of the tax id.
* **type**: string {maxLength: 100}: Type of tax id (e.g. `VAT`, `GST`, `EIN`). Extensible — additional types may be returned as upstream registries evolve.
* **value**: string {maxLength: 100}: Tax id value (e.g. the VAT / GST / EIN identifier string).

