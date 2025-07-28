# Neon.Postgres
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## neon.postgres/organizations

Organizations_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Neon.Postgres/organizations@2025-06-23-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    companyDetails: {
      businessPhone: '555-987-6543'
      companyName: 'Contoso Ltd'
      country: 'United States'
      domain: 'contoso.com'
      numberOfEmployees: 30
      officeAddress: '123 Main Street, Seattle, WA 98101'
    }
    marketplaceDetails: {
      offerDetails: {
        offerId: 'neon-postgres'
        planId: 'standard'
        planName: 'Standard'
        publisherId: 'neon-tech'
        termId: 'hjk5'
        termUnit: 'Monthly'
      }
      subscriptionId: 'DFF26289-4E9C-46D0-890E-F8BE27BDA8C2'
      subscriptionStatus: 'PendingFulfillmentStart'
    }
    partnerOrganizationProperties: {
      organizationId: '12a34b56-7c89-0d12-e34f-g56h7i8j9k0l'
      organizationName: 'Contoso'
      singleSignOnProperties: {
        aadDomains: [
          'contoso.com'
        ]
        enterpriseAppId: '98f76e54-3d21-0c9b-a87f-6e5d4c3b2a10'
        singleSignOnState: 'Initial'
        singleSignOnUrl: 'https://login.microsoftonline.com/'
      }
    }
    projectProperties: {
      attributes: [
        {
          name: 'environment'
          value: 'dev'
        }
      ]
      branch: {
        attributes: [
          {
            name: 'environment'
            value: 'dev'
          }
        ]
        databases: [
          {
            attributes: [
              {
                name: 'environment'
                value: 'dev'
              }
            ]
            branchId: 'branch-123'
            entityName: 'appdb'
            ownerName: 'postgres'
          }
        ]
        endpoints: [
          {
            attributes: [
              {
                name: 'environment'
                value: 'dev'
              }
            ]
            branchId: 'branch-123'
            endpointType: 'read_only'
            entityName: 'read-endpoint'
            projectId: 'project-123'
            size: {
              autoscalingLimitMaxCu: 14
              autoscalingLimitMinCu: 3
            }
          }
        ]
        entityName: 'feature'
        parentId: 'main-branch'
        projectId: 'project-123'
        roles: [
          {
            attributes: [
              {
                name: 'environment'
                value: 'dev'
              }
            ]
            branchId: 'branch-123'
            entityName: 'read_only_role'
            isSuperUser: true
            permissions: [
              'SELECT'
            ]
          }
        ]
      }
      databases: [
        {
          attributes: [
            {
              name: 'environment'
              value: 'dev'
            }
          ]
          branchId: 'branch-123'
          entityName: 'maindb'
          ownerName: 'postgres'
        }
      ]
      defaultEndpointSettings: {
        autoscalingLimitMaxCu: 28
        autoscalingLimitMinCu: 3
      }
      endpoints: [
        {
          attributes: [
            {
              name: 'environment'
              value: 'dev'
            }
          ]
          branchId: 'branch-123'
          endpointType: 'read_only'
          entityName: 'primary-endpoint'
          projectId: 'project-123'
          size: {
            autoscalingLimitMaxCu: 14
            autoscalingLimitMinCu: 3
          }
        }
      ]
      entityName: 'myProject'
      historyRetention: 3
      pgVersion: 14
      regionId: 'westus'
      roles: [
        {
          attributes: [
            {
              name: 'environment'
              value: 'dev'
            }
          ]
          branchId: 'branch-123'
          entityName: 'admin_role'
          isSuperUser: true
          permissions: [
            'ALL'
          ]
        }
      ]
      storage: 22
    }
    userDetails: {
      emailAddress: 'john.doe@example.com'
      firstName: 'John'
      lastName: 'Doe'
      phoneNumber: '555-123-4567'
      upn: 'john.doe@example.com'
    }
  }
  tags: {
    environment: 'development'
  }
}
```

## neon.postgres/organizations/projects

Projects_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Neon.Postgres/organizations/projects@2025-06-23-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    attributes: [
      {
        name: 'environment'
        value: 'development'
      }
    ]
    branch: {
      attributes: [
        {
          name: 'environment'
          value: 'development'
        }
      ]
      databases: [
        {
          attributes: [
            {
              name: 'environment'
              value: 'development'
            }
          ]
          branchId: 'branch-123'
          entityName: 'appdb'
          ownerName: 'postgres'
        }
      ]
      endpoints: [
        {
          attributes: [
            {
              name: 'environment'
              value: 'development'
            }
          ]
          branchId: 'branch-123'
          endpointType: 'read_write'
          entityName: 'primary-endpoint'
          projectId: 'project-123'
          size: {
            autoscalingLimitMaxCu: 4
            autoscalingLimitMinCu: 1
          }
        }
      ]
      entityName: 'main'
      parentId: 'main-branch'
      projectId: 'project-123'
      roles: [
        {
          attributes: [
            {
              name: 'environment'
              value: 'development'
            }
          ]
          branchId: 'branch-123'
          entityName: 'read_only_role'
          isSuperUser: true
          permissions: [
            'SELECT'
          ]
        }
      ]
    }
    databases: [
      {
        attributes: [
          {
            name: 'environment'
            value: 'development'
          }
        ]
        branchId: 'branch-123'
        entityName: 'postgres'
        ownerName: 'postgres'
      }
    ]
    defaultEndpointSettings: {
      autoscalingLimitMaxCu: 28
      autoscalingLimitMinCu: 3
    }
    endpoints: [
      {
        attributes: [
          {
            name: 'environment'
            value: 'development'
          }
        ]
        branchId: 'branch-123'
        endpointType: 'read_only'
        entityName: 'readonly-endpoint'
        projectId: 'project-123'
        size: {
          autoscalingLimitMaxCu: 2
          autoscalingLimitMinCu: 1
        }
      }
    ]
    entityName: 'myProject'
    historyRetention: 3
    pgVersion: 14
    regionId: 'westus'
    roles: [
      {
        attributes: [
          {
            name: 'environment'
            value: 'development'
          }
        ]
        branchId: 'branch-123'
        entityName: 'admin_role'
        isSuperUser: true
        permissions: [
          'ALL'
        ]
      }
    ]
    storage: 22
  }
}
```

