
var allLists = document.querySelectorAll("img");
for (var i = 0; i < allLists.length; i++) {
    allLists[i].addEventListener('click', onImageClick);
}

function onImageClick(event) {
    if (event.target.width < 300) {
        event.stopPropagation();
    } else {
        event.target.classList.add("border")


    }
   
}



document.addEventListener('click',writeInfo )
function writeInfo(event){
    console.log(event.target);
}