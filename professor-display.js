$(function() {

    $(".selectArea").click(function() {
      $(".btn:first-child").text($(this).text());
      $(".btn:first-child").val($(this).text());
   });
});
