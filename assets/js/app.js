var texto=document.getElementsByClassName("aleatorio")[0];
var numeros=[0,1,2,3,4,5,6,7,8,9,"'","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numer="";
var actualizar=document.getElementsByClassName("icon-refresh")[0];
var confirmar=document.getElementsByClassName("icon-circle-check")[0];

function random(){
  for(var i=0;i<7;i++){

    var div=document.createElement("div");
    div.setAttribute("class","caracter"+i);
    var random= Math.floor(Math.random() * (numeros.length));
    console.log(random);
    div.style.line=i+5;
    div.innerHTML=numeros[random];
    texto.appendChild(div);

  };
}
random();
actualizar.addEventListener("click",function(){
  texto.innerHTML="";
  document.getElementById("textInput").value="";
  var rgb1= Math.floor(Math.random() * (255 + 1)) ;
  var rgb2= Math.floor(Math.random() * (255 + 1)) ;
  var rgb3= Math.floor(Math.random() * (255 + 1)) ;
  texto.style.color="rgb("+rgb1+"," +rgb2+"," +rgb3+")"
  random();


})
confirmar.addEventListener("click",function(){
  var aux=0;
  var textInput=document.getElementById("textInput").value;
    if(textInput.length==7){
      for(var j=0;j<7;j++){
        var element=document.getElementsByClassName("caracter"+j)[0].innerHTML;
          if(textInput[j]==element){
              aux++;
          }else{
                aux--;
                }
        }
        if(aux==7){
          alert("CORRECTO");
          }
        else{
          alert("Dato Incorrecto");
        }
      }
      else{
        alert("Ingresar la misma cantidad indicada");
      }

    })
