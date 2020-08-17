const input = document.querySelector("#add");
const ol =document.querySelector("#lista");
input.addEventListener('keypress',function (e){
  if (e.keyCode === 13){
      const newItem = this.value;
      const newLi = document.createElement('li');
      newLi.innerText = newItem;
      ol.append(newLi);
      this.value = "";

  }
})
