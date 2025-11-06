# Microsoft.DataFactory
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.datafactory/factories

Factories_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DataFactory/factories@2018-06-01' = {
  name: 'example'
  location: 'East US'
}
```

## microsoft.datafactory/factories/adfcdcs

ChangeDataCapture_Create
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/adfcdcs@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Sample demo change data capture to transfer data from delimited (csv) to Azure SQL Database with automapped and non-automapped mappings.'
    allowVNetOverride: false
    policy: {
      mode: 'Microbatch'
      recurrence: {
        frequency: 'Minute'
        interval: 15
      }
    }
    sourceConnectionsInfo: [
      {
        connection: {
          type: 'linkedservicetype'
          commonDslConnectorProperties: [
            {
              name: 'allowSchemaDrift'
              value: true
            }
            {
              name: 'inferDriftedColumnTypes'
              value: true
            }
            {
              name: 'format'
              value: 'delimited'
            }
            {
              name: 'dateFormats'
              value: [
                'MM/dd/yyyy'
                'dd/MM/yyyy'
                'yyyy/MM/dd'
                'MM-dd-yyyy'
                'dd-MM-yyyy'
                'yyyy-MM-dd'
                'dd.MM.yyyy'
                'MM.dd.yyyy'
                'yyyy.MM.dd'
              ]
            }
            {
              name: 'timestampFormats'
              value: [
                'yyyyMMddHHmm'
                'yyyyMMdd HHmm'
                'yyyyMMddHHmmss'
                'yyyyMMdd HHmmss'
                'dd-MM-yyyy HH:mm:ss'
                'dd-MM-yyyy HH:mm'
                'yyyy-M-d H:m:s'
                'yyyy-MM-dd\\\'T\\\'HH:mm:ss\\\'Z\\\''
                'yyyy-M-d\\\'T\\\'H:m:s\\\'Z\\\''
                'yyyy-M-d\\\'T\\\'H:m:s'
                'yyyy-MM-dd\\\'T\\\'HH:mm:ss'
                'yyyy-MM-dd HH:mm:ss'
                'yyyy-MM-dd HH:mm'
                'yyyy.MM.dd HH:mm:ss'
                'MM/dd/yyyy HH:mm:ss'
                'M/d/yyyy H:m:s'
                'yyyy/MM/dd HH:mm:ss'
                'yyyy/M/d H:m:s'
                'dd MMM yyyy HH:mm:ss'
                'dd MMMM yyyy HH:mm:ss'
                'd MMM yyyy H:m:s'
                'd MMMM yyyy H:m:s'
                'd-M-yyyy H:m:s'
                'd-M-yyyy H:m'
                'yyyy-M-d H:m'
                'MM/dd/yyyy HH:mm'
                'M/d/yyyy H:m'
                'yyyy/MM/dd HH:mm'
                'yyyy/M/d H:m'
                'dd MMMM yyyy HH:mm'
                'dd MMM yyyy HH:mm'
                'd MMMM yyyy H:m'
                'd MMM yyyy H:m'
                'MM-dd-yyyy hh:mm:ss a'
                'MM-dd-yyyy HH:mm:ss'
                'MM/dd/yyyy hh:mm:ss a'
                'yyyy.MM.dd hh:mm:ss a'
                'MM/dd/yyyy'
                'dd/MM/yyyy'
                'yyyy/MM/dd'
                'MM-dd-yyyy'
                'dd-MM-yyyy'
                'yyyy-MM-dd'
                'dd.MM.yyyy'
                'MM.dd.yyyy'
                'yyyy.MM.dd'
              ]
            }
            {
              name: 'enableCdc'
              value: true
            }
            {
              name: 'skipInitialLoad'
              value: true
            }
            {
              name: 'columnNamesAsHeader'
              value: true
            }
            {
              name: 'columnDelimiter'
              value: ','
            }
            {
              name: 'escapeChar'
              value: '\\\\'
            }
            {
              name: 'quoteChar'
              value: '\\"'
            }
          ]
          isInlineDataset: true
          linkedService: {
            type: 'LinkedServiceReference'
            referenceName: 'amjaAdls03'
          }
          linkedServiceType: 'AzureBlobFS'
        }
        sourceEntities: [
          {
            name: 'source/customer'
            properties: {
              schema: [
                {
                  name: 'CustId'
                  dataType: 'short'
                }
                {
                  name: 'CustName'
                  dataType: 'string'
                }
                {
                  name: 'CustAddres'
                  dataType: 'string'
                }
                {
                  name: 'CustDepName'
                  dataType: 'string'
                }
                {
                  name: 'CustDepLoc'
                  dataType: 'string'
                }
              ]
              dslConnectorProperties: [
                {
                  name: 'container'
                  value: 'source'
                }
                {
                  name: 'fileSystem'
                  value: 'source'
                }
                {
                  name: 'folderPath'
                  value: 'customer'
                }
                {
                  name: 'allowSchemaDrift'
                  value: false
                }
                {
                  name: 'inferDriftedColumnTypes'
                  value: false
                }
              ]
            }
          }
          {
            name: 'source/employee'
            properties: {
              schema: [
              ]
              dslConnectorProperties: [
                {
                  name: 'container'
                  value: 'source'
                }
                {
                  name: 'fileSystem'
                  value: 'source'
                }
                {
                  name: 'folderPath'
                  value: 'employee'
                }
              ]
            }
          }
          {
            name: 'lookup'
            properties: {
              schema: [
                {
                  name: 'EmpId'
                  dataType: 'short'
                }
                {
                  name: 'EmpName'
                  dataType: 'string'
                }
                {
                  name: 'HomeAddress'
                  dataType: 'string'
                }
                {
                  name: 'OfficeAddress'
                  dataType: 'string'
                }
                {
                  name: 'EmpPhoneNumber'
                  dataType: 'integer'
                }
                {
                  name: 'DepName'
                  dataType: 'string'
                }
                {
                  name: 'DepLoc'
                  dataType: 'string'
                }
                {
                  name: 'DecimalCol'
                  dataType: 'double'
                }
              ]
              dslConnectorProperties: [
                {
                  name: 'container'
                  value: 'lookup'
                }
                {
                  name: 'fileSystem'
                  value: 'lookup'
                }
                {
                  name: 'allowSchemaDrift'
                  value: false
                }
                {
                  name: 'inferDriftedColumnTypes'
                  value: false
                }
              ]
            }
          }
          {
            name: 'source/justSchema'
            properties: {
              schema: [
                {
                  name: 'CustId'
                  dataType: 'string'
                }
                {
                  name: 'CustName'
                  dataType: 'string'
                }
                {
                  name: 'CustAddres'
                  dataType: 'string'
                }
                {
                  name: 'CustDepName'
                  dataType: 'string'
                }
                {
                  name: 'CustDepLoc'
                  dataType: 'string'
                }
              ]
              dslConnectorProperties: [
                {
                  name: 'container'
                  value: 'source'
                }
                {
                  name: 'fileSystem'
                  value: 'source'
                }
                {
                  name: 'folderPath'
                  value: 'justSchema'
                }
                {
                  name: 'allowSchemaDrift'
                  value: false
                }
                {
                  name: 'inferDriftedColumnTypes'
                  value: false
                }
              ]
            }
          }
        ]
      }
    ]
    targetConnectionsInfo: [
      {
        connection: {
          type: 'linkedservicetype'
          commonDslConnectorProperties: [
            {
              name: 'allowSchemaDrift'
              value: true
            }
            {
              name: 'inferDriftedColumnTypes'
              value: true
            }
            {
              name: 'format'
              value: 'table'
            }
            {
              name: 'store'
              value: 'sqlserver'
            }
            {
              name: 'databaseType'
              value: 'databaseType'
            }
            {
              name: 'database'
              value: 'database'
            }
            {
              name: 'deletable'
              value: false
            }
            {
              name: 'insertable'
              value: true
            }
            {
              name: 'updateable'
              value: false
            }
            {
              name: 'upsertable'
              value: false
            }
            {
              name: 'skipDuplicateMapInputs'
              value: true
            }
            {
              name: 'skipDuplicateMapOutputs'
              value: true
            }
          ]
          isInlineDataset: true
          linkedService: {
            type: 'LinkedServiceReference'
            referenceName: 'amjaSql'
          }
          linkedServiceType: 'AzureSqlDatabase'
        }
        dataMapperMappings: [
          {
            attributeMappingInfo: {
              attributeMappings: [
              ]
            }
            sourceConnectionReference: {
              type: 'linkedservicetype'
              connectionName: 'amjaAdls03'
            }
            sourceEntityName: 'source/customer'
            targetEntityName: 'dbo.customer'
          }
          {
            attributeMappingInfo: {
              attributeMappings: [
                {
                  name: 'Name'
                  type: 'Derived'
                  attributeReferences: [
                    {
                      name: 'EmpName'
                      entity: 'lookup'
                      entityConnectionReference: {
                        type: 'linkedservicetype'
                        connectionName: 'amjaAdls03'
                      }
                    }
                  ]
                  expression: 'upper(EmpName)'
                  functionName: 'upper'
                }
                {
                  name: 'PersonID'
                  type: 'Direct'
                  attributeReference: {
                    name: 'EmpId'
                    entity: 'lookup'
                    entityConnectionReference: {
                      type: 'linkedservicetype'
                      connectionName: 'amjaAdls03'
                    }
                  }
                  functionName: ''
                }
              ]
            }
            sourceConnectionReference: {
              type: 'linkedservicetype'
              connectionName: 'amjaAdls03'
            }
            sourceEntityName: 'lookup'
            targetEntityName: 'dbo.data_source_table'
          }
          {
            attributeMappingInfo: {
              attributeMappings: [
              ]
            }
            sourceConnectionReference: {
              type: 'linkedservicetype'
              connectionName: 'amjaAdls03'
            }
            sourceEntityName: 'source/employee'
            targetEntityName: 'dbo.employee'
          }
          {
            attributeMappingInfo: {
              attributeMappings: [
                {
                  name: 'CustAddres'
                  type: 'Derived'
                  attributeReferences: [
                    {
                      name: 'CustAddres'
                      entity: 'source/justSchema'
                      entityConnectionReference: {
                        type: 'linkedservicetype'
                        connectionName: 'amjaAdls03'
                      }
                    }
                  ]
                  expression: 'trim(CustAddres)'
                  functionName: 'trim'
                }
                {
                  name: 'CustDepLoc'
                  type: 'Direct'
                  attributeReference: {
                    name: 'CustDepLoc'
                    entity: 'source/justSchema'
                    entityConnectionReference: {
                      type: 'linkedservicetype'
                      connectionName: 'amjaAdls03'
                    }
                  }
                }
                {
                  name: 'CustDepName'
                  type: 'Derived'
                  attributeReferences: [
                    {
                      name: 'CustName'
                      entity: 'source/justSchema'
                      entityConnectionReference: {
                        type: 'linkedservicetype'
                        connectionName: 'amjaAdls03'
                      }
                    }
                    {
                      name: 'CustDepName'
                      entity: 'source/justSchema'
                      entityConnectionReference: {
                        type: 'linkedservicetype'
                        connectionName: 'amjaAdls03'
                      }
                    }
                  ]
                  expression: 'concat(CustName, " -> ", CustDepName)'
                  functionName: ''
                }
                {
                  name: 'CustId'
                  type: 'Direct'
                  attributeReference: {
                    name: 'CustId'
                    entity: 'source/justSchema'
                    entityConnectionReference: {
                      type: 'linkedservicetype'
                      connectionName: 'amjaAdls03'
                    }
                  }
                  functionName: ''
                }
                {
                  name: 'CustName'
                  type: 'Direct'
                  attributeReference: {
                    name: 'CustName'
                    entity: 'source/justSchema'
                    entityConnectionReference: {
                      type: 'linkedservicetype'
                      connectionName: 'amjaAdls03'
                    }
                  }
                }
              ]
            }
            sourceConnectionReference: {
              type: 'linkedservicetype'
              connectionName: 'amjaAdls03'
            }
            sourceEntityName: 'source/justSchema'
            targetEntityName: 'dbo.justSchema'
          }
        ]
        relationships: [
        ]
        targetEntities: [
          {
            name: 'dbo.employee'
            properties: {
              schema: [
              ]
              dslConnectorProperties: [
                {
                  name: 'schemaName'
                  value: 'dbo'
                }
                {
                  name: 'tableName'
                  value: 'employee'
                }
              ]
            }
          }
          {
            name: 'dbo.justSchema'
            properties: {
              schema: [
              ]
              dslConnectorProperties: [
                {
                  name: 'schemaName'
                  value: 'dbo'
                }
                {
                  name: 'tableName'
                  value: 'justSchema'
                }
                {
                  name: 'allowSchemaDrift'
                  value: true
                }
                {
                  name: 'inferDriftedColumnTypes'
                  value: true
                }
              ]
            }
          }
          {
            name: 'dbo.customer'
            properties: {
              schema: [
                {
                  name: 'CustId'
                  dataType: 'integer'
                }
                {
                  name: 'CustName'
                  dataType: 'string'
                }
                {
                  name: 'CustAddres'
                  dataType: 'string'
                }
                {
                  name: 'CustDeptName'
                  dataType: 'string'
                }
                {
                  name: 'CustEmail'
                  dataType: 'string'
                }
              ]
              dslConnectorProperties: [
                {
                  name: 'schemaName'
                  value: 'dbo'
                }
                {
                  name: 'tableName'
                  value: 'customer'
                }
                {
                  name: 'allowSchemaDrift'
                  value: false
                }
                {
                  name: 'inferDriftedColumnTypes'
                  value: false
                }
              ]
            }
          }
          {
            name: 'dbo.data_source_table'
            properties: {
              schema: [
                {
                  name: 'PersonID'
                  dataType: 'integer'
                }
                {
                  name: 'Name'
                  dataType: 'string'
                }
                {
                  name: 'LastModifytime'
                  dataType: 'timestamp'
                }
              ]
              dslConnectorProperties: [
                {
                  name: 'schemaName'
                  value: 'dbo'
                }
                {
                  name: 'tableName'
                  value: 'data_source_table'
                }
                {
                  name: 'allowSchemaDrift'
                  value: false
                }
                {
                  name: 'inferDriftedColumnTypes'
                  value: false
                }
                {
                  name: 'defaultToUpsert'
                  value: false
                }
              ]
            }
          }
        ]
      }
    ]
  }
}
```

