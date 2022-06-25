
$(".img-item").click(function(e)
{
  let imgSrc = $(e.target).attr("src");
  $("#mainImage").attr("src" , imgSrc);
  
})



$(".img-items").click(function(e)
{
  let imgSrc = $(e.target).attr("src");
  $("#mainImages").attr("src" , imgSrc);
  
})



$(document).ready(function()
{
  $("#loading").fadeOut(1500,function()
  {
    $("body").css("overflow", "auto");
  })
})




