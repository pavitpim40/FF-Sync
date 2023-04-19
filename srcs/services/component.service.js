// Class => Generate Object

class ComponentService {
    constructor() {
        this.priceInput = document.getElementById('product-price');
        this.quantityInput = document.getElementById('product-quantity');
        this.shippingInput = document.getElementById('product-shipping');
        this.resultBox = document.getElementById('result');
        this.totalBtn = document.getElementById('total-btn');
    }

    getInputs() {
        let price = this.priceInput.value;
        let quantity = this.quantityInput.value;
        let shipping = this.shippingInput.value;
        return [price, quantity, shipping];
    }

    showPrice(price) {
        this.resultBox.innerText = price;
    }

    onClick(callback) {
        // ให้คนเรียกใช้ onClick ส่งฟังก์ชันมา
        // เอาฟังก์ชันนั้นไปผูกติดกับปุ่มให้
        this.totalBtn.addEventListener('click', callback);
    }
}

// const myComponet = new ComponentService()
