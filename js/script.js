let var1 = 'val1';
let var2 = 'val2';
let var3 = 'val3';
let var4 = 'val4';
let var5 = 'val5';
let var6 = 'val6';
let speach = 'speach';
$('.replace').click(function() {
	var1 = $('#var1').val();
	var2 = $('#var2').val();
	var3 = $('#var3').val();
	var4 = $('#var4').val();
	var5 = $('#var5').val();
	var6 = $('#var6').val();
	speach = $('#speach').val();
});
$('.create').click(function() {
	$('.text').remove();
	const card = `
	<div class="text">
		<div>Жили-были ${var1} да ${var2}</div>
		<div>Была у них ${var3}</div>
		<div>Снесла ${var3} ${var4}, не простое - золотое</div>
		<div>- ${var1} бил, бил - не разбил</div>
		<div>- ${var2} била, била - не разбила</div>
		<div>${var5} бежала, ${var6} задела, ${var4} упало и разбилось.</div>
		<div>${var1} плачет, ${var2} плачет, а ${var3} кудахчет:</div>
		<div>${speach}</div>
	</div>
	`;
	$(card).appendTo(document.body);
});