# PaloAltoNetworks.Cloudngfw
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## paloaltonetworks.cloudngfw/firewalls

Firewalls_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/firewalls@2025-02-06-preview' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
      key16: {
        clientId: 'aaaa'
        principalId: 'aaaaaaaaaaaaaaa'
      }
    }
  }
  location: 'eastus'
  properties: {
    associatedRulestack: {
      location: 'eastus'
      resourceId: 'lrs1'
      rulestackId: 'PANRSID'
    }
    dnsSettings: {
      dnsServers: [
        {
          address: '20.22.92.111'
          resourceId: '/subscriptions/01c7d41f-afaf-464e-8a8b-5c6f9f98cee8/resourceGroups/mj-liftr-integration/providers/Microsoft.Network/publicIPAddresses/mj-liftr-integration-egressNatIp1'
        }
      ]
      enableDnsProxy: 'DISABLED'
      enabledDnsType: 'CUSTOM'
    }
    frontEndSettings: [
      {
        name: 'frontendsetting11'
        backendConfiguration: {
          address: {
            address: '20.22.32.136'
            resourceId: '/subscriptions/01c7d41f-afaf-464e-8a8b-5c6f9f98cee8/resourceGroups/mj-liftr-integration/providers/Microsoft.Network/publicIPAddresses/mj-liftr-integration-frontendSettingIp2'
          }
          port: '80'
        }
        frontendConfiguration: {
          address: {
            address: '20.22.91.251'
            resourceId: '/subscriptions/01c7d41f-afaf-464e-8a8b-5c6f9f98cee8/resourceGroups/mj-liftr-integration/providers/Microsoft.Network/publicIPAddresses/mj-liftr-integration-frontendSettingIp1'
          }
          port: '80'
        }
        protocol: 'TCP'
      }
    ]
    isPanoramaManaged: 'TRUE'
    marketplaceDetails: {
      marketplaceSubscriptionStatus: 'PendingFulfillmentStart'
      offerId: 'liftr-pan-ame-test'
      publisherId: 'isvtestuklegacy'
    }
    networkProfile: {
      egressNatIp: [
        {
          address: '20.22.92.111'
          resourceId: '/subscriptions/01c7d41f-afaf-464e-8a8b-5c6f9f98cee8/resourceGroups/mj-liftr-integration/providers/Microsoft.Network/publicIPAddresses/mj-liftr-integration-egressNatIp1'
        }
      ]
      enableEgressNat: 'ENABLED'
      networkType: 'VNET'
      privateSourceNatRulesDestination: [
        '20.22.92.11'
      ]
      publicIps: [
        {
          address: '20.22.92.11'
          resourceId: '/subscriptions/01c7d41f-afaf-464e-8a8b-5c6f9f98cee8/resourceGroups/mj-liftr-integration/providers/Microsoft.Network/publicIPAddresses/mj-liftr-integration-PublicIp1'
        }
      ]
      trustedRanges: [
        '20.22.92.11'
      ]
      vnetConfiguration: {
        ipOfTrustSubnetForUdr: {
          address: '10.1.1.0/24'
          resourceId: '/subscriptions/2bf4a339-294d-4c25-b0b2-ef649e9f5c27/resourceGroups/os-liftr-integration/providers/Microsoft.Network/virtualNetworks/os-liftr-integration-vnet/subnets/os-liftr-integration-untrust-subnet'
        }
        trustSubnet: {
          addressSpace: '10.1.1.0/24'
          resourceId: '/subscriptions/2bf4a339-294d-4c25-b0b2-ef649e9f5c27/resourceGroups/os-liftr-integration/providers/Microsoft.Network/virtualNetworks/os-liftr-integration-vnet/subnets/os-liftr-integration-trust-subnet'
        }
        unTrustSubnet: {
          addressSpace: '10.1.1.0/24'
          resourceId: '/subscriptions/2bf4a339-294d-4c25-b0b2-ef649e9f5c27/resourceGroups/os-liftr-integration/providers/Microsoft.Network/virtualNetworks/os-liftr-integration-vnet/subnets/os-liftr-integration-untrust-subnet'
        }
        vnet: {
          addressSpace: '10.1.0.0/16'
          resourceId: '/subscriptions/2bf4a339-294d-4c25-b0b2-ef649e9f5c27/resourceGroups/os-liftr-integration/providers/Microsoft.Network/virtualNetworks/os-liftr-integration-vnet'
        }
      }
      vwanConfiguration: {
        ipOfTrustSubnetForUdr: {
          address: '10.1.1.0/24'
          resourceId: '/subscriptions/2bf4a339-294d-4c25-b0b2-ef649e9f5c27/resourceGroups/os-liftr-integration/providers/Microsoft.Network/virtualNetworks/os-liftr-integration-vnet/subnets/os-liftr-integration-untrust-subnet'
        }
        networkVirtualApplianceId: '2bf4a339-294d-4c25-b0b2-ef649e9f5c12'
        trustSubnet: {
          addressSpace: '10.1.1.0/24'
          resourceId: '/subscriptions/2bf4a339-294d-4c25-b0b2-ef649e9f5c27/resourceGroups/os-liftr-integration/providers/Microsoft.Network/virtualNetworks/os-liftr-integration-vnet/subnets/os-liftr-integration-trust-subnet'
        }
        unTrustSubnet: {
          addressSpace: '10.1.1.0/24'
          resourceId: '/subscriptions/2bf4a339-294d-4c25-b0b2-ef649e9f5c27/resourceGroups/os-liftr-integration/providers/Microsoft.Network/virtualNetworks/os-liftr-integration-vnet/subnets/os-liftr-integration-untrust-subnet'
        }
        vHub: {
          addressSpace: '10.1.1.0/24'
          resourceId: '/subscriptions/2bf4a339-294d-4c25-b0b2-ef649e9f5c27/resourceGroups/os-liftr-integration/providers/Microsoft.Network/virtualNetworks/os-liftr-integration-vnet/subnets/os-liftr-integration-untrust-subnet'
        }
      }
    }
    panEtag: '2bf4a339-294d-4c25-b0b2-ef649e9f5c12'
    panoramaConfig: {
      configString: 'bas64EncodedString'
    }
    planData: {
      billingCycle: 'MONTHLY'
      planId: 'liftrpantestplan'
      usageType: 'PAYG'
    }
    provisioningState: 'Accepted'
  }
  tags: {
    tagName: 'value'
  }
}
```

Firewalls_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/firewalls@2025-02-06-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    dnsSettings: {
    }
    marketplaceDetails: {
      offerId: 'liftr-pan-ame-test'
      publisherId: 'isvtestuklegacy'
    }
    networkProfile: {
      enableEgressNat: 'ENABLED'
      networkType: 'VNET'
      publicIps: [
        {
          address: '20.22.92.11'
          resourceId: '/subscriptions/01c7d41f-afaf-464e-8a8b-5c6f9f98cee8/resourceGroups/mj-liftr-integration/providers/Microsoft.Network/publicIPAddresses/mj-liftr-integration-PublicIp1'
        }
      ]
    }
    planData: {
      billingCycle: 'MONTHLY'
      planId: 'liftrpantestplan'
    }
  }
}
```

