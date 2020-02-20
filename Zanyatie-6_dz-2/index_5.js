/* 7. С клавиатуры вводится кол-во секунд (не больше 86 399). Преобразовать это
число в кол-во часов : кол-во минут : кол-во секунд. */

let sec = 0;
let minut = 0;
let chas = 0;

if (a < 60) {
	sec = a;
  minut = '00';
  chas = '00';
} else {
		if ((a >= 60) && (a < 3600)) {
    	minut = Math.floor(a / 60);
      sec = a % 60;
      chas = '00';
    } else {
    		chas = Math.floor(a / 3600);
        let ostatok = a - chas * 3600;
        if (ostatok > 60) {
        	minut = Math.floor(ostatok / 60);
          sec = ostatok % 60;
        } else {
        	min = '00';
        	sec = ostatok;
        }
    }
}

alert(chas + ':' + minut + ':' + sec);