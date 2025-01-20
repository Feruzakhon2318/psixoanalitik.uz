function calculate() {
    const birthdate = document.getElementById('birthdate').value;
    const output = document.getElementById('output');

    // Проверка формата даты
    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(birthdate)) {
        output.innerHTML = "<div class='cell'>Неверный формат даты. Используйте ДД.ММ.ГГГГ.</div>";
        return;
    }

    const [day, month, year] = birthdate.split('.').map(Number);
    const digits = [...birthdate.replace(/\./g, '')].map(Number);

    // Дополнительные числа
    const firstAdditional = digits.reduce((a, b) => a + b, 0);
    const secondAdditional = [...firstAdditional.toString()].reduce((a, b) => +a + +b, 0);
    const thirdAdditional = firstAdditional - 2 * (digits[0] || digits[1]);
    const fourthAdditional = [...Math.abs(thirdAdditional).toString()].reduce((a, b) => +a + +b, 0);

    const destinyNumber = secondAdditional >= 10
        ? [...secondAdditional.toString()].reduce((a, b) => +a + +b, 0)
        : secondAdditional;

    // Вспомогательная функция для подсчёта цифр
    const countDigit = (num) => digits.filter((d) => d === num).length;

    // Расчёты для матрицы
    const temperament = countDigit(3) + countDigit(5) + countDigit(7);
    const target = countDigit(1) + countDigit(4) + countDigit(7);
    const family = countDigit(2) + countDigit(5) + countDigit(8);
    const habits = countDigit(3) + countDigit(6) + countDigit(9);
    const life = countDigit(4) + countDigit(5) + countDigit(6);

    const character = countDigit(1);
    const health = countDigit(4);
    const luck = countDigit(7);
    const energy = countDigit(2);
    const logic = countDigit(5);
    const duty = countDigit(8);
    const interest = countDigit(3);
    const work = countDigit(6);
    const memory = countDigit(9);

    // Вывод результата
    output.innerHTML = `
        <div class="cell">Доп. числа<br>${firstAdditional}, ${secondAdditional}, ${thirdAdditional}, ${fourthAdditional}</div>
        <div class="cell">Число Судьбы<br>${destinyNumber}</div>
        <div class="cell">Темперамент<br>${temperament}</div>
        <div class="cell">Цель<br>${target}</div>
        <div class="cell">Семья<br>${family}</div>
        <div class="cell">Привычки<br>${habits}</div>
        <div class="cell">Быт<br>${life}</div>
        <div class="cell">Характер<br>${character}</div>
        <div class="cell">Здоровье<br>${health}</div>
        <div class="cell">Удача<br>${luck}</div>
        <div class="cell">Энергия<br>${energy}</div>
        <div class="cell">Логика<br>${logic}</div>
        <div class="cell">Долг<br>${duty}</div>
        <div class="cell">Интерес<br>${interest}</div>
        <div class="cell">Труд<br>${work}</div>
        <div class="cell">Память<br>${memory}</div>
    `;
}
