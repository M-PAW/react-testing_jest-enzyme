
# Enzyme

## Requires 3 packages, none are installed by create-react-app
- npm i --save-dev enzyme jest-enzyme enzyme-adapter-react-16
- In your test files, remove the imports for testing-library/react
- Add import Enzyme from 'enzyme';
- Add import EnzymeAdapter from 'enzyme-adapter-react-16';

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