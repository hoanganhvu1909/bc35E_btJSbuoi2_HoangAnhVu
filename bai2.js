/* Tính trung bình 
Mô hình ba khối:
+đầu vào:
+ Số thực 1
+ Số thực 2
+ Số thực 3
+ Số thực 4
+ Số thực 5
-xử lý:
+tổng trung bình = (số thực 1 + số thực 2 + số thực 3 + số thực 4 + số thực 5) / 5
- Đầu ra
+tổng trung bình 
*/

var btnTrungbinh = document.getElementById("btnTrungbinh");
btnTrungbinh.onclick = function () {
    //đầu vào
    var num1 = document.getElementById("num1").value * 1;
    var num2 = document.getElementById("num2").value * 1;
    var num3 = document.getElementById("num3").value * 1;
    var num4 = document.getElementById("num4").value * 1;
    var num5 = document.getElementById("num5").value * 1;
    //xử lý
    var trungBinh = (num1 + num2 + num3 + num4 + num5) / 5;
    var ketQua = "<p> Kết quả trung bình của 5 số là: " + trungBinh + "</p>"
    document.getElementById("showInfoTrungbinh").innerHTML = ketQua;

};
