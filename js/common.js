$(function(){
  /*script 영역 scoll 반응형 page 사용 예*/
  $(".toggle_btn").click(function(){
    $("#aside").addClass('on');
    $("#aside").removeClass('off');
    return false;
  });
  $(".close_btn").click(function(){
    $("#aside").addClass('off');
    $("#aside").removeClass('on');
    return false;
  });
});// document ready
