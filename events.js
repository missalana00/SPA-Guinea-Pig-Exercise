

// INSTRUCTIONS

// 1.  There is sample HTML file content below so create an index.html for it and place the content in the body tag.
// 2.  Link in a JavaScript file named events.js.
// 3.  Link in a CSS file named events.css. You'll be using element.classList to manipulate the CSS classes on elements.
// 4.  Note: Output target is the output-target element.

// 5.  When any section is clicked the output target text should be "You clicked on the {text of the section} section"
// 6.  When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
// 7.  When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
// 8.  When you type characters into the input field, the output element should mirror the text in the input field.
// 9.  When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// 10. When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// 11. When you click the "Rounded" button, the guinea-pig element's border should become rounded.
// 12. The first section's text should be bold.
// 13. The last section's text should be bold and italicized.



var inputField = document.querySelector("input")



// 5. Need event listeners for any section, then, output "You clicked on the {text of the section} section"

var outputTarget = document.querySelector("#output-target")

document.querySelector("article").addEventListener("click", (e) => {
  outputTarget.innerHTML = `<p>You clicked on the ${e.target.innerHTML} section`
    inputField.value = ""
    // console.log(e);
})



// 6. When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".

var header1 = document.querySelector("h1")


header1.addEventListener("mouseover", () => {
  outputTarget.innerHTML = "You moved your mouse over the header!"
  inputField.value = ""
})



// 7. When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".

header1.addEventListener("mouseout", () => {
  outputTarget.innerHTML = "You left me! Come back!"
  inputField.value = ""
})



// 8.  When you type characters into the input field, the output element should mirror the text in the input field.

inputField.addEventListener("input", (e) => {
    outputTarget.innerHTML = inputField.value
})



// 9.  When you click the "Add color" button, the guinea-pig element's text color should change to blue.

var guineaPig = document.querySelector("#guinea-pig")

document.querySelector("#add-color").addEventListener("click", (e) => {
    guineaPig.classList.add("color-me-blue")
})



// 10. When you click the "Capture it" button, the guinea-pig element should have a border added to it.

document.querySelector("#add-border").addEventListener("click", (e) => {
    guineaPig.classList.add("add-border")
})



// 11. When you click the "Rounded" button, the guinea-pig element's border should become rounded.

document.querySelector("#add-rounding").addEventListener("click", (e) => {
    guineaPig.classList.add("rounded")
})



// 12. The first section's text should be bold.

document.querySelector("article").firstElementChild.classList.add("bold-text")




// 13. The last section's text should be bold and italicized.

document.querySelector("article").lastElementChild.classList.add("bold-text", "italic-text")





// SOURCES USED: Followed j-west's work on this exercise and reverse-engineered to understand.
//               Then followed LucasMcL's work to see how the same work could be done using jQuery

// Helpful websites:

// 1.  https://medium.com/@pierreda/things-you-should-know-about-js-events-4ab474312736#.bogl8fsui

// The event object
// Let’s begin by capturing a dummy event object and take a look into it, it is as easy as doing this :

    // document.body.addEventListener("click", function(event) {
    //     console.log(event);
    // });

// 2.  https://www.bitovi.com/blog/a-crash-course-in-how-dom-events-work

// 3.  https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// 4.  http://callmenick.com/post/add-remove-classes-with-javascript-property-classlist