ChangeDataCapture_Update
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/adfcdcs@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Sample demo change data capture to transfer data from delimited (csv) to Azure SQL Database. Updating table mappings.'
    allowVNetOverride: false
    policy: {
      mode: 'Microbatch'
      recurrence: {
        frequency: 'Minute'
        interval: 15
      }
    }
    sourceConnectionsInfo: [
      {
        connection: {
          type: 'linkedservicetype'
          commonDslConnectorProperties: [
            {
              name: 'allowSchemaDrift'
              value: true
            }
            {
              name: 'inferDriftedColumnTypes'
              value: true
            }
            {
              name: 'format'
              value: 'delimited'
            }
            {
              name: 'dateFormats'
              value: [
                'MM/dd/yyyy'
                'dd/MM/yyyy'
                'yyyy/MM/dd'
                'MM-dd-yyyy'
                'dd-MM-yyyy'
                'yyyy-MM-dd'
                'dd.MM.yyyy'
                'MM.dd.yyyy'
                'yyyy.MM.dd'
              ]
            }
            {
              name: 'timestampFormats'
              value: [
                'yyyyMMddHHmm'
                'yyyyMMdd HHmm'
                'yyyyMMddHHmmss'
                'yyyyMMdd HHmmss'
                'dd-MM-yyyy HH:mm:ss'
                'dd-MM-yyyy HH:mm'
                'yyyy-M-d H:m:s'
                'yyyy-MM-dd\\\'T\\\'HH:mm:ss\\\'Z\\\''
                'yyyy-M-d\\\'T\\\'H:m:s\\\'Z\\\''
                'yyyy-M-d\\\'T\\\'H:m:s'
                'yyyy-MM-dd\\\'T\\\'HH:mm:ss'
                'yyyy-MM-dd HH:mm:ss'
                'yyyy-MM-dd HH:mm'
                'yyyy.MM.dd HH:mm:ss'
                'MM/dd/yyyy HH:mm:ss'
                'M/d/yyyy H:m:s'
                'yyyy/MM/dd HH:mm:ss'
                'yyyy/M/d H:m:s'
                'dd MMM yyyy HH:mm:ss'
                'dd MMMM yyyy HH:mm:ss'
                'd MMM yyyy H:m:s'
                'd MMMM yyyy H:m:s'
                'd-M-yyyy H:m:s'
                'd-M-yyyy H:m'
                'yyyy-M-d H:m'
                'MM/dd/yyyy HH:mm'
                'M/d/yyyy H:m'
                'yyyy/MM/dd HH:mm'
                'yyyy/M/d H:m'
                'dd MMMM yyyy HH:mm'
                'dd MMM yyyy HH:mm'
                'd MMMM yyyy H:m'
                'd MMM yyyy H:m'
                'MM-dd-yyyy hh:mm:ss a'
                'MM-dd-yyyy HH:mm:ss'
                'MM/dd/yyyy hh:mm:ss a'
                'yyyy.MM.dd hh:mm:ss a'
                'MM/dd/yyyy'
                'dd/MM/yyyy'
                'yyyy/MM/dd'
                'MM-dd-yyyy'
                'dd-MM-yyyy'
                'yyyy-MM-dd'
                'dd.MM.yyyy'
                'MM.dd.yyyy'
                'yyyy.MM.dd'
              ]
            }
            {
              name: 'enableCdc'
              value: true
            }
            {
              name: 'skipInitialLoad'
              value: true
            }
            {
              name: 'columnNamesAsHeader'
              value: true
            }
            {
              name: 'columnDelimiter'
              value: ','
            }
            {
              name: 'escapeChar'
              value: '\\\\'
            }
            {
              name: 'quoteChar'
              value: '\\"'
            }
          ]
          isInlineDataset: true
          linkedService: {
            type: 'LinkedServiceReference'
            referenceName: 'amjaAdls03'
          }
          linkedServiceType: 'AzureBlobFS'
        }
        sourceEntities: [
          {
            name: 'source/customer'
            properties: {
              schema: [
                {
                  name: 'CustId'
                  dataType: 'short'
                }
                {
                  name: 'CustName'
                  dataType: 'string'
                }
                {
                  name: 'CustAddres'
                  dataType: 'string'
                }
                {
                  name: 'CustDepName'
                  dataType: 'string'
                }
                {
                  name: 'CustDepLoc'
                  dataType: 'string'
                }
              ]
              dslConnectorProperties: [
                {
                  name: 'container'
                  value: 'source'
                }
                {
                  name: 'fileSystem'
                  value: 'source'
                }
                {
                  name: 'folderPath'
                  value: 'customer'
                }
                {
                  name: 'allowSchemaDrift'
                  value: false
                }
                {
                  name: 'inferDriftedColumnTypes'
                  value: false
                }
              ]
            }
          }
          {
            name: 'source/employee'
            properties: {
              schema: [
              ]
              dslConnectorProperties: [
                {
                  name: 'container'
                  value: 'source'
                }
                {
                  name: 'fileSystem'
                  value: 'source'
                }
                {
                  name: 'folderPath'
                  value: 'employee'
                }
              ]
            }
          }
          {
            name: 'lookup'
            properties: {
              schema: [
                {
                  name: 'EmpId'
                  dataType: 'short'
                }
                {
                  name: 'EmpName'
                  dataType: 'string'
                }
                {
                  name: 'HomeAddress'
                  dataType: 'string'
                }
                {
                  name: 'OfficeAddress'
                  dataType: 'string'
                }
                {
                  name: 'EmpPhoneNumber'
                  dataType: 'integer'
                }
                {
                  name: 'DepName'
                  dataType: 'string'
                }
                {
                  name: 'DepLoc'
                  dataType: 'string'
                }
                {
                  name: 'DecimalCol'
                  dataType: 'double'
                }
              ]
              dslConnectorProperties: [
                {
                  name: 'container'
                  value: 'lookup'
                }
                {
                  name: 'fileSystem'
                  value: 'lookup'
                }
                {
                  name: 'allowSchemaDrift'
                  value: false
                }
                {
                  name: 'inferDriftedColumnTypes'
                  value: false
                }
              ]
            }
          }
          {
            name: 'source/justSchema'
            properties: {
              schema: [
                {
                  name: 'CustId'
                  dataType: 'string'
                }
                {
                  name: 'CustName'
                  dataType: 'string'
                }
                {
                  name: 'CustAddres'
                  dataType: 'string'
                }
                {
                  name: 'CustDepName'
                  dataType: 'string'
                }
                {
                  name: 'CustDepLoc'
                  dataType: 'string'
                }
              ]
              dslConnectorProperties: [
                {
                  name: 'container'
                  value: 'source'
                }
                {
                  name: 'fileSystem'
                  value: 'source'
                }
                {
                  name: 'folderPath'
                  value: 'justSchema'
                }
                {
                  name: 'allowSchemaDrift'
                  value: false
                }
                {
                  name: 'inferDriftedColumnTypes'
                  value: false
                }
              ]
            }
          }
        ]
      }
    ]
    status: 'Stopped'
    targetConnectionsInfo: [
      {
        connection: {
          type: 'linkedservicetype'
          commonDslConnectorProperties: [
            {
              name: 'allowSchemaDrift'
              value: true
            }
            {
              name: 'inferDriftedColumnTypes'
              value: true
            }
            {
              name: 'format'
              value: 'table'
            }
            {
              name: 'store'
              value: 'sqlserver'
            }
            {
              name: 'databaseType'
              value: 'databaseType'
            }
            {
              name: 'database'
              value: 'database'
            }
            {
              name: 'deletable'
              value: false
            }
            {
              name: 'insertable'
              value: true
            }
            {
              name: 'updateable'
              value: false
            }
            {
              name: 'upsertable'
              value: false
            }
            {
              name: 'skipDuplicateMapInputs'
              value: true
            }
            {
              name: 'skipDuplicateMapOutputs'
              value: true
            }
          ]
          isInlineDataset: true
          linkedService: {
            type: 'LinkedServiceReference'
            referenceName: 'amjaSql'
          }
          linkedServiceType: 'AzureSqlDatabase'
        }
        dataMapperMappings: [
          {
            attributeMappingInfo: {
              attributeMappings: [
                {
                  name: 'CustAddres'
                  type: 'Derived'
                  attributeReferences: [
                    {
                      name: 'CustAddres'
                      entity: 'source/customer'
                      entityConnectionReference: {
                        type: 'linkedservicetype'
                        connectionName: 'amjaAdls03'
                      }
                    }
                  ]
                  expression: 'trim(CustAddres)'
                  functionName: 'trim'
                }
                {
                  name: 'CustDeptName'
                  type: 'Direct'
                  attributeReference: {
                    name: 'CustDepName'
                    entity: 'source/customer'
                    entityConnectionReference: {
                      type: 'linkedservicetype'
                      connectionName: 'amjaAdls03'
                    }
                  }
                  functionName: ''
                }
                {
                  name: 'CustEmail'
                  type: 'Direct'
                  attributeReference: {
                    name: 'CustName'
                    entity: 'source/customer'
                    entityConnectionReference: {
                      type: 'linkedservicetype'
                      connectionName: 'amjaAdls03'
                    }
                  }
                  functionName: ''
                }
                {
                  name: 'CustId'
                  type: 'Direct'
                  attributeReference: {
                    name: 'CustId'
                    entity: 'source/customer'
                    entityConnectionReference: {
                      type: 'linkedservicetype'
                      connectionName: 'amjaAdls03'
                    }
                  }
                  functionName: ''
                }
                {
                  name: 'CustName'
                  type: 'Direct'
                  attributeReference: {
                    name: 'CustName'
                    entity: 'source/customer'
                    entityConnectionReference: {
                      type: 'linkedservicetype'
                      connectionName: 'amjaAdls03'
                    }
                  }
                  functionName: ''
                }
              ]
            }
            sourceConnectionReference: {
              type: 'linkedservicetype'
              connectionName: 'amjaAdls03'
            }
            sourceEntityName: 'source/customer'
            targetEntityName: 'dbo.customer'
          }
          {
            attributeMappingInfo: {
              attributeMappings: [
                {
                  name: 'Name'
                  type: 'Derived'
                  attributeReferences: [
                    {
                      name: 'EmpName'
                      entity: 'lookup'
                      entityConnectionReference: {
                        type: 'linkedservicetype'
                        connectionName: 'amjaAdls03'
                      }
                    }
                  ]
                  expression: 'upper(EmpName)'
                  functionName: 'upper'
                }
                {
                  name: 'PersonID'
                  type: 'Direct'
                  attributeReference: {
                    name: 'EmpId'
                    entity: 'lookup'
                    entityConnectionReference: {
                      type: 'linkedservicetype'
                      connectionName: 'amjaAdls03'
                    }
                  }
                  functionName: ''
                }
              ]
            }
            sourceConnectionReference: {
              type: 'linkedservicetype'
              connectionName: 'amjaAdls03'
            }
            sourceEntityName: 'lookup'
            targetEntityName: 'dbo.data_source_table'
          }
          {
            attributeMappingInfo: {
              attributeMappings: [
              ]
            }
            sourceConnectionReference: {
              type: 'linkedservicetype'
              connectionName: 'amjaAdls03'
            }
            sourceEntityName: 'source/employee'
            targetEntityName: 'dbo.employee'
          }
          {
            attributeMappingInfo: {
              attributeMappings: [
                {
                  name: 'CustAddres'
                  type: 'Derived'
                  attributeReferences: [
                    {
                      name: 'CustAddres'
                      entity: 'source/justSchema'
                      entityConnectionReference: {
                        type: 'linkedservicetype'
                        connectionName: 'amjaAdls03'
                      }
                    }
                  ]
                  expression: 'trim(CustAddres)'
                  functionName: 'trim'
                }
                {
                  name: 'CustDepLoc'
                  type: 'Direct'
                  attributeReference: {
                    name: 'CustDepLoc'
                    entity: 'source/justSchema'
                    entityConnectionReference: {
                      type: 'linkedservicetype'
                      connectionName: 'amjaAdls03'
                    }
                  }
                }
                {
                  name: 'CustDepName'
                  type: 'Derived'
                  attributeReferences: [
                    {
                      name: 'CustName'
                      entity: 'source/justSchema'
                      entityConnectionReference: {
                        type: 'linkedservicetype'
                        connectionName: 'amjaAdls03'
                      }
                    }
                    {
                      name: 'CustDepName'
                      entity: 'source/justSchema'
                      entityConnectionReference: {
                        type: 'linkedservicetype'
                        connectionName: 'amjaAdls03'
                      }
                    }
                  ]
                  expression: 'concat(CustName, " -> ", CustDepName)'
                  functionName: ''
                }
                {
                  name: 'CustId'
                  type: 'Direct'
                  attributeReference: {
                    name: 'CustId'
                    entity: 'source/justSchema'
                    entityConnectionReference: {
                      type: 'linkedservicetype'
                      connectionName: 'amjaAdls03'
                    }
                  }
                  functionName: ''
                }
                {
                  name: 'CustName'
                  type: 'Direct'
                  attributeReference: {
                    name: 'CustName'
                    entity: 'source/justSchema'
                    entityConnectionReference: {
                      type: 'linkedservicetype'
                      connectionName: 'amjaAdls03'
                    }
                  }
                }
              ]
            }
            sourceConnectionReference: {
              type: 'linkedservicetype'
              connectionName: 'amjaAdls03'
            }
            sourceEntityName: 'source/justSchema'
            targetEntityName: 'dbo.justSchema'
          }
        ]
        relationships: [
        ]
        targetEntities: [
          {
            name: 'dbo.employee'
            properties: {
              schema: [
              ]
              dslConnectorProperties: [
                {
                  name: 'schemaName'
                  value: 'dbo'
                }
                {
                  name: 'tableName'
                  value: 'employee'
                }
              ]
            }
          }
          {
            name: 'dbo.justSchema'
            properties: {
              schema: [
              ]
              dslConnectorProperties: [
                {
                  name: 'schemaName'
                  value: 'dbo'
                }
                {
                  name: 'tableName'
                  value: 'justSchema'
                }
                {
                  name: 'allowSchemaDrift'
                  value: true
                }
                {
                  name: 'inferDriftedColumnTypes'
                  value: true
                }
              ]
            }
          }
          {
            name: 'dbo.customer'
            properties: {
              schema: [
                {
                  name: 'CustId'
                  dataType: 'integer'
                }
                {
                  name: 'CustName'
                  dataType: 'string'
                }
                {
                  name: 'CustAddres'
                  dataType: 'string'
                }
                {
                  name: 'CustDeptName'
                  dataType: 'string'
                }
                {
                  name: 'CustEmail'
                  dataType: 'string'
                }
              ]
              dslConnectorProperties: [
                {
                  name: 'schemaName'
                  value: 'dbo'
                }
                {
                  name: 'tableName'
                  value: 'customer'
                }
                {
                  name: 'allowSchemaDrift'
                  value: false
                }
                {
                  name: 'inferDriftedColumnTypes'
                  value: false
                }
              ]
            }
          }
          {
            name: 'dbo.data_source_table'
            properties: {
              schema: [
                {
                  name: 'PersonID'
                  dataType: 'integer'
                }
                {
                  name: 'Name'
                  dataType: 'string'
                }
                {
                  name: 'LastModifytime'
                  dataType: 'timestamp'
                }
              ]
              dslConnectorProperties: [
                {
                  name: 'schemaName'
                  value: 'dbo'
                }
                {
                  name: 'tableName'
                  value: 'data_source_table'
                }
                {
                  name: 'allowSchemaDrift'
                  value: false
                }
                {
                  name: 'inferDriftedColumnTypes'
                  value: false
                }
                {
                  name: 'defaultToUpsert'
                  value: false
                }
              ]
            }
          }
        ]
      }
    ]
  }
}
```

## microsoft.datafactory/factories/credentials

Credentials_Create
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/credentials@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'ManagedIdentity'
    typeProperties: {
      resourceId: '/subscriptions/12345678-1234-1234-1234-12345678abc/resourcegroups/exampleResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/exampleUami'
    }
  }
}
```

