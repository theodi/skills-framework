function populateFramework(file) {
	d3.csv("config/" + file + ".csv", function(data) {
		split = data.Title.split(' ');
		topTitle = split[0];
		bottomTitle = split[1];
		if (split.length > 2) {
			topTitle = split[0];
			bottomTitle = "";
			for (i=1;i<split.length;i++) {
				console.log(topTitle);
				if (topTitle.length < 12 && (topTitle + " " + split[i]).length < 12) {
					topTitle += ' ' + split[i];
				} else {
					bottomTitle += ' ' + split[i];
				}
			}
			topTitle = topTitle.trim();
			bottomTitle = bottomTitle.trim();
		}
		$('#row_' + data.Row + ' > #column_' + data.Column).css('opacity',data['Hex opacity']);
		$('#row_' + data.Row + ' > #column_' + data.Column + ' > .hexagon').addClass(data.Area);
		$('#row_' + data.Row + ' > #column_' + data.Column + ' > .hexagon').append("<h4>" + topTitle + "<br/>" + bottomTitle + "</h4>");
		$('#row_' + data.Row + ' > #column_' + data.Column).prepend($('<img>',{src:'assets-white/' + data.Icon,alt:data.Title,style:data["Icon style"]}));

	});
}

$( document ).ready(function() {
	const urlParams = new URLSearchParams(window.location.search);
	const myParam = urlParams.get('framework');
	populateFramework(myParam);
});