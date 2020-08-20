
const btn = document.querySelector("button");

const moveX = (element,amont,deley) => {
	return new Promise((resolve, reject) =>{
		setTimeout(()=>{
			const bodyWidth = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const elLeft = element.getBoundingClientRect().left;
			if(elRight + amont >bodyWidth){
				reject();
			}
			else {
				element.style.transform = `translateX(${elLeft + amont}px)`;
				resolve();
			}
		},deley)

	})
};

moveX(btn,300,500)
.then(() =>{
	return moveX(btn,300,500)
})
.then(() =>{
	return moveX(btn,300,500)
})
.then(() =>{
	return moveX(btn,300,500)
})
.then(() =>{
	return moveX(btn,300,500)
})
.then(() =>{
	return moveX(btn,300,500)
})
.catch(()=>{
	alert("Too much!")
	return moveX(btn,-1500,500)
	
})

