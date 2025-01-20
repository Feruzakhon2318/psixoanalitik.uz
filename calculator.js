function calculateNumerology() {
    const birthdate = document.getElementById('birthdate').value;
    const output = document.getElementById('output');

    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(birthdate)) {
        output.innerText = "Invalid format. Please use DD.MM.YYYY.";
        return;
    }

    const [day, month, year] = birthdate.split('.').map(Number);
    const digits = [...birthdate.replace(/\./g, '')].map(Number);

    // Calculate additional numbers
    const firstAdditional = digits.reduce((a, b) => a + b, 0);
    const secondAdditional = [...firstAdditional.toString()].reduce((a, b) => +a + +b, 0);
    const thirdAdditional = firstAdditional - 2 * (digits[0] || digits[1]);
    const fourthAdditional = [...Math.abs(thirdAdditional).toString()].reduce((a, b) => +a + +b, 0);

    // Destiny number
    const destinyNumber = secondAdditional >= 10 ? [...secondAdditional.toString()].reduce((a, b) => +a + +b, 0) : secondAdditional;

    // Helper function to count specific digits
    const countDigits = (digit) => [...digits, ...firstAdditional.toString(), ...secondAdditional.toString(), ...thirdAdditional.toString(), ...fourthAdditional.toString()]
        .filter((d) => +d === digit).length;

    // Calculations for the matrix
    const temperament = countDigits(3) + countDigits(5) + countDigits(7);
    const character = countDigits(1);
    const health = countDigits(4);
    const luck = countDigits(7);
    const target = character + health + luck;
    const energy = countDigits(2);
    const logic = countDigits(5);
    const duty = countDigits(8) || '-';
    const family = energy + logic + (duty !== '-' ? duty : 0);
    const interest = countDigits(3);
    const work = countDigits(6) || '-';
    const memory = countDigits(9);
    const habits = interest + (work !== '-' ? work : 0) + memory;
    const life = health + logic + (work !== '-' ? work : 0);

    // Output the results
    output.innerHTML = `
        <div class="numerology-grid">
            <div class="row">
                <div class="cell">Доп. числа:</div>
                <div class="cell">${firstAdditional}, ${secondAdditional}, ${thirdAdditional}, ${fourthAdditional}</div>
            </div>
            <div class="row">
                <div class="cell">Число судьбы:</div>
                <div class="cell">${destinyNumber}</div>
            </div>
            <table class="matrix">
                <tr>
                    <td>${character || '-'}</td>
                    <td>${health || '-'}</td>
                    <td>${luck || '-'}</td>
                    <td>${target || '-'}</td>
                </tr>
                <tr>
                    <td>${energy || '-'}</td>
                    <td>${logic || '-'}</td>
                    <td>${duty}</td>
                    <td>${family || '-'}</td>
                </tr>
                <tr>
                    <td>${interest || '-'}</td>
                    <td>${work}</td>
                    <td>${memory || '-'}</td>
                    <td>${habits || '-'}</td>
                </tr>
                <tr>
                    <td colspan="4">Быт: ${life || '-'}</td>
                </tr>
            </table>
        </div>
    `;
}
