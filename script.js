// connect "Enter" button with "myFunction" myFunction
document.getElementById('enter').addEventListener('click',myFunction)

function myFunction () {
  // get age and convert to integer
  age = document.getElementById('age').Value
  age = parseInt(age)

  // check if age is more than 12
  if ((day == "Tuesday" || day == "Thursday")|| (age > 12 && age < 21)) {
   document.getElementById('answer').innerHTML = 'You can get student pricing'
    
  } else {
    document.getElementById('answer').innerHTML = 'You cannot get student pricing'
   
  }
}