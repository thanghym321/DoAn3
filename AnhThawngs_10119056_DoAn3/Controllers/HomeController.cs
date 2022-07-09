using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AnhThawngs_10119056_DoAn3.Models;

namespace AnhThawngs_10119056_DoAn3.Controllers
{
    public class HomeController : Controller
    {
        DoAn3Entities db = new DoAn3Entities();
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult LienHe()
        {
            return View();
        }
        public JsonResult GetLoaiLK()
        {
            var list = db.LoaiLinhKien.Select(a => new
            {
                MaLoai = a.MaLoaiLK,
                MaLoaiCha =a.MaLoaiLKCha,
                TenLoai = a.TenLoaiLK,
                Anh=a.Anh,
                MaMenu=a.MaMenu,
                SLCon = db.LoaiLinhKien.Where(x => x.MaLoaiLKCha == a.MaLoaiLK).Count()
            }).ToList();
            return Json(list, JsonRequestBehavior.AllowGet);

        }
        public JsonResult GetMenu()
        {
            var list = db.LoaiLinhKien.Select(a => new
            {
                MaLoai = a.MaLoaiLK,
                MaLoaiCha = a.MaLoaiLKCha,
                TenLoai = a.TenLoaiLK,
                Anh = a.Anh,
                MaMenu = a.MaMenu,
            }).Where(x => x.MaLoai ==18 || x.MaLoai == 19 || x.MaLoai == 20 ||
            x.MaLoai == 24 || x.MaLoai == 26).ToList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetLK()
        {
            var list = db.LinhKien.Where(x => x.IsDeleted == false).Select(a => new
            {
                Ma = a.MaLK,
                Ten = a.TenLK,
                MaLoaiLK = a.MaLoaiLK,
                BaoHanh = a.BaoHanh,
                Anh = a.Anh,
                Gia = a.Gia,
                AnhPhu = a.AnhPhu,
                MoTa = a.MoTa,
                Xem =a.Xem,

            }).ToList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetTinTuc()
        {
            var list = db.TinTuc.Select(a => new
            {
                Ma = a.MaTT,
                TieuDe = a.TieuDe,
                NgayDang = a.NgayDang,
                Anh = a.Anh,
                MaLoai = a.MaLoaiTT,
                NoiDung = a.NoiDung,
            }).ToList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }
    }
}