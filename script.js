let button = document.querySelector('#button');
let ul = document.querySelector('.todos')
let li = ul.querySelector('.li');
let delet = document.querySelectorAll('.delet');

button.addEventListener ('click', (event) => {
    newLi = li.cloneNode(true);
    newLi.firstElementChild.value = '';
    ul.appendChild(newLi);
});

ul.addEventListener ('keyup', (event) => {
    if (event.keyCode === 13) {
        newLi = li.cloneNode(true);
        newLi.firstElementChild.value = '';
        ul.appendChild(newLi);
    }

});

ul.addEventListener ("click", (event) => {
    if(event.target.closest(".delet")) {
      if(ul.querySelectorAll("li").length > 1) {
        event.target.closest("li").remove()
        }   else {
        event.target.closest("li").querySelector("input").value = ""
      }
  
    }
  
});