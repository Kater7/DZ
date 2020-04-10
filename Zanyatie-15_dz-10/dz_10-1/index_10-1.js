const booksContainer = document.getElementById('books-container');
const textContainer = document.getElementById('text-container');

booksContainer.addEventListener('click', function(event) {
    if (event.target.hasAttribute('data-file')) {
        const file = event.target.getAttribute('data-file');
        console.log(file);
        loadFile(`${file}`);
    }
});

function loadFile(fileName) {
    textContainer.innerText = `Идет загрузка книги...`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', fileName, true);
    xhr.onload = function() {
        const str = xhr.responseText;
        onDataLoaded(str, fileName);
    }
    xhr.send(null);
}

function onDataLoaded(text, name) {
    textContainer.innerHTML = text;
}