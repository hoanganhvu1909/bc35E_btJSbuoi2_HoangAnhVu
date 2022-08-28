/*Quy đổi tiền
-đầu vào :
+ tiền đô = 2
+ tiền Việt = 23 500
- Xử lý:
+ Quy đổi: tiền đô * tiền Việt
- Kết quả:
+ tiền sau quy đổi
*/

var btnQuydoi = document.getElementById("btnQuydoi");
btnQuydoi.onclick = function () {
    //đầu vào
    const VND = 23500;
    var USD = document.getElementById("USD").value * 1;
    // xử lý
    var quyDoi = VND * USD;
    //xử lý VND
    var currentFormat = new Intl.NumberFormat("VN-vn");
    var ketQuaquydoi = "<p class='alert alert-success'>Kết quả quy đổi là: " +
    currentFormat.format(quyDoi) + " VND</p>";
    //đầu ra
    document.getElementById("showInfoQuydoi").innerHTML = ketQuaquydoi;

};  