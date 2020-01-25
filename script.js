var appear = $('.bodyHide');
var disappear = $('.body');

var a = $('#a');
var b = $('#b');
var c = $('#c');
var d = $('#d');

var ques = $('#ques');
var quesNum = $('#quesNum');

var ans1 = $('#ans1');
var ans2 = $('#ans2');
var ans3 = $('#ans3');
var ans4 = $('#ans4');

var score = 0;
var timer = 10;

var leaderboard = $('.lbHide');
var clickCount=0;

function scored() { 
    score += 10;
    $('#score').html('score: ' + score + ' Correct!');
    setTimeout( function() {
        $('#score').html('score: ' + score);
    }, 500);
};

$('#go').on('click', function() {
    appear.attr('class', 'col-sm-6 body');
    disappear.attr('class', 'bodyHide');
   
    $('#timer').html('time: ' + timer);
    $('#score').html('score: ' + score);

    setInterval(function(){
        timer -= 1;
        $('#timer').html('time: ' + timer);
            if (timer == 0) {
                setTimeout( function() {
                    prompt('You scored ' + score + ' points! Enter your initials below.');
                    $('.body').attr('class', 'bodyHide');
                    leaderboard.attr('class', 'col-sm-6 lb');
                }, 500);
            };
        }, 1000);
    
});

$('#next').on('click', function() {
    clickCount++;
    if (clickCount == 1) {
        if ($('#c').is(':checked')) {
            scored();
        }
        else {
            timer -= 5;
        }
        quesNum.html('Question 2');
        ques.html('What does HTML stand for?');
    
        ans1.html('<input type="radio" id="a" name="ans">Header Text Mark Language');
        ans2.html('<input type="radio" id="b" name="ans">Hypertext Markup Language');
        ans3.html('<input type="radio" id="c" name="ans">Hyperlink Text Markup Language');
        ans4.html('<input type="radio" id="d" name="ans">Hypertag Mark Language');
    }
    else if (clickCount == 2) {
        if ($('#b').is(':checked')) {
            scored();
        }
        else {
            timer -= 5;
        }
        quesNum.html('Question 3');
        ques.html('In CSS, what selector would you use to denote an id?');
    
        ans1.html('<input type="radio" id="a" name="ans">*');
        ans2.html('<input type="radio" id="b" name="ans">nothing');
        ans3.html('<input type="radio" id="c" name="ans">.');
        ans4.html('<input type="radio" id="d" name="ans">#');
    }
    else if (clickCount == 3) {
        if ($('#d').is(':checked')) {
            scored();
        }
        else {
            timer -= 5;
        }
        quesNum.html('Question 4');
        ques.html('Where should the CSS file be referenced in the html?');
    
        ans1.html('<input type="radio" id="a" name="ans">inside the head tag');
        ans2.html('<input type="radio" id="b" name="ans">anywhere in the body');
        ans3.html('<input type="radio" id="c" name="ans">at the very bottom of the body');
        ans4.html('<input type="radio" id="d" name="ans">at the very top of the body');
    }
    else if (clickCount == 4) {
        if ($('#a').is(':checked')) {
            scored();
        }
        else {
            timer -= 5;
        }
        quesNum.html('Question 5');
        ques.html('Where should the JavaScript file be referenced in the html?');
    }
    else if (clickCount == 5) {
        if ($('#c').is(':checked')) {
            scored();
        }
        else {
            timer -= 5;
        }
        quesNum.html('Question 6');
        ques.html('When referencing external libraries (E.g. bootstrap, jQuery), in addition to your own code, where should you reference your personal code in relationship to the external libraries?');
    
        ans1.html('<input type="radio" id="a" name="ans">Below the External Library');
        ans2.html('<input type="radio" id="b" name="ans">Above the External Library');
        ans3.html('<input type="radio" id="c" name="ans">It doesn\'t matter');
        ans4.html('<input type="radio" id="d" name="ans">On the same line');
    }
    else if (clickCount == 6) {
        if ($('#a').is(':checked')) {
            scored();
        }
        else {
            timer -= 5;
        }
        quesNum.html('Question 7');
        ques.html('Which of these is not a semantic Div tag?');
    
        ans1.html('<input type="radio" id="a" name="ans">article');
        ans2.html('<input type="radio" id="b" name="ans">section');
        ans3.html('<input type="radio" id="c" name="ans">header');
        ans4.html('<input type="radio" id="d" name="ans">form');
    }
    else if (clickCount == 7) {
        if ($('#d').is(':checked')) {
            scored();
        }
        
        setTimeout( function() {
            prompt('You scored ' + score + ' points! Enter your initials below.');
            $('.body').attr('class', 'bodyHide');
            leaderboard.attr('class', 'col-sm-6 lb');
        }, 500);
    }
});









        

    
    
    


    