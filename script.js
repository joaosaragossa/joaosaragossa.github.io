$(document).ready(function()
{


  $('#menu ul li a').click(function()
    {
      $('html, body').animate({scrollTop: $($(this).attr("href")).offset().top}, 1000);
      return false;
    });


  $('.parallax').each(function(){
    var $obj = $(this);
   
    $(window).scroll(function() {
      var yPos = -($(window).scrollTop() / $obj.data('speed')); 
   
      var bgpos = '50% '+ yPos + 'px';
   
      $obj.css('background-position', bgpos );
      return false;
    });
    return false;
  });

  $('.parallax02').each(function(){
    var $obj = $(this);
   
    $(window).scroll(function() {
      var yPos = ($(window).scrollTop() / $obj.data('speed')); 
   
      var bgpos = '50% '+ yPos + 'px';
   
      $obj.css('background-position', bgpos );
      return false;
    });
    return false;
  });

  $(".sec-portifolio-ul li").click(function(){

    $("#sec-portifolio-modalbg").css("display","inherit");

    var src = $(this).find("img").attr("src");
    var url = $(this).find("img").attr("url");
    var h3  = $(this).find("h3").text();
    var p   = $(this).find("p").text();

    $("#sec-portifolio-modal").find("a").attr("href",url);
    $("#sec-portifolio-modal").find("img").attr("src",src);
    $("#sec-portifolio-modal").find("h1").text(h3);
    $("#sec-portifolio-modal").find("p").text(p);
  });

  $(".fa-times").click(function(){

    $("#sec-portifolio-modalbg").css("display","none");
  });
});