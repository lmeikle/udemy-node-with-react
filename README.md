This project was created following a Udemy course on Node with React Full Stack Web Development.

https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/overview

To run it:

node index.js

(or to run nodemon: npm run dev)

http://localhost:5000

Heroku App Notes:

dynamic port binding<br />
specify node and npm versions in package.JSON<br />
specify start script<br />
create .gitignore<br />
<br />
install heroku cli<br />
https://devcenter.heroku.com/articles/heroku-cli<br />
<br />
install it<br />
then in the command line: heroku login<br />
then: heroku create<br />
<br />
https://frozen-eyrie-46916.herokuapp.com/<br />
https://git.heroku.com/frozen-eyrie-46916.git<br />
<br />
git remote add heroku https://git.heroku.com/frozen-eyrie-46916.git<br />
fatal: remote heroku already exists. - THIS IS OK DON'T WORRY ABOUT IT<br />
<br />
git push heroku master<br />
<br />
this will invoke heroku to do its magic :)<br />
<br />
then either hit the url or run: heroku open<br />
if there are any issues can try: heroku logs<br />
<br />
For any further changes:<br />
git add .<br />
git commit -m "blah"<br />
git push heroku master<br />
