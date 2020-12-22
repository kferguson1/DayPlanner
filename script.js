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
function updateRowColor ($hourRow,hour) {
    if (test) { console.log("row color ", nowHour24, hour); }
    if (hour < nowHour24) {
        if (test) { console.log("lessThan"); }
      $hourRow.css("background-color","lightgrey")
    } else if ( hour > nowHour24) {
      if (test) { console.log("greaterthan"); }
      $hourRow.css("background-color","lightgreen")
    } else {
      if (test) { console.log("eqaul"); }
      $hourRow.css("background-color","tomato")
    }
    }
