using System.Collections.Generic;
using System.IO;
using System.Linq;
using Bicep.SerializedTypes.Concrete;

namespace Bicep.SerializedTypes.Az
{
    public static class TypeLoader
    {
        private static string GetTypeContainerResourceName(string providerNamespace, string apiVersion)
            => $"{providerNamespace}/{apiVersion}/types.json".ToLowerInvariant();

        public static IEnumerable<TypeBase> LoadTypes(string providerNamespace, string apiVersion)
        {
            var streamName = GetTypeContainerResourceName(providerNamespace, apiVersion);
            var fileStream = typeof(TypeLoader).Assembly.GetManifestResourceStream(streamName);

            if (fileStream == null)
            {
                return Enumerable.Empty<TypeBase>();
            }

            using (fileStream)
            using (var streamReader = new StreamReader(fileStream))
            {
                var content = streamReader.ReadToEnd();

                return TypeSerializer.Deserialize(content);
            }
        }
    }
}