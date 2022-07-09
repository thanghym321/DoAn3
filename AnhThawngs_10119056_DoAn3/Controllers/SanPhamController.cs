using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AnhThawngs_10119056_DoAn3.Models;

namespace AnhThawngs_10119056_DoAn3.Controllers
{
    public class SanPhamController : Controller
    {
        DoAn3Entities db = new DoAn3Entities();

        public ActionResult Chitiet(string MaLK)
        {
            ViewBag.MaLK = MaLK;
            return View();
        }
        public JsonResult GetChiTiet(int MaLK)
        {
            var obj = db.LinhKien.Select(a => new
            {
                Ma = a.MaLK,
                Ten = a.TenLK,
                MaLoaiLK = a.MaLoaiLK,
                BaoHanh = a.BaoHanh,
                Anh = a.Anh,
                Gia = a.Gia,
                AnhPhu = a.AnhPhu,
                MoTa = a.MoTa,
                Xem = a.Xem,
                listLKCungLoai = db.LinhKien.Select(b => new
                {
                    Ma = b.MaLK,
                    Ten = b.TenLK,
                    MaLoaiLK = b.MaLoaiLK,
                    BaoHanh = b.BaoHanh,
                    Anh = b.Anh,
                    Gia = b.Gia,
                    AnhPhu = b.AnhPhu,
                    MoTa = b.MoTa,
                    Xem = b.Xem,
                }).Where(x => x.MaLoaiLK == a.MaLoaiLK && x.Ma != a.MaLK).ToList(),
                TTLoaiLK = db.LoaiLinhKien.Select(b => new
                {
                    MaLoai = b.MaLoaiLK,
                    MaLoaiCha = b.MaLoaiLKCha,
                    TenLoai = b.TenLoaiLK,
                    Anh = b.Anh,
                    MaMenu = b.MaMenu,
                }).Where(x => x.MaLoai == a.MaLoaiLK).ToList()
            }).SingleOrDefault(x => x.Ma == MaLK);
            return Json(obj, JsonRequestBehavior.AllowGet);
        }
        public ActionResult DanhSach(string MaLoai)
        {
            ViewBag.MaLoai = MaLoai;
            return View();
        }
        //public JsonResult GetDanhSach(int MaLoai, int page, int limit)
        //{
        //    if (page == 0)
        //        page = 1;

        //    if (limit == 0)
        //        limit = int.MaxValue;

        //    var skip = (page - 1) * limit;

        //    var list = db.LinhKien.Where(x => x.MaLoaiLK == MaLoai).Select(a => new
        //    {

        //        Ma = a.MaLK,
        //        Ten = a.TenLK,
        //        MaLoaiLK = a.MaLoaiLK,
        //        BaoHanh = a.BaoHanh,
        //        Anh = a.Anh,
        //        Gia = a.Gia,
        //        AnhPhu = a.AnhPhu,
        //        MoTa = a.MoTa,
        //        Xem = a.Xem,
        //    }).OrderBy(x => x.Ten).Skip(skip).Take(limit).ToList();
        //    var total = db.LinhKien.Where(x => x.MaLoaiLK == MaLoai).Count();
        //    return Json(new { list = list, total = total }, JsonRequestBehavior.AllowGet);
        //}
        public JsonResult GetLoaiLinhKien(int MaLoai)
        {
            var obj = db.LoaiLinhKien.Select(a => new
            {
                MaLoai = a.MaLoaiLK,
                MaLoaiCha = a.MaLoaiLKCha,
                TenLoai = a.TenLoaiLK,
                Anh = a.Anh,
                MaMenu = a.MaMenu,
                listLoaiLK = db.LoaiLinhKien.Select(b => new
                {
                    MaLoai = b.MaLoaiLK,
                    MaLoaiCha = b.MaLoaiLKCha,
                    TenLoai = b.TenLoaiLK,
                    Anh = b.Anh,
                    MaMenu = b.MaMenu,
                }).ToList(),            
            }).SingleOrDefault(x => x.MaLoai == MaLoai);
            return Json(obj, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Danhsach1(int MaLoai)
        {
            var list = db.LinhKien.Where(x => x.MaLoaiLK == MaLoai).Select(a => new
            {

                Ma = a.MaLK,
                Ten = a.TenLK,
                MaLoaiLK = a.MaLoaiLK,
                BaoHanh = a.BaoHanh,
                Anh = a.Anh,
                Gia = a.Gia,
                AnhPhu = a.AnhPhu,
                MoTa = a.MoTa,
                Xem = a.Xem,
            }).ToList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }
    }
}