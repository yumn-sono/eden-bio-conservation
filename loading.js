const progress = document.getElementById("progress");
const percent = document.getElementById("percent");

const logs = document.querySelectorAll(".log div");

const text = [
"職員ID照合 ............. COMPLETE ✓",
"パスワード照合 ......... COMPLETE ✓",
"顔情報認証 ............. COMPLETE ✓",
"虹彩情報認証 ........... COMPLETE ✓",
"生体情報認証 ........... COMPLETE ✓"
];

let value = 0;
let stage = 0;

const timer = setInterval(()=>{

    value += 2;

    progress.style.width = value + "%";
    percent.textContent = value + "%";

    if(value===20){
        logs[0].textContent=text[0];
    }

    if(value===40){
        logs[1].textContent=text[1];
    }

    if(value===60){
        logs[2].textContent=text[2];
    }

    if(value===80){
        logs[3].textContent=text[3];
    }

    if(value===100){

        logs[4].textContent=text[4];

        clearInterval(timer);

        setTimeout(()=>{

            window.location.href="home.html";

        },1500);

    }

},80);
