/*
* @Author: hanjiyun
* @Date:   2014-02-22 11:47:22
* @Last Modified by:   hanjiyun
* @Last Modified time: 2014-02-24 11:58:10
*/

$(function(){
    $('.ui.sidebar').sidebar('show');

        $('#switch_btn').click(function(){
            // $('.ui.sidebar').sidebar('toggle');
            $('body').toggleClass('pushed')
        })

    $('.sidebar a').click(function(){
        var href = $(this).attr('href');
        // console.log(href);

        $('article section').removeClass('active');

        console.log($(href+''))
        $(href+'').addClass('active')
    })

    $('.item:not(.active)').on('click', 'a', function(){
        var $t = $(this);
        var tab = $t.attr('href').replace('#', '');

        console.log(tab)

        $('.item').removeClass('active');
        $t.parents('.item').eq(0).addClass('active');

        $('section').removeClass('active')
        $('#' + tab).addClass('active')

        setTimeout(function(){
            if($(window).width() < 769 ){
                $('body').removeClass('pushed');
            }
        }, 300)


        // $('section').animate({scrollTop:0},0);
    })

    // $(window).resize(function(){
    //     var width = $(window).width();
    //     if(width < 1220){
    //         $('.ui.sidebar').sidebar('hide');
    //         $('#switch_btn').show();
    //         // $('#switch_btn').click(function(){
    //         //     $('.ui.sidebar').sidebar('toggle');
    //         // })
    //     } else {
    //         $('.ui.sidebar').sidebar('show');
    //         $('#switch_btn').hide();
    //     }
    // })
})

