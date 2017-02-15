var exampleInput  = ''+
'1;ime1;["param1","param2","param3"];1;problem1;3;["param1","param2"];'+
'{1;1;[-1,-1];00000;1;5;[3,3,3]}'+
'{2;1;[-1,-1];00000;1;3;[2,3,1]}'+
'{3;1;[-1,-1];00000;1;4;[6,1,5]}'+
'{4;1;[-1,-1];00000;1;2;[3,1,1]}'+
'{5;2;[1,3];00001;1;5;[6,6,7]}'+
'{6;2;[2,4];00001;1;3;[2,3,1]}';

$(document).ready(function(){
	$('#main').evoAnimate({
		source: exampleInput,
		sourceType: 'STRING',
		display: [1,2]
	});
});
