# Microsoft.Attestation @ 2020-10-01

## Resource Microsoft.Attestation/attestationProviders@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AttestationServiceCreationSpecificParams](#attestationservicecreationspecificparams) (Required)
* **systemData**: [systemData](#systemdata) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Attestation/attestationProviders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Attestation/attestationProviders/privateEndpointConnections@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **type**: 'Microsoft.Attestation/attestationProviders/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## AttestationServiceCreationSpecificParams
### Properties
* **attestUri**: string (ReadOnly)
* **policySigningCertificates**: [JSONWebKeySet](#jsonwebkeyset) (WriteOnly)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **status**: 'Error' | 'NotReady' | 'Ready' (ReadOnly)
* **trustModel**: string (ReadOnly)

## JSONWebKeySet
### Properties
* **keys**: [JSONWebKey](#jsonwebkey)[] (WriteOnly)

## JSONWebKey
### Properties
* **alg**: string (WriteOnly)
* **crv**: string (WriteOnly)
* **d**: string (WriteOnly)
* **dp**: string (WriteOnly)
* **dq**: string (WriteOnly)
* **e**: string (WriteOnly)
* **k**: string (WriteOnly)
* **kid**: string (WriteOnly)
* **kty**: string (Required, WriteOnly)
* **n**: string (WriteOnly)
* **p**: string (WriteOnly)
* **q**: string (WriteOnly)
* **qi**: string (WriteOnly)
* **use**: string (WriteOnly)
* **x**: string (WriteOnly)
* **x5c**: string[] (WriteOnly)
* **y**: string (WriteOnly)

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string (ReadOnly)
* **description**: string (ReadOnly)
* **status**: 'Approved' | 'Pending' | 'Rejected' (ReadOnly)

## systemData
### Properties
* **createdAt**: string (ReadOnly)
* **createdBy**: string (ReadOnly)
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)
* **lastModifiedAt**: string (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

