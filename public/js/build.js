$(document).ready(function() {
	$("#p2").hide();

	$(".show-modal").click(function () {
		$("#p2").show();
		setTimeout(function() { window.location='tu-calendar.html';}, 3000);
	});
});