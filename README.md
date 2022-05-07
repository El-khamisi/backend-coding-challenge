# Backend-coding-challenge

## Description
A website ( based on node.js and express framework) fetching trendy repositories created in the last 30 days from now, then storing the name and the language of code used inside the repository and displaying all of this to the user in a simple GUI interface.
there is no fancy Front End according to that it is a backend challenge, but I used plain `HTML5`, some `CSS`, and `VanillaJS` for simple logic needed, all the specifics were created just as the challenge has defined them.


## Installing

* Download the dependencies with `npm` package manager
```
$ npm install
```
## Features
* Bring trendy repositories that were created in the last 30 days from now
* Put the fetched repositories in groups by the programming language they have been written in

## Executing program
* The website worked on `http://localhost:PORT` OR by `nodemon` int developer with monitoring debug terminal

```
$ npm start
```
## Environment Variables
```
PORT
```
## Testing
This project contains unit tests. Follow these steps to run the tests.
```
$ nodemon index.js
```
## Directory Structure

```
.
|_node_modules/
|
|_controllers/          #logic and controllers tier
|
|_routes/               #endpoints API
|
|_testing/              #unit-testing labs in jest
|
|_view/                 #static views served by Express
|
|_.env
|_.gitignore
|_index.js
|_package.json
|_README.md
|_LICENSE.md
```

## Help

Any advise for common problems or issues.

Send an E-mail [mohammd.alkhamisi@gmail.com]()

## License

This project is licensed under the [Apache License 2.0](https://github.com/El-khamisi/backend-coding-challenge/blob/main/LICENSE.md) License - see the LICENSE.md file for details