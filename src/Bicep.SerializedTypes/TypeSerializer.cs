using System.Linq;
using System.Text.Json;
using Bicep.SerializedTypes.Concrete;
using Bicep.SerializedTypes.Serialization;

namespace Bicep.SerializedTypes
{
    public static class TypeSerializer
    {
        private static readonly JsonSerializerOptions SerializerOptions = new JsonSerializerOptions
        {
            IgnoreNullValues = true,
        };

        public static string Serialize(TypeBase[] types)
        {
            var factory = new TypeFactory(types);

            var serializeOptions = new JsonSerializerOptions
            {
                IgnoreNullValues = true,
            };
            serializeOptions.Converters.Add(new TypeBaseConverter(factory));

            return JsonSerializer.Serialize(types, serializeOptions);
        }

        public static TypeBase[] Deserialize(string content)
        {
            var factory = new TypeFactory(Enumerable.Empty<TypeBase>());

            var serializeOptions = new JsonSerializerOptions
            {
                IgnoreNullValues = true,
            };
            serializeOptions.Converters.Add(new TypeBaseConverter(factory));

            var types = JsonSerializer.Deserialize<TypeBase[]>(content, serializeOptions);
            factory.Hydrate(types);

            return types;
        }
    }
}