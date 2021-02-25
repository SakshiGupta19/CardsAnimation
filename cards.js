function spreadCards() {
    var x = document.getElementById("container");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function openCards() {
    var y = document.getElementById("spread");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";

    }
}

function showImage1() {
    var x = document.getElementById("card1");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";

    }
}

function showImage2() {
    var x = document.getElementById("card2");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";

    }
}


$('#container').hover(function () {
    $(this).toggleClass('part2');
});
