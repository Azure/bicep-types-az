# Microsoft.Attestation @ 2018-09-01-preview

## Resource Microsoft.Attestation/attestationProviders@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AttestationServiceCreationSpecificParams](#attestationservicecreationspecificparams) (Required): Status of attestation service.
* **tags**: [AttestationServiceCreationParamsTags](#attestationservicecreationparamstags): Resource tags.
* **type**: 'Microsoft.Attestation/attestationProviders' (ReadOnly, DeployTimeConstant): The resource type

## AttestationServiceCreationSpecificParams
### Properties
* **attestationPolicy**: string (WriteOnly)
* **attestUri**: string (ReadOnly): Gets the uri of attestation service
* **policySigningCertificates**: [JsonWebKeySet](#jsonwebkeyset) (WriteOnly)
* **status**: 'Error' | 'NotReady' | 'Ready' (ReadOnly): Status of attestation service.
* **trustModel**: string (ReadOnly): Trust model for the attestation service instance.

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

## AttestationServiceCreationParamsTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

