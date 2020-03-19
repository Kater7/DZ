const encode = document.getElementById('encode');
const decode = document.getElementById('decode');

encode.addEventListener('click', function() {
    const textBefore = document.getElementById('text-before').value;
    let result = textBefore.split("").reverse().join("");
    // console.log(result);
    document.getElementById('text-after').value = result;
});

decode.addEventListener('click', function() {
    const textAfter = document.getElementById('text-after').value;
    let result = textAfter.split("").reverse().join("");
    // console.log(result);
    document.getElementById('text-before').value = result;
});