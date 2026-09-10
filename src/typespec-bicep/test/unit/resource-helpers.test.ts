// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { describe, expect, it } from "vitest";
import { ScopeType } from "@azure/bicep-types";
import type { Enum, Type } from "@typespec/compiler";
import type { ArmResourceDetails } from "@azure-tools/typespec-azure-resource-manager";
import type { ArmResourceKind } from "@azure-tools/typespec-azure-resource-manager";
import {
  getDefaultScopeFromKind,
  getFullyQualifiedType,
  getResolvedTypeSegments,
  getScopeFromPath,
  getTypeSegmentsFromPath,
  isResourceInstancePath,
  expandParameterizedSegments,
  extractEnumValues,
} from "../../src/resource-helpers.js";

function createEnumType(members: Array<{ name: string; value?: string }>): Type {
  return {
    kind: "Enum",
    members: new Map(members.map((member) => [member.name, member])),
  } as unknown as Enum;
}

function createResourceWithParameter(parameterName: string, parameterType: Type): ArmResourceDetails {
  return {
    operations: {
      lifecycle: {
        read: {
          httpOperation: {
            parameters: {
              parameters: [{ param: { name: parameterName, type: parameterType } }],
            },
          },
        },
      },
      actions: {},
      lists: {},
    },
  } as unknown as ArmResourceDetails;
}

function createUnionType(variants: Type[]): Type {
  return {
    kind: "Union",
    variants: new Map(variants.map((type, index) => [String(index), { type }])),
  } as unknown as Type;
}

function createStringType(value: string): Type {
  return { kind: "String", value } as unknown as Type;
}

function createEnumMemberType(name: string, value?: string): Type {
  return { kind: "EnumMember", name, value } as unknown as Type;
}

describe("extractEnumValues", () => {
  it("extracts explicit and implicit enum values", () => {
    expect(
      extractEnumValues(
        createEnumType([
          { name: "Primary", value: "primary-value" },
          { name: "Secondary" },
        ]),
      ),
    ).toEqual(["primary-value", "Secondary"]);
  });

  it("extracts string and enum-member union values", () => {
    expect(
      extractEnumValues(
        createUnionType([createStringType("literal"), createEnumMemberType("Named", "named-value")]),
      ),
    ).toEqual(["literal", "named-value"]);
  });

  it("ignores unsupported union variants and returns undefined when none are supported", () => {
    expect(extractEnumValues(createUnionType([{ kind: "Number" } as unknown as Type]))).toBeUndefined();
    expect(extractEnumValues({ kind: "String" } as unknown as Type)).toBeUndefined();
  });
});

describe("expandParameterizedSegments", () => {
  it("expands enum path parameters", () => {
    const resource = createResourceWithParameter(
      "recordType",
      createEnumType([
        { name: "A", value: "A" },
        { name: "AAAA", value: "AAAA" },
      ]),
    );

    expect(expandParameterizedSegments(["dnsZones", "{recordType}"], resource)).toEqual([
      ["dnsZones", "A"],
      ["dnsZones", "AAAA"],
    ]);
  });

  it("expands multiple parameters as a cartesian product", () => {
    const resource = {
      operations: {
        lifecycle: {
          read: {
            httpOperation: {
              parameters: {
                parameters: [
                  { param: { name: "recordType", type: createUnionType([createStringType("A"), createStringType("AAAA")]) } },
                  { param: { name: "recordClass", type: createEnumType([{ name: "Internet", value: "IN" }, { name: "Chaos", value: "CH" }]) } },
                ],
              },
            },
          },
        },
        actions: {},
        lists: {},
      },
    } as unknown as ArmResourceDetails;

    expect(expandParameterizedSegments(["dnsZones", "{recordType}", "{recordClass}"], resource)).toEqual([
      ["dnsZones", "A", "IN"],
      ["dnsZones", "A", "CH"],
      ["dnsZones", "AAAA", "IN"],
      ["dnsZones", "AAAA", "CH"],
    ]);
  });

  it("preserves unresolved parameters and non-parameter segments", () => {
    const resource = createResourceWithParameter("recordType", { kind: "String" } as unknown as Type);

    expect(expandParameterizedSegments(["dnsZones", "{recordType}"], resource)).toEqual([["dnsZones", "{recordType}"]]);
    expect(expandParameterizedSegments(["dnsZones"], resource)).toEqual([["dnsZones"]]);
  });
});

describe("getScopeFromPath", () => {
  it.each([
    ["/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId}", ScopeType.ManagementGroup],
    ["/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}", ScopeType.ResourceGroup],
    ["/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId}", ScopeType.Subscription],
    ["/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId}", ScopeType.Tenant],
    ["{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentId}", ScopeType.Extension],
    ["/unexpected/path", ScopeType.ResourceGroup],
  ])("returns %s for %s", (path, expectedScope) => {
    expect(getScopeFromPath(path)).toBe(expectedScope);
  });
});

describe("resource path helpers", () => {
  it.each([
    ["/subscriptions/{subscriptionId}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}", true],
    ["/subscriptions/{subscriptionId}/providers/Microsoft.Network/virtualNetworks", false],
    ["/subscriptions/{subscriptionId}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}", true],
  ])("identifies resource instance paths: %s", (path, expected) => {
    expect(isResourceInstancePath(path)).toBe(expected);
  });

  it.each([
    ["/subscriptions/{subscriptionId}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}", ["virtualNetworks"]],
    ["/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}", ["virtualNetworks", "subnets"]],
    ["/subscriptions/{subscriptionId}", undefined],
    ["/invalid/path", undefined],
  ])("extracts type segments from %s", (path, expectedSegments) => {
    expect(getTypeSegmentsFromPath(path)).toEqual(expectedSegments);
  });

  it.each([
    [["virtualNetworks"], "virtualNetworks", ["virtualNetworks"]],
    [["virtualNetworks"], "VirtualNetworks", ["virtualNetworks"]],
    [["virtualNetworks", "subnets"], undefined, ["virtualNetworks", "subnets"]],
  ])("normalizes resolved segments %j with collection %s", (resolvedTypes, collectionName, expectedSegments) => {
    expect(getResolvedTypeSegments(resolvedTypes, collectionName)).toEqual(expectedSegments);
  });
});

describe("resource descriptor helpers", () => {
  it("builds a fully qualified resource type", () => {
    expect(
      getFullyQualifiedType({
        namespace: "Microsoft.Network",
        typeSegments: ["virtualNetworks", "subnets"],
        apiVersion: "2024-01-01",
        readableScopes: ScopeType.ResourceGroup,
        writableScopes: ScopeType.ResourceGroup,
      }),
    ).toBe("Microsoft.Network/virtualNetworks/subnets");
  });

  it.each<[ArmResourceKind | "legacy" | "legacy-extension", ScopeType]>([
    ["Extension", ScopeType.Extension],
    ["legacy-extension", ScopeType.ResourceGroup],
    ["Proxy", ScopeType.ResourceGroup],
  ])("gets the default scope for %s resources", (kind, expectedScope) => {
    expect(getDefaultScopeFromKind(kind)).toBe(expectedScope);
  });
});