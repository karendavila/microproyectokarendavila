window.addEventListener('load',function(){
    var img=[]
    img[0]="img/fb1.png";
    img[1]="img/fb2.jpeg";
    img[2]="img/ig.jpg";
    img[3]="img/pt1.png";
    img[4]="img/pt2.jpg";
 
    var n=0;
 
    function Slide(){
        document.slide.src = img[n];
 
        if(n<4){
            n++;
        }
        else{
            n=0;
        }
    }
    setInterval(Slide,3000);
 });

 document.getElementById("Enviar").onclick = function(){
    x=true
    x1=true
    x2=true
    const el1=document.getElementById("nombre").value;
    const el2=document.getElementById("correo").value;
    const el3=document.getElementById("mensaje").value;
    document.getElementById("nombre").value !== "" ? el1:x=false;
    document.getElementById("correo").value !== "" ? el2:x1=false;
    document.getElementById("mensaje").value !== "" ? el3:x2=false;
    x === true&& x1 === true && x2 === true ? alert("se ha enviado el mensaje"): alert("Introduzca los datos correctamente por favor")
    x === true&& x1 === true && x2 === true ? console.log(`Nombre: ${el1} correo: ${el2} mensaje:${el3}`): console.log("se introdujeron datos incorrectos");
}
