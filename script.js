document.addEventListener("DOMContentLoaded", function () {

//    EmailJS start
    emailjs.init(CONFIG.PUBLIC_KEY);

    let cart = [];
   
    const buttons = document.querySelectorAll(".toggle-btn");
    const cartContainer = document.getElementById("cart-items-container");
    const totalDisplay = document.getElementById("totalDisplay");
    const form = document.getElementById("booking-form-element");
    const message = document.getElementById("confirmationMessage");
    const bookBtn = document.getElementById("bookServiceBtn");
    const newsletterForm = document.getElementById("newsletterForm");
    const newsletterMsg = document.getElementById("newsletterMsg");


/* Scroll to booking section */
    bookBtn.addEventListener("click", function () {

        document.querySelector(".booking-section").scrollIntoView({
            behavior: "smooth"
        });

    });


    /* ADD OR REMOVE SERVICE */

    buttons.forEach(function (btn) {

        btn.addEventListener("click", function () {

            let item = btn.closest(".service-item");

            let name = item.getAttribute("data-name");
            let price = parseInt(item.getAttribute("data-price"), 10);

            if (btn.classList.contains("added")) {

                // remove item from cart
                let newCart = [];

                cart.forEach(function(service){
                    if(service.name !== name){
                        newCart.push(service);
                    }
                });
 
                cart = newCart;
                btn.innerText = "Add Item ⊕";
                btn.classList.remove("added");

            }else {

        // add item to cart
        cart.push({
            name: name,
            price: price
        });

        btn.innerText = "Remove Item";
        btn.classList.add("added");

    }
    updateCart();
});

});

/* UPDATE CART */ 
function updateCart(){

    cartContainer.innerHTML = "";
    
    let total = 0;
    
    if (cart.length === 0) {
        
        cartContainer.innerHTML = 
        "<div class='no-items'><p>ⓘ No Items Added</p></div>";
        
        totalDisplay.innerText = "₹0.00";
         return; 
        }
        
        cart.forEach(function (item, index) { 
            
            total += item.price; 
            let row = document.createElement("div"); 
            
            row.style.display = "flex"; 
            row.style.justifyContent = "space-between"; 
            row.style.padding = "6px 0"; 
            row.style.borderBottom = "1px dashed #ddd"; 
            row.innerHTML = `
    <span style="width:20%">${index + 1}</span>
    <span style="width:60%">${item.name}</span>
    <span style="width:20%; text-align:right;">₹${item.price}.00</span>
    `;
            
            cartContainer.appendChild(row); 
            
        }); 
            
            totalDisplay.innerText = "₹" + total + ".00"
            ; 
    }

    /* NEWSLETTER FORM */

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", function (e) {

            e.preventDefault();

            newsletterMsg.innerText = "Thank you for subscribing!";
            newsletterMsg.style.color = "green";

            newsletterForm.reset();

            setTimeout(function () {
                newsletterMsg.innerText = "";
            }, 1500);

        });

    }


    /* BOOKING FORM */

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let name = document.getElementById("fullName").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();

        // Form validation

        if (name === ""){
            alert("Please enter your name");
            return;
        }

        if (!email.includes("@")){
            alert("Please enter a valid email");
            return;
        }

        if (phone.length !== 10){
            alert("Please enter a valid 10 digit phone number");
            return;
        }

        if (cart.length === 0){
            alert("Please add at least one service");
            return;
        }

        
        message.innerHTML = "Booking successful! A confirmation email will be sent shortly.";
        message.style.color = "green";

        /* EMAIL PARAMETERS */

       let total = 0;

       cart.forEach(function(item){
        total = total + item.price;
       });

       let cartList = "";
       cart.forEach(function(item){
        cartList += item.name + " (₹" + item.price + "),";
       });
       
       const parms = {
        cart: cartList,
        total: total,
        name: name,
        email: email,
    };

        /* SEND EMAIL */

        emailjs.send(CONFIG.SERVICE_ID, CONFIG.TEMPLATE_ID, parms)

            .then(function () {
                console.log("Email sent successfully");
            })

            .catch(function () {
                message.innerHTML = "Booking saved but email could not be sent.";
            });


        /* RESET AFTER BOOKING */

        setTimeout(function () {

            cart = [];
            updateCart();

            form.reset();

            buttons.forEach(function (btn) {
                btn.innerText = "Add Item ⊕";
                btn.classList.remove("added");
            });

            message.innerHTML = "";

        }, 3000);

    });

});