## microsoft.datafactory/factories/dataflows

DataFlows_Create
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/dataflows@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'MappingDataFlow'
    description: 'Sample demo data flow to convert currencies showing usage of union, derive and conditional split transformation.'
    typeProperties: {
      scriptLines: [
        'source(output('
        'PreviousConversionRate as double,'
        'Country as string,'
        'DateTime1 as string,'
        'CurrentConversionRate as double'
        '),'
        'allowSchemaDrift: false,'
        'validateSchema: false) ~> USDCurrency'
        'source(output('
        'PreviousConversionRate as double,'
        'Country as string,'
        'DateTime1 as string,'
        'CurrentConversionRate as double'
        '),'
        'allowSchemaDrift: true,'
        'validateSchema: false) ~> CADSource'
        'USDCurrency, CADSource union(byName: true)~> Union'
        'Union derive(NewCurrencyRate = round(CurrentConversionRate*1.25)) ~> NewCurrencyColumn'
        'NewCurrencyColumn split(Country == \'USD\','
        'Country == \'CAD\',disjoint: false) ~> ConditionalSplit1@(USD, CAD)'
        'ConditionalSplit1@USD sink(saveMode:\'overwrite\' ) ~> USDSink'
        'ConditionalSplit1@CAD sink(saveMode:\'overwrite\' ) ~> CADSink'
      ]
      sinks: [
        {
          name: 'USDSink'
          dataset: {
            type: 'DatasetReference'
            referenceName: 'USDOutput'
          }
        }
        {
          name: 'CADSink'
          dataset: {
            type: 'DatasetReference'
            referenceName: 'CADOutput'
          }
        }
      ]
      sources: [
        {
          name: 'USDCurrency'
          dataset: {
            type: 'DatasetReference'
            referenceName: 'CurrencyDatasetUSD'
          }
        }
        {
          name: 'CADSource'
          dataset: {
            type: 'DatasetReference'
            referenceName: 'CurrencyDatasetCAD'
          }
        }
      ]
    }
  }
}
```

DataFlows_Update
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/dataflows@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'MappingDataFlow'
    description: 'Sample demo data flow to convert currencies showing usage of union, derive and conditional split transformation.'
    typeProperties: {
      scriptLines: [
        'source(output('
        'PreviousConversionRate as double,'
        'Country as string,'
        'DateTime1 as string,'
        'CurrentConversionRate as double'
        '),'
        'allowSchemaDrift: false,'
        'validateSchema: false) ~> USDCurrency'
        'source(output('
        'PreviousConversionRate as double,'
        'Country as string,'
        'DateTime1 as string,'
        'CurrentConversionRate as double'
        '),'
        'allowSchemaDrift: true,'
        'validateSchema: false) ~> CADSource'
        'USDCurrency, CADSource union(byName: true)~> Union'
        'Union derive(NewCurrencyRate = round(CurrentConversionRate*1.25)) ~> NewCurrencyColumn'
        'NewCurrencyColumn split(Country == \'USD\','
        'Country == \'CAD\',disjoint: false) ~> ConditionalSplit1@(USD, CAD)'
        'ConditionalSplit1@USD sink(saveMode:\'overwrite\' ) ~> USDSink'
        'ConditionalSplit1@CAD sink(saveMode:\'overwrite\' ) ~> CADSink'
      ]
      sinks: [
        {
          name: 'USDSink'
          dataset: {
            type: 'DatasetReference'
            referenceName: 'USDOutput'
          }
        }
        {
          name: 'CADSink'
          dataset: {
            type: 'DatasetReference'
            referenceName: 'CADOutput'
          }
        }
      ]
      sources: [
        {
          name: 'USDCurrency'
          dataset: {
            type: 'DatasetReference'
            referenceName: 'CurrencyDatasetUSD'
          }
        }
        {
          name: 'CADSource'
          dataset: {
            type: 'DatasetReference'
            referenceName: 'CurrencyDatasetCAD'
          }
        }
      ]
    }
  }
}
```

