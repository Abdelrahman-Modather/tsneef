function updateQuantity(button, change) {
    
    let quantityElement = button.parentElement.querySelector('.quantity-value');
    let quantity = parseInt(quantityElement.innerText) + change;
    if (quantity < 0) quantity = 0;
    quantityElement.innerText = quantity;
}

function calculatePrice() {
    let totalPrice = 0;
    document.querySelectorAll('.service-option').forEach(option => {
        if (option.checked) {
            let quantity = parseInt(option.parentElement.querySelector('.quantity-value').innerText);
            let pricePerUnit = parseInt(option.getAttribute('data-price'));
            totalPrice += quantity * pricePerUnit;
        }
    });
    document.getElementById("total-price").innerText = totalPrice;
}

document.querySelectorAll('.service-option').forEach(option => {
    option.addEventListener('change', function() {
        this.value = this.checked ? "checked" : "unchecked";
    });
});