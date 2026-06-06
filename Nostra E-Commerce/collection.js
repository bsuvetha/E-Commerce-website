var pc = document.getElementById("products");
var se = document.getElementById("search");
var pdl = pc.querySelectorAll(".products-box");

se.addEventListener("keyup", function(event) {

    var entervalue = event.target.value.toUpperCase();

    for (var count = 0; count < pdl.length; count++) {

        var pname = pdl[count].querySelector("p").textContent;

        if (pname.toUpperCase().indexOf(entervalue) < 0) {
            pdl[count].style.display = "none";
        } else {
            pdl[count].style.display = "block";
        }
    }
});