# Microsoft.Attestation @ 2018-09-01-preview

## Resource Microsoft.Attestation/attestationProviders@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The supported Azure location where the attestation service instance should be created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AttestationServiceCreationSpecificParamsOrStatusResult](#attestationservicecreationspecificparamsorstatusresult) (Required): Properties of the attestation service instance
* **tags**: [AttestationServiceCreationParamsTags](#attestationservicecreationparamstags): The tags that will be assigned to the attestation service instance.
* **type**: 'Microsoft.Attestation/attestationProviders' (ReadOnly, DeployTimeConstant): The resource type

## AttestationServiceCreationParamsTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AttestationServiceCreationSpecificParamsOrStatusResult
### Properties
* **attestationPolicy**: string (WriteOnly): Name of attestation policy.
* **attestUri**: string (ReadOnly): Gets the uri of attestation service
* **policySigningCertificates**: [JsonWebKeySet](#jsonwebkeyset) (WriteOnly): JSON Web Key Set defining a set of X.509 Certificates that will represent the parent certificate for the signing certificate used for policy operations
* **status**: 'Error' | 'NotReady' | 'Ready' | string (ReadOnly): Status of attestation service.
* **trustModel**: string (ReadOnly): Trust model for the attestation service instance.

## JsonWebKey
### Properties
* **alg**: string: The "alg" (algorithm) parameter identifies the algorithm intended for
use with the key.  The values used should either be registered in the
IANA "JSON Web Signature and Encryption Algorithms" registry
established by [JWA] or be a value that contains a Collision-
Resistant Name.
* **crv**: string: The "crv" (curve) parameter identifies the curve type
* **d**: string: RSA private exponent or ECC private key
* **dp**: string: RSA Private Key Parameter
* **dq**: string: RSA Private Key Parameter
* **e**: string: RSA public exponent, in Base64
* **k**: string: Symmetric key
* **kid**: string: The "kid" (key ID) parameter is used to match a specific key.  This
is used, for instance, to choose among a set of keys within a JWK Set
during key rollover.  The structure of the "kid" value is
unspecified.  When "kid" values are used within a JWK Set, different
keys within the JWK Set SHOULD use distinct "kid" values.  (One
example in which different keys might use the same "kid" value is if
they have different "kty" (key type) values but are considered to be
equivalent alternatives by the application using them.)  The "kid"
value is a case-sensitive string.
* **kty**: string (Required): The "kty" (key type) parameter identifies the cryptographic algorithm
family used with the key, such as "RSA" or "EC". "kty" values should
either be registered in the IANA "JSON Web Key Types" registry
established by [JWA] or be a value that contains a Collision-
Resistant Name.  The "kty" value is a case-sensitive string.
* **n**: string: RSA modulus, in Base64
* **p**: string: RSA secret prime
* **q**: string: RSA secret prime, with p < q
* **qi**: string: RSA Private Key Parameter
* **use**: string: Use ("public key use") identifies the intended use of
the public key. The "use" parameter is employed to indicate whether
a public key is used for encrypting data or verifying the signature
on data. Values are commonly "sig" (signature) or "enc" (encryption).
* **x**: string: X coordinate for the Elliptic Curve point
* **x5c**: string[]: The "x5c" (X.509 certificate chain) parameter contains a chain of one
or more PKIX certificates [RFC5280].  The certificate chain is
represented as a JSON array of certificate value strings.  Each
string in the array is a base64-encoded (Section 4 of [RFC4648] --
not base64url-encoded) DER [ITU.X690.1994] PKIX certificate value.
The PKIX certificate containing the key value MUST be the first
certificate.
* **y**: string: Y coordinate for the Elliptic Curve point

## JsonWebKeySet
### Properties
* **keys**: [JsonWebKey](#jsonwebkey)[]: The value of the "keys" parameter is an array of JWK values.  By
default, the order of the JWK values within the array does not imply
an order of preference among them, although applications of JWK Sets
can choose to assign a meaning to the order for their purposes, if
desired.

