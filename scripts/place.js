// footer dynamico
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified || new Date().toLocaleString();

// estatic weather values (según el enunciado deben ser estáticos ahora)
const temp = 10; // °C
const wind = 5;  // km/h

document.getElementById('temp').textContent = temp;
document.getElementById('wind').textContent = wind;

// Function must be ONE line and only called if conditions are met.
// Fórmula de wind chill (Celsius, V en km/h):
const calculateWindChill = (t, s) => (13.12 + 0.6215*t - 11.37*Math.pow(s,0.16) + 0.3965*t*Math.pow(s,0.16)).toFixed(1);

let wc = "N/A";
if (temp <= 10 && wind > 4.8) {
  wc = calculateWindChill(temp, wind) + ' °C';
}
document.getElementById('windchill').textContent = wc;