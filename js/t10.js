$(document).ready(function () {

    let icons = {
        header: 'ui-icon-circle-arrow-e',
        activeHeader: 'ui-icon-circle-arrow-s',
    };

    $('#accordion').accordion({
        collapsible: true,

        active: false,
        heightStyle: 'content',
    });
    $('#accordion2').accordion({
        collapsible: true,

        active: false,
        heightStyle: 'content',
    });
});