$(function () {
    var $player = $('#player');

    function move(event) {
        const y = event.clientY;
        const x = event.clientX;

        $player.css({ "top": (y - 75) + "px" })
        $player.css({ "left": (x - 75) + "px" })


        //ovako se stilizuje nod
        // $player.style.top = (y - 75) + "px";
        // $player.style.left = (x - 75) + "px";
        // $player.style.backgroundColor = "#ff0000"

    }

    $('body').on('click', move);


    //ne treba zagradice da se pozove funkcija,jer mi klikom pozivamo tu funkciju
    $('button').on("click", function () {
        $('body').off();
    });

})