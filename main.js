function showMore () {
    var x = document.getElementById("about");

    if (x.style.visibility === 'hidden') {
        x.style.visibility = 'visible';
    }
    else {
        x.style.visibility = 'hidden';
    }
}