const input1 = document.querySelector("#input1");
const h1 = document.querySelector("h1");



input1.addEventListener('input', function (e){
    h1.innerText = e.target.value;

});