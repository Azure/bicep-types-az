# Microsoft.Logic @ 2015-08-01-preview

## Resource Microsoft.Logic/integrationAccounts@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: any
* **sku**: [IntegrationAccountSku](#integrationaccountsku)
* **tags**: [IntegrationAccountResourceTags](#integrationaccountresourcetags)
* **type**: 'Microsoft.Logic/integrationAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/agreements@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IntegrationAccountAgreementProperties](#integrationaccountagreementproperties)
* **tags**: [IntegrationAccountResourceTags](#integrationaccountresourcetags)
* **type**: 'Microsoft.Logic/integrationAccounts/agreements' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/certificates@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IntegrationAccountCertificateProperties](#integrationaccountcertificateproperties)
* **tags**: [IntegrationAccountResourceTags](#integrationaccountresourcetags)
* **type**: 'Microsoft.Logic/integrationAccounts/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/maps@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IntegrationAccountMapProperties](#integrationaccountmapproperties)
* **tags**: [IntegrationAccountResourceTags](#integrationaccountresourcetags)
* **type**: 'Microsoft.Logic/integrationAccounts/maps' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/partners@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IntegrationAccountPartnerProperties](#integrationaccountpartnerproperties)
* **tags**: [IntegrationAccountResourceTags](#integrationaccountresourcetags)
* **type**: 'Microsoft.Logic/integrationAccounts/partners' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Logic/integrationAccounts/schemas@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IntegrationAccountSchemaProperties](#integrationaccountschemaproperties)
* **tags**: [IntegrationAccountResourceTags](#integrationaccountresourcetags)
* **type**: 'Microsoft.Logic/integrationAccounts/schemas' (ReadOnly, DeployTimeConstant)

## IntegrationAccountSku
### Properties
* **name**: 'Basic' | 'Free' | 'NotSpecified' | 'Premium' | 'Shared' | 'Standard'

## IntegrationAccountResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountAgreementProperties
### Properties
* **agreementType**: 'AS2' | 'Edifact' | 'NotSpecified' | 'X12'
* **changedTime**: string (ReadOnly)
* **content**: [AgreementContent](#agreementcontent)
* **createdTime**: string (ReadOnly)
* **guestIdentity**: [BusinessIdentity](#businessidentity)
* **guestPartner**: string
* **hostIdentity**: [BusinessIdentity](#businessidentity)
* **hostPartner**: string
* **metadata**: any

## AgreementContent
### Properties
* **AS2**: [AS2AgreementContent](#as2agreementcontent)
* **Edifact**: [EdifactAgreementContent](#edifactagreementcontent)
* **X12**: [X12AgreementContent](#x12agreementcontent)

## AS2AgreementContent
### Properties
* **receiveAgreement**: [AS2OneWayAgreement](#as2onewayagreement)
* **sendAgreement**: [AS2OneWayAgreement](#as2onewayagreement)

## AS2OneWayAgreement
### Properties
* **protocolSettings**: [AS2ProtocolSettings](#as2protocolsettings)
* **receiverBusinessIdentity**: [BusinessIdentity](#businessidentity)
* **senderBusinessIdentity**: [BusinessIdentity](#businessidentity)

## AS2ProtocolSettings
### Properties
* **acknowledgementConnectionSettings**: [AS2AcknowledgementConnectionSettings](#as2acknowledgementconnectionsettings)
* **envelopeSettings**: [AS2EnvelopeSettings](#as2envelopesettings)
* **errorSettings**: [AS2ErrorSettings](#as2errorsettings)
* **mdnSettings**: [AS2MdnSettings](#as2mdnsettings)
* **messageConnectionSettings**: [AS2MessageConnectionSettings](#as2messageconnectionsettings)
* **securitySettings**: [AS2SecuritySettings](#as2securitysettings)
* **validationSettings**: [AS2ValidationSettings](#as2validationsettings)

## AS2AcknowledgementConnectionSettings
### Properties
* **ignoreCertificateNameMismatch**: bool
* **keepHttpConnectionAlive**: bool
* **supportHttpStatusCodeContinue**: bool
* **unfoldHttpHeaders**: bool

## AS2EnvelopeSettings
### Properties
* **AutogenerateFileName**: bool
* **fileNameTemplate**: string
* **messageContentType**: string
* **SuspendMessageOnFileNameGenerationError**: bool
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
* **encryptionAlgorithm**: 'AES128' | 'AES192' | 'AES256' | 'DES3' | 'None' | 'NotSpecified' | 'RC2'
* **encryptMessage**: bool
* **interchangeDuplicatesValidityDays**: int
* **overrideMessageProperties**: bool
* **signMessage**: bool

## BusinessIdentity
### Properties
* **Qualifier**: string
* **Value**: string

## EdifactAgreementContent
### Properties
* **receiveAgreement**: [EdifactOneWayAgreement](#edifactonewayagreement)
* **sendAgreement**: [EdifactOneWayAgreement](#edifactonewayagreement)

## EdifactOneWayAgreement
### Properties
* **protocolSettings**: [EdifactProtocolSettings](#edifactprotocolsettings)
* **receiverBusinessIdentity**: [BusinessIdentity](#businessidentity)
* **senderBusinessIdentity**: [BusinessIdentity](#businessidentity)

## EdifactProtocolSettings
### Properties
* **acknowledgementSettings**: [EdifactAcknowledgementSettings](#edifactacknowledgementsettings)
* **edifactDelimiterOverrides**: [EdifactDelimiterOverride](#edifactdelimiteroverride)[]
* **envelopeOverrides**: [EdifactEnvelopeOverride](#edifactenvelopeoverride)[]
* **envelopeSettings**: [EdifactEnvelopeSettings](#edifactenvelopesettings)
* **framingSettings**: [EdifactFramingSettings](#edifactframingsettings)
* **messageFilter**: [EdifactMessageFilter](#edifactmessagefilter)
* **messageFilterList**: [EdifactMessageIdentifier](#edifactmessageidentifier)[]
* **processingSettings**: [EdifactProcessingSettings](#edifactprocessingsettings)
* **schemaReferences**: [EdifactSchemaReference](#edifactschemareference)[]
* **validationOverrides**: [EdifactValidationOverride](#edifactvalidationoverride)[]
* **validationSettings**: [EdifactValidationSettings](#edifactvalidationsettings)

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
* **groupControllingAgencyCode**: string
* **groupControlNumberLowerBound**: int
* **groupControlNumberPrefix**: string
* **groupControlNumberSuffix**: string
* **groupControlNumberUpperBound**: int
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
* **receiveAgreement**: [X12OneWayAgreement](#x12onewayagreement)
* **sendAgreement**: [X12OneWayAgreement](#x12onewayagreement)

## X12OneWayAgreement
### Properties
* **protocolSettings**: [X12ProtocolSettings](#x12protocolsettings)
* **receiverBusinessIdentity**: [BusinessIdentity](#businessidentity)
* **senderBusinessIdentity**: [BusinessIdentity](#businessidentity)

## X12ProtocolSettings
### Properties
* **acknowledgementSettings**: [X12AcknowledgementSettings](#x12acknowledgementsettings)
* **envelopeOverrides**: [X12EnvelopeOverride](#x12envelopeoverride)[]
* **envelopeSettings**: [X12EnvelopeSettings](#x12envelopesettings)
* **framingSettings**: [X12FramingSettings](#x12framingsettings)
* **messageFilter**: [X12MessageFilter](#x12messagefilter)
* **messageFilterList**: [X12MessageIdentifier](#x12messageidentifier)[]
* **processingSettings**: [X12ProcessingSettings](#x12processingsettings)
* **schemaReferences**: [X12SchemaReference](#x12schemareference)[]
* **securitySettings**: [X12SecuritySettings](#x12securitysettings)
* **validationOverrides**: [X12ValidationOverride](#x12validationoverride)[]
* **validationSettings**: [X12ValidationSettings](#x12validationsettings)
* **x12DelimiterOverrides**: [X12DelimiterOverrides](#x12delimiteroverrides)[]

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

## IntegrationAccountResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountCertificateProperties
### Properties
* **changedTime**: string (ReadOnly)
* **createdTime**: string (ReadOnly)
* **key**: [KeyVaultKeyReference](#keyvaultkeyreference)
* **metadata**: any
* **publicCertificate**: string

## KeyVaultKeyReference
### Properties
* **keyName**: string
* **keyVault**: [KeyVaultKeyReferenceKeyVault](#keyvaultkeyreferencekeyvault)
* **keyVersion**: string

## KeyVaultKeyReferenceKeyVault
### Properties
* **id**: string
* **name**: string (ReadOnly)
* **type**: string (ReadOnly)

## IntegrationAccountResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountMapProperties
### Properties
* **changedTime**: string (ReadOnly)
* **content**: any
* **contentLink**: [IntegrationAccountContentLink](#integrationaccountcontentlink) (ReadOnly)
* **contentType**: string
* **createdTime**: string (ReadOnly)
* **mapType**: 'NotSpecified' | 'Xslt'
* **metadata**: any

## IntegrationAccountContentLink
### Properties
* **contentHash**: [IntegrationAccountContentHash](#integrationaccountcontenthash)
* **contentSize**: int
* **contentVersion**: string
* **metadata**: any
* **uri**: string

## IntegrationAccountContentHash
### Properties
* **algorithm**: string
* **value**: string

## IntegrationAccountResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountPartnerProperties
### Properties
* **changedTime**: string (ReadOnly)
* **content**: [PartnerContent](#partnercontent)
* **createdTime**: string (ReadOnly)
* **metadata**: any
* **partnerType**: 'B2B' | 'NotSpecified'

## PartnerContent
### Properties
* **b2b**: [B2BPartnerContent](#b2bpartnercontent)

## B2BPartnerContent
### Properties
* **businessIdentities**: [BusinessIdentity](#businessidentity)[]

## IntegrationAccountResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountSchemaProperties
### Properties
* **changedTime**: string (ReadOnly)
* **content**: any
* **contentLink**: [IntegrationAccountContentLink](#integrationaccountcontentlink) (ReadOnly)
* **contentType**: string
* **createdTime**: string (ReadOnly)
* **metadata**: any
* **schemaType**: 'NotSpecified' | 'Xml'
* **targetNamespace**: string

## IntegrationAccountResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

