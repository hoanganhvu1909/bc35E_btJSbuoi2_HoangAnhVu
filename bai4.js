/*Tính chu vi và diện tích hình chữ nhật
-Đầu vào:
+ chiều dài = 19
+ chiều rộng = 9
- Xử lý:
+ chu vi: (chiều dài + chiều rộng)*2
+ diện tích: chiều dài * chiều rộng
- Đầu ra:
+kết quả chu vi 
+ kết quả diện tích
*/

var btnKetquahcn = document.getElementById("btnKetquahcn");
btnKetquahcn.onclick = function () {
    //đầu vào
    var cd = document.getElementById("cd").value * 1;
    var cr = document.getElementById("cr").value * 1;
    //xử lý
    var chuVi = (cd + cr) * 2;
    var dienTich = cd * cr;
    var ketQuahcn = "<p>Kết quả chu vi là: " + chuVi +"</p>";
    ketQuahcn += "<p>Kết quả diện tích là: " + dienTich +"</p>";
    //đầu ra
    document.getElementById("showInfohdn").innerHTML = ketQuahcn;

};
