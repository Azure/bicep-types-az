# Microsoft.GcpConnector @ 2027-01-01

## Resource Microsoft.GcpConnector/storageBuckets@2027-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2027-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^(?=.{0,259}[^\s.]$)(?!.*[<>%&\?/#])"} (Required, DeployTimeConstant): The resource name
* **properties**: [BucketProperties](#bucketproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.GcpConnector/storageBuckets' (ReadOnly, DeployTimeConstant): The resource type

## BucketAccessControl
### Properties
* **bucket**: string: The name of the bucket.
* **domain**: string: The domain associated with the entity, if any.
* **email**: string: The email address associated with the entity, if any.
* **entity**: string: The entity holding the permission, in one of the following forms: 
- user-userId 
- user-email 
- group-groupId 
- group-email 
- domain-domain 
- project-team-projectId 
- allUsers 
- allAuthenticatedUsers Examples: 
- The user liz@example.com would be user-liz@example.com. 
- The group example@googlegroups.com would be group-example@googlegroups.com. 
- To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
* **entityId**: string: The ID for the entity, if any.
* **etag**: string: HTTP 1.1 Entity tag for the access-control entry.
* **id**: string: The ID of the access-control entry.
* **kind**: string: The kind of item this is. For bucket access control entries, this is always storage#bucketAccessControl.
* **projectTeam**: [BucketAccessControlProjectTeam](#bucketaccesscontrolprojectteam): The project team associated with the entity, if any.
* **role**: string: The access permission for the entity.
* **selfLink**: string: The link to this access-control entry.

## BucketAccessControlProjectTeam
### Properties
* **projectNumber**: string: The project number.
* **team**: string: The team.

## BucketProperties
### Properties
* **gcpProjectId**: string: GCP Project Id
* **gcpProjectNumber**: string: GCP Project Number
* **gcpProperties**: [GcpBucketProperties](#gcpbucketproperties): GCP Properties
* **gcpRegion**: string: GCP Region
* **gcpSourceSchema**: string: GCP Source Schema
* **gcpTags**: [BucketPropertiesGcpTags](#bucketpropertiesgcptags): GCP Tags
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.
* **publicCloudConnectorsResourceId**: string: Public Cloud Connectors Resource ID
* **publicCloudResourceName**: string: Public Cloud Resource Name
* **resourceName**: string: Fully qualified resource name of the GCP resource

## BucketPropertiesGcpTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GcpBucketProperties
### Properties
* **acl**: [BucketAccessControl](#bucketaccesscontrol)[]: Access controls on the bucket.
* **autoclass**: [GcpBucketPropertiesAutoclass](#gcpbucketpropertiesautoclass): The bucket's Autoclass configuration.
* **billing**: [GcpBucketPropertiesBilling](#gcpbucketpropertiesbilling): The bucket's billing configuration.
* **cors**: [GcpBucketPropertiesCorsItem](#gcpbucketpropertiescorsitem)[]: The bucket's Cross-Origin Resource Sharing (CORS) configuration.
* **customPlacementConfig**: [GcpBucketPropertiesCustomPlacementConfig](#gcpbucketpropertiescustomplacementconfig): The bucket's custom placement configuration for Custom Dual Regions.
* **defaultEventBasedHold**: bool: The default value for event-based hold on newly created objects in this bucket. Event-based hold is a way to retain objects indefinitely until an event occurs, signified by the hold's release. After being released, such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false. Objects under event-based hold cannot be deleted, overwritten or archived until the hold is removed.
* **defaultObjectAcl**: [ObjectAccessControl](#objectaccesscontrol)[]: Default access controls to apply to new objects when no ACL is provided.
* **encryption**: [GcpBucketPropertiesEncryption](#gcpbucketpropertiesencryption): Encryption configuration for a bucket.
* **etag**: string: HTTP 1.1 Entity tag for the bucket.
* **generation**: string: The content generation of this object. Used for object versioning..
* **hierarchicalNamespace**: [GcpBucketPropertiesHierarchicalNamespace](#gcpbucketpropertieshierarchicalnamespace): The bucket's hierarchical namespace configuration.
* **iamConfiguration**: [GcpBucketPropertiesIamConfiguration](#gcpbucketpropertiesiamconfiguration): The bucket's IAM configuration.
* **id**: string: The ID of the bucket. For buckets, the id and name properties are the same.
* **kind**: string: The kind of item this is. For buckets, this is always storage#bucket.
* **labels**: [GcpBucketPropertiesLabels](#gcpbucketpropertieslabels): User-provided labels, in key/value pairs.
* **lifecycle**: [GcpBucketPropertiesLifecycle](#gcpbucketpropertieslifecycle): The bucket's lifecycle configuration. See lifecycle management for more information.
* **location**: string: The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to US. See the developer's guide for the authoritative list.
* **locationType**: string: The type of the bucket location.
* **logging**: [GcpBucketPropertiesLogging](#gcpbucketpropertieslogging): The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.
* **metageneration**: string: The metadata generation of this bucket.
* **name**: string: The name of the bucket.
* **objectRetention**: [GcpBucketPropertiesObjectRetention](#gcpbucketpropertiesobjectretention): The bucket's object retention config.
* **owner**: [GcpBucketPropertiesOwner](#gcpbucketpropertiesowner): The owner of the bucket. This is always the project team's owner group.
* **projectNumber**: string: The project number of the project the bucket belongs to.
* **retentionPolicy**: [GcpBucketPropertiesRetentionPolicy](#gcpbucketpropertiesretentionpolicy): The bucket's retention policy. The retention policy enforces a minimum retention time for all objects contained in the bucket, based on their creation time. Any attempt to overwrite or delete objects younger than the retention period will result in a PERMISSION_DENIED error. An unlocked retention policy can be modified or removed from the bucket via a storage.buckets.update operation. A locked retention policy cannot be removed or shortened in duration for the lifetime of the bucket. Attempting to remove or decrease period of a locked retention policy will result in a PERMISSION_DENIED error.
* **rpo**: string: The Recovery Point Objective (RPO) of this bucket. Set to ASYNC_TURBO to turn on Turbo Replication on a bucket.
* **satisfiesPZS**: bool: Reserved for future use.
* **selfLink**: string: The URI of this bucket.
* **softDeletePolicy**: [GcpBucketPropertiesSoftDeletePolicy](#gcpbucketpropertiessoftdeletepolicy): The bucket's soft delete policy, which defines the period of time that soft-deleted objects will be retained, and cannot be permanently deleted.
* **storageClass**: string: The bucket's default storage class, used whenever no storageClass is specified for a newly-created object. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Values include MULTI_REGIONAL, REGIONAL, STANDARD, NEARLINE, COLDLINE, ARCHIVE, and DURABLE_REDUCED_AVAILABILITY. If this value is not specified when the bucket is created, it will default to STANDARD. For more information, see storage classes.
* **timeCreated**: string: The creation time of the bucket in RFC 3339 format.
* **updated**: string: The modification time of the bucket in RFC 3339 format.
* **versioning**: [GcpBucketPropertiesVersioning](#gcpbucketpropertiesversioning): The bucket's versioning configuration.
* **website**: [GcpBucketPropertiesWebsite](#gcpbucketpropertieswebsite): The bucket's website configuration, controlling how the service behaves when accessing bucket contents as a web site. See the Static Website Examples for more information.

## GcpBucketPropertiesAutoclass
### Properties
* **enabled**: bool: Whether or not Autoclass is enabled on this bucket
* **terminalStorageClass**: string: The storage class that objects in the bucket eventually transition to if they are not read for a certain length of time. Valid values are NEARLINE and ARCHIVE.
* **terminalStorageClassUpdateTime**: string: A date and time in RFC 3339 format representing the time of the most recent update to \"terminalStorageClass\"
* **toggleTime**: string: A date and time in RFC 3339 format representing the instant at which \"enabled\" was last toggled.

## GcpBucketPropertiesBilling
### Properties
* **requesterPays**: bool: When set to true, Requester Pays is enabled for this bucket.

## GcpBucketPropertiesCorsItem
### Properties
* **maxAgeSeconds**: int: The value, in seconds, to return in the  Access-Control-Max-Age header used in preflight responses.
* **method**: string[]: The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: '*' is permitted in the list of methods, and means 'any method'.
* **origin**: string[]: The list of Origins eligible to receive CORS response headers. Note: '*' is permitted in the list of origins, and means 'any Origin'.
* **responseHeader**: string[]: The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.

## GcpBucketPropertiesCustomPlacementConfig
### Properties
* **dataLocations**: string[]: The list of regional locations in which data is placed.

## GcpBucketPropertiesEncryption
### Properties
* **defaultKmsKeyName**: string: A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified.

## GcpBucketPropertiesHierarchicalNamespace
### Properties
* **enabled**: bool: When set to true, hierarchical namespace is enabled for this bucket.

## GcpBucketPropertiesIamConfiguration
### Properties
* **bucketPolicyOnly**: [GcpBucketPropertiesIamConfigurationBucketPolicyOnly](#gcpbucketpropertiesiamconfigurationbucketpolicyonly): The bucket's uniform bucket-level access configuration. The feature was formerly known as Bucket Policy Only. For backward compatibility, this field will be populated with identical information as the uniformBucketLevelAccess field. We recommend using the uniformBucketLevelAccess field to enable and disable the feature.
* **publicAccessPrevention**: string: The bucket's Public Access Prevention configuration. Currently, 'inherited' and 'enforced' are supported.
* **uniformBucketLevelAccess**: [GcpBucketPropertiesIamConfigurationUniformBucketLevelAccess](#gcpbucketpropertiesiamconfigurationuniformbucketlevelaccess): The bucket's uniform bucket-level access configuration.

## GcpBucketPropertiesIamConfigurationBucketPolicyOnly
### Properties
* **enabled**: bool: If set, access is controlled only by bucket-level or above IAM policies.
* **lockedTime**: string: The deadline for changing iamConfiguration.bucketPolicyOnly.enabled from true to false in RFC 3339 format. iamConfiguration.bucketPolicyOnly.enabled may be changed from true to false until the locked time, after which the field is immutable.

## GcpBucketPropertiesIamConfigurationUniformBucketLevelAccess
### Properties
* **enabled**: bool: If set, access is controlled only by bucket-level or above IAM policies.
* **lockedTime**: string: The deadline for changing iamConfiguration.uniformBucketLevelAccess.enabled from true to false in RFC 3339  format. iamConfiguration.uniformBucketLevelAccess.enabled may be changed from true to false until the locked time, after which the field is immutable.

## GcpBucketPropertiesLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GcpBucketPropertiesLifecycle
### Properties
* **rule**: [GcpBucketPropertiesLifecycleRuleItem](#gcpbucketpropertieslifecycleruleitem)[]: A lifecycle management rule, which is made of an action to take and the condition(s) under which the action will be taken.

## GcpBucketPropertiesLifecycleRuleItem
### Properties
* **action**: [GcpBucketPropertiesLifecycleRuleItemAction](#gcpbucketpropertieslifecycleruleitemaction): The action to take.
* **condition**: [GcpBucketPropertiesLifecycleRuleItemCondition](#gcpbucketpropertieslifecycleruleitemcondition): The condition(s) under which the action will be taken.

## GcpBucketPropertiesLifecycleRuleItemAction
### Properties
* **storageClass**: string: Target storage class. Required iff the type of the action is SetStorageClass.
* **type**: string: Type of the action. Currently, only Delete, SetStorageClass, and AbortIncompleteMultipartUpload are supported.

## GcpBucketPropertiesLifecycleRuleItemCondition
### Properties
* **age**: int: Age of an object (in days). This condition is satisfied when an object reaches the specified age.
* **createdBefore**: string: A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). This condition is satisfied when an object is created before midnight of the specified date in UTC.
* **customTimeBefore**: string: A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). This condition is satisfied when the custom time on an object is before this date in UTC.
* **daysSinceCustomTime**: int: Number of days elapsed since the user-specified timestamp set on an object. The condition is satisfied if the days elapsed is at least this number. If no custom timestamp is specified on an object, the condition does not apply.
* **daysSinceNoncurrentTime**: int: Number of days elapsed since the noncurrent timestamp of an object. The condition is satisfied if the days elapsed is at least this number. This condition is relevant only for versioned objects. The value of the field must be a nonnegative integer. If it's zero, the object version will become eligible for Lifecycle action as soon as it becomes noncurrent.
* **isLive**: bool: Relevant only for versioned objects. If the value is true, this condition matches live objects; if the value is false, it matches archived objects.
* **matchesPattern**: string: A regular expression that satisfies the RE2 syntax. This condition is satisfied when the name of the object matches the RE2 pattern. Note: This feature is currently in the "Early Access" launch stage and is only available to a whitelisted set of users; that means that this feature may be changed in backward-incompatible ways and that it is not guaranteed to be released.
* **matchesPrefix**: string[]: List of object name prefixes. This condition will be satisfied when at least one of the prefixes exactly matches the beginning of the object name.
* **matchesStorageClass**: string[]: Objects having any of the storage classes specified by this condition will be matched. Values include MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, and DURABLE_REDUCED_AVAILABILITY.
* **matchesSuffix**: string[]: List of object name suffixes. This condition will be satisfied when at least one of the suffixes exactly matches the end of the object name.
* **noncurrentTimeBefore**: string: A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). This condition is satisfied when the noncurrent time on an object is before this date in UTC. This condition is relevant only for versioned objects.
* **numNewerVersions**: int: Relevant only for versioned objects. If the value is N, this condition is satisfied when there are at least N versions (including the live version) newer than this version of the object.

## GcpBucketPropertiesLogging
### Properties
* **logBucket**: string: The destination bucket where the current bucket's logs should be placed.
* **logObjectPrefix**: string: A prefix for log object names.

## GcpBucketPropertiesObjectRetention
### Properties
* **mode**: string: The bucket's object retention mode. Can be Enabled.

## GcpBucketPropertiesOwner
### Properties
* **entity**: string: The entity, in the form project-owner-projectId.
* **entityId**: string: The ID for the entity.

## GcpBucketPropertiesRetentionPolicy
### Properties
* **effectiveTime**: string: Server-determined value that indicates the time from which policy was enforced and effective. This value is in RFC 3339 format.
* **isLocked**: bool: Once locked, an object retention policy cannot be modified.
* **retentionPeriod**: string: The duration in seconds that objects need to be retained. Retention duration must be greater than zero and less than 100 years. Note that enforcement of retention periods less than a day is not guaranteed. Such periods should only be used for testing purposes.

## GcpBucketPropertiesSoftDeletePolicy
### Properties
* **effectiveTime**: string: Server-determined value that indicates the time from which the policy, or one with a greater retention, was effective. This value is in RFC 3339 format.
* **retentionDurationSeconds**: string: The duration in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted.

## GcpBucketPropertiesVersioning
### Properties
* **enabled**: bool: While set to true, versioning is fully enabled for this bucket.

## GcpBucketPropertiesWebsite
### Properties
* **mainPageSuffix**: string: If the requested object path is missing, the service will ensure the path has a trailing '/', append this suffix, and attempt to retrieve the resulting object. This allows the creation of index.html objects to represent directory pages.
* **notFoundPage**: string: If the requested object path is missing, and any mainPageSuffix object is missing, if applicable, the service will return the named object from this bucket as the content for a 404 Not Found result.

## ObjectAccessControl
### Properties
* **bucket**: string: The name of the bucket.
* **domain**: string: The domain associated with the entity, if any.
* **email**: string: The email address associated with the entity, if any.
* **entity**: string: The entity holding the permission, in one of the following forms: 
- user-userId 
- user-email 
- group-groupId 
- group-email 
- domain-domain 
- project-team-projectId 
- allUsers 
- allAuthenticatedUsers Examples: 
- The user liz@example.com would be user-liz@example.com. 
- The group example@googlegroups.com would be group-example@googlegroups.com. 
- To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
* **entityId**: string: The ID for the entity, if any.
* **etag**: string: HTTP 1.1 Entity tag for the access-control entry.
* **generation**: string: The content generation of the object, if applied to an object.
* **id**: string: The ID of the access-control entry.
* **kind**: string: The kind of item this is. For object access control entries, this is always storage#objectAccessControl.
* **object**: string: The name of the object, if applied to an object.
* **projectTeam**: [ObjectAccessControlProjectTeam](#objectaccesscontrolprojectteam): The project team associated with the entity, if any.
* **role**: string: The access permission for the entity.
* **selfLink**: string: The link to this access-control entry.

## ObjectAccessControlProjectTeam
### Properties
* **projectNumber**: string: The project number.
* **team**: string: The team.

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