## neon.postgres/organizations/projects/branches

Branches_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Neon.Postgres/organizations/projects/branches@2025-06-23-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    attributes: [
      {
        name: 'on'
        value: 'qzp'
      }
    ]
    databaseName: 'zxqetv'
    databases: [
      {
        attributes: [
          {
            name: 'on'
            value: 'qzp'
          }
        ]
        branchId: 'sllrohrmwkgzre'
        entityName: 'MainDatabase'
        ownerName: 'rjpysakvuicrlwvzcbmp'
      }
    ]
    endpoints: [
      {
        attributes: [
          {
            name: 'on'
            value: 'qzp'
          }
        ]
        branchId: 'blclbeuzvywzagbuvdo'
        endpointType: 'read_only'
        entityName: 'PrimaryEndpoint'
        projectId: 'vwwhykqyr'
        size: {
          autoscalingLimitMaxCu: 14
          autoscalingLimitMinCu: 3
        }
      }
    ]
    entityName: 'FeatureBranch'
    parentId: 'parent-123abc'
    projectId: 'cxhihpayn'
    roleName: 'lwlafskrxvggwnfu'
    roles: [
      {
        attributes: [
          {
            name: 'on'
            value: 'qzp'
          }
        ]
        branchId: 'tnmwjbftrvfpepgeytoeqsyhyz'
        entityName: 'AdminRole'
        isSuperUser: true
        permissions: [
          'cgubrzxkomlxoqdua'
        ]
      }
    ]
  }
}
```

## neon.postgres/organizations/projects/branches/endpoints

Endpoints_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Neon.Postgres/organizations/projects/branches/endpoints@2025-06-23-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    attributes: [
      {
        name: 'on'
        value: 'qzp'
      }
    ]
    branchId: 'blclbeuzvywzagbuvdo'
    endpointType: 'read_only'
    entityName: 'PrimaryEndpoint'
    projectId: 'vwwhykqyr'
    size: {
      autoscalingLimitMaxCu: 14
      autoscalingLimitMinCu: 3
    }
  }
}
```

## neon.postgres/organizations/projects/branches/neondatabases

NeonDatabases_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Neon.Postgres/organizations/projects/branches/neonDatabases@2025-06-23-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    attributes: [
      {
        name: 'on'
        value: 'qzp'
      }
    ]
    branchId: 'sllrohrmwkgzre'
    entityName: 'MainDatabase'
    ownerName: 'rjpysakvuicrlwvzcbmp'
  }
}
```

## neon.postgres/organizations/projects/branches/neonroles

NeonRoles_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Neon.Postgres/organizations/projects/branches/neonRoles@2025-06-23-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    attributes: [
      {
        name: 'on'
        value: 'qzp'
      }
    ]
    branchId: 'tnmwjbftrvfpepgeytoeqsyhyz'
    entityName: 'PostgresReadOnlyRole'
    isSuperUser: true
    permissions: [
      'cgubrzxkomlxoqdua'
    ]
  }
}
```