## paloaltonetworks.cloudngfw/globalrulestacks

GlobalRulestack_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/globalRulestacks@2025-02-06-preview' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
      key16: {
        clientId: 'aaaa'
        principalId: 'aaaaaaaaaaaaaaa'
      }
    }
  }
  location: 'eastus'
  properties: {
    description: 'global rulestacks'
    associatedSubscriptions: [
      '2bf4a339-294d-4c25-b0b2-ef649e9f5c27'
    ]
    defaultMode: 'IPS'
    minAppIdVersion: '8.5.3'
    panEtag: '2bf4a339-294d-4c25-b0b2-ef649e9f5c12'
    panLocation: 'eastus'
    provisioningState: 'Accepted'
    scope: 'GLOBAL'
    securityServices: {
      antiSpywareProfile: 'default'
      antiVirusProfile: 'default'
      dnsSubscription: 'default'
      fileBlockingProfile: 'default'
      outboundTrustCertificate: 'default'
      outboundUnTrustCertificate: 'default'
      urlFilteringProfile: 'default'
      vulnerabilityProfile: 'default'
    }
  }
}
```

GlobalRulestack_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/globalRulestacks@2025-02-06-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
  }
}
```

## paloaltonetworks.cloudngfw/globalrulestacks/certificates

CertificateObjectGlobalRulestack_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/globalRulestacks/certificates@2025-02-06-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'description'
    auditComment: 'comment'
    certificateSelfSigned: 'TRUE'
    certificateSignerResourceId: ''
    etag: '2bf4a339-294d-4c25-b0b2-ef649e9f5c27'
    provisioningState: 'Accepted'
  }
}
```

CertificateObjectGlobalRulestack_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/globalRulestacks/certificates@2025-02-06-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    certificateSelfSigned: 'TRUE'
  }
}
```

