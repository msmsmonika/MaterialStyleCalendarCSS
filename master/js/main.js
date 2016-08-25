$(document).ready(function () {
    $('#datetimepicker12').datepicker({
        dateFormat: 'yyyy/mm/dd',
        inline: true,
        sideBySide: true,
        onSelect: function (date) {
            console.log(date);
        }
    });
   
});

