# Microsoft.Logic @ 2015-08-01-preview

## Microsoft.Logic/integrationAccounts/agreements
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountAgreementProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Logic/integrationAccounts/agreements' (ReadOnly, DeployTimeConstant)

## IntegrationAccountAgreementProperties
### Properties
* **agreementType**: 'AS2' | 'Edifact' | 'NotSpecified' | 'X12'
* **changedTime**: string (ReadOnly)
* **content**: AgreementContent
* **createdTime**: string (ReadOnly)
* **guestIdentity**: BusinessIdentity
* **guestPartner**: string
* **hostIdentity**: BusinessIdentity
* **hostPartner**: string
* **metadata**: any

## AgreementContent
### Properties
* **AS2**: AS2AgreementContent
* **Edifact**: EdifactAgreementContent
* **X12**: X12AgreementContent

## AS2AgreementContent
### Properties
* **receiveAgreement**: AS2OneWayAgreement
* **sendAgreement**: AS2OneWayAgreement

## AS2OneWayAgreement
### Properties
* **protocolSettings**: AS2ProtocolSettings
* **receiverBusinessIdentity**: BusinessIdentity
* **senderBusinessIdentity**: BusinessIdentity

## AS2ProtocolSettings
### Properties
* **acknowledgementConnectionSettings**: AS2AcknowledgementConnectionSettings
* **envelopeSettings**: AS2EnvelopeSettings
* **errorSettings**: AS2ErrorSettings
* **mdnSettings**: AS2MdnSettings
* **messageConnectionSettings**: AS2MessageConnectionSettings
* **securitySettings**: AS2SecuritySettings
* **validationSettings**: AS2ValidationSettings

## AS2AcknowledgementConnectionSettings
### Properties
* **ignoreCertificateNameMismatch**: bool
* **keepHttpConnectionAlive**: bool
* **supportHttpStatusCodeContinue**: bool
* **unfoldHttpHeaders**: bool

## AS2EnvelopeSettings
### Properties
* **AutogenerateFileName**: bool
* **SuspendMessageOnFileNameGenerationError**: bool
* **fileNameTemplate**: string
* **messageContentType**: string
* **transmitFileNameInMimeHeader**: bool

## AS2ErrorSettings
### Properties
* **ResendIfMdnNotReceived**: bool
* **SuspendDuplicateMessage**: bool

## AS2MdnSettings
### Properties
* **dispositionNotificationTo**: string
* **mdnText**: string
* **micHashingAlgorithm**: 'None' | 'NotSpecified' | 'SHA2256' | 'SHA2384' | 'SHA2512'
* **needMdn**: bool
* **receiptDeliveryUrl**: string
* **sendInboundMdnToMessageBox**: bool
* **sendMdnAsynchronously**: bool
* **signMdn**: bool
* **signOutboundMdnIfOptional**: bool

## AS2MessageConnectionSettings
### Properties
* **ignoreCertificateNameMismatch**: bool
* **keepHttpConnectionAlive**: bool
* **supportHttpStatusCodeContinue**: bool
* **unfoldHttpHeaders**: bool

## AS2SecuritySettings
### Properties
* **enableNrrForInboundDecodedMessages**: bool
* **enableNrrForInboundEncodedMessages**: bool
* **enableNrrForInboundMdn**: bool
* **enableNrrForOutboundDecodedMessages**: bool
* **enableNrrForOutboundEncodedMessages**: bool
* **enableNrrForOutboundMdn**: bool
* **encryptionCertificateName**: string
* **overrideGroupSigningCertificate**: bool
* **signingCertificateName**: string

## AS2ValidationSettings
### Properties
* **checkCertificateRevocationListOnReceive**: bool
* **checkCertificateRevocationListOnSend**: bool
* **checkDuplicateMessage**: bool
* **compressMessage**: bool
* **encryptMessage**: bool
* **encryptionAlgorithm**: 'AES128' | 'AES192' | 'AES256' | 'DES3' | 'None' | 'NotSpecified' | 'RC2'
* **interchangeDuplicatesValidityDays**: int
* **overrideMessageProperties**: bool
* **signMessage**: bool

## BusinessIdentity
### Properties
* **Qualifier**: string
* **Value**: string

## EdifactAgreementContent
### Properties
* **receiveAgreement**: EdifactOneWayAgreement
* **sendAgreement**: EdifactOneWayAgreement

## EdifactOneWayAgreement
### Properties
* **protocolSettings**: EdifactProtocolSettings
* **receiverBusinessIdentity**: BusinessIdentity
* **senderBusinessIdentity**: BusinessIdentity

