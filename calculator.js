function calculateNumerology() {
    const birthdate = document.getElementById('birthdate').value;
    const firstSquare = document.getElementById('first-square');
    const secondSquare = document.getElementById('second-square');

    if (!/^\\d{2}\\.\\d{2}\\.\\d{4}$/.test(birthdate)) {
        firstSquare.innerHTML = secondSquare.innerHTML = "Неверный формат. Используйте DD.MM.YYYY.";
        return;
    }

    const [day, month, year] = birthdate.split('.').map(Number);
    const digits = [...birthdate.replace(/\./g, '')].map(Number);

    // Дополнительные числа
    const firstAdditional = digits.reduce((a, b) => a + b, 0);
    const secondAdditional = [...firstAdditional.toString()].reduce((a, b) => +a + +b, 0);
    const thirdAdditional = firstAdditional - 2 * (digits[0] || digits[1]);
    const fourthAdditional = [...Math.abs(thirdAdditional).toString()].reduce((a, b) => +a + +b, 0);
    const destinyNumber = [...secondAdditional.toString()].reduce((a, b) => +a + +b, 0);

    // Помощник для подсчета цифр
    const countDigit = (num) => digits.filter((d) => d === num).length;

    // Первый квадрат
    const temperament = countDigit(3) + countDigit(5) + countDigit(7);
    const target = countDigit(1) + countDigit(4) + countDigit(7);
    const family = countDigit(2) + countDigit(5) + countDigit(8);
    const habits = countDigit(3) + countDigit(6) + countDigit(9);
    const life = countDigit(4) + countDigit(5) + countDigit(6);

    firstSquare.innerHTML = `
        <div class=\"grid-title\">Первый квадрат</div>
        <div>Доп. числа</div><div>${firstAdditional}, ${secondAdditional}, ${thirdAdditional}, ${fourthAdditional}</div>
        <div>Число судьбы</div><div>${destinyNumber}</div>
        <div>Темперамент</div><div>${temperament}</div>
        <div>Цель</div><div>${target}</div>
        <div>Семья</div><div>${family}</div>
        <div>Привычки</div><div>${habits}</div>
        <div>Быт</div><div>${life}</div>
    `;

    // Второй квадрат
    const character = countDigit(1);
    const health = countDigit(4);
    const luck = countDigit(7);
    const energy = countDigit(2);
    const logic = countDigit(5);
    const duty = countDigit(8) || '-';
    const interest = countDigit(3);
    const work = countDigit(6) || '-';
    const memory = countDigit(9);

    secondSquare.innerHTML = `
        <div class=\"grid-title\">Второй квадрат</div>
        <div>Характер</div><div>${character}</div>
        <div>Здоровье</div><div>${health}</div>
        <div>Удача</div><div>${luck}</div>
        <div>Энергия</div><div>${energy}</div>
        <div>Логика</div><div>${logic}</div>
        <div>Долг</div><div>${duty}</div>
        <div>Интерес</div><div>${interest}</div>
        <div>Труд</div><div>${work}</div>
        <div>Память</div><div>${memory}</div>
    `;
}
