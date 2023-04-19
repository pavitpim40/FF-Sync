const componentService = new ComponentService();
const errorService = new ErrorService();

const calTotal = () => {
    errorService.hideError();
    const inputs = componentService.getInputs();
    const numbers = parseInput(...inputs); // [1,2,4] , ...[1,2,4] == 1,2,4
    const valid = validateInputs(...numbers);

    if (valid) {
        const [price, quantity, shipping] = numbers;
        const totalPrice = price * quantity + shipping;
        componentService.showPrice(totalPrice);
    } else {
        errorService.showErrorMessage(inputs, numbers);
    }
};
// totalBtn.addEventListener('click', calTotal);
componentService.onClick(calTotal);
