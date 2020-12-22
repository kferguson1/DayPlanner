$(document).ready(function() {
    const test = false;
    const now = moment().format('MMMM Do YYYY');

    let nowHour24 = moment().format('H');
    let nowHour12 = moment().format('h');
    
    if (test) {
        nowHour24 = 13;
        nowHour12 = 1;
    }
})