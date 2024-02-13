document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".cartbtn");
  const cartContainer = document.querySelector(".carter");
  const totalSumElement = document.querySelector(".total-sum");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const bookContainer = button.closest(".book");
      const existingBook = cartContainer.querySelector(`[data-id="${bookContainer.id}"]`);

      if (existingBook) {
       
        alert("This book is already in the cart!");
        return;
      }

      const image = bookContainer.querySelector("img").src;
      const title = bookContainer.querySelector(".title").textContent;
      const author = bookContainer.querySelector(".author").textContent;
      const price = parseFloat(bookContainer.querySelector(".cart h3 span").textContent);

      const cartItem = document.createElement("div");
      cartItem.classList.add("add");
      cartItem.dataset.id = bookContainer.id;
      cartItem.innerHTML = `
        <div class="first"> 
          <img src="${image}" alt="" class="cartpic">
          <div style="display: flex; flex-direction: column; justify-content: space-between; align-items: start; margin-left: 1rem;">
            <p>${title}</p>
            <p>Author: <span>${author}</span></p>
            <button class="remove">remove</button>
          </div>
        </div>
        <div>  
          <div class="quantityall">
            <button class="decrease">-</button>
            <input type="number" min="1" value="1" style="width: 30px; height: 20px;" class="quantity">
            <button class="increase">+</button>
          </div>
        </div>
        <div class="prices">
          <p class="price">price: <span>${price}</span>$</p>
        </div>
        <div>
          <p>total price: <span class="total">${price}</span>$</p>
        </div>
      `;

      cartContainer.appendChild(cartItem);

      // Attach event listener to the remove button
      const removeButton = cartItem.querySelector(".remove");
      removeButton.addEventListener("click", function () {
        cartItem.remove();
        updateCartTotal();
      });

      // Attach event listeners to quantity buttons
      const decreaseButton = cartItem.querySelector(".decrease");
      const increaseButton = cartItem.querySelector(".increase");
      const quantityInput = cartItem.querySelector(".quantity");

      decreaseButton.addEventListener("click", function () {
        updateQuantity(-1, quantityInput);
      });

      increaseButton.addEventListener("click", function () {
        updateQuantity(1, quantityInput);
      });

      quantityInput.addEventListener("input", function () {
        updateQuantity(0, quantityInput);
      });

      updateCartTotal();
    });
  });

  function updateQuantity(change, input) {
    let quantity = parseInt(input.value) + change;
    if (quantity < 1) {
      quantity = 1;
    }
    input.value = quantity;
    updateCartTotal();
  }

  function updateCartTotal() {
    const cartItems = document.querySelectorAll(".add");
    let totalSum = 0;

    cartItems.forEach((item) => {
      const quantity = parseInt(item.querySelector(".quantity").value);
      const price = parseFloat(item.querySelector(".price span").textContent);
      const total = quantity * price;
      item.querySelector(".total").textContent = total.toFixed(2);
      totalSum += total;
    });

    totalSumElement.textContent = "Total amount: "+totalSum.toFixed(2)+" $";
  }
});
