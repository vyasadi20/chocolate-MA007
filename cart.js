// Get all elements with the class "add-to-cart-btn"
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

// Function that is executed when an "Add to Cart" button is clicked
const addToCart = (e) => {
  // Find the parent element of the clicked button (a div with class "chocolate-card")
  const chocolateCard = e.target.parentElement;
  
  // Extract the name of the chocolate from the h3 element within the chocolate card
  const chocolateName = chocolateCard.querySelector("h3").textContent;

  // Push the chocolate name into the dataLayer
  dataLayer.push({
    event: "addToCart",
    ecommerce: {
      transaction_name: chocolateName,
    },
  });

  // Optionally, you can perform additional actions here, such as updating the UI
  
  alert(`Added ${chocolateName} to the cart`);
};


console.log("Added to cart:", chocolateName);

// Loop through each "Add to Cart" button and attach the event listener
addToCartButtons.forEach(button => {
  button.addEventListener("click", addToCart);
});
