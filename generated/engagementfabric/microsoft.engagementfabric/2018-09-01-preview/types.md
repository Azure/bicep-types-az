# Microsoft.EngagementFabric @ 2018-09-01-preview

## Resource Microsoft.EngagementFabric/Accounts@2018-09-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **sku**: [SKU](#sku) (Required): The SKU of the resource
* **tags**: [TrackedResourceTags](#trackedresourcetags): The tags of the resource
* **type**: 'Microsoft.EngagementFabric/Accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.EngagementFabric/Accounts/Channels@2018-09-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ChannelProperties](#channelproperties): The properties of the channel
* **type**: 'Microsoft.EngagementFabric/Accounts/Channels' (ReadOnly, DeployTimeConstant): The resource type

## Function checkNameAvailability (Microsoft.EngagementFabric@2018-09-01-preview)
* **Resource**: Microsoft.EngagementFabric
* **ApiVersion**: 2018-09-01-preview
* **Input**: [CheckNameAvailabilityParameter](#checknameavailabilityparameter)
* **Output**: [CheckNameAvailabilityResult](#checknameavailabilityresult)

## Function listChannelTypes (Microsoft.EngagementFabric/Accounts@2018-09-01-preview)
* **Resource**: Microsoft.EngagementFabric/Accounts
* **ApiVersion**: 2018-09-01-preview
* **Output**: [ChannelTypeDescriptionList](#channeltypedescriptionlist)

## Function listKeys (Microsoft.EngagementFabric/Accounts@2018-09-01-preview)
* **Resource**: Microsoft.EngagementFabric/Accounts
* **ApiVersion**: 2018-09-01-preview
* **Output**: [KeyDescriptionList](#keydescriptionlist)

## Function regenerateKey (Microsoft.EngagementFabric/Accounts@2018-09-01-preview)
* **Resource**: Microsoft.EngagementFabric/Accounts
* **ApiVersion**: 2018-09-01-preview
* **Input**: [RegenerateKeyParameter](#regeneratekeyparameter)
* **Output**: [KeyDescription](#keydescription)

## ChannelProperties
### Properties
* **channelFunctions**: string[]: The functions to be enabled for the channel
* **channelType**: string (Required): The channel type
* **credentials**: [ChannelPropertiesCredentials](#channelpropertiescredentials): The channel credentials

## ChannelPropertiesCredentials
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ChannelTypeDescription
### Properties
* **channelDescription**: string: Text description for the channel
* **channelFunctions**: string[]: All the available functions for the channel
* **channelType**: string: Channel type

## ChannelTypeDescriptionList
### Properties
* **value**: [ChannelTypeDescription](#channeltypedescription)[]: Channel descriptions

## CheckNameAvailabilityParameter
### Properties
* **name**: string (Required): The name to be checked
* **type**: string (Required): The fully qualified resource type for the name to be checked

## CheckNameAvailabilityResult
### Properties
* **message**: string (ReadOnly): The message if name is unavailable
* **nameAvailable**: bool (ReadOnly): The name to be checked
* **reason**: 'AlreadyExists' | 'Invalid' | string (ReadOnly): The reason if name is unavailable

## KeyDescription
### Properties
* **name**: string (ReadOnly): The name of the key
* **rank**: 'PrimaryKey' | 'SecondaryKey' | string (ReadOnly): The rank of the key
* **value**: string (ReadOnly): The value of the key

## KeyDescriptionList
### Properties
* **value**: [KeyDescription](#keydescription)[] (ReadOnly): Account keys

## RegenerateKeyParameter
### Properties
* **name**: string (Required): The name of key to be regenerated
* **rank**: 'PrimaryKey' | 'SecondaryKey' | string (Required): The rank of the key to be regenerated

## SKU
### Properties
* **name**: string (Required): The name of the SKU
* **tier**: string: The price tier of the SKU

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

