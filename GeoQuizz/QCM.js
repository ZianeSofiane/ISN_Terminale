function calcul() /* fonction qui calcule le nombre de point selon les bonnes réponses*/
{
   nombreDeQuestion=8; 
   nom=new Array(); /* tableau */
   nomLength=new Array(); /* récupère le nombre d'option disponible pour la question */
   point=0;
   for(n=0;n<=(nombreDeQuestion-1);n++) /* boucle, réitère l'operation pour chaque question */
   {
      nom[n]=document.getElementsByName("choix_rep_"+n); /* récuperation de la réponse */
      nomLength[n]=nom[n].length;
      for(q=0;q<=(nomLength[n]-1);q++) /* boucle, option de chaque question */
      {
        if(nom[n][q].checked==true) /* si la case est cochée avec n nombre numéro de la question et q numéro de l'option*/
        {point=point+eval(nom[n][q].value);} 
		/* incrément le nombre de point si la réponse est bonne. eval permet de considérer son paramètres comme des nombres et non en tant que chaîne de caractère */
	    
        
      }       
   }
   fini(point); /* appel la fonction pour le résultat final*/
}

var avis = Array(); /* tableau des avis */
avis[0]="Nul !";
avis[1]="Dommage !";	
avis[2]="Bof";
avis[3]="Aïe";
avis[4]="Moyen";
avis[5]="Correct.";
avis[6]="Bien !";
avis[7]="Excellent !!";
avis[8]="Parfait !!!";


function fini(point) /* affiche le résultat final */
{
var k = point; 
a = document.getElementById('resultat'); // récupère l'élément html où l'on affiche le résultat */
a.value =  point + "/8 : " + avis[k]; // modifie la valeur de l'élement 
} 