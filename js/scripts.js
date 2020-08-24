var year, month, date, cc, yy, weekday, day;
function getInput(){
    
    year = document.getElementById("year").value;
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);
    cc = parseInt(year.charAt(0) + year.charAt(1))
    yy = parseInt(year.charAt(2) + year.charAt(3))

    if(year == ""){
        alert("Enter valid year")
        return false;
    }else if (month <= 0 || month > 12){
        alert("Enter valid month")
        return false;
    }else if (date <= 0 || date > 31){
        alert("Enter valid date")
        return false;
    }
}

function calculateDay(){
    getInput();
    weekday = ( ( ( (cc/4) -(2*cc)-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + date ) % 7 );
    console.log(weekday);
    return (Math.floor(weekday));
}

function checkWeekday(){
    day = calculateDay();
    checkGender();
    console.log("The function runs");
}

let mName = ['Kwasi' , 'Kwadwo' , 'Kwabena' , 'Kwaku' , 'Yaw' , 'Kofi' , 'Kwame'];
let fName = ['Akousa' , 'Adwoa' , 'Abenaa' , 'Akua' , 'Yaa' , 'Afua' , 'Ama'];

function checkGender() {
  var gen = document.getElementsByName("rad");
  if(gen[0].checked == true) {
      var gender = "male";
  }else if(gen[1].checked == true) {
      var gender = "female";
  }else {
    console.log("Pass");
  }

    switch(gender){
        case gender = "male":
              switch(day){
                case (0 || -0):
                  document.getElementById("result").innerHTML = "You were born on a Sunday, your given akan name is " + mName[0];
                break;
                case (1 || -1):
                  document.getElementById("result").innerHTML = "You were born on a Monday, your given akan name is " + mName[1];
                break;
                case (2 || -2):
                  document.getElementById("result").innerHTML = "You were born on a Tuesday, your given akan name is " + mName[2];
                break;
                case (3 || -3):
                  document.getElementById("result").innerHTML = "You were born on a Wednesday, your given akan name is " + mName[3];
                break;
                case (4 || -4):
                  document.getElementById("result").innerHTML = "You were born on a Thursday, your given akan name is " + mName[4];
                break;
                case (5 || -5):
                  document.getElementById("result").innerHTML = "You were born on a Friday, your given akan name is " + mName[5];
                break;
                case (6 || -6):
                  document.getElementById("result").innerHTML = "You were born on a Saturday, your given akan name is "  + mName[6];
                break;
                default:

              }
        break;
        case gender = "female":
                switch(day){
                  case 0 || -0:
                    document.getElementById("result").innerHTML = "You were born on a Sunday, your given akan name is " + fName[0];
                  break;
                  case 1 || -1:
                    document.getElementById("result").innerHTML = "You were born on a Monday, your given akan name is " + fName[1];
                  break;
                  case 2 || -2:
                    document.getElementById("result").innerHTML = "You were born on a Tuesday, your given akan name is " + fName[2];
                  break;
                  case 3 || -3:
                    document.getElementById("result").innerHTML = "You were born on a Wednesday, your given akan name is " +  fName[3];
                  break;
                  case 4 || -4:
                    document.getElementById("result").innerHTML = "You were born on a Thursday, your given  akan name is " + fName[4];
                  break;
                  case 5 || -5:
                    document.getElementById("result").innerHTML = "You were born on a Friday, your given akan name is " +  fName[5];
                  break;
                  case 6 || -6:
                    document.getElementById("result").innerHTML = "You were born on a saturday, your given akan name is " + fName[6];
                  break;
              }
        break
        default:
        console.log("pass");
    }
}
