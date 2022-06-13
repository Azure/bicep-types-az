# Microsoft.Attestation @ 2021-06-01-preview

## Resource Microsoft.Attestation/attestationProviders@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The supported Azure location where the attestation provider should be created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AttestationServiceCreationSpecificParams](#attestationservicecreationspecificparams) (Required): Properties of the attestation provider
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource
* **tags**: [AttestationServiceCreationParamsTags](#attestationservicecreationparamstags): The tags that will be assigned to the attestation provider.
* **type**: 'Microsoft.Attestation/attestationProviders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Attestation/attestationProviders/privateEndpointConnections@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: 'Microsoft.Attestation/attestationProviders/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## AttestationServiceCreationParamsTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AttestationServiceCreationSpecificParams
### Properties
* **attestUri**: string (ReadOnly): Gets the uri of attestation service
* **policySigningCertificates**: [JsonWebKeySet](#jsonwebkeyset) (WriteOnly): JSON Web Key Set defining a set of X.509 Certificates that will represent the parent certificate for the signing certificate used for policy operations
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections associated with the attestation provider.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Controls whether traffic from the public network is allowed to access the Attestation Provider APIs.
* **status**: 'Error' | 'NotReady' | 'Ready' | string (ReadOnly): Status of attestation service.
* **trustModel**: string (ReadOnly): Trust model for the attestation provider.

## JsonWebKey
### Properties
* **alg**: string (WriteOnly): The "alg" (algorithm) parameter identifies the algorithm intended for
use with the key.  The values used should either be registered in the
IANA "JSON Web Signature and Encryption Algorithms" registry
established by [JWA] or be a value that contains a Collision-
Resistant Name.
* **crv**: string (WriteOnly): The "crv" (curve) parameter identifies the curve type
* **d**: string (WriteOnly): RSA private exponent or ECC private key
* **dp**: string (WriteOnly): RSA Private Key Parameter
* **dq**: string (WriteOnly): RSA Private Key Parameter
* **e**: string (WriteOnly): RSA public exponent, in Base64
* **k**: string (WriteOnly): Symmetric key
* **kid**: string (WriteOnly): The "kid" (key ID) parameter is used to match a specific key.  This
is used, for instance, to choose among a set of keys within a JWK Set
during key rollover.  The structure of the "kid" value is
unspecified.  When "kid" values are used within a JWK Set, different
keys within the JWK Set SHOULD use distinct "kid" values.  (One
example in which different keys might use the same "kid" value is if
they have different "kty" (key type) values but are considered to be
equivalent alternatives by the application using them.)  The "kid"
value is a case-sensitive string.
* **kty**: string (Required, WriteOnly): The "kty" (key type) parameter identifies the cryptographic algorithm
family used with the key, such as "RSA" or "EC". "kty" values should
either be registered in the IANA "JSON Web Key Types" registry
established by [JWA] or be a value that contains a Collision-
Resistant Name.  The "kty" value is a case-sensitive string.
* **n**: string (WriteOnly): RSA modulus, in Base64
* **p**: string (WriteOnly): RSA secret prime
* **q**: string (WriteOnly): RSA secret prime, with p < q
* **qi**: string (WriteOnly): RSA Private Key Parameter
* **use**: string (WriteOnly): Use ("public key use") identifies the intended use of
the public key. The "use" parameter is employed to indicate whether
a public key is used for encrypting data or verifying the signature
on data. Values are commonly "sig" (signature) or "enc" (encryption).
* **x**: string (WriteOnly): X coordinate for the Elliptic Curve point
* **x5c**: string[] (WriteOnly): The "x5c" (X.509 certificate chain) parameter contains a chain of one
or more PKIX certificates [RFC5280].  The certificate chain is
represented as a JSON array of certificate value strings.  Each
string in the array is a base64-encoded (Section 4 of [RFC4648] --
not base64url-encoded) DER [ITU.X690.1994] PKIX certificate value.
The PKIX certificate containing the key value MUST be the first
certificate.
* **y**: string (WriteOnly): Y coordinate for the Elliptic Curve point

## JsonWebKeySet
### Properties
* **keys**: [JsonWebKey](#jsonwebkey)[] (WriteOnly): The value of the "keys" parameter is an array of JWK values.  By
default, the order of the JWK values within the array does not imply
an order of preference among them, although applications of JWK Sets
can choose to assign a meaning to the order for their purposes, if
desired.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (ReadOnly): Resource properties.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (ReadOnly): The resource of private end point.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (ReadOnly): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string (ReadOnly): A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string (ReadOnly): The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string (ReadOnly): Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## SystemData
### Properties
* **createdAt**: string (ReadOnly): The timestamp of resource creation (UTC).
* **createdBy**: string (ReadOnly): The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string (ReadOnly): The type of identity that created the resource.
* **lastModifiedAt**: string (ReadOnly): The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string (ReadOnly): The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string (ReadOnly): The type of identity that last modified the resource.

