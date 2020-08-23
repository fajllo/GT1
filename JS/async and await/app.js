
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

async function animateR(a =200) {
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)
    await moveX(btn,a,500)

}

animateR().catch(err => {
    console.log("all done")
    animateR(-200)
})