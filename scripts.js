function main_cal() {
    /*
    at first take date input from user & store it in a variable
    turn it into a date function
    and use get date, get month, get full year, get day
    and store them into variables
    */
    var birth_date = new Date(document.getElementById("ager_age").value);
    var birth_date_date = birth_date.getDate();
    var birth_date_month = birth_date.getMonth();
    var birth_date_year = birth_date.getFullYear();
    var birth_date_day = birth_date.getDay();
    /* 
    same way
    just take another date input from user ;)
    that's easy ;)
    */
    var now_age = new Date(document.getElementById("now_age").value);
    var now_age_date = now_age.getDate();
    var now_age_month = now_age.getMonth();
    var now_age_year = now_age.getFullYear();
    /* 
    You can check it by console.log();
    console.log(now_age_day);
    console.log(now_age_month);
    console.log(now_age_year);
    */
    /*
    Don't Cry.
    That's Easy.
    Update all B-)
    */
    //update date & month
    if (now_age_date < birth_date_date) {
       if (birth_date_month==0||birth_date_month==2||birth_date_month==4||birth_date_month==6||birth_date_month==7||birth_date_month==9||birth_date_month==11) {
           now_age_date+=31;
       } else if (birth_date_month==3||birth_date_month==5||birth_date_month==8||birth_date_month==10) {
           now_age_date+=30;
       } else if (birth_date_month%4==0 && birth_date_month==1) {
           now_age_date+=29;
       } else if (birth_date_month%4!=0 && birth_date_month==1) {
           now_age_date+=28;
       }
       now_age_month-=1;
    }
    //update month & year
    if (now_age_month < birth_date_month) {
        now_age_month+=12;
        now_age_year-=1;
    }
    //to check the birth day
    switch (birth_date_day) {
        case 0:
            birth_date_day="Sunday"
            break;
        case 1:
            birth_date_day="Monday"
            break;
        case 2:
            birth_date_day="Tuesday"
            break;
        case 3:
            birth_date_day="Wednesday"
            break;
        case 4:
            birth_date_day="Thursday"
            break;
        case 5:
            birth_date_day="Friday"
            break;
        case 6:
            birth_date_day="Saturday"
            break;
        default:
            break;
    }
    var year = now_age_year - birth_date_year;
    var month = now_age_month - birth_date_month;
    var date = now_age_date - birth_date_date;
    var day = birth_date_day;
    year = year.toString();
    month = month.toString();
    date = date.toString();
    day = day.toString();

    if (year=="NaN"||month=="NaN"||date=="NaN"||day=="NaN") {
        window.alert(`আপনি জন্মান নাই 😒🤦‍♂️`);
        document.querySelector("#result").innerHTML = `আপনি জন্মান নাই 😒🤦‍♂️`;
    } else {
        document.querySelector("#result").innerHTML = `<p>You Born on ${day}.</p><p>Your age is: ${year} Year, ${month} Month, ${date} Day</p>`;
    }
}
