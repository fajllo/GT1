const colors = ['black','red', 'orange','blue', 'green','indigo','purple','white'];

const backColor = function(){
    document.body.style.backgroundColor = this.style.backgroundColor;
    console.log(this)

}

const container = document.querySelector("#boxes");
for (let color of colors){
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.append(box);
    box.addEventListener('click', backColor)
}
