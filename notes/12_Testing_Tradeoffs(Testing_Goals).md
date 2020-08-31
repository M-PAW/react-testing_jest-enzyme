
# Goals for Testing

1. Goal 1: Easy maintenance of tests
    1. Test Behavior, not implementation
        - Don't need to re-write tests after a refactor
        - Test behavior, what it should do, instead of implementation
    2. If implementation changes, tests remain the same
        - Testing implementation is brittle.
        (easily broken when app still works)
    3. Feature to Test (ex: Incremental Counter)
        - Behaviors to test for:
            - Set initial state
            - Simulate button click
            - Check to see if displayed count incremented by one
                - Check for value, not a function name as it can break things.
                ( Behavior, not implementation )
2. Goal 2: Easy Diagnosis of Failing Tests
    1. (ex) Shopping Cart for a custom t-shirt, features:
        - Select t-shirt style
        - Select sizes
        - Select color
        - Select number of shirts to order
        - Type in text to put on shirt
        - Add to cart
            - It's difficult to test if the cart has the correct contents,
                it has too many factors and is impossible to easily 
                diagnose.
            - Ideally you want more efficiency when doing diagnostics.

## Make it easier to diagnose
    - After each user action:
        - Test the expected internal state change.
        - Test that a particular function was called.
        - This is testing implementation.
              ( Sometimes you have no choice, and must balance. )
    - Balance / Tradeoffs
    - Granular (unit) testing leads to:
         - Ease of diagnosis
         - Brittle Tests
    - Broader (integration) testing leads to:
        - More robust tests
         - More difficult to find out the cause of a failure