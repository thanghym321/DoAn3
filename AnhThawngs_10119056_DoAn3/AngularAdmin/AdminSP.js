app.controller("AdminSPController", function ($scope, $http) {
    /*================== Danh sách các biến =================================== */
    $scope.listLK = {};

    /*=================== Thao tác dữ liệu ==================================== */
    $scope.GetAllData = function (searchString) {
        searchString = document.getElementById("txtSearch").value.toString();
        $http({
            method: "get",
            url: "/Admin/AdminSP/GetAllData/?searchString=" + searchString,
        }).then(function (response) {
            $scope.listLK = response.data;
        }, function () {
            alert("Lỗi lấy dữ liệu");
        })
    }
    $scope.InsertData = function () {
        var Action = document.getElementById("btnLuu").getAttribute("value");
        if (Action == "Thêm") {
            $scope.LinhKien = {};
            $scope.LinhKien.TenLK = $scope.TenLK_;
            $scope.LinhKien.MaLoaiLK = $scope.MaLoaiLK_;
            $scope.LinhKien.BaoHanh = $scope.BaoHanh_;
            $scope.LinhKien.Anh = $scope.Anh_;
            $scope.LinhKien.Gia = $scope.Gia_;
            $scope.LinhKien.AnhPhu = $scope.AnhPhu_;
            $scope.LinhKien.MoTa = $scope.MoTa_;
            $scope.LinhKien.Xem = $scope.Xem_;
            $http({
                method: "post",
                url: "/Admin/AdminSP/InsertData",
                dataType: "json",
                data: JSON.stringify($scope.LinhKien)
            }).then(function (response) {
                alert(response.data);
                $scope.GetAllData('');
                $scope.TenLK_ = "";
                $scope.MaLoaiLK_ = "";
                $scope.BaoHanh_ = "";
                $scope.Anh_ = "";
                $scope.Gia_ = "";
                $scope.AnhPhu_ = "";
                $scope.MoTa_ = "";
                $scope.Xem_ = "";
            })
        } else {
            $scope.LinhKien = {};
            $scope.LinhKien.TenLK = $scope.TenLK_;
            $scope.LinhKien.MaLoaiLK = $scope.MaLoaiLK_;
            $scope.LinhKien.BaoHanh = $scope.BaoHanh_;
            $scope.LinhKien.Anh = $scope.Anh_;
            $scope.LinhKien.Gia = $scope.Gia_;
            $scope.LinhKien.AnhPhu = $scope.AnhPhu_;
            $scope.LinhKien.MoTa = $scope.MoTa_;
            $scope.LinhKien.Xem = $scope.Xem_;
            $scope.LinhKien.MaLK = document.getElementById("MaLK_").value;
            $http({
                method: "post",
                url: "/Admin/AdminSP/UpdateData",
                dataType: "json",
                data: JSON.stringify($scope.LinhKien)
            }).then(function (response) {
                alert(response.data);
                $scope.GetAllData('');
                $scope.TenLK_ = "";
                $scope.MaLoaiLK_ = "";
                $scope.BaoHanh_ = "";
                $scope.Anh_ = "";
                $scope.Gia_ = "";
                $scope.AnhPhu_ = "";
                $scope.MoTa_ = "";
                $scope.Xem_ = "";
                document.getElementById("btnLuu").setAttribute("value", "Thêm");
            })
        }
    }
    $scope.UpdateData = function (LinhKien) {
        document.getElementById("MaLK_").value = LinhKien.MaLK;

        $scope.TenLK_ = LinhKien.TenLK;
        $scope.MaLoaiLK_ = LinhKien.MaLoaiLK;
        $scope.BaoHanh_ = LinhKien.BaoHanh;
        $scope.Anh_ = LinhKien.Anh;
        $scope.Gia_ = LinhKien.Gia;
        $scope.AnhPhu_ = LinhKien.AnhPhu;
        $scope.MoTa_ = LinhKien.MoTa;
        $scope.Xem_ = LinhKien.Xem;
        document.getElementById("btnLuu").setAttribute("value", "Sửa");
    }
    $scope.DeleteData = function (LinhKien) {
        $http({
            method: "post",
            url: "/Admin/AdminSP/DeleteData",
            dataType: "json",
            data: JSON.stringify(LinhKien)
        }).then(function (response) {
            alert(response.data);
            $scope.GetAllData('');
        })
    }
})