## paloaltonetworks.cloudngfw/globalrulestacks/fqdnlists

FqdnListGlobalRulestack_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/globalRulestacks/fqdnlists@2025-02-06-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    auditComment: 'string'
    etag: 'aaaaaaaaaaaaaaaaaa'
    fqdnList: [
      'string1'
      'string2'
    ]
    provisioningState: 'Accepted'
  }
}
```

FqdnListGlobalRulestack_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/globalRulestacks/fqdnlists@2025-02-06-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fqdnList: [
      'string1'
      'string2'
    ]
  }
}
```

## paloaltonetworks.cloudngfw/globalrulestacks/postrules

PostRules_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/globalRulestacks/postRules@2025-02-06-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'description of post rule'
    actionType: 'Allow'
    applications: [
      'app1'
    ]
    auditComment: 'example comment'
    category: {
      feeds: [
        'feed'
      ]
      urlCustom: [
        'https://microsoft.com'
      ]
    }
    decryptionRuleType: 'SSLOutboundInspection'
    destination: {
      cidrs: [
        '1.0.0.1/10'
      ]
      countries: [
        'India'
      ]
      feeds: [
        'feed'
      ]
      fqdnLists: [
        'FQDN1'
      ]
      prefixLists: [
        'PL1'
      ]
    }
    enableLogging: 'DISABLED'
    etag: 'c18e6eef-ba3e-49ee-8a85-2b36c863a9d0'
    inboundInspectionCertificate: 'cert1'
    negateDestination: 'TRUE'
    negateSource: 'TRUE'
    protocolPortList: [
      '80'
    ]
    provisioningState: 'Accepted'
    ruleName: 'postRule1'
    ruleState: 'DISABLED'
    source: {
      cidrs: [
        '1.0.0.1/10'
      ]
      countries: [
        'India'
      ]
      feeds: [
        'feed'
      ]
      prefixLists: [
        'PL1'
      ]
    }
    tags: [
      {
        key: 'keyName'
        value: 'value'
      }
    ]
    protocol: 'HTTP'
  }
}
```

PostRules_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/globalRulestacks/postRules@2025-02-06-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ruleName: 'postRule1'
  }
}
```

## paloaltonetworks.cloudngfw/globalrulestacks/prefixlists

PrefixListGlobalRulestack_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/globalRulestacks/prefixlists@2025-02-06-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    auditComment: 'comment'
    etag: '2bf4a339-294d-4c25-b0b2-ef649e9f5c27'
    prefixList: [
      '1.0.0.0/24'
    ]
    provisioningState: 'Accepted'
  }
}
```

PrefixListGlobalRulestack_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/globalRulestacks/prefixlists@2025-02-06-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    prefixList: [
      '1.0.0.0/24'
    ]
  }
}
```

## paloaltonetworks.cloudngfw/globalrulestacks/prerules

PreRules_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/globalRulestacks/preRules@2025-02-06-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'description of pre rule'
    actionType: 'Allow'
    applications: [
      'app1'
    ]
    auditComment: 'example comment'
    category: {
      feeds: [
        'feed'
      ]
      urlCustom: [
        'https://microsoft.com'
      ]
    }
    decryptionRuleType: 'SSLOutboundInspection'
    destination: {
      cidrs: [
        '1.0.0.1/10'
      ]
      countries: [
        'India'
      ]
      feeds: [
        'feed'
      ]
      fqdnLists: [
        'FQDN1'
      ]
      prefixLists: [
        'PL1'
      ]
    }
    enableLogging: 'DISABLED'
    etag: 'c18e6eef-ba3e-49ee-8a85-2b36c863a9d0'
    inboundInspectionCertificate: 'cert1'
    negateDestination: 'TRUE'
    negateSource: 'TRUE'
    protocolPortList: [
      '80'
    ]
    provisioningState: 'Accepted'
    ruleName: 'preRule1'
    ruleState: 'DISABLED'
    source: {
      cidrs: [
        '1.0.0.1/10'
      ]
      countries: [
        'India'
      ]
      feeds: [
        'feed'
      ]
      prefixLists: [
        'PL1'
      ]
    }
    tags: [
      {
        key: 'keyName'
        value: 'value'
      }
    ]
    protocol: 'HTTP'
  }
}
```

PreRules_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/globalRulestacks/preRules@2025-02-06-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ruleName: 'preRule1'
  }
}
```

## paloaltonetworks.cloudngfw/localrulestacks

