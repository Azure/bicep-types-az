using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bicep.SerializedTypes.Concrete;

namespace Bicep.SerializedTypes.Serialization
{
    public class TypeReferenceConverter : JsonConverter<ITypeReference>
    {
        private readonly TypeFactory factory;

        public TypeReferenceConverter(TypeFactory factory)
        {
            this.factory = factory;
        }

        public override ITypeReference Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            if (reader.TokenType != JsonTokenType.Number)
            {
                throw new JsonException();
            }

            var index = reader.GetInt32();

            return factory.GetReference(index);
        }

        public override void Write(Utf8JsonWriter writer, ITypeReference value, JsonSerializerOptions options)
        {
            var index = factory.GetIndex(value.Type);

            writer.WriteNumberValue(index);
        }
    }
}