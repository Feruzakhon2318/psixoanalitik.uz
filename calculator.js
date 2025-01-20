function formatDate() {
  const input = document.getElementById('birthdate');
  const value = input.value.replace(/\D/g, ''); // Удаляем всё, кроме цифр
  const formattedValue = value
    .replace(/^(\d{2})(\d{2})(\d{4})$/, '$1.$2.$3') // Автоматически добавляем точки
    .substring(0, 10); // Ограничиваем длину
  input.value = formattedValue;
}

function calculateMatrix() {
  const input = document.getElementById('birthdate').value;
  const resultDiv = document.getElementById('result');

  // Проверка формата даты
  const regex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
  const match = input.match(regex);

  if (!match) {
    resultDiv.innerHTML = '<p style="color: red;">Введите дату в формате дд.мм.гггг</p>';
    return;
  }

  const [_, day, month, year] = match.map(Number);

  // Функция для суммы цифр
  const sumDigits = (num) => num.toString().split('').reduce((a, b) => a + Number(b), 0);

  // Расчёты
  const PDC = sumDigits(day) + sumDigits(month) + sumDigits(year); // Первое доп. число
  const SDC = sumDigits(PDC); // Второе доп. число
  const TDC = PDC - 2 * (day.toString()[0] === '0' ? Number(day.toString()[1]) : Number(day.toString()[0])); // Третье доп. число
  const FDC = sumDigits(Math.abs(TDC)); // Четвёртое доп. число
  const destinyNumber = sumDigits(SDC) === 11 ? 11 : sumDigits(SDC); // Число судьбы

  // Пример таблицы с результатами
  resultDiv.innerHTML = `
    <p><strong>Дата рождения:</strong> ${input}</p>
    <table>
      <tr>
        <th>Доп. числа</th>
        <td>${PDC}, ${SDC}, ${TDC}, ${FDC}</td>
      </tr>
      <tr>
        <th>Число судьбы</th>
        <td>${destinyNumber}</td>
      </tr>
      <tr>
        <th>Характер</th>
        <td>11</td>
      </tr>
      <tr>
        <th>Здоровье</th>
        <td>—</td>
      </tr>
      <tr>
        <th>Удача</th>
        <td>7</td>
      </tr>
      <tr>
        <th>Энергия</th>
        <td>2222</td>
      </tr>
      <!-- Добавьте свои расчёты сюда -->
    </table>
  `;
}
