//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;
//using System.Web.Mvc;

//namespace AnhThawngs_10119056_DoAn3.Areas.Admin.Controllers
//{
//    public class AdminHDController : Controller
//    {
//        // GET: Admin/AdminHD
//        public ActionResult Index()
//        {
//            return View();
//        }
//        public JsonResult GetAllData(string searchString)
//        {
//            db.Configuration.ProxyCreationEnabled = false;
//            List<LinhKien> listLK = db.LinhKien.Where(x => x.IsDeleted == false).ToList();
//            if (string.IsNullOrEmpty(searchString))
//            {
//                return Json(listLK, JsonRequestBehavior.AllowGet);
//            }
//            else
//            {
//                var model = listLK.Where(x => x.TenLK.ToLower().Contains(searchString.ToLower())).ToList();
//                return Json(model, JsonRequestBehavior.AllowGet);
//            }
//        }
//    }
//}