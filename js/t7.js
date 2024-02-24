$(document).ready(function(){
    // z1
    $(':header').first().css({'background-color': 'yellow', 'color': 'black'});

    // z2
    $(':header').last().css('font-size', '400%');

    // z3
    $("input[type='checkbox']").eq(1).prop('checked',true);

    // z4
    $("input[type='radio']").eq(0).prop('checked',true);

    // z5
    $('#my_form').click(function(){
        getInfoMoto();
    });
    function getInfoMoto(){
        let Moto = $('#motoSelect option:selected').text();
        let Days = $('#daysSelect option:selected').text();
        let Email = $('#email').val();

        let pruklad = Email.indexOf('Приклад: ');
        if(pruklad>=0){
            $('#email').css({'background-color': 'red'});
        }else{
            $('#email').css({'background-color': 'lightgreen'});
        }


        let helm = '';
        let bag = '';
        let od = '';
        let inch = '';

        if( $("input[type='checkbox']").eq(0).prop('checked') == true ){
            helm = $('label[for="shlem"]').text();
        }

        if( $("input[type='checkbox']").eq(1).prop('checked') == true ){
            bag = $('label[for="bag"]').text();
        }

        if( $("input[type='checkbox']").eq(2).prop('checked') == true ){
            od = $('label[for="od"]').text();
        }

        if( $('#inch_yes').prop('checked')==true){
            inch = 'Так';
            $('#radio').css({'background-color': '#f6f6f6', 'color': '#000'});
        }else{
            inch = 'Ні';
            $('#radio').css({'background-color': 'red', 'color': '#fff', 'width': '20%', 'border-radius': '5px', 'padding-left': '5px', 'padding-top': '3px', 'padding-bottom': '-1px'});
        };

        $('textarea').text(`${Moto} на ${Days} днів \n ${Email} \n Аксесуари: ${helm} ${bag} ${od} \n Страховка: ${inch} `);

    };

    // z7
    
});