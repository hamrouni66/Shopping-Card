// ==========================
// 🎯 SÉLECTION DES ÉLÉMENTS
// ==========================
const plusBtns = document.querySelectorAll(".fa-plus-circle");
const minusBtns = document.querySelectorAll(".fa-minus-circle");
const deleteBtns = document.querySelectorAll(".fa-trash-alt");
const likeBtns = document.querySelectorAll(".fa-heart");
const totalPrice = document.querySelector(".total");
const cartCount = document.getElementById("cart-count");

// ==========================
// 💰 CALCUL DU TOTAL ET COMPTEUR PANIER
// ==========================
function calcTotal() {
  let total = 0;
  let totalItems = 0;

  const unitPrices = document.querySelectorAll(".unit-price");
  const quantities = document.querySelectorAll(".quantity");

  for (let i = 0; i < unitPrices.length; i++) {
    const price = parseFloat(unitPrices[i].textContent);
    const qty = parseInt(quantities[i].textContent);
    total += price * qty;
    totalItems += qty;
  }

  totalPrice.textContent = total + " $";
  cartCount.textContent = totalItems;
}

// ==========================
// ➕ AUGMENTER LA QUANTITÉ
// ==========================
plusBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const qty = btn.nextElementSibling; // le span .quantity
    qty.textContent = parseInt(qty.textContent) + 1;
    calcTotal();
  });
});

// ==========================
// ➖ DIMINUER LA QUANTITÉ
// ==========================
minusBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const qty = btn.previousElementSibling;
    if (parseInt(qty.textContent) > 0) {
      qty.textContent = parseInt(qty.textContent) - 1;
      calcTotal();
    }
  });
});

// ==========================
// 🗑 SUPPRIMER UN ARTICLE
// ==========================
deleteBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const product = btn.closest(".card-body");
    product.remove();
    calcTotal();
  });
});

// ==========================
// ❤️ AIMER / DÉSAIMER UN ARTICLE
// ==========================
likeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.classList.toggle("liked");
  });
});

// Calcul initial
calcTotal();
