var string = "Welcome! I'm Nick. This is my portfolio.";
var welcome = string.split("");
var el = document.getElementById('welcome');
(function animate() {
    if(welcome.length>0) {
        el.innerHTML += welcome.shift();
    } else {
        el.innerHTML = ""
        welcome = string.split("")
    } 
var running = setTimeout(animate, 100);
})();