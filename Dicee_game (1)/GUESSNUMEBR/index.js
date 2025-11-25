

function randNumber() {
    return Math.floor((Math.random() * 100) + 1);
}

let random_Number = randNumber();
let pokušaji = 0;

let Input = document.getElementById("guess");
let Msg = document.getElementById("msg");
let Attempts = document.getElementById("attempts");

function updateAttempts() {
    Attempts.innerHTML = "Pokušaji: " + pokušaji;
}

updateAttempts();

function checkNumber(event) {
    event.preventDefault(); 
    let value = parseInt(Input.value);

    if (isNaN(value) || value < 1 || value > 100) {
        Msg.innerHTML = "Unesi broj između 1 i 100";
        Msg.style.color = "Crimson";
        return;
    }

    pokušaji++;
    updateAttempts();

    if (value === random_Number) {
        Msg.innerHTML = "Pogodak, broj je " + random_Number;
        Msg.style.color = "green";

    } else if (value < random_Number) {
        Msg.innerHTML = "Prenisko";
        Msg.style.color = "Orange";

    } else {
        Msg.innerHTML = "Previsoko";
        Msg.style.color = "Orange";
    }
}

function newGame() {
    random_Number = randNumber();
    pokušaji = 0;
    Input.value = "";
    Msg.innerHTML = "NOVA IGRA";
    Msg.style.color = "black";
    updateAttempts();
    Input.focus (); 
    
}
