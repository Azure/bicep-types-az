# Microsoft.Security @ 2020-01-01-preview

## Resource Microsoft.Security/connectors@2020-01-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectorSettingProperties](#connectorsettingproperties): Describes properties of a connector setting
* **type**: 'Microsoft.Security/connectors' (ReadOnly, DeployTimeConstant): The resource type

## ConnectorSettingProperties
### Properties
* **authenticationDetails**: [AuthenticationDetailsProperties](#authenticationdetailsproperties): Settings for cloud authentication management
* **hybridComputeSettings**: [HybridComputeSettingsProperties](#hybridcomputesettingsproperties): Settings for hybrid compute management

## AuthenticationDetailsProperties
* **Discriminator**: authenticationType
### Base Properties
* **authenticationProvisioningState**: 'Expired' | 'IncorrectPolicy' | 'Invalid' | 'Valid' (ReadOnly): State of the multi-cloud connector. Possible values include: 'Valid', 'Invalid', 'Expired', 'IncorrectPolicy'
* **grantedPermissions**: 'AWS::AmazonSSMAutomationRole' | 'AWS::AWSSecurityHubReadOnlyAccess' | 'AWS::SecurityAudit' | 'GCP::Security Center Admin Viewer'[] (ReadOnly): The permissions detected in the cloud account.
### awsAssumeRole
#### Properties
* **accountId**: string (ReadOnly): The ID of the cloud account
* **authenticationType**: 'awsAssumeRole' (Required): AWS cloud account connector based assume role, the role enables delegating access to your AWS resources. The role is composed of role Amazon Resource Name (ARN) and external ID. For more details, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html">Creating a Role to Delegate Permissions to an IAM User (write only)</a>
* **awsAssumeRoleArn**: string (Required): Assumed role ID is an identifier that you can use to create temporary security credentials.
* **awsExternalId**: string (Required): A unique identifier that is required when you assume a role in another account.

### awsCreds
#### Properties
* **accountId**: string (ReadOnly): The ID of the cloud account
* **authenticationType**: 'awsCreds' (Required): AWS cloud account connector based credentials, the credentials is composed of access key ID and secret key, for more details, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html">Creating an IAM User in Your AWS Account (write only)</a>
* **awsAccessKeyId**: string (Required): Public key element of the AWS credential object (write only)
* **awsSecretAccessKey**: string (Required): Secret key element of the AWS credential object (write only)

### gcpCredentials
#### Properties
* **authenticationType**: 'gcpCredentials' (Required): GCP cloud account connector based service to service credentials, the credentials are composed of the organization ID and a JSON API key (write only)
* **authProviderX509CertUrl**: string (Required): Auth provider x509 certificate URL field of the API key (write only)
* **authUri**: string (Required): Auth URI field of the API key (write only)
* **clientEmail**: string (Required): Client email field of the API key (write only)
* **clientId**: string (Required): Client ID field of the API key (write only)
* **clientX509CertUrl**: string (Required): Client x509 certificate URL field of the API key (write only)
* **organizationId**: string (Required): The organization ID of the GCP cloud account
* **privateKey**: string (Required): Private key field of the API key (write only)
* **privateKeyId**: string (Required): Private key ID field of the API key (write only)
* **projectId**: string (Required): Project ID field of the API key (write only)
* **tokenUri**: string (Required): Token URI field of the API key (write only)
* **type**: string (Required): Type field of the API key (write only)


## awsAssumeRole
### Properties
* **accountId**: string (ReadOnly): The ID of the cloud account
* **authenticationType**: 'awsAssumeRole' (Required): AWS cloud account connector based assume role, the role enables delegating access to your AWS resources. The role is composed of role Amazon Resource Name (ARN) and external ID. For more details, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html">Creating a Role to Delegate Permissions to an IAM User (write only)</a>
* **awsAssumeRoleArn**: string (Required): Assumed role ID is an identifier that you can use to create temporary security credentials.
* **awsExternalId**: string (Required): A unique identifier that is required when you assume a role in another account.

## awsCreds
### Properties
* **accountId**: string (ReadOnly): The ID of the cloud account
* **authenticationType**: 'awsCreds' (Required): AWS cloud account connector based credentials, the credentials is composed of access key ID and secret key, for more details, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html">Creating an IAM User in Your AWS Account (write only)</a>
* **awsAccessKeyId**: string (Required): Public key element of the AWS credential object (write only)
* **awsSecretAccessKey**: string (Required): Secret key element of the AWS credential object (write only)

## gcpCredentials
### Properties
* **authenticationType**: 'gcpCredentials' (Required): GCP cloud account connector based service to service credentials, the credentials are composed of the organization ID and a JSON API key (write only)
* **authProviderX509CertUrl**: string (Required): Auth provider x509 certificate URL field of the API key (write only)
* **authUri**: string (Required): Auth URI field of the API key (write only)
* **clientEmail**: string (Required): Client email field of the API key (write only)
* **clientId**: string (Required): Client ID field of the API key (write only)
* **clientX509CertUrl**: string (Required): Client x509 certificate URL field of the API key (write only)
* **organizationId**: string (Required): The organization ID of the GCP cloud account
* **privateKey**: string (Required): Private key field of the API key (write only)
* **privateKeyId**: string (Required): Private key ID field of the API key (write only)
* **projectId**: string (Required): Project ID field of the API key (write only)
* **tokenUri**: string (Required): Token URI field of the API key (write only)
* **type**: string (Required): Type field of the API key (write only)

## HybridComputeSettingsProperties
### Properties
* **autoProvision**: 'Off' | 'On' (Required): Whether or not to automatically install Azure Arc (hybrid compute) agents on machines. Possible values include: 'On', 'Off'
* **hybridComputeProvisioningState**: 'Expired' | 'Invalid' | 'Valid' (ReadOnly): State of the service principal and its secret. Possible values include: 'Valid', 'Invalid', 'Expired'
* **proxyServer**: [ProxyServerProperties](#proxyserverproperties): For a non-Azure machine that is not connected directly to the internet, specify a proxy server that the non-Azure machine can use.
* **region**: string: The location where the metadata of machines will be stored
* **resourceGroupName**: string: The name of the resource group where Arc (Hybrid Compute) connectors are connected.
* **servicePrincipal**: [ServicePrincipalProperties](#serviceprincipalproperties): Details of the service principal.

## ProxyServerProperties
### Properties
* **ip**: string: Proxy server IP
* **port**: string: Proxy server port

## ServicePrincipalProperties
### Properties
* **applicationId**: string: Application ID of service principal.
* **secret**: string: A secret string that the application uses to prove its identity, also can be referred to as application password (write only).

