app.controller("HomeCtrl", function ($scope, $http, $window, $timeout) {
    /*================== Danh sách các biến =================================== */
    $scope.listLoaiLK = {};
    $scope.listMenu = {};
    $scope.listLK = {};
    $scope.listTinTuc = {};
    /*=================== Thao tác dữ liệu ==================================== */
    $scope.LoadLoaiLK = function () {
        $http({
            method: 'GET',
            url: "/Home/GetLoaiLK",
        }).then(function (response) {
            $scope.listLoaiLK = response.data;
            $timeout(function () {
                $(".categories__slider").owlCarousel({
                    loop: true,
                    margin: 0,
                    items: 4,
                    dots: false,
                    nav: true,
                    navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    smartSpeed: 1200,
                    autoHeight: false,
                    autoplay: true,
                    responsive: {

                        0: {
                            items: 1,
                        },

                        480: {
                            items: 2,
                        },

                        768: {
                            items: 3,
                        },

                        992: {
                            items: 4,
                        }
                    }
                });


                $('.hero__categories__all').on('click', function () {
                    $('.hero__categories ul').slideToggle(400);
                });

            }, 0);
        });
    }; 
    $scope.LoadMenu = function () {
        $http({
            method: 'GET',
            url: "/Home/GetMenu",
        }).then(function (response) {
            $scope.listMenu = response.data;
        });
    };
    $scope.LoadLK = function () {
        $http({
            method: 'GET',
            url: "/Home/GetLK",
        }).then(function (response) {
            $scope.listLK = response.data;     
            $timeout(function () {
                $(".product__discount__slider").owlCarousel({
                    loop: true,
                    margin: 0,
                    items: 3,
                    dots: true,
                    smartSpeed: 1200,
                    autoHeight: false,
                    autoplay: true,
                    responsive: {

                        320: {
                            items: 1,
                        },

                        480: {
                            items: 2,
                        },

                        768: {
                            items: 2,
                        },

                        992: {
                            items: 3,
                        }
                    }
                });
            }, 0);
        });
    };
    $scope.LoadTinTuc = function () {
        $http({
            method: 'GET',
            url: "/Home/GetTinTuc",
        }).then(function (response) {
            $scope.listTinTuc = response.data;
        });
    };

    $scope.appliedClass = function (item) {
        if (item.MaLoaiLK == 18) {
            return "cpu";
        }
        if (item.MaLoaiLK == 19) {
            return "main";
        }
        if (item.MaLoaiLK == 20) {
            return "ram";
        }
        if (item.MaLoaiLK == 24) {
            return "vga";
        }
        if (item.MaLoaiLK == 26) {
            return "psu";
        }
        else {
            return "";
        }
    }
 
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
//app.filter('LoaiLKCon', function () {
//    return function (items, tmp) {
//        var filtered = [];
//        for (var i = 0; i < items.length; i++) {
//            var item = items[i];
//            if (item.MaLoaiCha == tmp.MaLoai) {
//                filtered.push(item);
//            }
//        }
//        return filtered;
//    };
//});



