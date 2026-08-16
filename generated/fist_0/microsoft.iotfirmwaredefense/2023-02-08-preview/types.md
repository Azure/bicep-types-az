# Microsoft.IoTFirmwareDefense @ 2023-02-08-preview

## Resource Microsoft.IoTFirmwareDefense/workspaces@2023-02-08-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-02-08-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9_.-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): Workspace properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.IoTFirmwareDefense/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.IoTFirmwareDefense/workspaces/firmwares@2023-02-08-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-02-08-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FirmwareProperties](#firmwareproperties): The properties of a firmware
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.IoTFirmwareDefense/workspaces/firmwares' (ReadOnly, DeployTimeConstant): The resource type

## Function generateBinaryHardeningDetails (Microsoft.IoTFirmwareDefense/workspaces/firmwares@2023-02-08-preview)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces/firmwares
* **ApiVersion**: 2023-02-08-preview
* **Output**: [BinaryHardening](#binaryhardening)

## Function generateBinaryHardeningList (Microsoft.IoTFirmwareDefense/workspaces/firmwares@2023-02-08-preview)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces/firmwares
* **ApiVersion**: 2023-02-08-preview
* **Output**: [BinaryHardeningList](#binaryhardeninglist)

## Function generateBinaryHardeningSummary (Microsoft.IoTFirmwareDefense/workspaces/firmwares@2023-02-08-preview)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces/firmwares
* **ApiVersion**: 2023-02-08-preview
* **Output**: [BinaryHardeningSummary](#binaryhardeningsummary)

## Function generateComponentDetails (Microsoft.IoTFirmwareDefense/workspaces/firmwares@2023-02-08-preview)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces/firmwares
* **ApiVersion**: 2023-02-08-preview
* **Output**: [Component](#component)

## Function generateComponentList (Microsoft.IoTFirmwareDefense/workspaces/firmwares@2023-02-08-preview)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces/firmwares
* **ApiVersion**: 2023-02-08-preview
* **Output**: [ComponentList](#componentlist)

## Function generateCryptoCertificateList (Microsoft.IoTFirmwareDefense/workspaces/firmwares@2023-02-08-preview)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces/firmwares
* **ApiVersion**: 2023-02-08-preview
* **Output**: [CryptoCertificateList](#cryptocertificatelist)

## Function generateCryptoCertificateSummary (Microsoft.IoTFirmwareDefense/workspaces/firmwares@2023-02-08-preview)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces/firmwares
* **ApiVersion**: 2023-02-08-preview
* **Output**: [CryptoCertificateSummary](#cryptocertificatesummary)

## Function generateCryptoKeyList (Microsoft.IoTFirmwareDefense/workspaces/firmwares@2023-02-08-preview)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces/firmwares
* **ApiVersion**: 2023-02-08-preview
* **Output**: [CryptoKeyList](#cryptokeylist)

## Function generateCryptoKeySummary (Microsoft.IoTFirmwareDefense/workspaces/firmwares@2023-02-08-preview)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces/firmwares
* **ApiVersion**: 2023-02-08-preview
* **Output**: [CryptoKeySummary](#cryptokeysummary)

## Function generateCveList (Microsoft.IoTFirmwareDefense/workspaces/firmwares@2023-02-08-preview)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces/firmwares
* **ApiVersion**: 2023-02-08-preview
* **Output**: [CveList](#cvelist)

## Function generateCveSummary (Microsoft.IoTFirmwareDefense/workspaces/firmwares@2023-02-08-preview)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces/firmwares
* **ApiVersion**: 2023-02-08-preview
* **Output**: [CveSummary](#cvesummary)

## Function generateDownloadUrl (Microsoft.IoTFirmwareDefense/workspaces/firmwares@2023-02-08-preview)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces/firmwares
* **ApiVersion**: 2023-02-08-preview
* **Output**: [UrlToken](#urltoken)

## Function generateFilesystemDownloadUrl (Microsoft.IoTFirmwareDefense/workspaces/firmwares@2023-02-08-preview)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces/firmwares
* **ApiVersion**: 2023-02-08-preview
* **Output**: [UrlToken](#urltoken)

## Function generatePasswordHashList (Microsoft.IoTFirmwareDefense/workspaces/firmwares@2023-02-08-preview)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces/firmwares
* **ApiVersion**: 2023-02-08-preview
* **Output**: [PasswordHashList](#passwordhashlist)

## Function generateSummary (Microsoft.IoTFirmwareDefense/workspaces/firmwares@2023-02-08-preview)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces/firmwares
* **ApiVersion**: 2023-02-08-preview
* **Output**: [FirmwareSummary](#firmwaresummary)

## Function generateUploadUrl (Microsoft.IoTFirmwareDefense/workspaces@2023-02-08-preview)
* **Resource**: Microsoft.IoTFirmwareDefense/workspaces
* **ApiVersion**: 2023-02-08-preview
* **Input**: [GenerateUploadUrlRequest](#generateuploadurlrequest)
* **Output**: [UrlToken](#urltoken)

## BinaryHardening
### Properties
* **architecture**: string: The architecture of the uploaded firmware.
* **binaryHardeningId**: string: ID for the binary hardening result.
* **class**: string: class for binary hardening.
* **features**: [BinaryHardeningFeatures](#binaryhardeningfeatures): Binary hardening features.
* **path**: string: path for binary hardening.
* **rpath**: string: The rpath of the uploaded firmware.
* **runpath**: string: The runpath of the uploaded firmware.

## BinaryHardeningFeatures
### Properties
* **canary**: 'False' | 'True' | string: Canary flag.
* **nx**: 'False' | 'True' | string: NX flag.
* **pie**: 'False' | 'True' | string: PIE flag.
* **relro**: 'False' | 'True' | string: RELRO flag.
* **stripped**: 'False' | 'True' | string: Stripped flag.

## BinaryHardeningList
### Properties
* **nextLink**: string: The uri to fetch the next page of asset.
* **value**: [BinaryHardening](#binaryhardening)[] (ReadOnly): The list of binary hardening results.

## BinaryHardeningSummary
### Properties
* **canary**: int: Canary summary percentage
* **nx**: int: NX summary percentage
* **pie**: int: PIE summary percentage
* **relro**: int: RELRO summary percentage
* **stripped**: int: Stripped summary percentage
* **totalFiles**: int: Total number of binaries that were analyzed

## Component
### Properties
* **componentId**: string: ID for the component.
* **componentName**: string: Name for the component.
* **isUpdateAvailable**: 'False' | 'True' | string: Flag if new update is available for the component.
* **license**: string: License for the component.
* **paths**: string[]: Paths of the component.
* **releaseDate**: string: Release date for the component.
* **version**: string: Version for the component.

## ComponentList
### Properties
* **nextLink**: string: The uri to fetch the next page of asset.
* **value**: [Component](#component)[] (ReadOnly): The list of components.

## CryptoCertificate
### Properties
* **cryptoCertId**: string: ID for the certificate.
* **encoding**: string: Encoding used for the certificate.
* **expirationDate**: string: Expiration date for the certificate.
* **filePaths**: string[] (ReadOnly): List of files paths for this certificate
* **fingerprint**: string: Fingerprint of the certificate.
* **isExpired**: 'False' | 'True' | string: Indicates if the certificate is expired.
* **isSelfSigned**: 'False' | 'True' | string: Indicates if the certificate was self-signed.
* **isShortKeySize**: 'False' | 'True' | string: Indicates the certificate's key size is considered too small to be secure for the key algorithm.
* **issuedDate**: string: Issue date for the certificate.
* **issuer**: [CryptoCertificateEntity](#cryptocertificateentity): Issuer information of the certificate.
* **isWeakSignature**: 'False' | 'True' | string: Indicates the signature algorithm used is insecure.
* **keyAlgorithm**: string: Key algorithm used in the certificate.
* **keySize**: int: Size of the certificate's key in bits
* **name**: string: Name of the certificate.
* **pairedKey**: [PairedKey](#pairedkey): A matching paired private key.
* **role**: string: Role of the certificate (Root CA, etc)
* **serialNumber**: string: Serial number of the certificate.
* **signatureAlgorithm**: string: The signature algorithm used in the certificate.
* **subject**: [CryptoCertificateEntity](#cryptocertificateentity): Subject information of the certificate.
* **usage**: string[]: List of functions the certificate can fulfill.

## CryptoCertificateEntity
### Properties
* **commonName**: string: Common name of the certificate entity.
* **country**: string: Country code of the certificate entity.
* **organization**: string: Organization of the certificate entity.
* **organizationalUnit**: string: The organizational unit of the certificate entity.
* **state**: string: Geographical state or province of the certificate entity.

## CryptoCertificateList
### Properties
* **nextLink**: string: The uri to fetch the next page of asset.
* **value**: [CryptoCertificate](#cryptocertificate)[] (ReadOnly): Crypto certificates list

## CryptoCertificateSummary
### Properties
* **expired**: int: Total number of expired certificates found.
* **expiringSoon**: int: Total number of nearly expired certificates found.
* **pairedKeys**: int: Total number of paired private keys found for the certificates.
* **selfSigned**: int: Total number of certificates found that are self-signed.
* **shortKeySize**: int: Total number of certificates found that have an insecure key size for the key algorithm.
* **totalCertificates**: int: Total number of certificates found.
* **weakSignature**: int: Total number of certificates found using a weak signature algorithm.

## CryptoKey
### Properties
* **cryptoKeyId**: string: ID for the key.
* **filePaths**: string[] (ReadOnly): List of files paths for this key.
* **isShortKeySize**: 'False' | 'True' | string: Indicates the key size is considered too small to be secure for the algorithm.
* **keyAlgorithm**: string: Key algorithm name.
* **keySize**: int: Size of the key in bits.
* **keyType**: string: Type of the key (public or private).
* **pairedKey**: [PairedKey](#pairedkey): A matching paired key or certificate.
* **usage**: string[]: Functions the key can fulfill.

## CryptoKeyList
### Properties
* **nextLink**: string: The uri to fetch the next page of asset.
* **value**: [CryptoKey](#cryptokey)[] (ReadOnly): Crypto keys list

## CryptoKeySummary
### Properties
* **pairedKeys**: int: Total number of keys found that have a matching paired key or certificate.
* **privateKeys**: int: Total number of private keys found.
* **publicKeys**: int: Total number of (non-certificate) public keys found.
* **shortKeySize**: int: Total number of keys found that have an insecure key size for the algorithm.
* **totalKeys**: int: Total number of cryptographic keys found.

## Cve
### Properties
* **component**: any: Component of CVE
* **cveId**: string: ID of CVE
* **cvssScore**: string: A single CVSS score to represent the CVE. If a V3 score is specified, then it will use the V3 score. Otherwise if the V2 score is specified it will be the V2 score
* **cvssV2Score**: string: Cvss V2 score of CVE
* **cvssV3Score**: string: Cvss V3 score of CVE
* **cvssVersion**: string: Cvss version of CVE
* **description**: string: Description of CVE
* **links**: [CveLink](#cvelink)[] (ReadOnly): The list of CVE links.
* **name**: string: Name of CVE
* **publishDate**: string: Publish date of CVE
* **severity**: string: Severity of CVE
* **updatedDate**: string: Updated date of CVE

## CveLink
### Properties
* **href**: string: Href of CVE link
* **label**: string: Label of CVE link

## CveList
### Properties
* **nextLink**: string: The uri to fetch the next page of asset.
* **value**: [Cve](#cve)[] (ReadOnly): The list of CVE results.

## CveSummary
### Properties
* **critical**: int: The total number of critical severity CVEs detected
* **high**: int: The total number of high severity CVEs detected
* **low**: int: The total number of low severity CVEs detected
* **medium**: int: The total number of medium severity CVEs detected
* **undefined**: int: The total number of undefined severity CVEs detected
* **unknown**: int: The total number of unknown severity CVEs detected

## FirmwareProperties
### Properties
* **description**: string: User-specified description of the firmware.
* **fileName**: string: File name for a firmware that user uploaded.
* **fileSize**: int: File size of the uploaded firmware image.
* **model**: string: Firmware model.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **status**: 'Analyzing' | 'Error' | 'Extracting' | 'Pending' | 'Ready' | string: The status of firmware scan.
* **statusMessages**: any[]: A list of errors or other messages generated during firmware analysis
* **vendor**: string: Firmware vendor.
* **version**: string: Firmware version.

## FirmwareSummary
### Properties
* **analysisTimeSeconds**: int: Time used for analysis
* **binaryCount**: int: Binary count
* **componentCount**: int: Components count.
* **extractedFileCount**: int: Extracted file count.
* **extractedSize**: int: Total extracted size of the firmware in bytes.
* **fileSize**: int: Firmware file size in bytes.
* **rootFileSystems**: int: The number of root file systems found.

## GenerateUploadUrlRequest
### Properties
* **firmwareId**: string: A unique ID for the firmware to be uploaded.

## PairedKey
### Properties
* **additionalProperties**: any: Additional paired key properties
* **id**: string: ID of the paired key or certificate.
* **type**: string: The type indicating whether the paired object is a key or certificate.

## PasswordHash
### Properties
* **algorithm**: string: Algorithm of the password hash
* **context**: string: Context of password hash
* **filePath**: string: File path of the password hash
* **hash**: string: Hash of the password
* **passwordHashId**: string: ID for password hash
* **salt**: string: Salt of the password hash
* **username**: string: User name of password hash

## PasswordHashList
### Properties
* **nextLink**: string: The uri to fetch the next page of asset.
* **value**: [PasswordHash](#passwordhash)[] (ReadOnly): Password hashes list

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UrlToken
### Properties
* **uploadUrl**: string (ReadOnly): SAS URL for file uploading. Kept for backwards compatibility
* **url**: string (ReadOnly): SAS URL for creating or accessing a blob file.

## WorkspaceProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.

