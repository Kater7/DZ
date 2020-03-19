const field = document.getElementById('field');
const button = document.getElementsByTagName('input');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function(evt) {
        if (evt.target.value == 'C') {
            field.innerHTML = '0';
        } else if (evt.target.value == '=') {
            field.innerHTML = eval(field.innerHTML);
        } else if (field.innerHTML == '0') {
            field.innerHTML = evt.target.value;
        } else {
            field.innerHTML = field.innerHTML + evt.target.value;
        }
    });
}