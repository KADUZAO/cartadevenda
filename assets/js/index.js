let circles = document.querySelectorAll(".circlelist");
let maximum = circles.length;

function animeBall() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    circles.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add("select");
        } else {
            element.classList.remove("select");
        }
    })
}

animeBall();

if(maximum) {
    window.addEventListener('scroll', function() {
        animeBall();
    })
}