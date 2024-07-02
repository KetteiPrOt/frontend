if(title.dataset.type == 'part'){
    const partNumber = title.dataset.number;
    const part = chapter.parts[partNumber - 1];
    document.getElementById('part').textContent = `Parte ${partNumber}: ${part.name}`;
}