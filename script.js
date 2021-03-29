let button = document.querySelector('#button');
let ul = document.querySelector('.todos');
let li = ul.querySelector('.li');
let items = document.querySelectorAll('.todos li');
console.log(items);
let delet = document.querySelectorAll('.delet');
let alreadySorted = 0;
// const goods = document.querySelector('.goods');
// const name = document.querySelectorAll('tr th:first-of-type');
// const price = document.querySelectorAll('tr th:nth-of-type(2)');
// const amount = document.querySelectorAll('tr th:last-of-type');

// function sortName(event) {
//     let sortedRows = Array.from(ul)
//   .slice(1)
//   .sort((elemA, elemB) => elemA.cells[0].innerHTML > elemB.cells[0].innerHTML ? 1 : -1);

// ul.tBodies[0].append(...sortedRows);
// }
// function reversSortName(event) {
//     let sortedRows = Array.from(goods.rows)
//   .slice(1)
//   .reverse((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

// goods.tBodies[0].append(...sortedRows);
// }
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


// ul.forEach((el) => {
//     el.addEventListener('click', (event) => {
//         const text = event.target.innerText;
//         if (text === 'Name ˄' || (!alreadySorted && text === 'Name ˅')) {
//           sortName();
//           alreadySorted = 1;
//           event.target.innerText = 'Name ˅';
//         } else {
//           reversSortName();
//           alreadySorted = 1;
//           event.target.innerText = 'Name ˄';
//         }
//     });
// });

let sort = document.querySelector('.svg-one');

sort.addEventListener('click', function () {
    let items = document.querySelectorAll('.todos li');
    let sorted = [...items].sort(function (a, b) {
        let one = a.querySelector('.input').value.split('').sort().join('');
        let two = b.querySelector('.input').value.split('').sort().join('');
        console.log(one);
        console.log(two);
        return one - two;
    });
    console.log(sorted);
    console.log(items, typeof items);
    ul.innerHTML = '';
    sorted.forEach ((el) => {
        ul.appendChild(el)
    })
    
});
// console.log(items);