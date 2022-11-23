# miniature-disco: Contact Form

## Demo
Demo is available [here](https://lethyb.github.io/miniature-disco/public/)

## Description
React, Typescript and bootstrap are used for this demo.
I prioritized:
- The development of the form itself
- The styling for having something to show, but still quite simple with minimal responsiveness.
- I chose the native HTML5 form validation for going straight to the point.
- A component showing the results of each submission. That way the user can get a direct feedback of it.

## How to
```shell
# create the docker container
make create

# start the container and watch for any code updates
make start

# build the application into dist/bundle.js
make build

# perform updates according to the package.json file
make upy

# run the tests
make test
```

## Testing
I chose to add a minimal amount of tests.
That way everything is already settled and configured for adding more tests. 

## What hasn't be done
### Testing
- Colour component
- Animals component
- TigerType component, especially when the 'tiger' option is selected
### Documentation
No documentation has been written so far

## Going further
### The form
- Add a request to an API, with Axios for example. 
- Handle the request with the validation of the data (email, password, etc)
- Maybe encrypt the password with a secret only know by the backend
