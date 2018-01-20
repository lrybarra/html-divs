$('.clickable').on('click', function(e){
	alert($(this).children()[0].innerHTML);
  e.stopPropagation();
});
