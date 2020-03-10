**DOM II**
---
* *Events* // how users interact with the page (by mouse, keyboard, etc.)

* *Trigger* // an event happening on a page is known as a trigger

* ```.addEnentListener('click', callback);``` // this method is used on an element adn takes two arguments. ```'click'``` is the event that is being listened for and ```'callback'``` is what is fired when the event is triggered.
    * the *callback* is known as the * event handler*

* [MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
* [MDN INtro to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

* The callback and the *Event Object*
    * ```element.addEventListener('click', (event) => {//Handle Event});```
    * ```.target``` property gives us all the information abotu the DOM node where the event happens. It has the same properties as regular DOM nodes (ex. .child, .parent, .style, etc.)
    * Example: to change the background color:
        * ```element.addEventListener('click', (event) => {
            event.target.style.backgroundColor = 'blue';});```
    * [MDN Event Object: Properties](https://developer.mozilla.org/en-US/docs/Web/API/Event#Properties)

* *Event Propogation (and how to prevent)*

    * if you trigger an event on a child element, you are also triggering that same event on every parent element all the way up to the body. This process is called *event propagation*

    * If we call the ```.stopPropogation()``` method in our event handler, it will stop the event form propogating up the chain to the parent elements
        * ```cons eventHandler = (event) => {event.stopPropagation() };```

    * ```.preventDefault``` method stops a HTML element fromn reacting in it's default way (example: preventing a form element from refreshing the page on submit)

    ![Event Propagation](/DOM-II/ScreenShot2019-01-30at18.27.09.png)

* [Codepen Challenge from TK](https://codepen.io/phillybenh/pen/zYGpbBQ?editors=1111)

* [Lecture Notes](https://www.notion.so/DOM-II-cdb1c490b6d44273b9c27544bcb85dc6)

* Phases of events:
    * Code registers event handlers
    * User clicks
    * Browser reigisters click (*Capture Phase*)
    * Trigger travels down through the DOM to target
    * Event fires (*Target Phase*)
    * Event propogates back up through the DOM tripping every parent element (*Bubble Phase*)
    
    
**///////Lecture Code///////**
```// Lecture Code
// console.log('something');
// const anchor = document.querySelector('') OBE b/c #homeLink
//Substitute Lecturer: Gabriel Cabrejas

function clickEventHandler(event) {
    // event.preventDefault()
    console.log(event.type + '!!!!!!!!!!!!!!')
    console.log(event.target) //logs the target at each bubble
    console.log(event.currentTarget); //logs each element the event bubbbles up through
    // document.body.innerHTML = "<div>gone</div>"
}
document.querySelector('a').addEventListener('click', clickEventHandler)
document.querySelector('nav').addEventListener('click', clickEventHandler)
document.querySelector('header').addEventListener('click', clickEventHandler)
document.body.addEventListener('click', clickEventHandler)
document.addEventListener('click', clickEventHandler)
window.addEventListener('click', clickEventHandler)

document.querySelector('a').addEventListener('click', event => {
    //stop the bubbling - handle with care
    event.stopPropagation()
    console.log("hahaha, sabotaging propagation!!")
})

//Destroy Website - if added to click handler
// document.body.innerHTML = "<div>gone</div>"


//See below for before the event handler function
// homeLink.addEventListener(
//     'click',//string with name of event
//     () => {
//         //thinks we want to happen when link gets clicked
//         console.log("the link got clicked");
//     }
// )
// document.querySelector('nav').addEventListener('click', () => {
//     console.log("nav got clicked");
// })

// //attach a 'click' event listener to the header
// document.querySelector('header:first-of-type').addEventListener('click', () => {
//     console.log("header got clicked");
// })
// //you can avoid query selectors for body, IDs, etc. (see below)
// document.body.addEventListener('click', (stuff) => {
//     console.log(stuff) //browser sends tons of information then firing, see 'stuff' in console
//     console.log("the body of page was clicked");
// })
// document.addEventListener('click', (event) => {
//     console.log("the document");
// });
// window.addEventListener('click, (event) => {
//     })
```     
    