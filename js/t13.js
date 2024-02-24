$(document).ready(function(){
    $("#dialog").dialog({
        autoOpen: false,
        show: {
            effect: 'blind',
            duration: 1000
        },
        hide: {
            effect: 'explode',
            duration: 1000
        }
    });


    $('#my_button').on('click', function(event){
        event.preventDefault();
        let umovi = '';
        if ($("input[type='checkbox']").eq(0).prop('checked') == true) {
            umovi += "Шолом: так <br>"
        }
        if ($("input[type='checkbox']").eq(1).prop('checked') == true) {
            umovi += "Багажник: так <br>"
        }
        if ($("input[type='checkbox']").eq(2).prop('checked') == true) {
            umovi += "Мотоодяг: так <br>"
        }
        if ($('#inch_yes').prop('checked') == true) {
           umovi += "Страхування: так <br>"
        } else {
            umovi += "Страхування: ні <br>"
        }

        $('#dialog').html(
            $("#motoSelect option:selected").text()+'<br>'+
            $("custom-handle").text()+"<br>"+
            " на "+days+" днів"+"<br>"+
            'Запланована відстань: '+$('#amount').val()+"<br>"+
            $("#tags").val()+"<br>"+ umovi
        )



        
        $('#dialog').dialog('open');
    });



});