let array = [3, 8, 2, 1, 4, 2], v, j;

console.log(array); // Arreglo desordenado

for (i = 1; i < array.length; i++) {
	v = array[i];
	j = i;

	while ((j > 0) && (array[j - 1] > v)) {
		array[j] = array[j - 1];
		j = j - 1;
	}

	array[j] = v; 
}

console.log(array); // // Arreglo ordenado