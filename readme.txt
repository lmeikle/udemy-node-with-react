My Notes:

To run it:
  node index.js
  (or to run nodemon: npm run dev)
  http://localhost:5000

For any Heroku app:
  dynamic port binding
  specify node and npm versions in package.JSON
  specify start script
  create .gitignore

  install heroku cli
  https://devcenter.heroku.com/articles/heroku-cli

  install it
  then in the command line: heroku login
  then: heroku create

  https://frozen-eyrie-46916.herokuapp.com/
  https://git.heroku.com/frozen-eyrie-46916.git

  git remote add heroku https://git.heroku.com/frozen-eyrie-46916.git
  fatal: remote heroku already exists. - THIS IS OK DON'T WORRY ABOUT IT

  git push heroku master

  this will invoke heroku to do its magic :)

  then either hit the url or run: heroku open
  if there are any issues can try: heroku logs


  For any further changes:
  git add .
  git commit -m "blah"
  git push heroku master
