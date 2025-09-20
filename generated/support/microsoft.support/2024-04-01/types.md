# Microsoft.Support @ 2024-04-01

## Resource Microsoft.Support/fileWorkspaces@2024-04-01
* **Readable Scope(s)**: Tenant, Subscription
* **Writable Scope(s)**: Tenant, Subscription
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9a-zA-Z_\-. ]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FileWorkspaceDetailsProperties](#fileworkspacedetailsproperties) (ReadOnly): Properties of the resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Support/fileWorkspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Support/fileWorkspaces/files@2024-04-01
* **Readable Scope(s)**: Tenant, Subscription
* **Writable Scope(s)**: Tenant, Subscription
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FileDetailsProperties](#filedetailsproperties): Properties of the resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Support/fileWorkspaces/files' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Support/services@2024-04-01
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceProperties](#serviceproperties) (ReadOnly): Properties of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Support/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Support/services/problemClassifications@2024-04-01
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProblemClassificationProperties](#problemclassificationproperties) (ReadOnly): Properties of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Support/services/problemClassifications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Support/supportTickets@2024-04-01
* **Readable Scope(s)**: Tenant, Subscription
* **Writable Scope(s)**: Tenant, Subscription
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SupportTicketDetailsProperties](#supportticketdetailsproperties) (Required): Properties of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Support/supportTickets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Support/supportTickets/chatTranscripts@2024-04-01
* **Readable Scope(s)**: Tenant, Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ChatTranscriptDetailsProperties](#chattranscriptdetailsproperties) (ReadOnly): Properties of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Support/supportTickets/chatTranscripts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Support/supportTickets/communications@2024-04-01
* **Readable Scope(s)**: Tenant, Subscription
* **Writable Scope(s)**: Tenant, Subscription
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CommunicationDetailsProperties](#communicationdetailsproperties) (Required): Properties of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Support/supportTickets/communications' (ReadOnly, DeployTimeConstant): The resource type

## ChatTranscriptDetailsProperties
### Properties
* **messages**: [MessageProperties](#messageproperties)[]: List of chat transcript communication resources.
* **startTime**: string (ReadOnly): Time in UTC (ISO 8601 format) when the chat began.

## CommunicationDetailsProperties
### Properties
* **body**: string (Required): Body of the communication.
* **communicationDirection**: 'inbound' | 'outbound' | string (ReadOnly): Direction of communication.
* **communicationType**: 'phone' | 'web' | string (ReadOnly): Communication type.
* **createdDate**: string (ReadOnly): Time in UTC (ISO 8601 format) when the communication was created.
* **sender**: string: Email address of the sender. This property is required if called by a service principal.
* **subject**: string (Required): Subject of the communication.

## ContactProfile
### Properties
* **additionalEmailAddresses**: string[]: Additional email addresses listed will be copied on any correspondence about the support ticket.
* **country**: string (Required): Country of the user. This is the ISO 3166-1 alpha-3 code.
* **firstName**: string (Required): First name.
* **lastName**: string (Required): Last name.
* **phoneNumber**: string: Phone number. This is required if preferred contact method is phone. It is also required when submitting 'critical' or 'highestcriticalimpact' severity cases.
* **preferredContactMethod**: 'email' | 'phone' | string (Required): Preferred contact method.
* **preferredSupportLanguage**: string (Required): Preferred language of support from Azure. Support languages vary based on the severity you choose for your support ticket. Learn more at [Azure Severity and responsiveness](https://azure.microsoft.com/support/plans/response). Use the standard language-country code. Valid values are 'en-us' for English, 'zh-hans' for Chinese, 'es-es' for Spanish, 'fr-fr' for French, 'ja-jp' for Japanese, 'ko-kr' for Korean, 'ru-ru' for Russian, 'pt-br' for Portuguese, 'it-it' for Italian, 'zh-tw' for Chinese and 'de-de' for German.
* **preferredTimeZone**: string (Required): Time zone of the user. This is the name of the time zone from [Microsoft Time Zone Index Values](https://support.microsoft.com/help/973627/microsoft-time-zone-index-values).
* **primaryEmailAddress**: string (Required): Primary email address.

## FileDetailsProperties
### Properties
* **chunkSize**: int: Size of each chunk. The size of each chunk should be provided in bytes and must not exceed 2.5 megabytes (MB).
* **createdOn**: string (ReadOnly): Time in UTC (ISO 8601 format) when file workspace was created.
* **fileSize**: int: Size of the file to be uploaded. The file size must not exceed 5 MB and should be provided in bytes.
* **numberOfChunks**: int: Number of chunks to be uploaded. The maximum number of allowed chunks is 2.

## FileWorkspaceDetailsProperties
### Properties
* **createdOn**: string (ReadOnly): Time in UTC (ISO 8601 format) when file workspace was created.
* **expirationTime**: string (ReadOnly): Time in UTC (ISO 8601 format) when file workspace is going to expire.

## MessageProperties
### Properties
* **body**: string: Body of the communication.
* **communicationDirection**: 'inbound' | 'outbound' | string (ReadOnly): Direction of communication.
* **contentType**: string (ReadOnly): Content type.
* **createdDate**: string (ReadOnly): Time in UTC (ISO 8601 format) when the communication was created.
* **sender**: string: Name of the sender.

## ProblemClassificationProperties
### Properties
* **displayName**: string: Localized name of problem classification.
* **secondaryConsentEnabled**: [SecondaryConsentEnabled](#secondaryconsentenabled)[]: This property indicates whether secondary consent is present for problem classification

## QuotaChangeRequest
### Properties
* **payload**: string: Payload of the quota increase request.
* **region**: string: Region for which the quota increase request is being made.

## QuotaTicketDetails
### Properties
* **quotaChangeRequests**: [QuotaChangeRequest](#quotachangerequest)[]: This property is required for providing the region and new quota limits.
* **quotaChangeRequestSubType**: string: Required for certain quota types when there is a sub type, such as Batch, for which you are requesting a quota increase.
* **quotaChangeRequestVersion**: string: Quota change request version.

## SecondaryConsent
### Properties
* **type**: string: The service name for which the secondary consent is being provided. The value needs to be retrieved from the Problem Classification API response.
* **userConsent**: 'No' | 'Yes' | string: User consent value provided

## SecondaryConsentEnabled
### Properties
* **description**: string: User consent description.
* **type**: string: The Azure service for which secondary consent is needed for case creation.

## ServiceLevelAgreement
### Properties
* **expirationTime**: string (ReadOnly): Time in UTC (ISO 8601 format) when the service level agreement expires.
* **slaMinutes**: int (ReadOnly): Service Level Agreement in minutes.
* **startTime**: string (ReadOnly): Time in UTC (ISO 8601 format) when the service level agreement starts.

## ServiceProperties
### Properties
* **displayName**: string: Localized name of the Azure service.
* **resourceTypes**: string[]: ARM Resource types.

## SupportEngineer
### Properties
* **emailAddress**: string (ReadOnly): Email address of the Azure Support engineer assigned to the support ticket.

## SupportTicketDetailsProperties
### Properties
* **advancedDiagnosticConsent**: 'No' | 'Yes' | string (Required): Advanced diagnostic consent to be updated on the support ticket.
* **contactDetails**: [ContactProfile](#contactprofile) (Required): Contact information of the user requesting to create a support ticket.
* **createdDate**: string (ReadOnly): Time in UTC (ISO 8601 format) when the support ticket was created.
* **description**: string (Required): Detailed description of the question or issue.
* **enrollmentId**: string: Enrollment Id associated with the support ticket.
* **fileWorkspaceName**: string: File workspace name.
* **isTemporaryTicket**: 'No' | 'Yes' | string (ReadOnly): This property indicates if support ticket is a temporary ticket.
* **modifiedDate**: string (ReadOnly): Time in UTC (ISO 8601 format) when the support ticket was last modified.
* **problemClassificationDisplayName**: string (ReadOnly): Localized name of problem classification.
* **problemClassificationId**: string (Required): Each Azure service has its own set of issue categories, also known as problem classification. This parameter is the unique Id for the type of problem you are experiencing.
* **problemScopingQuestions**: string: Problem scoping questions associated with the support ticket.
* **problemStartTime**: string: Time in UTC (ISO 8601 format) when the problem started.
* **quotaTicketDetails**: [QuotaTicketDetails](#quotaticketdetails): Additional ticket details associated with a quota support ticket request.
* **require24X7Response**: bool: Indicates if this requires a 24x7 response from Azure.
* **secondaryConsent**: [SecondaryConsent](#secondaryconsent)[]: This property indicates secondary consents for the support ticket
* **serviceDisplayName**: string (ReadOnly): Localized name of the Azure service.
* **serviceId**: string (Required): This is the resource Id of the Azure service resource associated with the support ticket.
* **serviceLevelAgreement**: [ServiceLevelAgreement](#servicelevelagreement): Service Level Agreement information for this support ticket.
* **severity**: 'critical' | 'highestcriticalimpact' | 'minimal' | 'moderate' | string (Required): A value that indicates the urgency of the case, which in turn determines the response time according to the service level agreement of the technical support plan you have with Azure. Note: 'Highest critical impact', also known as the 'Emergency - Severe impact' level in the Azure portal is reserved only for our Premium customers.
* **status**: string (ReadOnly): Status of the support ticket.
* **supportEngineer**: [SupportEngineer](#supportengineer): Information about the support engineer working on this support ticket.
* **supportPlanDisplayName**: string (ReadOnly): Support plan type associated with the support ticket.
* **supportPlanId**: string: Support plan id associated with the support ticket.
* **supportPlanType**: string (ReadOnly): Support plan type associated with the support ticket.
* **supportTicketId**: string: System generated support ticket Id that is unique.
* **technicalTicketDetails**: [TechnicalTicketDetails](#technicalticketdetails): Additional ticket details associated with a technical support ticket request.
* **title**: string (Required): Title of the support ticket.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TechnicalTicketDetails
### Properties
* **resourceId**: string: This is the resource Id of the Azure service resource (For example: A virtual machine resource or an HDInsight resource) for which the support ticket is created.

