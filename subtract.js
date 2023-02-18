function subtract() {
    const firstInput = document.getElementById('firstNumber').value
    const secondInput = document.getElementById('secondNumber').value

    const results = document.getElementById('result')

    results.textContent = Number(firstInput) - Number(secondInput)

}