## microsoft.datafactory/factories/datasets

Datasets_Create
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/datasets@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'AzureBlob'
    linkedServiceName: {
      type: 'LinkedServiceReference'
      referenceName: 'exampleLinkedService'
    }
    parameters: {
      MyFileName: {
        type: 'String'
      }
      MyFolderPath: {
        type: 'String'
      }
    }
    typeProperties: {
      format: {
        type: 'TextFormat'
      }
      fileName: {
        type: 'Expression'
        value: '@dataset().MyFileName'
      }
      folderPath: {
        type: 'Expression'
        value: '@dataset().MyFolderPath'
      }
    }
  }
}
```

Datasets_Update
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/datasets@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'AzureBlob'
    description: 'Example description'
    linkedServiceName: {
      type: 'LinkedServiceReference'
      referenceName: 'exampleLinkedService'
    }
    parameters: {
      MyFileName: {
        type: 'String'
      }
      MyFolderPath: {
        type: 'String'
      }
    }
    typeProperties: {
      format: {
        type: 'TextFormat'
      }
      fileName: {
        type: 'Expression'
        value: '@dataset().MyFileName'
      }
      folderPath: {
        type: 'Expression'
        value: '@dataset().MyFolderPath'
      }
    }
  }
}
```

## microsoft.datafactory/factories/globalparameters

