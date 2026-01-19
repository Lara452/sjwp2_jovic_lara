function convert() {
    let kg = document.getElementById("kgInput").value;

    if (kg === "" || kg < 0) {
        alert("Unesi ispravnu vrijednost!");
        return;
    }

    let pounds = kg * 2.20462;
    let ounces = kg * 35.274;
    let grams = kg * 1000;

    document.getElementById("pounds").innerText = pounds.toFixed(2);
    document.getElementById("ounces").innerText = ounces.toFixed(2);
    document.getElementById("grams").innerText = grams.toFixed(0);
}
