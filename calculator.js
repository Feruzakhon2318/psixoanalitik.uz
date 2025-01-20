function calculateNumerology() {
    const birthdate = document.getElementById('birthdate').value;
    const output = document.getElementById('output');

    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(birthdate)) {
        output.innerText = "Invalid format. Please use DD.MM.YYYY.";
        return;
    }

    const [day, month, year] = birthdate.split('.').map(Number);
    const digits = [...birthdate.replace(/\./g, '')].map(Number);

    // First additional number
    const firstAdditional = digits.reduce((a, b) => a + b, 0);

    // Second additional number
    const secondAdditional = [...firstAdditional.toString()].reduce((a, b) => +a + +b, 0);

    // Third additional number
    const thirdAdditional = firstAdditional - 2 * (digits[0] || digits[1]);

    // Fourth additional number
    const fourthAdditional = [...Math.abs(thirdAdditional).toString()].reduce((a, b) => +a + +b, 0);

    // Destiny number
    const destinyNumber = secondAdditional >= 10 ? [...secondAdditional.toString()].reduce((a, b) => +a + +b, 0) : secondAdditional;

    // Helper function to count specific digits
    const countDigit = (num) => digits.filter((d) => d === num).length;

    // Calculations for the matrix
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

    output.innerHTML = `
        <strong>Additional Numbers:</strong> ${firstAdditional}, ${secondAdditional}, ${thirdAdditional}, ${fourthAdditional}<br>
        <strong>Destiny Number:</strong> ${destinyNumber}<br>
        <strong>Temperament:</strong> ${temperament}<br>
        <strong>Character:</strong> ${character}<br>
        <strong>Health:</strong> ${health}<br>
        <strong>Luck:</strong> ${luck}<br>
        <strong>Target:</strong> ${target}<br>
        <strong>Energy:</strong> ${energy}<br>
        <strong>Logic:</strong> ${logic}<br>
        <strong>Duty:</strong> ${duty}<br>
        <strong>Family:</strong> ${family}<br>
        <strong>Interest:</strong> ${interest}<br>
        <strong>Work:</strong> ${work}<br>
        <strong>Memory:</strong> ${memory}<br>
        <strong>Habits:</strong> ${habits}<br>
        <strong>Life:</strong> ${life}<br>
    `;
}
