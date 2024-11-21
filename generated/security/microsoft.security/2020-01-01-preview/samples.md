# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/connectors

AwsAssumeRole - Create a cloud account connector for a subscription
```bicep
resource exampleResource 'Microsoft.Security/connectors@2020-01-01-preview' = {
  name: 'example'
  properties: {
    authenticationDetails: {
      authenticationType: 'awsAssumeRole'
      awsAssumeRoleArn: 'arn:aws:iam::81231569658:role/AscConnector'
      awsExternalId: '20ff7fc3-e762-44dd-bd96-b71116dcdc23'
    }
    hybridComputeSettings: {
      autoProvision: 'On'
      proxyServer: {
        ip: '167.220.197.140'
        port: '34'
      }
      region: 'West US 2'
      resourceGroupName: 'AwsConnectorRG'
      servicePrincipal: {
        applicationId: 'ad9bcd79-be9c-45ab-abd8-80ca1654a7d1'
        secret: '<secret>'
      }
    }
  }
}
```

AwsCred - Create a cloud account connector for a subscription
```bicep
resource exampleResource 'Microsoft.Security/connectors@2020-01-01-preview' = {
  name: 'example'
  properties: {
    authenticationDetails: {
      authenticationType: 'awsCreds'
      awsAccessKeyId: '<awsAccessKeyId>'
      awsSecretAccessKey: '<awsSecretAccessKey>'
    }
    hybridComputeSettings: {
      autoProvision: 'On'
      proxyServer: {
        ip: '167.220.197.140'
        port: '34'
      }
      region: 'West US 2'
      resourceGroupName: 'AwsConnectorRG'
      servicePrincipal: {
        applicationId: 'ad9bcd79-be9c-45ab-abd8-80ca1654a7d1'
        secret: '<secret>'
      }
    }
  }
}
```

gcpCredentials - Create a cloud account connector for a subscription
```bicep
resource exampleResource 'Microsoft.Security/connectors@2020-01-01-preview' = {
  name: 'example'
  properties: {
    authenticationDetails: {
      type: 'service_account'
      authProviderX509CertUrl: 'https://www.googleapis.com/oauth2/v1/certs'
      authUri: 'https://accounts.google.com/o/oauth2/auth'
      authenticationType: 'gcpCredentials'
      clientEmail: 'asc-135@asc-project-1234.iam.gserviceaccount.com'
      clientId: '105889053725632919854'
      clientX509CertUrl: 'https://www.googleapis.com/robot/v1/metadata/x509/asc-135%40asc-project-1234.iam.gserviceaccount.com'
      organizationId: 'AscDemoOrg'
      privateKey: '******'
      privateKeyId: '6efg587hra2568as34d22326b044cc20dc2af'
      projectId: 'asc-project-1234'
      tokenUri: 'https://oauth2.googleapis.com/token'
    }
    hybridComputeSettings: {
      autoProvision: 'Off'
    }
  }
}
```

## microsoft.security/securitycontacts

Create security contact data
```bicep
resource exampleResource 'Microsoft.Security/securityContacts@2020-01-01-preview' = {
  name: 'example'
  properties: {
    alertNotifications: {
      minimalSeverity: 'Low'
      state: 'On'
    }
    emails: 'john@contoso.com;jane@contoso.com'
    notificationsByRole: {
      roles: [
        'Owner'
      ]
      state: 'On'
    }
    phone: '(214)275-4038'
  }
}
```
