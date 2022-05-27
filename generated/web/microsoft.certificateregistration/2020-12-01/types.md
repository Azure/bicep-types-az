# Microsoft.CertificateRegistration @ 2020-12-01

## Resource Microsoft.CertificateRegistration/certificateOrders@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AppServiceCertificateOrderProperties](#appservicecertificateorderproperties): AppServiceCertificateOrder resource specific properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.CertificateRegistration/certificateOrders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CertificateRegistration/certificateOrders/certificates@2020-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string: Kind of resource.
* **location**: string (Required): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AppServiceCertificate](#appservicecertificate): Key Vault container for a certificate that is purchased through Azure.
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.CertificateRegistration/certificateOrders/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.CertificateRegistration/certificateOrders/detectors@2020-12-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DetectorResponseProperties](#detectorresponseproperties) (ReadOnly): DetectorResponse resource specific properties
* **type**: 'Microsoft.CertificateRegistration/certificateOrders/detectors' (ReadOnly, DeployTimeConstant): The resource type

## AppServiceCertificateOrderProperties
### Properties
* **appServiceCertificateNotRenewableReasons**: 'ExpirationNotInRenewalTimeRange' | 'RegistrationStatusNotSupportedForRenewal' | 'SubscriptionNotActive' | string[] (ReadOnly): Reasons why App Service Certificate is not renewable at the current moment.
* **autoRenew**: bool: <code>true</code> if the certificate should be automatically renewed when it expires; otherwise, <code>false</code>.
* **certificates**: [AppServiceCertificateOrderPropertiesCertificates](#appservicecertificateorderpropertiescertificates): State of the Key Vault secret.
* **contact**: [CertificateOrderContact](#certificateordercontact) (ReadOnly)
* **csr**: string: Last CSR that was created for this order.
* **distinguishedName**: string: Certificate distinguished name.
* **domainVerificationToken**: string (ReadOnly): Domain verification token.
* **expirationTime**: string (ReadOnly): Certificate expiration time.
* **intermediate**: [CertificateDetails](#certificatedetails) (ReadOnly): SSL certificate details.
* **isPrivateKeyExternal**: bool (ReadOnly): <code>true</code> if private key is external; otherwise, <code>false</code>.
* **keySize**: int: Certificate key size.
* **lastCertificateIssuanceTime**: string (ReadOnly): Certificate last issuance time.
* **nextAutoRenewalTimeStamp**: string (ReadOnly): Time stamp when the certificate would be auto renewed next
* **productType**: 'StandardDomainValidatedSsl' | 'StandardDomainValidatedWildCardSsl' (Required): Certificate product type.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly): Status of certificate order.
* **root**: [CertificateDetails](#certificatedetails) (ReadOnly): SSL certificate details.
* **serialNumber**: string (ReadOnly): Current serial number of the certificate.
* **signedCertificate**: [CertificateDetails](#certificatedetails) (ReadOnly): SSL certificate details.
* **status**: 'Canceled' | 'Denied' | 'Expired' | 'Issued' | 'NotSubmitted' | 'PendingRekey' | 'Pendingissuance' | 'Pendingrevocation' | 'Revoked' | 'Unused' (ReadOnly): Current order status.
* **validityInYears**: int: Duration in years (must be 1).

## AppServiceCertificateOrderPropertiesCertificates
### Properties
### Additional Properties
* **Additional Properties Type**: [AppServiceCertificate](#appservicecertificate)

## AppServiceCertificate
### Properties
* **keyVaultId**: string: Key Vault resource Id.
* **keyVaultSecretName**: string: Key Vault secret name.
* **provisioningState**: 'AzureServiceUnauthorizedToAccessKeyVault' | 'CertificateOrderFailed' | 'ExternalPrivateKey' | 'Initialized' | 'KeyVaultDoesNotExist' | 'KeyVaultSecretDoesNotExist' | 'OperationNotPermittedOnKeyVault' | 'Succeeded' | 'Unknown' | 'UnknownError' | 'WaitingOnCertificateOrder' (ReadOnly): Status of the Key Vault secret.

## CertificateOrderContact
### Properties
* **email**: string
* **nameFirst**: string
* **nameLast**: string
* **phone**: string

## CertificateDetails
### Properties
* **issuer**: string (ReadOnly): Certificate Issuer.
* **notAfter**: string (ReadOnly): Date Certificate is valid to.
* **notBefore**: string (ReadOnly): Date Certificate is valid from.
* **rawData**: string (ReadOnly): Raw certificate data.
* **serialNumber**: string (ReadOnly): Certificate Serial Number.
* **signatureAlgorithm**: string (ReadOnly): Certificate Signature algorithm.
* **subject**: string (ReadOnly): Certificate Subject.
* **thumbprint**: string (ReadOnly): Certificate Thumbprint.
* **version**: int (ReadOnly): Certificate Version.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DetectorResponseProperties
### Properties
* **dataProvidersMetadata**: [DataProviderMetadata](#dataprovidermetadata)[] (ReadOnly): Additional configuration for different data providers to be used by the UI
* **dataset**: [DiagnosticData](#diagnosticdata)[] (ReadOnly): Data Set
* **metadata**: [DetectorInfo](#detectorinfo) (ReadOnly): Definition of Detector
* **status**: [Status](#status) (ReadOnly): Identify the status of the most severe insight generated by the detector.
* **suggestedUtterances**: [QueryUtterancesResults](#queryutterancesresults) (ReadOnly): Suggested utterances where the detector can be applicable

## DataProviderMetadata
### Properties
* **propertyBag**: [KeyValuePairStringObject](#keyvaluepairstringobject)[] (ReadOnly): Settings for the data provider
* **providerName**: string (ReadOnly)

## KeyValuePairStringObject
### Properties
* **key**: string (ReadOnly)
* **value**: any (ReadOnly): Any object

## DiagnosticData
### Properties
* **renderingProperties**: [Rendering](#rendering) (ReadOnly): Instructions for rendering the data
* **table**: [DataTableResponseObject](#datatableresponseobject) (ReadOnly): Data Table which defines columns and raw row values

## Rendering
### Properties
* **description**: string (ReadOnly): Description of the data that will help it be interpreted
* **title**: string (ReadOnly): Title of data
* **type**: 'AppInsight' | 'AppInsightEnablement' | 'Card' | 'ChangeAnalysisOnboarding' | 'ChangeSets' | 'ChangesView' | 'DataSummary' | 'DependencyGraph' | 'Detector' | 'DownTime' | 'DropDown' | 'DynamicInsight' | 'Email' | 'Form' | 'Guage' | 'Insights' | 'Markdown' | 'NoGraph' | 'PieChart' | 'SearchComponent' | 'Solution' | 'SummaryCard' | 'Table' | 'TimeSeries' | 'TimeSeriesPerInstance' (ReadOnly): Rendering Type

## DataTableResponseObject
### Properties
* **columns**: [DataTableResponseColumn](#datatableresponsecolumn)[] (ReadOnly): List of columns with data types
* **rows**: string[][] (ReadOnly): Raw row values
* **tableName**: string (ReadOnly): Name of the table

## DataTableResponseColumn
### Properties
* **columnName**: string (ReadOnly): Name of the column
* **columnType**: string (ReadOnly): Column Type
* **dataType**: string (ReadOnly): Data type which looks like 'String' or 'Int32'.

## DetectorInfo
### Properties
* **analysisType**: string[] (ReadOnly): Analysis Types for which this detector should apply to.
* **author**: string (ReadOnly): Author of the detector.
* **category**: string (ReadOnly): Problem category. This serves for organizing group for detectors.
* **description**: string (ReadOnly): Short description of the detector and its purpose.
* **id**: string (ReadOnly): Id of detector
* **name**: string (ReadOnly): Name of detector
* **score**: int (ReadOnly): Defines score of a detector to power ML based matching.
* **supportTopicList**: [SupportTopic](#supporttopic)[] (ReadOnly): List of Support Topics for which this detector is enabled.
* **type**: 'Analysis' | 'CategoryOverview' | 'Detector' (ReadOnly): Whether this detector is an Analysis Detector or not.

## SupportTopic
### Properties
* **id**: string (ReadOnly): Support Topic Id
* **pesId**: string (ReadOnly): Unique resource Id

## Status
### Properties
* **message**: string (ReadOnly): Descriptive message.
* **statusId**: 'Critical' | 'Info' | 'None' | 'Success' | 'Warning' (ReadOnly): Level of the most severe insight generated by the detector.

## QueryUtterancesResults
### Properties
* **query**: string (ReadOnly): Search Query.
* **results**: [QueryUtterancesResult](#queryutterancesresult)[] (ReadOnly): Array of utterance results for search query.

## QueryUtterancesResult
### Properties
* **sampleUtterance**: [SampleUtterance](#sampleutterance) (ReadOnly): Sample utterance.
* **score**: int (ReadOnly): Score of a sample utterance.

## SampleUtterance
### Properties
* **links**: string[] (ReadOnly): Links attribute of sample utterance.
* **qid**: string (ReadOnly): Question id of sample utterance (for stackoverflow questions titles).
* **text**: string (ReadOnly): Text attribute of sample utterance.

