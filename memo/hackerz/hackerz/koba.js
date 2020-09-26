
function screenSize() {
    var w = window.innerWidth;
    var h = window.innerHeight;

    document.getElementById("width").innerHTML = w;
    document.getElementById("height").innerHTML = h;
}

window.onload = screenSize;