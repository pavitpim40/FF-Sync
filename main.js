// DOM:INPUT : PAVIT
const priceInput = document.getElementById('product-price');
const quantityInput = document.getElementById('product-quantity');
const shippingInput = document.getElementById('product-shipping');

// DOM : SHOW RESULT
const errorBox = document.getElementById('error');
const resultBox = document.getElementById('result');

// DOM : Event Handler
const totalBtn = document.getElementById('total-btn');

// console.log(shippingInput);

// UTIL-FN 1
// "500","2","100" => [500,2,100]
const parseInput = (...inputs) => {
    return inputs.map((str) => Number(str));
};

// let r = parseInput('500', '2', '100', '600');
// console.log(r);

// 1,5,NaN => false
// 1,5,20 => true

// UTIL-FN-2
const validateInputs = (...inputs) => {
    return inputs.every((el) => typeof el === 'number' && !isNaN(el));
};

// let r = validateInputs(1, 5, '5');
// console.log(r);

//  Error
const hideError = () => {
    errorBox.classList.add('invisible');
    console.log('GG');
};
hideError();

const showError = () => {
    errorBox.classList.remove('invisible');
};

// Custom-Message
// inputs = ['200','2400','cc']
// numbers = [200,2400,NaN]
const showErrorMessage = (inputs, number) => {
    const fullErrorMsg = inputs.reduce((msg, str, index) => {
        if (validateInputs(number[index])) {
            // 200,2400,NaN
            msg += '';
        } else {
            msg += `${str} is not a number. `;
        }
        return msg;
    }, '');

    // console.log(fullErrorMsg);
    errorBox.innerText = fullErrorMsg;
    showError();
};

// calTotal
const calTotal = () => {
    hideError();

    // Parse Input
    const inputs = [priceInput.value, quantityInput.value, shippingInput.value];
    const numbers = parseInput(...inputs); // [1,2,4] , ...[1,2,4] == 1,2,4
    console.log(numbers);

    // Validate Input
    const valid = validateInputs(...numbers);

    // pass : caltotal
    // fail : show Error
    if (valid) {
        const [price, quantity, shipping] = numbers;
        const totalPrice = price * quantity + shipping;
        resultBox.innerText = totalPrice;
    } else {
        // showError();
        showErrorMessage(inputs, numbers);
    }
};
totalBtn.addEventListener('click', calTotal);
