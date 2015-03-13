$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['welcome', 'ministries','team', 'us','contact','location'],
		sectionsColor: ['#E2E1DC', '#A3B539', '#ffd454','#312112'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['welcome', 'ministries','servant team', 'about us','contact us','locate us']
	});
});