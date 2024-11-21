# Microsoft.Logic

## microsoft.logic/workflows

Create or update a workflow
```bicep
resource exampleResource 'Microsoft.Logic/workflows@2019-05-01' = {
  name: 'example'
  location: 'brazilsouth'
  properties: {
    definition: {
      $schema: 'https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#'
      actions: {
        Find_pet_by_ID: {
          type: 'ApiConnection'
          inputs: {
            path: '/pet/@{encodeURIComponent(\'1\')}'
            method: 'get'
            host: {
              connection: {
                name: '@parameters(\'$connections\')[\'test-custom-connector\'][\'connectionId\']'
              }
            }
          }
          runAfter: {
          }
        }
      }
      contentVersion: '1.0.0.0'
      outputs: {
      }
      parameters: {
        $connections: {
          type: 'Object'
          defaultValue: {
          }
        }
      }
      triggers: {
        manual: {
          type: 'Request'
          inputs: {
            schema: {
            }
          }
          kind: 'Http'
        }
      }
    }
    integrationAccount: {
      id: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/test-resource-group/providers/Microsoft.Logic/integrationAccounts/test-integration-account'
    }
    parameters: {
      $connections: {
        value: {
          test-custom-connector: {
            connectionId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/test-resource-group/providers/Microsoft.Web/connections/test-custom-connector'
            connectionName: 'test-custom-connector'
            id: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/providers/Microsoft.Web/locations/brazilsouth/managedApis/test-custom-connector'
          }
        }
      }
    }
  }
  tags: {
  }
}
```

## microsoft.logic/integrationaccounts

Create or update an integration account
```bicep
resource exampleResource 'Microsoft.Logic/integrationAccounts@2019-05-01' = {
  name: 'example'
  location: 'westus'
  properties: {
  }
  sku: {
    name: 'Standard'
  }
}
```

## microsoft.logic/integrationaccounts/assemblies

Create or update an account assembly
```bicep
resource exampleResource 'Microsoft.Logic/integrationAccounts/assemblies@2019-05-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    assemblyName: 'System.IdentityModel.Tokens.Jwt'
    content: 'Base64 encoded Assembly Content'
    metadata: {
    }
  }
}
```

## microsoft.logic/integrationaccounts/batchconfigurations

Create or update a batch configuration
```bicep
resource exampleResource 'Microsoft.Logic/integrationAccounts/batchConfigurations@2019-05-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    batchGroupName: 'DEFAULT'
    releaseCriteria: {
      batchSize: 234567
      messageCount: 10
      recurrence: {
        frequency: 'Minute'
        interval: 1
        startTime: '2017-03-24T11:43:00'
        timeZone: 'India Standard Time'
      }
    }
  }
}
```

## microsoft.logic/integrationaccounts/schemas

