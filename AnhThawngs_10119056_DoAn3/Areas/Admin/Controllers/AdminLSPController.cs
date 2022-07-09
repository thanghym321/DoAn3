using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AnhThawngs_10119056_DoAn3.Models;

namespace AnhThawngs_10119056_DoAn3.Areas.Admin.Controllers
{
    public class AdminLSPController : Controller
    {
        DoAn3Entities db = new DoAn3Entities();
        // GET: Admin/AdminLSP
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult GetAllData(string searchString)
        {
            db.Configuration.ProxyCreationEnabled = false;
            List<LoaiLinhKien> listLoaiLK = db.LoaiLinhKien.Where(x => x.IsDeleted == false).ToList();
            if (string.IsNullOrEmpty(searchString))
            {
                return Json(listLoaiLK, JsonRequestBehavior.AllowGet);
            }
            else
            {
                var model = listLoaiLK.Where(x => x.TenLoaiLK.ToLower().Contains(searchString.ToLower())).ToList();
                return Json(model, JsonRequestBehavior.AllowGet);
            }
        }
        public string InsertData(LoaiLinhKien LoaiLinhKien)
        {
            if (LoaiLinhKien != null)
            {
                LoaiLinhKien.IsDeleted = false;
                db.LoaiLinhKien.Add(LoaiLinhKien);
                db.SaveChanges();
                return "Thêm thành công";
            }
            else
            {
                return "Thêm không thành công";
            }
        }
        public string UpdateData(LoaiLinhKien LoaiLinhKien)
        {
            if (LoaiLinhKien != null)
            {

                var _LoaiLinhKien = db.Entry(LoaiLinhKien);
                LoaiLinhKien Obj = db.LoaiLinhKien.Where(x => x.MaLoaiLK == LoaiLinhKien.MaLoaiLK).FirstOrDefault();
                Obj.MaLoaiLKCha = LoaiLinhKien.MaLoaiLKCha;
                Obj.TenLoaiLK = LoaiLinhKien.TenLoaiLK;
                Obj.Anh = LoaiLinhKien.Anh;
                Obj.MaMenu = LoaiLinhKien.MaMenu;
                Obj.IsDeleted = false;
                db.SaveChanges();
                return "Sửa thành công";
            }
            else
            {
                return "Sửa không thành công";
            }
        }
        public string DeleteData(LoaiLinhKien LoaiLinhKien)
        {
            if (LoaiLinhKien != null)
            {
                LoaiLinhKien Obj = db.LoaiLinhKien.Where(x => x.MaLoaiLK == LoaiLinhKien.MaLoaiLK).FirstOrDefault();
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