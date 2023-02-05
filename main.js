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


