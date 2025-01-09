# Microsoft.CustomerInsights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.customerinsights/hubs

Hubs_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CustomerInsights/hubs@2017-04-26' = {
  name: 'example'
  location: 'West US'
  properties: {
    hubBillingInfo: {
      maxUnits: 5
      minUnits: 1
      skuName: 'B0'
    }
  }
}
```

## microsoft.customerinsights/hubs/authorizationpolicies

AuthorizationPolicies_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CustomerInsights/hubs/authorizationPolicies@2017-04-26' = {
  parent: parentResource 
  name: 'example'
  properties: {
    permissions: [
      'Read'
      'Write'
      'Manage'
    ]
  }
}
```

## microsoft.customerinsights/hubs/connectors

Connectors_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CustomerInsights/hubs/connectors@2017-04-26' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Test connector'
    connectorProperties: {
      connectionKeyVaultUrl: {
        organizationId: 'XXX'
        organizationUrl: 'https://XXX.crmlivetie.com/'
      }
    }
    connectorType: 'AzureBlob'
    displayName: 'testConnector'
  }
}
```

## microsoft.customerinsights/hubs/connectors/mappings

ConnectorMappings_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CustomerInsights/hubs/connectors/mappings@2017-04-26' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Test mapping'
    displayName: 'testMapping12491'
    entityType: 'Interaction'
    entityTypeName: 'TestInteractionType2967'
    mappingProperties: {
      format: {
        columnDelimiter: '|'
        formatType: 'TextFormat'
      }
      availability: {
        frequency: 'Hour'
        interval: 5
      }
      completeOperation: {
        completionOperationType: 'DeleteFile'
        destinationFolder: 'fakePath'
      }
      errorManagement: {
        errorLimit: 10
        errorManagementType: 'StopImport'
      }
      fileFilter: 'unknown'
      folderPath: 'http://sample.dne/file'
      hasHeader: false
      structure: [
        {
          columnName: 'unknown1'
          isEncrypted: false
          propertyName: 'unknwon1'
        }
        {
          columnName: 'unknown2'
          isEncrypted: true
          propertyName: 'unknwon2'
        }
      ]
    }
  }
}
```

## microsoft.customerinsights/hubs/interactions

Interactions_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CustomerInsights/hubs/interactions@2017-04-26' = {
  parent: parentResource 
  name: 'example'
  properties: {
    apiEntitySetName: 'TestInteractionType6358'
    fields: [
      {
        fieldName: 'TestInteractionType6358'
        fieldType: 'Edm.String'
        isArray: false
        isRequired: true
      }
      {
        fieldName: 'profile1'
        fieldType: 'Edm.String'
      }
    ]
    idPropertyNames: [
      'TestInteractionType6358'
    ]
    largeImage: '\\\\Images\\\\LargeImage'
    mediumImage: '\\\\Images\\\\MediumImage'
    primaryParticipantProfilePropertyName: 'profile1'
    smallImage: '\\\\Images\\\\smallImage'
  }
}
```

## microsoft.customerinsights/hubs/kpi

Kpi_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CustomerInsights/hubs/kpi@2017-04-26' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: {
      'en-us': 'Kpi Description'
    }
    aliases: [
      {
        aliasName: 'alias'
        expression: 'Id+4'
      }
    ]
    calculationWindow: 'Day'
    displayName: {
      'en-us': 'Kpi DisplayName'
    }
    entityType: 'Profile'
    entityTypeName: 'testProfile2327128'
    expression: 'SavingAccountBalance'
    function: 'Sum'
    groupBy: [
      'SavingAccountBalance'
    ]
    thresHolds: {
      increasingKpi: true
      lowerLimit: 5
      upperLimit: 50
    }
    unit: 'unit'
  }
}
```

## microsoft.customerinsights/hubs/links

