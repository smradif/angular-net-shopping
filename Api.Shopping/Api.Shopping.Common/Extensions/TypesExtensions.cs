using System;

namespace Api.Shopping.Common.Extensions
{
    public static class TypesExtensions
    {
        public static bool IsService(this Type type)
        {
            return type.Name.EndsWith("Service");
        }

        public static bool IsRepository(this Type t, string ns)
        {
            return t.FullName.Contains(ns);
        }
    }
}
