$(document).ready(function(){
    $("#menu").hover(
      function() {$('.subMenu').show();},
      function() {$('.subMenu').hide();}
    );
});

  function openNav() {
    document.getElementById("mySidenav").style.width = "30%";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('.subMenu').hide();
  }
  AOS.init({
    duration: 1200,
  });

  $(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    $("#head1").click(function(){
      $("#tab1").show(),
      $("#tab2,#tab3").hide();
    });
    $("#head2").click(function(){
      $("#tab2").show(),
      $("#tab1,#tab3").hide();
    });
    $("#head3").click(function(){
      $("#tab3").show(),
      $("#tab1,#tab2").hide();
    });
    // $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="tooltip"]').tooltip({
      trigger : 'hover'
  }) 
    // $('.icon_lnk_1').on('click', function () {
    // $(this).tooltip('hide')
    // });
});
window.onscroll = function() {myFunction()};

var header_main  = document.getElementById("Header_Main");
var Header_Logo = document.getElementById("header_logo");
var sticky = header_main.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header_main.classList.add("sticky_header");
    Header_Logo.classList.add("head_img_cls");
    
  } else {
    header_main.classList.remove("sticky_header");
    Header_Logo.classList.remove("head_img_cls");
  }
}


