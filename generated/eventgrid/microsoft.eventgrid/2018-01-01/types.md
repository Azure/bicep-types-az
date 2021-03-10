# Microsoft.EventGrid @ 2018-01-01

## Resource Microsoft.EventGrid/eventSubscriptions@2018-01-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EventSubscriptionProperties](#eventsubscriptionproperties)
* **type**: 'Microsoft.EventGrid/eventSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.EventGrid/topics@2018-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [TopicProperties](#topicproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.EventGrid/topics' (ReadOnly, DeployTimeConstant)

## EventSubscriptionProperties
### Properties
* **destination**: [EventSubscriptionDestination](#eventsubscriptiondestination)
* **filter**: [EventSubscriptionFilter](#eventsubscriptionfilter)
* **labels**: string[]
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **topic**: string (ReadOnly)

## EventSubscriptionDestination
* **Discriminator**: endpointType
### Base Properties
### EventHub
#### Properties
* **endpointType**: 'EventHub' (Required)
* **properties**: [EventHubEventSubscriptionDestinationProperties](#eventhubeventsubscriptiondestinationproperties)

### WebHook
#### Properties
* **endpointType**: 'WebHook' (Required)
* **properties**: [WebHookEventSubscriptionDestinationProperties](#webhookeventsubscriptiondestinationproperties)


## EventHub
### Properties
* **endpointType**: 'EventHub' (Required)
* **properties**: [EventHubEventSubscriptionDestinationProperties](#eventhubeventsubscriptiondestinationproperties)

## EventHubEventSubscriptionDestinationProperties
### Properties
* **resourceId**: string

## WebHook
### Properties
* **endpointType**: 'WebHook' (Required)
* **properties**: [WebHookEventSubscriptionDestinationProperties](#webhookeventsubscriptiondestinationproperties)

## WebHookEventSubscriptionDestinationProperties
### Properties
* **endpointBaseUrl**: string (ReadOnly)
* **endpointUrl**: string

## EventSubscriptionFilter
### Properties
* **includedEventTypes**: string[]
* **isSubjectCaseSensitive**: bool
* **subjectBeginsWith**: string
* **subjectEndsWith**: string

## TopicProperties
### Properties
* **endpoint**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