## EdifactProtocolSettings
### Properties
* **acknowledgementSettings**: EdifactAcknowledgementSettings
* **edifactDelimiterOverrides**: EdifactDelimiterOverride[]
* **envelopeOverrides**: EdifactEnvelopeOverride[]
* **envelopeSettings**: EdifactEnvelopeSettings
* **framingSettings**: EdifactFramingSettings
* **messageFilter**: EdifactMessageFilter
* **messageFilterList**: EdifactMessageIdentifier[]
* **processingSettings**: EdifactProcessingSettings
* **schemaReferences**: EdifactSchemaReference[]
* **validationOverrides**: EdifactValidationOverride[]
* **validationSettings**: EdifactValidationSettings

## EdifactAcknowledgementSettings
### Properties
* **acknowledgementControlNumberLowerBound**: int
* **acknowledgementControlNumberPrefix**: string
* **acknowledgementControlNumberSuffix**: string
* **acknowledgementControlNumberUpperBound**: int
* **batchFunctionalAcknowledgements**: bool
* **batchTechnicalAcknowledgements**: bool
* **needFunctionalAcknowledgement**: bool
* **needLoopForValidMessages**: bool
* **needTechnicalAcknowledgement**: bool
* **rolloverAcknowledgementControlNumber**: bool
* **sendSynchronousAcknowledgement**: bool

## EdifactDelimiterOverride
### Properties
* **componentSeparator**: int
* **dataElementSeparator**: int
* **decimalPointIndicator**: 'Comma' | 'Decimal' | 'NotSpecified'
* **messageAssociationAssignedCode**: string
* **messageId**: string
* **messageRelease**: string
* **messageVersion**: string
* **releaseIndicator**: int
* **repetitionSeparator**: int
* **segmentTerminator**: int
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified'
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
* **applyDelimiterStringAdvice**: bool
* **communicationAgreementId**: string
* **createGroupingSegments**: bool
* **enableDefaultGroupHeaders**: bool
* **functionalGroupId**: string
* **groupApplicationPassword**: string
* **groupApplicationReceiverId**: string
* **groupApplicationReceiverQualifier**: string
* **groupApplicationSenderId**: string
* **groupApplicationSenderQualifier**: string
* **groupAssociationAssignedCode**: string
* **groupControlNumberLowerBound**: int
* **groupControlNumberPrefix**: string
* **groupControlNumberSuffix**: string
* **groupControlNumberUpperBound**: int
* **groupControllingAgencyCode**: string
* **groupMessageRelease**: string
* **groupMessageVersion**: string
* **interchangeControlNumberLowerBound**: int
* **interchangeControlNumberPrefix**: string
* **interchangeControlNumberSuffix**: string
* **interchangeControlNumberUpperBound**: int
* **isTestInterchange**: bool
* **overwriteExistingTransactionSetControlNumber**: bool
* **processingPriorityCode**: string
* **receiverInternalIdentification**: string
* **receiverInternalSubIdentification**: string
* **receiverReverseRoutingAddress**: string
* **recipientReferencePasswordQualifier**: string
* **recipientReferencePasswordValue**: string
* **rolloverGroupControlNumber**: bool
* **rolloverInterchangeControlNumber**: bool
* **rolloverTransactionSetControlNumber**: bool
* **senderInternalIdentification**: string
* **senderInternalSubIdentification**: string
* **senderReverseRoutingAddress**: string
* **transactionSetControlNumberLowerBound**: int
* **transactionSetControlNumberPrefix**: string
* **transactionSetControlNumberSuffix**: string
* **transactionSetControlNumberUpperBound**: int

## EdifactFramingSettings
### Properties
* **characterEncoding**: string
* **characterSet**: 'KECA' | 'NotSpecified' | 'UNOA' | 'UNOB' | 'UNOC' | 'UNOD' | 'UNOE' | 'UNOF' | 'UNOG' | 'UNOH' | 'UNOI' | 'UNOJ' | 'UNOK' | 'UNOX' | 'UNOY'
* **componentSeparator**: int
* **dataElementSeparator**: int
* **decimalPointIndicator**: 'Comma' | 'Decimal' | 'NotSpecified'
* **protocolVersion**: int
* **releaseIndicator**: int
* **repetitionSeparator**: int
* **segmentTerminator**: int
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified'
* **serviceCodeListDirectoryVersion**: string

## EdifactMessageFilter
### Properties
* **messageFilterType**: 'Exclude' | 'Include' | 'NotSpecified'

## EdifactMessageIdentifier
### Properties
* **messageId**: string

## EdifactProcessingSettings
### Properties
* **createEmptyXmlTagsForTrailingSeparators**: bool
* **maskSecurityInfo**: bool
* **preserveInterchange**: bool
* **suspendInterchangeOnError**: bool
* **useDotAsDecimalSeparator**: bool

## EdifactSchemaReference
### Properties
* **associationAssignedCode**: string
* **messageId**: string
* **messageRelease**: string
* **messageVersion**: string
* **schemaName**: string
* **senderApplicationId**: string
* **senderApplicationQualifier**: string

