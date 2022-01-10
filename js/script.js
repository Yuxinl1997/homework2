  function move(){
	let elem = document.querySelector('.bar')
	let width = 0
	let a = setInterval(frame,30)
	function frame(){
		if(width<=100){
			elem.style.width = width +"%"
			width++
		}
		else{
			clearInterval(a)
		}
	}
}
move()

function createGrid(arr) {
	var result = document.createElement('div');
	
	for(let i=0;i<3;i++) {
		let row = document.createElement('ul');
		
		for(let j=0;j<3;j++) {
			let cell = document.createElement('li');
			cell.setAttribute('class', 'cell');

			let index = i*3 + j;

			if(arr[index]) {
				cell.innerHTML = 'M';
			}

			row.append(cell);
		}
		
		result.appendChild(row);
	}

	
	return result;
}

function getRandomByRange(low, high) {
	var diff = high - low;
	
	return Math.floor(Math.random()*diff) + low;
}



function getRandom(){
	var result = new Array(9);
	var candidates = [0,1,2,3,4,5,6,7,8], count = 0;
	while(count < 1) {
		let index = getRandomByRange(0, candidates.length-1);
		result[candidates[index]] = true;

		candidates.splice(index, 1);

		count++;
	}

	return result;



}

function get_clicked(e){
	if(e.target.tagName.toLowerCase() !== 'li') return;
	let val = e.target.innerHTML;
	if (val === "M"){
		score+=1

	}
	count++
	refresh_board()

}
function refresh_board(){
	container.innerHTML = ""
	let point = document.createElement('div');
	point.setAttribute('class', 'score');
	point.innerHTML = 'Final score ' + score;
	if(count<10){
	let fills = getRandom()
	fills = createGrid(fills)
	container.appendChild(fills)
	container.appendChild(point)

	}
	else{
		container.appendChild(point)
		let button = document.createElement("button")
		button.innerHTML ="start again"		
		container.appendChild(button)
		button.addEventListener("click",()=>{
			count = 0
			score = 0
			console.log(count,score);
			refresh_board()
		})


	}

}

var count = 0, score = 0
var container = document.querySelector('.game-container');


function start_game(){	
	container.innerHTML = ""

	refresh_board()
	container.addEventListener("click",get_clicked)

}

start_game()
