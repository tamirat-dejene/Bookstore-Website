
// Nav open close
const body = document.querySelector('body'),
      navMenu = body.querySelector('.menu-content'),
      navOpenBtn = body.querySelector('.navOpen-btn'),
      navCloseBtn = navMenu.querySelector('.navClose-btn');

if(navMenu && navOpenBtn){
  navOpenBtn.addEventListener("click", () =>{
    navMenu.classList.add("open");
    body.style.overflowY = "hidden";
  })
}

if(navMenu && navCloseBtn){
  navCloseBtn.addEventListener("click", () =>{
    navMenu.classList.remove("open");
    body.style.overflowY = "scroll";
  })
}

// Change header bg color
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  if(scrollY > 5){
    document.querySelector("header").classList.add("header-active");
  }else{
    document.querySelector("header").classList.remove("header-active");
  }
})
  
  
  
//   // Nav link indicator

  // const sections = document.querySelectorAll('section[id]');
  // sections.forEach(section =>{
  //   const sectionHeight = section.offsetHeight,
  //         sectionTop = section.offsetTop - 100;

  //         let navId = document.querySelector(`.menu-content a[href='#${section.id}']`);
  //         if(scrollY > sectionTop && scrollY <=  sectionTop + sectionHeight){
  //           navId.classList.add("active-navlink");           
  //         }else{
  //           navId.classList.remove("active-navlink");     
  //         }
  //         navId.addEventListener("click", () => {
  //           navMenu.classList.remove("open");
  //           body.style.overflowY = "scroll";
  //         })
  // });

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
  

  
//login and sign up

   
function validateForm(event) {
  event.preventDefault();

  var bookTitle = document.getElementById('bookTitle').value;
  var author = document.getElementById('author').value;
  var rating = document.getElementById('rating').value;
  var review = document.getElementById('review').value;

  if (bookTitle.trim() === '' || author.trim() === '' || rating.trim() === '' || review.trim() === '') {
    alert('All fields are required');
    return;
  }

  if (isNaN(rating) || rating < 1 || rating > 5) {
    alert('Rating must be a number between 1 and 5');
    return;
  }
  alert('Form submitted successfully!');
}  
 const wrapper = document.querySelector('.wrapper');
 const loginLink = document.querySelector('.login-link');
 const registerLink = document.querySelector('.register-link');
 const btnLogin= document.querySelector('.login-content');
 const iconClose = document.querySelector('.icon-close');
 const cover = document.querySelector(".coverer");

btnLogin.addEventListener('click', () => {
  wrapper.classList.add('active-popup')
  cover.classList.add("actvator");
  document.body.style.overflow = "hidden"
});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup')
  cover.classList.remove("actvator");
  document.body.style.overflow="scroll"
});
   registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active')
  });
  loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active')
  });



 

