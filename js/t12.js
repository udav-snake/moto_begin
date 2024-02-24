// Додати додатковий файл для мови української
$.datepicker.regional['uk'] = {
    closeText: 'Закрити',
    prevText: 'Попередній',
    nextText: 'Наступний',
    currentText: 'Сьогодні',
    monthNames: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
        'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
    monthNamesShort: ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер',
        'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'],
    dayNames: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'],
    dayNamesShort: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    dayNamesMin: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Тиждень',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};

// Встановити мову для дефолтного елемента datepicker
$.datepicker.setDefaults($.datepicker.regional['uk']);
$(document).ready(function() {

    let handle = $('#custom-handle');
    $('#slider').slider({
        min: 0,
        max: 10,
        value: 1,
        create: function(){
            handle.text($(this).slider('value'));
        },
        slide: function(event, ui){
            handle.text(ui.value);
            $('#mytextarea').text(ui.value + ' мотоцикл');
        }
    });

    let dateFormat = 'mm/dd/yy',
    from = $('#from')
        .datepicker({
            defaultDate: '+1w',
            changeMonth: true, 
            numberOfMonths: 1
        })
        .on('change', function(){
            to.datepicker('option', 'minDate', getDate(this));
        }),
    to = $('#to')
    .datepicker({
        defaultDate: '+1w',
        changeMonth: true, 
        numberOfMonths: 1
    })
    .on('change', function(){
        from.datepicker('option', 'maxDate', getDate(this));
    });
    function getDate(element){
        var date;
        try{
            date = $.datepicker.parseDate(dateFormat, element.value)
        } catch (error) {
            date = null;
        }
        return date;
    }



    let days = 0;
    $('#to').change(function(){
        var Date1 = new Date ($('.datepicker:first').val());
        var Date2 = new Date ($('.datepicker:last').val());
        var Days = Math.floor(((Date2.getTime() - Date1.getTime())/(1000*60*60*24))+1);
        days = Days;
        $('#mytextarea').text(function(i, origText){
            return Days + " днів"+"\n"+ origText
        });
    });

    $('#slider-range').slider({
        range: true,
        min: 10,
        max: 1000,
        step: 5,
        values: [200, 400],
        slide: function(event, ui){
            $('#amount').val(ui.values[0] + " - " + ui.values[1] + ' км')
        }
    });
    $('#amount').val(
        $('#slider-range').slider('values', 0)
        + " - " +
        $('#slider-range').slider('values', 1)
        + " км"
    );



    let obl = [
        'Вінницька', 'Волинська', 'Дніпропетровська', 'Донецька', 'Житомирська', 
        'Закарпатська', 'Запорізька', 'Івано-Франківська', 'Київська', 'Кіровоградська', 
        'Луганська', 'Львівська', 'Миколаївська', 'Одеська', 'Полтавська', 
        'Рівненська', 'Сумська', 'Тернопільська', 'Харківська', 'Херсонська', 
        'Хмельницька', 'Черкаська', 'Чернівецька', 'Чернігівська'
    ];
    $('#tags').autocomplete({
        source: function(request, response) {
            let term = request.term.toLowerCase();
            let filteredArray = $.grep(obl, function(item) {
                return item.toLowerCase().startsWith(term);
            });
            response(filteredArray);
        }
    });






    $('#progressbar').progressbar({
        value: 0
    });
    $('[name="posv"],[name="dosv"],[name="speed"],[name="fam"],[name="sigur"]')
        .change(function() {
            let chRadio = $('[name="posv"]:checked,[name="dosv"]:checked,[name="speed"]:checked,[name="fam"]:checked,[name="sigur"]:checked').length;
            $('#progressbar').progressbar({
                value: chRadio*20
            });

            let questQunt = $('#oput [id^="radio"]').length;
            $('#aswerCount').text('Дано відповідей' + chRadio + ' із ' + questQunt);
        });
        $("#progressbar").bind('progressbarchange', function (event, ui) {
            var selector = "#" + this.id + " > div";
            var value = this.getAttribute("aria-valuenow");
            if (value < 50) {
                $(selector).css({ 'background': 'Red' });
            }
            else if (value >= 60 && value < 100) {
                $(selector).css({
                    'background': 'Yellow'
                });
            }
            else if (value = 100) {
                $(selector).css({
                    'background': 'Green'
                });
            }
            });
});
