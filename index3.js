var tall = Math.floor(Math.random() * 100); 
var forsok = 0; 

while (true) {
    var gjett = parseInt(prompt("Gjett et tall mellom 0 og 100:"));
    forsok++; 

    if (gjett === tall) {
        alert("Gratulerer! Du har gjettet riktig tall: " + tall + "\nAntall forsøk: " + forsok);
        break; 
    } else if (gjett < tall) {
        alert("Skriv et tall som er høyere.");
    } else {
        alert("Skriv et tall som er lavere.");
    }
}