GlobalParameters_Create
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/globalParameters@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    waitTime: {
      type: 'Int'
      value: 5
    }
  }
}
```

GlobalParameters_Update
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/globalParameters@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    waitTime: {
      type: 'Int'
      value: 5
    }
  }
}
```

## microsoft.datafactory/factories/integrationruntimes

IntegrationRuntimes_Create
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/integrationRuntimes@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'SelfHosted'
    description: 'A selfhosted integration runtime'
  }
}
```

## microsoft.datafactory/factories/linkedservices

LinkedServices_Create
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/linkedservices@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'AzureStorage'
    typeProperties: {
      connectionString: {
        type: 'SecureString'
        value: 'DefaultEndpointsProtocol=https;AccountName=examplestorageaccount;AccountKey=<storage key>'
      }
    }
  }
}
```

LinkedServices_Update
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/linkedservices@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'AzureStorage'
    description: 'Example description'
    typeProperties: {
      connectionString: {
        type: 'SecureString'
        value: 'DefaultEndpointsProtocol=https;AccountName=examplestorageaccount;AccountKey=<storage key>'
      }
    }
  }
}
```

## microsoft.datafactory/factories/managedvirtualnetworks

ManagedVirtualNetworks_Create
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/managedVirtualNetworks@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```

## microsoft.datafactory/factories/managedvirtualnetworks/managedprivateendpoints

