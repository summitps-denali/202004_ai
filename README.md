# 202004_ai
Starter bot for students

Setup

  - Open terminal
Change directory to folder where this README.md file
    ```
    $ cd 202004_ai
    ```

  - Install dependencies (do only once)
    ```
    $ npm install
    ```

  - Edit test.js, change to test.js file test setting
    From
      `bot.isTest = false;`
    To
      `bot.isTest = true;`
    Save

Interesting Files

  - stable.js
    Never edit this, it is a known working bot file, though
    it does not do anything interesting.

  - test.js
    This is a copy of stable.js.  Typically students will
    make edits in this file, or make copies with related names
    (ex: test2.js, cooltrick.js, debug.js, ...)
    To run this bot, open a terminal
      `$ node test.js`
      use Ctrl C to stop

  - server.js
    To test a bot file, need to have a server that will
    allow bot to connect to and run.  This means in to different
    terminal windows - server will be run in one terminal,
    bot will be run in a second window.
    To run this in a _seperate_ terminial.  
      `$ node server.js`
      use Ctrl C to stop

Stay tuned for additional information.

Related
  - setup.txt
  - https://github.com/smtcs/studentbot
