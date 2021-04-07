# Fact_DR_assignment
Headless APIs in nodejs

## PROJECT EXECUTION SETUP
1) git clone the project from the repository online 
(link - https://github.com/supro99/Fact_Dr2)
2) Enter your MongoDB database connection string in config(folder) > config.js(file) > database_url(variable)
3) To get required module to run the project > npm install (if failed to execute, try -> sudo npm install)
4) To start the nodejs server > npm start

	

## DATABASE ARCHITECTURE
1) Mongodb is used to store the data of blogs.

2) Only one database is created, named as - 'fact-dr-db-2'

3) This DB has one collection called as 'blogs' collection.
    This collection has all the blog related data.

4) Before you use the APIs query the use the following command in mongo database by entering/login/accessing the database. i.e.
    => use fact-dr-db-2

## PROJECT ARCHITECTURE
Technology used for the project - Node.js, Express.js, MongoDB

1) This project uses ES6 syntax of javascript.

2) All the routes are in "routes" folder inside "user.js" file. You can navigate to each function from here.

3) All the business logic is written in "services" folder inside the "blogServices.js" file.

5) All the constants/configuration strings are inside the config folder, such as database connection url, database name.


## API DOCUMENTATION
This project has following API endpoint

Headless Blog API
Given below is some sample request for the respective API


		curl --location --request POST 'localhost:4000/users/blog' \
		--header 'Content-Type: application/json' \
		--data-raw '{ "author" : "Raj Mehta", "category" : "World History", "date" : "6/12/2020","blogTitle": "Machu Picchu","tag" : "history-places","blog_body" : "Machu Picchu is open year-round. The easiest way to get to from Cusco to Machu Picchu is to take the train to Aguas Calientes (the town located a few miles from the site). It’s a scenic 3.5-hour trip each way along tracks that run right along the Urubamba River in the Sacred Valley, with dramatic canyon walls on either side. The other way to get from Cusco to Machu Picchu is to walk as part of a multi-day Inca trail tour, which is the far more scenic and rewarding way."
}'