## EdifactValidationOverride
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool
* **enforceCharacterSet**: bool
* **messageId**: string
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional'
* **trimLeadingAndTrailingSpacesAndZeroes**: bool
* **validateEDITypes**: bool
* **validateXSDTypes**: bool

## EdifactValidationSettings
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool
* **checkDuplicateGroupControlNumber**: bool
* **checkDuplicateInterchangeControlNumber**: bool
* **checkDuplicateTransactionSetControlNumber**: bool
* **interchangeControlNumberValidityDays**: int
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional'
* **trimLeadingAndTrailingSpacesAndZeroes**: bool
* **validateCharacterSet**: bool
* **validateEDITypes**: bool
* **validateXSDTypes**: bool

## X12AgreementContent
### Properties
* **receiveAgreement**: X12OneWayAgreement
* **sendAgreement**: X12OneWayAgreement

## X12OneWayAgreement
### Properties
* **protocolSettings**: X12ProtocolSettings
* **receiverBusinessIdentity**: BusinessIdentity
* **senderBusinessIdentity**: BusinessIdentity

## X12ProtocolSettings
### Properties
* **acknowledgementSettings**: X12AcknowledgementSettings
* **envelopeOverrides**: X12EnvelopeOverride[]
* **envelopeSettings**: X12EnvelopeSettings
* **framingSettings**: X12FramingSettings
* **messageFilter**: X12MessageFilter
* **messageFilterList**: X12MessageIdentifier[]
* **processingSettings**: X12ProcessingSettings
* **schemaReferences**: X12SchemaReference[]
* **securitySettings**: X12SecuritySettings
* **validationOverrides**: X12ValidationOverride[]
* **validationSettings**: X12ValidationSettings
* **x12DelimiterOverrides**: X12DelimiterOverrides[]

## X12AcknowledgementSettings
### Properties
* **acknowledgementControlNumberLowerBound**: int
* **acknowledgementControlNumberPrefix**: string
* **acknowledgementControlNumberSuffix**: string
* **acknowledgementControlNumberUpperBound**: int
* **batchFunctionalAcknowledgements**: bool
* **batchImplementationAcknowledgements**: bool
* **batchTechnicalAcknowledgements**: bool
* **functionalAcknowledgementVersion**: string
* **implementationAcknowledgementVersion**: string
* **needFunctionalAcknowledgement**: bool
* **needImplementationAcknowledgement**: bool
* **needLoopForValidMessages**: bool
* **needTechnicalAcknowledgement**: bool
* **rolloverAcknowledgementControlNumber**: bool
* **sendSynchronousAcknowledgement**: bool

## X12EnvelopeOverride
### Properties
* **dateFormat**: 'CCYYMMDD' | 'NotSpecified' | 'YYMMDD'
* **functionalIdentifierCode**: string
* **headerVersion**: string
* **messageId**: string
* **protocolVersion**: string
* **receiverApplicationId**: string
* **responsibleAgencyCode**: int
* **senderApplicationId**: string
* **targetNamespace**: string
* **timeFormat**: 'HHMM' | 'HHMMSS' | 'HHMMSSd' | 'HHMMSSdd' | 'NotSpecified'

## X12EnvelopeSettings
### Properties
* **controlStandardsId**: int
* **controlVersionNumber**: string
* **enableDefaultGroupHeaders**: bool
* **functionalGroupId**: string
* **groupControlNumberLowerBound**: int
* **groupControlNumberUpperBound**: int
* **groupHeaderAgencyCode**: string
* **groupHeaderDateFormat**: 'CCYYMMDD' | 'NotSpecified' | 'YYMMDD'
* **groupHeaderTimeFormat**: 'HHMM' | 'HHMMSS' | 'HHMMSSd' | 'HHMMSSdd' | 'NotSpecified'
* **groupHeaderVersion**: string
* **interchangeControlNumberLowerBound**: int
* **interchangeControlNumberUpperBound**: int
* **overwriteExistingTransactionSetControlNumber**: bool
* **receiverApplicationId**: string
* **rolloverGroupControlNumber**: bool
* **rolloverInterchangeControlNumber**: bool
* **rolloverTransactionSetControlNumber**: bool
* **senderApplicationId**: string
* **transactionSetControlNumberLowerBound**: int
* **transactionSetControlNumberPrefix**: string
* **transactionSetControlNumberSuffix**: string
* **transactionSetControlNumberUpperBound**: int
* **usageIndicator**: 'Information' | 'NotSpecified' | 'Production' | 'Test'
* **useControlStandardsIdAsRepetitionCharacter**: bool

## X12FramingSettings
### Properties
* **characterSet**: 'Basic' | 'Extended' | 'NotSpecified' | 'UTF8'
* **componentSeparator**: int
* **dataElementSeparator**: int
* **replaceCharacter**: int
* **replaceSeparatorsInPayload**: bool
* **segmentTerminator**: int
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified'

