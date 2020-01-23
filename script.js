var appear = $('.bodyHide');
var disappear = $('.body');

var a = $('#a');
var b = $('#b');
var c = $('#c');
var d = $('#d');

var ques = $('#ques');

var ans1 = $('#ans1');
var ans2 = $('#ans2');
var ans3 = $('#ans3');
var ans4 = $('#ans4');

$('#go').on('click', function() {
    appear.attr('class', 'col-sm-4 body');
    disappear.attr('class', 'col-sm-4 bodyHide');
})

$('#next').on('click', function() {
    ques.html('veritatis nobis alias omnis voluptatem? Consequuntur, quasi ducimus? Distinctio? veritatis nobis alias omnis voluptatem? Consequuntur, quasi ducimus? Distinctio?')

    ans1.html('<input type="radio" id="a" name="ans">2ans1');
    ans2.html('<input type="radio" id="a" name="ans">2ans2');
    ans3.html('<input type="radio" id="a" name="ans">2ans3');
    ans4.html('<input type="radio" id="a" name="ans">2ans4');

    $('#next').attr('id', 'next2')
});

