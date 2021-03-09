# Microsoft.Logic @ 2019-05-01

## Resource Microsoft.Logic/integrationAccounts@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountProperties
* **sku**: IntegrationAccountSku
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/agreements@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountAgreementProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/agreements' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/assemblies@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AssemblyProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/assemblies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/batchConfigurations@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: BatchConfigurationProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/batchConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/certificates@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountCertificateProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/maps@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountMapProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/maps' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/partners@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountPartnerProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/partners' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/schemas@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountSchemaProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/schemas' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/sessions@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountSessionProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationAccounts/sessions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationServiceEnvironments@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationServiceEnvironmentProperties
* **sku**: IntegrationServiceEnvironmentSku
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/integrationServiceEnvironments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationServiceEnvironments/managedApis@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApiResourceProperties (ReadOnly)
* **tags**: ResourceTags (ReadOnly)
* **type**: 'Microsoft.Logic/integrationServiceEnvironments/managedApis' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/workflows@2019-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkflowProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Logic/workflows' (ReadOnly, DeployTimeConstant)

## IntegrationAccountProperties
### Properties
* **integrationServiceEnvironment**: IntegrationServiceEnvironment
* **state**: 'Completed' | 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended'

## IntegrationServiceEnvironment
### Properties
* **id**: string (ReadOnly)
* **location**: string
* **name**: string (ReadOnly)
* **properties**: IntegrationServiceEnvironmentProperties
* **sku**: IntegrationServiceEnvironmentSku
* **tags**: ResourceTags
* **type**: string (ReadOnly)

## IntegrationServiceEnvironmentProperties
### Properties
* **encryptionConfiguration**: IntegrationServiceEnvironmenEncryptionConfiguration
* **endpointsConfiguration**: FlowEndpointsConfiguration
* **integrationServiceEnvironmentId**: string
* **networkConfiguration**: NetworkConfiguration
* **provisioningState**: 'Accepted' | 'Canceled' | 'Completed' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'Pending' | 'Ready' | 'Registered' | 'Registering' | 'Renewing' | 'Running' | 'Succeeded' | 'Unregistered' | 'Unregistering' | 'Updating' | 'Waiting'
* **state**: 'Completed' | 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended'

## IntegrationServiceEnvironmenEncryptionConfiguration
### Properties
* **encryptionKeyReference**: IntegrationServiceEnvironmenEncryptionKeyReference

## IntegrationServiceEnvironmenEncryptionKeyReference
### Properties
* **keyName**: string
* **keyVault**: ResourceReference
* **keyVersion**: string

## ResourceReference
### Properties
* **id**: string
* **name**: string (ReadOnly)
* **type**: string (ReadOnly)

## FlowEndpointsConfiguration
### Properties
* **connector**: FlowEndpoints
* **workflow**: FlowEndpoints

## FlowEndpoints
### Properties
* **accessEndpointIpAddresses**: IpAddress[]
* **outgoingIpAddresses**: IpAddress[]

## IpAddress
### Properties
* **address**: string

## NetworkConfiguration
### Properties
* **accessEndpoint**: IntegrationServiceEnvironmentAccessEndpoint
* **subnets**: ResourceReference[]
* **virtualNetworkAddressSpace**: string

## IntegrationServiceEnvironmentAccessEndpoint
### Properties
* **type**: 'External' | 'Internal' | 'NotSpecified'

