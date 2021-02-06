$(function(){

  $("a.scroll").click(function() {
    const speed = 500;  // スクロールスピード
    const href = $(this).attr("href");  // クリックした要素のhref属性を取得
    const target = $(href == "#" || href == "" ? "html" : href);  // 移動先を取得
    const position = target.offset().top - 100;  // 移動先を数値で取得
    $("body, html").animate({scrollTop: position}, speed, "swing");

    return false;
  });

});