# Microsoft.SecurityInsights

## microsoft.securityinsights/incidents

Creates or updates an incident.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/incidents@2021-04-01' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  properties: {
    description: 'This is a demo incident'
    classification: 'FalsePositive'
    classificationComment: 'Not a malicious activity'
    classificationReason: 'IncorrectAlertLogic'
    firstActivityTimeUtc: '2019-01-01T13:00:30Z'
    lastActivityTimeUtc: '2019-01-01T13:05:30Z'
    owner: {
      objectId: '2046feea-040d-4a46-9e2b-91c2941bfa70'
    }
    severity: 'High'
    status: 'Closed'
    title: 'My incident'
  }
}
```

## microsoft.securityinsights/incidents/comments

Creates or updates an incident comment.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/incidents/comments@2021-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    message: 'Some message'
  }
}
```

## microsoft.securityinsights/incidents/relations

Creates or updates an incident relation.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/incidents/relations@2021-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    relatedResourceId: '/subscriptions/d0cfe6b2-9ac0-4464-9919-dccaee2e48c0/resourceGroups/myRg/providers/Microsoft.OperationalInsights/workspaces/myWorkspace/providers/Microsoft.SecurityInsights/bookmarks/2216d0e1-91e3-4902-89fd-d2df8c535096'
  }
}
```

## microsoft.securityinsights/watchlists

Create or update a watchlist and bulk creates watchlist items.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/watchlists@2021-04-01' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  properties: {
    description: 'Watchlist from CSV content'
    contentType: 'text/csv'
    displayName: 'High Value Assets Watchlist'
    itemsSearchKey: 'header1'
    numberOfLinesToSkip: 1
    provider: 'Microsoft'
    rawContent: 'This line will be skipped\nheader1,header2\nvalue1,value2'
    source: 'Local file'
  }
}
```

Create or update a watchlist.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/watchlists@2021-04-01' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  properties: {
    description: 'Watchlist from CSV content'
    displayName: 'High Value Assets Watchlist'
    itemsSearchKey: 'header1'
    provider: 'Microsoft'
    source: 'Local file'
  }
}
```

## microsoft.securityinsights/watchlists/watchlistitems

Create or update a watchlist item.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/watchlists/watchlistItems@2021-04-01' = {
  parent: parentResource 
  name: 'example'
  etag: '0300bf09-0000-0000-0000-5c37296e0000'
  properties: {
    itemsKeyValue: {
      Business tier: '10.0.2.0/24'
      Data tier: '10.0.2.0/24'
      Gateway subnet: '10.0.255.224/27'
      Private DMZ in: '10.0.0.0/27'
      Public DMZ out: '10.0.0.96/27'
      Web Tier: '10.0.1.0/24'
    }
  }
}
```