## IntegrationServiceEnvironmentSku
### Properties
* **capacity**: int
* **name**: 'Developer' | 'NotSpecified' | 'Premium'

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountSku
### Properties
* **name**: 'Basic' | 'Free' | 'NotSpecified' | 'Standard' (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountAgreementProperties
### Properties
* **agreementType**: 'AS2' | 'Edifact' | 'NotSpecified' | 'X12' (Required)
* **changedTime**: string (ReadOnly)
* **content**: AgreementContent (Required)
* **createdTime**: string (ReadOnly)
* **guestIdentity**: BusinessIdentity (Required)
* **guestPartner**: string (Required)
* **hostIdentity**: BusinessIdentity (Required)
* **hostPartner**: string (Required)
* **metadata**: any

## AgreementContent
### Properties
* **aS2**: AS2AgreementContent
* **edifact**: EdifactAgreementContent
* **x12**: X12AgreementContent

## AS2AgreementContent
### Properties
* **receiveAgreement**: AS2OneWayAgreement (Required)
* **sendAgreement**: AS2OneWayAgreement (Required)

## AS2OneWayAgreement
### Properties
* **protocolSettings**: AS2ProtocolSettings (Required)
* **receiverBusinessIdentity**: BusinessIdentity (Required)
* **senderBusinessIdentity**: BusinessIdentity (Required)

## AS2ProtocolSettings
### Properties
* **acknowledgementConnectionSettings**: AS2AcknowledgementConnectionSettings (Required)
* **envelopeSettings**: AS2EnvelopeSettings (Required)
* **errorSettings**: AS2ErrorSettings (Required)
* **mdnSettings**: AS2MdnSettings (Required)
* **messageConnectionSettings**: AS2MessageConnectionSettings (Required)
* **securitySettings**: AS2SecuritySettings (Required)
* **validationSettings**: AS2ValidationSettings (Required)

## AS2AcknowledgementConnectionSettings
### Properties
* **ignoreCertificateNameMismatch**: bool (Required)
* **keepHttpConnectionAlive**: bool (Required)
* **supportHttpStatusCodeContinue**: bool (Required)
* **unfoldHttpHeaders**: bool (Required)

## AS2EnvelopeSettings
### Properties
* **autogenerateFileName**: bool (Required)
* **fileNameTemplate**: string (Required)
* **messageContentType**: string (Required)
* **suspendMessageOnFileNameGenerationError**: bool (Required)
* **transmitFileNameInMimeHeader**: bool (Required)

## AS2ErrorSettings
### Properties
* **resendIfMDNNotReceived**: bool (Required)
* **suspendDuplicateMessage**: bool (Required)

## AS2MdnSettings
### Properties
* **dispositionNotificationTo**: string
* **mdnText**: string
* **micHashingAlgorithm**: 'MD5' | 'None' | 'NotSpecified' | 'SHA1' | 'SHA2256' | 'SHA2384' | 'SHA2512' (Required)
* **needMDN**: bool (Required)
* **receiptDeliveryUrl**: string
* **sendInboundMDNToMessageBox**: bool (Required)
* **sendMDNAsynchronously**: bool (Required)
* **signMDN**: bool (Required)
* **signOutboundMDNIfOptional**: bool (Required)

## AS2MessageConnectionSettings
### Properties
* **ignoreCertificateNameMismatch**: bool (Required)
* **keepHttpConnectionAlive**: bool (Required)
* **supportHttpStatusCodeContinue**: bool (Required)
* **unfoldHttpHeaders**: bool (Required)

## AS2SecuritySettings
### Properties
* **enableNRRForInboundDecodedMessages**: bool (Required)
* **enableNRRForInboundEncodedMessages**: bool (Required)
* **enableNRRForInboundMDN**: bool (Required)
* **enableNRRForOutboundDecodedMessages**: bool (Required)
* **enableNRRForOutboundEncodedMessages**: bool (Required)
* **enableNRRForOutboundMDN**: bool (Required)
* **encryptionCertificateName**: string
* **overrideGroupSigningCertificate**: bool (Required)
* **sha2AlgorithmFormat**: string
* **signingCertificateName**: string

## AS2ValidationSettings
### Properties
* **checkCertificateRevocationListOnReceive**: bool (Required)
* **checkCertificateRevocationListOnSend**: bool (Required)
* **checkDuplicateMessage**: bool (Required)
* **compressMessage**: bool (Required)
* **encryptionAlgorithm**: 'AES128' | 'AES192' | 'AES256' | 'DES3' | 'None' | 'NotSpecified' | 'RC2' (Required)
* **encryptMessage**: bool (Required)
* **interchangeDuplicatesValidityDays**: int (Required)
* **overrideMessageProperties**: bool (Required)
* **signingAlgorithm**: 'Default' | 'NotSpecified' | 'SHA1' | 'SHA2256' | 'SHA2384' | 'SHA2512'
* **signMessage**: bool (Required)

## BusinessIdentity
### Properties
* **qualifier**: string (Required)
* **value**: string (Required)

## EdifactAgreementContent
### Properties
* **receiveAgreement**: EdifactOneWayAgreement (Required)
* **sendAgreement**: EdifactOneWayAgreement (Required)

## EdifactOneWayAgreement
### Properties
* **protocolSettings**: EdifactProtocolSettings (Required)
* **receiverBusinessIdentity**: BusinessIdentity (Required)
* **senderBusinessIdentity**: BusinessIdentity (Required)

## EdifactProtocolSettings
### Properties
* **acknowledgementSettings**: EdifactAcknowledgementSettings (Required)
* **edifactDelimiterOverrides**: EdifactDelimiterOverride[]
* **envelopeOverrides**: EdifactEnvelopeOverride[]
* **envelopeSettings**: EdifactEnvelopeSettings (Required)
* **framingSettings**: EdifactFramingSettings (Required)
* **messageFilter**: EdifactMessageFilter (Required)
* **messageFilterList**: EdifactMessageIdentifier[]
* **processingSettings**: EdifactProcessingSettings (Required)
* **schemaReferences**: EdifactSchemaReference[] (Required)
* **validationOverrides**: EdifactValidationOverride[]
* **validationSettings**: EdifactValidationSettings (Required)

## EdifactAcknowledgementSettings
### Properties
* **acknowledgementControlNumberLowerBound**: int (Required)
* **acknowledgementControlNumberPrefix**: string
* **acknowledgementControlNumberSuffix**: string
* **acknowledgementControlNumberUpperBound**: int (Required)
* **batchFunctionalAcknowledgements**: bool (Required)
* **batchTechnicalAcknowledgements**: bool (Required)
* **needFunctionalAcknowledgement**: bool (Required)
* **needLoopForValidMessages**: bool (Required)
* **needTechnicalAcknowledgement**: bool (Required)
* **rolloverAcknowledgementControlNumber**: bool (Required)
* **sendSynchronousAcknowledgement**: bool (Required)

## EdifactDelimiterOverride
### Properties
* **componentSeparator**: int (Required)
* **dataElementSeparator**: int (Required)
* **decimalPointIndicator**: 'Comma' | 'Decimal' | 'NotSpecified' (Required)
* **messageAssociationAssignedCode**: string
* **messageId**: string
* **messageRelease**: string
* **messageVersion**: string
* **releaseIndicator**: int (Required)
* **repetitionSeparator**: int (Required)
* **segmentTerminator**: int (Required)
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified' (Required)
* **targetNamespace**: string

## EdifactEnvelopeOverride
### Properties
* **applicationPassword**: string
* **associationAssignedCode**: string
* **controllingAgencyCode**: string
* **functionalGroupId**: string
* **groupHeaderMessageRelease**: string
* **groupHeaderMessageVersion**: string
* **messageAssociationAssignedCode**: string
* **messageId**: string
* **messageRelease**: string
* **messageVersion**: string
* **receiverApplicationId**: string
* **receiverApplicationQualifier**: string
* **senderApplicationId**: string
* **senderApplicationQualifier**: string
* **targetNamespace**: string

## EdifactEnvelopeSettings
### Properties
* **applicationReferenceId**: string
* **applyDelimiterStringAdvice**: bool (Required)
* **communicationAgreementId**: string
* **createGroupingSegments**: bool (Required)
* **enableDefaultGroupHeaders**: bool (Required)
* **functionalGroupId**: string
* **groupApplicationPassword**: string
* **groupApplicationReceiverId**: string
* **groupApplicationReceiverQualifier**: string
* **groupApplicationSenderId**: string
* **groupApplicationSenderQualifier**: string
* **groupAssociationAssignedCode**: string
* **groupControllingAgencyCode**: string
* **groupControlNumberLowerBound**: int (Required)
* **groupControlNumberPrefix**: string
* **groupControlNumberSuffix**: string
* **groupControlNumberUpperBound**: int (Required)
* **groupMessageRelease**: string
* **groupMessageVersion**: string
* **interchangeControlNumberLowerBound**: int (Required)
* **interchangeControlNumberPrefix**: string
* **interchangeControlNumberSuffix**: string
* **interchangeControlNumberUpperBound**: int (Required)
* **isTestInterchange**: bool (Required)
* **overwriteExistingTransactionSetControlNumber**: bool (Required)
* **processingPriorityCode**: string
* **receiverInternalIdentification**: string
* **receiverInternalSubIdentification**: string
* **receiverReverseRoutingAddress**: string
* **recipientReferencePasswordQualifier**: string
* **recipientReferencePasswordValue**: string
* **rolloverGroupControlNumber**: bool (Required)
* **rolloverInterchangeControlNumber**: bool (Required)
* **rolloverTransactionSetControlNumber**: bool (Required)
* **senderInternalIdentification**: string
* **senderInternalSubIdentification**: string
* **senderReverseRoutingAddress**: string
* **transactionSetControlNumberLowerBound**: int (Required)
* **transactionSetControlNumberPrefix**: string
* **transactionSetControlNumberSuffix**: string
* **transactionSetControlNumberUpperBound**: int (Required)

## EdifactFramingSettings
### Properties
* **characterEncoding**: string
* **characterSet**: 'KECA' | 'NotSpecified' | 'UNOA' | 'UNOB' | 'UNOC' | 'UNOD' | 'UNOE' | 'UNOF' | 'UNOG' | 'UNOH' | 'UNOI' | 'UNOJ' | 'UNOK' | 'UNOX' | 'UNOY' (Required)
* **componentSeparator**: int (Required)
* **dataElementSeparator**: int (Required)
* **decimalPointIndicator**: 'Comma' | 'Decimal' | 'NotSpecified' (Required)
* **protocolVersion**: int (Required)
* **releaseIndicator**: int (Required)
* **repetitionSeparator**: int (Required)
* **segmentTerminator**: int (Required)
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified' (Required)
* **serviceCodeListDirectoryVersion**: string

## EdifactMessageFilter
### Properties
* **messageFilterType**: 'Exclude' | 'Include' | 'NotSpecified' (Required)

## EdifactMessageIdentifier
### Properties
* **messageId**: string (Required)

## EdifactProcessingSettings
### Properties
* **createEmptyXmlTagsForTrailingSeparators**: bool (Required)
* **maskSecurityInfo**: bool (Required)
* **preserveInterchange**: bool (Required)
* **suspendInterchangeOnError**: bool (Required)
* **useDotAsDecimalSeparator**: bool (Required)

## EdifactSchemaReference
### Properties
* **associationAssignedCode**: string
* **messageId**: string (Required)
* **messageRelease**: string (Required)
* **messageVersion**: string (Required)
* **schemaName**: string (Required)
* **senderApplicationId**: string
* **senderApplicationQualifier**: string

## EdifactValidationOverride
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **enforceCharacterSet**: bool (Required)
* **messageId**: string (Required)
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional' (Required)
* **trimLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **validateEDITypes**: bool (Required)
* **validateXSDTypes**: bool (Required)

## EdifactValidationSettings
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **checkDuplicateGroupControlNumber**: bool (Required)
* **checkDuplicateInterchangeControlNumber**: bool (Required)
* **checkDuplicateTransactionSetControlNumber**: bool (Required)
* **interchangeControlNumberValidityDays**: int (Required)
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional' (Required)
* **trimLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **validateCharacterSet**: bool (Required)
* **validateEDITypes**: bool (Required)
* **validateXSDTypes**: bool (Required)

## X12AgreementContent
### Properties
* **receiveAgreement**: X12OneWayAgreement (Required)
* **sendAgreement**: X12OneWayAgreement (Required)

## X12OneWayAgreement
### Properties
* **protocolSettings**: X12ProtocolSettings (Required)
* **receiverBusinessIdentity**: BusinessIdentity (Required)
* **senderBusinessIdentity**: BusinessIdentity (Required)

## X12ProtocolSettings
### Properties
* **acknowledgementSettings**: X12AcknowledgementSettings (Required)
* **envelopeOverrides**: X12EnvelopeOverride[]
* **envelopeSettings**: X12EnvelopeSettings (Required)
* **framingSettings**: X12FramingSettings (Required)
* **messageFilter**: X12MessageFilter (Required)
* **messageFilterList**: X12MessageIdentifier[]
* **processingSettings**: X12ProcessingSettings (Required)
* **schemaReferences**: X12SchemaReference[] (Required)
* **securitySettings**: X12SecuritySettings (Required)
* **validationOverrides**: X12ValidationOverride[]
* **validationSettings**: X12ValidationSettings (Required)
* **x12DelimiterOverrides**: X12DelimiterOverrides[]

## X12AcknowledgementSettings
### Properties
* **acknowledgementControlNumberLowerBound**: int (Required)
* **acknowledgementControlNumberPrefix**: string
* **acknowledgementControlNumberSuffix**: string
* **acknowledgementControlNumberUpperBound**: int (Required)
* **batchFunctionalAcknowledgements**: bool (Required)
* **batchImplementationAcknowledgements**: bool (Required)
* **batchTechnicalAcknowledgements**: bool (Required)
* **functionalAcknowledgementVersion**: string
* **implementationAcknowledgementVersion**: string
* **needFunctionalAcknowledgement**: bool (Required)
* **needImplementationAcknowledgement**: bool (Required)
* **needLoopForValidMessages**: bool (Required)
* **needTechnicalAcknowledgement**: bool (Required)
* **rolloverAcknowledgementControlNumber**: bool (Required)
* **sendSynchronousAcknowledgement**: bool (Required)

## X12EnvelopeOverride
### Properties
* **dateFormat**: 'CCYYMMDD' | 'NotSpecified' | 'YYMMDD' (Required)
* **functionalIdentifierCode**: string
* **headerVersion**: string (Required)
* **messageId**: string (Required)
* **protocolVersion**: string (Required)
* **receiverApplicationId**: string (Required)
* **responsibleAgencyCode**: string (Required)
* **senderApplicationId**: string (Required)
* **targetNamespace**: string (Required)
* **timeFormat**: 'HHMM' | 'HHMMSS' | 'HHMMSSd' | 'HHMMSSdd' | 'NotSpecified' (Required)

## X12EnvelopeSettings
### Properties
* **controlStandardsId**: int (Required)
* **controlVersionNumber**: string (Required)
* **enableDefaultGroupHeaders**: bool (Required)
* **functionalGroupId**: string
* **groupControlNumberLowerBound**: int (Required)
* **groupControlNumberUpperBound**: int (Required)
* **groupHeaderAgencyCode**: string (Required)
* **groupHeaderDateFormat**: 'CCYYMMDD' | 'NotSpecified' | 'YYMMDD' (Required)
* **groupHeaderTimeFormat**: 'HHMM' | 'HHMMSS' | 'HHMMSSd' | 'HHMMSSdd' | 'NotSpecified' (Required)
* **groupHeaderVersion**: string (Required)
* **interchangeControlNumberLowerBound**: int (Required)
* **interchangeControlNumberUpperBound**: int (Required)
* **overwriteExistingTransactionSetControlNumber**: bool (Required)
* **receiverApplicationId**: string (Required)
* **rolloverGroupControlNumber**: bool (Required)
* **rolloverInterchangeControlNumber**: bool (Required)
* **rolloverTransactionSetControlNumber**: bool (Required)
* **senderApplicationId**: string (Required)
* **transactionSetControlNumberLowerBound**: int (Required)
* **transactionSetControlNumberPrefix**: string
* **transactionSetControlNumberSuffix**: string
* **transactionSetControlNumberUpperBound**: int (Required)
* **usageIndicator**: 'Information' | 'NotSpecified' | 'Production' | 'Test' (Required)
* **useControlStandardsIdAsRepetitionCharacter**: bool (Required)

## X12FramingSettings
### Properties
* **characterSet**: 'Basic' | 'Extended' | 'NotSpecified' | 'UTF8' (Required)
* **componentSeparator**: int (Required)
* **dataElementSeparator**: int (Required)
* **replaceCharacter**: int (Required)
* **replaceSeparatorsInPayload**: bool (Required)
* **segmentTerminator**: int (Required)
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified' (Required)

## X12MessageFilter
### Properties
* **messageFilterType**: 'Exclude' | 'Include' | 'NotSpecified' (Required)

## X12MessageIdentifier
### Properties
* **messageId**: string (Required)

## X12ProcessingSettings
### Properties
* **convertImpliedDecimal**: bool (Required)
* **createEmptyXmlTagsForTrailingSeparators**: bool (Required)
* **maskSecurityInfo**: bool (Required)
* **preserveInterchange**: bool (Required)
* **suspendInterchangeOnError**: bool (Required)
* **useDotAsDecimalSeparator**: bool (Required)

## X12SchemaReference
### Properties
* **messageId**: string (Required)
* **schemaName**: string (Required)
* **schemaVersion**: string (Required)
* **senderApplicationId**: string

## X12SecuritySettings
### Properties
* **authorizationQualifier**: string (Required)
* **authorizationValue**: string
* **passwordValue**: string
* **securityQualifier**: string (Required)

## X12ValidationOverride
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **messageId**: string (Required)
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional' (Required)
* **trimLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **validateCharacterSet**: bool (Required)
* **validateEDITypes**: bool (Required)
* **validateXSDTypes**: bool (Required)

## X12ValidationSettings
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **checkDuplicateGroupControlNumber**: bool (Required)
* **checkDuplicateInterchangeControlNumber**: bool (Required)
* **checkDuplicateTransactionSetControlNumber**: bool (Required)
* **interchangeControlNumberValidityDays**: int (Required)
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional' (Required)
* **trimLeadingAndTrailingSpacesAndZeroes**: bool (Required)
* **validateCharacterSet**: bool (Required)
* **validateEDITypes**: bool (Required)
* **validateXSDTypes**: bool (Required)

## X12DelimiterOverrides
### Properties
* **componentSeparator**: int (Required)
* **dataElementSeparator**: int (Required)
* **messageId**: string
* **protocolVersion**: string
* **replaceCharacter**: int (Required)
* **replaceSeparatorsInPayload**: bool (Required)
* **segmentTerminator**: int (Required)
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified' (Required)
* **targetNamespace**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AssemblyProperties
### Properties
* **assemblyCulture**: string
* **assemblyName**: string (Required)
* **assemblyPublicKeyToken**: string
* **assemblyVersion**: string
* **changedTime**: string
* **content**: any
* **contentLink**: ContentLink
* **contentType**: string
* **createdTime**: string
* **metadata**: any

## ContentLink
### Properties
* **contentHash**: ContentHash
* **contentSize**: int
* **contentVersion**: string
* **metadata**: any
* **uri**: string

## ContentHash
### Properties
* **algorithm**: string
* **value**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BatchConfigurationProperties
### Properties
* **batchGroupName**: string (Required)
* **changedTime**: string
* **createdTime**: string
* **metadata**: any
* **releaseCriteria**: BatchReleaseCriteria (Required)

## BatchReleaseCriteria
### Properties
* **batchSize**: int
* **messageCount**: int
* **recurrence**: WorkflowTriggerRecurrence

## WorkflowTriggerRecurrence
### Properties
* **endTime**: string
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'NotSpecified' | 'Second' | 'Week' | 'Year'
* **interval**: int
* **schedule**: RecurrenceSchedule
* **startTime**: string
* **timeZone**: string

## RecurrenceSchedule
### Properties
* **hours**: int[]
* **minutes**: int[]
* **monthDays**: int[]
* **monthlyOccurrences**: RecurrenceScheduleOccurrence[]
* **weekDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]

