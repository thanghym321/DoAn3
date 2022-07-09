using System.Web;
using System.Web.Mvc;

namespace AnhThawngs_10119056_DoAn3
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
