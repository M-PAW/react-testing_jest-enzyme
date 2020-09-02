
# Enzyme 

## Requires 3 packages, none are installed by create-react-app
- Run the following in in terminal from within the project folder:
    - npm i --save-dev enzyme jest-enzyme enzyme-adapter-react-16
- In your test files, remove the imports for testing-library/react
- Add import Enzyme from 'enzyme';
- Add import EnzymeAdapter from 'enzyme-adapter-react-16';
- Configure Enzyme using an instantiation of the adapter
    - Enzyme.configure({ adapter: new EnzymeAdapter() });
- Remove the body of the already existing test.

## Features of Enzyme
1. Uses React-DOM to create a virtual DOM for testing.
2. Shallow Rendering, it only goes one level deep
    - It will render the parent component and put
      placeholders for the children.
    - This makes the testing cleaner and faster.
3. Mount, will render the parent component and
   also the children.
   - Requires all of the code to be in one component,
     eliminating the child component imports.
   - Not a good practice, it's ugly.
4. Props and State, Enzyme can access both.
   - Can check the values.
   - Can manipulate the values.

## An Additional Library to Remove testing properties from production code
  - npm i --save-dev babel-plugin-react-remove-properties

  - Next, change the babel settings in package.json:
    - Change this:
      "babel": {
        "presets": [
          "react-app"
        ]
      }

    - To this:
    "babel": {
      "env": {
        "production": {
          "plugins": [
            ["react-remove-properties", {"properties": ["data-test", "data-foo", /my-suffix-expression$/]}] // All except data-rest can be removed atm.
          ]
        }
      },
      "presets": [
        "react-app"
      ]
    }


# Use npm run build to make a production build

# Test a Production build locally, setup the environment:
  - npm i -g serve
  - next run: serve -s build


## Steps to making the environment and eliminating tests from prod.
1. npm i --save-dev babel-plugin-react-remove-properties
2. npm run eject, may need to make a commit before hand
3. Update the babel config
4. Create prod build
5. Data-test, check if all are removed