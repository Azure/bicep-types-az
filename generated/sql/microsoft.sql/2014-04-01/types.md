# Microsoft.Sql @ 2014-04-01

## Resource Microsoft.Sql/servers/communicationLinks@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Communication link kind.  This property is used for Azure Portal metadata.
* **location**: string (ReadOnly): Communication link location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerCommunicationLinkProperties](#servercommunicationlinkproperties): The properties of a server communication link.
* **type**: 'Microsoft.Sql/servers/communicationLinks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/connectionPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Metadata used for the Azure portal experience.
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServerConnectionPolicyProperties](#serverconnectionpolicyproperties): The properties of a server secure connection policy.
* **type**: 'Microsoft.Sql/servers/connectionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/dataMaskingPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): The kind of data masking policy. Metadata, used for Azure portal.
* **location**: string (ReadOnly): The location of the data masking policy.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataMaskingPolicyProperties](#datamaskingpolicyproperties): The properties of a database data masking policy.
* **type**: 'Microsoft.Sql/servers/databases/dataMaskingPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/dataMaskingPolicies/rules@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): The kind of Data Masking Rule. Metadata, used for Azure portal.
* **location**: string (ReadOnly): The location of the data masking rule.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataMaskingRuleProperties](#datamaskingruleproperties): The properties of a database data masking rule.
* **type**: 'Microsoft.Sql/servers/databases/dataMaskingPolicies/rules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/geoBackupPolicies@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: string (ReadOnly): Kind of geo backup policy.  This is metadata used for the Azure portal experience.
* **location**: string (ReadOnly): Backup policy location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GeoBackupPolicyProperties](#geobackuppolicyproperties) (Required): The properties of the geo backup policy.
* **type**: 'Microsoft.Sql/servers/databases/geoBackupPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Sql/servers/databases/transparentDataEncryption@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TransparentDataEncryptionProperties](#transparentdataencryptionproperties): Represents the properties of a database transparent data encryption.
* **type**: 'Microsoft.Sql/servers/databases/transparentDataEncryption' (ReadOnly, DeployTimeConstant): The resource type

## ServerCommunicationLinkProperties
### Properties
* **partnerServer**: string (Required): The name of the partner server.
* **state**: string (ReadOnly): The state.

## ServerConnectionPolicyProperties
### Properties
* **connectionType**: 'Default' | 'Proxy' | 'Redirect' (Required): The server connection type.

## DataMaskingPolicyProperties
### Properties
* **applicationPrincipals**: string (ReadOnly): The list of the application principals. This is a legacy parameter and is no longer used.
* **dataMaskingState**: 'Disabled' | 'Enabled' (Required): The state of the data masking policy.
* **exemptPrincipals**: string: The list of the exempt principals. Specifies the semicolon-separated list of database users for which the data masking policy does not apply. The specified users receive data results without masking for all of the database queries.
* **maskingLevel**: string (ReadOnly): The masking level. This is a legacy parameter and is no longer used.

## DataMaskingRuleProperties
### Properties
* **aliasName**: string: The alias name. This is a legacy parameter and is no longer used.
* **columnName**: string (Required): The column name on which the data masking rule is applied.
* **id**: string (ReadOnly): The rule Id.
* **maskingFunction**: 'CCN' | 'Default' | 'Email' | 'Number' | 'SSN' | 'Text' (Required): The masking function that is used for the data masking rule.
* **numberFrom**: string: The numberFrom property of the masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored.
* **numberTo**: string: The numberTo property of the data masking rule. Required if maskingFunction is set to Number, otherwise this parameter will be ignored.
* **prefixSize**: string: If maskingFunction is set to Text, the number of characters to show unmasked in the beginning of the string. Otherwise, this parameter will be ignored.
* **replacementString**: string: If maskingFunction is set to Text, the character to use for masking the unexposed part of the string. Otherwise, this parameter will be ignored.
* **ruleState**: 'Disabled' | 'Enabled': The rule state. Used to delete a rule. To delete an existing rule, specify the schemaName, tableName, columnName, maskingFunction, and specify ruleState as disabled. However, if the rule doesn't already exist, the rule will be created with ruleState set to enabled, regardless of the provided value of ruleState.
* **schemaName**: string (Required): The schema name on which the data masking rule is applied.
* **suffixSize**: string: If maskingFunction is set to Text, the number of characters to show unmasked at the end of the string. Otherwise, this parameter will be ignored.
* **tableName**: string (Required): The table name on which the data masking rule is applied.

## GeoBackupPolicyProperties
### Properties
* **state**: 'Disabled' | 'Enabled' (Required): The state of the geo backup policy.
* **storageType**: string (ReadOnly): The storage type of the geo backup policy.

## TransparentDataEncryptionProperties
### Properties
* **status**: 'Disabled' | 'Enabled': The status of the database transparent data encryption.

