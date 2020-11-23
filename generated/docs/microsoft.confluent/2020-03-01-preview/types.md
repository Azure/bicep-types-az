# Microsoft.Confluent @ 2020-03-01-preview

## Microsoft.Confluent/organizations
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:10_properties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Confluent/organizations' (ReadOnly, DeployTimeConstant)

## schemas:10_properties
### Properties
* **createdTime**: string (ReadOnly)
* **offerDetail**: schemas:9_offerDetail
* **organizationId**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating'
* **ssoUrl**: string (ReadOnly)
* **userDetail**: schemas:9_userDetail

## schemas:9_offerDetail
### Properties
* **id**: string
* **planId**: string
* **planName**: string
* **publisherId**: string
* **status**: 'Failed' | 'InProgress' | 'PendingFulfillmentStart' | 'Reinstated' | 'Started' | 'Subscribed' | 'Succeeded' | 'Suspended' | 'Unsubscribed' | 'Updating'
* **termUnit**: string

## schemas:9_userDetail
### Properties
* **emailAddress**: string
* **firstName**: string
* **lastName**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

