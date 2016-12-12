var randomNumber = Math.round(Math.random() * 100);
var yourNumber;
while (yourNumber !== randomNumber) {
  yourNumber = parseInt(prompt("Please enter the nuber from 0 to 100 =) "));
  
  if (yourNumber < 0 || yourNumber > 100) {
    alert("Your number must be in diapazon from 0 to 100, try it again !!! ");
  }
  
  else if (yourNumber < randomNumber) {
    alert("Our number is higher, try again");
  }
  else if (yourNumber > randomNumber) {
    alert("Our number is lower, try again");
  }
  else if (yourNumber == randomNumber) {
    alert("You are right, the number is " + randomNumber);
  }
  else {
    break;
  }
}

document.write(randomNumber);