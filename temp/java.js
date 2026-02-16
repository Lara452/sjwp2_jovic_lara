function fromCelsius() {
    let c = parseFloat(document.getElementById("celsius").value);

    document.getElementById("fahrenheit").value = (c * 9/5 + 32).toFixed(2);
    document.getElementById("kelvin").value = (c + 273.15).toFixed(2);
}

function fromFahrenheit() {
    let f = parseFloat(document.getElementById("fahrenheit").value);

    document.getElementById("celsius").value = ((f - 32) * 5/9).toFixed(2);
    document.getElementById("kelvin").value = (((f - 32) * 5/9) + 273.15).toFixed(2);
}

function fromKelvin() {
    let k = parseFloat(document.getElementById("kelvin").value);

    document.getElementById("celsius").value = (k - 273.15).toFixed(2);
    document.getElementById("fahrenheit").value = ((k - 273.15) * 9/5 + 32).toFixed(2);
}

