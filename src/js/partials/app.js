(function ($) {
//верхний слайдер
$.fn.happy_ban = function(){

var obj = $(this);
var w_img = obj.find('li').width();
var c_left = Number(obj.children('ul').css('left').replace('px',''));
var w_button = obj.find('.next').width();
/*
	$(window).resize(function() {
			itm = Math.floor((Number($('.head_ban').parent().width()) - w_button ) / w_img);
			$('.head_ban').css({'width':(itm*w_img + w_button)+'px'});
		});
*/
obj.children('ul').width(w_img * obj.find('li').length);

obj.find('.next').click(function(){
	obj.children('ul').animate({'left':c_left - w_img}, 700, function () {
	obj.children('ul').append(obj.find('li:first').clone());
	obj.find('li:first').remove();
	obj.children('ul').css({'left':(c_left) + 'px'});
});

});
obj.find('.prev').click(function(){
	
	obj.children('ul').prepend(obj.find('li:last').clone());
	obj.find('li:last').remove();
	obj.children('ul').css({'left':(c_left - w_img) + 'px'});
	obj.children('ul').animate({'left':c_left}, 700);

	});

}

//центральный слайдер



$.fn.carusel = function() {
var obj = $(this);
var w_img = obj.find('li').width();
//проверка существования свойства
var ul_left = obj.children('ul').css('left');

if(typeof(ul_left) != "undefined" && ul_left !== null) {
    var c_left = Number(obj.children('ul').css('left').replace('px',''));
}

	$(window).resize(function() {
			itm = Math.floor(Number($('#carusel').parent().width())  / w_img);
			$('#carusel').css({'width':itm*w_img +'px'});
		});

obj.children('ul').width(w_img * obj.find('li').length);

$('.next_cont').click(function(){
	obj.children('ul').prepend(obj.find('li:last').clone());
	obj.find('li:last').remove();
	obj.children('ul').css({'left':(c_left - w_img) + 'px'});
	obj.children('ul').animate({'left':c_left}, 500);
});

$('.prev_cont').click(function(){
	obj.children('ul').animate({'left':c_left - w_img}, 500, function () {
	obj.children('ul').append(obj.find('li:first').clone());
	obj.find('li:first').remove();
	obj.children('ul').css({'left':(c_left) + 'px'});
	});
});
}



//конец центральный слайдер

}) (jQuery)

$(document).ready(function(e){
	$('#carusel').carusel();
	$('.head_ban').happy_ban();
});
