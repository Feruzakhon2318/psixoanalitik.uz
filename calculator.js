function calculate() {
    const birthdateInput = document.getElementById("birthdate").value;
    const birthdate = birthdateInput.replace(/\D/g, ""); // Удаляем точки и символы
    
    if (birthdate.length !== 8) {
        alert("Введите корректную дату рождения в формате ДД.ММ.ГГГГ");
        return;
    }

    const d1 = parseInt(birthdate[0]);
    const d2 = parseInt(birthdate[1]);
    const m1 = parseInt(birthdate[2]);
    const m2 = parseInt(birthdate[3]);
    const y1 = parseInt(birthdate[4]);
    const y2 = parseInt(birthdate[5]);
    const y3 = parseInt(birthdate[6]);
    const y4 = parseInt(birthdate[7]);

    // Дополнительные числа
    const firstNumber = d1 + d2 + m1 + m2 + y1 + y2 + y3 + y4;
    const secondNumber = Array.from(String(firstNumber), Number).reduce((a, b) => a + b);
    const thirdNumber = firstNumber - (d1 !== 0 ? 2 * d1 : 2 * d2);
    const fourthNumber = Array.from(String(Math.abs(thirdNumber)), Number).reduce((a, b) => a + b);

    // Число судьбы
    const destinyNumber = secondNumber === 11 ? 11 : Array.from(String(secondNumber), Number).reduce((a, b) => a + b);

    // Матрица
    const character = String(d1) + String(d2);
    const health = m1 ? String(m1) : "-";
    const luck = m2 ? String(m2) : "-";
    const energy = d1 + d2;
    const logic = m1 + m2;
    const debt = y1 + y2;
    const family = energy + logic + debt;
    const interest = d1 + m2;
    const labor = m1 + y1;
    const memory = d1 + d2 + m2;
    const habits = interest + labor + memory;
    const temperament = interest + logic + luck;
    const goal = character + health + luck;
    const household = health + logic + labor;

    // Вывод результата
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h2>Результат:</h2>
        <p><strong>Дополнительные числа:</strong> ${firstNumber}, ${secondNumber}, ${thirdNumber}, ${fourthNumber}</p>
        <p><strong>Число судьбы:</strong> ${destinyNumber}</p>
        <table>
            <tr>
                <th>Характер</th>
                <th>Здоровье</th>
                <th>Удача</th>
                <th>Цель</th>
            </tr>
            <tr>
                <td>${character}</td>
                <td>${health}</td>
                <td>${luck}</td>
                <td>${goal}</td>
            </tr>
            <tr>
                <th>Энергия</th>
                <th>Логика</th>
                <th>Долг</th>
                <th>Семья</th>
            </tr>
            <tr>
                <td>${energy}</td>
                <td>${logic}</td>
                <td>${debt}</td>
                <td>${family}</td>
            </tr>
            <tr>
                <th>Интерес</th>
                <th>Труд</th>
                <th>Память</th>
                <th>Привычки</th>
            </tr>
            <tr>
                <td>${interest}</td>
                <td>${labor}</td>
                <td>${memory}</td>
                <td>${habits}</td>
            </tr>
            <tr>
                <th>Быт</th>
                <th>Темперамент</th>
            </tr>
            <tr>
                <td>${household}</td>
                <td>${temperament}</td>
            </tr>
        </table>
    `;
}
