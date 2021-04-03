# Microsoft.Support @ 2019-05-01-preview

## Resource Microsoft.Support/supportTickets@2019-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SupportTicketDetailsProperties](#supportticketdetailsproperties): Describes the properties of a support ticket.
* **type**: 'Microsoft.Support/supportTickets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Support/supportTickets/communications@2019-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CommunicationDetailsProperties](#communicationdetailsproperties): Describes the properties of a communication resource.
* **type**: 'Microsoft.Support/supportTickets/communications' (ReadOnly, DeployTimeConstant): The resource type

## SupportTicketDetailsProperties
### Properties
* **contactDetails**: [ContactProfile](#contactprofile) (Required): Contact information associated with support ticket.
* **createdDate**: string (ReadOnly): Time in UTC (ISO 8601 format) when support ticket was created.
* **description**: string (Required): Detailed description of the question or issue.
* **enrollmentId**: string (ReadOnly): Enrollment ID associated with the support ticket.
* **modifiedDate**: string (ReadOnly): Time in UTC (ISO 8601 format) when support ticket was last modified.
* **problemClassificationDisplayName**: string (ReadOnly): Localized name of problem classification.
* **problemClassificationId**: string (Required): Each Azure service has its own set of issue category called problem classification that corresponds to the type of problem you're experiencing. This parameter is the resource id of ProblemClassification resource.
* **problemStartTime**: string: Time in UTC (ISO 8601 format) when the problem started.
* **productionOutage**: bool (ReadOnly): Indicates if this issue is a production outage.
* **quotaTicketDetails**: [QuotaTicketDetails](#quotaticketdetails): Additional set of information required for quota increase support ticket for certain quota types, e.g.: Virtual machine cores. Get complete details about Quota payload support request along with examples at <a target='' href='https://aka.ms/supportrpquotarequestpayload'>Support quota request</a>.
* **require24X7Response**: bool: Indicates if this requires a 24x7 response from Azure.
* **serviceDisplayName**: string (ReadOnly): Localized name of Azure service.
* **serviceId**: string (Required): This is the resource id of the Azure service resource associated with the support ticket.
* **serviceLevelAgreement**: [ServiceLevelAgreement](#servicelevelagreement): Service Level Agreement details for a support ticket.
* **severity**: 'critical' | 'minimal' | 'moderate' (Required): A value that indicates the urgency of the case, which in turn determines the response time according to the service level agreement of the technical support plan you have with Azure.
* **status**: string (ReadOnly): Status of the support ticket.
* **supportEngineer**: [SupportEngineer](#supportengineer): Support engineer information.
* **supportPlanType**: string (ReadOnly): Support plan type associated with the support ticket.
* **supportTicketId**: string: System generated support ticket id that is unique.
* **technicalTicketDetails**: [TechnicalTicketDetails](#technicalticketdetails): Additional information for technical support ticket.
* **title**: string (Required): Title of the support ticket.

## ContactProfile
### Properties
* **additionalEmailAddresses**: string[]: Additional email addresses listed will be copied on any correspondence about the support ticket.
* **country**: string (Required): Country of the user. This is the ISO 3166-1 alpha-3 code.
* **firstName**: string (Required): First name.
* **lastName**: string (Required): Last name.
* **phoneNumber**: string: Phone number. This is required if preferred contact method is phone.
* **preferredContactMethod**: 'email' | 'phone' (Required): Preferred contact method.
* **preferredSupportLanguage**: string (Required): Preferred language of support from Azure. Support languages vary based on the severity you choose for your support ticket. Learn more at <a  target='_blank' href='https://azure.microsoft.com/support/plans/response/'>Azure Severity and responsiveness</a>. Use the standard language-country code. Valid values are 'en-us' for English, 'zh-hans' for Chinese, 'es-es' for Spanish, 'fr-fr' for French, 'ja-jp' for Japanese, 'ko-kr' for Korean, 'ru-ru' for Russian, 'pt-br' for Portuguese, 'it-it' for Italian, 'zh-tw' for Chinese and 'de-de' for German.
* **preferredTimeZone**: string (Required): Time zone of the user. This is the name of the time zone from <a  target='_blank' href='https://support.microsoft.com/en-us/help/973627/microsoft-time-zone-index-values'>Microsoft Time Zone Index Values</a>.
* **primaryEmailAddress**: string (Required): Primary email address.

## QuotaTicketDetails
### Properties
* **quotaChangeRequests**: [QuotaChangeRequest](#quotachangerequest)[]: This property is required for providing the region and new quota limits.
* **quotaChangeRequestSubType**: string: Required for certain quota types when there is a sub type that you are requesting quota increase for. Example: Batch
* **quotaChangeRequestVersion**: string: Quota change request version

## QuotaChangeRequest
### Properties
* **payload**: string: Payload of the quota increase request.
* **region**: string: Region for which the quota increase request is being made.

## ServiceLevelAgreement
### Properties
* **expirationTime**: string (ReadOnly): Time in UTC (ISO 8601 format) when service level agreement expires.
* **slaMinutes**: int (ReadOnly): Service Level Agreement in minutes
* **startTime**: string (ReadOnly): Time in UTC (ISO 8601 format) when service level agreement starts.

## SupportEngineer
### Properties
* **emailAddress**: string (ReadOnly): Email address of the Azure Support engineer assigned to the support ticket.

## TechnicalTicketDetails
### Properties
* **resourceId**: string: This is the resource id of the Azure service resource (For example: A virtual machine resource or an HDInsight resource) for which the support ticket is created.

## CommunicationDetailsProperties
### Properties
* **body**: string (Required): Body of the communication
* **communicationDirection**: 'inbound' | 'outbound' (ReadOnly): Direction of communication.
* **communicationType**: 'phone' | 'web' (ReadOnly): Communication type.
* **createdDate**: string (ReadOnly): Time in UTC (ISO 8601 format) when the communication was created.
* **sender**: string: Email address of the sender
* **subject**: string (Required): Subject of the communication

