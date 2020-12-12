# Microsoft.Attestation @ 2018-09-01-preview

## Resource Microsoft.Attestation/attestationProviders@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AttestationServiceCreationSpecificParams (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Attestation/attestationProviders' (ReadOnly, DeployTimeConstant)

## AttestationServiceCreationSpecificParams
### Properties
* **attestationPolicy**: string (WriteOnly)
* **attestUri**: string (ReadOnly)
* **policySigningCertificates**: JSONWebKeySet (WriteOnly)
* **status**: 'Error' | 'NotReady' | 'Ready' (ReadOnly)
* **trustModel**: string (ReadOnly)

## JSONWebKeySet
### Properties
* **keys**: JSONWebKey[] (WriteOnly)

## JSONWebKey
### Properties
* **alg**: string (Required, WriteOnly)
* **crv**: string (WriteOnly)
* **d**: string (WriteOnly)
* **dp**: string (WriteOnly)
* **dq**: string (WriteOnly)
* **e**: string (WriteOnly)
* **k**: string (WriteOnly)
* **kid**: string (Required, WriteOnly)
* **kty**: string (Required, WriteOnly)
* **n**: string (WriteOnly)
* **p**: string (WriteOnly)
* **q**: string (WriteOnly)
* **qi**: string (WriteOnly)
* **use**: string (Required, WriteOnly)
* **x**: string (WriteOnly)
* **x5c**: string[] (WriteOnly)
* **y**: string (WriteOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

