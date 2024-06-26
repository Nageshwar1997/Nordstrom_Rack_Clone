# Nordstrom_Rack_Clone

## Frontend Installation

### CRA - Create React App

`npx create-react-app frontend`

### Tailwind CSS

`npm install -D tailwindcss`
`npx tailwindcss init`

`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`

### React Router DOM

`npm install react-router-dom`

### React Icons

`npm install react-icons --save`

### Install Toast

`npm i react-toastify`

### Install React Redux Toolkit

`npm install @reduxjs/toolkit`

### Install React Redux

`npm i react-redux`

### Install MomentJS

`npm install moment --save`

### Install React Stripe JS

`npm install --save @stripe/react-stripe-js @stripe/stripe-js`

<!-- Backend Installation -->

## Backend Installation

### Install Backend

`npm init`

replace package.json with below text
`{
"name": "backend",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "node index.js",
"dev": "nodemon index.js"
},
"author": "",
"license": "ISC"
}`

### Install nodemon, express, cors, dotenv, mongoose

`npm i nodemon express cors dotenv mongoose`

### Install MongoDB

`npm install mongodb`

### Run Server
`npm run dev`

### Install bcrypt

`npm i bcryptjs`

### Install JSON Web Token

`npm i jsonwebtoken`

### Install Cookie-Parser

`npm i cookie-parser`

### Install Stripe

`npm install --save stripe`

<!-- backend folder paths

-backend
--configurations
---db.js
---stripe.js
--controllers
---order
----allOrders.controller.js
----order.controller.js
----paymentController.js
----webhook.js
---product
----filterProduct.js
----getCategoryProductOne.js
----getCategoryWiseProduct.js
----getProduct.js
----getProductDetails.js
----searchProduct.js
----updateProduct.js
----uploadProduct.js
---user
----addToCart.js
----addToCartView.js
----allUsers.js
----countAddToCart.js
----deleteFromCart.js
----updateCountAddToCart.js
----updateUser.js
----userDetails.js
----userLogout.js
----userSignIn.js
----userSignUp.js
--helpers
---permission.js
--middleware
---authToken.js
--models
---addToCartProductModel.js
---orderProductModel.js
---productModel.js
---userModel.js
--routes
---index.js
--.env
--index.js -->

<!--
frontend/
├── public/
│ ├── index.html
├── src/
│ ├── assets/
│ │ └── banner/
│ │ │ │ └── desktop/
│ │ │ │ └── mobile/
│ ├── common/
│ │ │ ├── index.js
│ │ │ └── role.js
│ ├── components/
│ │ ├── AdminEditProduct.jsx
│ │ ├── AdminProductCard.jsx
│ │ ├── BannerProduct.jsx
│ │ ├── CategoryList.jsx
│ │ ├── CategoryWiseProductDisplay.jsx
│ │ ├── ChangeUserRole.jsx
│ │ ├── DisplayImage.jsx
│ │ ├── Footer.jsx
│ │ ├── Header.jsx
│ │ ├── HorizontalCardProduct.jsx
│ │ ├── Logo.jsx
│ │ ├── RatingStarGenerator.jsx
│ │ ├── SearchProductCard.jsx
│ │ ├── UploadProduct.jsx
│ │ └── VerticalCardProduct.jsx
│ ├── context/
│ │ │ └── index.js
│ ├── helpers/
│ │ ├── addToCart.js
│ │ ├── displayCurrency.js
│ │ ├── fetchCategoryWiseProduct.js
│ │ ├── imageTobase64.js
│ │ ├── productCategory.js
│ │ ├── scrollTop.js
│ │ └── uploadImage.js
│ ├── pages/
│ │ ├── AdminAllOrders.jsx
│ │ ├── AdminPanel.jsx
│ │ ├── AllProducts.jsx
│ │ ├── AllUsers.jsx
│ │ ├── Cart.jsx
│ │ ├── ForgotPassword.jsx
│ │ ├── Home.jsx
│ │ ├── Login.jsx
│ │ ├── Orders.jsx
│ │ ├── PaymentCancel.jsx
│ │ ├── PaymentSuccess.jsx
│ │ ├── ProductDetails.jsx
│ │ ├── SearchProduct.jsx
│ │ ├── SignUp.jsx
│ │ └── SingleCategoryProducts.jsx
│ ├── routes/
│ │ └── index.js
│ ├── store/
│ │ ├── store.js
│ │ └── userSlice.js
│ ├── App.css
│ ├── App.js
│ ├── App.test.js
│ ├── index.css
│ ├── index.js
│ ├── reportWebVitals.js
│ └── setupTests.js
├── .env
├── package.json
├── tailwind.config.js
└── README.md
 -->