ManagedVirtualNetworks_Create
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fqdns: [
    ]
    groupId: 'blob'
    privateLinkResourceId: '/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.Storage/storageAccounts/exampleBlobStorage'
  }
}
```

## microsoft.datafactory/factories/pipelines

Pipelines_Create
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/pipelines@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    activities: [
      {
        name: 'ExampleForeachActivity'
        type: 'ForEach'
        typeProperties: {
          activities: [
            {
              name: 'ExampleCopyActivity'
              type: 'Copy'
              inputs: [
                {
                  type: 'DatasetReference'
                  parameters: {
                    MyFileName: 'examplecontainer.csv'
                    MyFolderPath: 'examplecontainer'
                  }
                  referenceName: 'exampleDataset'
                }
              ]
              outputs: [
                {
                  type: 'DatasetReference'
                  parameters: {
                    MyFileName: {
                      type: 'Expression'
                      value: '@item()'
                    }
                    MyFolderPath: 'examplecontainer'
                  }
                  referenceName: 'exampleDataset'
                }
              ]
              typeProperties: {
                dataIntegrationUnits: 32
                sink: {
                  type: 'BlobSink'
                }
                source: {
                  type: 'BlobSource'
                }
              }
            }
          ]
          isSequential: true
          items: {
            type: 'Expression'
            value: '@pipeline().parameters.OutputBlobNameList'
          }
        }
      }
    ]
    parameters: {
      JobId: {
        type: 'String'
      }
      OutputBlobNameList: {
        type: 'Array'
      }
    }
    policy: {
      elapsedTimeMetric: {
        duration: '0.00:10:00'
      }
    }
    runDimensions: {
      JobId: {
        type: 'Expression'
        value: '@pipeline().parameters.JobId'
      }
    }
    variables: {
      TestVariableArray: {
        type: 'Array'
      }
    }
  }
}
```

