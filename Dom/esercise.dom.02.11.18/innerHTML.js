//   var select = document.createElement("select");

//   for (i = 0; i < arrStr.length; i++) {
//     var option = document.createElement("option");
//     var text = document.createTextNode(arrStr[i]);

//     option.appendChild(text);
//     select.appendChild(option);
//   }

//   dom.appendChild(select);
// }

// dropDown(["prvi", "drugi", "treci"], document.querySelector("div"));
// dropDown(
//   ["treci", "cetvrti", "peti"],
//   document.querySelector("div:last-of-type")
// );

function dropDown(options, dom) {
  for (var j = 0; j < dom.length; j++) {
    var select = document.createElement("select");
    for (var i = 0; i < options.length; i++) {
      var option = document.createElement("option");
      var text = document.createTextNode(options[i]);

      option.appendChild(text);
      select.appendChild(option);
    }
    var elem = dom[j].appendChild(select);
  }
}

// dropDown(
//   ["rados", "stefan", "python"],
//   document.querySelector("div").nextElementSibling
// );
dropDown(
  ["serdarevic", "bulatovic", "vilic"],
  document.querySelectorAll("div")
);
