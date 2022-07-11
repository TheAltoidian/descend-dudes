// from Math import

var fall = ['Fall', 'Decline', 'Decrease', 'Dip', 'Drop', 'Plunge', 'Dive', 'Plummet', 'Tumble', 'Downward Slope', 'Nosedive', 'Topple', 'Collapse', 'Plunge', 'Slide', 'Move Downwards'];
var guys = ['Beings', 'Bodies', 'Characters', 'Creatures', 'Human Beings', 'Humans', 'Individuals', 'Mortals', 'Parties', 'People', 'Specimens', 'Things', 'Fellas', 'Dudes'];

let fallRand = function () {
    return Math.floor(Math.random() * (fall.length - 1))
};

let guysRand = function () {
    return Math.floor(Math.random() * (guys.length - 1))
};

document.getElementById("both").addEventListener("click", function (event) {
    document.getElementById("name-fall").textContent = fall[fallRand()];
    document.getElementById("name-guys").textContent = guys[guysRand()];
});

document.getElementById("fall").addEventListener("click", function (event) {
    document.getElementById("name-fall").textContent = fall[fallRand()];
});

document.getElementById("guys").addEventListener("click", function (event) {
    document.getElementById("name-guys").textContent = guys[guysRand()];
});