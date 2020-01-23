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
var timer = 80;


$('#go').on('click', function() {
    appear.attr('class', 'col-sm-6 body');
    disappear.attr('class', 'bodyHide');
    
});

$('#next').on('click', function() {
    if ($('#c').is(':checked')) {
        score += 10;
        $('#score').html(score);
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
    
    $('#nextDiv').html('<button class="text-center rounded" id="next1">next</button>');

    $('#next1').on('click', function() {
        if ($('#b').is(':checked')) {
            score += 10;
            $('#score').html(score);
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
        
        $('#nextDiv').html('<button class="text-center rounded" id="next2">next</button>');
       
        $('#next2').on('click', function() {
            if ($('#d').is(':checked')) {
                score += 10;
                $('#score').html(score);
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
            
            $('#nextDiv').html('<button class="text-center rounded" id="next3">next</button>');
        
            $('#next3').on('click', function() {
                if ($('#a').is(':checked')) {
                    score += 10;
                    $('#score').html(score);
                }
                else {
                    timer -= 5;
                }
                quesNum.html('Question 5');
                ques.html('Where should the JavaScript file be referenced in the html?');
            
                ans1.html('<input type="radio" id="a" name="ans">inside the head tag');
                ans2.html('<input type="radio" id="b" name="ans">anywhere in the body');
                ans3.html('<input type="radio" id="c" name="ans">at the very bottom of the body');
                ans4.html('<input type="radio" id="d" name="ans">at the very top of the body');
                
                $('#nextDiv').html('<button class="text-center rounded" id="next4">next</button>');
                
                $('#next4').on('click', function() {
                    if ($('#c').is(':checked')) {
                        score += 10;
                        $('#score').html(score);
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
                    
                    $('#nextDiv').html('<button class="text-center rounded" id="next5">next</button>');

                    $('#next5').on('click', function() {
                        if ($('#a').is(':checked')) {
                            score += 10;
                            $('#score').html(score);
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
                        
                        $('#nextDiv').html('<button class="text-center rounded" id="finish">finish</button>');

                        $('#finish').on('click', function() {
                            if ($('#d').is(':checked')) {
                                score += 10;
                                $('#score').html(score);
                            }
                            else {
                                timer -= 5;
                            }
                        });
                    });
                });
            });
        });
    });
});
