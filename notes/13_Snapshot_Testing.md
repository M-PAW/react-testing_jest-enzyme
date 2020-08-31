
# Snapshot Testing
- The ability to freeze a set of code or output as a
  given set of time.
- The test will always compare any future state to that of
  the snapshot, and will fail if there have been any changes.

## Snapshots are not used in this course
- It doesn't allow for TDD.
- It's too brittle
- Difficult to diagnose:
    - Too easy to ignore failure and update.
- No test intent
- If used, it's alongside traditional tests
    - You'll decide what's right for you.