// bài 1

/* tính tiền lương nhân viên
Mô hình 3 khối:
- Đầu vào:
+ Lương một ngày: 100000
+ Số ngày làm: 20
-Xử  lý
+ Lương = lương một ngày * số ngày làm
- Đầu ra
+ Hiển thị lương
*/

var btnTinhLuong = document.getElementById("btnTinhLuong");
btnTinhLuong.onclick = function () {
    //đầu vào
    const LUONG_NGAY = 100000;
    var soNgayLam = document.getElementById("soNgayLam").value * 1;
    //xử lý
    var tongTien = LUONG_NGAY * soNgayLam;
    //xử lý VND
    var currentFormat = new Intl.NumberFormat("VN-vn");
    var tienLuong = "<p class='alert alert-success'>Tổng lương là: " +
    currentFormat.format(tongTien) + " VND</p>";


    //đầu ra
    document.getElementById("showInfoLuongNV").innerHTML = tienLuong;
};


