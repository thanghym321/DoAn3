//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AnhThawngs_10119056_DoAn3.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class LinhKien
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public LinhKien()
        {
            this.CTDonHang = new HashSet<CTDonHang>();
        }
    
        public int MaLK { get; set; }
        public string TenLK { get; set; }
        public int MaLoaiLK { get; set; }
        public Nullable<int> BaoHanh { get; set; }
        public string Anh { get; set; }
        public int Gia { get; set; }
        public string AnhPhu { get; set; }
        public string MoTa { get; set; }
        public Nullable<int> Xem { get; set; }
        public Nullable<bool> IsDeleted { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CTDonHang> CTDonHang { get; set; }
        public virtual LoaiLinhKien LoaiLinhKien { get; set; }
    }
}
