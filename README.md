# todoApp

## Specs
The concept is simple, I want to manage my personal TODO list of tasks, with features such as add/delete/change/reorder/mark as done/not done.

As a storage backend we want initially to use browser local storage, but our imaginary plan is to make this app into a cloud service, so the storage backend
should be pluggable so it can use a REST API instead of local storage. This setting can be configured at compile time.

We don't want you to create the REST API backend, but do we want to see that you define the rest api using some standard such as Swagger or Raml and then also
that you can run a "mock backend" using some tool which translates the api specification into a runnable mock service, which then of course by nature is read-only only containing the
example data provided in the api spec. So when the app is run against the REST API we don't expect writing data to work, only reading data.

It must be a React app, other techniques used could be some Redux for state, Swagger/Raml for API specifications.
Tests are required.

We won't be judging on how the app design looks, but it needs to be tidy and structured with some styling. We will mostly be looking at the code, architecture, tooling and tech decisions have been made.

## Build Log
### 22 Ago:
todoMain is the entry-point of the application, it works as a orchestator for the
initial component composition, managing the state updates and the persistence.
State is passed to child components and returned by each one in their updated state.
This choice lets the action responsibility to the component that is calling it, leaving
the main agnostic from the implementation details of any action.
### 23 Ago:
- Changed my mind on yesterday's approach because of having copies of the state on the child elements not worths the cost of parent child details agnosticism, specially for dynamic creation components like Todo.
- Discovered a way (arrow function call) to avoid binding props in children nodes to have access to this on parent node for handle callbacks.
- Learned how to isolate tests using mocks
### 24 Ago:
- Setting up swagger simple API for todos: http://virtserver.swaggerhub.com/manuelgqm5/todoApp/1.0.0/todos?query=all 

## Further steps
- In order to decouple storage method from actions, and make them pluggable (to use redux for example)
in components, they could be all bundled in a service class called actions. Actions class should have a method for every action needed by components.
- E2e testing. I don't know how to do it with jest.

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
