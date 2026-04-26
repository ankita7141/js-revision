let heading=document.querySelector("h1");
console.dir(heading);
// heading.innerHTML="<i>heloooo guys!!</i>"
// heading.innerText="hey ankita"; 
// heading.textContent="welcome to js part 22222`";
heading.draggable=true;
let links=document.querySelector("a");
// console.dir(links)

// links.href="https://www.youtube.com/";
links.setAttribute("href", "https://www.youtube.com/");
let images=document.querySelector("img");
images.setAttribute("src","/imges/rezero.jpg");
console.log(images.getAttribute("src"));
images.removeAttribute("src");