Pipelines_Update
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/pipelines@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example description'
    activities: [
      {
        name: 'ExampleForeachActivity'
        type: 'ForEach'
        typeProperties: {
          activities: [
            {
              name: 'ExampleCopyActivity'
              type: 'Copy'
              inputs: [
                {
                  type: 'DatasetReference'
                  parameters: {
                    MyFileName: 'examplecontainer.csv'
                    MyFolderPath: 'examplecontainer'
                  }
                  referenceName: 'exampleDataset'
                }
              ]
              outputs: [
                {
                  type: 'DatasetReference'
                  parameters: {
                    MyFileName: {
                      type: 'Expression'
                      value: '@item()'
                    }
                    MyFolderPath: 'examplecontainer'
                  }
                  referenceName: 'exampleDataset'
                }
              ]
              typeProperties: {
                dataIntegrationUnits: 32
                sink: {
                  type: 'BlobSink'
                }
                source: {
                  type: 'BlobSource'
                }
              }
            }
          ]
          isSequential: true
          items: {
            type: 'Expression'
            value: '@pipeline().parameters.OutputBlobNameList'
          }
        }
      }
    ]
    parameters: {
      OutputBlobNameList: {
        type: 'Array'
      }
    }
    policy: {
      elapsedTimeMetric: {
        duration: '0.00:10:00'
      }
    }
  }
}
```

## microsoft.datafactory/factories/privateendpointconnections

Approves or rejects a private endpoint connection for a factory.
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/privateEndpointConnections@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateEndpoint: {
      id: '/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.DataFactory/factories/exampleFactoryName/privateEndpoints/myPrivateEndpoint'
    }
    privateLinkServiceConnectionState: {
      description: 'Approved by admin.'
      actionsRequired: ''
      status: 'Approved'
    }
  }
}
```

