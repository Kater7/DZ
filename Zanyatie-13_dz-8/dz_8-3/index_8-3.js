const newText = document.getElementById('new-text');

newText.onclick = function(event) {
    let target = event.target; // узнаю где был клик?
    if (target.tagName != 'A') return; // если клик не на A, то тогда не интересует
    const result = confirm(`Are you sure?`); // вывожу окошко с Ок и Отмена
    if (result != true) event.preventDefault(); // говорю, что если выбрано Отмена, то отменяю переход по ссылке!!!
};