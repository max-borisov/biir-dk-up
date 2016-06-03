# BIIR website generator

### Short description

## Whats is under the hood
* [Node.js](https://nodejs.org/en/) - to run build tasks. 
* [Jade](http://jade-lang.com/) - template engine
* [Sass](http://sass-lang.com/) - advanced css

## Installation
* install [Node.js](https://nodejs.org/en/). The version - 4. Then run ```node -v``` to ensure you have a proper version installed
* Install [sass](http://sass-lang.com/install). It requires [Ruby](http://rubyinstaller.org/) to be installed first. Run ```ruby -v``` to ensure you have a ruby installed version > 2.0. Then run ```gem install sass``` and ```sass -v``` to check the version
* go to the project root(where the **package.json** file is located) and run ```npm install``` to install required node packages. In our case we have only **Jade** as a dependancy

## Project structure
* **node_modules** - has installed for the project **Node.js** modules
* **public** - complete website ready to deploy. Set of html/css files. All static files, like images, pdf should be put here. **No manual editing for html/css files**
* **src/templates** - jade templates(build into html files). All html changes should be done here - edit text, add new pages, etc.
* **src/sass** - sass files(build into css files). Css styles for all pages

## Usecases

### You want to add a new page
* create a new template under the **src/templates**
* do not forget to add a ```- var page = 'new_page_title'``` to the body. It is needed to highlife the active pages. Have a look at **templates/src/job.jade** for example
* add a link to a new page to **src/templates/includes/header.jade** to add a new page to the top menu
* create a new sass set under **src/sass/modules** and include it in **src/sass/modules/_index.scss** file
* to build public html, from the command line/prompt run ```npm run build-jade```
* to build public css, from the command line/prompt run ```npm run build-scss```
* new html file will appear under **public/** directory and **pubic/css/style.css** will be updated
