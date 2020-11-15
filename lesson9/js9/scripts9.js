/*Display the copyright year */
let date = new Date();
let currentyear = date.getFullYear();
/*let lastupdate = document.lastModified;
document.getElementById("lastupdate").innerHTML = lastupdate;*/
document.getElementById("year").innerHTML = currentyear;


/*Display the day of the week, month by name, and year*/

try {
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  document.getElementById('lastupdate').textContent = new Date().toLocaleDateString('en-US', options);
} catch (e) {
  alert('Error with code or your browser does not support Locale');
}

/*   -----------lesson 4 ----Display the responsive hamburger menu button ------------*/

function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


/*   lesson 5     ----  Saturday pancake banner -------- */

let show = new Date();

if (show.getDay() == 5) {
  document.getElementById("sat-pancakes").style.display = "block";
} else {
  document.getElementById("sat-pancakes").style.display = "none";
}

/* **************************** lesson 6 ************************************ */

function windChill() {
  let temp = parseFloat(document.getElementById("dailytemp").textContent);
  let mph = parseFloat(document.getElementById("dailyspeed").textContent);

  if (temp <= 50 && mph >= 3) {
    let f = 35.74 + (0.6215 * temp) - 35.75 * Math.pow(mph, 0.16) + 0.4275 * temp * Math.pow(mph, 0.16);
    let result = f.toFixed(0);
    document.getElementById("dailychill").innerHTML = result + '&#8457';
  } else {
    document.getElementById("dailychill").textContent = "N/A";
  }
}