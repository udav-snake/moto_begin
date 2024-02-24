$(document).ready(function() {

    $('#my_button').button();

    $('#clear_form').button();
    $('#clear_form').click(function(event){
        $('#div_form_1 input[type=checkbox]').prop('checked', false).button("refresh");
        $('#div_form_1 input[type=radio]').prop('checked', false).button("refresh"); // Додайте цей рядок
      /*   $('#radio label').removeClass('ui-state-active');
        $('#radio label span').remove(); */

        $('#progressbar').progressbar({
            value: 0
        });
        $('input[type=text], textarea').val('');
        event.preventDefault();
    });

    $('input[type=checkbox]').checkboxradio();
    $('input[type=radio]').checkboxradio();


    $("#motoSelect, #daysSelect").selectmenu();
    


    $.widget('custom.iconselectmenu', $.ui.selectmenu, {
        _renderItem: function(ul, item){
            let li = $('<li>'),
            wrapper = $('<div>', {text: item.label}) ;

            if(item.disabled) {
                li.addClass('.ui-state-disabled');
            }

            $('<span>', {
                style: item.element.attr('data-style'), 
                'class': "ui.icon " + item.element.attr('data-class')
            }).appendTo(wrapper);

            return li.append(wrapper).appendTo(ul);
        }
    });

    $('#motoSelect').iconselectmenu('menuWidget').addClass("ui-menu-icons customicons");
});