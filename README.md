# Lo-Fi Cafe / Project #2: The Store

## Introduction and Motivation
This website is for the second project of my Software Engineering bootcamp at Per Scholas.

I chose to go with a lo-fi music theme because ever since I began the bootcamp, this is what I am usually listening to when I am studying or working on assignments. To me, it is the perfect background music for studying because it gives off a calming, relaxing vibe, and is not distracting. I imagined myself visitng a place like this that had a slow paced and relaxing ambiance where I could soak into a comfortable seat and just settle down for a bit after a long day. A place where I could enjoy a moment just to.. like my slogan says,"Savor the flavors and the sounds".

Link to **[YouTube Presentation Video](https://www.youtube.com/watch?v=v5zXvQLzxDg&ab_channel=LH)**
Link to **[Live Website](https://lo-fi-cafe.onrender.com/)**
 
## Cafe Tour - My 7 RESTful Routes (INDUCES)

### Default Features
All routes begin with a navigation bar at the top and the cafe's logo below it. Users can navigate to the Home, Menu or Create A New Meal page using the nav bar.

### Root Route (URL: /)
Landing on the homepage will automatically play a Lo-fi song that I thought was fitting for the page. The controls for the audio are below the logo with options to pause, play, seek and adjust the volume. In green text is the slogan for the cafe, followed by a welcome message to our guests. At the bottom of the page are images that can be used as buttons. The first is to view the Menu and the other is to Create a new item for our menu.

![Home Route](/public/images/home-route.png)

### Index Route (URL: /meals)
Clicking on the menu links will redirect you to the Index route. Here, users can browse through the available meal options. A name, price and image is displayed for each meal. These will all enlarge when the user hovers their cursor over an item, along with a border to help indicate which meal is being selected. Clicking on a a meal will redirect you to its show page.

![Home Route](/public/images/index-route.png)

### New Route (URL: /meals/new)
Clicking the Create A New Meal link on the nav bar will redirect users to the New route where a form will be displayed. To create, users must fill in the properties for the new meal and then click the Create Meal button. All parameters are required to be filled out in order to successfully create a new meal.

Required input types for each property:
- Name - String
- Quantity - Number
- Image URL - String
- Price - Number
- Description - String

![Home Route](/public/images/create-route.png)

### Create Route (URL: /meals)
Once the Create button is clicked, the user will be redirected to the menu page. If the meal was created successfully, it will be added to the database, and the new meal will now appear at the bottom of the menu.

### Show Route (URL: /meals/:id)
Clicking on a menu item will rediect users to its show page. All properties of the meal will be displayed along with three buttons. The buttons are for Buy, Edit and Delete. 

![Home Route](/public/images/show-route.png)

### Edit Route (URL: /meals/:id/edit)
Clicking the Edit button will redirect users to the meal's Edit page. A form will be displayed just like in the New route. But this time, the input boxes will be prefilled with the existing properties saved in the database. Users can make changes to the properties and then click the Submit Edits button. Once this is completed, the user will be redirected back to the meal's page, and the edited properties will be displayed. The database will also be updated with these edits.

![Home Route](/public/images/edit-route.png)

### Update Route (URL: /meals/:id)
Clicking the Buy button will update the meal's quantity by decrementing it by 1. It also redirects the user to the meal's show page which will now display the updated quantity. 

If the quantity remaining is ever less than 1, a SOLD OUT text will replace the quantity on the show page, and the Buy button will be removed.

![Home Route](/public/images/update-route.png)

### Destroy Route  (URL: /meals/:id)
Clicking the Delete button will remove the meal from both the menu and the database. The user will then be redirected to the menu/index page.

## Technologies Used
- JavaScript
- CSS
- HTML
- Node
- Express
- React
- MongoDB
- Visual Studio Code
- GitHub

## Acknowledgements and Resources
- My instructors Tishana Trainor and Kasper Kain
- My cohortmates Sharon Ogbonna and Cody Jennings
- Create a custom logo **[Looka](https://www.looka.com)**
- Inspiration for my nav bar **[YouTube Video](https://www.youtube.com/watch?v=ZotQNKyvZsw&t=191s)**
- Inspiration for my home page body **[www.thecafehollywood.com](https://www.thecafehollywood.com/)**
- How to use Flexbox **[YouTube Video](https://www.youtube.com/watch?v=QmZNFnqwu74&ab_channel=CemEygiMedia)**
- How to add audio using HTML **[YouTube Video](https://www.youtube.com/watch?v=9F49XgzlZgA&t=1s&ab_channel=GeekTutorials)**

## How to access this repo
**To fork:**
* Select the fork button in the upper right hand corner

**To clone:** 
* Open Git Bash and run the following in your terminal: `git clone https://github.com/SilverPrius/Store-App.git`

**Install necessary dependencies:**
* `npm init -y`
* `npm i`
* `npm i -g nodemon`

**Create .env file:**
* Create a .env file and link it to a MongoDB database

**Start app:**
* Run nodemon in the terminal and open the app using [Local Host 3000](http://localhost:3000)


























