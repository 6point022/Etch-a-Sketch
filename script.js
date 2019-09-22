const getRandomNum = (x = 0, y = 255) => {
	return Math.floor((Math.random() * y) + x);
}

const createGrid = (dimension = 16) => {
	const container = document.querySelector('.grid-container');
	container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
	// container.style.marginLeft = `${-1 * 40 / 2}px`;
	// console.log(container.style.marginLeft);
	

	for(let i = 0; i < dimension ** 2; i++) {
		container.innerHTML += `<div class="grid-item"></div>`
	}

	const blocks = document.querySelectorAll('.grid-item');

	blocks.forEach(block => {
		block.style.backgroundColor = 'white';

		block.addEventListener('mouseover', e => {
			console.log(`${getRandomNum()}`);
			e.target.style.backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`;
		});
	});
}

createGrid();

const clearButton = document.querySelector('#clear');
const blackButton = document.querySelector('#black');

clearButton.addEventListener('click', e => {
	const blocks = document.querySelectorAll('.grid-item');
	const container = document.querySelector('.grid-container');

	container.innerHTML = '';
	createGrid(prompt("How many squares do you want?", 16));
})

blackButton.addEventListener('click', e => {
	const blocks = document.querySelectorAll('.grid-item');
	const container = document.querySelector('.grid-container');

	blocks.forEach(block => {
		block.addEventListener('mouseover', e => {
			console.log(`${getRandomNum()}`);
			e.target.style.backgroundColor = `rgb(0, 0, 0)`;
		});
	});
});

