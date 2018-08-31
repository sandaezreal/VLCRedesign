
            /*global $, console, alert*/

$(function () {

// Global Variables //

var ulList1 = $('.sel-list-1'),
    ulTxt1  = $('.sel-list-1 .sel-txt-1'),
    liList1 = $('.li-list-1'),
    liDiv1  = $('.li-list-1 .li-txt-1');

var ulList2 = $('.sel-list-2'),
    ulTxt2  = $('.sel-list-2 .sel-txt-2'),
    liList2 = $('.li-list-2'),
    liDiv2  = $('.li-list-2 .li-txt-2');

// Hide Li List When Toggle UL List And Click Away It //

ulList1.on('click', function (e) {
        liList1.toggle();
        e.stopPropagation(); // stope Li List Toggle Event For Run The Dom Event (Click Away Li List)
        $(document).on('click', function () { // Function To Hide Li List When Click Any Place in Dom
        liList1.hide();
    });
});

liDiv1.on('click', function () {
    ulTxt1.text($(this).text());
});


ulList2.on('click', function (e) {
        liList2.toggle();
        e.stopPropagation(); // stope Li List Toggle Event For Run The Dom Event (Click Away Li List)
        $(document).on('click', function () { // Function To Hide Li List When Click Any Place in Dom
        liList2.hide();
    });
});

liDiv2.on('click', function () {
    ulTxt2.text($(this).text());
});

   
});
