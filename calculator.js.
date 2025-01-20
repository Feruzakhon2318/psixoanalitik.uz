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

  // Результаты
  resultDiv.innerHTML = `
    <p><strong>Дата рождения:</strong> ${input}</p>
    <p><strong>Первое доп. число:</strong> ${PDC}</p>
    <p><strong>Второе доп. число:</strong> ${SDC}</p>
    <p><strong>Третье доп. число:</strong> ${TDC}</p>
    <p><strong>Четвёртое доп. число:</strong> ${FDC}</p>
    <p><strong>Число судьбы:</strong> ${destinyNumber}</p>
  `;
}
