const accessButton = document.getElementById("accessButton");
const loginArea = document.getElementById("loginArea");

accessButton.addEventListener("click", () => {

    accessButton.style.display = "none";

    loginArea.classList.remove("hidden");

});

const logs = [

"Lucile accessed Director Terminal.",
"Noct entered Medical Wing.",
"Mirei synchronized research database.",
"Creature feeding completed.",
"Security patrol initiated.",
"Containment inspection completed.",
"Archive updated.",
"Research data uploaded.",
"Emergency drill completed.",
"Specimen transfer completed.",
"North Gate security verified.",
"Laboratory monitoring started."

];

const logBox = document.getElementById("log");

function addLog(){

    const now = new Date();

    const time = now.toLocaleTimeString("en-GB");

    const message = logs[Math.floor(Math.random() * logs.length)];

    const entry = document.createElement("div");

    entry.innerHTML =
        "<strong>" +
        time +
        "</strong><br>" +
        message +
        "<br><br>";

    logBox.prepend(entry);

    while(logBox.children.length > 8){

        logBox.removeChild(logBox.lastChild);

    }

}

for(let i = 0; i < 5; i++){

    addLog();

}

setInterval(addLog,3000);
