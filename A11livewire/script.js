let chaptersText = [
    'Componentes',
    'Propiedades'
];

let partsText = [
    // Cap 1
    [
        'Creando componentes',
        'Estableciendo propiedades',
        'Llamando acciones',
        'Renderizando componentes',
        'Componentes de pagina completa',
        'Usando JavaScript'
    ],
    // Cap 2
    [
        'Manipulación de propiedades',
        'Tipos de propiedades soportadas',
        'Accedienso a propiedades desde JavaScript',
        'Precauciones de seguridad'
    ],
];

let chapter, part;

for(let i = 0; i < chaptersText.length; i++){
    chapter = document.getElementById(`c${i + 1}`);
    for(let j = 0; j < partsText[i].length; j++){
        part = document.getElementById(`c${i + 1}p${j + 1}`);
        if(chapter){
            chapter.textContent = chaptersText[i];
        }
        if(part){
            part.textContent = partsText[i][j];
        }
    }
}