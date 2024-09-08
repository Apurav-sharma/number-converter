function convert() {
    const inputNumber = document.getElementById('inputNumber').value;
    const fromSystem = document.getElementById('fromSystem').value;
    const toSystem = document.getElementById('toSystem').value;

    let decimalNumber;

    if (fromSystem === 'decimal') {
        decimalNumber = parseInt(inputNumber, 10);
    } else if (fromSystem === 'binary') {
        decimalNumber = parseInt(inputNumber, 2);
    } else if (fromSystem === 'hexadecimal') {
        decimalNumber = parseInt(inputNumber, 16);
    } else if (fromSystem === 'octal') {
        decimalNumber = parseInt(inputNumber, 8);
    }

    let result;

    if (toSystem === 'decimal') {
        result = decimalNumber.toString(10);
    } else if (toSystem === 'binary') {
        result = decimalNumber.toString(2);
    } else if (toSystem === 'hexadecimal') {
        result = decimalNumber.toString(16).toUpperCase();
    } else if (toSystem === 'octal') {
        result = decimalNumber.toString(8);
    }

    document.getElementById('resultOutput').innerText = result;
}