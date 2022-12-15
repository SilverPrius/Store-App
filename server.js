require('dotenv').config()

// Dependencies
const mongoose = require("mongoose")
const Meals = require("./models/meals.js")
const methodOverride = require('method-override')

//Load express
const express = require('express')

// Global configuration -tell Mongoose where to connect with Mongo and have it connect with the sub-database tweets(if it doesn't exist, it will be created)
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection
//Create express app

const app = express()


//Set port
const port = 3000

// Connect to Mongo
mongoose.connect(mongoURI)
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"))
db.on("open", () => console.log("mongo connected: ", mongoURI))
db.on("close", () => console.log("mongo disconnected"))

//Set up middleware
app.use(methodOverride('_method'))

app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})

app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))//allows me to use css
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

mongoose.set('strictQuery', true)

//Setup jsx view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Setting up Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

// Index route = Show all records
app.get('/meals', (req, res) => {
    Meals.find({}, (error, allMeals) => {
        res.render('Index', {
            allMeals: allMeals // getting all meals from db to pass as props
        })
    })
})

app.get('/', (req, res) => {
        res.render('Home')
    })


//New - GET A FORM TO CREATE A NEW RECORD
app.get('/meals/new', (req, res) => {
    res.render('New')
})

//Delete - DELETE
app.delete('/meals/:id', (req, res) => {
    Meals.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/meals')//redirect back to meals index
    })
})

//Update - MODIFYING A RECORD
app.put('/meals/:id', (req, res) => {
    Meals.findByIdAndUpdate(req.params.id, req.body, (err, updatedMeals) => {
        console.log(updatedMeals)
        res.redirect(`/meals/${req.params.id}`) //redirecting to the SHOW page
    })
})


//Create - SEND THE FILLED FORM TO DATABASE AND CREATE A NEW RECORD
app.post('/meals', (req, res) => {
    let mealsBody = req.body
    mealsBody.img = mealsBody.name
    Meals.create(mealsBody, (error, createdMeals) => {
        res.redirect('/meals')
    })

})

//Edit - GO TO DATABASE AND GET THE RECORD TO UPDATE
app.get('/meals/:id/edit', (req, res) => {
    Meals.findById(req.params.id, (err, foundMeals) => { //find the meals
        if (!err) {
            res.render(
                'Edit',
                {
                    meals: foundMeals //pass in the found meals so we can prefill the form
                }
            )
        } else {
            res.send({ msg: err.message })
        }
    })
})


//Show route = SHOW ME A PARTICULAR RECORD
app.get('/meals/:indexOfMealssArray', function (req, res) {
    Meals.findById(req.params.indexOfMealssArray, (err, foundMeals) => {
        res.render('Show', {
            meals: foundMeals
        })
    })
})


app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})

