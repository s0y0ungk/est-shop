import { readCart, updateCartCount } from "./utils/common.js";

updateCartCount();
const cart = readCart();
console.log(cart);

const cartList = document.querySelector(".cart-list");
const cartItems = cart;

function renderCart() {
  if (!cartList) return;

  if (!cartItems.length) {
    cartList.innerHTML = `<p>장바구니가 비어있습니다.</p>`;
    return;
  }

  cartList.innerHTML = cartItems.map(item => `
    <article class="cart-item">
      <div class="cart-thumb">
        <img src="${item.thumb}" alt="${item.title}" />
      </div>

      <div class="cart-item-info">
        <h2>${item.title}</h2>
        <p>${item.brand || ""}</p>
        <strong>${item.qty}개</strong>
      </div>

      <div class="quantity-box">
        <button type="button">-</button>
        <span>${item.qty}</span>
        <button type="button">+</button>
      </div>

      <button type="button" class="remove-item"></button>
    </article>
  `).join("");
}

renderCart();