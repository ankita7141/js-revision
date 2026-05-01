let li= document.querySelectorAll("ul li:nth-child(2n)");
li.forEach(function(element){
    element.classList.add("highlight");
})