Links_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CustomerInsights/hubs/links@2017-04-26' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: {
      'en-us': 'Link Description'
    }
    displayName: {
      'en-us': 'Link DisplayName'
    }
    linkName: 'linkTest4806'
    mappings: [
      {
        linkType: 'UpdateAlways'
        sourcePropertyName: 'testInteraction1949'
        targetPropertyName: 'testProfile1446'
      }
    ]
    participantPropertyReferences: [
      {
        sourcePropertyName: 'testInteraction1949'
        targetPropertyName: 'ProfileId'
      }
    ]
    sourceEntityType: 'Interaction'
    sourceEntityTypeName: 'testInteraction1949'
    targetEntityType: 'Profile'
    targetEntityTypeName: 'testProfile1446'
  }
}
```

## microsoft.customerinsights/hubs/predictions

Predictions_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CustomerInsights/hubs/predictions@2017-04-26' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: {
      'en-us': 'sdktest'
    }
    autoAnalyze: true
    displayName: {
      'en-us': 'sdktest'
    }
    grades: [
    ]
    involvedInteractionTypes: [
    ]
    involvedKpiTypes: [
    ]
    involvedRelationships: [
    ]
    mappings: {
      grade: 'sdktest_Grade'
      reason: 'sdktest_Reason'
      score: 'sdktest_Score'
    }
    negativeOutcomeExpression: 'Customers.FirstName = \'Mike\''
    positiveOutcomeExpression: 'Customers.FirstName = \'David\''
    predictionName: 'sdktest'
    primaryProfileType: 'Customers'
    scopeExpression: '*'
    scoreLabel: 'score label'
  }
}
```

## microsoft.customerinsights/hubs/profiles

Profiles_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CustomerInsights/hubs/profiles@2017-04-26' = {
  parent: parentResource 
  name: 'example'
  properties: {
    apiEntitySetName: 'TestProfileType396'
    fields: [
      {
        fieldName: 'Id'
        fieldType: 'Edm.String'
        isArray: false
        isRequired: true
      }
      {
        fieldName: 'ProfileId'
        fieldType: 'Edm.String'
        isArray: false
        isRequired: true
      }
      {
        fieldName: 'LastName'
        fieldType: 'Edm.String'
        isArray: false
        isRequired: true
      }
      {
        fieldName: 'TestProfileType396'
        fieldType: 'Edm.String'
        isArray: false
        isRequired: true
      }
      {
        fieldName: 'SavingAccountBalance'
        fieldType: 'Edm.Int32'
        isArray: false
        isRequired: true
      }
    ]
    largeImage: '\\\\Images\\\\LargeImage'
    mediumImage: '\\\\Images\\\\MediumImage'
    schemaItemTypeLink: 'SchemaItemTypeLink'
    smallImage: '\\\\Images\\\\smallImage'
    strongIds: [
      {
        keyPropertyNames: [
          'Id'
          'SavingAccountBalance'
        ]
        strongIdName: 'Id'
      }
      {
        keyPropertyNames: [
          'ProfileId'
          'LastName'
        ]
        strongIdName: 'ProfileId'
      }
    ]
  }
}
```

## microsoft.customerinsights/hubs/relationshiplinks

RelationshipLinks_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CustomerInsights/hubs/relationshipLinks@2017-04-26' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: {
      'en-us': 'Link Description'
    }
    displayName: {
      'en-us': 'Link DisplayName'
    }
    interactionType: 'testInteraction4332'
    linkName: 'Somelink'
    profilePropertyReferences: [
      {
        interactionPropertyName: 'profile1'
        profilePropertyName: 'ProfileId'
      }
    ]
    relatedProfilePropertyReferences: [
      {
        interactionPropertyName: 'profile1'
        profilePropertyName: 'ProfileId'
      }
    ]
    relationshipName: 'testProfile2326994'
  }
}
```

## microsoft.customerinsights/hubs/relationships

Relationships_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CustomerInsights/hubs/relationships@2017-04-26' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: {
      'en-us': 'Relationship Description'
    }
    cardinality: 'OneToOne'
    displayName: {
      'en-us': 'Relationship DisplayName'
    }
    fields: [
    ]
    profileType: 'testProfile2326994'
    relatedProfileType: 'testProfile2326994'
  }
}
```

## microsoft.customerinsights/hubs/roleassignments

RoleAssignments_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CustomerInsights/hubs/roleAssignments@2017-04-26' = {
  parent: parentResource 
  name: 'example'
  properties: {
    principals: [
      {
        principalId: '4c54c38ffa9b416ba5a6d6c8a20cbe7e'
        principalType: 'User'
      }
      {
        principalId: '93061d15a5054f2b9948ae25724cf9d5'
        principalType: 'User'
      }
    ]
    role: 'Admin'
  }
}
```

## microsoft.customerinsights/hubs/views

Views_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CustomerInsights/hubs/views@2017-04-26' = {
  parent: parentResource 
  name: 'example'
  properties: {
    definition: '{\\"isProfileType\\":false,\\"profileTypes\\":[],\\"widgets\\":[],\\"style\\":[]}'
    displayName: {
      en: 'some name'
    }
    userId: 'testUser'
  }
}
```
