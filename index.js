const mongoose = require("mongoose");
const Recipe = require("./models/Recipe.model"); // Import of the model Recipe from './models/Recipe.model.js'
const data = require("./data.js"); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect("mongodb://localhost:27017/recipe-app-dev", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error("Error connecting to mongo", err));

//iteration 2 - Creates one single recipe
// Recipe.create({
//   title: "Beef Carnitas",
//   level: "UltraPro Chef",
//   ingredients: [
//     "3 1/2 pounds boneless beef shoulder, cut into large pieces",
//     "1 tablespoon freshly ground black pepper",
//     "1 tablespoon kosher salt, or more to taste",
//     "2 tablespoons vegetable oil",
//     "2 bay leaves",
//     "2 teaspoons ground cumin",
//     "1 teaspoon dried oregano",
//     "1/4 teaspoon cayenne pepper",
//     "1 orange, juiced and zested"
//   ],
//   cuisine: "American",
//   dishType: "Dish",
//   image: "https://images.media-allrecipes.com/userphotos/720x405/2280918.jpg",
//   duration: 160,
//   creator: "Chef John"
// });

// iteration 3 - Copies all recipes in Database
// Recipe.insertMany(data, function(error,docs) {});

/// Iteration 3.2 - instert all data
// Recipe.create(data)
//   .then(Recipe => console.log("The Recipe is saved and its value is: ", Recipe))
//   .catch(err =>
//     console.log("An error happened while saving a new Recipe:", err)
//   );

/// Iteration 4 - update Data from db
// Recipe.updateOne({ title: "Rigatoni alla Genovese" }, { duration: 89 })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

/// Iteration 5 - delete Data from db
/// Iteration 6 - close Database
Recipe.deleteOne({ title: "Carrot Cake" })
  .then(result => {
    console.log("sucessful" + result);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
