let chaptersText = [
    'Componentes'
];

let partsText = [
    'Creando componentes'
];

let chapter, part;

for(let i = 0; i < chaptersText.length; i++){
    chapter = document.getElementById(`c${i + 1}`);
    for(let j = 0; j < partsText.length; j++){
        part = document.getElementById(`c${i + 1}p${j + 1}`);
        if(chapter){
            chapter.textContent = chaptersText[i];
        }
        if(part){
            part.textContent = partsText[j];
        }
    }
}