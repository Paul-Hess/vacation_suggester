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
});