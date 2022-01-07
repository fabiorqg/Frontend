using System.Web;
using System.Web.Mvc;

namespace D07_MVC_EF6_DF_v2
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
