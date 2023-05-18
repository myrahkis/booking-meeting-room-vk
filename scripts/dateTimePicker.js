$(function() {
    $('#datepicker').datepicker({
        showAnim: "slideDown",
        duration: "slow",
        dateFormat: "mm/dd/yy",
        dayNamesMin: [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс" ],
        monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
        minDate: 0,
    });
});