function img(anything){
    document.querySelector('.slide').src=anything;
}
function change(change){
    const line=document.querySelector('.home');
    line.addEventListener('click',function(){
    line.style.background=change      
    })
           
}

const shoppingCart = {};

    const addToCartButton = document.getElementById("addToCartBtn"); // "Sepete Ekle" butonunu seç

    addToCartButton.addEventListener("click", addToCart); // Butona tıklanınca addToCart fonksiyonunu çağır

    // Sepet objesi


    // Sepete ekleme fonksiyonu
    function addToCart() {
        const productName = document.querySelector(".right h3").textContent; // Ürün adını al
        const productPrice = parseFloat(document.querySelector(".right h4").textContent.replace("$", "")); // Ürün fiyatını al
        const productQuantity = parseInt(document.querySelector(".add label").textContent); // Ürün adedini al

        // Sepete ekleme işlemleri
        if (!shoppingCart[productName]) {
            shoppingCart[productName] = { price: productPrice, quantity: productQuantity };
            console.log(shoppingCart)
        } else {
            shoppingCart[productName].quantity += productQuantity;
        }

        // Sepet bilgilerini kullanarak başka işlemler yapabilirsiniz.
        // Örneğin, bir alışveriş sepeti sayfasına yönlendirme yapabilirsiniz.
        alert("Ürün sepete eklendi!");

        // Örnek: Sepet bilgilerini konsolda görüntülemek için:
        console.log(shoppingCart);
        
        // Örnek: Sepet nesnesini bir depolama alanına (localStorage) kaydetmek için:
        // localStorage.setItem("cart", JSON.stringify(shoppingCart));
    }
    document.addEventListener("DOMContentLoaded", function () {
        const addToCartButton = document.getElementById("addToCartBtn");
    
        addToCartButton.addEventListener("click", addToCart);
    
        function addToCart() {
            const productName = document.querySelector(".right h3").textContent;
            const productPrice = parseFloat(document.querySelector(".right h4").textContent.replace("$", ""));
            const productQuantity = parseInt(document.querySelector(".add label").textContent);
    
            const cartItem = {
                name: productName,
                price: productPrice,
                quantity: productQuantity,
            };
    
            // Sepete ekleme işlemleri
            addToCartPage(cartItem);
            
            // Örnek: Sepet bilgilerini bir depolama alanına (localStorage) kaydetmek için:
            // localStorage.setItem("cart", JSON.stringify(cartItem));
        }
    
        function addToCartPage(item) {
            const cartList = document.getElementById("cartList");
    
            const li = document.createElement("li");
            li.textContent = `${item.name} x ${item.quantity} - $${item.price * item.quantity}`;
            cartList.appendChild(li);
        }
    });
    
    