function calculateMatrix() {
    const birthdateInput = document.getElementById("birthdate").value;
    if (!/^\d{8}$/.test(birthdateInput)) {
        alert("Введите дату рождения в формате ДДММГГГГ.");
        return;
    }

    const day = parseInt(birthdateInput.slice(0, 2));
    const month = parseInt(birthdateInput.slice(2, 4));
    const year = parseInt(birthdateInput.slice(4, 8));

    // First additional number
    const totalSum = [...birthdateInput].reduce((acc, digit) => acc + parseInt(digit), 0);

    // Additional numbers
    const first = totalSum;
    const second = [...String(first)].reduce((acc, digit) => acc + parseInt(digit), 0);
    const third = Math.abs(first - 2 * day);
    const fourth = [...String(third)].reduce((acc, digit) => acc + parseInt(digit), 0);

    // Destiny number
    let destiny = second;
    while (destiny > 9 && destiny !== 11) {
        destiny = [...String(destiny)].reduce((acc, digit) => acc + parseInt(digit), 0);
    }

    // Matrix
    const matrix = {
        "Характер": String(first).split('1').length - 1,
        "Здоровье": String(first).split('4').length - 1,
        "Удача": String(first).split('7').length - 1,
        "Цель": String(first).split('3').length - 1,
        "Энергия": String(first).split('2').length - 1,
        "Логика": String(first).split('5').length - 1,
        "Долг": String(first).split('8').length - 1,
        "Семья": String(first).split('6').length - 1,
        "Память": String(first).split('9').length - 1,
    };

    // External square
    const externalSquare = {
        "Темперамент": matrix["Энергия"] + matrix["Логика"] + matrix["Удача"],
        "Цель": matrix["Характер"] + matrix["Здоровье"] + matrix["Удача"],
        "Семья": matrix["Энергия"] + matrix["Логика"] + matrix["Долг"],
        "Привычки": matrix["Энергия"] + matrix["Память"] + matrix["Логика"],
        "Быт": matrix["Здоровье"] + matrix["Логика"] + matrix["Память"],
    };

    // Display results
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>Дополнительные числа</h3>
        <p>Первое: ${first}, Второе: ${second}, Третье: ${third}, Четвертое: ${fourth}, Число судьбы: ${destiny}</p>
        <h3>Матрица</h3>
        <table>
            ${Object.entries(matrix).map(([key, value]) => `<tr><td>${key}</td><td>${value}</td></tr>`).join('')}
        </table>
        <h3>Внешний квадрат</h3>
        <table>
            ${Object.entries(externalSquare).map(([key, value]) => `<tr><td>${key}</td><td>${value}</td></tr>`).join('')}
        </table>
    `;
}
