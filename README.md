# First step is to type `npm react-router-dom concurrently`
### But what is concurrently ?
Previously we were opening two different terminals one was of client side(npm run start)  and one was of server side\(nodemon .\index.js).\
Limitations : 1. Switching to the terminals again and again \
              2. Ideally we were deploy our client side and server side differently but during development stage it \is ideal to work on a single terminal.  \
Hence by writing `concurrently` we can run two terminals at once.

## According to concurrently npm documentation
I like task automation with npm but the usual way to run multiple commands concurrently is npm run watch-js & npm run \watch-css. That's fine but it's hard to keep on track of different outputs. Also if one process fails, others still \keep running and you won't even notice the difference.\

Another option would be to just run all commands in separate terminals. I got tired of opening terminals and made \concurrently.

## Features:

• Cross platform (including Windows)\
• Output is easy to follow with prefixes\
• With --kill-others switch, all commands are killed if one dies\
• Spawns commands with spawn-command

# Second Step is to open package.json of react-app and do the following changes
Add the code `"both": "concurrently \"npm run start\" \"nodemon ../inotebook-backend/index.js\""` in scripts object

# Third Step is to open the terminal and write `npm run both`
By this your client side and server side both will run concurrently in the same terminal