$(function () {
    $('.input_account[needmony="true"]').keyup(function () {
        var val = $(this).val();
        var reg = /^\d+\.{0,1}\d{0,}$/;
        val = getoff_Qfw(val);
        if (!reg.test(val)) {
            $(this).val('');
        } else {
            $(this).val(add_Qfw(val));
        }
    });

    
    
///  金额效果  start  //

var intLen = 0;
//设置千分位
function set_Qfw(obj) {
    if (!obj) {
        return;
    }
    var val = getoff_Qfw(obj.value);
    if (val != '') {
        if (!checkFloat(val)) {
            obj.value = $('body').data('lastStr');
            return false;
        }
    }
    var dot = val.indexOf(".");
    if (dot < 0)
        dot = val.length;
    intLen = (val.substring(0, dot)).length;
    if ($('head').data('tempLeg') != intLen) {
        obj.value = '';
        obj.value = add_Qfw(val);
    }
    $('head').data('tempLeg', intLen);
    $('body').data('lastStr', obj.value);
}

// 去掉 ","
function getoff_Qfw(cash) {
    if (!cash) {
        return;
    }
    var len = cash.length;
    var ch = "";
    var newCash = "";
    for (var ii = 0; ii < len; ii++) {
        ch = cash.charAt(ii);
        if (ch != ",") {
            newCash = newCash + ch;
        }
    }
    return newCash;
}
// 加上","
function add_Qfw(cash) {
    if (!cash) {
        return;
    }
    cash = cash + '';
    var dot = cash.indexOf(".");
    if (dot < 0)
        dot = cash.length;
    intLen = (cash.substring(0, dot)).length;
    var len = cash.length;
    var cashNew = "";// 加上","的字符串
    var tt = 0;// 计数器，每加一个"," tt 加 1
    var t = 0;// 添加","的个数
    if (intLen > 3) {
        t = (intLen - intLen % 3) / 3;
    } else
    return cash;
    if (intLen % 3 != 0) {
        for (var ii = 0; ii < len; ii++) {
            cashNew = cashNew + cash.charAt(ii);
            if (ii == (intLen % 3 + 3 * tt - 1) && tt < t) {
                tt = tt + 1;
                cashNew = cashNew + ",";
            }
        }
    }
        // 个数部分长度是3的倍数
        else {
            tt = tt + 1;
            for (var ii = 0; ii < len; ii++) {
                cashNew = cashNew + cash.charAt(ii);
                if (ii == (3 * tt - 1) && tt < t) {
                    tt = tt + 1;
                    cashNew = cashNew + ",";
                }
            }
        }
        return cashNew;
    }

    /** ************************************** */
// 判断数值,是否为浮点数
function checkFloat(string) {
    var length1, i, j;
    var string1 = "";
    var ofstr = getoff_Qfw(string);
    var oflen = ofstr.length;
    if (oflen > 0 && ofstr.charAt(oflen - 1) == " ")
        return (false);
    string1 = javaTrim(string)
    length1 = string1.length;
    if (length1 == 0) {
        // alert( "错误！空串！");
        return (false);
    }

    if (string.charAt(0) == "0") {
        if (length1 > 1) {
            var num = 0;
            for (var i = 0; i < oflen; i++) {
                var c = ofstr.charAt(i);
                if (c == 0)
                    num++;
            }
            if (num == oflen
               || (num == oflen - 1 && ofstr.charAt(oflen - 3) == ".")) {
                // alert("金额不能为0，请重新填写！");
            return (false);
        }
    }
    if (length1 == 4 && string == "0.00") {
            // alert("金额不能为0，请重新填写！");
            return (false);
        }
    }
    j = 0;
    for (i = 0; i < length1; i++) { // 判断每位数字
        if (isNaN(parseInt(string.charAt(i), 10))) {
            if (string.charAt(i) != ".") {
                // alert( "错误！请输入数值型数据！");
                return (false);
            } else {
                j++;
                /*
				 * if(length1 - i > 3 ){ alert("小数点后只能有两位！"); return(false);}
				 */
                }
            }
        }
        if (j > 1) {
        // alert( "错误！小数点只能有一个!");
        return (false);
    }
    return (true);
}

// **************去掉字符串前后的空格************
function javaTrim(string) {
    var length1, i, j;
    var string1 = "";
    length1 = string.length;
    for (i = 0; i < length1; i++) {
        if (string.charAt(i) != " ") {
            for (j = i; j < length1; j++)
                string1 = string1 + string.charAt(j);
            break;
        }
    }
    length1 = string1.length;
    string = string1;
    string1 = "";
    for (i = length1 - 1; i >= 0; i--) {
        if (string.charAt(i) != " ") {
            for (j = 0; j <= i; j++)
                string1 = string1 + string.charAt(j);
            break;
        }
    }
    string = string1;
    return (string)
}

//  **************金额效果 end  *********************************//

//  **************获取url的值 begin  *********************************//
var Request = {
    QueryString : function (item) {
        var svalue = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)","i"));
        return svalue?svalue[1]:svalue;
    },

    queryAllString : function() {
        var urlLocation = location.href;
        return urlLocation.slice(urlLocation.indexOf("?"));
    }
}



function getQueryString(key) {
    var value = "";    //获取当前文档的URL,为后面分析它做准备    var sURL = window.document.URL;    //URL中是否包含查询字符串    if (sURL.indexOf("?") > 0) {       //分解URL,第二的元素为完整的查询字符串        //即arrayParams[1]的值为【first=1&second=2】        var arrayParams = sURL.split("?");        //分解查询字符串       //arrayURLParams[0]的值为【first=1 】        //arrayURLParams[2]的值为【second=2】        var arrayURLParams = arrayParams[1].split("&");        //遍历分解后的键值对        for (var i = 0; i < arrayURLParams.length; i++) {            //分解一个键值对            var sParam = arrayURLParams[i].split("=");            if ((sParam[0] == key) && (sParam[1] != "")) {                //找到匹配的的键,且值不为空                value = sParam[1];                break;
            }
        }
    }    return value;
}


//  **************获取url的值 end  *********************************//
}