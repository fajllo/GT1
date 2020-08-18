function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const player = document.getElementById("player");
window.addEventListener("keyup",function (e){
	if(e.keyCode === 40){
		const topPo = posit(player.style.top);
		player.style.top = `${topPo + 25}px`;
	}
	else if(e.keyCode === 38){
		const topPo = posit(player.style.top);
		player.style.top = `${topPo - 25}px`;
	}
	else if(e.keyCode === 39){
		const leftPo = posit(player.style.left);
		player.style.transform = 'scale(1,1)';
		player.style.left = `${leftPo + 25}px`;
	}else if(e.keyCode === 37){
		const leftPo = posit(player.style.left);
		player.style.transform = 'scale(-1,1)';
		player.style.left = `${leftPo - 25}px`;
	}
})

const posit = (pos) =>{
	if (!pos) return 10;
	 return parseInt(pos.slice(0,-2));

};