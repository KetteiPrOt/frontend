let arrayB = [5, 2, 4, 1, 3], 
	lon = arrayB.length,
	l = lon,
	n,
	temp;

console.log(arrayB); // Arreglo desordenado

do {
	n = 0;

	for (let i = 1; i < l; i++) {
		
		if (arrayB[i - 1] > arrayB[i]) {
			temp = arrayB[i - 1];
			arrayB[i - 1] = arrayB[i];
			arrayB[i] = temp;
			n = i;
		}

	}

	l = n;
} while (n != 0);

console.log(arrayB); // Arreglo ordenado