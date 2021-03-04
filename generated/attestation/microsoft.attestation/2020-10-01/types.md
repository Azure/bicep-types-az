# Microsoft.Attestation @ 2020-10-01

## Resource Microsoft.Attestation/attestationProviders@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AttestationServiceCreationSpecificParams (Required)
* **tags**: AttestationServiceCreationParamsTags
* **type**: 'Microsoft.Attestation/attestationProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Attestation/attestationProviders/privateEndpointConnections@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **type**: 'Microsoft.Attestation/attestationProviders/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## AttestationServiceCreationSpecificParams
### Properties

## AttestationServiceCreationParamsTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: 'Approved' | 'Pending' | 'Rejected'

