# Microsoft.VideoIndexer
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.videoindexer/accounts

Put example #1
```bicep
resource exampleResource 'Microsoft.VideoIndexer/accounts@2022-04-13-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi: {
      }
    }
  }
  location: 'NorthEurope'
  properties: {
    mediaServices: {
      resourceId: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.Media/mediaservices/contoso-videoanalyzer-ms'
      userAssignedIdentity: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi'
    }
  }
}
```

Put example #10
```bicep
resource exampleResource 'Microsoft.VideoIndexer/accounts@2022-04-13-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
    }
  }
  location: 'NorthEurope'
  properties: {
    mediaServices: {
      resourceId: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.Media/mediaservices/contoso-videoanalyzer-ms'
      userAssignedIdentity: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi'
    }
  }
}
```

Put example #2
```bicep
resource exampleResource 'Microsoft.VideoIndexer/accounts@2022-04-13-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi: {
      }
    }
  }
  location: 'NorthEurope'
  properties: {
    mediaServices: {
      resourceId: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.Media/mediaservices/contoso-videoanalyzer-ms'
      userAssignedIdentity: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi'
    }
  }
}
```

Put example #3
```bicep
resource exampleResource 'Microsoft.VideoIndexer/accounts@2022-04-13-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi: {
      }
    }
  }
  location: 'NorthEurope'
  properties: {
    mediaServices: {
      resourceId: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.Media/mediaservices/contoso-videoanalyzer-ms'
      userAssignedIdentity: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi'
    }
  }
}
```

Put example #4
```bicep
resource exampleResource 'Microsoft.VideoIndexer/accounts@2022-04-13-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi: {
      }
    }
  }
  location: 'NorthEurope'
  properties: {
    mediaServices: {
      resourceId: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.Media/mediaservices/contoso-videoanalyzer-ms'
      userAssignedIdentity: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi'
    }
  }
}
```

Put example #5
```bicep
resource exampleResource 'Microsoft.VideoIndexer/accounts@2022-04-13-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi: {
      }
    }
  }
  location: 'NorthEurope'
  properties: {
    mediaServices: {
      resourceId: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.Media/mediaservices/contoso-videoanalyzer-ms'
      userAssignedIdentity: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi'
    }
  }
}
```

Put example #6
```bicep
resource exampleResource 'Microsoft.VideoIndexer/accounts@2022-04-13-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi: {
      }
    }
  }
  location: 'NorthEurope'
  properties: {
    mediaServices: {
      resourceId: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.Media/mediaservices/contoso-videoanalyzer-ms'
      userAssignedIdentity: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi'
    }
  }
}
```

Put example #7
```bicep
resource exampleResource 'Microsoft.VideoIndexer/accounts@2022-04-13-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi: {
      }
    }
  }
  location: 'NorthEurope'
  properties: {
    mediaServices: {
      resourceId: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.Media/mediaservices/contoso-videoanalyzer-ms'
      userAssignedIdentity: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi'
    }
  }
}
```

Put example #8
```bicep
resource exampleResource 'Microsoft.VideoIndexer/accounts@2022-04-13-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      subscriptions/24237b72-8546-4da5-b204-8c3cb76dd930/resourceGroups/uratzmon-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/talshoham: {
      }
    }
  }
  location: 'NorthEurope'
  properties: {
    mediaServices: {
      resourceId: '/subscriptions/24237b72-8546-4da5-b204-8c3cb76dd930/resourceGroups/uratzmon-rg/providers/Microsoft.Media/mediaservices/talshoham'
    }
  }
}
```

Put example #9
```bicep
resource exampleResource 'Microsoft.VideoIndexer/accounts@2022-04-13-preview' = {
  name: 'example'
}
```
