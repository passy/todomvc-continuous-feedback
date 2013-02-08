## HTML5/Javascript WebApp build best practice 
__*a practitioners' guide*__

An example using:

1. AngularJS
1. Yeoman.io
1. Travis-CI [![Build Status](https://travis-ci.org/cityindex/todomvc-continuous-feedback.png)](https://travis-ci.org/cityindex/todomvc-continuous-feedback)
1. BrowserStack

### Getting started

#### Local development pre-requisits

1. `$ sudo npm install yeoman -g `
1. `$ sudo npm install testacular -g `

##### Run unit tests from a terminal

1. `$ cd /path/to/todomvc-continuous-feedback`
1. `todomvc-continuous-feedback $ yeoman test`

##### Launching a dev server from a terminal

1. `$ cd /path/to/todomvc-continuous-feedback`
1. `todomvc-continuous-feedback $ yeoman server`

##### Launching a dev server to execute tests manually in a browser

1. `$ cd /path/to/todomvc-continuous-feedback`
1. `todomvc-continuous-feedback $ yeoman server:test`

##### Run end to end tests from a terminal
_NB You must already be running a dev server in a different terminal_

1. `$ cd /path/to/todomvc-continuous-feedback`
1. `todomvc-continuous-feedback $ yeoman test:end2end`
