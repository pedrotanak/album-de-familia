var img=["download (3).jpeg",
"download (4).jpeg",
"download (5).jpeg",
"download (6).jpeg",
"images.jpeg"];
var nome=["Minha familia",
"Pai",
"Mae",
"Irmao",
"Eu"];
var indice=0;
function proximo(){
    if(indice>4){
        indice=0;
    }
    document.getElementById("imagens").src=img[indice];
    document.getElementById("album").innerHTML=nome[indice];
    indice++;
}