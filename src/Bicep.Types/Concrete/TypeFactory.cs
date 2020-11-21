// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System;
using System.Collections.Generic;
using System.Linq;

namespace Azure.Bicep.Types.Concrete
{
    public class TypeFactory
    {
        private class TypeReference : ITypeReference
        {
            private readonly TypeFactory factory;
            private readonly int index;

            public TypeReference(TypeFactory factory, int index)
            {
                this.factory = factory;
                this.index = index;
            }

            public TypeBase Type => factory.types[index]; // TODO check perf on a list index lookup
        }
        
        private readonly List<TypeBase> types;
        private readonly IDictionary<TypeBase, int> typeLookup;

        public TypeFactory(IEnumerable<TypeBase> types)
        {
            this.types = new List<TypeBase>(types);
            this.typeLookup = Enumerable.Range(0, this.types.Count).ToDictionary(i => this.types[i]);
        }

        public void Hydrate(IEnumerable<TypeBase> types)
        {
            if (this.types.Any() || this.typeLookup.Any())
            {
                throw new ArgumentException($"{nameof(Hydrate)} may only be called on an empty factory");
            }
            
            foreach (var type in types)
            {
                AddType(type);
            }
        }

        private int AddType(TypeBase type)
        {
            if (typeLookup.ContainsKey(type))
            {
                throw new ArgumentException("Duplicate type added");
            }
    
            var index = types.Count;
            typeLookup[type] = index;
            types.Add(type);

            return index;
        }

        public TType Create<TType>(Func<TType> createFunc)
            where TType : TypeBase
        {
            var type = createFunc();
            AddType(type);

            return type;
        }

        public ITypeReference GetReference(TypeBase type)
            => new TypeReference(this, typeLookup[type]);

        public ITypeReference GetReference(int index)
            => new TypeReference(this, index);

        public int GetIndex(TypeBase type)
            => typeLookup[type];

        public TypeBase[] GetTypes()
            => types.ToArray();
    }
}