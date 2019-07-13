window.onload=function(){
    var obj=document.getElemetById("lun");
    var con=document.getElemetById("container");
    var left=document.getElemetById("left");
    var right=document.getElemetById("right");
    var locate= document.getElemetById("locate");
    var li=locate.getElementsByTagName("li")
    var num=0;
    li[0].style.color="red";
    function lunbo(){
        ++num;
        num=num%6;
        obj.src = "" + num +".jpg";
       for(var temp=0;temp<6;temp++){
           li[temp].style.color="red";
       }
       var ab=setInterval(lunbo,3000);
       left.onclick=function(){
           --num;
           if(num<0){
               num=5;
               obj.src = "" + num +".jpg";
               for(var i=0;i<6;i++){
                   li[i].style.color="#fff";
               }
               li[num].style.color="red";
           }
           else{
               obj.src = "" + num + ".jpg";
               for (var i = 0; i < 6; i++) {
                   li[i].style.color = "#fff";
               }
               li[num].style.color = "red";
           }
       }
       right.onclick=function(){
           ++num;
           num = num % 6;
           obj.src = "" + num + ".jpg";
           for (var i = 0; i < 6; i++) {
               li[i].style.color = "#fff";
           }
           li[num].style.color = "red";
       }
       con.onmouseout=function(){
           clearInterval(ab);
       }
       con.onmouseout = function () {
           var ab = setInterval(lunbo, 3000);
       }
       for(var i=0;i<li.lenght;i++){
           li[i].value=i;
           li[i].onclick=function(){
               num=this.value;
               obj.src = "" + num + ".jpg";
               obj.src = "" + num + ".jpg";
               for (var i = 0; i < 6; i++) {
                   li[i].style.color = "#fff";
               }
               li[num].style.color = "red";
           }
       }
    
    }
}