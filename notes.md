# server testing

## components of an api

function name(args) => return something;

- routes/endpoints: url(data) => return response;
- business logic (validation/data conversion/operations).
- data access: talk to the persistent data store.

set the test environment to run on 'node' instead of a browser

cross-env: package used to abstract away OS differences setting env variables

to run migration on test database use: npx knex migrate:latest --env=testing

test for:

- http status code
- format of the data (json)
- shape of the response body
