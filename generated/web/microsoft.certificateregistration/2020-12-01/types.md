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
* **properties**: [AppServiceCertificate](#appservicecertificate): Core resource properties
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

## AppServiceCertificate
### Properties
* **keyVaultId**: string: Key Vault resource Id.
* **keyVaultSecretName**: string: Key Vault secret name.
* **provisioningState**: 'AzureServiceUnauthorizedToAccessKeyVault' | 'CertificateOrderFailed' | 'ExternalPrivateKey' | 'Initialized' | 'KeyVaultDoesNotExist' | 'KeyVaultSecretDoesNotExist' | 'OperationNotPermittedOnKeyVault' | 'Succeeded' | 'Unknown' | 'UnknownError' | 'WaitingOnCertificateOrder' (ReadOnly): Status of the Key Vault secret.

## AppServiceCertificateOrderProperties
### Properties
* **appServiceCertificateNotRenewableReasons**: 'ExpirationNotInRenewalTimeRange' | 'RegistrationStatusNotSupportedForRenewal' | 'SubscriptionNotActive' | string[] (ReadOnly): Reasons why App Service Certificate is not renewable at the current moment.
* **autoRenew**: bool: <code>true</code> if the certificate should be automatically renewed when it expires; otherwise, <code>false</code>.
* **certificates**: [AppServiceCertificateOrderPropertiesCertificates](#appservicecertificateorderpropertiescertificates): State of the Key Vault secret.
* **contact**: [CertificateOrderContact](#certificateordercontact) (ReadOnly): Contact info
* **csr**: string: Last CSR that was created for this order.
* **distinguishedName**: string: Certificate distinguished name.
* **domainVerificationToken**: string (ReadOnly): Domain verification token.
* **expirationTime**: string (ReadOnly): Certificate expiration time.
* **intermediate**: [CertificateDetails](#certificatedetails) (ReadOnly): Intermediate certificate.
* **isPrivateKeyExternal**: bool (ReadOnly): <code>true</code> if private key is external; otherwise, <code>false</code>.
* **keySize**: int: Certificate key size.
* **lastCertificateIssuanceTime**: string (ReadOnly): Certificate last issuance time.
* **nextAutoRenewalTimeStamp**: string (ReadOnly): Time stamp when the certificate would be auto renewed next
* **productType**: 'StandardDomainValidatedSsl' | 'StandardDomainValidatedWildCardSsl' (Required): Certificate product type.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly): Status of certificate order.
* **root**: [CertificateDetails](#certificatedetails) (ReadOnly): Root certificate.
* **serialNumber**: string (ReadOnly): Current serial number of the certificate.
* **signedCertificate**: [CertificateDetails](#certificatedetails) (ReadOnly): Signed certificate.
* **status**: 'Canceled' | 'Denied' | 'Expired' | 'Issued' | 'NotSubmitted' | 'PendingRekey' | 'Pendingissuance' | 'Pendingrevocation' | 'Revoked' | 'Unused' (ReadOnly): Current order status.
* **validityInYears**: int: Duration in years (must be 1).

## AppServiceCertificateOrderPropertiesCertificates
### Properties
### Additional Properties
* **Additional Properties Type**: [AppServiceCertificate](#appservicecertificate)

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

## CertificateOrderContact
### Properties
* **email**: string
* **nameFirst**: string
* **nameLast**: string
* **phone**: string

## DataProviderMetadata
### Properties
* **propertyBag**: [KeyValuePairStringObject](#keyvaluepairstringobject)[] (ReadOnly): Settings for the data provider
* **providerName**: string

## DataTableResponseColumn
### Properties
* **columnName**: string: Name of the column
* **columnType**: string: Column Type
* **dataType**: string: Data type which looks like 'String' or 'Int32'.

## DataTableResponseObject
### Properties
* **columns**: [DataTableResponseColumn](#datatableresponsecolumn)[]: List of columns with data types
* **rows**: string[][]: Raw row values
* **tableName**: string: Name of the table

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

## DetectorResponseProperties
### Properties
* **dataProvidersMetadata**: [DataProviderMetadata](#dataprovidermetadata)[]: Additional configuration for different data providers to be used by the UI
* **dataset**: [DiagnosticData](#diagnosticdata)[]: Data Set
* **metadata**: [DetectorInfo](#detectorinfo): metadata for the detector
* **status**: [Status](#status): Indicates status of the most severe insight.
* **suggestedUtterances**: [QueryUtterancesResults](#queryutterancesresults): Suggested utterances where the detector can be applicable.

## DiagnosticData
### Properties
* **renderingProperties**: [Rendering](#rendering): Properties that describe how the table should be rendered
* **table**: [DataTableResponseObject](#datatableresponseobject): Data in table form

## KeyValuePairStringObject
### Properties
* **key**: string (ReadOnly)
* **value**: any (ReadOnly): Any object

## QueryUtterancesResult
### Properties
* **sampleUtterance**: [SampleUtterance](#sampleutterance): A sample utterance.
* **score**: int: Score of a sample utterance.

## QueryUtterancesResults
### Properties
* **query**: string: Search Query.
* **results**: [QueryUtterancesResult](#queryutterancesresult)[]: Array of utterance results for search query.

## Rendering
### Properties
* **description**: string: Description of the data that will help it be interpreted
* **title**: string: Title of data
* **type**: 'AppInsight' | 'AppInsightEnablement' | 'Card' | 'ChangeAnalysisOnboarding' | 'ChangeSets' | 'ChangesView' | 'DataSummary' | 'DependencyGraph' | 'Detector' | 'DownTime' | 'DropDown' | 'DynamicInsight' | 'Email' | 'Form' | 'Guage' | 'Insights' | 'Markdown' | 'NoGraph' | 'PieChart' | 'SearchComponent' | 'Solution' | 'SummaryCard' | 'Table' | 'TimeSeries' | 'TimeSeriesPerInstance': Rendering Type

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SampleUtterance
### Properties
* **links**: string[]: Links attribute of sample utterance.
* **qid**: string: Question id of sample utterance (for stackoverflow questions titles).
* **text**: string: Text attribute of sample utterance.

## Status
### Properties
* **message**: string: Descriptive message.
* **statusId**: 'Critical' | 'Info' | 'None' | 'Success' | 'Warning': Level of the most severe insight generated by the detector.

## SupportTopic
### Properties
* **id**: string (ReadOnly): Support Topic Id
* **pesId**: string (ReadOnly): Unique resource Id

