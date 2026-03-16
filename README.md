# Laundry Service Booking Website
# About This Project

This is a simple laundry service website made for my web development assignment.
In this website users can see different laundry services, add them to the cart and book the service by filling the booking form.

The website also calculates the total price of selected services.
When the booking form is submitted, the booking details are sent using EmailJS.

# Features

- Show different laundry services

- User can add services to the cart

- User can remove services from the cart

- Total price is shown automatically

- Booking form

- Booking confirmation message

- EmailJS used to send booking details

# Project Files

- index.html
- style.css
- script.js
- README.md
- config.js

# How to Run This Project

- Download the project folder.

- Open the folder in VS Code.

- Open the index.html file in your browser.

- The website will start working.

# EmailJS Setup

1. Create an account on EmailJS website.

2. Create a service and template.

3. Copy the Service ID and Template ID.

4. Add them in the config.js file.

Example:

const CONFIG = {
SERVICE_ID: "your_service_id",
TEMPLATE_ID: "your_template_id",
PUBLIC_KEY: "your_public_key"
};

# Mobile Responsiveness

Basic mobile responsiveness is implemented using CSS media queries.
The layout adjusts for screens smaller than 768px.

# Environment Variables (Security Note)

In real production applications, EmailJS credentials should not be stored
directly in frontend code. They should be stored in environment variables
using backend frameworks like Node.js or serverless functions.

For this assignment, the credentials are stored in a separate config.js file
to avoid hardcoding them inside the main JavaScript logic.

## Deployment
[[Live Link: https://legendary-moxie-2b3b76.netlify.app
](https://bright-bombolone-125a13.netlify.app/)](https://shimmering-pony-df40d1.netlify.app/)

## What I Learned
From this project I learned:

- How to structure a website using HTML
- How to style a webpage using CSS
- How to create a simple cart system using JavaScript
- How to send booking details using EmailJS

For security, EmailJS credentials are stored in a separate config.js file.
In real production projects these values should be stored in environment variables (.env).


#### IMPORTANT
"Sir, as your feedback, I have moved credentials to config.js. For this assignment, I am keeping this file on GitHub so you can test the email functionality directly. In a real app, I would use .env files."
