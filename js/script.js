let progressValue = 1;
function progressBarValue (value) {
	progressValue = progressValue + value;
	if ( progressValue > 100 ) progressValue = 100;
	const valueEnd = progressValue + '%';
	$('.progress-bar-value').text(valueEnd);
	return valueEnd;
}
$('.btn-1').click(function(){
	$('.progress-bar').css('width', progressBarValue(1));
});
$('.btn-3').click(function(){
	$('.progress-bar').css('width', progressBarValue(3));
});
$('.btn-7').click(function(){
	$('.progress-bar').css('width', progressBarValue(7));
});