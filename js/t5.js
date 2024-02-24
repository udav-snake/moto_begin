$(document).ready(function () {
    //1
    $('#about-moto').addClass('new');
    // 2
    $('#about-moto').prepend('<p class="fon_yellow"> prepend </p>');
    $('#about-moto').append('<p class="fon_yellow"> apend </p>');

    $('#about-moto').before('<p class="fon_yellow"> before </p>');
    $('#about-moto').after('<p class="fon_yellow"> after </p>');
    // 3
    $('li').hover(
        function () {
            $(this).toggleClass('svitlo');
        }
    );
    
    // 4-5
    
  /*   $('.head-moto-img').click(
        function () {
            $(this).clone().appendTo('.koshik-wrapper');
            $(this).remove();
            $('.koshik-wrapper').addClass('full-koshik');
        }
    ); */

    // 6
    /* $('.head-moto-img').click(
        function () {
            let n = $(this);
            $('.koshik-wrapper-items').each(
                function(){
                    if (n.attr('nomer') == $(this).attr('nomer')) {
                        $(this).html(n.clone());
                        n.remove();
                        $('.koshik-wrapper').addClass('full-koshik');
                    }
                }
            )
        }
    ); */

    // 7

    $('.head-moto-img').click(
        function () {
            $('.koshik-wrapper').append($(this).clone().dblclick(function(){
                $(this).remove();
                sumaMoto();
            }));
            sumaMoto();
        }
    );

    function sumaMoto(){
        let count = 0;
        let suma = 0;
        $('.koshik-wrapper>.head-moto-img').each(
            function(){
                count++
                suma += parseInt($(this).attr('price'));
            }
        );

        $('#suma').html('Всього <b>' + count + '</b> мотоциклів на суму <b>' + suma + '</b> UAH');

        if (count > 0){
            $('.koshik-wrapper').addClass('full-koshik');
        } else{
            $('.koshik-wrapper').removeClass('full-koshik');
        }
    }










});