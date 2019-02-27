var avis = Array();
avis[0]="Parfait!!!";
avis[1]="Excellent !!";
avis[2]="Très bien !";
avis[3]="Bien joué.";
avis[4]="Bon!";
avis[5]="Correct";
avis[6]="Moyen";
avis[7]="Dommage !";	
avis[8]="Progressez !";
avis[9]="Limite !";
avis[10]="Pas de chance ";
avis[11]="Médiocre";
avis[12]="Bof";
avis[13]="Aïe aïe aïe";
avis[14]="Sans avis";
avis[15]="Sans avis";
avis[16]="Sans avis";
avis[17]="Ce jeu n'est pas por vous";
avis[18]="Nul";
avis[19]="Pathétique !";
avis[20]="Catastrophique";
avis[21]="Le score tend vers 0";
var numer=Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22);		 
var liste=Array("Alsace","Aquitaine","Auvergne","Bourgogne","Bretagne","Centre","Champagne Ardenne","Corse","Franche Comté","Ile de France","Languedoc Roussillon","Limousin","Lorraine","Midi Pyrénées","Nord Pas de Calais","Basse Normandie","Haute Normandie","Pays de Loire","Picardie","Poitou Charentes","Provence Alpes Côte d'Azur","Rhône Alpes");
var hasard= Array(); var alea=Array(); 

function param()
{
ord=0; oui=0; non=0; hasard= new Array(); alea=new Array();
for (i=1;i<=22;i++)
{a = document.getElementById('pp'+i); a.innerHTML ='';}
a = document.getElementById('non'); a.innerHTML ="Non : "+non ; 
a = document.getElementById('oui'); a.innerHTML ="Oui : "+oui ;
a = document.getElementById('jouer'); a.innerHTML ='';
a = document.getElementById('quel'); a.innerHTML ='';
a = document.getElementById('mode'); a.innerHTML ='';
a = document.getElementById('fenetre'); a.innerHTML ='Création de l\'ordre de présentation';
depalea();
setTimeout('active()',100);
}

function fini()
{
var k =22-oui;
a = document.getElementById('fenetre');
a.innerHTML =avis[k];
} 

function affiche()
{
if (ord==22){
	a = document.getElementById('jouer'); a.innerHTML ='<img src="rejouer.png" onclick="param()">';	
	fini();
	return;	
	}
bloc=0;
a = document.getElementById('fenetre'); a.innerHTML =liste[alea[ord]];
}

function active(){
for (i=1;i<=22;i++){
	a = document.getElementById('pp'+i);
	a.innerHTML ='<img src="'+i+'.png">';
	}
for (i=1;i<=22;i++){
	a = document.getElementById('zs'+i);
	a.innerHTML ='<img src="car.png" onclick="diredep('+i+')">';
	}
a = document.getElementById('jouer');
a.innerHTML ='';
affiche();
}

function diredep(n){ 
if (bloc==1){return;}
bloc=1;
x=n;
z= numer[alea[ord]];
	if (x==z){
		oui++;
		ord++;
		a = document.getElementById('oui'); a.innerHTML ="OUI : "+oui ; 
		setTimeout('vert()',300);
		return;
		}
		if (x!=z){
		non++;
		ord++; 
		a = document.getElementById('non'); a.innerHTML ="NON : "+non ;	
		setTimeout('montrele()',300);
 		} 
} 

function montrele(){
a = document.getElementById('vf'+z);
setTimeout('rouge()',300);
}

function rouge(){
a = document.getElementById('vf'+x); a.innerHTML ='';
a = document.getElementById('vf'+z); a.innerHTML ='';
a = document.getElementById('zs'+z); a.innerHTML ='';
a = document.getElementById('pp'+z); a.innerHTML ='<img src="'+z+'r.png">';
setTimeout('affiche()',300);
}

function vert(){ 
a = document.getElementById('zs'+x); a.innerHTML ='';
a = document.getElementById('vf'+x); a.innerHTML ='';
a = document.getElementById('pp'+x); a.innerHTML ='<img src="'+x+'v.png">';	
setTimeout('affiche()',300);
}

function depalea()
 {
var x = Math.floor(Math.random()*22);
var ok = true;
for(var j=0; j<hasard.length; j++) 
	if(x==hasard[j]) {ok = false;}
   	if(ok) {hasard[hasard.length] = x;}
	if(hasard.length<22) depalea();
 		else {
 		for (i=0;i<=21;i++){alea[i]=hasard[i];}		
 		}
}
