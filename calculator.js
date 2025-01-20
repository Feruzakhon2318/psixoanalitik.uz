function calculate() {
    const birthdate = document.getElementById('birthdate').value;
    const result = document.getElementById('result');
    result.innerHTML = ''; // Clear previous results

    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(birthdate)) {
        result.innerHTML = '<div>Введите дату в формате дд.мм.гггг</div>';
        return;
    }

    const [day, month, year] = birthdate.split('.').map(Number);
    const digits = [...birthdate.replace(/\D/g, '')].map(Number);

    // Дополнительные числа
    const first = digits.reduce((sum, digit) => sum + digit, 0);
    const second = [...String(first)].reduce((sum, digit) => sum + Number(digit), 0);
    const third = first - 2 * (digits[0] || digits[1]);
    const fourth = [...String(Math.abs(third))].reduce((sum, digit) => sum + Number(digit), 0);
    const destiny = second >= 10 ? [...String(second)].reduce((sum, digit) => sum + Number(digit), 0) : second;

    // Функция подсчета чисел в массиве
    const countDigits = (digit) => digits.concat(
        [...String(first)], 
        [...String(second)], 
        [...String(third)], 
        [...String(fourth)]
    ).filter(d => +d === digit).length;

    // Значения квадратов
    const temperament = countDigits(3) + countDigits(5) + countDigits(7);
    const target = countDigits(1) + countDigits(4) + countDigits(7);
    const family = countDigits(2) + countDigits(5) + countDigits(8);
    const habits = countDigits(3) + countDigits(6) + countDigits(9);
    const life = countDigits(4) + countDigits(5) + countDigits(6);

    const character = countDigits(1);
    const health = countDigits(4);
    const luck = countDigits(7);
    const energy = countDigits(2);
    const logic = countDigits(5);
    const duty = countDigits(8);
    const interest = countDigits(3);
    const work = countDigits(6);
    const memory = countDigits(9);

    // Формируем HTML-вывод
    const firstSquare = `
        <div><div class="header">Доп. числа</div>${first}, ${second}, ${third}, ${fourth}</div>
        <div><div class="header">Число Судьбы</div>${destiny}</div>
        <div><div class="header">Темперамент</div>${temperament}</div>
        <div><div class="header">Цель</div>${target}</div>
        <div><div class="header">Семья</div>${family}</div>
        <div><div class="header">Привычки</div>${habits}</div>
        <div><div class="header">Быт</div>${life}</div>
    `;

    const secondSquare = `
        <div><div class="header">Характер</div>${character}</div>
        <div><div class="header">Здоровье</div>${health || '-'}</div>
        <div><div class="header">Удача</div>${luck || '-'}</div>
        <div><div class="header">Энергия</div>${energy}</div>
        <div><div class="header">Логика</div>${logic || '-'}</div>
        <div><div class="header">Долг</div>${duty || '-'}</div>
        <div><div class="header">Интерес</div>${interest}</div>
        <div><div class="header">Труд</div>${work || '-'}</div>
        <div><div class="header">Память</div>${memory}</div>
    `;

    result.innerHTML = firstSquare + secondSquare;
}
