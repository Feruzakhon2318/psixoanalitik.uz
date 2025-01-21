function calculate() {
    const birthdate = document.getElementById('birthdate').value;
    const outputGrid = document.getElementById('output-grid');
    outputGrid.innerHTML = ""; // Clear previous results

    // Validate input
    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(birthdate)) {
        alert("Введите дату в формате ДД.ММ.ГГГГ");
        return;
    }

    const [day, month, year] = birthdate.split('.').map(Number);
    const allDigits = [...birthdate.replace(/\./g, '')].map(Number);

    // Calculate additional numbers
    const firstAdd = allDigits.reduce((sum, digit) => sum + digit, 0);
    const secondAdd = [...String(firstAdd)].reduce((sum, digit) => sum + Number(digit), 0);
    const thirdAdd = firstAdd - 2 * (day > 9 ? Math.floor(day / 10) : day);
    const fourthAdd = [...String(Math.abs(thirdAdd))].reduce((sum, digit) => sum + Number(digit), 0);

    // Destiny number
    const destiny = secondAdd < 10 ? secondAdd : [...String(secondAdd)].reduce((sum, digit) => sum + Number(digit), 0);

    // Helper function to count occurrences of a digit
    const countDigit = (digit) => allDigits.filter((d) => d === digit).length;

    // Sectors
    const character = countDigit(1);
    const health = countDigit(4);
    const luck = countDigit(7);
    const energy = countDigit(2);
    const logic = countDigit(5);
    const duty = countDigit(8);
    const interest = countDigit(3);
    const work = countDigit(6);
    const memory = countDigit(9);

    const temperament = interest + logic + luck;
    const target = character + health + luck;
    const family = energy + logic + duty;
    const habits = interest + work + memory;
    const life = health + logic + work;

    // Display results
    const results = {
        "Доп. числа": `${firstAdd}, ${secondAdd}, ${thirdAdd}, ${fourthAdd}`,
        "Число Судьбы": destiny,
        "Темперамент": temperament,
        "Цель": target,
        "Семья": family,
        "Привычки": habits,
        "Быт": life,
        "Характер": character,
        "Здоровье": health,
        "Удача": luck,
        "Энергия": energy,
        "Логика": logic,
        "Долг": duty || "-",
        "Интерес": interest,
        "Труд": work || "-",
        "Память": memory,
    };

    Object.entries(results).forEach(([key, value]) => {
        const div = document.createElement('div');
        div.innerHTML = `<div class="title">${key}</div><div>${value}</div>`;
        outputGrid.appendChild(div);
    });
}
