const app = () => {
    const componentService = new ComponentService();
    const errorService = new ErrorService();

    errorService.hideError(); //*** */

    const calTotal = () => {
        errorService.hideError();
        const inputs = componentService.getInputs(); //*** */ ได้ array ของ input
        const numbers = parseInput(...inputs); // [1,2,4] , ...[1,2,4] == 1,2,4
        const valid = validateInputs(...numbers);

        if (valid) {
            const [price, quantity, shipping] = numbers;
            const totalPrice = price * quantity + shipping;
            componentService.showPrice(totalPrice); // Display ราคา
        } else {
            errorService.showErrorMessage(inputs, numbers); //*** */
        }
    };

    componentService.onClick(calTotal); //*** */
};

app();
