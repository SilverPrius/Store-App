# Lo-Fi Cafe / Project #2: The Store

## Introduction and Motivation
This website is for the second project in my Software Engineering bootcamp at Per Scholas.

I chose to go with a lo-fi music theme because ever since I began the bootcamp, this is what I am usually listening to when I am studying or working on assignments. To me, it is the perfect background music for studying because it gives off a calming, relaxing vibe, and is not distracting. I imagined myself visitng a place like this that had a slow paced and relaxing ambiance where I could soak into a comfortable seat and just settle down for a bit after a long day. A place where I could enjoy a moment just to.. like my slogan says,"Savor the flavors and the sounds".
 
## Cafe Tour - My 7 RESTful Routes (INDUCES)

### Default Features
All routes begins with a navigation bar at the top and the cafe's logo below it. Users can navigate to the Home, Menu and Create A New Meal page using the nav bar. Clicking on the logo will also redirect you to the homepage.

### Home Route (URL: /)
Landing on the homepage will automatically play a Lo-fi song that I thought was fitting for the page. The controls for the audio are below the logo with options to pause, play, seek and adjust the volume. In green text is the slogan for the cafe followed by a welcome message to our guests. At the bottom of the page are images that can be used as buttons. The first is to view the Menu and the other is to Create a new item for our menu.

![Home Route](/public/images/home-route.png)

### Index Route (URL: /meals)
Clicking on the menu links will redirect you to the Index route. Here, users can browse through the available meal options. A name, price and photo is displayed for each meal. These will all enlarge when the user hovers their cursor over an item, along with a border to help indicate which meal is being selected. Clicking on a a meal will redirect you to its show page.

![Home Route](/public/images/show-route.png)

### New Route (URL: /meals/new)
Clicking the Create A New Meal link on the nav bar will redirect users to the New route. To create, users must fill in the properties for the new meal and then click the Create Meal button. All parameters are required to be filled out in order to successfully create a new meal.

Required input types for eat property:
- Name - String
- Quantity - Number
- Image URL - String
- Price - Number
- Description - String

![Home Route](/public/images/create-route.png)

## Create Route (URL: /meals)
Once the Create button is clicked, the user will be redirected to the menu page. If the meal was created successfully, it will be added to the database and the new meal will now appear at the bottom of the menu.


















