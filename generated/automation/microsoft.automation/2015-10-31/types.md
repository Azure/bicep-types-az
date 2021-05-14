# Microsoft.Automation @ 2015-10-31

## Resource Microsoft.Automation/automationAccounts/webhooks@2015-10-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebhookCreateOrUpdateProperties](#webhookcreateorupdateproperties) (Required): The properties of the create webhook operation.
* **type**: 'Microsoft.Automation/automationAccounts/webhooks' (ReadOnly, DeployTimeConstant): The resource type

## WebhookCreateOrUpdateProperties
### Properties
* **creationTime**: string (ReadOnly): Gets or sets the creation time.
* **description**: string (ReadOnly): Gets or sets the description.
* **expiryTime**: string: Gets or sets the expiry time.
* **isEnabled**: bool: Gets or sets the value of the enabled flag of webhook.
* **lastInvokedTime**: string (ReadOnly): Gets or sets the last invoked time.
* **lastModifiedBy**: string (ReadOnly): Details of the user who last modified the Webhook
* **lastModifiedTime**: string (ReadOnly): Gets or sets the last modified time.
* **parameters**: [Dictionary<string,String>](#dictionarystringstring): Gets or sets the parameters of the job.
* **runbook**: [RunbookAssociationProperty](#runbookassociationproperty): The runbook property associated with the entity.
* **runOn**: string: Gets or sets the name of the hybrid worker group the webhook job will run on.
* **uri**: string: Gets or sets the uri.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RunbookAssociationProperty
### Properties
* **name**: string: Gets or sets the name of the runbook.

