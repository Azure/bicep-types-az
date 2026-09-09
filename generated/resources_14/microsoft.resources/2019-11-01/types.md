# Microsoft.Resources @ 2019-11-01

## Function checkResourceName (Microsoft.Resources@2019-11-01)
* **Resource**: Microsoft.Resources
* **ApiVersion**: 2019-11-01
* **Input**: [ResourceName](#resourcename)
* **Output**: [CheckResourceNameResult](#checkresourcenameresult)

## Function checkZonePeers (Microsoft.Resources@2019-11-01)
* **Resource**: Microsoft.Resources
* **ApiVersion**: 2019-11-01
* **Input**: [CheckZonePeersRequest](#checkzonepeersrequest)
* **Output**: [CheckZonePeersResult](#checkzonepeersresult)

## AvailabilityZonePeers
### Properties
* **availabilityZone**: string (ReadOnly): The availabilityZone.
* **peers**: [Peers](#peers)[]: Details of shared availability zone.

## CheckResourceNameResult
### Properties
* **name**: string: Name of Resource
* **status**: 'Allowed' | 'Reserved' | string: Is the resource name Allowed or Reserved
* **type**: string: Type of Resource

## CheckZonePeersRequest
### Properties
* **location**: string: The Microsoft location.
* **subscriptionIds**: string[]: The peer Microsoft Azure subscription ID.

## CheckZonePeersResult
### Properties
* **availabilityZonePeers**: [AvailabilityZonePeers](#availabilityzonepeers)[]: The Availability Zones shared by the subscriptions.
* **location**: string: the location of the subscription.
* **subscriptionId**: string (ReadOnly): The subscription ID.

## Peers
### Properties
* **availabilityZone**: string (ReadOnly): The availabilityZone.
* **subscriptionId**: string (ReadOnly): The subscription ID.

## ResourceName
### Properties
* **name**: string (Required): Name of the resource
* **type**: string (Required): The type of the resource

