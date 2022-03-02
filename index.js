
// Bai1. Tính lương nhân viên 

// input: 
// + số ngày làm
// + lương 1 ngày/100k
// process:
// - Tổng lương =  100 * số ngày làm

// output :
// - Tồng lương

var salary_date = 100;

document.getElementById("cal-btn").onclick = function(){
    var date = parseInt(document.getElementById("date").value);
    if (isNaN(date)) {
        window.alert("Vui lòng nhập số ngày lương");
    }
    // console.log(date);
    else{
        var total = date * salary_date;
        document.getElementById("result").innerHTML = "Tổng lương: " + total;
        document.getElementById("result").classList.add("cus-car-footer");
    }
   

}

/* Bai2. Tính trung binh cộng 5 số thực

    input: 
        5 số thực cần tính trung bình
    process:
        trung bình công = (số thứ nhất + .. + số thứ 5) / 5

output :
trung bình công  */

document.getElementById("tb-btn").onclick = function(){
    var num1 = parseFloat(document.getElementById("num1").value) ;
    var num2 = parseFloat(document.getElementById("num2").value) ;
    var num3 = parseFloat(document.getElementById("num3").value) ;
    var num4 = parseFloat(document.getElementById("num4").value) ;
    var num5 = parseFloat(document.getElementById("num5").value) ;
    if(isNaN(num1) || isNaN(num2) || isNaN(num3) ||isNaN(num4) || isNaN(num5)){
        window.alert("Vui lòng điền đầy đủ 5 số");
    }
    else {
        var tbc = (num1 + num2 + num3 + num4 + num5) / 5;
        document.getElementById("tb").innerHTML = "Trung bình cộng 5 số là: " + tbc;
        document.getElementById("tb").classList.add("cus-car-footer");
    }
};



/* Bai3. Quy đổi USD

    input: 
        + Số tiền USD 
        + đơn vị qui đổi: 23.500 VNĐ/1 USD
    process:
        Tổng tiền VNĐ =  Số tiền USD  * 23.500

    output :
        Tổng tiền VNĐ
 */
var rate = 23500;

document.getElementById("cal-vnd-btn").onclick = function(){
    var money_vnd = parseFloat(document.getElementById("money").value);
    if (isNaN(money_vnd)) {
        window.alert("Vui lòng nhập số tiền USD cần đổi");
    }
    // console.log(date);
    else{
        var total_money = money_vnd * rate;
        document.getElementById("vnd-total").innerHTML = "Tổng tiền sau qui đổi: " + total_money + "(VNĐ)";
        document.getElementById("vnd-total").classList.add("cus-car-footer");
    }
   

};


/* Bai4.Tính chu vi và diện tích hình chữ nhật

    input: 
        + chiều dài và chiều rộng
    process:
        + chu vi = (chiều dài + chiều rộng) * 2
        + diện tích = chiều dài * chiều rộng
    output :
        + Chu vi
        + Diện tích
 */


document.getElementById("hcn-btn").onclick = function(){
    var h_num = parseFloat(document.getElementById("h_number").value);
    var v_num = parseFloat(document.getElementById("v_number").value);
    if ( isNaN(h_num) || isNaN(v_num) ) {
        window.alert("Vui lòng nhập đủ chiều dài và chiều rộng");
    }
    // console.log(date);
    else{
        var cv = (h_num + v_num) * 2;
        var dt = h_num * v_num;
        document.getElementById("cv").innerHTML = "Chu vi: " + cv;
        document.getElementById("cv").classList.add("cus-car-footer");
        document.getElementById("dt").innerHTML = "Diện tích: " + dt;
        document.getElementById("dt").classList.add("cus-car-footer-1");
    }
    

}

/* Bai5.Tính tổng 2 ký số

    input: 
        + số có 2 chữ số(N)
    process:
        + so hang don vi = N % 10;
        + so hang chuc = N / 10;
        + tổng 2 ký số = so hang don vi  + so hang chuc
    output :
        + tổng 2 ký số
 */


document.getElementById("ks_total_btn").onclick = function(){
    var num = parseInt(document.getElementById("ks_number").value);
    if ( num <10 || num > 99 || isNaN(num)) {
        window.alert("Vui lòng nhập số có 2 chữ số");
    }
    // console.log(date);
    else{
        dv_num = num % 10;
        // console.log(num);
        // console.log(dv_num);
        hc_num = parseInt(num / 10);
        // console.log(hc_num);
        sum = dv_num + hc_num;
        document.getElementById("ks_total").innerHTML = "Tổng 2 ký số: " + sum;
        document.getElementById("ks_total").classList.add("cus-car-footer");
    }
    

}