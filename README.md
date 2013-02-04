Sandwi.js ![Travis CI Status](https://api.travis-ci.org/grawk/Sandwi.js.png)
=========

Sample project for CI of Node.js Express type project, where unit testing of AMD style modular JS is desired.

Dependencies
============
1. PhantomJS installed (v1.8+)
    - phantomjs bin should be in your $PATH variable
2. grunt globally installed

Install
=======
1. Clone this repo
2. cd Sandwi.js
3. npm install

Running tests
=============
- "grunt test" or "npm test"
- Use file protocol to launch mocha-runner/main.html in your browser

Howzitwork
==========
package.json configures the "test" target to call the command "grunt test". Looking in grunt.js you will see that the "test" target 
will lint the public JS code, as well as call "mocha-phantomjs mocha-runner/test.html". The mocha-phantomjs command will open the 
test.html file in a headless PhantomJS instance. It is recommended to familiarize yourself 
with the JavaScript starting from the "test.html" file.