Create or update schema
```bicep
resource exampleResource 'Microsoft.Logic/integrationAccounts/schemas@2019-05-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    content: '<?xml version="1.0" encoding="utf-16"?>\r\n<xs:schema xmlns:b="http://schemas.microsoft.com/BizTalk/2003" xmlns="http://Inbound_EDI.OrderFile" targetNamespace="http://Inbound_EDI.OrderFile" xmlns:xs="http://www.w3.org/2001/XMLSchema">\r\n  <xs:annotation>\r\n    <xs:appinfo>\r\n      <b:schemaInfo default_pad_char=" " count_positions_by_byte="false" parser_optimization="speed" lookahead_depth="3" suppress_empty_nodes="false" generate_empty_nodes="true" allow_early_termination="false" early_terminate_optional_fields="false" allow_message_breakup_of_infix_root="false" compile_parse_tables="false" standard="Flat File" root_reference="OrderFile" />\r\n      <schemaEditorExtension:schemaInfo namespaceAlias="b" extensionClass="Microsoft.BizTalk.FlatFileExtension.FlatFileExtension" standardName="Flat File" xmlns:schemaEditorExtension="http://schemas.microsoft.com/BizTalk/2003/SchemaEditorExtensions" />\r\n    </xs:appinfo>\r\n  </xs:annotation>\r\n  <xs:element name="OrderFile">\r\n    <xs:annotation>\r\n      <xs:appinfo>\r\n        <b:recordInfo structure="delimited" preserve_delimiter_for_empty_data="true" suppress_trailing_delimiters="false" sequence_number="1" />\r\n      </xs:appinfo>\r\n    </xs:annotation>\r\n    <xs:complexType>\r\n      <xs:sequence>\r\n        <xs:annotation>\r\n          <xs:appinfo>\r\n            <b:groupInfo sequence_number="0" />\r\n          </xs:appinfo>\r\n        </xs:annotation>\r\n        <xs:element name="Order">\r\n          <xs:annotation>\r\n            <xs:appinfo>\r\n              <b:recordInfo sequence_number="1" structure="delimited" preserve_delimiter_for_empty_data="true" suppress_trailing_delimiters="false" child_delimiter_type="hex" child_delimiter="0x0D 0x0A" child_order="infix" />\r\n            </xs:appinfo>\r\n          </xs:annotation>\r\n          <xs:complexType>\r\n            <xs:sequence>\r\n              <xs:annotation>\r\n                <xs:appinfo>\r\n                  <b:groupInfo sequence_number="0" />\r\n                </xs:appinfo>\r\n              </xs:annotation>\r\n              <xs:element name="Header">\r\n                <xs:annotation>\r\n                  <xs:appinfo>\r\n                    <b:recordInfo sequence_number="1" structure="delimited" preserve_delimiter_for_empty_data="true" suppress_trailing_delimiters="false" child_delimiter_type="char" child_delimiter="|" child_order="infix" tag_name="HDR|" />\r\n                  </xs:appinfo>\r\n                </xs:annotation>\r\n                <xs:complexType>\r\n                  <xs:sequence>\r\n                    <xs:annotation>\r\n                      <xs:appinfo>\r\n                        <b:groupInfo sequence_number="0" />\r\n                      </xs:appinfo>\r\n                    </xs:annotation>\r\n                    <xs:element name="PODate" type="xs:string">\r\n                      <xs:annotation>\r\n                        <xs:appinfo>\r\n                          <b:fieldInfo sequence_number="1" justification="left" />\r\n                        </xs:appinfo>\r\n                      </xs:annotation>\r\n                    </xs:element>\r\n                    <xs:element name="PONumber" type="xs:string">\r\n                      <xs:annotation>\r\n                        <xs:appinfo>\r\n                          <b:fieldInfo justification="left" sequence_number="2" />\r\n                        </xs:appinfo>\r\n                      </xs:annotation>\r\n                    </xs:element>\r\n                    <xs:element name="CustomerID" type="xs:string">\r\n                      <xs:annotation>\r\n                        <xs:appinfo>\r\n                          <b:fieldInfo sequence_number="3" justification="left" />\r\n                        </xs:appinfo>\r\n                      </xs:annotation>\r\n                    </xs:element>\r\n                    <xs:element name="CustomerContactName" type="xs:string">\r\n                      <xs:annotation>\r\n                        <xs:appinfo>\r\n                          <b:fieldInfo sequence_number="4" justification="left" />\r\n                        </xs:appinfo>\r\n                      </xs:annotation>\r\n                    </xs:element>\r\n                    <xs:element name="CustomerContactPhone" type="xs:string">\r\n                      <xs:annotation>\r\n                        <xs:appinfo>\r\n                          <b:fieldInfo sequence_number="5" justification="left" />\r\n                        </xs:appinfo>\r\n                      </xs:annotation>\r\n                    </xs:element>\r\n                  </xs:sequence>\r\n                </xs:complexType>\r\n              </xs:element>\r\n              <xs:element minOccurs="1" maxOccurs="unbounded" name="LineItems">\r\n                <xs:annotation>\r\n                  <xs:appinfo>\r\n                    <b:recordInfo sequence_number="2" structure="delimited" preserve_delimiter_for_empty_data="true" suppress_trailing_delimiters="false" child_delimiter_type="char" child_delimiter="|" child_order="infix" tag_name="DTL|" />\r\n                  </xs:appinfo>\r\n                </xs:annotation>\r\n                <xs:complexType>\r\n                  <xs:sequence>\r\n                    <xs:annotation>\r\n                      <xs:appinfo>\r\n                        <b:groupInfo sequence_number="0" />\r\n                      </xs:appinfo>\r\n                    </xs:annotation>\r\n                    <xs:element name="PONumber" type="xs:string">\r\n                      <xs:annotation>\r\n                        <xs:appinfo>\r\n                          <b:fieldInfo sequence_number="1" justification="left" />\r\n                        </xs:appinfo>\r\n                      </xs:annotation>\r\n                    </xs:element>\r\n                    <xs:element name="ItemOrdered" type="xs:string">\r\n                      <xs:annotation>\r\n                        <xs:appinfo>\r\n                          <b:fieldInfo sequence_number="2" justification="left" />\r\n                        </xs:appinfo>\r\n                      </xs:annotation>\r\n                    </xs:element>\r\n                    <xs:element name="Quantity" type="xs:string">\r\n                      <xs:annotation>\r\n                        <xs:appinfo>\r\n                          <b:fieldInfo sequence_number="3" justification="left" />\r\n                        </xs:appinfo>\r\n                      </xs:annotation>\r\n                    </xs:element>\r\n                    <xs:element name="UOM" type="xs:string">\r\n                      <xs:annotation>\r\n                        <xs:appinfo>\r\n                          <b:fieldInfo sequence_number="4" justification="left" />\r\n                        </xs:appinfo>\r\n                      </xs:annotation>\r\n                    </xs:element>\r\n                    <xs:element name="Price" type="xs:string">\r\n                      <xs:annotation>\r\n                        <xs:appinfo>\r\n                          <b:fieldInfo sequence_number="5" justification="left" />\r\n                        </xs:appinfo>\r\n                      </xs:annotation>\r\n                    </xs:element>\r\n                    <xs:element name="ExtendedPrice" type="xs:string">\r\n                      <xs:annotation>\r\n                        <xs:appinfo>\r\n                          <b:fieldInfo sequence_number="6" justification="left" />\r\n                        </xs:appinfo>\r\n                      </xs:annotation>\r\n                    </xs:element>\r\n                    <xs:element name="Description" type="xs:string">\r\n                      <xs:annotation>\r\n                        <xs:appinfo>\r\n                          <b:fieldInfo sequence_number="7" justification="left" />\r\n                        </xs:appinfo>\r\n                      </xs:annotation>\r\n                    </xs:element>\r\n                  </xs:sequence>\r\n                </xs:complexType>\r\n              </xs:element>\r\n            </xs:sequence>\r\n          </xs:complexType>\r\n        </xs:element>\r\n      </xs:sequence>\r\n    </xs:complexType>\r\n  </xs:element>\r\n</xs:schema>'
    contentType: 'application/xml'
    metadata: {
    }
    schemaType: 'Xml'
  }
  tags: {
    integrationAccountSchemaName: 'IntegrationAccountSchema8120'
  }
}
```

