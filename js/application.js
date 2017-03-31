
$(document).ready(function() {

    /***search box hover ***/
    $('#search-icon').hover(function() {
        $('#search_block_top').toggle("slow");
    });//end search box hover

    /***flexslider***/
    $('#home-slider-inner').flexslider({
        animation: "slide",
        controlsContainer: $(".custom-controls-container"),
        slideshowSpeed: 4000,

      });

    $("#home-slider-inner").find(".flex-direction-nav").remove();

    //product-detail-flexslider
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 88,
        itemMargin: 5,
        asNavFor: '#slider',
        customDirectionNav: $(".custom-navigation a")
      });
     
    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
    });
    $('#slider').find(".flex-direction-nav").remove();

    /***OWL carousel***/
    var owl1 = $("#new-products .owl-carousel");
    owl1.owlCarousel({
        margin: 30,
        nav: true,
        dots: false,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          480: {
            items: 2
          },
          768: {
            items: 3
          },
          960: {
            items: 3
          }
        }
    })

    var owl2 = $("#featured-products .owl-carousel");
    owl2.owlCarousel({
        margin: 30,
        nav: true,
        dots: false,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          480: {
            items: 2
          },
          768: {
            items: 3
          },
          960: {
            items: 3
          }
        }
    })

    var owl3 = $("#related-products .owl-carousel");
    owl3.owlCarousel({
        margin: 30,
        nav: true,
        dots: false,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          480: {
            items: 2
          },
          768: {
            items: 3
          },
          960: {
            items: 3
          }
        }
    })

    var owl4 = $("#partners .owl-carousel");
    owl4.owlCarousel({
        margin: 22,
        nav: true,
        dots: false,
        loop: true,
        responsive: {
          0: {
            items: 2
          },
          640: {
            items: 3
          },
          768: {
            items: 4
          },
          960: {
            items: 6
          }
        }
    })

    var owl5 = $("#upsell-products .owl-carousel");
    owl5.owlCarousel({
        margin: 22,
        nav: true,
        dots: false,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 3
          },
          960: {
            items: 1
          }
        }
    })


    /***Qty plus & minus btn***/
    
    $(".plus").click(function() {
        var qty =  $("#qty").val();
        qty++;
        $("#qty").val(qty);
    });

    $(".minus").click(function() {
        var qty =  $("#qty").val();
        if(qty > 1) qty--;
        $("#qty").val(qty);
    });

    /***List to grid***/
    

    $(".grid-switcher").click(function() {
        $("#category-content").addClass("grid-view")
                              .removeClass("list-view");
        $(this).addClass("active");  
        $(".list-switcher").removeClass("active"); 

        $(".list-view .product-inner").removeClass("col-sm-4");
        $(".list-view .btm-block").removeClass("col-sm-8");  
        $("#category-content").css("margin-top","30px");  

    });

    $(".list-switcher").click(function() {
        $("#category-content").addClass("list-view")
                              .removeClass("grid-view"); 
        $(this).addClass("active");
        $(".grid-switcher").removeClass("active");       

        $(".list-view .product-inner").addClass("col-sm-4");
        $(".list-view .btm-block").addClass("col-sm-8"); 

        $("#category-content").css("margin-top",0);                  
    });



    /***Category***/

    function toggleMenu(jQueryElement) {
        if (jQueryElement.hasClass('opened')) {
            jQueryElement.addClass("closed").removeClass("opened");
            jQueryElement.parent().find('ul:first').slideToggle();
            jQueryElement.parent().find('a:first').removeClass('active');
        } else {
            jQueryElement.addClass("opened").removeClass("closed");
            jQueryElement.parent().find('ul:first').slideToggle();
            jQueryElement.parent().find('a:first').addClass('active');
        }
    }
    $('.grower').click(function() {
        toggleMenu($(this));
    });

    /***noUiSlider - price slider***/

    (function() {
      
        connectedSlider = document.getElementById('range-slider');

        noUiSlider.create(connectedSlider, {
            animationDuration: 300,
            start: [100, 1000],
            step: 10,
            connect: true,
            range: {
                'min': 10,
                'max': 1500
            }
        });
        
        var connectedSliderValueElement = [ document.getElementById('lower-price'), document.getElementById('upper-price') ];

        connectedSlider.noUiSlider.on('update', function( values, handle ) {
           connectedSliderValueElement[handle].innerHTML = values[handle];
        });

    }).call(this);



});