## RecurrenceScheduleOccurrence
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'
* **occurrence**: int

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountCertificateProperties
### Properties
* **changedTime**: string (ReadOnly)
* **createdTime**: string (ReadOnly)
* **key**: KeyVaultKeyReference
* **metadata**: any
* **publicCertificate**: string

## KeyVaultKeyReference
### Properties
* **keyName**: string (Required)
* **keyVault**: KeyVaultKeyReferenceKeyVault (Required)
* **keyVersion**: string

## KeyVaultKeyReferenceKeyVault
### Properties
* **id**: string
* **name**: string (ReadOnly)
* **type**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountMapProperties
### Properties
* **changedTime**: string (ReadOnly)
* **content**: string
* **contentLink**: ContentLink (ReadOnly)
* **contentType**: string
* **createdTime**: string (ReadOnly)
* **mapType**: 'Liquid' | 'NotSpecified' | 'Xslt' | 'Xslt20' | 'Xslt30' (Required)
* **metadata**: any
* **parametersSchema**: IntegrationAccountMapPropertiesParametersSchema

## IntegrationAccountMapPropertiesParametersSchema
### Properties
* **ref**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountPartnerProperties
### Properties
* **changedTime**: string (ReadOnly)
* **content**: PartnerContent (Required)
* **createdTime**: string (ReadOnly)
* **metadata**: any
* **partnerType**: 'B2B' | 'NotSpecified' (Required)

