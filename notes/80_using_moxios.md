
# Plan of action | For implementing Moxios

 1. getSecretWork action creator
    - Use acios to get a random word from the server
        - but to localize testing we will use moxios.

 2. Shape of Action
    - { type: SET_SECRET_WORD, payload: secret word }

 3. create a secretWordReducer
    - Sets secretWord upon SET_SECRET_WORD action type

 4. Already set up shell for guessWord tests


# Random Word Server

 1. You can either use the server or use moxios, 
    all thats needed for the testing is moxios.

## Ideally we want to isolate the tests, hence Moxios

 1. to make sure that it's a point in our app that's failing
    and not due to an external factor such as an axios call.

 2. Moxios allows us to test our app without an external server,
    or a connection to any type of external data dependencies.

# ------------------

# Using Moxios
 1. Test installs Moxios
    - axios will now send requests to moxios instead of http
    - Test specifies moxios response
 
 2. Test calls action creator

 3. Axios creator calls axios
    - axios uses moxios instead of http for requies

 4. Action creator receives moxios response from axios

### Moxios Syntax

#### Install Moxios - npm i --save-dev moxios

 1. Test calls moxios.install()
    - which sets moxios as the axios adapter
    - router any axios calls to moxios instead of http

 2. Can pass axios instance to moxios.install() as an argument
    - Use your configured settings
    - Leave param blank for default setting, auto pass to moxios

 3. During the test you will call moxios.wait()
    - This takes a call-back, and responds with a call-back 
        in the form you specified as the parameter.
    
    - Sending a response
        - In moxios.wait() call-back
            - To access the most recent request and specify the
                response data:
            [
                moxios.await(() => {
                    const request = moxios.request.mostRecent();
                    request.respondWith({
                        status: 200
                        response: secretWord
                    });
                });
            ]
            

## Testing Async Action Creator

- Creat store using storeFactory()

- Async actions: store.dispatch() returns promise

- Put tests in .then() callback
    - tests will run after dispatch completes

- moxios.wait() is also asynchronous
- More important than ever ti see tests fail
- Very easy for tests to complete before async

## Tests can pass even though assertion fails, cases below.
 1. Test function starts async call
    - Exits before promise resolves

 2. Assertion runs after promise resolves
    - After test already passed

### It's critical to see your tests fail before they are
### made to be passing.

# Consider learning Redux-Mock-Store