/*头部*/
function c1(){
var gs1=document.getElementById('gosearch1');
var gs2=document.getElementById('gosearch2');
var gs3=document.getElementById('gosearch3');
var gs4=document.getElementById('gosearch4');
			gs1.className="blblue";
			gs2.className="";
			gs3.className="";
			gs4.className="";
		}

		function c2(){	
var gs1=document.getElementById('gosearch1');
var gs2=document.getElementById('gosearch2');
var gs3=document.getElementById('gosearch3');
var gs4=document.getElementById('gosearch4');
			gs2.className="blblue";
			gs1.className="";
			gs3.className="";
			gs4.className="";

		}
		function c3(){
var gs1=document.getElementById('gosearch1');
var gs2=document.getElementById('gosearch2');
var gs3=document.getElementById('gosearch3');
var gs4=document.getElementById('gosearch4');
			gs3.className="blblue";
			gs1.className="";
			gs2.className="";
			gs4.className="";

		}
		function c4(){
var gs1=document.getElementById('gosearch1');
var gs2=document.getElementById('gosearch2');
var gs3=document.getElementById('gosearch3');
var gs4=document.getElementById('gosearch4');
			gs4.className="blblue";
			gs1.className="";
			gs2.className="";
			gs3.className="";
			
		}


var enterAccount = function(){
	$(".phd_search_input1,.input_search,.input_site,.search_input").focus(function(){
		var txt_value = $(this).val();
		if(txt_value==this.defaultValue){
			$(this).val("");
			$(this).css("color","black");
		}
	});
	$(".phd_search_input1,.input_search,.input_site,.search_input").blur(function(){
		var txt_value = $(this).val();
		if(txt_value==""){
			$(this).val(this.defaultValue)
			$(this).css("color","#9c9c9c");
		}
	})
}



/*左侧导航张开*/
var menuShow = function(ms){
	var ms = $(ms.ms),
		h4 = ms.find("h4"),
		box = ms.find("ul");
	h4.bind("click",function(){
		$(this).toggleClass("on");
		box.slideToggle();
	})
}

/*提示上下滚动*/
var tipsScroll = function(){
	var ulScroll=$('.tips_scroll'),
		time=2000,
		moving;
	ulScroll.hover(function(){
		clearInterval(moving);
	},function(){
		moving=setInterval(function(){
			var _field=ulScroll.find('li:first');
			var _h=_field.height();
			_field.animate({marginTop:-_h+'px'},600,function(){
				_field.css('marginTop',0).appendTo(ulScroll);
			})
		},time)
	}).trigger('mouseleave');	
}

/*自动显示时间*/
function showLocale(objD)
{
	var str,colorhead,colorfoot;
	var yy = objD.getYear();
	if(yy<1900) yy = yy+1900;
	var MM = objD.getMonth()+1;
	if(MM<10) MM = '0' + MM;
	var dd = objD.getDate();
	if(dd<10) dd = '0' + dd;
	var hh = objD.getHours();
	if(hh<10) hh = '0' + hh;
	var mm = objD.getMinutes();
	if(mm<10) mm = '0' + mm;
	var ss = objD.getSeconds();
	if(ss<10) ss = '0' + ss;
	var ww = objD.getDay();
	if  ( ww==0 )  colorhead="";
	if  ( ww > 0 && ww < 6 )  colorhead="";
	if  ( ww==6 )  colorhead="";
	if  (ww==0)  ww="星期日";
	if  (ww==1)  ww="星期一";
	if  (ww==2)  ww="星期二";
	if  (ww==3)  ww="星期三";
	if  (ww==4)  ww="星期四";
	if  (ww==5)  ww="星期五";
	if  (ww==6)  ww="星期六";
	// str = colorhead + yy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss + "";
	str = colorhead + yy + "-" + MM + "-" + dd + " " + hh + ":" + mm ;
	return(str);
}
function tick()
{
	var today;
	today = new Date();
	document.getElementById("localtime").innerHTML = showLocale(today);
	window.setTimeout("tick()", 1000);
}

/*图片左右滚动*/
;(function($){
    $.fn.scroll = function(options){
        options = jQuery.extend({
            speed: "500",
            page: 6
        },options);
        return this.each(function(){
            $.fn.scroll.run($(this),options);
        });
    };
    $.fn.scroll.run = function($this,options){
        var ul = $("ul",$this),
            li = ul.children(),
            len = li.length,//获取li的个数
			$page =  Math.ceil(len / options.page),
			li_left = parseInt(li.css("margin-left")),
			li_right = parseInt(li.css("margin-right")),
            li_width = (li.width()+li_left+li_right)*options.page,
            count = 0,
            $next = $(".next",$this),
            $prev = $(".prev",$this),
            animating = false;
       	ul.width(li_width*$page);
        var back = $next.bind("click",function(){
            if($page < 1 || count >= $page-1){ 
                return false;
            }
            count++;
            ul.stop(true,true).animate({left: '-=' + li_width + 'px'},options.speed);			
        });
        var go = $prev.bind("click",function(){
            if(count <= 0){
                return false;
            }   
            count--;
            ul.stop(true,true).animate({left: '+=' + li_width + 'px'}, options.speed);
        });
    };
})(jQuery);

/*弹出框*/
;(function($){
    $.fn.popBox = function(options){
        var defaults = {
            btn : ".set"
        }
        
        var options = $.extend(defaults,options);

        var box = this,
			close = this.find(".close"),
            btn = $(options.btn),
			mask = $(".mask");
			
        btn.bind("click",function(){
            mask.css({ display: "block", height: $(document).height() });
        	box.fadeIn();

        });
        close.bind("click",function(){
        	box.fadeOut();
			mask.hide();
        });

    }
})(jQuery);

/*自动高度*/
var autoHeight = function(){
	$(".phd_dp_in_sider").css("height",$(".phd_dp_in_main").height()-12);
	$(".dp_apply_nav").css("height",$(".phd_dp_in_sider").height()-$(".phd_dp_in_sider .h4_big_title").height()-40);
}