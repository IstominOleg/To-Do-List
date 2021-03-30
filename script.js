let button = document.querySelector('#button');
let ul = document.querySelector('.todos');
let li = ul.querySelector('.li');
let items = document.querySelectorAll('.todos li');
let delet = document.querySelectorAll('.delet');
let sortParent = document.querySelector('.sort');
let sortSvgOne = document.querySelector('.svg-one');
let sortSvgTwo = document.querySelector('.svg-two');
let input = ul.querySelectorAll('.input');
let isSorted = 0;

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
    };

});

ul.addEventListener ("click", (event) => {
    if(event.target.closest(".delet")) {
      if(ul.querySelectorAll("li").length > 1) {
        event.target.closest("li").remove()
        }   else {
        event.target.closest("li").querySelector("input").value = "";
      };
  
    };
  
});

sortParent.addEventListener('click', function () {
    if (!isSorted) {
        isSorted = 1;
        sortSvgTwo.style.display = 'none';
        sortSvgOne.style.display = 'block';
        newSorted ()
    } else {
        isSorted = 0;
        sortSvgTwo.style.display = 'block';
        sortSvgOne.style.display = 'none';
        newSortedReverse ()
    }
});

function newSorted () {
    let arr = [];
    let input = ul.querySelectorAll('.input');
    input.forEach((el) => {
        arr.push(el.value);
        arr.sort();
    });
    input.forEach ((el) => {
        el.value = '';
        el.value = arr.shift();
    });
};
function newSortedReverse () {
    let arrRevers = [];
    let input = ul.querySelectorAll('.input');
    input.forEach((el) => {
        arrRevers.push(el.value);
    });
    arrRevers.reverse();
    input.forEach ((el) => {
        el.value = '';
        el.value = arrRevers.shift();
    });
};