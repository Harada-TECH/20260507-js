$(function() {
  // jQueryを記述

  if ($("p").hasClass("textRed")) { // 条件
    // 条件を満たしていた場合
    $("p").html("Yes");
  } else {
    // 条件を満たさなかった場合
    $("p").html("No");
  }
});