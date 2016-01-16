$(document).ready(function() {
	$('form#places').submit(function(event){
		var wild = $('.radio')[0].checked || $('.radio')[3].checked || $('.radio')[6].checked;
		var beach = $('.radio')[1].checked || $('.radio')[4].checked || $('.radio')[7].checked;
		var city = $('.radio')[2].checked || $('.radio')[5].checked || $('.radio')[8].checked;

		if (wild) {
			location.href = "pages/wild.html"
		} else if (beach) {
			location.href = "pages/beach.html"
		} else if (city) {
			location.href = "pages/city.html"
		} else {
			location.href = "index.html"
			alert("Please make a valid selection")
		}
		return false;
		event.preventDefault()	;
	});

	$('form#wildPlaces').submit(function(event){
		var montane = $('.radio')[0].checked || $('.radio')[3].checked || $('.radio')[6].checked;
		var desert = $('.radio')[1].checked || $('.radio')[4].checked || $('.radio')[7].checked;
		var forest = $('.radio')[2].checked || $('.radio')[5].checked || $('.radio')[8].checked;

		if (montane) {
			location.href = "montane.html"
		} else if (desert) {
			location.href = "desert.html"
		} else if (forest) {
			location.href = "forest.html"
		} else {
			alert("Please make a valid selection")
			location.href = "pages/wild.html"
			
		}
		return false;
		event.preventDefault()	;
	});

	$('form#cityPlaces').submit(function(event){
		var europe = $('.radio')[0].checked || $('.radio')[5].checked || $('.radio')[6].checked;
		var asia = $('.radio')[1].checked || $('.radio')[4].checked || $('.radio')[8].checked;
		var brazil = $('.radio')[2].checked || $('.radio')[3].checked || $('.radio')[7].checked;

		if (europe) {
			location.href = "europe.html"
		} else if (asia) {
			location.href = "asia.html"
		} else if (brazil) {
			location.href = "brazil.html"
		} else {
			alert("Please make a valid selection")
			location.href = "city.html"
			
		}
		return false;
		event.preventDefault()	;
	});

	$('form#beachPlaces').submit(function(event){
		var oregon = $('.radio')[0].checked || $('.radio')[5].checked || $('.radio')[6].checked;
		var tropical = $('.radio')[1].checked || $('.radio')[4].checked || $('.radio')[8].checked;
		var cali = $('.radio')[2].checked || $('.radio')[3].checked || $('.radio')[7].checked;

		if (oregon) {
			location.href = "oregon.html"
		} else if (tropical) {
			location.href = "tropical.html"
		} else if (cali) {
			location.href = "california.html"
		} else {
			alert("Please make a valid selection")
			location.href = "beach.html"
			
		}
		return false;
		event.preventDefault()	;
	});

	$('button.opt1').click(function(){
		$('div.option1').toggle();
	});

	$('button.opt2').click(function(){
		$('div.option2').toggle();
	});

	$('button.opt3').click(function(){
		$('div.option3').toggle();
	});
});