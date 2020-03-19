const bodyBox = document.getElementById('body-box');
const menuBox = document.querySelector('.menu-box');
const contextMenu = document.querySelector('.context-menu');

menuBox.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    contextMenu.style.top = `${event.clientY}px`;
    contextMenu.style.left = `${event.clientX}px`;

    contextMenu.classList.add('active');
});

bodyBox.addEventListener('click', function(event) {
    if (event.target.className != '.menu-box') {
        contextMenu.classList.remove('active');
    }
}, true);

const openSomething = document.getElementById('open');
const saveSomething = document.getElementById('save');
const deleteSomething = document.getElementById('delete');

openSomething.addEventListener('click', function() {
    alert('Open');
});
saveSomething.addEventListener('click', function() {
    alert('Save');
});
deleteSomething.addEventListener('click', function() {
    alert('Delete');
});