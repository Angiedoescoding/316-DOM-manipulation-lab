
// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
];

// { text: "about", href: "/about" },
// { text: "catalog", href: "/catalog" },
// { text: "orders", href: "/orders" },
// { text: "account", href: "/account" },
//Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");

//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
//Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = "var(--main-bg)";

// Set the content of mainEl to <h1>DOM Manipulation</h1>.
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// Add a class of flex-ctr to mainEl. Hint: Use the Element.classList API.
mainEl.classList.add("flex-ctr");

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
// Set the height of the topMenuEl element to be 100%.
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
// Add a class of flex-around to topMenuEl.

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Iterate over the entire menuLinks array and for each "link" object:
// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the topMenuEl element.

menuLinks.forEach((link) => {
  const linkObject = document.createElement("a");
  //add an href attribute with its value set to the href property of the "link" object.
  linkObject.setAttribute("href", link.href);
    //console.log(linkObject)
  // Set the new element's content to the value of the text property of the "link" object.
  linkObject.textContent = link.text;
  // Append the new element to the topMenuEl
  topMenuEl.appendChild(linkObject);
});


// Jan 26 - Part 2 of the LAB

let subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");

// Set the CSS position property of subMenuEl to the value of absolute.
// Set the CSS top property of subMenuEl to the value of 0.

subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";


// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
let topMenuLinks = topMenuEl.querySelectorAll("a");
console.log(topMenuLinks)

// Attach a delegated 'click' event listener to topMenuEl.
// The first line of code of the event listener function should call the event object's preventDefault() method.
topMenuEl.addEventListener("click", function(event) {           // -- delegated listener allows to listen for events on <a> element (a child of topMenuEl)
    event.preventDefault();             // -- preventing immediate URL navigatin after a link is clicked on.
    
    // The second line of code of the function should immediately return if the element clicked was not an <a> element.
    // -- unsure of how to do that for now (if !==  ?)
    
    // Log the content of the <a> to verify the handler is working.
    console.log(event.target.textContent);
})
//console.log(topMenuLinks)



