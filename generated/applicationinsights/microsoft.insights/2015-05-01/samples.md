# Microsoft.Insights

## microsoft.insights/components/favorites

FavoriteAdd
```bicep
resource exampleResource 'Microsoft.Insights/components/favorites@2015-05-01' = {
  parent: parentResource 
  name: 'example'
  Category: {
  }
  Config: '{"MEDataModelRawJSON":"{\\n  \\"version\\": \\"1.4.1\\",\\n  \\"isCustomDataModel\\": true,\\n  \\"items\\": [\\n    {\\n      \\"id\\": \\"90a7134d-9a38-4c25-88d3-a495209873eb\\",\\n      \\"chartType\\": \\"Area\\",\\n      \\"chartHeight\\": 4,\\n      \\"metrics\\": [\\n        {\\n          \\"id\\": \\"preview/requests/count\\",\\n          \\"metricAggregation\\": \\"Sum\\",\\n          \\"color\\": \\"msportalfx-bgcolor-d0\\"\\n        }\\n      ],\\n      \\"priorPeriod\\": false,\\n      \\"clickAction\\": {\\n        \\"defaultBlade\\": \\"SearchBlade\\"\\n      },\\n      \\"horizontalBars\\": true,\\n      \\"showOther\\": true,\\n      \\"aggregation\\": \\"Sum\\",\\n      \\"percentage\\": false,\\n      \\"palette\\": \\"fail\\",\\n      \\"yAxisOption\\": 0,\\n      \\"title\\": \\"\\"\\n    },\\n    {\\n      \\"id\\": \\"0c289098-88e8-4010-b212-546815cddf70\\",\\n      \\"chartType\\": \\"Area\\",\\n      \\"chartHeight\\": 2,\\n      \\"metrics\\": [\\n        {\\n          \\"id\\": \\"preview/requests/duration\\",\\n          \\"metricAggregation\\": \\"Avg\\",\\n          \\"color\\": \\"msportalfx-bgcolor-j1\\"\\n        }\\n      ],\\n      \\"priorPeriod\\": false,\\n      \\"clickAction\\": {\\n        \\"defaultBlade\\": \\"SearchBlade\\"\\n      },\\n      \\"horizontalBars\\": true,\\n      \\"showOther\\": true,\\n      \\"aggregation\\": \\"Avg\\",\\n      \\"percentage\\": false,\\n      \\"palette\\": \\"greenHues\\",\\n      \\"yAxisOption\\": 0,\\n      \\"title\\": \\"\\"\\n    },\\n    {\\n      \\"id\\": \\"cbdaab6f-a808-4f71-aca5-b3976cbb7345\\",\\n      \\"chartType\\": \\"Bar\\",\\n      \\"chartHeight\\": 4,\\n      \\"metrics\\": [\\n        {\\n          \\"id\\": \\"preview/requests/duration\\",\\n          \\"metricAggregation\\": \\"Avg\\",\\n          \\"color\\": \\"msportalfx-bgcolor-d0\\"\\n        }\\n      ],\\n      \\"priorPeriod\\": false,\\n      \\"clickAction\\": {\\n        \\"defaultBlade\\": \\"SearchBlade\\"\\n      },\\n      \\"horizontalBars\\": true,\\n      \\"showOther\\": true,\\n      \\"aggregation\\": \\"Avg\\",\\n      \\"percentage\\": false,\\n      \\"palette\\": \\"magentaHues\\",\\n      \\"yAxisOption\\": 0,\\n      \\"title\\": \\"\\"\\n    },\\n    {\\n      \\"id\\": \\"1d5a6a3a-9fa1-4099-9cf9-05eff72d1b02\\",\\n      \\"grouping\\": {\\n        \\"kind\\": \\"ByDimension\\",\\n        \\"dimension\\": \\"context.application.version\\"\\n      },\\n      \\"chartType\\": \\"Grid\\",\\n      \\"chartHeight\\": 1,\\n      \\"metrics\\": [\\n        {\\n          \\"id\\": \\"basicException.count\\",\\n          \\"metricAggregation\\": \\"Sum\\",\\n          \\"color\\": \\"msportalfx-bgcolor-g0\\"\\n        },\\n        {\\n          \\"id\\": \\"requestFailed.count\\",\\n          \\"metricAggregation\\": \\"Sum\\",\\n          \\"color\\": \\"msportalfx-bgcolor-f0s2\\"\\n        }\\n      ],\\n      \\"priorPeriod\\": true,\\n      \\"clickAction\\": {\\n        \\"defaultBlade\\": \\"SearchBlade\\"\\n      },\\n      \\"horizontalBars\\": true,\\n      \\"showOther\\": true,\\n      \\"percentage\\": false,\\n      \\"palette\\": \\"blueHues\\",\\n      \\"yAxisOption\\": 0,\\n      \\"title\\": \\"\\"\\n    }\\n  ],\\n  \\"currentFilter\\": {\\n    \\"eventTypes\\": [\\n      1,\\n      2\\n    ],\\n    \\"typeFacets\\": {},\\n    \\"isPermissive\\": false\\n  },\\n  \\"timeContext\\": {\\n    \\"durationMs\\": 75600000,\\n    \\"endTime\\": \\"2018-01-31T20:30:00.000Z\\",\\n    \\"createdTime\\": \\"2018-01-31T23:54:26.280Z\\",\\n    \\"isInitialTime\\": false,\\n    \\"grain\\": 1,\\n    \\"useDashboardTimeRange\\": false\\n  },\\n  \\"jsonUri\\": \\"Favorite_BlankChart\\",\\n  \\"timeSource\\": 0\\n}"}'
  FavoriteId: 'deadb33f-8bee-4d3b-a059-9be8dac93960'
  FavoriteType: 'shared'
  IsGeneratedFromTemplate: false
  Name: 'Blah Blah Blah'
  SourceType: {
  }
  Tags: [
    'TagSample01'
    'TagSample02'
  ]
  TimeModified: {
  }
  Version: 'ME'
}
```

