
function startAufg1(){
document.getElementById('aufg_name').innerHTML = '<h3 class="card-title">Speiseplan</h3>';
document.getElementById('aufg_container').innerHTML = '<h4 class="card-title"> Das haben Sie sich für heute gewünscht:</h4>';
document.getElementById('aufg_content').innerHTML = '<div class="table-responsive"><table class="table"><thead><tr><th scope="col">#</th><th scope="col">Vorspeise</th><th scope="col">Hauptspeise</th><th scope="col">Nachspeise</th></tr></thead><tbody><tr><th scope="row"></th><td id="vspeise">Table cell</td><td id="hspeise">Table cell</td> <td id=nspeise>Table cell</td></tr></tbody></table>';

document.getElementById('code_content').innerHTML = '<pre><code>var <var>vspeise</var> = prompt("Bitte geben Sie die gewünschte Vorspeise ein!");<br>var <var>hspeise</var> = prompt("Bitte geben Sie die gewünschte Hauptspeise ein!");<br>var <var>nspeise</var> = prompt("Bitte geben Sie die gewünschte Nachspeise ein!");<br><br>document.getElementById(&apos;<var>vspeise</var>&apos;).innerHTML = <var>vspeise</var>;<br>document.getElementById(&apos;<var>hspeise</var>&apos;).innerHTML = <var>hspeise</var>;<br>document.getElementById(&apos;<var>nspeise</var>&apos;).innerHTML = <var>nspeise</var>;</code></pre>';
	
	
	
	var vspeise = prompt("Bitte geben Sie die gewünschte Vorspeise ein!");
	var hspeise = prompt("Bitte geben Sie die gewünschte Hauptspeise ein!");
	var nspeise = prompt("Bitte geben Sie die gewünschte Nachspeise ein!");

	document.getElementById('vspeise').innerHTML = vspeise;
	document.getElementById('hspeise').innerHTML = hspeise;
	document.getElementById('nspeise').innerHTML = nspeise;
}


function startAufg2(){
	var hoehe = prompt(unescape("H%F6he des gew%FCnschten Bezugsvorschusses%3F"));
	var anzahl = prompt(unescape("Anzahl der gew%FCnschten R%FCckzahlungsraten%3F"));
	var rate = hoehe/anzahl;
document.getElementById('aufg_name').innerHTML = '<h3 class="card-title">R&uuml;ckzahlungsraten</h3>';
document.getElementById('aufg_container').innerHTML = '<h4 class="card-title">Ihre monatliche R&uuml;ckzahlungsrate betr&auml;gt:</h4>';
document.getElementById('aufg_content').innerHTML = '<h4 class="card-title">'+rate+' <i class="fas fa-euro-sign"></i></h4>';
document.getElementById('code_content').innerHTML = '<pre><code>var <var>hoehe</var> = prompt("H&ouml;he des gew&uuml;nschten Bezugsvorschusses?");<br>var <var>anzahl</var> = prompt("Anzahl der gew&uuml;nschten R&uuml;ckzahlungsraten?");<br><br>var <var>rate</var> = <var>hoehe</var>/<var>anzahl</var>;</code></pre>';

}

function startAufg3(){

	var z1 = prompt(unescape("Welche Zahl m%F6chten Sie dividieren%3F"));
	var z2;
	do{
		z2 = prompt("Durch welche Zahl möchten Sie divideren?");
	}
	while(Number(z2) == 0);
	

document.getElementById('aufg_name').innerHTML = '<h3 class="card-title">Dividieren</h3>';
document.getElementById('aufg_container').innerHTML = '<h4 class="card-title">Das Ergebnis von <i><u>'+z1+'</u></i> dividiert durch <i><u>'+z2+'</u></i> lautet:</h4>';
document.getElementById('aufg_content').innerHTML = '<h4 class="card-title">'+z1/z2+'</h4>';
	
document.getElementById('code_content').innerHTML = '<pre><code>var <var>z1</var> = prompt("Welche Zahl m&ouml;chten Sie dividieren?");<br>var <var>z2</var><br>do{<br><var>z2</var> = prompt("Durch welche Zahl m&ouml;ten Sie dividieren?");<br>while(Number(<var>z2</var>) == 0);<br><br>var <var>ergebnis</var> = <var>z1</var>/<var>z2</var></code></pre>';
	
}