$(document).ready(function() {
//SEARCH
	$(".btn-search").on("click", function(event){
		event.preventDefault();
		var input = $(this).siblings("input")[0];
		$(input).toggleClass("active-search");
		event.stopPropagation()
	});
	$(".input-search").on("click", function(event){
		event.stopPropagation()
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
		$(".account-group").removeClass("active-m-menu");
		$("#nav-side").removeClass("active-nav-side");
		$(".f-btn-wrap").removeClass("f-btn-animation");
		$(".localization ul, .currency ul").removeClass("active-localization-list");
		$(".sort-dropdown").removeClass("active-items-sort-show");
	});

//FILTERS MENU
	$(".f-btn-wrap").on("click", function(event){
		$(this).toggleClass("f-btn-animation");
		var navSide = $("#nav-side");
		$(navSide).toggleClass("active-nav-side");
		event.stopPropagation()
	});

//CHANGE GRID VIEW
	$(".grid-view a").on("click", function(event){
		event.preventDefault();
		$(".grid .item").removeClass("item-list-view");
		$(".grid-view img").attr("src", "images/icons/grid-active.png");
		$(".list-view img").attr("src", "images/icons/list.png")
	});

	$(".list-view a").on("click", function(event){
		event.preventDefault();
		$(".grid .item").addClass("item-list-view");
		$(".grid-view img").attr("src", "images/icons/grid.png");
		$(".list-view img").attr("src", "images/icons/list-active.png")
	});
//ACTIVE LISTS
	$(".localization, .currency").on("click", function(event){
		event.preventDefault();
		var target = $(this).children("ul");
		$(target).toggleClass("active-localization-list");
		event.stopPropagation()
	});
	$(".active-link").on("click", function(event){
		event.preventDefault();
		var target = $(this).siblings(".sort-dropdown");
		$(target).toggleClass("active-items-sort-show");
		event.stopPropagation()
	});
// SMOOTH SCROLLING
//	$("").on("click", "a", function (event) {
//		event.preventDefault();
//		var id = $(this).attr('href'),
//			top = $(id).offset().top;
//		$('body,html').animate({scrollTop: top}, 700);
//	});
});