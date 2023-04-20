// const q = document.getElementById('error');
// console.log(q);
import { ComponentService } from '../services/component.service';
import { ErrorService } from '../services/error.service';
import { parseInput } from '../utils/parse-inputs';
import { validateInputs } from '../utils/validate-inputs';

export const app = () => {
    const componentService = new ComponentService();
    const errorService = new ErrorService();

    errorService.hideError(); //*** */

    // ฟังก์ชันที่ใช้คำนวนนราคา
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

    // object.method(callback)
    componentService.onClick(calTotal); //*** */
};

// app();
