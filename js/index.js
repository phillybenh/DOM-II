
//'mouseover'
const venice = document.querySelector('.img-fluid')
venice.addEventListener('mouseover', event => {
    // console.log("mic check");
    venice.style.transform = 'rotate(20deg) translate(50px, 100px)';
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
const map = document.querySelector('div.img-content:nth-child(2) > img:nth-child(1)')
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
/*
Using your[index.js file], create 10 unique event listeners using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use:
    * [x] `mouseover`
    * [x]`keydown`
    * [x]`wheel`
    * [x]`drag / drop`
    * [x]`load` - makes sure JS doesn't run till site is rendered
    * [x]`focus`
    * []`resize`
    * []`scroll`
    * []`select`
    * []`dblclick`
    * []`cut` BONUS b/c `load` was cheap
* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
* [ ] Stop the navigation items from refreshing the page by using `preventDefault()`

## Stretch Task:
* [ ] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.
*/