
# Async Action Creator Testing

 1. Create a store with initial state
 2. Dispatch action creator using store.dispatch()
    - store.dispatch() returns promise
    - check state in .then() callback 
 3. Be careful to see tests fail
 4. If they don't, likely you did not return 
    store.dispatch() promise
    - If you don't return in then the test will complete
         before the request does. Hense, the test will not
         be accurate.


# Moxios
 1. Configures the axios adapter to use moxios
    instead of http
 2. axios sends requests to moxios
 3. Write moxios response to mimic server response