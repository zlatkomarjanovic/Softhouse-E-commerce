# Getting Started

### Instructions

Requirements:
-node.js installed on your computer

# How to run:

- git clone this repo
- change the directory to "ecommerce"
- npm install (This installs all the dependencies)
- npm start (Runs the app in the localhost://3000)

# If you run into some issues try this :

- Delete package-lock.json
- Delete node_modules file
- Run npm install
- Run npm start

# NOTES :

- If you are running windows 11 then you might have too high version of node.js. This issue recently happened on one of my projects and it broke my dependencies.

- I am aware that I should put my api keys in the environment variables folder but I didn't do this for the sake of testing this software.
  If I didn't do this then you would have to sign-up and get your own API key and that would be too much hassle for an internship task.

-This project is made using 2 different api sources :

- Stripe.js - For payment processing
- Commerce.js - For backend and products upgrading
- React.js - JavaScript library/framework

Stripe.js is using sandboxed api key, which means that you should type in "42" repeatedly in a credit card field. Stripe recognizes this card as a testing card and no money will actually be processed. This web-app can be easily scaled because it's made with commerce.js API. What I would do is translate it into a next.js project because building production level apps is better with this framework.

Commerce.js is an amazing e-commerce API and it allows us to manipulate that through the brwoser. I will demonstrate this live.

I am using react-router-dom for routing.
