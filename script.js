function numbers(){
    var Days=[Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday];

    var Months=[January, February, March, April, May, June, July, August, September, October, November, December];
    var Males=[Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi,  Kwame];
    
    var Females=[Akosua, Adwoa, Abenaa, Akua, Yaa, Afua, Ama];
    var dd=parseInt(document.getElementById("Day").value);
    var mm=parseInt(document.getElementById["Month"]).value;
    var yy=parseInt(document.getElementById["Year"]).value;
    var gg=parseInt(document.getElementById["Gender"]).value;
    var cc=Math.round((yy-1)/100+1);
    var result=Math.round((((cc/4) -2*cc-1) +((5*yy/4)) + ((26*(mm+1)/10)) +dd) %7);
    console.log(dd);
document.getElementById("result").getElementById.HTML=Math.round(result);
}
console.log(day);
if(day==0 && gg=="Female") {
    alert("Your birthday is in sunday and your name is Akosua");
}else if(day==1 && gg=="Female"){
    alert("Your birthday is in monday and your name is Adwoa");
}else if(day==2 && gg=="Female") {
    alert("Your birthday is in Tuesday and your name is Abenaa");
}else if(day==3 && gg=="Female") {

}