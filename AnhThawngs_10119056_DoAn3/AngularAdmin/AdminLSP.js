app.controller("AdminLSPController", function ($scope, $http) {
    /*================== Danh sách các biến =================================== */
    $scope.listLoaiLK = {};

    /*=================== Thao tác dữ liệu ==================================== */
    $scope.GetAllData = function (searchString) {
        searchString = document.getElementById("txtSearch").value.toString();
        $http({
            method: "get",
            url: "/Admin/AdminLSP/GetAllData/?searchString=" + searchString,
        }).then(function (response) {
            $scope.listLoaiLK = response.data;
        }, function () {
            alert("Lỗi lấy dữ liệu");
        })
    }
    $scope.InsertData = function () {
        var Action = document.getElementById("btnLuu").getAttribute("value");
        if (Action == "Thêm") {
            $scope.LoaiLinhKien = {};
            $scope.LoaiLinhKien.MaLoaiLKCha = $scope.MaLoaiLKCha_;
            $scope.LoaiLinhKien.TenLoaiLK = $scope.TenLoaiLK_;
            $scope.LoaiLinhKien.Anh = $scope.Anh_;
            $scope.LoaiLinhKien.MaMenu = $scope.MaMenu_;
            $http({
                method: "post",
                url: "/Admin/AdminLSP/InsertData",
                dataType: "json",
                data: JSON.stringify($scope.LoaiLinhKien)
            }).then(function (response) {
                alert(response.data);
                $scope.GetAllData('');
                $scope.MaLoaiLKCha_ = "";
                $scope.TenLoaiLK_ = "";
                $scope.Anh_ = "";
                $scope.MaMenu_ = "";
            })
        } else {
            $scope.LoaiLinhKien = {};
            $scope.LoaiLinhKien.MaLoaiLKCha = $scope.MaLoaiLKCha_;
            $scope.LoaiLinhKien.TenLoaiLK = $scope.TenLoaiLK_;
            $scope.LoaiLinhKien.Anh = $scope.Anh_;
            $scope.LoaiLinhKien.MaMenu = $scope.MaMenu_;
            $scope.LoaiLinhKien.MaLoaiLK = document.getElementById("MaLoaiLK_").value;
            $http({
                method: "post",
                url: "/Admin/AdminLSP/UpdateData",
                dataType: "json",
                data: JSON.stringify($scope.LoaiLinhKien)
            }).then(function (response) {
                alert(response.data);
                $scope.GetAllData('');
                $scope.MaLoaiLKCha_ = "";
                $scope.TenLoaiLK_ = "";
                $scope.Anh_ = "";
                $scope.MaMenu_ = "";
                document.getElementById("btnLuu").setAttribute("value", "Thêm");
            })
        }
    }
    $scope.UpdateData = function (LoaiLinhKien) {
        document.getElementById("MaLoaiLK_").value = LoaiLinhKien.MaLoaiLK;
        $scope.MaLoaiLKCha_ = LoaiLinhKien.MaLoaiLKCha;
        $scope.TenLoaiLK_ = LoaiLinhKien.TenLoaiLK;
        $scope.Anh_ = LoaiLinhKien.Anh;
        $scope.MaMenu_ = LoaiLinhKien.MaMenu;
        document.getElementById("btnLuu").setAttribute("value", "Sửa");
    }
    $scope.DeleteData = function (LoaiLinhKien) {
        $http({
            method: "post",
            url: "/Admin/AdminLSP/DeleteData",
            dataType: "json",
            data: JSON.stringify(LoaiLinhKien)
        }).then(function (response) {
            alert(response.data);
            $scope.GetAllData('');
        })
    }
})