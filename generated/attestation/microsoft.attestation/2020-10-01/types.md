# Microsoft.Attestation @ 2020-10-01

## Resource Microsoft.Attestation/attestationProviders@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AttestationServiceCreationSpecificParams](#attestationservicecreationspecificparams) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [AttestationServiceCreationParamsTags](#attestationservicecreationparamstags)
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
* **policySigningCertificates**: [JsonWebKeySet](#jsonwebkeyset) (WriteOnly)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **status**: 'Error' | 'NotReady' | 'Ready' (ReadOnly)
* **trustModel**: string (ReadOnly)

## JsonWebKeySet
### Properties
* **keys**: [JsonWebKey](#jsonwebkey)[] (WriteOnly)

## JsonWebKey
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

## SystemData
### Properties
* **createdAt**: string (ReadOnly)
* **createdBy**: string (ReadOnly)
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)
* **lastModifiedAt**: string (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)

## AttestationServiceCreationParamsTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