## microsoft.datafactory/factories/triggers

Triggers_Create
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/triggers@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'ScheduleTrigger'
    pipelines: [
      {
        parameters: {
          OutputBlobNameList: [
            'exampleoutput.csv'
          ]
        }
        pipelineReference: {
          type: 'PipelineReference'
          referenceName: 'examplePipeline'
        }
      }
    ]
    typeProperties: {
      recurrence: {
        endTime: '2018-06-16T00:55:13.8441801Z'
        frequency: 'Minute'
        interval: 4
        startTime: '2018-06-16T00:39:13.8441801Z'
        timeZone: 'UTC'
      }
    }
  }
}
```

Triggers_Update
```bicep
resource exampleResource 'Microsoft.DataFactory/factories/triggers@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'ScheduleTrigger'
    description: 'Example description'
    pipelines: [
      {
        parameters: {
          OutputBlobNameList: [
            'exampleoutput.csv'
          ]
        }
        pipelineReference: {
          type: 'PipelineReference'
          referenceName: 'examplePipeline'
        }
      }
    ]
    typeProperties: {
      recurrence: {
        endTime: '2018-06-16T00:55:14.905167Z'
        frequency: 'Minute'
        interval: 4
        startTime: '2018-06-16T00:39:14.905167Z'
        timeZone: 'UTC'
      }
    }
  }
}
```
