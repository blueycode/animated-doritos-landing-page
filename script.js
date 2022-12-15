const minus = document.querySelector("#minus");
const qtdy = document.querySelector("#qtdy");
const plus = document.querySelector("#plus");

minus.addEventListener("click", () => {
    if (parseInt(qtdy.value) <= 1) return;
     
    qtdy.value = parseInt(qtdy.value) - 1;
});

plus.addEventListener("click", () => {
    qtdy.value = parseInt(qtdy.value) + 1;
});