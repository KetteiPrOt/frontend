document.getElementById('title').textContent = theme.title;
document.getElementById('description').textContent = theme.description;

const index = document.getElementById('index');

for(let i = 0; i < chapters.length; i++){
    const chapter = chapters[i];
    // Create <li></li>
    const li = document.createElement('LI');
    li.textContent = `Capítulo ${i + 1}: `;
    // Create <a></a>
    const a = document.createElement('A');
    a.href = `cap${i + 1}/index.html`;
    a.textContent = chapter.name;
    li.appendChild(a);
    // Create <ol></ol>
    const ol = document.createElement('OL');
        for(let part of chapter.parts){
            const li = document.createElement('LI');
            li.textContent = part.name;
            ol.appendChild(li);
        }
    li.appendChild(ol);
    index.appendChild(li);
}