const A = prompt('Введите год:');
const a = Number(A);

if ((a % 4) != 0) {
	alert(a + ' - обычный год');
} else {
		if ((a % 100) != 0) {
    	alert(a + ' - високосный год');
    } else {
    		if ((a % 400) == 0) {
        	alert(a + ' - високосный год');
        } else {
        		alert(a + ' - обычный год');
        }
    }
}