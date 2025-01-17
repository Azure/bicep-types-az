# Microsoft.Insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.insights/workbooktemplates

WorkbookTemplateAdd
```bicep
resource exampleResource 'Microsoft.Insights/workbooktemplates@2020-11-20' = {
  name: 'example'
  location: 'west us'
  properties: {
    author: 'Contoso'
    galleries: [
      {
        name: 'Simple Template'
        type: 'tsg'
        category: 'Failures'
        order: 100
        resourceType: 'microsoft.insights/components'
      }
    ]
    priority: 1
    templateData: {
      '$schema': 'https://github.com/Microsoft/Application-Insights-Workbooks/blob/master/schema/workbook.json'
      items: [
        {
          name: 'text - 2'
          type: 1
          content: {
            json: '## New workbook\n---\n\nWelcome to your new workbook.  This area will display text formatted as markdown.\n\n\nWe\'ve included a basic analytics query to get you started. Use the `Edit` button below each section to configure it or add more sections.'
          }
        }
        {
          name: 'query - 2'
          type: 3
          content: {
            exportToExcelOptions: 'visible'
            query: 'union withsource=TableName *\n| summarize Count=count() by TableName\n| render barchart'
            queryType: 0
            resourceType: 'microsoft.operationalinsights/workspaces'
            size: 1
            version: 'KqlItem/1.0'
          }
        }
      ]
      styleSettings: {
      }
      version: 'Notebook/1.0'
    }
  }
  tags: {
  }
}
```
