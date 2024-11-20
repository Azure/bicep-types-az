# Informatica.DataManagement

## informatica.datamanagement/organizations

Organizations_CreateOrUpdate
```bicep
resource exampleResource 'Informatica.DataManagement/organizations@2024-05-08' = {
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
      singleSignOnUrl: 'https://contoso.com/singlesignon'
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
    provisioningState: 'Accepted'
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
resource exampleResource 'Informatica.DataManagement/organizations@2024-05-08' = {
  name: 'example'
  location: 'pamjoudtssthlbhrnfjidr'
}
```

## informatica.datamanagement/organizations/serverlessruntimes

ServerlessRuntimes_CreateOrUpdate
```bicep
resource exampleResource 'Informatica.DataManagement/organizations/serverlessRuntimes@2024-05-08' = {
  parent: parentResource 
  name: 'example'
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
    provisioningState: 'Accepted'
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
        subnetId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Networks/virtualNetworks/test-vnet/subnets/subnet1'
        vnetId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/HypernetVnet1'
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
resource exampleResource 'Informatica.DataManagement/organizations/serverlessRuntimes@2024-05-08' = {
  parent: parentResource 
  name: 'example'
}
```
