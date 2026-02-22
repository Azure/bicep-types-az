# Informatica.DataManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## informatica.datamanagement/organizations

Organizations_CreateOrUpdate
```bicep
resource exampleResource 'Informatica.DataManagement/organizations@2024-07-22-preview' = {
  name: 'example'
  location: 'xzxsmrwpjirfwlpwvqqzl'
  properties: {
    companyDetails: {
      business: 'fcwl'
      companyName: 'ojnudybsvzlctx'
      country: 'ovntcjqoxdxmigfbkudliwqvsjhu'
      domain: 'hmhnsaowkgfmotqkwc'
      numberOfEmployees: 27
      officeAddress: 'jhdbeqezwgwpxrcaofkmggi'
    }
    informaticaProperties: {
      informaticaRegion: 'qyymbrebpx'
      organizationId: 's'
      organizationName: 'qvlpequyxmyrevsewvxgishpiiewu'
      singleSignOnUrl: 'https://microsoft.com/a'
    }
    linkOrganization: {
      token: 'vcplgaschk'
    }
    marketplaceDetails: {
      marketplaceSubscriptionId: 'hepkthuxxblnewkhykgqwcdljjaqi'
      offerDetails: {
        offerId: 'fopywmoggwqeiyzvlbipxtootqxqzqcupelrrfsabcxajimaj'
        planId: 'gjrcxkcebvfajtpjjozfaaiaqjycpslwqhbwrwzlrmhzyqazmagparhzdvljtuigahuligixolocgkossoosyywcspvblp'
        planName: 'jslgcfoxuyqzlchflcuqremdlkxuhjkccgorashzzhysokcrxgkpfbyzzdpybhcofctwecyweyopyalczwtyhodusbzddac'
        publisherId: 'lobchvpvrjwazstocnmmgedxtaiauozxoccatzbuauznwtxvlwtcenkrveqxiuxvjgnifyyydvlbwswyndmvlfrvpmnjhaf'
        termId: 'feqyrpudfagfthvahzcbyhocebygqdzufxodhotwwejefcliqxavigxomtzyiamxnyjaqzkrrdlfzubdvofnasuggzetjlenjrnzqkfvoiqgbrslvivfyfisui'
        termUnit: 'ydxaggetmiduvrnqpnfntsxdhgpeuhrqwqspye'
      }
    }
    userDetails: {
      emailAddress: 'ljdnckfmow@kjgne.com'
      firstName: 'iudcnlfotkvfjsslylupqyj'
      lastName: 'giulsrktihczksqfbhaiongqaglswomtr'
      phoneNumber: 'yuibg'
      upn: 'qnuetstyyinwtopnrykejprpkaj'
    }
  }
  tags: {
  }
}
```

Organizations_CreateOrUpdate_Min
```bicep
resource exampleResource 'Informatica.DataManagement/organizations@2024-07-22-preview' = {
  name: 'example'
  location: 'pamjoudtssthlbhrnfjidr'
}
```

## informatica.datamanagement/organizations/serverlessruntimes

ServerlessRuntimes_CreateOrUpdate
```bicep
resource exampleResource 'Informatica.DataManagement/organizations/serverlessRuntimes@2024-07-22-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      key4411: {
      }
    }
  }
  properties: {
    description: 'levwcobgbyoxnyf'
    advancedCustomProperties: [
      {
        key: 'oplqoxxldtiafja'
        value: 'aymmyhuflrgdmepabmujduesops'
      }
    ]
    applicationType: 'CDI'
    computeUnits: 'ikiwvqqgpqfvlfiqycmc'
    executionTimeout: 'sohehfwltipwljqiiunypjcgchqvi'
    platform: 'AZURE'
    serverlessAccountLocation: 'zgohpyefluwneva'
    serverlessRuntimeConfig: {
      cdiConfigProps: [
        {
          applicationConfigs: [
            {
              name: 'kisycupskpkhpc'
              type: 'xeyhcmrncjwlanjpeqomdwnprnacmn'
              customized: 'nhgkfenvoffnskjnv'
              defaultValue: 'mmadhacqntbs'
              platform: 'kriqdgtilbq'
              value: 'fohttrviisjipcigpjieogofrlpz'
            }
          ]
          engineName: 'g'
          engineVersion: 'evkua'
        }
      ]
      cdieConfigProps: [
        {
          applicationConfigs: [
            {
              name: 'kisycupskpkhpc'
              type: 'xeyhcmrncjwlanjpeqomdwnprnacmn'
              customized: 'nhgkfenvoffnskjnv'
              defaultValue: 'mmadhacqntbs'
              platform: 'kriqdgtilbq'
              value: 'fohttrviisjipcigpjieogofrlpz'
            }
          ]
          engineName: 'g'
          engineVersion: 'evkua'
        }
      ]
    }
    serverlessRuntimeDataDisks: [
      {
        type: 'xhjojxsmzmxhqcizplto'
        mountOptions: 'zrzudgqaebmavq'
        serverHostOrIpAddress: 'ecjvqggjsuebogwkqx'
        sourceMount: 'ldoupzensakabqwmkgm'
        targetMount: 'zrsqxkjxyg'
      }
    ]
    serverlessRuntimeNetworkProfile: {
      networkInterfaceConfiguration: {
        subnetId: '/subscriptions/A0A3E464-6AA7-42BC-9EF1-65840CB55277/resourceGroups/rgopenapi/providers/Microsoft.DataManagement/organizations/C/subscriptions/A0A3E464-6AA7-42BC-9EF1-65840CB55277/resourceGroups/rgopenapi/providers/Microsoft.DataManagement/organizations/C'
        vnetId: '/subscriptions/A0A3E464-6AA7-42BC-9EF1-65840CB55277/resourceGroups/rgopenapi/providers/Microsoft.DataManagement/organizations/C/subscriptions/A0A3E464-6AA7-42BC-9EF1-65840CB55277/resourceGroups/rgopenapi/providers/Microsoft.DataManagement/organizations/C'
        vnetResourceGuid: 'xle'
      }
    }
    serverlessRuntimeTags: [
      {
        name: 'hchvgpmepppaysoroqsdjbxmjke'
        value: 'mhobxpwlhrjadhpdpfexvfcedttv'
      }
    ]
    serverlessRuntimeUserContextProperties: {
      userContextToken: 'smghltivvozguv'
    }
    supplementaryFileLocation: 'prueydyznxuuovlzzohxvtvncljopa'
  }
}
```

ServerlessRuntimes_CreateOrUpdate_Min
```bicep
resource exampleResource 'Informatica.DataManagement/organizations/serverlessRuntimes@2024-07-22-preview' = {
  parent: parentResource 
  name: 'example'
}
```
