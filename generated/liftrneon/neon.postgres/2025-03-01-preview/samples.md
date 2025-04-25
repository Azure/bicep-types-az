# Neon.Postgres
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## neon.postgres/organizations

Organizations_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Neon.Postgres/organizations@2025-03-01-preview' = {
  name: 'example'
  location: 'mxlsmperqlxtaalsunpleuta'
  properties: {
    companyDetails: {
      businessPhone: 'nshcjawuxfzplbzeyjbd'
      companyName: 'bdplqyy'
      country: 'wdtegxupoepgebaudbdi'
      domain: 'jxnqzzdhtguhtuouqhx'
      numberOfEmployees: 15
      officeAddress: 'aqxujkkctyhsefilbcvlo'
    }
    marketplaceDetails: {
      offerDetails: {
        offerId: 'mg'
        planId: 'ddjcvdyflljaoyfvdnunqgecfhtz'
        planName: 'uciiaiirecatgizjitryrfcxlsrll'
        publisherId: 'wxfrcxidpruciyy'
        termId: 'spwiydyzbdi'
        termUnit: 'vljoeixsyfqnilhy'
      }
      subscriptionId: 'olwmihml'
      subscriptionStatus: 'PendingFulfillmentStart'
    }
    partnerOrganizationProperties: {
      organizationId: 'yneivfklykgwuqnfzsphgtgbvqew'
      organizationName: 'test-entity'
      singleSignOnProperties: {
        aadDomains: [
          'xwcoekddrjlvwogssbfrv'
        ]
        enterpriseAppId: 'jstu'
        singleSignOnState: 'Initial'
        singleSignOnUrl: 'rduuuystfxtrjaxjbrslrsqxajtou'
      }
    }
    projectProperties: {
      attributes: [
        {
          name: 'ioyjfywmt'
          value: 'sfbpcr'
        }
      ]
      branch: {
        attributes: [
          {
            name: 'ioyjfywmt'
            value: 'sfbpcr'
          }
        ]
        databaseName: 'xargveemydmqrdtjcdhf'
        databases: [
          {
            attributes: [
              {
                name: 'ioyjfywmt'
                value: 'sfbpcr'
              }
            ]
            branchId: 'zoaopvqitcgjdmsllgzdbrb'
            entityName: 'test-entity'
            ownerName: 'cutdyjupbqghhxfkmsslzvmjwa'
          }
        ]
        endpoints: [
          {
            attributes: [
              {
                name: 'ioyjfywmt'
                value: 'sfbpcr'
              }
            ]
            branchId: 'oejenjawxexhuotsxodbl'
            endpointType: 'read_only'
            entityName: 'test-entity'
            projectId: 'fhfdyuiaaftqormerayks'
          }
        ]
        entityName: 'test-entity'
        parentId: 'test-id'
        projectId: 'vtdzaxdiwnzvq'
        roleName: 'imfhfgfpamibgcgibgxor'
        roles: [
          {
            attributes: [
              {
                name: 'ioyjfywmt'
                value: 'sfbpcr'
              }
            ]
            branchId: 'iecxepxhnzhjzeiguki'
            entityName: 'test-entity'
            isSuperUser: true
            permissions: [
              'ddwmkyztotgspcbetfokelddpmq'
            ]
          }
        ]
      }
      databases: [
        {
          attributes: [
            {
              name: 'ioyjfywmt'
              value: 'sfbpcr'
            }
          ]
          branchId: 'zoaopvqitcgjdmsllgzdbrb'
          entityName: 'test-entity'
          ownerName: 'cutdyjupbqghhxfkmsslzvmjwa'
        }
      ]
      endpoints: [
        {
          attributes: [
            {
              name: 'ioyjfywmt'
              value: 'sfbpcr'
            }
          ]
          branchId: 'oejenjawxexhuotsxodbl'
          endpointType: 'read_only'
          entityName: 'test-entity'
          projectId: 'fhfdyuiaaftqormerayks'
        }
      ]
      entityName: 'test-entity'
      pgVersion: 1
      regionId: 'cpnssldzuftdqgjdaqzjayqujpb'
      roles: [
        {
          attributes: [
            {
              name: 'ioyjfywmt'
              value: 'sfbpcr'
            }
          ]
          branchId: 'iecxepxhnzhjzeiguki'
          entityName: 'test-entity'
          isSuperUser: true
          permissions: [
            'ddwmkyztotgspcbetfokelddpmq'
          ]
        }
      ]
      storage: 3
    }
    userDetails: {
      emailAddress: 'test@microsoft.com'
      firstName: 'zoqvvuxxyldsfswe'
      lastName: 'rzvayulpqh'
      phoneNumber: 'lxxghuhwknsivwcrkug'
      upn: 'nbh'
    }
  }
  tags: {
    key9495: 'qyrozqzrhquczmaffmczoxupeqrj'
  }
}
```

## neon.postgres/organizations/projects

Projects_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Neon.Postgres/organizations/projects@2025-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    attributes: [
      {
        name: 'ioyjfywmt'
        value: 'sfbpcr'
      }
    ]
    branch: {
      attributes: [
        {
          name: 'ioyjfywmt'
          value: 'sfbpcr'
        }
      ]
      databaseName: 'xargveemydmqrdtjcdhf'
      databases: [
        {
          attributes: [
            {
              name: 'ioyjfywmt'
              value: 'sfbpcr'
            }
          ]
          branchId: 'zoaopvqitcgjdmsllgzdbrb'
          entityName: 'test-name'
          ownerName: 'cutdyjupbqghhxfkmsslzvmjwa'
        }
      ]
      endpoints: [
        {
          attributes: [
            {
              name: 'ioyjfywmt'
              value: 'sfbpcr'
            }
          ]
          branchId: 'oejenjawxexhuotsxodbl'
          endpointType: 'read_only'
          entityName: 'test-name'
          projectId: 'fhfdyuiaaftqormerayks'
        }
      ]
      entityName: 'test-name'
      parentId: 'test-id'
      projectId: 'vtdzaxdiwnzvq'
      roleName: 'imfhfgfpamibgcgibgxor'
      roles: [
        {
          attributes: [
            {
              name: 'ioyjfywmt'
              value: 'sfbpcr'
            }
          ]
          branchId: 'iecxepxhnzhjzeiguki'
          entityName: 'test-name'
          isSuperUser: true
          permissions: [
            'ddwmkyztotgspcbetfokelddpmq'
          ]
        }
      ]
    }
    databases: [
      {
        attributes: [
          {
            name: 'ioyjfywmt'
            value: 'sfbpcr'
          }
        ]
        branchId: 'zoaopvqitcgjdmsllgzdbrb'
        entityName: 'test-name'
        ownerName: 'cutdyjupbqghhxfkmsslzvmjwa'
      }
    ]
    defaultEndpointSettings: {
      autoscalingLimitMaxCu: 4
      autoscalingLimitMinCu: 0.25
    }
    endpoints: [
      {
        attributes: [
          {
            name: 'ioyjfywmt'
            value: 'sfbpcr'
          }
        ]
        branchId: 'oejenjawxexhuotsxodbl'
        endpointType: 'read_only'
        entityName: 'test-name'
        projectId: 'fhfdyuiaaftqormerayks'
      }
    ]
    entityName: 'test-name'
    historyRetention: 3600
    pgVersion: 1
    regionId: 'cpnssldzuftdqgjdaqzjayqujpb'
    roles: [
      {
        attributes: [
          {
            name: 'ioyjfywmt'
            value: 'sfbpcr'
          }
        ]
        branchId: 'iecxepxhnzhjzeiguki'
        entityName: 'test-name'
        isSuperUser: true
        permissions: [
          'ddwmkyztotgspcbetfokelddpmq'
        ]
      }
    ]
    storage: 3
  }
}
```

