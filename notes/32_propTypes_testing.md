
# Component file **
prop-types allows you to test the data types of specified props.

## Step 1: install prop-types
    - npm i --save prop-types

## Step 2: import prop-types using either ES5 or ES6 syntax
    - import PropTypes from 'prop-types'; // ES6
    - var PropTypes = require('prop-types') // ES5 with npm

## Step 3: add your prop-type evals below your component
    - componentName.propTypes = { 
        propName1: propTypes.type1,
        propName2: propType.type2,
     }

# Testing file **
check-prop-types allows you to return an error instead of generating a warning when prop-types don't match. Making it easier to diagnose.

## Step 1: install check-prop-types
    - npm i --save-dev check-prop-types
