function main_cal() {
    var birth_date = new Date(document.getElementById("ager_age").value);
    var birth_date_date = birth_date.getDate();
    var birth_date_month = birth_date.getMonth();
    var birth_date_year = birth_date.getFullYear();
    var birth_date_day = birth_date.getDay();
    /* console log diye check kore dekhsi tik kina? :) */
    // console.log(birth_date_day);
    // console.log(birth_date_month);
    // console.log(birth_date_year);
    var ekhon_age = new Date(document.getElementById("ekhon_age").value);
    var ekhon_age_date = ekhon_age.getDate();
    var ekhon_age_month = ekhon_age.getMonth();
    var ekhon_age_year = ekhon_age.getFullYear();
    /* console log diye check korsilam :) */
    // console.log(ekhon_age_day);
    // console.log(ekhon_age_month);
    // console.log(ekhon_age_year);
    
    /*
    Don't Cry.
    That's Easy.
    Update all B-)
    */
    if (ekhon_age_date < birth_date_date) {
       if (birth_date_month==0||birth_date_month==2||birth_date_month==4||birth_date_month==6||birth_date_month==7||birth_date_month==9||birth_date_month==11) {
           ekhon_age_date+=31;
       } else if (birth_date_month==3||birth_date_month==5||birth_date_month==8||birth_date_month==10) {
           ekhon_age_date+=30;
       } else if (birth_date_month%4==0 && birth_date_month==1) {
           ekhon_age_date+=29;
       } else if (birth_date_month%4!=0 && birth_date_month==1) {
           ekhon_age_date+=28;
       }
       ekhon_age_month-=1;
    }
    if (ekhon_age_month < birth_date_month) {
        ekhon_age_month+=12;
        ekhon_age_year-=1;
    }
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
    var year = ekhon_age_year - birth_date_year;
    var month = ekhon_age_month - birth_date_month;
    var date = ekhon_age_date - birth_date_date;
    var day = birth_date_day;
    document.querySelector("#result").innerHTML = `<p>You Born on ${day}.</p><p>Your age is: ${year} Year, ${month} Month, ${date} Day</p>`;
    // problem in comment
    // if (year==NaN||month==NaN||date==NaN||day==NaN) {
    //     document.querySelector("#result").innerHTML = `kisu nah`;
    // } else {
    //     document.querySelector("#result").innerHTML = `<p>You Born on ${day}.</p><p>Your age is: ${year} Year, ${month} Month, ${date} Day</p>`;
    // }
}