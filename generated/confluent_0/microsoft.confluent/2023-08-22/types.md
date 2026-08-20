# Microsoft.Confluent @ 2023-08-22

## Resource Microsoft.Confluent/agreements@2023-08-22
* **Readable Scope(s)**: None
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-08-22' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ConfluentAgreementProperties](#confluentagreementproperties): Represents the properties of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **type**: 'Microsoft.Confluent/agreements' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Confluent/organizations@2023-08-22
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-08-22' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of Organization resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OrganizationResourceProperties](#organizationresourceproperties) (Required): Organization resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **tags**: [OrganizationResourceTags](#organizationresourcetags): Organization resource tags
* **type**: 'Microsoft.Confluent/organizations' (ReadOnly, DeployTimeConstant): The resource type

## Function createInvitation (Microsoft.Confluent/organizations/access@2023-08-22)
* **Resource**: Microsoft.Confluent/organizations/access
* **ApiVersion**: 2023-08-22
* **Input**: [AccessInviteUserAccountModel](#accessinviteuseraccountmodel)
* **Output**: [InvitationRecord](#invitationrecord)

## Function listClusters (Microsoft.Confluent/organizations/access@2023-08-22)
* **Resource**: Microsoft.Confluent/organizations/access
* **ApiVersion**: 2023-08-22
* **Input**: [ListAccessRequestModel](#listaccessrequestmodel)
* **Output**: [AccessListClusterSuccessResponse](#accesslistclustersuccessresponse)

## Function listEnvironments (Microsoft.Confluent/organizations/access@2023-08-22)
* **Resource**: Microsoft.Confluent/organizations/access
* **ApiVersion**: 2023-08-22
* **Input**: [ListAccessRequestModel](#listaccessrequestmodel)
* **Output**: [AccessListEnvironmentsSuccessResponse](#accesslistenvironmentssuccessresponse)

## Function listInvitations (Microsoft.Confluent/organizations/access@2023-08-22)
* **Resource**: Microsoft.Confluent/organizations/access
* **ApiVersion**: 2023-08-22
* **Input**: [ListAccessRequestModel](#listaccessrequestmodel)
* **Output**: [AccessListInvitationsSuccessResponse](#accesslistinvitationssuccessresponse)

## Function listRoleBindings (Microsoft.Confluent/organizations/access@2023-08-22)
* **Resource**: Microsoft.Confluent/organizations/access
* **ApiVersion**: 2023-08-22
* **Input**: [ListAccessRequestModel](#listaccessrequestmodel)
* **Output**: [AccessListRoleBindingsSuccessResponse](#accesslistrolebindingssuccessresponse)

## Function listServiceAccounts (Microsoft.Confluent/organizations/access@2023-08-22)
* **Resource**: Microsoft.Confluent/organizations/access
* **ApiVersion**: 2023-08-22
* **Input**: [ListAccessRequestModel](#listaccessrequestmodel)
* **Output**: [AccessListServiceAccountsSuccessResponse](#accesslistserviceaccountssuccessresponse)

## Function listUsers (Microsoft.Confluent/organizations/access@2023-08-22)
* **Resource**: Microsoft.Confluent/organizations/access
* **ApiVersion**: 2023-08-22
* **Input**: [ListAccessRequestModel](#listaccessrequestmodel)
* **Output**: [AccessListUsersSuccessResponse](#accesslistuserssuccessresponse)

## Function orgvalidate (Microsoft.Confluent/validations@2023-08-22)
* **Resource**: Microsoft.Confluent/validations
* **ApiVersion**: 2023-08-22
* **Input**: [OrganizationResource](#organizationresource)
* **Output**: [OrganizationResource](#organizationresource)

## Function orgvalidateV2 (Microsoft.Confluent/validations@2023-08-22)
* **Resource**: Microsoft.Confluent/validations
* **ApiVersion**: 2023-08-22
* **Input**: [OrganizationResource](#organizationresource)
* **Output**: [ValidationResponse](#validationresponse)

## AccessInvitedUserDetails
### Properties
* **auth_type**: string: Auth type of the user
* **invitedEmail**: string: UPN/Email of the user who is being invited

## AccessInviteUserAccountModel
### Properties
* **email**: string: Email of the logged in user
* **invitedUserDetails**: [AccessInvitedUserDetails](#accessinviteduserdetails): Details of the user who is being invited
* **organizationId**: string: Id of the organization
* **upn**: string: Upn of the logged in user

## AccessListClusterSuccessResponse
### Properties
* **data**: [ClusterRecord](#clusterrecord)[]: Data of the environments list
* **kind**: string: Type of response
* **metadata**: [ConfluentListMetadata](#confluentlistmetadata): Metadata of the list

## AccessListEnvironmentsSuccessResponse
### Properties
* **data**: [EnvironmentRecord](#environmentrecord)[]: Data of the environments list
* **kind**: string: Type of response
* **metadata**: [ConfluentListMetadata](#confluentlistmetadata): Metadata of the list

## AccessListInvitationsSuccessResponse
### Properties
* **data**: [InvitationRecord](#invitationrecord)[]: Data of the invitations list
* **kind**: string: Type of response
* **metadata**: [ConfluentListMetadata](#confluentlistmetadata): Metadata of the list

## AccessListRoleBindingsSuccessResponse
### Properties
* **data**: [RoleBindingRecord](#rolebindingrecord)[]: Data of the environments list
* **kind**: string: Type of response
* **metadata**: [ConfluentListMetadata](#confluentlistmetadata): Metadata of the list

## AccessListServiceAccountsSuccessResponse
### Properties
* **data**: [ServiceAccountRecord](#serviceaccountrecord)[]: Data of the service accounts list
* **kind**: string: Type of response
* **metadata**: [ConfluentListMetadata](#confluentlistmetadata): Metadata of the list

## AccessListUsersSuccessResponse
### Properties
* **data**: [UserRecord](#userrecord)[]: Data of the users list
* **kind**: string: Type of response
* **metadata**: [ConfluentListMetadata](#confluentlistmetadata): Metadata of the list

## ClusterByokEntity
### Properties
* **id**: string: ID of the referred resource
* **related**: string: API URL for accessing or modifying the referred object
* **resource_name**: string: CRN reference to the referred resource

## ClusterConfigEntity
### Properties
* **kind**: string: The lifecycle phase of the cluster

## ClusterEnvironmentEntity
### Properties
* **environment**: string: Environment of the referred resource
* **id**: string: ID of the referred resource
* **related**: string: API URL for accessing or modifying the referred object
* **resource_name**: string: CRN reference to the referred resource

## ClusterNetworkEntity
### Properties
* **environment**: string: Environment of the referred resource
* **id**: string: ID of the referred resource
* **related**: string: API URL for accessing or modifying the referred object
* **resource_name**: string: CRN reference to the referred resource

## ClusterRecord
### Properties
* **display_name**: string: Display name of the user
* **id**: string: Id of the environment
* **kind**: string: Type of environment
* **metadata**: [MetadataEntity](#metadataentity): Metadata of the record
* **spec**: [ClusterSpecEntity](#clusterspecentity): Specification of the cluster
* **status**: [ClusterStatusEntity](#clusterstatusentity): Specification of the cluster

## ClusterSpecEntity
### Properties
* **api_endpoint**: string: The Kafka API cluster endpoint
* **availability**: string: The availability zone configuration of the cluster
* **byok**: [ClusterByokEntity](#clusterbyokentity): Specification of the cluster
* **cloud**: string: The cloud service provider
* **config**: [ClusterConfigEntity](#clusterconfigentity): Specification of the cluster
* **display_name**: string: The name of the cluster
* **environment**: [ClusterEnvironmentEntity](#clusterenvironmententity): Specification of the cluster
* **http_endpoint**: string: The cluster HTTP request URL.
* **kafka_bootstrap_endpoint**: string: The bootstrap endpoint used by Kafka clients to connect to the cluster
* **network**: [ClusterNetworkEntity](#clusternetworkentity): Specification of the cluster
* **region**: string: The cloud service provider region
* **zone**: string: type of zone availability

## ClusterStatusEntity
### Properties
* **cku**: int: The number of Confluent Kafka Units
* **phase**: string: The lifecycle phase of the cluster

## ConfluentAgreementProperties
### Properties
* **accepted**: bool: If any version of the terms have been accepted, otherwise false.
* **licenseTextLink**: string: Link to HTML with Microsoft and Publisher terms.
* **plan**: string: Plan identifier string.
* **privacyPolicyLink**: string: Link to the privacy policy of the publisher.
* **product**: string: Product identifier string.
* **publisher**: string: Publisher identifier string.
* **retrieveDatetime**: string: Date and time in UTC of when the terms were accepted. This is empty if Accepted is false.
* **signature**: string: Terms signature.

## ConfluentListMetadata
### Properties
* **first**: string: First page of the list
* **last**: string: Last page of the list
* **next**: string: Next page of the list
* **prev**: string: Previous page of the list
* **total_size**: int: Total size of the list

## EnvironmentRecord
### Properties
* **display_name**: string: Display name of the user
* **id**: string: Id of the environment
* **kind**: string: Type of environment
* **metadata**: [MetadataEntity](#metadataentity): Metadata of the record

## InvitationRecord
### Properties
* **accepted_at**: string: Accepted date time of the invitation
* **auth_type**: string: Auth type of the user
* **email**: string: Email of the user
* **expires_at**: string: Expiration date time of the invitation
* **id**: string: Id of the invitation
* **kind**: string: Type of account
* **metadata**: [MetadataEntity](#metadataentity): Metadata of the record
* **status**: string: Status of the invitation

## LinkOrganization
### Properties
* **token**: string {sensitive} (Required, WriteOnly): User auth token

## ListAccessRequestModel
### Properties
* **searchFilters**: [ListAccessRequestModelSearchFilters](#listaccessrequestmodelsearchfilters): Search filters for the request

## ListAccessRequestModelSearchFilters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetadataEntity
### Properties
* **created_at**: string: Created Date Time
* **deleted_at**: string: Deleted Date time
* **resource_name**: string: Resource name of the record
* **self**: string: Self lookup url
* **updated_at**: string: Updated Date time

## OfferDetail
### Properties
* **id**: string {maxLength: 50} (Required): Offer Id
* **planId**: string {maxLength: 200} (Required): Offer Plan Id
* **planName**: string {maxLength: 200} (Required): Offer Plan Name
* **privateOfferId**: string {maxLength: 255}: Private Offer Id
* **privateOfferIds**: string[]: Array of Private Offer Ids
* **publisherId**: string {maxLength: 50} (Required): Publisher Id
* **status**: 'Failed' | 'InProgress' | 'PendingFulfillmentStart' | 'Reinstated' | 'Started' | 'Subscribed' | 'Succeeded' | 'Suspended' | 'Unsubscribed' | 'Updating' | string: SaaS Offer Status
* **termId**: string {maxLength: 50}: Offer Plan Term Id
* **termUnit**: string {maxLength: 25} (Required): Offer Plan Term unit

## OrganizationResource
### Properties
* **id**: string (ReadOnly): The ARM id of the resource.
* **location**: string: Location of Organization resource
* **name**: string (ReadOnly): The name of the resource.
* **properties**: [OrganizationResourceProperties](#organizationresourceproperties) (Required): Organization resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **tags**: [OrganizationResourceTags](#organizationresourcetags): Organization resource tags
* **type**: string (ReadOnly): The type of the resource.

## OrganizationResourceProperties
### Properties
* **createdTime**: string (ReadOnly): The creation time of the resource.
* **linkOrganization**: [LinkOrganization](#linkorganization): Link an existing Confluent organization
* **offerDetail**: [OfferDetail](#offerdetail) (Required): Confluent offer detail
* **organizationId**: string (ReadOnly): Id of the Confluent organization.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provision states for confluent RP
* **ssoUrl**: string (ReadOnly): SSO url for the Confluent organization.
* **userDetail**: [UserDetail](#userdetail) (Required): Subscriber detail

## OrganizationResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## OrganizationResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RoleBindingRecord
### Properties
* **crn_pattern**: string: A CRN that specifies the scope and resource patterns necessary for the role to bind
* **id**: string: Id of the role
* **kind**: string: The type of the resource.
* **metadata**: [MetadataEntity](#metadataentity): Metadata of the record
* **principal**: string: The principal User or Group to bind the role to
* **role_name**: string: The name of the role to bind to the principal

## ServiceAccountRecord
### Properties
* **description**: string: Description of the service account
* **display_name**: string: Name of the service account
* **id**: string: Id of the service account
* **kind**: string: Type of account
* **metadata**: [MetadataEntity](#metadataentity): Metadata of the record

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## UserDetail
### Properties
* **aadEmail**: string: AAD email address
* **emailAddress**: string {pattern: "^\S+@\S+\.\S+$"} (Required): Email address
* **firstName**: string {maxLength: 50}: First name
* **lastName**: string {maxLength: 50}: Last name
* **userPrincipalName**: string: User principal name

## UserRecord
### Properties
* **auth_type**: string: Auth type of the user
* **email**: string: Email of the user
* **full_name**: string: Name of the user
* **id**: string: Id of the user
* **kind**: string: Type of account
* **metadata**: [MetadataEntity](#metadataentity): Metadata of the record

## ValidationResponse
### Properties
* **info**: [ValidationResponseInfo](#validationresponseinfo): Info from the response

## ValidationResponseInfo
### Properties
### Additional Properties
* **Additional Properties Type**: string

