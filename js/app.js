function getPin() {
    const pin = generatePin();
    // const  pinString = pin + '';
    const pinString = pin.toString();

    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log('pin not 3 digit found', pin)
        return getPin();

    }

}


function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}



document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    // display pin

    displayPinfield = document.getElementById('display-pin');

    displayPinfield.value = pin;
})


document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    const previousTypedNumber = typedNumberField.value;

    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('')
            digits.pop();
            const remainningDigit = digits.join('');
            typedNumberField.value = remainningDigit;
        }
    }
    else {


        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinfield = document.getElementById('display-pin')
    const currentPin = displayPinfield.value;
    const typedNumberField = document.getElementById('typed-number');
    const typedNumber = typedNumberField.value;


    const pinSuccessMassage = document.getElementById('pin-success');
    const pinFailureMassage = document.getElementById('pin-failure');
    if (typedNumber === currentPin) {

        pinSuccessMassage.style.display = 'block';
        pinFailureMassage.style.display = 'none';
    } else {

        pinFailureMassage.style.display = 'block';
        pinSuccessMassage.style.display = 'none';
    }
})