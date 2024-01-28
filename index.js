
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
    
    // The second line of code of the function should immediately return if the element clicked was NOT an <a> element.
    // -- unsure of how to do that for now (if !==  ?)
    if (!event.target.matches("a"))      // matches() - a method that returns true if an element matches. (could also use if (event.target.localName !== "a"))
    return;
    
    // Log the content of the <a> to verify the handler is working.
    console.log(event.target.textContent.toLowerCase());        // works in the devtools console when ckicking on ABOUT and/or CATALOG
    
    // Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected:
    // The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
    event.target.classList.toggle("active");

    console.log(event.target.textContent.toLowerCase())

    // The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
    // Hint: Removing a non-existent class from an element does not cause an error!
    topMenuLinks.forEach((link) => {                // Checking over each element on the top menu wuth links. 
        if (link !== event.target) {                // If the link is not clicked (!==) the "active" class gets removed.
            link.classList.remove("active")
        }
        console.log(topMenuLinks)           // Console shows an array of links ([a,a,a,a]) where all linkes are inactive. Once any menu is clicked, that array index has the link as a.active, when clicking elswhere - the "a.active" gets removed from the index. The UI color of the selected link also changes upon clicking.
    })
})

