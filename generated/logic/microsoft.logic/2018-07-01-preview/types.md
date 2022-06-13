# Microsoft.Logic @ 2018-07-01-preview

## Resource Microsoft.Logic/integrationAccounts@2018-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any: The integration account properties.
* **sku**: [IntegrationAccountSku](#integrationaccountsku): The sku.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.Logic/integrationAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/integrationAccounts/agreements@2018-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IntegrationAccountAgreementProperties](#integrationaccountagreementproperties) (Required): The integration account agreement properties.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.Logic/integrationAccounts/agreements' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/integrationAccounts/assemblies@2018-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssemblyProperties](#assemblyproperties) (Required): The assembly properties.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.Logic/integrationAccounts/assemblies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/integrationAccounts/batchConfigurations@2018-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BatchConfigurationProperties](#batchconfigurationproperties) (Required): The batch configuration properties.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.Logic/integrationAccounts/batchConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/integrationAccounts/certificates@2018-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IntegrationAccountCertificateProperties](#integrationaccountcertificateproperties) (Required): The integration account certificate properties.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.Logic/integrationAccounts/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/integrationAccounts/maps@2018-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IntegrationAccountMapProperties](#integrationaccountmapproperties) (Required): The integration account map properties.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.Logic/integrationAccounts/maps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/integrationAccounts/partners@2018-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IntegrationAccountPartnerProperties](#integrationaccountpartnerproperties) (Required): The integration account partner properties.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.Logic/integrationAccounts/partners' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/integrationAccounts/schemas@2018-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IntegrationAccountSchemaProperties](#integrationaccountschemaproperties) (Required): The integration account schema properties.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.Logic/integrationAccounts/schemas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/integrationAccounts/sessions@2018-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IntegrationAccountSessionProperties](#integrationaccountsessionproperties) (Required): The integration account session properties.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.Logic/integrationAccounts/sessions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Logic/workflows@2018-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkflowProperties](#workflowproperties): The workflow properties.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.Logic/workflows' (ReadOnly, DeployTimeConstant): The resource type

## Function listCallbackUrl (Microsoft.Logic/workflows@2018-07-01-preview)
* **Resource**: Microsoft.Logic/workflows
* **ApiVersion**: 2018-07-01-preview
* **Input**: [GetCallbackUrlParameters](#getcallbackurlparameters)
* **Output**: [WorkflowTriggerCallbackUrl](#workflowtriggercallbackurl)

## Function listCallbackUrl (Microsoft.Logic/workflows/triggers@2018-07-01-preview)
* **Resource**: Microsoft.Logic/workflows/triggers
* **ApiVersion**: 2018-07-01-preview
* **Output**: [WorkflowTriggerCallbackUrl](#workflowtriggercallbackurl)

## Function listCallbackUrl (Microsoft.Logic/workflows/versions/triggers@2018-07-01-preview)
* **Resource**: Microsoft.Logic/workflows/versions/triggers
* **ApiVersion**: 2018-07-01-preview
* **Input**: [GetCallbackUrlParameters](#getcallbackurlparameters)
* **Output**: [WorkflowTriggerCallbackUrl](#workflowtriggercallbackurl)

## Function listCallbackUrl (Microsoft.Logic/integrationAccounts@2018-07-01-preview)
* **Resource**: Microsoft.Logic/integrationAccounts
* **ApiVersion**: 2018-07-01-preview
* **Input**: [GetCallbackUrlParameters](#getcallbackurlparameters)
* **Output**: [CallbackUrl](#callbackurl)

## Function listContentCallbackUrl (Microsoft.Logic/integrationAccounts/assemblies@2018-07-01-preview)
* **Resource**: Microsoft.Logic/integrationAccounts/assemblies
* **ApiVersion**: 2018-07-01-preview
* **Output**: [WorkflowTriggerCallbackUrl](#workflowtriggercallbackurl)

## Function listContentCallbackUrl (Microsoft.Logic/integrationAccounts/schemas@2018-07-01-preview)
* **Resource**: Microsoft.Logic/integrationAccounts/schemas
* **ApiVersion**: 2018-07-01-preview
* **Input**: [GetCallbackUrlParameters](#getcallbackurlparameters)
* **Output**: [WorkflowTriggerCallbackUrl](#workflowtriggercallbackurl)

## Function listContentCallbackUrl (Microsoft.Logic/integrationAccounts/maps@2018-07-01-preview)
* **Resource**: Microsoft.Logic/integrationAccounts/maps
* **ApiVersion**: 2018-07-01-preview
* **Input**: [GetCallbackUrlParameters](#getcallbackurlparameters)
* **Output**: [WorkflowTriggerCallbackUrl](#workflowtriggercallbackurl)

## Function listContentCallbackUrl (Microsoft.Logic/integrationAccounts/partners@2018-07-01-preview)
* **Resource**: Microsoft.Logic/integrationAccounts/partners
* **ApiVersion**: 2018-07-01-preview
* **Input**: [GetCallbackUrlParameters](#getcallbackurlparameters)
* **Output**: [WorkflowTriggerCallbackUrl](#workflowtriggercallbackurl)

## Function listContentCallbackUrl (Microsoft.Logic/integrationAccounts/agreements@2018-07-01-preview)
* **Resource**: Microsoft.Logic/integrationAccounts/agreements
* **ApiVersion**: 2018-07-01-preview
* **Input**: [GetCallbackUrlParameters](#getcallbackurlparameters)
* **Output**: [WorkflowTriggerCallbackUrl](#workflowtriggercallbackurl)

## Function listExpressionTraces (Microsoft.Logic/workflows/runs/actions@2018-07-01-preview)
* **Resource**: Microsoft.Logic/workflows/runs/actions
* **ApiVersion**: 2018-07-01-preview
* **Output**: [ExpressionTraces](#expressiontraces)

## Function listExpressionTraces (Microsoft.Logic/workflows/runs/actions/repetitions@2018-07-01-preview)
* **Resource**: Microsoft.Logic/workflows/runs/actions/repetitions
* **ApiVersion**: 2018-07-01-preview
* **Output**: [ExpressionTraces](#expressiontraces)

## Function listKeyVaultKeys (Microsoft.Logic/integrationAccounts@2018-07-01-preview)
* **Resource**: Microsoft.Logic/integrationAccounts
* **ApiVersion**: 2018-07-01-preview
* **Input**: [ListKeyVaultKeysDefinition](#listkeyvaultkeysdefinition)
* **Output**: [KeyVaultKeyCollection](#keyvaultkeycollection)

## Function listSwagger (Microsoft.Logic/workflows@2018-07-01-preview)
* **Resource**: Microsoft.Logic/workflows
* **ApiVersion**: 2018-07-01-preview
* **Output**: any

## AgreementContent
### Properties
* **aS2**: [AS2AgreementContent](#as2agreementcontent): The AS2 agreement content.
* **edifact**: [EdifactAgreementContent](#edifactagreementcontent): The EDIFACT agreement content.
* **x12**: [X12AgreementContent](#x12agreementcontent): The X12 agreement content.

## AS2AcknowledgementConnectionSettings
### Properties
* **ignoreCertificateNameMismatch**: bool (Required): The value indicating whether to ignore mismatch in certificate name.
* **keepHttpConnectionAlive**: bool (Required): The value indicating whether to keep the connection alive.
* **supportHttpStatusCodeContinue**: bool (Required): The value indicating whether to support HTTP status code 'CONTINUE'.
* **unfoldHttpHeaders**: bool (Required): The value indicating whether to unfold the HTTP headers.

## AS2AgreementContent
### Properties
* **receiveAgreement**: [AS2OneWayAgreement](#as2onewayagreement) (Required): The AS2 one-way receive agreement.
* **sendAgreement**: [AS2OneWayAgreement](#as2onewayagreement) (Required): The AS2 one-way send agreement.

## AS2EnvelopeSettings
### Properties
* **autogenerateFileName**: bool (Required): The value indicating whether to auto generate file name.
* **fileNameTemplate**: string (Required): The template for file name.
* **messageContentType**: string (Required): The message content type.
* **suspendMessageOnFileNameGenerationError**: bool (Required): The value indicating whether to suspend message on file name generation error.
* **transmitFileNameInMimeHeader**: bool (Required): The value indicating whether to transmit file name in mime header.

## AS2ErrorSettings
### Properties
* **resendIfMDNNotReceived**: bool (Required): The value indicating whether to resend message If MDN is not received.
* **suspendDuplicateMessage**: bool (Required): The value indicating whether to suspend duplicate message.

## AS2MdnSettings
### Properties
* **dispositionNotificationTo**: string: The disposition notification to header value.
* **mdnText**: string: The MDN text.
* **micHashingAlgorithm**: 'MD5' | 'None' | 'NotSpecified' | 'SHA1' | 'SHA2256' | 'SHA2384' | 'SHA2512' | string (Required): The signing or hashing algorithm.
* **needMDN**: bool (Required): The value indicating whether to send or request a MDN.
* **receiptDeliveryUrl**: string: The receipt delivery URL.
* **sendInboundMDNToMessageBox**: bool (Required): The value indicating whether to send inbound MDN to message box.
* **sendMDNAsynchronously**: bool (Required): The value indicating whether to send the asynchronous MDN.
* **signMDN**: bool (Required): The value indicating whether the MDN needs to be signed or not.
* **signOutboundMDNIfOptional**: bool (Required): The value indicating whether to sign the outbound MDN if optional.

## AS2MessageConnectionSettings
### Properties
* **ignoreCertificateNameMismatch**: bool (Required): The value indicating whether to ignore mismatch in certificate name.
* **keepHttpConnectionAlive**: bool (Required): The value indicating whether to keep the connection alive.
* **supportHttpStatusCodeContinue**: bool (Required): The value indicating whether to support HTTP status code 'CONTINUE'.
* **unfoldHttpHeaders**: bool (Required): The value indicating whether to unfold the HTTP headers.

## AS2OneWayAgreement
### Properties
* **protocolSettings**: [AS2ProtocolSettings](#as2protocolsettings) (Required): The AS2 protocol settings.
* **receiverBusinessIdentity**: [BusinessIdentity](#businessidentity) (Required): The receiver business identity
* **senderBusinessIdentity**: [BusinessIdentity](#businessidentity) (Required): The sender business identity

## AS2ProtocolSettings
### Properties
* **acknowledgementConnectionSettings**: [AS2AcknowledgementConnectionSettings](#as2acknowledgementconnectionsettings) (Required): The acknowledgement connection settings.
* **envelopeSettings**: [AS2EnvelopeSettings](#as2envelopesettings) (Required): The envelope settings.
* **errorSettings**: [AS2ErrorSettings](#as2errorsettings) (Required): The error settings.
* **mdnSettings**: [AS2MdnSettings](#as2mdnsettings) (Required): The MDN settings.
* **messageConnectionSettings**: [AS2MessageConnectionSettings](#as2messageconnectionsettings) (Required): The message connection settings.
* **securitySettings**: [AS2SecuritySettings](#as2securitysettings) (Required): The security settings.
* **validationSettings**: [AS2ValidationSettings](#as2validationsettings) (Required): The validation settings.

## AS2SecuritySettings
### Properties
* **enableNRRForInboundDecodedMessages**: bool (Required): The value indicating whether to enable NRR for inbound decoded messages.
* **enableNRRForInboundEncodedMessages**: bool (Required): The value indicating whether to enable NRR for inbound encoded messages.
* **enableNRRForInboundMDN**: bool (Required): The value indicating whether to enable NRR for inbound MDN.
* **enableNRRForOutboundDecodedMessages**: bool (Required): The value indicating whether to enable NRR for outbound decoded messages.
* **enableNRRForOutboundEncodedMessages**: bool (Required): The value indicating whether to enable NRR for outbound encoded messages.
* **enableNRRForOutboundMDN**: bool (Required): The value indicating whether to enable NRR for outbound MDN.
* **encryptionCertificateName**: string: The name of the encryption certificate.
* **overrideGroupSigningCertificate**: bool (Required): The value indicating whether to send or request a MDN.
* **sha2AlgorithmFormat**: string: The Sha2 algorithm format. Valid values are Sha2, ShaHashSize, ShaHyphenHashSize, Sha2UnderscoreHashSize.
* **signingCertificateName**: string: The name of the signing certificate.

## AS2ValidationSettings
### Properties
* **checkCertificateRevocationListOnReceive**: bool (Required): The value indicating whether to check for certificate revocation list on receive.
* **checkCertificateRevocationListOnSend**: bool (Required): The value indicating whether to check for certificate revocation list on send.
* **checkDuplicateMessage**: bool (Required): The value indicating whether to check for duplicate message.
* **compressMessage**: bool (Required): The value indicating whether the message has to be compressed.
* **encryptionAlgorithm**: 'AES128' | 'AES192' | 'AES256' | 'DES3' | 'None' | 'NotSpecified' | 'RC2' | string (Required): The encryption algorithm.
* **encryptMessage**: bool (Required): The value indicating whether the message has to be encrypted.
* **interchangeDuplicatesValidityDays**: int (Required): The number of days to look back for duplicate interchange.
* **overrideMessageProperties**: bool (Required): The value indicating whether to override incoming message properties with those in agreement.
* **signingAlgorithm**: 'Default' | 'NotSpecified' | 'SHA1' | 'SHA2256' | 'SHA2384' | 'SHA2512' | string: The signing algorithm.
* **signMessage**: bool (Required): The value indicating whether the message has to be signed.

## AssemblyProperties
### Properties
* **assemblyCulture**: string: The assembly culture.
* **assemblyName**: string (Required): The assembly name.
* **assemblyPublicKeyToken**: string: The assembly public key token.
* **assemblyVersion**: string: The assembly version.
* **changedTime**: string: The artifact changed time.
* **content**: any: Anything
* **contentLink**: [ContentLink](#contentlink): The content link.
* **contentType**: string: The content type.
* **createdTime**: string: The artifact creation time.
* **metadata**: any: Anything

## AzureResourceErrorInfo
### Properties
* **code**: string (ReadOnly): The error code.
* **details**: [AzureResourceErrorInfo](#azureresourceerrorinfo)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.

## B2BPartnerContent
### Properties
* **businessIdentities**: [BusinessIdentity](#businessidentity)[]: The list of partner business identities.

## BatchConfigurationProperties
### Properties
* **batchGroupName**: string (Required): The name of the batch group.
* **changedTime**: string: The artifact changed time.
* **createdTime**: string: The artifact creation time.
* **metadata**: any: Anything
* **releaseCriteria**: [BatchReleaseCriteria](#batchreleasecriteria) (Required): The batch release criteria.

## BatchReleaseCriteria
### Properties
* **batchSize**: int: The batch size in bytes.
* **messageCount**: int: The message count.
* **recurrence**: [WorkflowTriggerRecurrence](#workflowtriggerrecurrence): The recurrence.

## BusinessIdentity
### Properties
* **qualifier**: string (Required): The business identity qualifier e.g. as2identity, ZZ, ZZZ, 31, 32
* **value**: string (Required): The user defined business identity value.

## CallbackUrl
### Properties
* **value**: string (ReadOnly): The URL value.

## ContentHash
### Properties
* **algorithm**: string: The algorithm of the content hash.
* **value**: string: The value of the content hash.

## ContentLink
### Properties
* **contentHash**: [ContentHash](#contenthash): The content hash.
* **contentSize**: int: The content size.
* **contentVersion**: string: The content version.
* **metadata**: any: The metadata.
* **uri**: string: The content link URI.

## EdifactAcknowledgementSettings
### Properties
* **acknowledgementControlNumberLowerBound**: int (Required): The acknowledgement control number lower bound.
* **acknowledgementControlNumberPrefix**: string: The acknowledgement control number prefix.
* **acknowledgementControlNumberSuffix**: string: The acknowledgement control number suffix.
* **acknowledgementControlNumberUpperBound**: int (Required): The acknowledgement control number upper bound.
* **batchFunctionalAcknowledgements**: bool (Required): The value indicating whether to batch functional acknowledgements.
* **batchTechnicalAcknowledgements**: bool (Required): The value indicating whether to batch the technical acknowledgements.
* **needFunctionalAcknowledgement**: bool (Required): The value indicating whether functional acknowledgement is needed.
* **needLoopForValidMessages**: bool (Required): The value indicating whether a loop is needed for valid messages.
* **needTechnicalAcknowledgement**: bool (Required): The value indicating whether technical acknowledgement is needed.
* **rolloverAcknowledgementControlNumber**: bool (Required): The value indicating whether to rollover acknowledgement control number.
* **sendSynchronousAcknowledgement**: bool (Required): The value indicating whether to send synchronous acknowledgement.

## EdifactAgreementContent
### Properties
* **receiveAgreement**: [EdifactOneWayAgreement](#edifactonewayagreement) (Required): The EDIFACT one-way receive agreement.
* **sendAgreement**: [EdifactOneWayAgreement](#edifactonewayagreement) (Required): The EDIFACT one-way send agreement.

## EdifactDelimiterOverride
### Properties
* **componentSeparator**: int (Required): The component separator.
* **dataElementSeparator**: int (Required): The data element separator.
* **decimalPointIndicator**: 'Comma' | 'Decimal' | 'NotSpecified' (Required): The decimal point indicator.
* **messageAssociationAssignedCode**: string: The message association assigned code.
* **messageId**: string: The message id.
* **messageRelease**: string: The message release.
* **messageVersion**: string: The message version.
* **releaseIndicator**: int (Required): The release indicator.
* **repetitionSeparator**: int (Required): The repetition separator.
* **segmentTerminator**: int (Required): The segment terminator.
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified' (Required): The segment terminator suffix.
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
* **applyDelimiterStringAdvice**: bool (Required): The value indicating whether to apply delimiter string advice.
* **communicationAgreementId**: string: The communication agreement id.
* **createGroupingSegments**: bool (Required): The value indicating whether to create grouping segments.
* **enableDefaultGroupHeaders**: bool (Required): The value indicating whether to enable default group headers.
* **functionalGroupId**: string: The functional group id.
* **groupApplicationPassword**: string: The group application password.
* **groupApplicationReceiverId**: string: The group application receiver id.
* **groupApplicationReceiverQualifier**: string: The group application receiver qualifier.
* **groupApplicationSenderId**: string: The group application sender id.
* **groupApplicationSenderQualifier**: string: The group application sender qualifier.
* **groupAssociationAssignedCode**: string: The group association assigned code.
* **groupControllingAgencyCode**: string: The group controlling agency code.
* **groupControlNumberLowerBound**: int (Required): The group control number lower bound.
* **groupControlNumberPrefix**: string: The group control number prefix.
* **groupControlNumberSuffix**: string: The group control number suffix.
* **groupControlNumberUpperBound**: int (Required): The group control number upper bound.
* **groupMessageRelease**: string: The group message release.
* **groupMessageVersion**: string: The group message version.
* **interchangeControlNumberLowerBound**: int (Required): The interchange control number lower bound.
* **interchangeControlNumberPrefix**: string: The interchange control number prefix.
* **interchangeControlNumberSuffix**: string: The interchange control number suffix.
* **interchangeControlNumberUpperBound**: int (Required): The interchange control number upper bound.
* **isTestInterchange**: bool (Required): The value indicating whether the message is a test interchange.
* **overwriteExistingTransactionSetControlNumber**: bool (Required): The value indicating whether to overwrite existing transaction set control number.
* **processingPriorityCode**: string: The processing priority code.
* **receiverInternalIdentification**: string: The receiver internal identification.
* **receiverInternalSubIdentification**: string: The receiver internal sub identification.
* **receiverReverseRoutingAddress**: string: The receiver reverse routing address.
* **recipientReferencePasswordQualifier**: string: The recipient reference password qualifier.
* **recipientReferencePasswordValue**: string: The recipient reference password value.
* **rolloverGroupControlNumber**: bool (Required): The value indicating whether to rollover group control number.
* **rolloverInterchangeControlNumber**: bool (Required): The value indicating whether to rollover interchange control number.
* **rolloverTransactionSetControlNumber**: bool (Required): The value indicating whether to rollover transaction set control number.
* **senderInternalIdentification**: string: The sender internal identification.
* **senderInternalSubIdentification**: string: The sender internal sub identification.
* **senderReverseRoutingAddress**: string: The sender reverse routing address.
* **transactionSetControlNumberLowerBound**: int (Required): The transaction set control number lower bound.
* **transactionSetControlNumberPrefix**: string: The transaction set control number prefix.
* **transactionSetControlNumberSuffix**: string: The transaction set control number suffix.
* **transactionSetControlNumberUpperBound**: int (Required): The transaction set control number upper bound.

## EdifactFramingSettings
### Properties
* **characterEncoding**: string: The character encoding.
* **characterSet**: 'KECA' | 'NotSpecified' | 'UNOA' | 'UNOB' | 'UNOC' | 'UNOD' | 'UNOE' | 'UNOF' | 'UNOG' | 'UNOH' | 'UNOI' | 'UNOJ' | 'UNOK' | 'UNOX' | 'UNOY' | string (Required): The EDIFACT frame setting characterSet.
* **componentSeparator**: int (Required): The component separator.
* **dataElementSeparator**: int (Required): The data element separator.
* **decimalPointIndicator**: 'Comma' | 'Decimal' | 'NotSpecified' (Required): The EDIFACT frame setting decimal indicator.
* **protocolVersion**: int (Required): The protocol version.
* **releaseIndicator**: int (Required): The release indicator.
* **repetitionSeparator**: int (Required): The repetition separator.
* **segmentTerminator**: int (Required): The segment terminator.
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified' (Required): The EDIFACT frame setting segment terminator suffix.
* **serviceCodeListDirectoryVersion**: string: The service code list directory version.

## EdifactMessageFilter
### Properties
* **messageFilterType**: 'Exclude' | 'Include' | 'NotSpecified' | string (Required): The message filter type.

## EdifactMessageIdentifier
### Properties
* **messageId**: string (Required): The message id on which this envelope settings has to be applied.

## EdifactOneWayAgreement
### Properties
* **protocolSettings**: [EdifactProtocolSettings](#edifactprotocolsettings) (Required): The EDIFACT protocol settings.
* **receiverBusinessIdentity**: [BusinessIdentity](#businessidentity) (Required): The receiver business identity
* **senderBusinessIdentity**: [BusinessIdentity](#businessidentity) (Required): The sender business identity

## EdifactProcessingSettings
### Properties
* **createEmptyXmlTagsForTrailingSeparators**: bool (Required): The value indicating whether to create empty xml tags for trailing separators.
* **maskSecurityInfo**: bool (Required): The value indicating whether to mask security information.
* **preserveInterchange**: bool (Required): The value indicating whether to preserve interchange.
* **suspendInterchangeOnError**: bool (Required): The value indicating whether to suspend interchange on error.
* **useDotAsDecimalSeparator**: bool (Required): The value indicating whether to use dot as decimal separator.

## EdifactProtocolSettings
### Properties
* **acknowledgementSettings**: [EdifactAcknowledgementSettings](#edifactacknowledgementsettings) (Required): The EDIFACT acknowledgement settings.
* **edifactDelimiterOverrides**: [EdifactDelimiterOverride](#edifactdelimiteroverride)[]: The EDIFACT delimiter override settings.
* **envelopeOverrides**: [EdifactEnvelopeOverride](#edifactenvelopeoverride)[]: The EDIFACT envelope override settings.
* **envelopeSettings**: [EdifactEnvelopeSettings](#edifactenvelopesettings) (Required): The EDIFACT envelope settings.
* **framingSettings**: [EdifactFramingSettings](#edifactframingsettings) (Required): The EDIFACT framing settings.
* **messageFilter**: [EdifactMessageFilter](#edifactmessagefilter) (Required): The EDIFACT message filter.
* **messageFilterList**: [EdifactMessageIdentifier](#edifactmessageidentifier)[]: The EDIFACT message filter list.
* **processingSettings**: [EdifactProcessingSettings](#edifactprocessingsettings) (Required): The EDIFACT processing Settings.
* **schemaReferences**: [EdifactSchemaReference](#edifactschemareference)[] (Required): The EDIFACT schema references.
* **validationOverrides**: [EdifactValidationOverride](#edifactvalidationoverride)[]: The EDIFACT validation override settings.
* **validationSettings**: [EdifactValidationSettings](#edifactvalidationsettings) (Required): The EDIFACT validation settings.

## EdifactSchemaReference
### Properties
* **associationAssignedCode**: string: The association assigned code.
* **messageId**: string (Required): The message id.
* **messageRelease**: string (Required): The message release version.
* **messageVersion**: string (Required): The message version.
* **schemaName**: string (Required): The schema name.
* **senderApplicationId**: string: The sender application id.
* **senderApplicationQualifier**: string: The sender application qualifier.

## EdifactValidationOverride
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool (Required): The value indicating whether to allow leading and trailing spaces and zeroes.
* **enforceCharacterSet**: bool (Required): The value indicating whether to validate character Set.
* **messageId**: string (Required): The message id on which the validation settings has to be applied.
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional' | string (Required): The trailing separator policy.
* **trimLeadingAndTrailingSpacesAndZeroes**: bool (Required): The value indicating whether to trim leading and trailing spaces and zeroes.
* **validateEDITypes**: bool (Required): The value indicating whether to validate EDI types.
* **validateXSDTypes**: bool (Required): The value indicating whether to validate XSD types.

## EdifactValidationSettings
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool (Required): The value indicating whether to allow leading and trailing spaces and zeroes.
* **checkDuplicateGroupControlNumber**: bool (Required): The value indicating whether to check for duplicate group control number.
* **checkDuplicateInterchangeControlNumber**: bool (Required): The value indicating whether to check for duplicate interchange control number.
* **checkDuplicateTransactionSetControlNumber**: bool (Required): The value indicating whether to check for duplicate transaction set control number.
* **interchangeControlNumberValidityDays**: int (Required): The validity period of interchange control number.
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional' | string (Required): The trailing separator policy.
* **trimLeadingAndTrailingSpacesAndZeroes**: bool (Required): The value indicating whether to trim leading and trailing spaces and zeroes.
* **validateCharacterSet**: bool (Required): The value indicating whether to validate character set in the message.
* **validateEDITypes**: bool (Required): The value indicating whether to Whether to validate EDI types.
* **validateXSDTypes**: bool (Required): The value indicating whether to Whether to validate XSD types.

## Expression
### Properties
* **error**: [AzureResourceErrorInfo](#azureresourceerrorinfo) (ReadOnly): The azure resource error info.
* **subexpressions**: [Expression](#expression)[] (ReadOnly)
* **text**: string (ReadOnly)
* **value**: any (ReadOnly): Anything

## ExpressionRoot
### Properties
* **error**: [AzureResourceErrorInfo](#azureresourceerrorinfo) (ReadOnly): The azure resource error info.
* **path**: string (ReadOnly): The path.
* **subexpressions**: [Expression](#expression)[] (ReadOnly)
* **text**: string (ReadOnly)
* **value**: any (ReadOnly): Anything

## ExpressionTraces
### Properties
* **inputs**: [ExpressionRoot](#expressionroot)[] (ReadOnly)

## ExpressionTraces
### Properties
* **inputs**: [ExpressionRoot](#expressionroot)[] (ReadOnly)

## GetCallbackUrlParameters
### Properties
* **keyType**: 'NotSpecified' | 'Primary' | 'Secondary' | string (WriteOnly): The key type.
* **notAfter**: string (WriteOnly): The expiry time.

## GetCallbackUrlParameters
### Properties
* **keyType**: 'NotSpecified' | 'Primary' | 'Secondary' | string (WriteOnly): The key type.
* **notAfter**: string (WriteOnly): The expiry time.

## GetCallbackUrlParameters
### Properties
* **keyType**: 'NotSpecified' | 'Primary' | 'Secondary' | string (WriteOnly): The key type.
* **notAfter**: string (WriteOnly): The expiry time.

## GetCallbackUrlParameters
### Properties
* **keyType**: 'NotSpecified' | 'Primary' | 'Secondary' | string (WriteOnly): The key type.
* **notAfter**: string (WriteOnly): The expiry time.

## GetCallbackUrlParameters
### Properties
* **keyType**: 'NotSpecified' | 'Primary' | 'Secondary' | string (WriteOnly): The key type.
* **notAfter**: string (WriteOnly): The expiry time.

## GetCallbackUrlParameters
### Properties
* **keyType**: 'NotSpecified' | 'Primary' | 'Secondary' | string (WriteOnly): The key type.
* **notAfter**: string (WriteOnly): The expiry time.

## GetCallbackUrlParameters
### Properties
* **keyType**: 'NotSpecified' | 'Primary' | 'Secondary' | string (WriteOnly): The key type.
* **notAfter**: string (WriteOnly): The expiry time.

## IntegrationAccountAgreementProperties
### Properties
* **agreementType**: 'AS2' | 'Edifact' | 'NotSpecified' | 'X12' (Required): The agreement type.
* **changedTime**: string (ReadOnly): The changed time.
* **content**: [AgreementContent](#agreementcontent) (Required): The agreement content.
* **createdTime**: string (ReadOnly): The created time.
* **guestIdentity**: [BusinessIdentity](#businessidentity) (Required): The business identity of the guest partner.
* **guestPartner**: string (Required): The integration account partner that is set as guest partner for this agreement.
* **hostIdentity**: [BusinessIdentity](#businessidentity) (Required): The business identity of the host partner.
* **hostPartner**: string (Required): The integration account partner that is set as host partner for this agreement.
* **metadata**: any: The metadata.

## IntegrationAccountCertificateProperties
### Properties
* **changedTime**: string (ReadOnly): The changed time.
* **createdTime**: string (ReadOnly): The created time.
* **key**: [KeyVaultKeyReference](#keyvaultkeyreference): The key details in the key vault.
* **metadata**: any: The metadata.
* **publicCertificate**: string: The public certificate.

## IntegrationAccountMapProperties
### Properties
* **changedTime**: string (ReadOnly): The changed time.
* **content**: string: The content.
* **contentLink**: [ContentLink](#contentlink) (ReadOnly): The content link.
* **contentType**: string: The content type.
* **createdTime**: string (ReadOnly): The created time.
* **mapType**: 'Liquid' | 'NotSpecified' | 'Xslt' | 'Xslt20' | 'Xslt30' | string (Required): The map type.
* **metadata**: any: The metadata.
* **parametersSchema**: [IntegrationAccountMapPropertiesParametersSchema](#integrationaccountmappropertiesparametersschema): The parameters schema of integration account map.

## IntegrationAccountMapPropertiesParametersSchema
### Properties
* **ref**: string: The reference name.

## IntegrationAccountPartnerProperties
### Properties
* **changedTime**: string (ReadOnly): The changed time.
* **content**: [PartnerContent](#partnercontent) (Required): The partner content.
* **createdTime**: string (ReadOnly): The created time.
* **metadata**: any: The metadata.
* **partnerType**: 'B2B' | 'NotSpecified' | string (Required): The partner type.

## IntegrationAccountSchemaProperties
### Properties
* **changedTime**: string (ReadOnly): The changed time.
* **content**: string: The content.
* **contentLink**: [ContentLink](#contentlink) (ReadOnly): The content link.
* **contentType**: string: The content type.
* **createdTime**: string (ReadOnly): The created time.
* **documentName**: string: The document name.
* **fileName**: string: The file name.
* **metadata**: any: The metadata.
* **schemaType**: 'NotSpecified' | 'Xml' | string (Required): The schema type.
* **targetNamespace**: string: The target namespace of the schema.

## IntegrationAccountSessionProperties
### Properties
* **changedTime**: string (ReadOnly): The changed time.
* **content**: any: The session content.
* **createdTime**: string (ReadOnly): The created time.

## IntegrationAccountSku
### Properties
* **name**: 'Basic' | 'Free' | 'NotSpecified' | 'Standard' | string (Required): The sku name.

## KeyVaultKey
### Properties
* **attributes**: [KeyVaultKeyAttributes](#keyvaultkeyattributes) (ReadOnly): The key attributes.
* **kid**: string (ReadOnly): The key id.

## KeyVaultKeyAttributes
### Properties
* **created**: int (ReadOnly): When the key was created.
* **enabled**: bool (ReadOnly): Whether the key is enabled or not.
* **updated**: int (ReadOnly): When the key was updated.

## KeyVaultKeyCollection
### Properties
* **skipToken**: string (ReadOnly): The skip token.
* **value**: [KeyVaultKey](#keyvaultkey)[] (ReadOnly): The key vault keys.

## KeyVaultKeyReference
### Properties
* **keyName**: string (Required): The private key name in key vault.
* **keyVault**: [KeyVaultKeyReferenceKeyVault](#keyvaultkeyreferencekeyvault) (Required): The key vault reference.
* **keyVersion**: string: The private key version in key vault.

## KeyVaultKeyReferenceKeyVault
### Properties
* **id**: string: The resource id.
* **name**: string (ReadOnly): The resource name.
* **type**: string (ReadOnly): The resource type.

## KeyVaultReference
### Properties
* **id**: string (WriteOnly): The resource id.
* **name**: string (ReadOnly, WriteOnly): Gets the resource name.
* **type**: string (ReadOnly, WriteOnly): Gets the resource type.

## ListKeyVaultKeysDefinition
### Properties
* **keyVault**: [KeyVaultReference](#keyvaultreference) (Required, WriteOnly): The key vault reference.
* **skipToken**: string (WriteOnly): The skip token.

## PartnerContent
### Properties
* **b2b**: [B2BPartnerContent](#b2bpartnercontent): The B2B partner content.

## RecurrenceSchedule
### Properties
* **hours**: int[]: The hours.
* **minutes**: int[]: The minutes.
* **monthDays**: int[]: The month days.
* **monthlyOccurrences**: [RecurrenceScheduleOccurrence](#recurrencescheduleoccurrence)[]: The monthly occurrences.
* **weekDays**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: The days of the week.

## RecurrenceScheduleOccurrence
### Properties
* **day**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday': The day of the week.
* **occurrence**: int: The occurrence.

## ResourceReference
### Properties
* **id**: string: The resource id.
* **name**: string (ReadOnly): Gets the resource name.
* **type**: string (ReadOnly): Gets the resource type.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **name**: 'Basic' | 'Free' | 'NotSpecified' | 'Premium' | 'Shared' | 'Standard' | string (Required): The name.
* **plan**: [ResourceReference](#resourcereference): The reference to plan.

## WorkflowParameter
### Properties
* **description**: string: The description.
* **metadata**: any: The metadata.
* **type**: 'Array' | 'Bool' | 'Float' | 'Int' | 'NotSpecified' | 'Object' | 'SecureObject' | 'SecureString' | 'String' | string: The type.
* **value**: any: The value.

## WorkflowProperties
### Properties
* **accessEndpoint**: string (ReadOnly): Gets the access endpoint.
* **changedTime**: string (ReadOnly): Gets the changed time.
* **createdTime**: string (ReadOnly): Gets the created time.
* **definition**: any: The definition. See [Schema reference for Workflow Definition Language in Azure Logic Apps](https://aka.ms/logic-apps-workflow-definition-language).
* **integrationAccount**: [ResourceReference](#resourcereference): The integration account.
* **parameters**: [WorkflowPropertiesParameters](#workflowpropertiesparameters): The parameters.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Completed' | 'Created' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Moving' | 'NotSpecified' | 'Ready' | 'Registered' | 'Registering' | 'Running' | 'Succeeded' | 'Unregistered' | 'Unregistering' | 'Updating' | string (ReadOnly): Gets the provisioning state.
* **sku**: [Sku](#sku): The sku.
* **state**: 'Completed' | 'Deleted' | 'Disabled' | 'Enabled' | 'NotSpecified' | 'Suspended' | string: The state.
* **version**: string (ReadOnly): Gets the version.

## WorkflowPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [WorkflowParameter](#workflowparameter)

## WorkflowTriggerCallbackUrl
### Properties
* **basePath**: string (ReadOnly): Gets the workflow trigger callback URL base path.
* **method**: string (ReadOnly): Gets the workflow trigger callback URL HTTP method.
* **queries**: [WorkflowTriggerListCallbackUrlQueries](#workflowtriggerlistcallbackurlqueries) (ReadOnly): Gets the workflow trigger callback URL query parameters.
* **relativePath**: string (ReadOnly): Gets the workflow trigger callback URL relative path.
* **relativePathParameters**: string[] (ReadOnly): Gets the workflow trigger callback URL relative path parameters.
* **value**: string (ReadOnly): Gets the workflow trigger callback URL.

## WorkflowTriggerCallbackUrl
### Properties
* **basePath**: string (ReadOnly): Gets the workflow trigger callback URL base path.
* **method**: string (ReadOnly): Gets the workflow trigger callback URL HTTP method.
* **queries**: [WorkflowTriggerListCallbackUrlQueries](#workflowtriggerlistcallbackurlqueries) (ReadOnly): Gets the workflow trigger callback URL query parameters.
* **relativePath**: string (ReadOnly): Gets the workflow trigger callback URL relative path.
* **relativePathParameters**: string[] (ReadOnly): Gets the workflow trigger callback URL relative path parameters.
* **value**: string (ReadOnly): Gets the workflow trigger callback URL.

## WorkflowTriggerCallbackUrl
### Properties
* **basePath**: string (ReadOnly): Gets the workflow trigger callback URL base path.
* **method**: string (ReadOnly): Gets the workflow trigger callback URL HTTP method.
* **queries**: [WorkflowTriggerListCallbackUrlQueries](#workflowtriggerlistcallbackurlqueries) (ReadOnly): Gets the workflow trigger callback URL query parameters.
* **relativePath**: string (ReadOnly): Gets the workflow trigger callback URL relative path.
* **relativePathParameters**: string[] (ReadOnly): Gets the workflow trigger callback URL relative path parameters.
* **value**: string (ReadOnly): Gets the workflow trigger callback URL.

## WorkflowTriggerCallbackUrl
### Properties
* **basePath**: string (ReadOnly): Gets the workflow trigger callback URL base path.
* **method**: string (ReadOnly): Gets the workflow trigger callback URL HTTP method.
* **queries**: [WorkflowTriggerListCallbackUrlQueries](#workflowtriggerlistcallbackurlqueries) (ReadOnly): Gets the workflow trigger callback URL query parameters.
* **relativePath**: string (ReadOnly): Gets the workflow trigger callback URL relative path.
* **relativePathParameters**: string[] (ReadOnly): Gets the workflow trigger callback URL relative path parameters.
* **value**: string (ReadOnly): Gets the workflow trigger callback URL.

## WorkflowTriggerCallbackUrl
### Properties
* **basePath**: string (ReadOnly): Gets the workflow trigger callback URL base path.
* **method**: string (ReadOnly): Gets the workflow trigger callback URL HTTP method.
* **queries**: [WorkflowTriggerListCallbackUrlQueries](#workflowtriggerlistcallbackurlqueries) (ReadOnly): Gets the workflow trigger callback URL query parameters.
* **relativePath**: string (ReadOnly): Gets the workflow trigger callback URL relative path.
* **relativePathParameters**: string[] (ReadOnly): Gets the workflow trigger callback URL relative path parameters.
* **value**: string (ReadOnly): Gets the workflow trigger callback URL.

## WorkflowTriggerCallbackUrl
### Properties
* **basePath**: string (ReadOnly): Gets the workflow trigger callback URL base path.
* **method**: string (ReadOnly): Gets the workflow trigger callback URL HTTP method.
* **queries**: [WorkflowTriggerListCallbackUrlQueries](#workflowtriggerlistcallbackurlqueries) (ReadOnly): Gets the workflow trigger callback URL query parameters.
* **relativePath**: string (ReadOnly): Gets the workflow trigger callback URL relative path.
* **relativePathParameters**: string[] (ReadOnly): Gets the workflow trigger callback URL relative path parameters.
* **value**: string (ReadOnly): Gets the workflow trigger callback URL.

## WorkflowTriggerCallbackUrl
### Properties
* **basePath**: string (ReadOnly): Gets the workflow trigger callback URL base path.
* **method**: string (ReadOnly): Gets the workflow trigger callback URL HTTP method.
* **queries**: [WorkflowTriggerListCallbackUrlQueries](#workflowtriggerlistcallbackurlqueries) (ReadOnly): Gets the workflow trigger callback URL query parameters.
* **relativePath**: string (ReadOnly): Gets the workflow trigger callback URL relative path.
* **relativePathParameters**: string[] (ReadOnly): Gets the workflow trigger callback URL relative path parameters.
* **value**: string (ReadOnly): Gets the workflow trigger callback URL.

## WorkflowTriggerCallbackUrl
### Properties
* **basePath**: string (ReadOnly): Gets the workflow trigger callback URL base path.
* **method**: string (ReadOnly): Gets the workflow trigger callback URL HTTP method.
* **queries**: [WorkflowTriggerListCallbackUrlQueries](#workflowtriggerlistcallbackurlqueries) (ReadOnly): Gets the workflow trigger callback URL query parameters.
* **relativePath**: string (ReadOnly): Gets the workflow trigger callback URL relative path.
* **relativePathParameters**: string[] (ReadOnly): Gets the workflow trigger callback URL relative path parameters.
* **value**: string (ReadOnly): Gets the workflow trigger callback URL.

## WorkflowTriggerListCallbackUrlQueries
### Properties
* **api-version**: string (ReadOnly): The api version.
* **se**: string (ReadOnly): The SAS timestamp.
* **sig**: string (ReadOnly): The SAS signature.
* **sp**: string (ReadOnly): The SAS permissions.
* **sv**: string (ReadOnly): The SAS version.

## WorkflowTriggerRecurrence
### Properties
* **endTime**: string: The end time.
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'NotSpecified' | 'Second' | 'Week' | 'Year' | string: The frequency.
* **interval**: int: The interval.
* **schedule**: [RecurrenceSchedule](#recurrenceschedule): The recurrence schedule.
* **startTime**: string: The start time.
* **timeZone**: string: The time zone.

## X12AcknowledgementSettings
### Properties
* **acknowledgementControlNumberLowerBound**: int (Required): The acknowledgement control number lower bound.
* **acknowledgementControlNumberPrefix**: string: The acknowledgement control number prefix.
* **acknowledgementControlNumberSuffix**: string: The acknowledgement control number suffix.
* **acknowledgementControlNumberUpperBound**: int (Required): The acknowledgement control number upper bound.
* **batchFunctionalAcknowledgements**: bool (Required): The value indicating whether to batch functional acknowledgements.
* **batchImplementationAcknowledgements**: bool (Required): The value indicating whether to batch implementation acknowledgements.
* **batchTechnicalAcknowledgements**: bool (Required): The value indicating whether to batch the technical acknowledgements.
* **functionalAcknowledgementVersion**: string: The functional acknowledgement version.
* **implementationAcknowledgementVersion**: string: The implementation acknowledgement version.
* **needFunctionalAcknowledgement**: bool (Required): The value indicating whether functional acknowledgement is needed.
* **needImplementationAcknowledgement**: bool (Required): The value indicating whether implementation acknowledgement is needed.
* **needLoopForValidMessages**: bool (Required): The value indicating whether a loop is needed for valid messages.
* **needTechnicalAcknowledgement**: bool (Required): The value indicating whether technical acknowledgement is needed.
* **rolloverAcknowledgementControlNumber**: bool (Required): The value indicating whether to rollover acknowledgement control number.
* **sendSynchronousAcknowledgement**: bool (Required): The value indicating whether to send synchronous acknowledgement.

## X12AgreementContent
### Properties
* **receiveAgreement**: [X12OneWayAgreement](#x12onewayagreement) (Required): The X12 one-way receive agreement.
* **sendAgreement**: [X12OneWayAgreement](#x12onewayagreement) (Required): The X12 one-way send agreement.

## X12DelimiterOverrides
### Properties
* **componentSeparator**: int (Required): The component separator.
* **dataElementSeparator**: int (Required): The data element separator.
* **messageId**: string: The message id.
* **protocolVersion**: string: The protocol version.
* **replaceCharacter**: int (Required): The replacement character.
* **replaceSeparatorsInPayload**: bool (Required): The value indicating whether to replace separators in payload.
* **segmentTerminator**: int (Required): The segment terminator.
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified' (Required): The segment terminator suffix.
* **targetNamespace**: string: The target namespace on which this delimiter settings has to be applied.

## X12EnvelopeOverride
### Properties
* **dateFormat**: 'CCYYMMDD' | 'NotSpecified' | 'YYMMDD' | string (Required): The date format.
* **functionalIdentifierCode**: string: The functional identifier code.
* **headerVersion**: string (Required): The header version.
* **messageId**: string (Required): The message id on which this envelope settings has to be applied.
* **protocolVersion**: string (Required): The protocol version on which this envelope settings has to be applied.
* **receiverApplicationId**: string (Required): The receiver application id.
* **responsibleAgencyCode**: string (Required): The responsible agency code.
* **senderApplicationId**: string (Required): The sender application id.
* **targetNamespace**: string (Required): The target namespace on which this envelope settings has to be applied.
* **timeFormat**: 'HHMM' | 'HHMMSS' | 'HHMMSSd' | 'HHMMSSdd' | 'NotSpecified' | string (Required): The time format.

## X12EnvelopeSettings
### Properties
* **controlStandardsId**: int (Required): The controls standards id.
* **controlVersionNumber**: string (Required): The control version number.
* **enableDefaultGroupHeaders**: bool (Required): The value indicating whether to enable default group headers.
* **functionalGroupId**: string: The functional group id.
* **groupControlNumberLowerBound**: int (Required): The group control number lower bound.
* **groupControlNumberUpperBound**: int (Required): The group control number upper bound.
* **groupHeaderAgencyCode**: string (Required): The group header agency code.
* **groupHeaderDateFormat**: 'CCYYMMDD' | 'NotSpecified' | 'YYMMDD' | string (Required): The group header date format.
* **groupHeaderTimeFormat**: 'HHMM' | 'HHMMSS' | 'HHMMSSd' | 'HHMMSSdd' | 'NotSpecified' | string (Required): The group header time format.
* **groupHeaderVersion**: string (Required): The group header version.
* **interchangeControlNumberLowerBound**: int (Required): The interchange  control number lower bound.
* **interchangeControlNumberUpperBound**: int (Required): The interchange  control number upper bound.
* **overwriteExistingTransactionSetControlNumber**: bool (Required): The value indicating whether to overwrite existing transaction set control number.
* **receiverApplicationId**: string (Required): The receiver application id.
* **rolloverGroupControlNumber**: bool (Required): The value indicating whether to rollover group control number.
* **rolloverInterchangeControlNumber**: bool (Required): The value indicating whether to rollover interchange control number.
* **rolloverTransactionSetControlNumber**: bool (Required): The value indicating whether to rollover transaction set control number.
* **senderApplicationId**: string (Required): The sender application id.
* **transactionSetControlNumberLowerBound**: int (Required): The transaction set control number lower bound.
* **transactionSetControlNumberPrefix**: string: The transaction set control number prefix.
* **transactionSetControlNumberSuffix**: string: The transaction set control number suffix.
* **transactionSetControlNumberUpperBound**: int (Required): The transaction set control number upper bound.
* **usageIndicator**: 'Information' | 'NotSpecified' | 'Production' | 'Test' | string (Required): The usage indicator.
* **useControlStandardsIdAsRepetitionCharacter**: bool (Required): The value indicating whether to use control standards id as repetition character.

## X12FramingSettings
### Properties
* **characterSet**: 'Basic' | 'Extended' | 'NotSpecified' | 'UTF8' | string (Required): The X12 character set.
* **componentSeparator**: int (Required): The component separator.
* **dataElementSeparator**: int (Required): The data element separator.
* **replaceCharacter**: int (Required): The replacement character.
* **replaceSeparatorsInPayload**: bool (Required): The value indicating whether to replace separators in payload.
* **segmentTerminator**: int (Required): The segment terminator.
* **segmentTerminatorSuffix**: 'CR' | 'CRLF' | 'LF' | 'None' | 'NotSpecified' (Required): The segment terminator suffix.

## X12MessageFilter
### Properties
* **messageFilterType**: 'Exclude' | 'Include' | 'NotSpecified' | string (Required): The message filter type.

## X12MessageIdentifier
### Properties
* **messageId**: string (Required): The message id.

## X12OneWayAgreement
### Properties
* **protocolSettings**: [X12ProtocolSettings](#x12protocolsettings) (Required): The X12 protocol settings.
* **receiverBusinessIdentity**: [BusinessIdentity](#businessidentity) (Required): The receiver business identity
* **senderBusinessIdentity**: [BusinessIdentity](#businessidentity) (Required): The sender business identity

## X12ProcessingSettings
### Properties
* **convertImpliedDecimal**: bool (Required): The value indicating whether to convert numerical type to implied decimal.
* **createEmptyXmlTagsForTrailingSeparators**: bool (Required): The value indicating whether to create empty xml tags for trailing separators.
* **maskSecurityInfo**: bool (Required): The value indicating whether to mask security information.
* **preserveInterchange**: bool (Required): The value indicating whether to preserve interchange.
* **suspendInterchangeOnError**: bool (Required): The value indicating whether to suspend interchange on error.
* **useDotAsDecimalSeparator**: bool (Required): The value indicating whether to use dot as decimal separator.

## X12ProtocolSettings
### Properties
* **acknowledgementSettings**: [X12AcknowledgementSettings](#x12acknowledgementsettings) (Required): The X12 acknowledgment settings.
* **envelopeOverrides**: [X12EnvelopeOverride](#x12envelopeoverride)[]: The X12 envelope override settings.
* **envelopeSettings**: [X12EnvelopeSettings](#x12envelopesettings) (Required): The X12 envelope settings.
* **framingSettings**: [X12FramingSettings](#x12framingsettings) (Required): The X12 framing settings.
* **messageFilter**: [X12MessageFilter](#x12messagefilter) (Required): The X12 message filter.
* **messageFilterList**: [X12MessageIdentifier](#x12messageidentifier)[]: The X12 message filter list.
* **processingSettings**: [X12ProcessingSettings](#x12processingsettings) (Required): The X12 processing settings.
* **schemaReferences**: [X12SchemaReference](#x12schemareference)[] (Required): The X12 schema references.
* **securitySettings**: [X12SecuritySettings](#x12securitysettings) (Required): The X12 security settings.
* **validationOverrides**: [X12ValidationOverride](#x12validationoverride)[]: The X12 validation override settings.
* **validationSettings**: [X12ValidationSettings](#x12validationsettings) (Required): The X12 validation settings.
* **x12DelimiterOverrides**: [X12DelimiterOverrides](#x12delimiteroverrides)[]: The X12 delimiter override settings.

## X12SchemaReference
### Properties
* **messageId**: string (Required): The message id.
* **schemaName**: string (Required): The schema name.
* **schemaVersion**: string (Required): The schema version.
* **senderApplicationId**: string: The sender application id.

## X12SecuritySettings
### Properties
* **authorizationQualifier**: string (Required): The authorization qualifier.
* **authorizationValue**: string: The authorization value.
* **passwordValue**: string: The password value.
* **securityQualifier**: string (Required): The security qualifier.

## X12ValidationOverride
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool (Required): The value indicating whether to allow leading and trailing spaces and zeroes.
* **messageId**: string (Required): The message id on which the validation settings has to be applied.
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional' | string (Required): The trailing separator policy.
* **trimLeadingAndTrailingSpacesAndZeroes**: bool (Required): The value indicating whether to trim leading and trailing spaces and zeroes.
* **validateCharacterSet**: bool (Required): The value indicating whether to validate character Set.
* **validateEDITypes**: bool (Required): The value indicating whether to validate EDI types.
* **validateXSDTypes**: bool (Required): The value indicating whether to validate XSD types.

## X12ValidationSettings
### Properties
* **allowLeadingAndTrailingSpacesAndZeroes**: bool (Required): The value indicating whether to allow leading and trailing spaces and zeroes.
* **checkDuplicateGroupControlNumber**: bool (Required): The value indicating whether to check for duplicate group control number.
* **checkDuplicateInterchangeControlNumber**: bool (Required): The value indicating whether to check for duplicate interchange control number.
* **checkDuplicateTransactionSetControlNumber**: bool (Required): The value indicating whether to check for duplicate transaction set control number.
* **interchangeControlNumberValidityDays**: int (Required): The validity period of interchange control number.
* **trailingSeparatorPolicy**: 'Mandatory' | 'NotAllowed' | 'NotSpecified' | 'Optional' | string (Required): The trailing separator policy.
* **trimLeadingAndTrailingSpacesAndZeroes**: bool (Required): The value indicating whether to trim leading and trailing spaces and zeroes.
* **validateCharacterSet**: bool (Required): The value indicating whether to validate character set in the message.
* **validateEDITypes**: bool (Required): The value indicating whether to Whether to validate EDI types.
* **validateXSDTypes**: bool (Required): The value indicating whether to Whether to validate XSD types.

