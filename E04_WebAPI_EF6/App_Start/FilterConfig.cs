using System.Web;
using System.Web.Mvc;

namespace E04_WebAPI_EF6
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
