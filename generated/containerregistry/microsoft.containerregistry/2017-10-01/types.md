# Microsoft.ContainerRegistry @ 2017-10-01

## Resource Microsoft.ContainerRegistry/registries@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegistryProperties](#registryproperties): The properties of the container registry.
* **sku**: [Sku](#sku) (Required): The SKU of the container registry.
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry/registries/replications@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReplicationProperties](#replicationproperties): The properties of the replication.
* **tags**: [ResourceTags](#resourcetags): The tags of the resource.
* **type**: 'Microsoft.ContainerRegistry/registries/replications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ContainerRegistry/registries/webhooks@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the webhook. This cannot be changed after the resource is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WebhookPropertiesCreateParametersOrWebhookProperties](#webhookpropertiescreateparametersorwebhookproperties): The properties that the webhook will be created with.
* **tags**: [WebhookCreateParametersTags](#webhookcreateparameterstags): The tags for the webhook.
* **type**: 'Microsoft.ContainerRegistry/registries/webhooks' (ReadOnly, DeployTimeConstant): The resource type

## Function listCredentials (Microsoft.ContainerRegistry/registries@2017-10-01)
* **Resource**: Microsoft.ContainerRegistry/registries
* **ApiVersion**: 2017-10-01
* **Output**: [RegistryListCredentialsResult](#registrylistcredentialsresult)

## Function listEvents (Microsoft.ContainerRegistry/registries/webhooks@2017-10-01)
* **Resource**: Microsoft.ContainerRegistry/registries/webhooks
* **ApiVersion**: 2017-10-01
* **Output**: [EventListResult](#eventlistresult)

## Actor
### Properties
* **name**: string: The subject or username associated with the request context that generated the event.

## Event
### Properties
* **eventRequestMessage**: [EventRequestMessage](#eventrequestmessage): The event request message sent to the service URI.
* **eventResponseMessage**: [EventResponseMessage](#eventresponsemessage): The event response message received from the service URI.
* **id**: string: The event ID.

## EventContent
### Properties
* **action**: string: The action that encompasses the provided event.
* **actor**: [Actor](#actor): The agent that initiated the event. For most situations, this could be from the authorization context of the request.
* **id**: string: The event ID.
* **request**: [Request](#request): The request that generated the event.
* **source**: [Source](#source): The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it.
* **target**: [Target](#target): The target of the event.
* **timestamp**: string: The time at which the event occurred.

## EventListResult
### Properties
* **nextLink**: string: The URI that can be used to request the next list of events.
* **value**: [Event](#event)[]: The list of events. Since this list may be incomplete, the nextLink field should be used to request the next list of events.

## EventRequestMessage
### Properties
* **content**: [EventContent](#eventcontent): The content of the event request message.
* **headers**: [EventRequestMessageHeaders](#eventrequestmessageheaders): The headers of the event request message.
* **method**: string: The HTTP method used to send the event request message.
* **requestUri**: string: The URI used to send the event request message.
* **version**: string: The HTTP message version.

## EventRequestMessageHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EventResponseMessage
### Properties
* **content**: string: The content of the event response message.
* **headers**: [EventResponseMessageHeaders](#eventresponsemessageheaders): The headers of the event response message.
* **reasonPhrase**: string: The reason phrase of the event response message.
* **statusCode**: string: The status code of the event response message.
* **version**: string: The HTTP message version.

## EventResponseMessageHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IPRule
### Properties
* **action**: 'Allow' | string: The action of IP ACL rule.
* **value**: string (Required): Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.

## NetworkRuleSet
### Properties
* **defaultAction**: 'Allow' | 'Deny' | string (Required): The default action of allow or deny when no other rules match.
* **ipRules**: [IPRule](#iprule)[]: The IP ACL rules.
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]: The virtual network rules.

## RegistryListCredentialsResult
### Properties
* **passwords**: [RegistryPassword](#registrypassword)[]: The list of passwords for a container registry.
* **username**: string: The username for a container registry.

## RegistryPassword
### Properties
* **name**: 'password' | 'password2': The password name.
* **value**: string: The password value.

## RegistryProperties
### Properties
* **adminUserEnabled**: bool: The value that indicates whether the admin user is enabled.
* **creationDate**: string (ReadOnly): The creation date of the container registry in ISO8601 format.
* **loginServer**: string (ReadOnly): The URL that can be used to log into the container registry.
* **networkRuleSet**: [NetworkRuleSet](#networkruleset): The network rule set for a container registry.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the container registry at the time the operation was called.
* **status**: [Status](#status) (ReadOnly): The status of the container registry at the time the operation was called.
* **storageAccount**: [StorageAccountProperties](#storageaccountproperties): The properties of the storage account for the container registry. Only applicable to Classic SKU.

## ReplicationProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the replication at the time the operation was called.
* **status**: [Status](#status) (ReadOnly): The status of the replication at the time the operation was called.

## Request
### Properties
* **addr**: string: The IP or hostname and possibly port of the client connection that initiated the event. This is the RemoteAddr from the standard http request.
* **host**: string: The externally accessible hostname of the registry instance, as specified by the http host header on incoming requests.
* **id**: string: The ID of the request that initiated the event.
* **method**: string: The request method that generated the event.
* **useragent**: string: The user agent header of the request.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **name**: 'Basic' | 'Classic' | 'Premium' | 'Standard' | string (Required): The SKU name of the container registry. Required for registry creation.
* **tier**: 'Basic' | 'Classic' | 'Premium' | 'Standard' | string (ReadOnly): The SKU tier based on the SKU name.

## Source
### Properties
* **addr**: string: The IP or hostname and the port of the registry node that generated the event. Generally, this will be resolved by os.Hostname() along with the running port.
* **instanceID**: string: The running instance of an application. Changes after each restart.

## Status
### Properties
* **displayStatus**: string (ReadOnly): The short label for the status.
* **message**: string (ReadOnly): The detailed message for the status, including alerts and error messages.
* **timestamp**: string (ReadOnly): The timestamp when the status was changed to the current value.

## StorageAccountProperties
### Properties
* **id**: string (Required): The resource ID of the storage account.

## Target
### Properties
* **digest**: string: The digest of the content, as defined by the Registry V2 HTTP API Specification.
* **length**: int: The number of bytes of the content. Same as Size field.
* **mediaType**: string: The MIME type of the referenced object.
* **name**: string: The name of the artifact.
* **repository**: string: The repository name.
* **size**: int: The number of bytes of the content. Same as Length field.
* **tag**: string: The tag name.
* **url**: string: The direct URL to the content.
* **version**: string: The version of the artifact.

## VirtualNetworkRule
### Properties
* **action**: 'Allow' | string: The action of virtual network rule.
* **id**: string (Required): Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.

## WebhookCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebhookPropertiesCreateParametersCustomHeaders
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WebhookPropertiesCreateParametersOrWebhookProperties
### Properties
* **actions**: 'chart_delete' | 'chart_push' | 'delete' | 'push' | 'quarantine' | string[] (Required): The list of actions that trigger the webhook to post notifications.
* **customHeaders**: [WebhookPropertiesCreateParametersCustomHeaders](#webhookpropertiescreateparameterscustomheaders) (WriteOnly): Custom headers that will be added to the webhook notifications.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the webhook at the time the operation was called.
* **scope**: string: The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.
* **serviceUri**: string (Required, WriteOnly): The service URI for the webhook to post notifications.
* **status**: 'disabled' | 'enabled' | string: The status of the webhook at the time the operation was called.

