$(document).ready(function () {

  // 메뉴 클릭 시 해당 페이지 영역 확장 효과 이벤트
  $("nav li").click(function () {
    
    // class가 on 인 메뉴 한번 더 클릭 시 원래 화면으로 돌아올 수 있게 클래스 제거
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
      $(".content").removeClass("prev this next");
      $("#container").css("max-width", "1200px");
      return;
    }

    $("#container").css("max-width", "100%");
    let id = $(this).attr("data-rol");
    // 기존에 on 클래스가 붙어있다면 다 지워준다
    $("nav li").removeClass("on");
    // 현재 클릭한 요소에 대해서 on 클래스 부여
    $(this).addClass("on");
    console.log("=====", id);

    // 클릭 시 가지고 잇던 클래스를 모두 지운다
    $(".content").removeClass("prev this next");
    // 클릭한 메뉴와 매칭되는 id에 this 클래스를 지정하고 그 앞의 모든 형제요소인 <section> 태그는 .prev 클래스를 지정한다
    $("#" + id).addClass("this").prevAll("section").addClass("prev");
    // 클릭한 메뉴와 매칭되는 id의 뒤에 오는 모든 형제 요소인 <section> 태그는 .next 클래스를 지정한다
    $("#" + id).addClass("this").nextAll().addClass("next");

    console.log("=====", id);
  });

  // 로고 클릭 시 다시 메인 페이지로 이동
  $(".logo_box").click(function () {
    $("nav li").removeClass("on");
    $(".content").removeClass("prev this next");
    $("#container").css("max-width", "1200px");
  });

})