## microsoft.logic/integrationaccounts/maps

Create or update a map
```bicep
resource exampleResource 'Microsoft.Logic/integrationAccounts/maps@2019-05-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    content: '<?xml version="1.0" encoding="UTF-16"?>\r\n<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns:var="http://schemas.microsoft.com/BizTalk/2003/var" exclude-result-prefixes="msxsl var s0 userCSharp" version="1.0" xmlns:ns0="http://BizTalk_Server_Project4.StringFunctoidsDestinationSchema" xmlns:s0="http://BizTalk_Server_Project4.StringFunctoidsSourceSchema" xmlns:userCSharp="http://schemas.microsoft.com/BizTalk/2003/userCSharp">\r\n  <xsl:import href="http://btsfunctoids.blob.core.windows.net/functoids/functoids.xslt" />\r\n  <xsl:output omit-xml-declaration="yes" method="xml" version="1.0" />\r\n  <xsl:template match="/">\r\n    <xsl:apply-templates select="/s0:Root" />\r\n  </xsl:template>\r\n  <xsl:template match="/s0:Root">\r\n    <xsl:variable name="var:v1" select="userCSharp:StringFind(string(StringFindSource/text()) , &quot;SearchString&quot;)" />\r\n    <xsl:variable name="var:v2" select="userCSharp:StringLeft(string(StringLeftSource/text()) , &quot;2&quot;)" />\r\n    <xsl:variable name="var:v3" select="userCSharp:StringRight(string(StringRightSource/text()) , &quot;2&quot;)" />\r\n    <xsl:variable name="var:v4" select="userCSharp:StringUpperCase(string(UppercaseSource/text()))" />\r\n    <xsl:variable name="var:v5" select="userCSharp:StringLowerCase(string(LowercaseSource/text()))" />\r\n    <xsl:variable name="var:v6" select="userCSharp:StringSize(string(SizeSource/text()))" />\r\n    <xsl:variable name="var:v7" select="userCSharp:StringSubstring(string(StringExtractSource/text()) , &quot;0&quot; , &quot;2&quot;)" />\r\n    <xsl:variable name="var:v8" select="userCSharp:StringConcat(string(StringConcatSource/text()))" />\r\n    <xsl:variable name="var:v9" select="userCSharp:StringTrimLeft(string(StringLeftTrimSource/text()))" />\r\n    <xsl:variable name="var:v10" select="userCSharp:StringTrimRight(string(StringRightTrimSource/text()))" />\r\n    <ns0:Root>\r\n      <StringFindDestination>\r\n        <xsl:value-of select="$var:v1" />\r\n      </StringFindDestination>\r\n      <StringLeftDestination>\r\n        <xsl:value-of select="$var:v2" />\r\n      </StringLeftDestination>\r\n      <StringRightDestination>\r\n        <xsl:value-of select="$var:v3" />\r\n      </StringRightDestination>\r\n      <UppercaseDestination>\r\n        <xsl:value-of select="$var:v4" />\r\n      </UppercaseDestination>\r\n      <LowercaseDestination>\r\n        <xsl:value-of select="$var:v5" />\r\n      </LowercaseDestination>\r\n      <SizeDestination>\r\n        <xsl:value-of select="$var:v6" />\r\n      </SizeDestination>\r\n      <StringExtractDestination>\r\n        <xsl:value-of select="$var:v7" />\r\n      </StringExtractDestination>\r\n      <StringConcatDestination>\r\n        <xsl:value-of select="$var:v8" />\r\n      </StringConcatDestination>\r\n      <StringLeftTrimDestination>\r\n        <xsl:value-of select="$var:v9" />\r\n      </StringLeftTrimDestination>\r\n      <StringRightTrimDestination>\r\n        <xsl:value-of select="$var:v10" />\r\n      </StringRightTrimDestination>\r\n    </ns0:Root>\r\n  </xsl:template>\r\n</xsl:stylesheet>'
    contentType: 'application/xml'
    mapType: 'Xslt'
    metadata: {
    }
  }
}
```

