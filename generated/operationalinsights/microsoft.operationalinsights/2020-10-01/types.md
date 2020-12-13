# Microsoft.OperationalInsights @ 2020-10-01

## Resource Microsoft.OperationalInsights/clusters@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterProperties
* **sku**: ClusterSku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.OperationalInsights/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OperationalInsights/workspaces@2020-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.OperationalInsights/workspaces' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' (Required)
* **userAssignedIdentities**: Dictionary<string,UserIdentityProperties>

## Dictionary<string,UserIdentityProperties>
### Properties
### Additional Properties
* **Additional Properties Type**: UserIdentityProperties

## UserIdentityProperties
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## ClusterProperties
### Properties
* **associatedWorkspaces**: AssociatedWorkspace[]
* **billingType**: 'Cluster' | 'Workspaces'
* **capacityReservationProperties**: CapacityReservationProperties
* **clusterId**: string (ReadOnly)
* **createdDate**: string (ReadOnly)
* **isAvailabilityZonesEnabled**: bool
* **isDoubleEncryptionEnabled**: bool
* **keyVaultProperties**: keyVaultProperties
* **lastModifiedDate**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded' | 'Updating' (ReadOnly)

## AssociatedWorkspace
### Properties
* **associateDate**: string (ReadOnly)
* **resourceId**: string (ReadOnly)
* **workspaceId**: string (ReadOnly)
* **workspaceName**: string (ReadOnly)

## CapacityReservationProperties
### Properties
* **lastSkuUpdate**: string (ReadOnly)
* **maxCapacity**: int (ReadOnly)
* **minCapacity**: int (ReadOnly)

## keyVaultProperties
### Properties
* **keyName**: string
* **keyRsaSize**: int
* **keyVaultUri**: string
* **keyVersion**: string

## ClusterSku
### Properties
* **capacity**: int
* **name**: 'CapacityReservation'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceProperties
### Properties
* **customerId**: string (ReadOnly)
* **forceCmkForQuery**: bool
* **privateLinkScopedResources**: PrivateLinkScopedResource[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded' | 'Updating'
* **publicNetworkAccessForIngestion**: 'Disabled' | 'Enabled'
* **publicNetworkAccessForQuery**: 'Disabled' | 'Enabled'
* **retentionInDays**: int
* **sku**: WorkspaceSku
* **workspaceCapping**: WorkspaceCapping

## PrivateLinkScopedResource
### Properties
* **resourceId**: string
* **scopeId**: string

## WorkspaceSku
### Properties
* **capacityReservationLevel**: int
* **lastSkuUpdate**: string (ReadOnly)
* **maxCapacityReservationLevel**: int (ReadOnly)
* **name**: 'CapacityReservation' | 'Free' | 'LACluster' | 'PerGB2018' | 'PerNode' | 'Premium' | 'Standalone' | 'Standard' (Required)

## WorkspaceCapping
### Properties
* **dailyQuotaGb**: int
* **dataIngestionStatus**: 'ApproachingQuota' | 'ForceOff' | 'ForceOn' | 'OverQuota' | 'RespectQuota' | 'SubscriptionSuspended' (ReadOnly)
* **quotaNextResetTime**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

