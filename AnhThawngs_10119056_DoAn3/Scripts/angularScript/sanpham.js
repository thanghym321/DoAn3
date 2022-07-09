app.controller("SanPhamCtrl", function ($scope, $http, $window, $timeout) {
    /*================== Danh sách các biến =================================== */

    /*Chi tiết*/
    $scope.LinhKien = {};

    /*Danh sách*/
    $scope.LoaiLinhKien = {};
    $scope.DanhSach1 = {};

    /*Chưa dùng*/
    $scope.listLK = [];
    $scope.currentPage = 1;
    $scope.numPerPage = 10;
    $scope.maxSize = 5;
    $scope.total = 0;
    /*=================== Thao tác dữ liệu ==================================== */ 
    /*Chi tiết*/
    $scope.LoadLK = function (MaLK) {
        $http({
            method: 'GET',
            url: "/SanPham/GetChiTiet/?MaLK=" + MaLK,
        }).then(function (response) {
            $scope.LinhKien = response.data;
           
         }); 
    };

    /*Danh sách*/
    $scope.LoadLoaiLK = function (MaLoai) {
        $http({
            method: 'GET',
            url: "/SanPham/GetLoaiLinhKien/?MaLoai=" + MaLoai,
        }).then(function (response) {
            $scope.LoaiLinhKien = response.data;

        });
    };

    $scope.LoadDanhSach1 = function (MaLoai) {
        $http({
            method: 'GET',
            url: "/SanPham/Danhsach1/?MaLoai=" + MaLoai,
        }).then(function (response) {
            $scope.DanhSach1 = response.data;

        });
    };

    /*Chưa dùng*/
    //$scope.LoadDanhSach = function (MaLoai, page, limit) {
    //    $http({
    //        method: 'GET',
    //        url: "/SanPham/GetDanhSach/?MaLoai=" + MaLoai + "&page=" + page + "&limit=" + limit,
    //    }).then(function (response) {
    //        $scope.LoaiLinhKien = response.data.LoaiLinhKien;
    //        $scope.listLK = response.data.list;
    //        $scope.total = response.data.total;
    //    });
    //};
    //$scope.$watch('currentPage + numPerPage', function () {
    //    $scope.listSP = $scope.LoadDanhSach($('#MaLoai').val(), $scope.currentPage, $scope.numPerPage);
    //});

    /* cả 2*/
    $scope.addToCart = function (lk) {
        let item = {};
        item.Ma = lk.Ma;
        item.Ten = lk.Ten;
        item.MaLoaiLK = lk.MaLoaiLK;
        item.BaoHanh = lk.BaoHanh;
        item.Anh = lk.Anh;
        item.Gia = lk.Gia;
        item.AnhPhu = lk.AnhPhu;
        item.MoTa = lk.MoTa;
        item.Xem = lk.Xem;
        item.quantity = 1;
        var list;
        if (localStorage.getItem('cart') == null) {
            list = [item];
        } else {
            list = JSON.parse(localStorage.getItem('cart')) || [];
            let ok = true;
            for (let x of list) {
                if (x.Ma == item.Ma) {
                    x.quantity += 1;
                    ok = false;
                    break;
                }
            }
            if (ok) {
                list.push(item);
            }
        }
        localStorage.setItem('cart', JSON.stringify(list));
        alert("Đã thêm giở hàng thành công");
    }
   
});
app.filter('LoaiLKCha', function () {
    return function (items) {
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.MaLoaiCha == null) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});