Create or update a map larger than 4 MB
```bicep
resource exampleResource 'Microsoft.Logic/integrationAccounts/maps@2019-05-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    contentLink: {
      uri: '<blob-SAS-URL-for-map>'
    }
    contentType: 'application/xml'
    mapType: 'Xslt'
    metadata: {
    }
  }
}
```

## microsoft.logic/integrationaccounts/partners

Create or update a partner
```bicep
resource exampleResource 'Microsoft.Logic/integrationAccounts/partners@2019-05-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    content: {
      b2b: {
        businessIdentities: [
          {
            qualifier: 'AA'
            value: 'ZZ'
          }
        ]
      }
    }
    metadata: {
    }
    partnerType: 'B2B'
  }
  tags: {
  }
}
```

## microsoft.logic/integrationaccounts/agreements

Create or update an agreement
```bicep
resource exampleResource 'Microsoft.Logic/integrationAccounts/agreements@2019-05-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    agreementType: 'AS2'
    content: {
      aS2: {
        receiveAgreement: {
          protocolSettings: {
            acknowledgementConnectionSettings: {
              ignoreCertificateNameMismatch: true
              keepHttpConnectionAlive: true
              supportHttpStatusCodeContinue: true
              unfoldHttpHeaders: true
            }
            envelopeSettings: {
              autogenerateFileName: true
              fileNameTemplate: 'Test'
              messageContentType: 'text/plain'
              suspendMessageOnFileNameGenerationError: true
              transmitFileNameInMimeHeader: true
            }
            errorSettings: {
              resendIfMDNNotReceived: true
              suspendDuplicateMessage: true
            }
            mdnSettings: {
              dispositionNotificationTo: 'http://tempuri.org'
              mdnText: 'Sample'
              micHashingAlgorithm: 'SHA1'
              needMDN: true
              receiptDeliveryUrl: 'http://tempuri.org'
              sendInboundMDNToMessageBox: true
              sendMDNAsynchronously: true
              signMDN: true
              signOutboundMDNIfOptional: true
            }
            messageConnectionSettings: {
              ignoreCertificateNameMismatch: true
              keepHttpConnectionAlive: true
              supportHttpStatusCodeContinue: true
              unfoldHttpHeaders: true
            }
            securitySettings: {
              enableNRRForInboundDecodedMessages: true
              enableNRRForInboundEncodedMessages: true
              enableNRRForInboundMDN: true
              enableNRRForOutboundDecodedMessages: true
              enableNRRForOutboundEncodedMessages: true
              enableNRRForOutboundMDN: true
              overrideGroupSigningCertificate: false
            }
            validationSettings: {
              checkCertificateRevocationListOnReceive: true
              checkCertificateRevocationListOnSend: true
              checkDuplicateMessage: true
              compressMessage: true
              encryptMessage: false
              encryptionAlgorithm: 'AES128'
              interchangeDuplicatesValidityDays: 100
              overrideMessageProperties: true
              signMessage: false
            }
          }
          receiverBusinessIdentity: {
            qualifier: 'ZZ'
            value: 'ZZ'
          }
          senderBusinessIdentity: {
            qualifier: 'AA'
            value: 'AA'
          }
        }
        sendAgreement: {
          protocolSettings: {
            acknowledgementConnectionSettings: {
              ignoreCertificateNameMismatch: true
              keepHttpConnectionAlive: true
              supportHttpStatusCodeContinue: true
              unfoldHttpHeaders: true
            }
            envelopeSettings: {
              autogenerateFileName: true
              fileNameTemplate: 'Test'
              messageContentType: 'text/plain'
              suspendMessageOnFileNameGenerationError: true
              transmitFileNameInMimeHeader: true
            }
            errorSettings: {
              resendIfMDNNotReceived: true
              suspendDuplicateMessage: true
            }
            mdnSettings: {
              dispositionNotificationTo: 'http://tempuri.org'
              mdnText: 'Sample'
              micHashingAlgorithm: 'SHA1'
              needMDN: true
              receiptDeliveryUrl: 'http://tempuri.org'
              sendInboundMDNToMessageBox: true
              sendMDNAsynchronously: true
              signMDN: true
              signOutboundMDNIfOptional: true
            }
            messageConnectionSettings: {
              ignoreCertificateNameMismatch: true
              keepHttpConnectionAlive: true
              supportHttpStatusCodeContinue: true
              unfoldHttpHeaders: true
            }
            securitySettings: {
              enableNRRForInboundDecodedMessages: true
              enableNRRForInboundEncodedMessages: true
              enableNRRForInboundMDN: true
              enableNRRForOutboundDecodedMessages: true
              enableNRRForOutboundEncodedMessages: true
              enableNRRForOutboundMDN: true
              overrideGroupSigningCertificate: false
            }
            validationSettings: {
              checkCertificateRevocationListOnReceive: true
              checkCertificateRevocationListOnSend: true
              checkDuplicateMessage: true
              compressMessage: true
              encryptMessage: false
              encryptionAlgorithm: 'AES128'
              interchangeDuplicatesValidityDays: 100
              overrideMessageProperties: true
              signMessage: false
            }
          }
          receiverBusinessIdentity: {
            qualifier: 'AA'
            value: 'AA'
          }
          senderBusinessIdentity: {
            qualifier: 'ZZ'
            value: 'ZZ'
          }
        }
      }
    }
    guestIdentity: {
      qualifier: 'AA'
      value: 'AA'
    }
    guestPartner: 'GuestPartner'
    hostIdentity: {
      qualifier: 'ZZ'
      value: 'ZZ'
    }
    hostPartner: 'HostPartner'
    metadata: {
    }
  }
  tags: {
    IntegrationAccountAgreement: '<IntegrationAccountAgreementName>'
  }
}
```

