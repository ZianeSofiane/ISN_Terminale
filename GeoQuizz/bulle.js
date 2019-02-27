var pays = Array("la Russie d'Europe","la Norvège","la Suède","le Royaume uni","la Roumanie","l'Allemagne","l'Espagne","la France","la Pologne","l'Ukraine","la Finlande","la Grèce","l'Islande","l'Italie","le Portugal","la Bielorussie","la République Tchèque","la Bulgarie","l'Irlande","la Hongrie","l'Estonie","la Lettonie","la Lithuanie","le Danemark","les Pays bas","la Slovaquie","la Moldavie","l'Autriche","la Suisse","la Serbie","la Bosnie Herzegovine","la Macédoine","l'Albanie","la Belgique","le Montenegro","la Croatie","la Slovénie","le Luxembourg","le Liechtenstein","la principauté de Saint Marin",
"la Principauté d'Andorre","le Vatican","la principauté de Monaco","Malte"); /*création de variable: Array permettant de rassembler plusieurs variables différencier par des chiffres ci-dessous, un tableau en quelques sortes */
var numer=Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44);	/*chiffres associés aux variables ci-dessus */

var avis = Array(); /*ensemble variable*/
avis[0]="Champion d'Europe !!!"; /*avis + [numéro], permettra la création d'une fonction pour afficher l'avis selon le score obtenu par le joueur */
avis[1]="La quasi perfection !!!"; 
avis[2]=" Bravo !";
avis[3]="Excellent !";
avis[4]="Très bon !";
avis[5]="Pas mal";
avis[6]="Bonnes connaissances.";
avis[7]="Correct.";
avis[8]="Presque correct !";
avis[9]="Il y a pire.";
avis[10]="Pas mal";
avis[11]="Dans les moins mauvais !";
avis[12]="Recommencez ";
avis[13]="C'est compliqué!";
avis[14]="Difficile";
avis[15]="Vous devriez voyager plus !";
avis[16]="Ah la géographie !";
avis[17]="Bof";
avis[18]="Manques !";
avis[19]="Bof bof";	
avis[20]="Vous l'avez fait exprès ?";
avis[21]="Nul";
avis[22]="Aïe";
avis[23]="Ca craint vraiment !";
avis[24]="Changez vite de jeu !";
avis[25]="Sans commentaire !";
avis[26]="La honte !";
avis[27]="C'est dur";
avis[28]="Changez vite de jeu !";
avis[29]="-6";
avis[30]="J'espère que vous avez honte.";
avis[31]="Eteignez vite cet ordinateur !";
avis[32]="Pas de chance";
avis[33]="Vous habitez la planète Mars ?";
avis[34]=" Problème de vue ?";
avis[35]="Aïe";
avis[36]="Catastrophe !";
avis[37]="Nul";
avis[38]="Nul";
avis[39]="Allez vite vous oxygéner le cerveau !";
avis[40]="Comme elle est loin l'école !";
avis[41]="Difficile ";
avis[42]="Ignorant !";
avis[43]="Plus mauvais que ça, n'existe pas";

var hasard = Array(); var compt; /*création de variables*/

function param(){	
ord=0; oui=0; non=0; compt=1; hasard = new Array(); /*création de variable*/
active();  /*déclenche la fonction active()*/
depalea(); /*déclenche la fonction depalea()*/
a = document.getElementById('oui'); a.innerHTML ='Oui : 0';	 /*insère dans la zone défini par "oui" , "Oui : 0" */
a = document.getElementById('non'); a.innerHTML ='Non : 0';	 /*insère dans la zone défini par "non" , "Non : 0" */
a = document.getElementById('fenet'); a.innerHTML ='Je place pays et noms des capitales'; /* insère dans la fenètre le message "Je place ..." */
for (i=1;i<=44;i++){ /*pour tout pays numéroté entre 1 et 44*/
	a = document.getElementById('pp'+i); /*zone pp vide */
	a.innerHTML ='';
	a = document.getElementById('np'+i); /*zone np vide*/
	a.innerHTML ='';
	a = document.getElementById('nc'+i); /*zone nc vide*/
	a.innerHTML ='';
	a = document.getElementById('pc'+i); /*zone pc vide*/
	a.innerHTML ='';
	}
for (i=38;i<=44;i++){ a = document.getElementById('rd'+i); a.innerHTML ='';}	/*zone rd vide*//*entre 38 et 44*/	
setTimeout('debut()',200); /*200millisecondes aprés, déclenche la fonction début()*/
} 

