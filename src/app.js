function printChristmasTreeRow(rowLength, rowShift) {
	const spaces = ' '.repeat(rowShift);
	const stars = '*'.repeat(rowLength);

	console.log(spaces + stars);
}

function printChristmasTree(height) {
	let rowShift = height - 1;
	let rowLength = 1;

	while (rowShift >= 0) {
		printChristmasTreeRow(rowLength, rowShift);
		rowLength += 2;
		rowShift -= 1;
	}
}

printChristmasTree(9);
