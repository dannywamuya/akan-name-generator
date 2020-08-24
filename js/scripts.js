let mName = ['Kwasi' , 'Kwadwo' , 'Kwabena' , 'Kwaku' , 'Yaw' , 'Kofi' , 'Kwame'];
let fName = ['Akousa' , 'Adwoa' , 'Abenaa' , 'Akua' , 'Yaa' , 'Afua' , 'Ama'];
let days = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];

var year, month, date, cc, yy, day, result;

function getInput(){
    year = document.getElementById("year").innerHTML;
    month = parseInt(document.getElementById("month")).innerHTML;
    date = parseInt(document.getElementById("date")).innerHTML;
    cc = parseInt(year.charAt(0) + year.charAt(1))
    yy = parseInt(year.charAt(2) + year.charAt(3))
    result = findDay()

    if(year == "" && year > 2020 ){
        alert("Enter valid year")
        return false;
    }else if (month == "" && month <= 0 && month > 12){
        alert("Enter valid month")
        return false;
    }else if (day == "" && date <= 0 && date > 31){
        alert("Enter valid date")
        return false;
    }
}

function findDay() {
    day =  ( ( ( (cc/4) -(2*cc)-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + date ) % 7 );
    return Math.floor(day);
}

var maleGender, femaleGender;

function genderCheck(){
    var maleGender = document.getElementById("male").checked;
    var femaleGender = document.getElementById("female").checked;
    if(maleGender == false && femaleGender == false){
        alert("Please select an option");
    }else if(maleGender == true){
        document.write("You were born on a " + days[day] + "and your Akan name is " + mName[day] + ".");
    }else if(femaleGender == true){
        document.write("You were born on a " + days[day] + "and your Akan name is " + fName[day] + ".");
    }
}