# Amazona: An Ecommerce Website Like Amazon

This project build an ecommerce website like amazon by MERN stack.

## Run Locally

```shell
$ git clone https://github.com/basir/amazona
# frontend
$ cd amazona/frontend
$ npm install && npm start
# backend (new terminal in amazona folder)
$ npm install && npm start
```

## Table of content

1. Introduction to this course
   1. what you will build
   2. what you will learn
   3. who are audiences
2. Install Tools
   1. Code Editor
   2. Web Browser
   3. VS Code Extension
3. Website Template
   1. Create amazona folder
   2. create template folder
   3. create index.html
   4. add default HTML code
   5. link to style.css
   6. create header, main and footer
   7. style elements
4. Publish Project To Github
   1. Initialize git repository
   2. Commit changes
   3. Create github account
   4. Create repo on github
   5. connect local repo to github repo
   6. push changes to github
5. Create React App
   1. npx create-react-app frontend
   2. npm start
   3. Remove unused files
   4. copy index.html content to App.js
   5. copy style.css content to index.css
   6. replace class with className
6. Use React Router Dom
   1. npm install react-router-dom
   2. define Route
   3. Create Home Screen
   4. Create Product Screen
7. List Products on Home Screen
   1. create data.js
   2. put 6 products there
   3. copy product images to images folder
   4. map data.products to jsx in HomeScreen
   5. create Product.js component
   6. update style to products
8. Create Rating Component
   1. create components/Rating.js
   2. link to fontawesome.css in index.html
   3. create div.rating
   4. define Rating object with render()
   5. if !props.value return empty div
   6. else use fa fa-star, fa-star-half-o and fa-star-o
   7. last span for props.text || ''
   8. style div.rating, span and last span
   9. Edit Product component
   10. Use Rating component
9. Add Sidebar Menu
   1. create aside element
   2. put product categories
10. Create Product Details Screen
    1. Create 3 columns for product
    2. column 1 for image
    3. column 2 product information
    4. column 3 from add to cart button
    5. Add style
