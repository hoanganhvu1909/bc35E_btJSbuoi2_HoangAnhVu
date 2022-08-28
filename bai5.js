/* Tính tổng hai kí số
 * đầu vào
 n = 98
 - Xử lý
 + số hàng đơn vi: n % 10
 + số hàng chục: n / 10
sum = số hàng đơn vị + số hàng chục
- đầu ra
kết quả = sum
 */

var btnTongkiso = document.getElementById("btnTongkiso");
btnTongkiso.onclick = function () {
    var number = document.getElementById("number").value * 1;
    //xử lý
    var soHangchuc = Math.floor(number / 10);
    var soHangdv = number % 10;
    var ketQuatong = soHangchuc + soHangdv;
    var kq = "<p>Tổng hai kí số là:" + ketQuatong + "</p>";
    //đầu ra
    document.getElementById("showInfoTongkiso").innerHTML = kq;

}
