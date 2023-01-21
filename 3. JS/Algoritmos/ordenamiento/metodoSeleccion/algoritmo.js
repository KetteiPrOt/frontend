let array = [19, 6, 18, 14, 1, 5, 20, 2, 15, 8, 7, 3, 12, 11, 10, 9, 4, 17, 13, 16],
	auxiliar;

console.log(array); // Arreglo desordenado

for (let i = 0; i < array.length; i++) {

	for (let j = i + 1; j < array.length; j++) {
		if (array[j] < array[i]) {
			auxiliar = array[i];
			array[i] = array[j];
			array[j] = auxiliar;
		}
	}

}

console.log(array); // Arreglo ordenado