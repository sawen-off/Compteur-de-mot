function compteurMot(){
var mots = document.getElementById("textarea").value;
var nombre = 0;
var split = mots.split ('');
for (var i = 0; i <split.length; i++)
{
if (split[i] !="")
{
nombre += 1;
}
}
    document.getElementById("afficher").innerHTML = nombre;
}

function macopie1() {
    var copyText = document.getElementById("textarea");
    copyText.select();
    document.execCommand("Copy");
    alert("Le code est copié dans le presse papier");   
}