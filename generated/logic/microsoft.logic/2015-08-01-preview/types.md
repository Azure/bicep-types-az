# Microsoft.Logic @ 2015-08-01-preview

## Resource Microsoft.Logic/integrationAccounts@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any: The integration account properties.
* **sku**: [IntegrationAccountSku](#integrationaccountsku): The sku.
* **tags**: [IntegrationAccountResourceTags](#integrationaccountresourcetags): The resource tags.
* **type**: 'Microsoft.Logic/integrationAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/integrationAccounts/agreements@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IntegrationAccountAgreementProperties](#integrationaccountagreementproperties): The integration account agreement properties.
* **tags**: [IntegrationAccountResourceTags](#integrationaccountresourcetags): The resource tags.
* **type**: 'Microsoft.Logic/integrationAccounts/agreements' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/integrationAccounts/certificates@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IntegrationAccountCertificateProperties](#integrationaccountcertificateproperties): The integration account certificate properties.
* **tags**: [IntegrationAccountResourceTags](#integrationaccountresourcetags): The resource tags.
* **type**: 'Microsoft.Logic/integrationAccounts/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/integrationAccounts/maps@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IntegrationAccountMapProperties](#integrationaccountmapproperties): The integration account map properties.
* **tags**: [IntegrationAccountResourceTags](#integrationaccountresourcetags): The resource tags.
* **type**: 'Microsoft.Logic/integrationAccounts/maps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/integrationAccounts/partners@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IntegrationAccountPartnerProperties](#integrationaccountpartnerproperties): The integration account partner properties.
* **tags**: [IntegrationAccountResourceTags](#integrationaccountresourcetags): The resource tags.
* **type**: 'Microsoft.Logic/integrationAccounts/partners' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/integrationAccounts/schemas@2015-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IntegrationAccountSchemaProperties](#integrationaccountschemaproperties): The integration account schema properties.
* **tags**: [IntegrationAccountResourceTags](#integrationaccountresourcetags): The resource tags.
* **type**: 'Microsoft.Logic/integrationAccounts/schemas' (ReadOnly, DeployTimeConstant): The resource type

## Function listCallbackUrl (Microsoft.Logic/integrationAccounts@2015-08-01-preview)
* **Resource**: Microsoft.Logic/integrationAccounts
* **ApiVersion**: 2015-08-01-preview
* **Input**: [ListCallbackUrlParameters](#listcallbackurlparameters)
* **Output**: [CallbackUrl](#callbackurl)

## AgreementContent
### Properties
* **AS2**: [AS2AgreementContent](#as2agreementcontent): The AS2 agreement content.
* **Edifact**: [EdifactAgreementContent](#edifactagreementcontent): The EDIFACT agreement content.
* **X12**: [X12AgreementContent](#x12agreementcontent): The X12 agreement content.

## AS2AcknowledgementConnectionSettings
### Properties
* **ignoreCertificateNameMismatch**: bool: The value indicating whether to ignore mismatch in certificate name.
* **keepHttpConnectionAlive**: bool: The value indicating whether to keep the connection alive.
* **supportHttpStatusCodeContinue**: bool: The value indicating whether to support HTTP status code 'CONTINUE'.
* **unfoldHttpHeaders**: bool: The value indicating whether to unfold the HTTP headers.

## AS2AgreementContent
### Properties
* **receiveAgreement**: [AS2OneWayAgreement](#as2onewayagreement): The AS2 one-way receive agreement.
* **sendAgreement**: [AS2OneWayAgreement](#as2onewayagreement): The AS2 one-way send agreement.

## AS2EnvelopeSettings
### Properties
* **AutogenerateFileName**: bool: The value indicating whether to auto generate file name.
* **fileNameTemplate**: string: The template for file name.
* **messageContentType**: string: The message content type.
* **SuspendMessageOnFileNameGenerationError**: bool: The value indicating whether to suspend message on file name generation error.
* **transmitFileNameInMimeHeader**: bool: The value indicating whether to transmit file name in mime header.

## AS2ErrorSettings
### Properties
* **ResendIfMdnNotReceived**: bool: The value indicating whether to resend message If MDN is not received.
* **SuspendDuplicateMessage**: bool: The value indicating whether to suspend duplicate message.

## AS2MdnSettings
### Properties
* **dispositionNotificationTo**: string: The disposition notification to header value.
* **mdnText**: string: The MDN text.
* **micHashingAlgorithm**: 'None' | 'NotSpecified' | 'SHA2256' | 'SHA2384' | 'SHA2512': The signing or hashing algorithm.
* **needMdn**: bool: The value indicating whether to send or request a MDN.
* **receiptDeliveryUrl**: string: The receipt delivery URL.
* **sendInboundMdnToMessageBox**: bool: The value indicating whether to send inbound MDN to message box.
* **sendMdnAsynchronously**: bool: The value indicating whether to send the asynchronous MDN.
* **signMdn**: bool: The value indicating whether the MDN needs to be signed or not.
* **signOutboundMdnIfOptional**: bool: The value indicating whether to sign the outbound MDN if optional.

## AS2MessageConnectionSettings
### Properties
* **ignoreCertificateNameMismatch**: bool: The value indicating whether to ignore mismatch in certificate name.
* **keepHttpConnectionAlive**: bool: The value indicating whether to keep the connection alive.
* **supportHttpStatusCodeContinue**: bool: The value indicating whether to support HTTP status code 'CONTINUE'.
* **unfoldHttpHeaders**: bool: The value indicating whether to unfold the HTTP headers.

## AS2OneWayAgreement
### Properties
* **protocolSettings**: [AS2ProtocolSettings](#as2protocolsettings): The AS2 protocol settings.
* **receiverBusinessIdentity**: [BusinessIdentity](#businessidentity): The receiver business identity
* **senderBusinessIdentity**: [BusinessIdentity](#businessidentity): The sender business identity

## AS2ProtocolSettings
### Properties
* **acknowledgementConnectionSettings**: [AS2AcknowledgementConnectionSettings](#as2acknowledgementconnectionsettings): The acknowledgement connection settings.
* **envelopeSettings**: [AS2EnvelopeSettings](#as2envelopesettings): The envelope settings.
* **errorSettings**: [AS2ErrorSettings](#as2errorsettings): The error settings.
* **mdnSettings**: [AS2MdnSettings](#as2mdnsettings): The MDN settings.
* **messageConnectionSettings**: [AS2MessageConnectionSettings](#as2messageconnectionsettings): The message connection settings.
* **securitySettings**: [AS2SecuritySettings](#as2securitysettings): The security settings.
* **validationSettings**: [AS2ValidationSettings](#as2validationsettings): The validation settings.

## AS2SecuritySettings
### Properties
* **enableNrrForInboundDecodedMessages**: bool: The value indicating whether to enable NRR for inbound decoded messages.
* **enableNrrForInboundEncodedMessages**: bool: The value indicating whether to enable NRR for inbound encoded messages.
* **enableNrrForInboundMdn**: bool: The value indicating whether to enable NRR for inbound MDN.
* **enableNrrForOutboundDecodedMessages**: bool: The value indicating whether to enable NRR for outbound decoded messages.
* **enableNrrForOutboundEncodedMessages**: bool: The value indicating whether to enable NRR for outbound encoded messages.
* **enableNrrForOutboundMdn**: bool: The value indicating whether to enable NRR for outbound MDN.
* **encryptionCertificateName**: string: The name of the encryption certificate.
* **overrideGroupSigningCertificate**: bool: The value indicating whether to send or request a MDN.
* **signingCertificateName**: string: The name of the signing certificate.

## AS2ValidationSettings
### Properties
* **checkCertificateRevocationListOnReceive**: bool: The value indicating whether to check for certificate revocation list on receive.
* **checkCertificateRevocationListOnSend**: bool: The value indicating whether to check for certificate revocation list on send.
* **checkDuplicateMessage**: bool: The value indicating whether to check for duplicate message.
* **compressMessage**: bool: The value indicating whether the message has to be compressed.
* **encryptionAlgorithm**: 'AES128' | 'AES192' | 'AES256' | 'DES3' | 'None' | 'NotSpecified' | 'RC2': The encryption algorithm.
* **encryptMessage**: bool: The value indicating whether the message has to be encrypted.
* **interchangeDuplicatesValidityDays**: int: The number of days to look back for duplicate interchange.
* **overrideMessageProperties**: bool: The value indicating whether to override incoming message properties with those in agreement.
* **signMessage**: bool: The value indicating whether the message has to be signed.

## B2BPartnerContent
### Properties
* **businessIdentities**: [BusinessIdentity](#businessidentity)[]: The list of partner business identities.

## BusinessIdentity
### Properties
* **Qualifier**: string: The business identity qualifier.
* **Value**: string: The business identity value.

## CallbackUrl
### Properties
* **value**: string (ReadOnly): The URL value.

## EdifactAcknowledgementSettings
### Properties
* **acknowledgementControlNumberLowerBound**: int: The acknowledgement control number lower bound.
* **acknowledgementControlNumberPrefix**: string: The acknowledgement control number prefix.
* **acknowledgementControlNumberSuffix**: string: The acknowledgement control number suffix.
* **acknowledgementControlNumberUpperBound**: int: The acknowledgement control number upper bound.
* **batchFunctionalAcknowledgements**: bool: The value indicating whether to batch functional acknowledgements.
* **batchTechnicalAcknowledgements**: bool: The value indicating whether to batch the technical acknowledgements.
* **needFunctionalAcknowledgement**: bool: The value indicating whether functional acknowledgement is needed.
* **needLoopForValidMessages**: bool: The value indicating whether a loop is needed for valid messages.
* **needTechnicalAcknowledgement**: bool: The value indicating whether technical acknowledgement is needed.
* **rolloverAcknowledgementControlNumber**: bool: The value indicating whether to rollover acknowledgement control number.
* **sendSynchronousAcknowledgement**: bool: The value indicating whether to send synchronous acknowledgement.

## EdifactAgreementContent
### Properties
* **receiveAgreement**: [EdifactOneWayAgreement](#edifactonewayagreement): The EDIFACT one-way receive agreement.
* **sendAgreement**: [EdifactOneWayAgreement](#edifactonewayagreement): The EDIFACT one-way send agreement.

## EdifactDelimiterOverride
### Properties
* **componentSeparator**: int: The component separator.
* **dataElementSeparator**: int: The data element separator.
* **decimalPointIndicator**: 'Comma' | 'Decimal' | 'NotSpecified': The decimal point indicator.
* **messageAssociationAssignedCode**: string: The message association assigned code.
* **messageId**: string: The message id.
* **messageRelease**: string: The message release version.
* **messageVersion**: string: The message version.
* **releaseIndicator**: int: The release indicator.
* **repetitionSeparator**: int: The repetition separator.
* **segmentTerminator**: int: The segment terminator.
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified': The segment terminator suffix.
* **targetNamespace**: string: The target namespace on which this delimiter settings has to be applied.

## EdifactEnvelopeOverride
### Properties
* **applicationPassword**: string: The application password.
* **associationAssignedCode**: string: The association assigned code.
* **controllingAgencyCode**: string: The controlling agency code.
* **functionalGroupId**: string: The functional group id.
* **groupHeaderMessageRelease**: string: The group header message release.
* **groupHeaderMessageVersion**: string: The group header message version.
* **messageAssociationAssignedCode**: string: The message association assigned code.
* **messageId**: string: The message id on which this envelope settings has to be applied.
* **messageRelease**: string: The message release version on which this envelope settings has to be applied.
* **messageVersion**: string: The message version on which this envelope settings has to be applied.
* **receiverApplicationId**: string: The receiver application id.
* **receiverApplicationQualifier**: string: The receiver application qualifier.
* **senderApplicationId**: string: The sender application id.
* **senderApplicationQualifier**: string: The sender application qualifier.
* **targetNamespace**: string: The target namespace on which this envelope settings has to be applied.

## EdifactEnvelopeSettings
### Properties
* **applicationReferenceId**: string: The application reference id.
* **applyDelimiterStringAdvice**: bool: The value indicating whether to apply delimiter string advice.
* **communicationAgreementId**: string: The communication agreement id.
* **createGroupingSegments**: bool: The value indicating whether to create grouping segments.
* **enableDefaultGroupHeaders**: bool: The value indicating whether to enable default group headers.
* **functionalGroupId**: string: The functional group id.
* **groupApplicationPassword**: string: The group application password.
* **groupApplicationReceiverId**: string: The group application receiver id.
* **groupApplicationReceiverQualifier**: string: The group application receiver qualifier.
* **groupApplicationSenderId**: string: The group application sender id.
* **groupApplicationSenderQualifier**: string: The group application sender qualifier.
* **groupAssociationAssignedCode**: string: The group association assigned code.
* **groupControllingAgencyCode**: string: The group controlling agency code.
* **groupControlNumberLowerBound**: int: The group control number lower bound.
* **groupControlNumberPrefix**: string: The group control number prefix.
* **groupControlNumberSuffix**: string: The group control number suffix.
* **groupControlNumberUpperBound**: int: The group control number upper bound.
* **groupMessageRelease**: string: The group message release.
* **groupMessageVersion**: string: The group message version.
* **interchangeControlNumberLowerBound**: int: The interchange control number lower bound.
* **interchangeControlNumberPrefix**: string: The interchange control number prefix.
* **interchangeControlNumberSuffix**: string: The interchange control number suffix.
* **interchangeControlNumberUpperBound**: int: The interchange control number upper bound.
* **isTestInterchange**: bool: The value indicating whether the message is a test interchange.
* **overwriteExistingTransactionSetControlNumber**: bool: The value indicating whether to overwrite existing transaction set control number.
* **processingPriorityCode**: string: The processing priority code.
* **receiverInternalIdentification**: string: The receiver internal identification.
* **receiverInternalSubIdentification**: string: The receiver internal sub identification.
* **receiverReverseRoutingAddress**: string: The receiver reverse routing address.
* **recipientReferencePasswordQualifier**: string: The recipient reference password qualifier.
* **recipientReferencePasswordValue**: string: The recipient reference password value.
* **rolloverGroupControlNumber**: bool: The value indicating whether to rollover group control number.
* **rolloverInterchangeControlNumber**: bool: The value indicating whether to rollover interchange control number.
* **rolloverTransactionSetControlNumber**: bool: The value indicating whether to rollover transaction set control number.
* **senderInternalIdentification**: string: The sender internal identification.
* **senderInternalSubIdentification**: string: The sender internal sub identification.
* **senderReverseRoutingAddress**: string: The sender reverse routing address.
* **transactionSetControlNumberLowerBound**: int: The transaction set control number lower bound.
* **transactionSetControlNumberPrefix**: string: The transaction set control number prefix.
* **transactionSetControlNumberSuffix**: string: The transaction set control number suffix.
* **transactionSetControlNumberUpperBound**: int: The transaction set control number upper bound.

## EdifactFramingSettings
### Properties
* **characterEncoding**: string: The character encoding.
* **characterSet**: 'KECA' | 'NotSpecified' | 'UNOA' | 'UNOB' | 'UNOC' | 'UNOD' | 'UNOE' | 'UNOF' | 'UNOG' | 'UNOH' | 'UNOI' | 'UNOJ' | 'UNOK' | 'UNOX' | 'UNOY': The EDIFACT frame setting characterSet.
* **componentSeparator**: int: The component separator.
* **dataElementSeparator**: int: The data element separator.
* **decimalPointIndicator**: 'Comma' | 'Decimal' | 'NotSpecified': The EDIFACT frame setting decimal indicator.
* **protocolVersion**: int: The protocol version.
* **releaseIndicator**: int: The release indicator.
* **repetitionSeparator**: int: The repetition separator.
* **segmentTerminator**: int: The segment terminator.
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified': The EDIFACT frame setting segment terminator suffix.
* **serviceCodeListDirectoryVersion**: string: The service code list directory version.

## EdifactMessageFilter
### Properties
* **messageFilterType**: 'Exclude' | 'Include' | 'NotSpecified': The message filter type.

## EdifactMessageIdentifier
### Properties
* **messageId**: string: The message id on which this envelope settings has to be applied.

## EdifactOneWayAgreement
### Properties
* **protocolSettings**: [EdifactProtocolSettings](#edifactprotocolsettings): The EDIFACT protocol settings.
* **receiverBusinessIdentity**: [BusinessIdentity](#businessidentity): The receiver business identity
* **senderBusinessIdentity**: [BusinessIdentity](#businessidentity): The sender business identity

## EdifactProcessingSettings
### Properties
* **createEmptyXmlTagsForTrailingSeparators**: bool: The value indicating whether to create empty xml tags for trailing separators.
* **maskSecurityInfo**: bool: The value indicating whether to mask security information.
* **preserveInterchange**: bool: The value indicating whether to preserve interchange.
* **suspendInterchangeOnError**: bool: The value indicating whether to suspend interchange on error.
* **useDotAsDecimalSeparator**: bool: The value indicating whether to use dot as decimal separator.

## EdifactProtocolSettings
### Properties
* **acknowledgementSettings**: [EdifactAcknowledgementSettings](#edifactacknowledgementsettings): The EDIFACT acknowledgement settings.
* **edifactDelimiterOverrides**: [EdifactDelimiterOverride](#edifactdelimiteroverride)[]: The EDIFACT delimiter override settings.
* **envelopeOverrides**: [EdifactEnvelopeOverride](#edifactenvelopeoverride)[]: The EDIFACT envelope override settings.
* **envelopeSettings**: [EdifactEnvelopeSettings](#edifactenvelopesettings): The EDIFACT envelope settings.
* **framingSettings**: [EdifactFramingSettings](#edifactframingsettings): The EDIFACT framing settings.
* **messageFilter**: [EdifactMessageFilter](#edifactmessagefilter): The EDIFACT message filter.
* **messageFilterList**: [EdifactMessageIdentifier](#edifactmessageidentifier)[]: The EDIFACT message filter list.
* **processingSettings**: [EdifactProcessingSettings](#edifactprocessingsettings): The EDIFACT processing Settings.
* **schemaReferences**: [EdifactSchemaReference](#edifactschemareference)[]: The EDIFACT schema references.
* **validationOverrides**: [EdifactValidationOverride](#edifactvalidationoverride)[]: The EDIFACT validation override settings.
* **validationSettings**: [EdifactValidationSettings](#edifactvalidationsettings): The EDIFACT validation settings.

## EdifactSchemaReference
### Properties
* **associationAssignedCode**: string: The association assigned code.
* **messageId**: string: The message id.
* **messageRelease**: string: The message release version.
* **messageVersion**: string: The message version.
* **schemaName**: string: The schema name.
* **senderApplicationId**: string: The sender application id.
* **senderApplicationQualifier**: string: The sender application qualifier.

## EdifactValidationOverride
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool: The value indicating whether to allow leading and trailing spaces and zeroes.
* **enforceCharacterSet**: bool: The value indicating whether to validate character Set.
* **messageId**: string: The message id on which the validation settings has to be applied.
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional': The trailing separator policy.
* **trimLeadingAndTrailingSpacesAndZeroes**: bool: The value indicating whether to trim leading and trailing spaces and zeroes.
* **validateEDITypes**: bool: The value indicating whether to validate EDI types.
* **validateXSDTypes**: bool: The value indicating whether to validate XSD types.

## EdifactValidationSettings
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool: The value indicating whether to allow leading and trailing spaces and zeroes.
* **checkDuplicateGroupControlNumber**: bool: The value indicating whether to check for duplicate group control number.
* **checkDuplicateInterchangeControlNumber**: bool: The value indicating whether to check for duplicate interchange control number.
* **checkDuplicateTransactionSetControlNumber**: bool: The value indicating whether to check for duplicate transaction set control number.
* **interchangeControlNumberValidityDays**: int: The validity period of interchange control number.
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional': The trailing separator policy.
* **trimLeadingAndTrailingSpacesAndZeroes**: bool: The value indicating whether to trim leading and trailing spaces and zeroes.
* **validateCharacterSet**: bool: The value indicating whether to validate character set in the message.
* **validateEDITypes**: bool: The value indicating whether to Whether to validate EDI types.
* **validateXSDTypes**: bool: The value indicating whether to Whether to validate XSD types.

## IntegrationAccountAgreementProperties
### Properties
* **agreementType**: 'AS2' | 'Edifact' | 'NotSpecified' | 'X12': The agreement type.
* **changedTime**: string (ReadOnly): The changed time.
* **content**: [AgreementContent](#agreementcontent): The agreement content.
* **createdTime**: string (ReadOnly): The created time.
* **guestIdentity**: [BusinessIdentity](#businessidentity): The guest identity.
* **guestPartner**: string: The guest partner.
* **hostIdentity**: [BusinessIdentity](#businessidentity): The host identity.
* **hostPartner**: string: The host partner.
* **metadata**: any: The metadata.

## IntegrationAccountCertificateProperties
### Properties
* **changedTime**: string (ReadOnly): The changed time.
* **createdTime**: string (ReadOnly): The created time.
* **key**: [KeyVaultKeyReference](#keyvaultkeyreference): The key details in the key vault.
* **metadata**: any: The metadata.
* **publicCertificate**: string: The public certificate.

## IntegrationAccountContentHash
### Properties
* **algorithm**: string: The content hash algorithm.
* **value**: string: The content hash value.

## IntegrationAccountContentLink
### Properties
* **contentHash**: [IntegrationAccountContentHash](#integrationaccountcontenthash): The content hash.
* **contentSize**: int: The content size.
* **contentVersion**: string: The content version.
* **metadata**: any: The metadata.
* **uri**: string: The content link URI.

## IntegrationAccountMapProperties
### Properties
* **changedTime**: string (ReadOnly): The changed time.
* **content**: any: The content.
* **contentLink**: [IntegrationAccountContentLink](#integrationaccountcontentlink) (ReadOnly): The content link.
* **contentType**: string: The content type.
* **createdTime**: string (ReadOnly): The created time.
* **mapType**: 'NotSpecified' | 'Xslt': The map type.
* **metadata**: any: The metadata.

## IntegrationAccountPartnerProperties
### Properties
* **changedTime**: string (ReadOnly): The changed time.
* **content**: [PartnerContent](#partnercontent): The partner content.
* **createdTime**: string (ReadOnly): The created time.
* **metadata**: any: The metadata.
* **partnerType**: 'B2B' | 'NotSpecified': The partner type.

## IntegrationAccountResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IntegrationAccountSchemaProperties
### Properties
* **changedTime**: string (ReadOnly): The changed time.
* **content**: any: The content.
* **contentLink**: [IntegrationAccountContentLink](#integrationaccountcontentlink) (ReadOnly): The content link.
* **contentType**: string: The content type.
* **createdTime**: string (ReadOnly): The created time.
* **metadata**: any: The metadata.
* **schemaType**: 'NotSpecified' | 'Xml': The schema type.
* **targetNamespace**: string: The target namespace.

## IntegrationAccountSku
### Properties
* **name**: 'Basic' | 'Free' | 'NotSpecified' | 'Premium' | 'Shared' | 'Standard': The sku name.

## KeyVaultKeyReference
### Properties
* **keyName**: string: The private key name in key vault.
* **keyVault**: [KeyVaultKeyReferenceKeyVault](#keyvaultkeyreferencekeyvault): The key vault reference.
* **keyVersion**: string: The private key version in key vault.

## KeyVaultKeyReferenceKeyVault
### Properties
* **id**: string: The resource id.
* **name**: string (ReadOnly): The resource name.
* **type**: string (ReadOnly): The resource type.

## ListCallbackUrlParameters
### Properties
* **NotAfter**: string (WriteOnly): The expiry time.

## PartnerContent
### Properties
* **b2b**: [B2BPartnerContent](#b2bpartnercontent): The B2B partner content.

## X12AcknowledgementSettings
### Properties
* **acknowledgementControlNumberLowerBound**: int: The acknowledgement control number lower bound.
* **acknowledgementControlNumberPrefix**: string: The acknowledgement control number prefix.
* **acknowledgementControlNumberSuffix**: string: The acknowledgement control number suffix.
* **acknowledgementControlNumberUpperBound**: int: The acknowledgement control number upper bound.
* **batchFunctionalAcknowledgements**: bool: The value indicating whether to batch functional acknowledgements.
* **batchImplementationAcknowledgements**: bool: The value indicating whether to batch implementation acknowledgements.
* **batchTechnicalAcknowledgements**: bool: The value indicating whether to batch the technical acknowledgements.
* **functionalAcknowledgementVersion**: string: The functional acknowledgement version.
* **implementationAcknowledgementVersion**: string: The implementation acknowledgement version.
* **needFunctionalAcknowledgement**: bool: The value indicating whether functional acknowledgement is needed.
* **needImplementationAcknowledgement**: bool: The value indicating whether implementation acknowledgement is needed.
* **needLoopForValidMessages**: bool: The value indicating whether a loop is needed for valid messages.
* **needTechnicalAcknowledgement**: bool: The value indicating whether technical acknowledgement is needed.
* **rolloverAcknowledgementControlNumber**: bool: The value indicating whether to rollover acknowledgement control number.
* **sendSynchronousAcknowledgement**: bool: The value indicating whether to send synchronous acknowledgement.

## X12AgreementContent
### Properties
* **receiveAgreement**: [X12OneWayAgreement](#x12onewayagreement): The X12 one-way receive agreement.
* **sendAgreement**: [X12OneWayAgreement](#x12onewayagreement): The X12 one-way send agreement.

## X12DelimiterOverrides
### Properties
* **componentSeparator**: int: The component separator.
* **dataElementSeparator**: int: The data element separator.
* **messageId**: string: The message id.
* **protocolVersion**: string: The protocol version.
* **replaceCharacter**: int: The replacement character.
* **replaceSeparatorsInPayload**: bool: The value indicating whether to replace separators in payload.
* **segmentTerminator**: int: The segment terminator.
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified': The segment terminator suffix.
* **targetNamespace**: string: The target namespace on which this delimiter settings has to be applied.

## X12EnvelopeOverride
### Properties
* **dateFormat**: 'CCYYMMDD' | 'NotSpecified' | 'YYMMDD': The date format.
* **functionalIdentifierCode**: string: The functional identifier code.
* **headerVersion**: string: The header version.
* **messageId**: string: The message id on which this envelope settings has to be applied.
* **protocolVersion**: string: The protocol version on which this envelope settings has to be applied.
* **receiverApplicationId**: string: The receiver application id.
* **responsibleAgencyCode**: int: The responsible agency code.
* **senderApplicationId**: string: The sender application id.
* **targetNamespace**: string: The target namespace on which this envelope settings has to be applied.
* **timeFormat**: 'HHMM' | 'HHMMSS' | 'HHMMSSd' | 'HHMMSSdd' | 'NotSpecified': The time format.

## X12EnvelopeSettings
### Properties
* **controlStandardsId**: int: The controls standards id.
* **controlVersionNumber**: string: The control version number.
* **enableDefaultGroupHeaders**: bool: The value indicating whether to enable default group headers.
* **functionalGroupId**: string: The functional group id.
* **groupControlNumberLowerBound**: int: The group control number lower bound.
* **groupControlNumberUpperBound**: int: The group control number upper bound.
* **groupHeaderAgencyCode**: string: The group header agency code.
* **groupHeaderDateFormat**: 'CCYYMMDD' | 'NotSpecified' | 'YYMMDD': The group header date format.
* **groupHeaderTimeFormat**: 'HHMM' | 'HHMMSS' | 'HHMMSSd' | 'HHMMSSdd' | 'NotSpecified': The group header time format.
* **groupHeaderVersion**: string: The group header version.
* **interchangeControlNumberLowerBound**: int: The interchange  control number lower bound.
* **interchangeControlNumberUpperBound**: int: The interchange  control number upper bound.
* **overwriteExistingTransactionSetControlNumber**: bool: The value indicating whether to overwrite existing transaction set control number.
* **receiverApplicationId**: string: The receiver application id.
* **rolloverGroupControlNumber**: bool: The value indicating whether to rollover group control number.
* **rolloverInterchangeControlNumber**: bool: The value indicating whether to rollover interchange control number.
* **rolloverTransactionSetControlNumber**: bool: The value indicating whether to rollover transaction set control number.
* **senderApplicationId**: string: The sender application id.
* **transactionSetControlNumberLowerBound**: int: The transaction set control number lower bound.
* **transactionSetControlNumberPrefix**: string: The transaction set control number prefix.
* **transactionSetControlNumberSuffix**: string: The transaction set control number suffix.
* **transactionSetControlNumberUpperBound**: int: The transaction set control number upper bound.
* **usageIndicator**: 'Information' | 'NotSpecified' | 'Production' | 'Test': The usage indicator.
* **useControlStandardsIdAsRepetitionCharacter**: bool: The value indicating whether to use control standards id as repetition character.

## X12FramingSettings
### Properties
* **characterSet**: 'Basic' | 'Extended' | 'NotSpecified' | 'UTF8': The X12 character set.
* **componentSeparator**: int: The component separator.
* **dataElementSeparator**: int: The data element separator.
* **replaceCharacter**: int: The replacement character.
* **replaceSeparatorsInPayload**: bool: The value indicating whether to replace separators in payload.
* **segmentTerminator**: int: The segment terminator.
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified': The segment terminator suffix.

## X12MessageFilter
### Properties
* **messageFilterType**: 'Exclude' | 'Include' | 'NotSpecified': The message filter type.

## X12MessageIdentifier
### Properties
* **messageId**: string: The message id.

## X12OneWayAgreement
### Properties
* **protocolSettings**: [X12ProtocolSettings](#x12protocolsettings): The X12 protocol settings.
* **receiverBusinessIdentity**: [BusinessIdentity](#businessidentity): The receiver business identity
* **senderBusinessIdentity**: [BusinessIdentity](#businessidentity): The sender business identity

## X12ProcessingSettings
### Properties
* **convertImpliedDecimal**: bool: The value indicating whether to convert numerical type to implied decimal.
* **createEmptyXmlTagsForTrailingSeparators**: bool: The value indicating whether to create empty xml tags for trailing separators.
* **maskSecurityInfo**: bool: The value indicating whether to mask security information.
* **preserveInterchange**: bool: The value indicating whether to preserve interchange.
* **suspendInterchangeOnError**: bool: The value indicating whether to suspend interchange on error.
* **useDotAsDecimalSeparator**: bool: The value indicating whether to use dot as decimal separator.

## X12ProtocolSettings
### Properties
* **acknowledgementSettings**: [X12AcknowledgementSettings](#x12acknowledgementsettings): The X12 acknowledgment settings.
* **envelopeOverrides**: [X12EnvelopeOverride](#x12envelopeoverride)[]: The X12 envelope override settings.
* **envelopeSettings**: [X12EnvelopeSettings](#x12envelopesettings): The X12 envelope settings.
* **framingSettings**: [X12FramingSettings](#x12framingsettings): The X12 framing settings.
* **messageFilter**: [X12MessageFilter](#x12messagefilter): The X12 message filter.
* **messageFilterList**: [X12MessageIdentifier](#x12messageidentifier)[]: The X12 message filter list.
* **processingSettings**: [X12ProcessingSettings](#x12processingsettings): The X12 processing settings.
* **schemaReferences**: [X12SchemaReference](#x12schemareference)[]: The X12 schema references.
* **securitySettings**: [X12SecuritySettings](#x12securitysettings): The X12 security settings.
* **validationOverrides**: [X12ValidationOverride](#x12validationoverride)[]: The X12 validation override settings.
* **validationSettings**: [X12ValidationSettings](#x12validationsettings): The X12 validation settings.
* **x12DelimiterOverrides**: [X12DelimiterOverrides](#x12delimiteroverrides)[]: The X12 delimiter override settings.

## X12SchemaReference
### Properties
* **messageId**: string: The message id.
* **schemaName**: string: The schema name.
* **schemaVersion**: string: The schema version.
* **senderApplicationId**: string: The sender application id.

## X12SecuritySettings
### Properties
* **authorizationQualifier**: string: The authorization qualifier.
* **authorizationValue**: string: The authorization value.
* **passwordValue**: string: The password value.
* **securityQualifier**: string: The security qualifier.

## X12ValidationOverride
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool: The value indicating whether to allow leading and trailing spaces and zeroes.
* **messageId**: string: The message id on which the validation settings has to be applied.
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional': The trailing separator policy.
* **trimLeadingAndTrailingSpacesAndZeroes**: bool: The value indicating whether to trim leading and trailing spaces and zeroes.
* **validateCharacterSet**: bool: The value indicating whether to validate character Set.
* **validateEDITypes**: bool: The value indicating whether to validate EDI types.
* **validateXSDTypes**: bool: The value indicating whether to validate XSD types.

## X12ValidationSettings
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool: The value indicating whether to allow leading and trailing spaces and zeroes.
* **checkDuplicateGroupControlNumber**: bool: The value indicating whether to check for duplicate group control number.
* **checkDuplicateInterchangeControlNumber**: bool: The value indicating whether to check for duplicate interchange control number.
* **checkDuplicateTransactionSetControlNumber**: bool: The value indicating whether to check for duplicate transaction set control number.
* **interchangeControlNumberValidityDays**: int: The validity period of interchange control number.
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional': The trailing separator policy.
* **trimLeadingAndTrailingSpacesAndZeroes**: bool: The value indicating whether to trim leading and trailing spaces and zeroes.
* **validateCharacterSet**: bool: The value indicating whether to validate character set in the message.
* **validateEDITypes**: bool: The value indicating whether to Whether to validate EDI types.
* **validateXSDTypes**: bool: The value indicating whether to Whether to validate XSD types.

