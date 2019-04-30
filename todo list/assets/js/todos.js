$("ul").on("click", "li", function() {
	$(this).toggleClass("done");
});

$("ul").on("click", "li > span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input").keypress(function(event) {
	if (event.which === 13) {
		if ($("input").val !== "") {
			$("ul").append(
				"<li><span><i class='fas fa-trash'></i></span> "
				+$("input").val()
				+"</li>"
				);
			$("input").val("");
		}
	}
});

$(".fa-pencil-alt").click(function() {
	$("input").fadeToggle(200);
});