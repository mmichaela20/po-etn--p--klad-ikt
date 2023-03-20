var Krychle = document.createElement("div");
Krychle.setAttribute("id", "kontejner");
document.body.appendChild(Krychle);

document.write("Výpočet objemu krychle")
document.write("<br></br>")

document.write("Tvoje hodnota a:")
document.write("<br></br>")


var delkastranyLabel = document.createElement("label");
delkastranyLabel.setAttribute("for", "polomer");
delkastranyLabel.innerHTML = "Délka strany a (mm):";
krychle.appendChild(delkastranyLabel);

var polomerInput = document.createElement("input");
polomerInput.setAttribute("type", "number");
polomerInput.setAttribute("id", "polomer");
Krychle.appendChild(polomerInput);


var tlacitko = document.createElement("button");
tlacitko.innerHTML = "Spočítej objem";
tlacitko.onclick = vypocet;
Krychle.appendChild(tlacitko);


var vysledekKrychle = document.createElement("div");
vysledekKrychle.setAttribute("id", "vysledek");
kontejner.appendChild(vysledekKontejner);


function vypocet() {
  var polomer = parseFloat(polomerInput.value);
  var vyska = parseFloat(vyskaInput.value);
  var objem = Math.PI * Math.pow(polomer, 2) * vyska;
  vysledekKontejner.innerHTML = "<br> Objem válce v mm^3 je " + objem.toFixed(2);}

