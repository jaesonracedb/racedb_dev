To run project, first run Mysql source code.

Go to the database branch, enter the database folder. Then apply the following code inside mysql. (make sure mysql was run in the database folder)
source sources;

This will add the racedb database to mysql.

Next go back to the master branch and change the database config by entering the folder db_config then change the username and password according to your mysql credentials.

Next, on the root folder of the Master run the code 
node index

Finally, open another terminal and enter the client folder and run the code
sudo npm start

