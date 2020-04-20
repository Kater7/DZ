const buttonForAnalysis = document.getElementById('analyze');
const message = document.getElementById('message');

buttonForAnalysis.addEventListener('click', function() {
    const input = document.getElementById('file');
    const file = input.files[0];

    if (!file) {
        message.insertAdjacentText('beforeend', `Внимание, файл не выбран!`);
        input.style.border = "2px solid red";
    } else {
        message.innerText = "";
        input.style.border = "none";
    }

    let textArray = [];
    const newTextArray = [];

    const reader = new FileReader();
    reader.onload = function() {
        textArray = (reader.result).toLowerCase().split('');

        for (let i = 0; i < textArray.length; i++) {
            let found = true;

            for (let j = 0; j < newTextArray.length; j++) {
                if (textArray[i] == newTextArray[j].symbol) {
                    newTextArray[j].count++;
                    found = false;
                }
            }
            if (found) {
                newTextArray.push({ symbol: textArray[i], count: 1 });
            }
        }
        newTextArray.sort((a, b) => b.count - a.count);

        const placeForResult = document.getElementById('results');

        placeForResult.innerHTML = `<div class="text-name">Анализ выбранного файла (количество повторений каждого встречающегося в тексте символа)</div>
                <table id="table"><thead><td>Символ</td><td>Количество повторений (раз)</td></head></table>`;
        const table = document.getElementById('table');
        for (let i = 0; i < newTextArray.length; i++) {
            table.insertAdjacentHTML('beforeend', `<tr><td>"${newTextArray[i].symbol}"</td><td>${newTextArray[i].count}</td></tr>`);
        }
    }
    reader.readAsText(file);
});