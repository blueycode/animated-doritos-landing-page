const minus = document.querySelector("#minus");
const qtdy = document.querySelector("#qtdy");
const plus = document.querySelector("#plus");
const flavorName = document.querySelector("#flavor-name");
const flavorDesc = document.querySelector("#flavor-desc");
const coolRanch = document.querySelector("#cool-ranch");
const sweetChilli = document.querySelector("#sweet-chilli");
const nachoCheese = document.querySelector("#nacho-cheese");

let currentImg = "nacho_cheese.webp";
let progress = 0;

// Buttons Animations
minus.addEventListener("click", () => {
    if (parseInt(qtdy.value) <= 1) return;

    qtdy.value = parseInt(qtdy.value) - 1;
});

plus.addEventListener("click", () => {
    qtdy.value = parseInt(qtdy.value) + 1;
});

// Pack Animations
const animation1 = anime.timeline({
    autoplay: false,
    update: function(anim) {
        progress = Math.round(anim.progress);
    },
    complete: function(anim) {
        progress = 0;
    }
});

// The animation has two sections. We will change the package at the end of the first part (when the package is out of bounds)
// We'll also prevent the user to click in another package before the first animation ends
animation1.add({
    targets: "#pack-img",
    translateX: -1200,
    rotate: "2deg",
    changeComplete: function(anim) {
        document.querySelector("#pack-img").src = "images/" + currentImg;
    }
}).add({
    targets: "#pack-img",
    translateX: 0,
    rotate: "-15deg"
});

coolRanch.addEventListener("click", () => {
    if (currentImg === "cool_ranch.webp" || progress > 0) return; 

    flavorName.innerText = "COOL RANCH";
    flavorDesc.innerText = "No seasoning has ever reigned down a cool factor quite like these zesty, crunchy tortilla chips.";
    currentImg = "cool_ranch.webp";

    animation1.play();
});

sweetChilli.addEventListener("click", () => {
    if (currentImg === "spicy_sweet_chili.webp" || progress > 0) return; 

    flavorName.innerText = "SWEET CHILLI";
    flavorDesc.innerText = "This isn’t just a chip. It’s fuel for disruption — our flavors ignite adventure and inspire action.";
    currentImg = "spicy_sweet_chili.webp";

    animation1.play();
});

nachoCheese.addEventListener("click", () => {
    if (currentImg === "nacho_cheese.webp" || progress > 0) return; 

    flavorName.innerText = "NACHO CHEESE";
    flavorDesc.innerText = "Savory nacho cheese meets crunchy tortilla chip in this crazy delicious snack. 110% awesome.";
    currentImg = "nacho_cheese.webp";

    animation1.play();
});