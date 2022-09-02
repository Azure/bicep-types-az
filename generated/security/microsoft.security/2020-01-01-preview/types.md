# Microsoft.Security @ 2020-01-01-preview

## Resource Microsoft.Security/connectors@2020-01-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectorSettingProperties](#connectorsettingproperties): Connector setting data
* **type**: 'Microsoft.Security/connectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/secureScores@2020-01-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecureScoreItemProperties](#securescoreitemproperties) (ReadOnly): Secure score item
* **type**: 'Microsoft.Security/secureScores' (ReadOnly, DeployTimeConstant): The resource type

## AuthenticationDetailsProperties
* **Discriminator**: authenticationType

### Base Properties
* **authenticationProvisioningState**: 'Expired' | 'IncorrectPolicy' | 'Invalid' | 'Valid' | string (ReadOnly): State of the multi-cloud connector
* **grantedPermissions**: 'AWS::AWSSecurityHubReadOnlyAccess' | 'AWS::AmazonSSMAutomationRole' | 'AWS::SecurityAudit' | 'GCP::Security Center Admin Viewer' | string[] (ReadOnly): The permissions detected in the cloud account.

### AwAssumeRoleAuthenticationDetailsProperties
#### Properties
* **accountId**: string (ReadOnly): The ID of the cloud account
* **authenticationType**: 'awsAssumeRole' (Required): Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials.
* **awsAssumeRoleArn**: string (Required): Assumed role ID is an identifier that you can use to create temporary security credentials.
* **awsExternalId**: string (Required): A unique identifier that is required when you assume a role in another account.

### AwsCredsAuthenticationDetailsProperties
#### Properties
* **accountId**: string (ReadOnly): The ID of the cloud account
* **authenticationType**: 'awsCreds' (Required): Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials.
* **awsAccessKeyId**: string (Required): Public key element of the AWS credential object (write only)
* **awsSecretAccessKey**: string (Required): Secret key element of the AWS credential object (write only)

### GcpCredentialsDetailsProperties
#### Properties
* **authenticationType**: 'gcpCredentials' (Required): Connect to your cloud account, for AWS use either account credentials or role-based authentication. For GCP use account organization credentials.
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


## ConnectorSettingProperties
### Properties
* **authenticationDetails**: [AuthenticationDetailsProperties](#authenticationdetailsproperties): Settings for authentication management, these settings are relevant only for the cloud connector.
* **hybridComputeSettings**: [HybridComputeSettingsProperties](#hybridcomputesettingsproperties): Settings for hybrid compute management. These settings are relevant only for Arc autoProvision (Hybrid Compute).

## HybridComputeSettingsProperties
### Properties
* **autoProvision**: 'Off' | 'On' | string (Required): Whether or not to automatically install Azure Arc (hybrid compute) agents on machines
* **hybridComputeProvisioningState**: 'Expired' | 'Invalid' | 'Valid' | string (ReadOnly): State of the service principal and its secret
* **proxyServer**: [ProxyServerProperties](#proxyserverproperties): For a non-Azure machine that is not connected directly to the internet, specify a proxy server that the non-Azure machine can use.
* **region**: string: The location where the metadata of machines will be stored
* **resourceGroupName**: string: The name of the resource group where Arc (Hybrid Compute) connectors are connected.
* **servicePrincipal**: [ServicePrincipalProperties](#serviceprincipalproperties): An object to access resources that are secured by an Azure AD tenant.

## ProxyServerProperties
### Properties
* **ip**: string: Proxy server IP
* **port**: string: Proxy server port

## ScoreDetails
### Properties
* **current**: int (ReadOnly): Current score
* **max**: int (ReadOnly): Maximum score available
* **percentage**: int (ReadOnly): Ratio of the current score divided by the maximum. Rounded to 4 digits after the decimal point

## SecureScoreItemProperties
### Properties
* **displayName**: string (ReadOnly): The initiative’s name
* **score**: [ScoreDetails](#scoredetails) (ReadOnly): score object
* **weight**: int (ReadOnly): The relative weight for each subscription. Used when calculating an aggregated secure score for multiple subscriptions.

## ServicePrincipalProperties
### Properties
* **applicationId**: string: Application ID of service principal.
* **secret**: string: A secret string that the application uses to prove its identity, also can be referred to as application password (write only).

