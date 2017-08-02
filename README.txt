//clone the repository

git clone https://github.com/Sanjayaprasad/sisrv.git

//change directory 

cd sisrv

//install depencies 

npm install express --save

npm install mongojs --save

npm install mongoose --save

npm install body-parser --save

npm install angular --save

//To start mongo server

mongod -dbpath <YOUR PATH TO PROJECT>/sisrv/db/data

//To bring the application up

#inside your project folder

node server.js