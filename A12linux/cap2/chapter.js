const number = 2;
const chapter = chapters[number - 1];

const title = document.getElementById('title');
title.textContent = theme.title;
document.getElementById('chapter').textContent = `Capítulo ${number}: ${chapter.name}`;

if(title.dataset.type == 'chapter'){
    const index = document.getElementById('index');

    for(let i = 0; i < chapter.parts.length; i++){
        const part = chapter.parts[i];
        // Create LI
        const li = document.createElement('LI');
        li.textContent = `Parte ${i + 1}:`;
        // Create A
        const a = document.createElement('A');
        a.href = `parts/${i + 1}.html`;
        a.textContent = part.name;
        li.appendChild(a);
        // Create OL
        const ol = document.createElement('OL');
        for(let theme of part.themes){
            const li = document.createElement('LI');
            li.textContent = theme;
            ol.appendChild(li);
        }
        li.appendChild(ol);
        index.appendChild(li);
    }
}