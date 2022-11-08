let countDownDate= new Date("Dec 31, 2022 23:59:59 ").getTime();
// console.log(countDownDate);
let counter=setInterval(()=>{
let dateNow= new Date().getTime();
let DateDiff=countDownDate - dateNow;
let days = Math.floor(DateDiff /1000 /60/60/24);
// console.log(days);
document.getElementById("days").innerHTML=days + "days" + ":";
let hours = Math.floor((DateDiff%(1000*60*60*24))/(1000 * 60 *60));
document.getElementById("hours").innerHTML=hours + "houres" + ":";
let minute = Math.floor(DateDiff%(1000 * 60 * 60)/(1000 * 60));
document.getElementById("minute").innerHTML=minute+ "minutes" + " :";
let second = Math.floor(DateDiff%(1000 * 60 )/(1000 ));
document.getElementById("seconds").innerHTML=second +"seconds";
if(DateDiff=0){
    clearInterval(counter);
    alert("happy new year")
}
},1000);