## X12MessageFilter
### Properties
* **messageFilterType**: 'Exclude' | 'Include' | 'NotSpecified'

## X12MessageIdentifier
### Properties
* **messageId**: string

## X12ProcessingSettings
### Properties
* **convertImpliedDecimal**: bool
* **createEmptyXmlTagsForTrailingSeparators**: bool
* **maskSecurityInfo**: bool
* **preserveInterchange**: bool
* **suspendInterchangeOnError**: bool
* **useDotAsDecimalSeparator**: bool

## X12SchemaReference
### Properties
* **messageId**: string
* **schemaName**: string
* **schemaVersion**: string
* **senderApplicationId**: string

## X12SecuritySettings
### Properties
* **authorizationQualifier**: string
* **authorizationValue**: string
* **passwordValue**: string
* **securityQualifier**: string

## X12ValidationOverride
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool
* **messageId**: string
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional'
* **trimLeadingAndTrailingSpacesAndZeroes**: bool
* **validateCharacterSet**: bool
* **validateEDITypes**: bool
* **validateXSDTypes**: bool

## X12ValidationSettings
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool
* **checkDuplicateGroupControlNumber**: bool
* **checkDuplicateInterchangeControlNumber**: bool
* **checkDuplicateTransactionSetControlNumber**: bool
* **interchangeControlNumberValidityDays**: int
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional'
* **trimLeadingAndTrailingSpacesAndZeroes**: bool
* **validateCharacterSet**: bool
* **validateEDITypes**: bool
* **validateXSDTypes**: bool

## X12DelimiterOverrides
### Properties
* **componentSeparator**: int
* **dataElementSeparator**: int
* **messageId**: string
* **protocolVersion**: string
* **replaceCharacter**: int
* **replaceSeparatorsInPayload**: bool
* **segmentTerminator**: int
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified'
* **targetNamespace**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Logic/integrationAccounts/certificates
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountCertificateProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Logic/integrationAccounts/certificates' (ReadOnly, DeployTimeConstant)

## IntegrationAccountCertificateProperties
### Properties
* **changedTime**: string (ReadOnly)
* **createdTime**: string (ReadOnly)
* **key**: KeyVaultKeyReference
* **metadata**: any
* **publicCertificate**: string

## KeyVaultKeyReference
### Properties
* **keyName**: string
* **keyVault**: schemas:87_keyVault
* **keyVersion**: string

## schemas:87_keyVault
### Properties
* **id**: string
* **name**: string (ReadOnly)
* **type**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Logic/integrationAccounts/maps
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountMapProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Logic/integrationAccounts/maps' (ReadOnly, DeployTimeConstant)

## IntegrationAccountMapProperties
### Properties
* **changedTime**: string (ReadOnly)
* **content**: any
* **contentLink**: IntegrationAccountContentLink (ReadOnly)
* **contentType**: string
* **createdTime**: string (ReadOnly)
* **mapType**: 'NotSpecified' | 'Xslt'
* **metadata**: any

## IntegrationAccountContentLink
### Properties
* **contentHash**: IntegrationAccountContentHash
* **contentSize**: int
* **contentVersion**: string
* **metadata**: any
* **uri**: string

## IntegrationAccountContentHash
### Properties
* **algorithm**: string
* **value**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Logic/integrationAccounts/partners
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountPartnerProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Logic/integrationAccounts/partners' (ReadOnly, DeployTimeConstant)

## IntegrationAccountPartnerProperties
### Properties
* **changedTime**: string (ReadOnly)
* **content**: PartnerContent
* **createdTime**: string (ReadOnly)
* **metadata**: any
* **partnerType**: 'B2B' | 'NotSpecified'

## PartnerContent
### Properties
* **b2b**: B2BPartnerContent

## B2BPartnerContent
### Properties
* **businessIdentities**: BusinessIdentity[]

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Logic/integrationAccounts/schemas
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: IntegrationAccountSchemaProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Logic/integrationAccounts/schemas' (ReadOnly, DeployTimeConstant)

## IntegrationAccountSchemaProperties
### Properties
* **changedTime**: string (ReadOnly)
* **content**: any
* **contentLink**: IntegrationAccountContentLink (ReadOnly)
* **contentType**: string
* **createdTime**: string (ReadOnly)
* **metadata**: any
* **schemaType**: 'NotSpecified' | 'Xml'
* **targetNamespace**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Logic/integrationAccounts
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: any
* **sku**: IntegrationAccountSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Logic/integrationAccounts' (ReadOnly, DeployTimeConstant)

## IntegrationAccountSku
### Properties
* **name**: 'Basic' | 'Free' | 'NotSpecified' | 'Premium' | 'Shared' | 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