## neon.postgres/organizations/projects/branches

Branches_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Neon.Postgres/organizations/projects/branches@2025-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    attributes: [
      {
        name: 'ioyjfywmt'
        value: 'sfbpcr'
      }
    ]
    databaseName: 'xargveemydmqrdtjcdhf'
    databases: [
      {
        attributes: [
          {
            name: 'ioyjfywmt'
            value: 'sfbpcr'
          }
        ]
        branchId: 'zoaopvqitcgjdmsllgzdbrb'
        entityName: 'test-entity'
        ownerName: 'cutdyjupbqghhxfkmsslzvmjwa'
      }
    ]
    endpoints: [
      {
        attributes: [
          {
            name: 'ioyjfywmt'
            value: 'sfbpcr'
          }
        ]
        branchId: 'oejenjawxexhuotsxodbl'
        endpointType: 'read_only'
        entityName: 'test-entity'
        projectId: 'fhfdyuiaaftqormerayks'
      }
    ]
    entityName: 'test-entity'
    parentId: 'test-id'
    projectId: 'vtdzaxdiwnzvq'
    roleName: 'imfhfgfpamibgcgibgxor'
    roles: [
      {
        attributes: [
          {
            name: 'ioyjfywmt'
            value: 'sfbpcr'
          }
        ]
        branchId: 'iecxepxhnzhjzeiguki'
        entityName: 'test-entity'
        isSuperUser: true
        permissions: [
          'ddwmkyztotgspcbetfokelddpmq'
        ]
      }
    ]
  }
}
```

## neon.postgres/organizations/projects/branches/computes

Computes_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Neon.Postgres/organizations/projects/branches/computes@2025-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    attributes: [
      {
        name: 'ioyjfywmt'
        value: 'sfbpcr'
      }
    ]
    cpuCores: 26
    entityName: 'test-name'
    memory: 4
    region: 'zgwbivhuqnyyy'
    status: 'lvivnemgmdnwshhpfimppxmmpkv'
  }
}
```

## neon.postgres/organizations/projects/branches/endpoints

Endpoints_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Neon.Postgres/organizations/projects/branches/endpoints@2025-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    attributes: [
      {
        name: 'ioyjfywmt'
        value: 'sfbpcr'
      }
    ]
    branchId: 'oejenjawxexhuotsxodbl'
    endpointType: 'read_only'
    entityName: 'test-name'
    projectId: 'fhfdyuiaaftqormerayks'
  }
}
```

## neon.postgres/organizations/projects/branches/neondatabases

NeonDatabases_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Neon.Postgres/organizations/projects/branches/neonDatabases@2025-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    attributes: [
      {
        name: 'ioyjfywmt'
        value: 'sfbpcr'
      }
    ]
    branchId: 'zoaopvqitcgjdmsllgzdbrb'
    entityName: 'test-name'
    ownerName: 'cutdyjupbqghhxfkmsslzvmjwa'
  }
}
```

## neon.postgres/organizations/projects/branches/neonroles

NeonRoles_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Neon.Postgres/organizations/projects/branches/neonRoles@2025-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    attributes: [
      {
        name: 'ioyjfywmt'
        value: 'sfbpcr'
      }
    ]
    branchId: 'iecxepxhnzhjzeiguki'
    entityName: 'test-name'
    isSuperUser: true
    permissions: [
      'ddwmkyztotgspcbetfokelddpmq'
    ]
  }
}
```