function debut(){	 		 
a = document.getElementById('jouer'); a.innerHTML ='';	/*remplace la zone du bouton jouer par un vide*/ 	
place(); /*déclenche la fonction place()*/	
}

function place(){
a = document.getElementById('pp'+compt); a.innerHTML ='<img src="'+compt+'pn.png">'; /*insère dans la zone pp les images (numéro)pn, soit les pays*/
a = document.getElementById('pc'+compt); a.innerHTML ='<img src="capb.png">';			/*insère points*/
a = document.getElementById('nc'+compt); a.innerHTML ='<img src="'+compt+'nc.png">'; /*insère dans la zone nc les images (numéro)nc, soit les capitales*/
setTimeout('tempo()',100); /*100millisecondes aprés, déclenche la fonction tempo()*/
}

function tempo(){
compt++; /*compt augmente de 1*/
if (compt==45){/*quand compt=45*/
	for (i=38;i<=44;i++){ a = document.getElementById('rd'+i); a.innerHTML ='<img src="rond.png">';}/*pour tout pays entre 38 et 44, rd+i prend rond*/
	affiche();return;} /*quand compt rond placer, déclenche fonction affiche */
place();/*retour à la fonction place, dc là compt sera égal à 2*/
}

function affiche(){
a = document.getElementById('fenet'); a.innerHTML ='Où se trouve '+pays[hasard[ord]]+' ?';	
}

function direpays(n){
x=n;
z= numer[hasard[ord]]; 
ord++; /*ord augmente de 1*/
	if (x==z){ /*si x=z*/
	oui++;/*oui augmente de 1*/
	pcent=Math.floor((oui/ord)*100); /*opération pourcentage*/
	a = document.getElementById('oui'); a.innerHTML ="OUI : "+oui ;	/*emplacement oui prend valeur: OUI: valeur var oui */
	a = document.getElementById('pct'); a.innerHTML =pcent+" %"; 
	if (x>37){a = document.getElementById('rd'+x); a.innerHTML ='<img src="rondv.png">';}
	setTimeout('continuer()',10); /*10millisecondes aprés, déclenche la fonction continuer() */
	return;
	} 
	if (x!=z){ /*si x diff de z*/
	non++;/*non augmente de 1*/
	pcent=Math.floor((oui/ord)*100);/*opération pourcentage*/
	a = document.getElementById('non'); a.innerHTML ="NON : "+non ;
	a = document.getElementById('pct'); a.innerHTML =pcent+" %";	
	setTimeout('continuer()',100); /*déclenche la fonction corrigé, se déroule 100millisecondes aprés la fonction corrige() */
 	}	
}

function continuer() {
if (x==z){	/*si x=z , soit si on clic sur bonne zone*/
	a = document.getElementById('pp'+x); a.innerHTML ='<img src="'+z+'pv.png">';	/*remplace pp(pays) par pv(pays vert) */
	a = document.getElementById('np'+x); a.innerHTML ='<img src="'+z+'np.png">';		
	a = document.getElementById('nc'+x); a.innerHTML ='';
	a = document.getElementById('cc'+x); a.innerHTML ='';
	a = document.getElementById('pc'+x); a.innerHTML ='';
  }
if (x!=z){	/*si x différent de z*/
	a = document.getElementById('pp'+z); a.innerHTML ='<img src="'+z+'pr.png">'; 	/*remplace pp(pays) par pr(pays rouge) */
	a = document.getElementById('np'+z); a.innerHTML ='<img src="'+z+'np.png">';	/*met à l'emplacement np, l'image correspondant(Nom pays) */
	a = document.getElementById('nc'+z); a.innerHTML =''; /*nc vide*/
	a = document.getElementById('cc'+z); a.innerHTML =''; /*cc vide*/
	a = document.getElementById('pc'+z); a.innerHTML =''; /*pc vide*/
	if (z>37){a = document.getElementById('rd'+z); a.innerHTML ='<img src="rondr.png">';}	/*remplace le rond par un rond vert*/
	}
if (ord==44){resultat();return;}
if (ord<44){affiche();}
}

