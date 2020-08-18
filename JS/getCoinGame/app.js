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
const coin = document.getElementById("coin");
let score = 0;
const h1 = document.querySelector("h1");

window.addEventListener("keyup",function (e){
	if(e.keyCode === 40){
		const topPo = posit(player.style.top);
		player.style.top = `${topPo + 50}px`;
	}
	else if(e.keyCode === 38){
		const topPo = posit(player.style.top);
		player.style.top = `${topPo - 50}px`;
	}
	else if(e.keyCode === 39){
		const leftPo = posit(player.style.left);
		player.style.transform = 'scale(1,1)';
		player.style.left = `${leftPo + 50}px`;
	}else if(e.keyCode === 37){
		const leftPo = posit(player.style.left);
		player.style.transform = 'scale(-1,1)';
		player.style.left = `${leftPo - 50}px`;
	}
	if(isTouching(player,coin)){
		moveCoin();
		scoreCount();

	

	};
	 
})

const moveCoin = () => {

	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);
	coin.style.left = `${width}px`;
	coin.style.top = `${height}px`;

};


const posit = (pos) =>{
	if (!pos) return 10;
	 return parseInt(pos.slice(0,-2));

};
const scoreCount = () => {
	score++;
	h1.innerText = `SCORE: ${score}`;
}
moveCoin();