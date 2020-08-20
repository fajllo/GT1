const input1 = document.querySelector("#input1");
const h1 = document.querySelector("#input2");



input1.addEventListener('input', function (e){
    input2.innerText = this.value;
    

});