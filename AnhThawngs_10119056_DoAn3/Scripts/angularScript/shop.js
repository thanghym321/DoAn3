app.controller("ShopCtrl", function ($scope, $http, $window, $timeout) {
    /*================== Danh sách các biến =================================== */

    /*Giỏ hàng*/
    $scope.listSPGH = [];

    /*Thanh toán*/
    $scope.listSPTT = [];
    $scope.total = 0;

    /*=================== Thao tác dữ liệu ==================================== */
    
    /*Giỏ hàng*/
    $scope.LoadCartGH = function () {
        $scope.listSPGH = JSON.parse(localStorage.getItem('cart'));
    }
    $scope.LoadCartGH();

    $scope.Tang = function (item) {
        var index = $scope.listSPGH.indexOf(item);
        if (index >= 0) {
            $scope.listSPGH[index].quantity += 1;
        }
        localStorage.setItem('cart', JSON.stringify($scope.listSPGH));
    }

    $scope.Giam = function (item) {
        var index = $scope.listSPGH.indexOf(item);
        if (index >= 0 && $scope.listSPGH[index].quantity >= 2) {
            $scope.listSPGH[index].quantity -= 1;
        }
        localStorage.setItem('cart', JSON.stringify($scope.listSPGH));
    }

    $scope.Xoa = function (item) {
        var index = $scope.listSPGH.indexOf(item);
        $scope.listSPGH.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify($scope.listSPGH));
        alert("Đã xóa sản phẩm thành công");
    }

    $scope.XoaCart = function () {
        localStorage.setItem('cart', null);
        location.reload();
    }


    /*Thanh toán*/
    $scope.LoadCartTT = function () {
        $scope.listSPTT = JSON.parse(localStorage.getItem('cart'));
        $scope.listSPTT.forEach(function (item, i) {
            $scope.total += item.quantity * item.Gia;
        });
    };
    $scope.LoadCartTT();

    $scope.CreateHoaDon = function () {
        let DonHang = {};
        DonHang.HoTen = $('#HoTen').val();
        DonHang.DiaChi = $('#DiaChi').val();
        DonHang.Email = $('#Email').val();
        DonHang.SoDienThoai = $('#SoDienThoai').val();
        DonHang.GhiChu = $('#GhiChu').val();
        DonHang.CTDonHang = [];
        $scope.listSPTT.forEach(function (item, i) {
            DonHang.CTDonHang.push({ MaLK: item.Ma, SoLuong: item.quantity });
        });
        $http({
            method: 'POST',
            url: "/Shop/CreateHoaDon",
            datatype: 'json',
            data: JSON.stringify(DonHang)
        }).then(function (response) {
            if (response.data.ok == 1) {
                alert('Thêm thành công');
            }
            else {
                alert('Có lỗi');
            }
        });
    };         
});
 
 



