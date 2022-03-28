 function getAge(){
//   let date=document.getElementById("");
//   let day=document.getElementById("");
//   let month=document.getElementById("");
//
//
let inputDate = new Date(document.getElementById("input-date").value);
//console.log(inputDate);
let date=inputDate.getDate();
let month=inputDate.getMonth();
let year=inputDate.getFullYear();
//console.log(date,month,year);

// let currAge=new Date();
// let difference=now-inputDate;
// console.log(difference);
// let days=Math.round(difference/(1000*60*60*24));
// console.log(days);
// //let months=parseInt(difference/(2.628e+9));
//
// //let years=Math.round(months/12);
// let years=now.getFullYear()-year;
// //months=months-12*years;
// console.log(months);
// console.log(years);

  var currAge=new Date();
   var currMonth=currAge.getMonth();

   var currYear=currAge.getFullYear();
   var currDate=currAge.getDate()
  var ageYear=currYear-year;
  //console.log(ageYear);
  //get month
  if(currMonth>=month){
    var ageMonth=currMonth-month;
  }
  else{
    ageYear--;
var ageMonth=12+currMonth-month;
  }

  //console.log(ageMonth);

  if (currDate >= date)
     //get days when the current date is greater
     var dateAge = currDate - date;
   else {
     agemonth--;
     var dateAge = 31 + currDate - date;

     if (ageMonth < 0) {
       ageMonth = 11;
       ageYear--;

     }

   }
   //console.log(dateAge);
   if(inputDate>currAge){
     alert('Its a Future Date');
   }
   function displayResult(bDate,bMonth,bYear){
       document.getElementById("year").textContent = bYear;
       document.getElementById("month").textContent = bMonth;
       document.getElementById("day").textContent = bDate;
   }
   displayResult(dateAge,ageMonth,ageYear);
}
