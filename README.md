## Getting Started

To get you started you can simply clone the `movie-app` repository and install the dependencies:

### Prerequisites

You need git to clone the `movie-app` repository.

We also use a number of Node.js tools to initialize and test `movie-app`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `movie-app`

Clone the `movie-app` repository using git:

```
https://github.com/niranjansosvns/movie-app.git
cd movie-app
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on
  [end-to-end testing](#e2e-testing) for more info.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`movie-app` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`http://localhost:8000/].


