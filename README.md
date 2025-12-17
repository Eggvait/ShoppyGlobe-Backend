ShoppyGlobe Backend API

GitHub Repository:
https://github.com/Eggvait/ShoppyGlobe-Backend

Description:
This project is the backend for the ShoppyGlobe E-commerce application built using Node.js, Express.js, and MongoDB. It provides REST APIs for product management, shopping cart operations, and user authentication using JWT.

How to use:
1. Run `npm install`
2. Create a `.env` file with:
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=shoppyglobe_secret_key
3. Start the server using `npx nodemon server.js`
4. Access the API at http://localhost:5000

Main APIs:
POST /register
POST /login
GET /products
GET /products/:id
POST /cart
PUT /cart/:id
DELETE /cart/:id

Testing:
All APIs were tested using Thunder Client. Screenshots are included in the repository.

Author:
Advait Namjoshi
