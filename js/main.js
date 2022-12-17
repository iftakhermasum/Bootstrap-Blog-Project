jQuery(document).ready(function(){

    jQuery(".headrsrchwrp img").click(function(){
        jQuery(".headrsrchwrp form").toggle();
    });

    jQuery('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots: true,
        //autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    jQuery(".hambargerbox").click(function(){
        jQuery(".mainmenuwrap").toggle();
    });
  });