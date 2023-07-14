$(document).ready(function(){
    $('.header__nav-burger').click(function(event){
        $('.header__nav-burger, .header__nav-menu, .header__nav-item, .header__nav-button').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

function closeNav() {
  $('.header__nav-menu').removeClass('active');
  $('.header__nav-burger').removeClass('active');
  $('.header__nav-item').removeClass('active');
  $('.header__nav-button').removeClass('active');
  $('body').toggleClass('lock');
}