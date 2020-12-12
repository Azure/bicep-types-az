// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
namespace Azure.Bicep.Types.Concrete
{
    public class StringLiteralType : TypeBase
    {
        public StringLiteralType(string value)
        {
            Value = value;
        }

        public string Value { get; set; }
    }
}