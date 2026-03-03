// 1) Use npm to install ejs in the terminal


// 2) create a views and a public folder



// 3) In your public folder create an index.html and add your code from the planning document 
// You can also add your CSS files here too if applicable 




// 4) Now in your views folder create your EJS file and add your HTML code from your planning document



const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})


// 5) Paste in your data array of objects from the planning documents here. 
const data = 
{
    "appName": "FlavorShare",
  "users": [
    {
      "id": 1,
      "username": "chefLorenzo",
      "email": "lorenzo@example.com"
    }
  ],
  "recipes": [
    {
      "id": 101,
      "title": "Classic Margherita Pizza",
      "ingredients": [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella",
        "Basil leaves",
        "Olive oil"
      ],
      "instructions": "Spread sauce on dough, add cheese, bake at 475°F for 12 minutes, top with basil and olive oil.",
      "authorId": 1
    }
  ],
  "categories": [
    "Italian",
    "Dessert",
    "Vegan",
    "Quick Meals",
    "Gluten-Free"
  ],
  "reviews": [
    {
      "id": 5001,
      "recipeId": 101,
      "userId": 1,
      "rating": 5,
      "comment": "Simple and delicious!"
    }
  ]
}


// 6) Add static file middleware here
app.use(express.static(__dirname + '/public'))

// 7) Set the view engine to ejs here
app.set('view engine', 'ejs')

// 8) Create a route handler to path / and send your index.html 
// run your server with node index.js to test it
app.get("/" , (req, res) => {
  res.render('index.html', data)
})


// 9) Create a route handler to your overview route from your planning document
// Pass in your data array
app.get("/overview" , (req, res) => {
res.render('recipe.ejs', data)
})



// 10) Go to your EJS file and turn the HTML into EJS
// Test and run your server then submit if working (git add . git commit -m 'message' git push)


app.listen(3000, ()=> {
    console.log("Server Started")
})