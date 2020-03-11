
//'mouseover'
const venice = document.querySelector('.img-fluid')
venice.addEventListener('mouseover', event => {
    // console.log("mic check");
    venice.style.transform = 'rotate(20deg)';
    venice.style.transitionDuration = '1s';
})

//'keydown' w/ bonus 'keyup'
document.addEventListener('keydown', (event) => {
    document.body.style.backgroundColor = 'peachpuff';
})
document.addEventListener('keyup', (event) => {
    document.body.style.backgroundColor = 'lightgray';
})

//'wheel'
let angle = 0;
function twist(event) {
    event.preventDefault();

    angle += event.deltaY;
    /*"deltaY", optional and defaulting to 0.0, is a double representing the vertical scroll amount in the deltaMode unit.*/

    // Apply scale transform
    venice.style.transform = `rotate(${angle})`;
    // map.style.transitionDuration = '0.5s';
}
venice.addEventListener('wheel', twist);

//'drag / drop'
var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function (event) {

});

document.addEventListener("dragstart", function (event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
});

document.addEventListener("dragend", function (event) {
    // reset the transparency
    event.target.style.opacity = "";
});

/* events fired on the drop targets */
document.addEventListener("dragover", function (event) {
    // prevent default to allow drop
    event.preventDefault();
});

document.addEventListener("dragenter", function (event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "dropzone") {
        event.target.style.background = "purple";
    }

});

document.addEventListener("dragleave", function (event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "dropzone") {
        event.target.style.background = "";
    }

});

document.addEventListener("drop", function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "dropzone") {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
        //get rid of bulls-eye
        document.querySelector('.fa-bullseye').style.display = 'none';
    }
});
//////////////End Drag Stuff

//'load'
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

//'focus' - note: does not bubble
const focusLink = document.querySelector('a.nav-link:nth-child(3)')
focusLink.addEventListener('focus', event => {
    focusLink.style.backgroundColor = 'red';
    focusLink.textContent = 'Focus';
})
// focusLink.addEventListener('blur', event => {
//     focusLink.style.backgroundColor = 'green';
//     focusLink.textContent = 'Blur';
// }) <--save blur for when leaving a text field!

//'resize'
window.addEventListener('resize', (event) => {
    document.querySelector('header').style.backgroundColor = 'purple';
})

//'scroll'
const map = document.querySelector('div.img-content:nth-child(2) > img:nth-child(1)')
window.addEventListener('scroll', event => {
    let opacityRand = Math.random();
    map.style.opacity = opacityRand;
})

//'select'
const select = document.querySelector('#select')
select.addEventListener('select', event => {
    alert("You selected some text!");
})

//'dblclick'
const colorBtn = document.querySelector('div.destination:nth-child(3) > div:nth-child(3)')
colorBtn.addEventListener('dblclick', event => {
    function randomRGB() {
        return Math.floor(Math.random() * 256);
    }

    var red = randomRGB();
    var green = randomRGB();
    var blue = randomRGB();
    var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

    colorBtn.style.backgroundColor = rgbColor;
})

//'cut' b/c why not
document.addEventListener('cut', event => {
    document.body.textContent = "Bye Fiveever"
})



/* Nest two similar events somewhere in the site and prevent the event propagation properly*/

const nestedBtn = document.querySelector('div.destination:nth-child(1) > div:nth-child(3)')
nestedBtn.addEventListener('click', event => {
    nestedBtn.style.backgroundColor = 'blue';
    event.stopPropagation();
})
const fitsDiv = document.querySelector('div.destination:nth-child(1)')
fitsDiv.addEventListener('click', event => {
    fitsDiv.style.backgroundColor = 'red';
})

/* Stop the navigation items from refreshing the page by using `preventDefault()`*/
const navItems = document.querySelectorAll('a.nav-link')
navItems.forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(item);

    })
})
 




