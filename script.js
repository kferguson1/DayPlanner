$(document).ready(function() {
    const test = false;
    const now = moment().format('MMMM Do YYYY');

    let nowHour24 = moment().format('H');
    let nowHour12 = moment().format('h');
    
    if (test) {
        nowHour24 = 13;
        nowHour12 = 1;
    }

    let StoredPlans = JSON.parse(localStorage.getItem("Stored Plans"));
    if (test) { console.log(StoredPlans); }

    if (StoredPlans !==null) {
        planTextArr = StoredPlans;
    } else {
        planTextArr = new Array(9);
        planTextArr[4] = "Daily Meeting";
    }

    if (test) { console.log("full array of planned text", planTextArr); }
    let $plannerDiv = $('#plannercContainer');
    $plannerDiv.empty();

    if (test) {console.log("current time", nowHour12); }

})

for (let hour = 9; hour <= 17; hour++) {
    let index = hour - 9;
    

    let $rowDiv = $('<div>');
    $rowDiv.addClass('row');
    $rowDiv.addClass('plannerRow');
    $rowDiv.attr('hour-index',hour);
  

    let $col2TimeDiv = $('<div>');
    $col2TimeDiv.addClass('col-md-2');
  

    const $timeBoxSpn = $('<span>');
    $timeBoxSpn.attr('class','timeBox');
    
    let displayHour = 0;
    let ampm = "";
    if (hour > 12) { 
      displayHour = hour - 12;
      ampm = "pm";
    } else {
      displayHour = hour;
      ampm = "am";
    }
}