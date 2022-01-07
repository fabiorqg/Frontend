using System.Web;
using System.Web.Mvc;

namespace D10_MVC_EF6_Security
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
