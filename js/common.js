$(document).ready(function() {
//SEARCH
	$(".btn-search").on("click", function(event){
		event.preventDefault();
		var input = $(this).siblings("input")[0];
		$(input).toggleClass("active-search");
		event.stopPropagation();
	});
	$(".input-search").on("click", function(event){
		event.stopPropagation();
	});

// MY SANDWICHES
	$(".s-btn").on('click', function(event){
		$(this).toggleClass('btn-animation');
		$(".bottom-component").toggleClass("active-m-menu");
		var accountGroup = $(".account-group");
		if(accountGroup.hasClass("active-m-menu")){
			$(accountGroup).removeClass("active-m-menu");
		}
		event.stopPropagation()
	});
	$(".account-info").on("click", function(event){
		$(".account-group").toggleClass("active-m-menu");
		var bottomComponent = $(".bottom-component");
		if(bottomComponent.hasClass("active-m-menu")){
			$(bottomComponent).removeClass("active-m-menu");
			$(".s-btn").removeClass('btn-animation');
		}
		event.stopPropagation()
	});

	$("body").on('click', function(){
		$(".s-btn").removeClass("btn-animation");
		$(".bottom-component").removeClass("active-m-menu");
		$(".active-search").removeClass("active-search");
		$(".account-group").removeClass("active-m-menu")
	});


// SMOOTH SCROLLING
//	$("").on("click", "a", function (event) {
//		event.preventDefault();
//		var id = $(this).attr('href'),
//			top = $(id).offset().top;
//		$('body,html').animate({scrollTop: top}, 700);
//	});
});