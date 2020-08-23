let mName = ['Kwasi' , 'Kwadwo' , 'Kwabena' , 'Kwaku' , 'Yaw' , 'Kofi' , 'Kwame'];
let fName = ['Akousa' , 'Adwoa' , 'Abenaa' , 'Akua' , 'Yaa' , 'Afua' , 'Ama'];
let days = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];

var year, month, date, cc, yy, day, result;

year = prompt("Birth year: ")
month = parseInt(prompt("Birth month: "))
date = parseInt(prompt("Birth date: "))
cc = parseInt(year.charAt(0) + year.charAt(1))
yy = parseInt(year.charAt(2) + year.charAt(3))
result = findDay()

function findDay() {
    day =  ( ( ( (cc/4) -(2*cc)-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + date ) % 7 );
    return Math.floor(day);
    if (day < 0 ){
        day = day * -1;
    }
    else if (day > 0){
        return day;
    } 
}

function genderCheck(){
    var gender = parseInt(prompt("Type 0 if you are male and 1 if you are female: "))
    if (gender = 0 ){
        var gen = "male"
    }
    else if (gender = 1 ){
        var gen = "female"
    }
    else {
        console.log("pass")
    }
}
