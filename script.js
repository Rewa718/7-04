// connect "Enter" button with "myFunction" myFunction
document.getElementById('enter').addEventListener('click', myFunction)

function myFunction () {
  // get age and convert to integer
  const age = parseInt(document.getElementById('age').Value)
  const day = document.getElementById('day').value
  // check if age is more than 12
  if ((age < 12 || age > 21) && (day === 'Tuesday' || day === 'Thursday')) {
    alert('You can get student pricing')
  } else {
    alert ('You cannot get student pricing')
  }
}