## PartnerContent
### Properties
* **b2b**: B2BPartnerContent

## B2BPartnerContent
### Properties
* **businessIdentities**: BusinessIdentity[]

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountSchemaProperties
### Properties
* **changedTime**: string (ReadOnly)
* **content**: string
* **contentLink**: ContentLink (ReadOnly)
* **contentType**: string
* **createdTime**: string (ReadOnly)
* **documentName**: string
* **fileName**: string
* **metadata**: any
* **schemaType**: 'NotSpecified' | 'Xml' (Required)
* **targetNamespace**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountSessionProperties
### Properties
* **changedTime**: string (ReadOnly)
* **content**: any
* **createdTime**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApiResourceProperties
### Properties
* **apiDefinitions**: ApiResourceDefinitions (ReadOnly)
* **apiDefinitionUrl**: string (ReadOnly)
* **backendService**: ApiResourceBackendService (ReadOnly)
* **capabilities**: string[] (ReadOnly)
* **category**: 'Enterprise' | 'NotSpecified' | 'Premium' | 'Standard' (ReadOnly)
* **connectionParameters**: ApiResourcePropertiesConnectionParameters (ReadOnly)
* **generalInformation**: ApiResourceGeneralInformation (ReadOnly)
* **integrationServiceEnvironment**: ResourceReference (ReadOnly)
* **metadata**: ApiResourceMetadata (ReadOnly)
* **name**: string (ReadOnly)
* **policies**: ApiResourcePolicies (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Completed' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'Pending' | 'Ready' | 'Registered' | 'Registering' | 'Renewing' | 'Running' | 'Succeeded' | 'Unregistered' | 'Unregistering' | 'Updating' | 'Waiting' (ReadOnly)
* **runtimeUrls**: string[] (ReadOnly)

## ApiResourceDefinitions
### Properties
* **modifiedSwaggerUrl**: string (ReadOnly)
* **originalSwaggerUrl**: string (ReadOnly)

## ApiResourceBackendService
### Properties
* **serviceUrl**: string (ReadOnly)

## ApiResourcePropertiesConnectionParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ApiResourceGeneralInformation
### Properties
* **description**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **iconUrl**: string (ReadOnly)
* **releaseTag**: string (ReadOnly)
* **termsOfUseUrl**: string (ReadOnly)
* **tier**: 'Enterprise' | 'NotSpecified' | 'Premium' | 'Standard' (ReadOnly)

## ApiResourceMetadata
### Properties
* **ApiType**: 'NotSpecified' | 'Rest' | 'Soap' (ReadOnly)
* **brandColor**: string (ReadOnly)
* **connectionType**: string (ReadOnly)
* **deploymentParameters**: ApiDeploymentParameterMetadataSet (ReadOnly)
* **hideKey**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Completed' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'Pending' | 'Ready' | 'Registered' | 'Registering' | 'Renewing' | 'Running' | 'Succeeded' | 'Unregistered' | 'Unregistering' | 'Updating' | 'Waiting' (ReadOnly)
* **source**: string (ReadOnly)
* **tags**: ApiResourceMetadataTags (ReadOnly)
* **wsdlImportMethod**: 'NotSpecified' | 'SoapPassThrough' | 'SoapToRest' (ReadOnly)
* **wsdlService**: WsdlService (ReadOnly)

## ApiDeploymentParameterMetadataSet
### Properties
* **packageContentLink**: ApiDeploymentParameterMetadata (ReadOnly)
* **redisCacheConnectionString**: ApiDeploymentParameterMetadata (ReadOnly)

## ApiDeploymentParameterMetadata
### Properties
* **description**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **isRequired**: bool (ReadOnly)
* **type**: string (ReadOnly)
* **visibility**: 'Default' | 'Internal' | 'NotSpecified' (ReadOnly)

## ApiResourceMetadataTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WsdlService
### Properties
* **EndpointQualifiedNames**: string[] (ReadOnly)
* **qualifiedName**: string (ReadOnly)

## ApiResourcePolicies
### Properties
* **content**: string (ReadOnly)
* **contentLink**: string (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkflowProperties
### Properties
* **accessControl**: FlowAccessControlConfiguration
* **accessEndpoint**: string (ReadOnly)
* **changedTime**: string (ReadOnly)
* **createdTime**: string (ReadOnly)
* **definition**: any
* **endpointsConfiguration**: FlowEndpointsConfiguration
* **integrationAccount**: ResourceReference
* **integrationServiceEnvironment**: ResourceReference
* **parameters**: WorkflowPropertiesParameters
* **provisioningState**: 'Accepted' | 'Canceled' | 'Completed' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'InProgress' | 'Moving' | 'NotSpecified' | 'Pending' | 'Ready' | 'Registered' | 'Registering' | 'Renewing' | 'Running' | 'Succeeded' | 'Unregistered' | 'Unregistering' | 'Updating' | 'Waiting' (ReadOnly)
* **sku**: Sku (ReadOnly)
* **state**: 'Completed' | 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended'
* **version**: string (ReadOnly)

## FlowAccessControlConfiguration
### Properties
* **actions**: FlowAccessControlConfigurationPolicy
* **contents**: FlowAccessControlConfigurationPolicy
* **triggers**: FlowAccessControlConfigurationPolicy
* **workflowManagement**: FlowAccessControlConfigurationPolicy

## FlowAccessControlConfigurationPolicy
### Properties
* **allowedCallerIpAddresses**: IpAddressRange[]
* **openAuthenticationPolicies**: OpenAuthenticationAccessPolicies

## IpAddressRange
### Properties
* **addressRange**: string

## OpenAuthenticationAccessPolicies
### Properties
* **policies**: OpenAuthenticationAccessPolicies

## OpenAuthenticationAccessPolicies
### Properties
### Additional Properties
* **Additional Properties Type**: OpenAuthenticationAccessPolicy

## OpenAuthenticationAccessPolicy
### Properties
* **claims**: OpenAuthenticationPolicyClaim[]
* **type**: 'AAD' (ReadOnly)

## OpenAuthenticationPolicyClaim
### Properties
* **name**: string
* **value**: string

## WorkflowPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: WorkflowParameter

## WorkflowParameter
### Properties
* **description**: string
* **metadata**: any
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'NotSpecified' | 'Object' | 'SecureObject' | 'SecureString' | 'String'
* **value**: any

## Sku
### Properties
* **name**: 'Basic' | 'Free' | 'NotSpecified' | 'Premium' | 'Shared' | 'Standard' (Required)
* **plan**: ResourceReference

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

