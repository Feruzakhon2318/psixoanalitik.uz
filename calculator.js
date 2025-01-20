function calculateNumerology() {
    const birthdate = document.getElementById('birthdate').value;
    const output = document.getElementById('output');

    // Проверка формата ввода
    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(birthdate)) {
        output.innerHTML = "<div>Неправильный формат. Используйте ДД.ММ.ГГГГ.</div>";
        return;
    }

    const [day, month, year] = birthdate.split('.').map(Number);
    const digits = [...birthdate.replace(/\./g, '')].map(Number);

    // 1. Первое дополнительное число
    const firstAdditional = digits.reduce((a, b) => a + b, 0);

    // 2. Второе дополнительное число
    const secondAdditional = [...firstAdditional.toString()].reduce((a, b) => +a + +b, 0);

    // 3. Третье дополнительное число
    const thirdAdditional = firstAdditional - 2 * (digits[0] || digits[1]);

    // 4. Четвертое дополнительное число
    const fourthAdditional = [...Math.abs(thirdAdditional).toString()].reduce((a, b) => +a + +b, 0);

    // Число судьбы
    const destinyNumber = secondAdditional >= 10
        ? [...secondAdditional.toString()].reduce((a, b) => +a + +b, 0)
        : secondAdditional;

    // Подсчет количества определенных цифр
    const countDigit = (num) => digits.filter((d) => d === num).length;

    // Расчет всех значений
    const temperament = countDigit(3) + countDigit(5) + countDigit(7);
    const character = countDigit(1);
    const health = countDigit(4);
    const luck = countDigit(7);
    const target = character + health + luck;
    const energy = countDigit(2);
    const logic = countDigit(5);
    const duty = countDigit(8);
    const family = energy + logic + duty;
    const interest = countDigit(3);
    const work = countDigit(6);
    const memory = countDigit(9);
    const habits = interest + work + memory;
    const life = health + logic + work;

    // Генерация сетки с результатами
    output.innerHTML = `
        <div class="sector">Доп. числа<br><strong>${firstAdditional}, ${secondAdditional}, ${thirdAdditional}, ${fourthAdditional}</strong></div>
        <div class="sector">Число судьбы<br><strong>${destinyNumber}</strong></div>
        <div class="sector">Темперамент<br><strong>${temperament}</strong></div>
        <div class="sector">Характер<br><strong>${character}</strong></div>
        <div class="sector">Здоровье<br><strong>${health || '-'}</strong></div>
        <div class="sector">Удача<br><strong>${luck || '-'}</strong></div>
        <div class="sector">Цель<br><strong>${target}</strong></div>
        <div class="sector">Энергия<br><strong>${energy}</strong></div>
        <div class="sector">Логика<br><strong>${logic || '-'}</strong></div>
        <div class="sector">Долг<br><strong>${duty || '-'}</strong></div>
        <div class="sector">Семья<br><strong>${family}</strong></div>
        <div class="sector">Интерес<br><strong>${interest}</strong></div>
        <div class="sector">Труд<br><strong>${work || '-'}</strong></div>
        <div class="sector">Память<br><strong>${memory}</strong></div>
        <div class="sector">Привычки<br><strong>${habits}</strong></div>
        <div class="sector">Быт<br><strong>${life}</strong></div>
    `;
}
