using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AnhThawngs_10119056_DoAn3.Models;

namespace AnhThawngs_10119056_DoAn3.Areas.Admin.Controllers
{
    public class AdminSPController : Controller
    {
        DoAn3Entities db = new DoAn3Entities();
        // GET: Admin/AdminSP
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult GetAllData(string searchString)
        {
            db.Configuration.ProxyCreationEnabled = false;
            List<LinhKien> listLK = db.LinhKien.Where(x => x.IsDeleted == false).ToList();
            if (string.IsNullOrEmpty(searchString))
            {
                return Json(listLK, JsonRequestBehavior.AllowGet);
            }
            else
            {
                var model = listLK.Where(x => x.TenLK.ToLower().Contains(searchString.ToLower())).ToList();
                return Json(model, JsonRequestBehavior.AllowGet);
            }
        }
        public string InsertData(LinhKien LinhKien)
        {
            if (LinhKien != null)
            {
                LinhKien.IsDeleted = false;
                db.LinhKien.Add(LinhKien);
                db.SaveChanges();
                return "Thêm thành công";
            }
            else
            {
                return "Thêm không thành công";
            }
        }
        public string UpdateData(LinhKien LinhKien)
        {
            if (LinhKien != null)
            {

                var _LinhKien = db.Entry(LinhKien);
                LinhKien Obj = db.LinhKien.Where(x => x.MaLK == LinhKien.MaLK).FirstOrDefault();
                Obj.TenLK = LinhKien.TenLK;
                Obj.MaLoaiLK = LinhKien.MaLoaiLK;
                Obj.BaoHanh = LinhKien.BaoHanh;
                Obj.Anh = LinhKien.Anh;
                Obj.Gia = LinhKien.Gia;
                Obj.AnhPhu = LinhKien.AnhPhu;
                Obj.MoTa = LinhKien.MoTa;
                Obj.Xem = LinhKien.Xem;
                Obj.IsDeleted = false;
                db.SaveChanges();
                return "Sửa thành công";
            }
            else
            {
                return "Sửa không thành công";
            }
        }
        public string DeleteData(LinhKien LinhKien)
        {
            if (LinhKien != null)
            {
                LinhKien Obj = db.LinhKien.Where(x => x.MaLK == LinhKien.MaLK).FirstOrDefault();
                Obj.IsDeleted = true;
                db.SaveChanges();
                return "Xóa thành công";
            }
            else
            {
                return "Xóa không thành công";
            }
        }
    }
}