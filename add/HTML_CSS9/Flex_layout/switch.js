$(document).ready(function() {
    $("#radio1").click(function() {
        if($(this).is(":checked")) {
            $(".item").css({transform : 'scale('+1.2+')'})

        } else {
            $(".item").css({transform : 'none'});

        }


    });
    $("#radio2").click(function() {
        if($(this).is(":checked")) {
            $(".item").css({opacity :0});

        } else {
            $(".item").css({opacity :1});

        }


    });
    $("#radio3").click(function() {
        if($(this).is(":checked")) {
            $(".item").css({transform : 'scale('+1.2+')'})

        } else {
            $(".item:nth-child(3)").css({transform : 'none'});

        }


    });

});


$(document).ready (function (){
    $('.header_burger').click(function (event){
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});