## microsoft.insights/components/analyticsitems

AnalyticsItemPut
```bicep
resource exampleResource 'microsoft.insights/components/analyticsItems@2015-05-01' = {
  parent: parentResource 
  name: 'example'
  Content: 'let newExceptionsTimeRange = 1d;\nlet timeRangeToCheckBefore = 7d;\nexceptions\n| where timestamp < ago(timeRangeToCheckBefore)\n| summarize count() by problemId\n| join kind= rightanti (\nexceptions\n| where timestamp >= ago(newExceptionsTimeRange)\n| extend stack = tostring(details[0].rawStack)\n| summarize count(), dcount(user_AuthenticatedId), min(timestamp), max(timestamp), any(stack) by problemId  \n) on problemId \n| order by  count_ desc\n'
  Name: 'Exceptions - New in the last 24 hours'
  Scope: 'shared'
  Type: 'query'
}
```

## microsoft.insights/components/myanalyticsitems

AnalyticsItemPut
```bicep
resource exampleResource 'microsoft.insights/components/myanalyticsItems@2015-05-01' = {
  parent: parentResource 
  name: 'example'
  Content: 'let newExceptionsTimeRange = 1d;\nlet timeRangeToCheckBefore = 7d;\nexceptions\n| where timestamp < ago(timeRangeToCheckBefore)\n| summarize count() by problemId\n| join kind= rightanti (\nexceptions\n| where timestamp >= ago(newExceptionsTimeRange)\n| extend stack = tostring(details[0].rawStack)\n| summarize count(), dcount(user_AuthenticatedId), min(timestamp), max(timestamp), any(stack) by problemId  \n) on problemId \n| order by  count_ desc\n'
  Name: 'Exceptions - New in the last 24 hours'
  Scope: 'shared'
  Type: 'query'
}
```

## microsoft.insights/workbooks

WorkbookAdd
```bicep
resource exampleResource 'microsoft.insights/workbooks@2015-05-01' = {
  name: 'example'
  name: 'deadb33f-8bee-4d3b-a059-9be8dac93960'
  id: 'c0deea5e-3344-40f2-96f8-6f8e1c3b5722'
  location: 'west us'
  properties: {
    name: 'Blah Blah Blah'
    category: 'workbook'
    kind: 'shared'
    serializedData: '{"version":"Notebook/1.0","items":[{"type":1,"content":"{"json":"## New workbook\\r\\n---\\r\\n\\r\\nWelcome to your new workbook.  This area will display text formatted as markdown.\\r\\n\\r\\n\\r\\nWe\'ve included a basic analytics query to get you started. Use the `Edit` button below each section to configure it or add more sections."}","halfWidth":null,"conditionalVisibility":null},{"type":3,"content":"{"version":"KqlItem/1.0","query":"union withsource=TableName *\\n| summarize Count=count() by TableName\\n| render barchart","showQuery":false,"size":1,"aggregation":0,"showAnnotations":false}","halfWidth":null,"conditionalVisibility":null}],"isLocked":false}'
    sourceResourceId: '/subscriptions/00000000-0000-0000-0000-00000000/resourceGroups/MyGroup/providers/Microsoft.Web/sites/MyTestApp-CodeLens'
    timeModified: {
    }
    userId: 'userId'
    workbookId: 'deadb33f-8bee-4d3b-a059-9be8dac93960'
  }
  tags: [
    'TagSample01'
    'TagSample02'
  ]
}
```

## microsoft.insights/myworkbooks

WorkbookAdd
```bicep
resource exampleResource 'Microsoft.Insights/myWorkbooks@2015-05-01' = {
  name: 'example'
  name: 'deadb33f-8bee-4d3b-a059-9be8dac93960'
  id: 'c0deea5e-3344-40f2-96f8-6f8e1c3b5722'
  kind: 'user'
  location: 'west us'
  properties: {
    category: 'workbook'
    displayName: 'Blah Blah Blah'
    serializedData: '{"version":"Notebook/1.0","items":[{"type":1,"content":"{"json":"## New workbook\\r\\n---\\r\\n\\r\\nWelcome to your new workbook.  This area will display text formatted as markdown.\\r\\n\\r\\n\\r\\nWe\'ve included a basic analytics query to get you started. Use the `Edit` button below each section to configure it or add more sections."}","halfWidth":null,"conditionalVisibility":null},{"type":3,"content":"{"version":"KqlItem/1.0","query":"union withsource=TableName *\\n| summarize Count=count() by TableName\\n| render barchart","showQuery":false,"size":1,"aggregation":0,"showAnnotations":false}","halfWidth":null,"conditionalVisibility":null}],"isLocked":false}'
    sourceId: '/subscriptions/00000000-0000-0000-0000-00000000/resourceGroups/MyGroup/providers/Microsoft.Web/sites/MyTestApp-CodeLens'
  }
  tags: [
    'TagSample01'
    'TagSample02'
  ]
}
```
