function numbers(){
    var days=[Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday];

    var months=[January, February, March, April, May, June, July, August, September, October, November, December];
    var males=[Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi,  Kwame];
    
    var females=[Akosua, Adwoa, Abenaa, Akua, Yaa, Afua, Ama];
    var dd=parseInt(document.getElementById["day"]).value;
var mm=parseInt(document.getElementById["month"]).value;
var yy=parseInt(document.getElementById["year"]).value;
var cc=((yy-1)/100+1);
var result= ((((cc/4) -2*cc-1) +((5*yy/4)) + ((26*(mm+1)/10)) +dd) %7);
console.log(dd/mm/yy);
document.write("result").getElementById.HTML=Math.round(result);
}