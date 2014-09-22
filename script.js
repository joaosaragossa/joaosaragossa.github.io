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
});