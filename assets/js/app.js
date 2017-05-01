var texto=document.getElementsByClassName("aleatorio")[0];
var numeros=[0,1,2,3,4,5,6,7,8,9,"'",];
var letras=["a","b","c","d","e","f"];
var numer="";

for(var i=0;i<7;i++){
  var div=document.createElement("div");
  div.setAttribute("class","caracter"+i);
  var random=parseInt(Math.random()*10);
  div.style.line=i+5;
  div.innerHTML=random;
  texto.appendChild(div);

}
