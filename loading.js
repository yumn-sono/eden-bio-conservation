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

// 認証項目更新
function updateLogs() {

    if (value >= 20) logs[0].textContent = text[0];
    if (value >= 40) logs[1].textContent = text[1];
    if (value >= 60) logs[2].textContent = text[2];
    if (value >= 80) logs[3].textContent = text[3];
    if (value >= 100) logs[4].textContent = text[4];

}

// プログレス更新
function updateBar() {

    progress.style.width = value + "%";
    percent.textContent = value + "%";

    updateLogs();

}

// メイン処理
function nextStep() {

    // 最初は高速
    if (value < 30) {
        value += 3;
        updateBar();
        setTimeout(nextStep, 40);
    }

    // 中盤
    else if (value < 80) {
        value += 2;
        updateBar();
        setTimeout(nextStep, 80);
    }

    // 終盤
    else if (value < 98) {
        value += 1;
        updateBar();
        setTimeout(nextStep, 160);
    }

    // 98%で停止
    else if (value === 98) {

        updateBar();

        // 最後の認証中メッセージ
        logs[4].textContent = "最終セキュリティ確認中……";

        setTimeout(() => {

            value = 100;
            updateBar();

            logs[4].textContent = "生体情報認証 ........... COMPLETE ✓";

            setTimeout(() => {

                window.location.href = "home.html";

            }, 700);

        }, 1200);

    }

}

nextStep();