function resultat() {
a = document.getElementById('fenet'); a.innerHTML ='TERMINE. '+pcent+' %   '+avis[44-oui]; /*remplace la valeur dans la fenètre par Terminé + le résultat en pourcentage + avis */
setTimeout('encore()',1500); /*déclenche la fonction encore, se déroule 15 000 millisecondes, soit 1,5 seconde aprés */		
}

function encore() {
a = document.getElementById('jouer'); a.innerHTML ='<img src="rejouer.png" onclick="param()" >'; /*remplace l'image jouer par celle de rejouer */
}

function active(){	 	
for (i=2;i<=13;i++){ //pour i allant de 2 à 13, i++ incrémenter de 1
	a = document.getElementById('cc'+i); a.innerHTML ='<img src="car2.png" onclick="direpays('+i+')">'; /*car2 pour les pays de 2 à 13 compris*//*déclenche la fonction direpays en cliquant dessus*/
	}
for (i=14;i<=20;i++){
	a = document.getElementById('cc'+i); a.innerHTML ='<img src="car3.png" onclick="direpays('+i+')">'; /*car3 pour les pays de 14 à 20 compris*/
	}	
for (i=21;i<=26;i++){
	a = document.getElementById('cc'+i); a.innerHTML ='<img src="car4.png" onclick="direpays('+i+')">'; /*21 à 26, car4*/
	}	
for (i=27;i<=34;i++){
	a = document.getElementById('cc'+i); a.innerHTML ='<img src="car5.png" onclick="direpays('+i+')">'; /*27 à 34, car5*/
	}
for (i=35;i<=44;i++){
	a = document.getElementById('cc'+i); a.innerHTML ='<img src="car6.png" onclick="direpays('+i+')">'; /*35 à 44, car6*/
	} 	
a = document.getElementById('cc1'); a.innerHTML ='<img src="car1.png" onclick="direpays('+1+')">'; /*1, car1*/
a = document.getElementById('cc45'); a.innerHTML ='<img src="car7.png" onclick="direpays('+14+')">';/*14, car7*/
a = document.getElementById('cc46'); a.innerHTML ='<img src="car6.png" onclick="direpays('+36+')">';/*46, car6*/
bloc=0;			
}

function depalea() { // Fonction permettant d'afficher un pays aléatoirement sans afficher plusieurs fois les mêmes
var x = Math.floor(Math.random()*44); /*Math.floor(arrondi à l'entier le plus proche),Math.random() renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1]*/
var ok = true; /*Tant que ok est vraie, la fonction continue*/

for(var j=0; j<hasard.length; j++) /*pour j entre 0 et hasard.length(le nombre d'éléments de hasard)*/
	if(x==hasard[j]) { /* Teste si la valeur de la case j du tableau hasard contient la valeur x*/
		ok = false; /*Quand ok est faux, fonct s'arrête, faux quand toute les valeurs de hasard sont remplis, cad une fois que le tableau = 44, donc plus de cases dispo*/
	} 
   	if(ok) { /* Si la case ne contenait rien ou une autre valeur que x */
		hasard[hasard.length] = x; /* On ajoute une case au tableau (en utilisant la taille maximale actuelle) et on y affecte la valeur x */
	}
	
	if(hasard.length<44) { /* Si la taille du tableau est inférieur à 44, la fonction se réappelle récursivement (elle même) */
		depalea(); 
	} 
}