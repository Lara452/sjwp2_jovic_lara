function igraj(igrac) {
    const opcije = ["kamen", "škare", "papir"];
    const racunalo = opcije[Math.floor(Math.random() * 3)];

    let ishod = "";

    if (igrac === racunalo) {
        ishod = "Neriješeno ";
    } else if (
        (igrac === "kamen" && racunalo === "škare") ||
        (igrac === "škare" && racunalo === "papir") ||
        (igrac === "papir" && racunalo === "kamen")
    ) {
        ishod = "Pobijedio si! ";
    } else {
        ishod = "Izgubio si ";
    }

    document.getElementById("rezultat").innerHTML =
        `Ti: <b>${igrac}</b><br>
         Računalo: <b>${racunalo}</b><br><br>
         ${ishod}`;
}
