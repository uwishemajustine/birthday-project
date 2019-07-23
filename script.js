function birthday(){
    var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var dd=parseInt(document.getElementById("day").value);
  
    var mm=parseInt(document.getElementById("month").value);
  
    var yy=parseInt(document.getElementById("year").value);
    
    
    var cc=parseInt((yy-1)/100+1);
    var result=parseInt((((cc/4) -2*cc-1) +((5*yy/4)) + ((26*(mm+1)/10)) + dd) %7);


var gg=document.querySelector('input[name="gender"]:checked').value;
// console.log(dd,mm,yy,gg);
// alert(result);
if(dd<1 || dd>31) {
    alert("Your date is invalid!");

}else if(mm<1 || mm>12) {
    alert("Your month is invalid!");
}else if(dd<1 || dd>31 && mm<1 || mm>12 ) {
    alert("Your date and month are invalid!");
}else if(yy<1990|| yy>2019) {
    alert("Your date is invalid!")
}

if(dd==0 && gg=="Female") {
    document.getElementById("second").innerHTML="Your birthday is in sunday and your name is Akosua"; 
}else if(dd==1 && gg=="Female") {
    document.getElementById("second").innerHTML="Your birthday is in monday and your name is Adwoa";
}else if(dd==2 && gg=="Female") {
    document.getElementById("second").innerHTML="Your birthday is in Tuesday and your name is Abenaa";
}else if(dd==3 && gg=="Female") {
    document.getElementById("second").innerHTML="Your birthday is in wednesday and your name is Akua";

}else if(dd==4 && gg=="Female") {
    document.getElementById("second").innerHTML="Your birthday is in thursday and your name is Yaa";
}else if(dd==5 && gg=="Female") {
    document.getElementById("second").innerHTML="Your birthday is in friday and your name is Afua" ;  
}else if(dd==6 && gg=="Female") {
    document.getElementById("second").innerHTML="Your birthday is in saturday and your name is Ama";  
}

if(dd==0 && gg=="Male") {
    document.getElementById("second").innerHTML="Your birthday is in sunday and your name is Kwasi" ;
}else if(dd==1 && gg=="Male"){
    document.getElementById("second").innerHTML="Your birthday is in monday and your name is Kwadwo" ;
}else if(dd==2 && gg=="Male") {
    document.getElementById("second").innerHTML="Your birthday is in Tuesday and your name is Kwabena" ;
}else if(dd==3 && gg=="Male") {
    document.getElementById("second").innerHTML="Your birthday is in wednesday and your name is Kwaku";

}else if(dd==4 && gg=="Male") {
    document.getElementById("second").innerHTML="Your birthday is in thursday and your name is Yaw";
}else if(dd==5 && gg=="Male") {
    document.getElementById("second").innerHTML="Your birthday is in friday and your name is Kofi";  
}else if(dd==6 && gg=="Male") {
    document.getElementById("second").innerHTML="Your birthday is in saturday and your name is Kwame";  
}
else{
    
    document.getElementById("second").innerHTML=Math.round(result);
}
}