## microsoft.logic/integrationaccounts/certificates

Create or update a certificate
```bicep
resource exampleResource 'Microsoft.Logic/integrationAccounts/certificates@2019-05-01' = {
  parent: parentResource 
  name: 'example'
  location: 'brazilsouth'
  properties: {
    key: {
      keyName: '<keyName>'
      keyVault: {
        id: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/testResourceGroup/providers/microsoft.keyvault/vaults/<keyVaultName>'
      }
      keyVersion: '87d9764197604449b9b8eb7bd8710868'
    }
    publicCertificate: '<publicCertificateValue>'
  }
}
```

## microsoft.logic/integrationaccounts/sessions

Create or update an integration account session
```bicep
resource exampleResource 'Microsoft.Logic/integrationAccounts/sessions@2019-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    content: {
      controlNumber: '1234'
      controlNumberChangedTime: '2017-02-21T22:30:11.9923759Z'
    }
  }
}
```

## microsoft.logic/integrationserviceenvironments

Create or update an integration service environment
```bicep
resource exampleResource 'Microsoft.Logic/integrationServiceEnvironments@2019-05-01' = {
  name: 'example'
  location: 'brazilsouth'
  properties: {
    encryptionConfiguration: {
      encryptionKeyReference: {
        keyName: 'testKeyName'
        keyVault: {
          id: '/subscriptions/f34b22a3-2202-4fb1-b040-1332bd928c84/resourceGroups/testResourceGroup/providers/Microsoft.KeyVault/vaults/testKeyVault'
        }
        keyVersion: '13b261d30b984753869902d7f47f4d55'
      }
    }
    networkConfiguration: {
      accessEndpoint: {
        type: 'Internal'
      }
      subnets: [
        {
          id: '/subscriptions/f34b22a3-2202-4fb1-b040-1332bd928c84/resourceGroups/testResourceGroup/providers/Microsoft.Network/virtualNetworks/testVNET/subnets/s1'
        }
        {
          id: '/subscriptions/f34b22a3-2202-4fb1-b040-1332bd928c84/resourceGroups/testResourceGroup/providers/Microsoft.Network/virtualNetworks/testVNET/subnets/s2'
        }
        {
          id: '/subscriptions/f34b22a3-2202-4fb1-b040-1332bd928c84/resourceGroups/testResourceGroup/providers/Microsoft.Network/virtualNetworks/testVNET/subnets/s3'
        }
        {
          id: '/subscriptions/f34b22a3-2202-4fb1-b040-1332bd928c84/resourceGroups/testResourceGroup/providers/Microsoft.Network/virtualNetworks/testVNET/subnets/s4'
        }
      ]
    }
  }
  sku: {
    name: 'Premium'
    capacity: 2
  }
}
```

## microsoft.logic/integrationserviceenvironments/managedapis

Gets the integration service environment managed Apis
```bicep
resource exampleResource 'Microsoft.Logic/integrationServiceEnvironments/managedApis@2019-05-01' = {
  parent: parentResource 
  name: 'example'
  location: 'brazilsouth'
  properties: {
    deploymentParameters: {
    }
  }
}
```
