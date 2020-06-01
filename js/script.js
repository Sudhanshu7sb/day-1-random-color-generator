let button = document.querySelector('button');
let body = document.querySelector('body');
let p = document.querySelector('p');

function randomColorGenerator(event){
let letters = '0123456789ABCDEF';
let color = "#";

for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
//   console.log(color);
  
}
// console.log(color);


body.style.backgroundColor = color;
p.innerText =  color;

return color;
}

button.addEventListener('click',randomColorGenerator);