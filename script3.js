document.addEventListener("DOMContentLoaded", function () { // Sayfa yüklendiğinde çalışacak fonksiyon
    const productList = document.getElementById("product-list"); // Ürün listesi
    const cart = document.getElementById("cart"); // Sepet

    // Dinamik ürün verileri
    const products = [
        { id: 1, name: "Ürün 1", price: 10 },
        { id: 2, name: "Ürün 2", price: 20 },
        { id: 3, name: "Ürün 3", price: 30 },
        // Ekstra ürünler eklenebilir
    ];

    // Sepet objesi
    const shoppingCart = {}; // Sepet objesi

    // Ürünleri listele
    products.forEach(product => { // Her ürün için
        const li = document.createElement("li");  // li elementi oluştur
        li.setAttribute("data-id", product.id);  // li elementine ürün id'si ata
        li.setAttribute("data-name", product.name); // li elementine ürün adı ata
        li.setAttribute("data-price", product.price); // li elementine ürün fiyatı ata
        li.textContent = `${product.name} - $${product.price}`; // li elementine ürün bilgilerini ekle

        li.addEventListener("click", addToCart); // li elementine tıklandığında alttaki sepete ekleme fonksiyonunu çalıştır
        productList.appendChild(li); // li elementini ürün listesine ekle
    });

    // Sepete ekleme fonksiyonu
    function addToCart(event) { // Sepete ekleme fonksiyonu
        const productId = event.target.getAttribute("data-id"); // Ürün id'si
        const productName = event.target.getAttribute("data-name"); // Ürün adı 
        const productPrice = parseFloat(event.target.getAttribute("data-price"));   // Ürün fiyatı

        if (!shoppingCart[productId]) { // Sepette ürün yoksa
            shoppingCart[productId] = { name: productName, price: productPrice, amount: 1 }; // Sepete ekle

            const cartItem = document.createElement("li");  // li elementi oluştur
            cartItem.setAttribute("data-id", productId);    // li elementine ürün id'si ata
            cartItem.textContent = `${productName} x 1 - $${productPrice}`; // li elementine ürün bilgilerini ekle
            cart.appendChild(cartItem); // li elementini sepete ekle
        } else {   // Sepette ürün varsa
            shoppingCart[productId].amount++; // Ürün adedini arttır
            const existingCartItem = cart.querySelector(`li[data-id="${productId}"]`); // Sepetteki ürünü bul
            existingCartItem.textContent = `${productName} x ${shoppingCart[productId].amount} - $${productPrice * shoppingCart[productId].amount}`; // Sepetteki ürünün bilgilerini güncelle
        }
    }
});
