function move(event) {

    var y = event.clientY;
    var x = event.clientX;


    var player = document.querySelector("#player");


    player.style.top = (y-75) + "px";
    player.style.left = (x-75) + "px";
    player.style.backgroundColor = "#ff0000"

}

var $body = document.querySelector('body');
$body.addEventListener('click', move)
//ne treba zagradice da se pozove funkcija,jer mi klikom pozivamo tu funkciju

var button = document.querySelector('button');
button.onclick = function(){
    $body.removeEventListener("click",move);
}