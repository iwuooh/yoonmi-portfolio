$(function(){
  /*script 영역 scoll 반응형 page 사용 예*/
  $(".toggle_btn").click(function(){
    $("#aside").addClass('on');
    $("#aside").removeClass('off');
    $(".close_btn").css("display","inline-block");
    $("#main_container").css({"width":"100%"},{"left":"0%"});
    return false;
  });
  $(".close_btn").click(function(){
    $("#aside").addClass('off');
    $("#aside").removeClass('on');
    $(".toggle_btn").css("display","inline-block");
    // $("#main_container").css({"width":"80%"},{"left":"20%"});
    return false;
  });
});// document ready
