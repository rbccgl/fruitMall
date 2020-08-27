 //眼睛 密码部分
 $(".mima").focus(function() {
         $(".music-lgin-left").addClass("left-dh").removeClass("rmleft-dh");
         $(".music-lgin-right").addClass("right-dh").removeClass("right-rmdh");
         $(".music-hand").addClass("no");
     }).blur(function() {
         $(".music-lgin-left").removeClass("left-dh").addClass("rmleft-dh");
         $(".music-lgin-right").removeClass("right-dh").addClass("right-rmdh");
         $(".music-hand").removeClass("no");

     })
     //点击小人出来
 $(".inputname").focus(function() {
         $(".music-lgin-all").addClass("block");
         $(".music-news").addClass("no")
     })
     //点击小人消失

 //          $(".music-qd").focus(function(){
 //          	$(".music-lgin-all").removeClass("block")
 //          })


 //注册正则 简单判断

 $('.music-qd').click(function() {
     if (($('.inputname').val() == '')) {
         $(".music-news").html("请输入名称")
     } else if (($('.mima').val() == '')) {
         $(".music-news").html("请输入密码")
         $(".music-news").addClass("block")
     } else {
         alert('提交ajax')
     }
 })