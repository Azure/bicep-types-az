# Informatica.DataManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## informatica.datamanagement/organizations

Organizations_CreateOrUpdate
```bicep
resource exampleResource 'Informatica.DataManagement/organizations@2023-03-01-preview' = {
  name: 'example'
  location: 'pamjoudtssthlbhrnfjidr'
  properties: {
    companyDetails: {
      business: 'pucosrtjv'
      companyName: 'xszcggknokhw'
      country: 'gwkcpnwyaqc'
      domain: 'utcxetzzpmbvwmjrvphqngvp'
      numberOfEmployees: 25
      officeAddress: 'sbttzwyajgdbsvipuiclbzvkcvwyil'
    }
    informaticaProperties: {
      informaticaRegion: 'zfqodqpbeflhedypiijdkc'
      organizationId: 'wtdmhlwhkvgqdumaehgfgiqcxgnqpx'
      organizationName: 'nomzbvwe'
      singleSignOnUrl: 'https://microsoft.com/a'
    }
    linkOrganization: {
      token: 'jjfouhoqpumjvrdsfbimgcy'
    }
    marketplaceDetails: {
      marketplaceSubscriptionId: 'ovenlecocg'
      offerDetails: {
        offerId: 'cwswcfwmzhjcoksmueukegwaptvpcmbfyvixfhvgwnjyblqivqdkkwkunkgimiopwwkvgnwclmajhuty'
        planId: 'jfnemevyivtlxhectiutdavdgfyidolivuojumdzckp'
        planName: 'iaoxgaitteuoqgujkgxbdgryaobtkjjecuvchwutntrvmuorikrbqqegmelenbewhakiysprrnovjixyxrikscaptrbapbdspu'
        publisherId: 'zajxpfacudwongxjvnnuhhpygmnydchgowjccyuzsjonegmqxcqqpnzafanggowfqdixnnutyfvmvwrkx'
        termId: 'tcvvsxdjnjlfmjhmvwklptdmxetnzydxyuhfqchoubmtoeqbchnfxoxqzezlgpxdnzyvzgkynjxzzgetkqccxvpzahxattluqdipvbdktqmndfefitzuifqjpschzlbvixnvznkmmgjwvkplfhemnapsewgqxggdzdokryhv'
        termUnit: 'gjwmgevrblbosuogsvfspsgspetbnxaygkbelvadpgwiywl'
      }
    }
    userDetails: {
      emailAddress: '7_-46@13D--3.m-4x-.11.c-9-.DHLYFc'
      firstName: 'appvdclawzfjntdfdftjevlhvzropnxqtnypid'
      lastName: 'nzirbvzmkxtbrlamyatlcszebxgcyncxoascojsmacwvjsjvn'
      phoneNumber: 'fvcjylxlmhdnshsgywnzlyvshu'
      upn: 'undljch'
    }
  }
  tags: {
    key8430: 'cagshqtjlxtqqhdwtchokvxszybp'
  }
}
```

Organizations_CreateOrUpdate_Min
```bicep
resource exampleResource 'Informatica.DataManagement/organizations@2023-03-01-preview' = {
  name: 'example'
  location: 'pamjoudtssthlbhrnfjidr'
}
```

## informatica.datamanagement/organizations/serverlessruntimes

ServerlessRuntimes_CreateOrUpdate
```bicep
resource exampleResource 'Informatica.DataManagement/organizations/serverlessRuntimes@2023-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      key9192: {
      }
    }
  }
  properties: {
    description: 'mqkaenjmxakvzrwmirelmhgiedto'
    advancedCustomProperties: [
      {
        key: 'qcmc'
        value: 'unraxmnohdmvutt'
      }
    ]
    applicationType: 'CDI'
    computeUnits: 'bsctukmndvowse'
    executionTimeout: 'ruiougpypny'
    platform: 'AZURE'
    serverlessAccountLocation: 'bkxdfopapbqucyhduewrubjpaei'
    serverlessRuntimeConfig: {
      cdiConfigProps: [
        {
          applicationConfigs: [
            {
              name: 'upfvjrqcrwwedfujkmsodeinw'
              type: 'lw'
              customized: 'j'
              defaultValue: 'zvgkqwmi'
              platform: 'dixfyeobngivyvf'
              value: 'mozgsetpwjmtyl'
            }
          ]
          engineName: 'hngsdqvtjdhwqlbqfotipaiwjuys'
          engineVersion: 'zlrlbg'
        }
      ]
      cdieConfigProps: [
        {
          applicationConfigs: [
            {
              name: 'upfvjrqcrwwedfujkmsodeinw'
              type: 'lw'
              customized: 'j'
              defaultValue: 'zvgkqwmi'
              platform: 'dixfyeobngivyvf'
              value: 'mozgsetpwjmtyl'
            }
          ]
          engineName: 'hngsdqvtjdhwqlbqfotipaiwjuys'
          engineVersion: 'zlrlbg'
        }
      ]
    }
    serverlessRuntimeNetworkProfile: {
      networkInterfaceConfiguration: {
        subnetId: '/subscriptions/A0A3E464-6AA7-42BC-9EF1-65840CB55277/resourceGroups/rgopenapi/providers/Microsoft.DataManagement/organizations/C'
        vnetId: '/subscriptions/A0A3E464-6AA7-42BC-9EF1-65840CB55277/resourceGroups/rgopenapi/providers/Microsoft.DataManagement/organizations/C'
        vnetResourceGuid: '5328d299-1462-4be0-bef1-303a28e556a0'
      }
    }
    serverlessRuntimeTags: [
      {
        name: 'korveuycuwhs'
        value: 'uyiuegxnkgp'
      }
    ]
    serverlessRuntimeUserContextProperties: {
      userContextToken: 'oludf'
    }
    supplementaryFileLocation: 'zmlqtkncwgqhhupsnqluumz'
  }
}
```

ServerlessRuntimes_CreateOrUpdate_Min
```bicep
resource exampleResource 'Informatica.DataManagement/organizations/serverlessRuntimes@2023-03-01-preview' = {
  parent: parentResource 
  name: 'example'
}
```
