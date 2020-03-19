function Init() {
    const textBlock = document.getElementById('text-block');

    textBlock.addEventListener('keypress', function(evt) {
        const charCode = evt.charCode;
        if (charCode != 97 && charCode != 65 && charCode != 101 && charCode != 69 && charCode != 105 && charCode != 73 && charCode != 111 && charCode != 79 && charCode != 117 && charCode != 85) {
            evt.preventDefault();
        }
    });
}