LocalRulestacks_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/localRulestacks@2025-02-06-preview' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
      key16: {
        clientId: 'aaaa'
        principalId: 'aaaaaaaaaaaaaaa'
      }
    }
  }
  location: 'eastus'
  properties: {
    description: 'local rulestacks'
    associatedSubscriptions: [
      '2bf4a339-294d-4c25-b0b2-ef649e9f5c27'
    ]
    defaultMode: 'IPS'
    minAppIdVersion: '8.5.3'
    panEtag: '2bf4a339-294d-4c25-b0b2-ef649e9f5c12'
    panLocation: 'eastus'
    provisioningState: 'Accepted'
    scope: 'LOCAL'
    securityServices: {
      antiSpywareProfile: 'default'
      antiVirusProfile: 'default'
      dnsSubscription: 'default'
      fileBlockingProfile: 'default'
      outboundTrustCertificate: 'default'
      outboundUnTrustCertificate: 'default'
      urlFilteringProfile: 'default'
      vulnerabilityProfile: 'default'
    }
  }
  tags: {
    tagName: 'value'
  }
}
```

LocalRulestacks_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/localRulestacks@2025-02-06-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
  }
}
```

## paloaltonetworks.cloudngfw/localrulestacks/certificates

CertificateObjectLocalRulestack_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/localRulestacks/certificates@2025-02-06-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'description'
    auditComment: 'comment'
    certificateSelfSigned: 'TRUE'
    certificateSignerResourceId: ''
    etag: '2bf4a339-294d-4c25-b0b2-ef649e9f5c27'
    provisioningState: 'Accepted'
  }
}
```

CertificateObjectLocalRulestack_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/localRulestacks/certificates@2025-02-06-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    certificateSelfSigned: 'TRUE'
  }
}
```

## paloaltonetworks.cloudngfw/localrulestacks/fqdnlists

FqdnListLocalRulestack_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/localRulestacks/fqdnlists@2025-02-06-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    auditComment: 'string'
    etag: 'aaaaaaaaaaaaaaaaaa'
    fqdnList: [
      'string1'
      'string2'
    ]
    provisioningState: 'Accepted'
  }
}
```

FqdnListLocalRulestack_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/localRulestacks/fqdnlists@2025-02-06-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fqdnList: [
      'string1'
      'string2'
    ]
  }
}
```

## paloaltonetworks.cloudngfw/localrulestacks/localrules

LocalRules_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/localRulestacks/localRules@2025-02-06-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'description of local rule'
    actionType: 'Allow'
    applications: [
      'app1'
    ]
    auditComment: 'example comment'
    category: {
      feeds: [
        'feed'
      ]
      urlCustom: [
        'https://microsoft.com'
      ]
    }
    decryptionRuleType: 'SSLOutboundInspection'
    destination: {
      cidrs: [
        '1.0.0.1/10'
      ]
      countries: [
        'India'
      ]
      feeds: [
        'feed'
      ]
      fqdnLists: [
        'FQDN1'
      ]
      prefixLists: [
        'PL1'
      ]
    }
    enableLogging: 'DISABLED'
    etag: 'c18e6eef-ba3e-49ee-8a85-2b36c863a9d0'
    inboundInspectionCertificate: 'cert1'
    negateDestination: 'TRUE'
    negateSource: 'TRUE'
    protocolPortList: [
      '80'
    ]
    provisioningState: 'Accepted'
    ruleName: 'localRule1'
    ruleState: 'DISABLED'
    source: {
      cidrs: [
        '1.0.0.1/10'
      ]
      countries: [
        'India'
      ]
      feeds: [
        'feed'
      ]
      prefixLists: [
        'PL1'
      ]
    }
    tags: [
      {
        key: 'keyName'
        value: 'value'
      }
    ]
    protocol: 'HTTP'
  }
}
```

LocalRules_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/localRulestacks/localRules@2025-02-06-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ruleName: 'localRule1'
  }
}
```

## paloaltonetworks.cloudngfw/localrulestacks/prefixlists

PrefixListLocalRulestack_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/localRulestacks/prefixlists@2025-02-06-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'string'
    auditComment: 'comment'
    etag: '2bf4a339-294d-4c25-b0b2-ef649e9f5c27'
    prefixList: [
      '1.0.0.0/24'
    ]
    provisioningState: 'Accepted'
  }
}
```

PrefixListLocalRulestack_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'PaloAltoNetworks.Cloudngfw/localRulestacks/prefixlists@2025-02-06-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    prefixList: [
      '1.0.0.0/24'
    ]
  }
}
```
