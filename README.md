# First step is to type `npm react-router-dom concurrently`
### But what is concurrently ?
Previously we were opening two different terminals one was of client side(npm run start)  and one was of server side\(nodemon .\index.js).\
Limitations : 1. Switching to the terminals again and again \
              2. Ideally we were deploy our client side and server side differently but during development stage it \is ideal to work on a single terminal.  \
Hence by writing `concurrently` we can run two terminals at once.

## According to concurrently npm documentation
I like task automation with npm but the usual way to run multiple commands concurrently is npm run watch-js & npm run watch-css. That's fine but it's hard to keep on track of different outputs. Also if one process fails, others still keep running and you won't even notice the difference.

Another option would be to just run all commands in separate terminals. I got tired of opening terminals and made concurrently.

## Features:

• Cross platform (including Windows)\
• Output is easy to follow with prefixes\
• With --kill-others switch, all commands are killed if one dies\
• Spawns commands with spawn-command

# Second Step is to open package.json of react-app and do the following changes
Add the code `"both": "concurrently \"npm run start\" \"nodemon ../inotebook-backend/index.js\""` in scripts object

# Third Step is to open the terminal and write `npm run both`
By this your client side and server side both will run concurrently in the same terminal

# Fourth Step is to install react-router-dom
Type `npm i react-router-dom` in the terminal

---

# What is Context API?
Suppose a case where you have to pass a state as a prop from app.js to componenet_17.js.
This can be done by prop drilling. But this is very painful when it comes to code it or when it comes to debugging.

Hence, we use the context api. That is we make a seperate file which contains all the states.\
Now if any componenet(say component_16.js) wants to access any state then it can ask from the context API and it will make that state accessible to it and also any other componenet can simoultaneously use it.\
That is with the help of context API any component can access all the states available.

Below is the reference for this.

public/context_api.png

## Syntax to create a context :

The `context` basically will keep all the states related to the notes.

```
import { createContext } from "react";

const noteContext = createContext();

export default noteContext;
```

Meaning of the above code is ..I am asking react to provide me the Context API so that I can use it.

### Boilerplate for the moment when you use Context API

Yeh jo context hai, yeh jo NoteState hai , yeh notes ki saari states ko provide karegi

```
import React from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const state={
        "name": "aman",
        "branch": "se"
    }
    return(
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
```

Meaning of the above code is ..Whatever thing you want to provide from this arrow function, provide it inside value={}.
Whenver you wrap anything in this context(`<NoteContext.provider value={state}>`),all the children will come under that context.


## Have installed cors in express package in `backend` not in frontend because you can't call your api's from your web browser.