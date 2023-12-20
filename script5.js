document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".addToCartBtn"); // Tüm "Sepete Ekle" butonlarını seç
    const cartList = document.getElementById("cartList"); // Sepet listesi
    const totalPrice = document.getElementById("totalPrice"); // Toplam fiyat

    const cart = {
        items: [],

        addToCart: function (name, price) {
            this.items.push({ name, price, quantity: 1 });
            this.updateCart();
        },

        updateCart: function () {
            // Sepet listesini güncelle
            this.renderCart();
            // Toplam fiyatı güncelle
            this.updateTotalPrice();
        },

        renderCart: function () {
            cartList.innerHTML = "";
            this.items.forEach(item => {
                const li = document.createElement("li");
                li.textContent = `${item.name} x ${item.quantity} - $${item.price * item.quantity}`;
                cartList.appendChild(li);
            });
        },

        updateTotalPrice: function () {
            const total = this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
            totalPrice.textContent = `Toplam: $${total.toFixed(2)}`;
        },
    };

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            const price = parseFloat(this.getAttribute("data-price"));
            cart.addToCart(name, price);
        });
    });
});