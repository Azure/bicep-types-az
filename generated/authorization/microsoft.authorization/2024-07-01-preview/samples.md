# Microsoft.Authorization
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.authorization/denyassignments

Create deny assignment for subscription
```bicep
resource exampleResource 'Microsoft.Authorization/denyAssignments@2024-07-01-preview' = {
  name: 'example'
  properties: {
    description: 'Prevent all users from deleting critical resources in the subscription.'
    denyAssignmentEffect: 'enforced'
    denyAssignmentName: 'Deny delete on critical resources'
    doNotApplyToChildScopes: false
    excludePrincipals: [
      {
        type: 'ServicePrincipal'
        id: 'ce2ce14e-85d7-4629-bdbc-454d0519d987'
      }
    ]
    permissions: [
      {
        actions: [
          '*/delete'
        ]
        dataActions: [
        ]
        notActions: [
        ]
        notDataActions: [
        ]
      }
    ]
    principals: [
      {
        type: 'SystemDefined'
        id: '00000000-0000-0000-0000-000000000000'
      }
    ]
  }
}
```
