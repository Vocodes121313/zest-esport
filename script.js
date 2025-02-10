let cart = []; // مصفوفة لتخزين العناصر في السلة

// إضافة منتج إلى السلة
function addToCart(productName, productImage) {
    cart.push({ name: productName, image: productImage });
    updateCartCount();
    updateCartItems();
}

// تحديث عدد العناصر في السلة
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// تحديث محتويات السلة المعروضة
function updateCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name}</span>
            <button class="remove-btn" onclick="removeFromCart(${index})">X</button>
        `;
        cartItems.appendChild(li);
    });
}

// إزالة منتج من السلة
function removeFromCart(index) {
    cart.splice(index, 1); // حذف المنتج من المصفوفة
    updateCartCount();
    updateCartItems();
}

// إظهار وإخفاء السلة
function toggleCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.style.display = (cartDiv.style.display === 'none' || cartDiv.style.display === '') ? 'block' : 'none';
}

// إتمام عملية الشراء (يمكنك تخصيص هذه الوظيفة لاحقاً)
function checkout() {
    alert('تمت عملية الشراء بنجاح!');
    cart = []; // إفراغ السلة بعد الشراء
    updateCartCount();
    updateCartItems();
}



