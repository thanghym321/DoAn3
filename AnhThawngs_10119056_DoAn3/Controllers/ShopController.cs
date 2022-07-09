using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AnhThawngs_10119056_DoAn3.Models;

namespace AnhThawngs_10119056_DoAn3.Controllers
{
    public class ShopController : Controller
    {
        DoAn3Entities db = new DoAn3Entities();
        // GET: Shop
        public ActionResult Cart()
        {
            return View();
        }
        public ActionResult CheckOut()
        {
            return View();
        }
        public JsonResult CreateHoaDon(DonHang model)
        {
            try
            {
                model.MaDH = Guid.NewGuid().ToString();
                if (model.CTDonHang.Count > 0)
                {
                    foreach (var item in model.CTDonHang)
                    {
                        item.MaDH = model.MaDH;
                    }
                }
                db.DonHang.Add(model);
                db.SaveChanges();
                return Json(new { ok = 1 }, JsonRequestBehavior.AllowGet);
            }
            catch
            {
                return Json(new { ok = 0 }, JsonRequestBehavior.AllowGet);
            }

        }
    }
}