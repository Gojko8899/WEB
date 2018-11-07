$("li:first").addClass('border');
$('li').addClass('texttoUpper');
$('.active').addClass('fontColor').removeClass('active');
var $middle = $('li');
var $middleElement = ($middle.length - 1)/2;
// $middleElement.addClass('active')
console.log($middle[$middleElement]);
$($middle[$middleElement]).addClass('fontColor');