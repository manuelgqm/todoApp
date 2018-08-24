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

## Developement strategy
Small MVC pointing to complete the maximum architectural requirements and minimum features to make the app usable. This means creating/deleting todos, which allows poor man editing (delete unwanted and create new).
The complete-mark can be done at this stage by simply removing the item of the list.

## Build Log
### 22 Ago:
todoMain is the entry-point of the application, it works as a orchestator for the
initial component composition, managing the child component callbacks and storage.
State is passed to child components and returned by each one in their updated state.
This choice lets the action responsibility to the component that is calling it, leaving
the main agnostic from the implementation details of any action.
### 23 Ago:
- Changed my mind on yesterday's approach because of having copies of the state on the child elements not worths the cost of parent child details agnosticism, specially for dynamic creation components like Todo.
- Discovered a way (arrow function call) to avoid binding props in children nodes to have access to this on parent node for handle callbacks.
- Learned how to isolate tests using mocks
### 24 Ago:
- Setted up swagger simple API for todos: http://virtserver.swaggerhub.com/manuelgqm5/todoApp/1.0.0/todos?query=all
- Added localStorage and API load with cache
- Created Store class
- Fixing render tests missing mocks for localStorage and fetch
- Added build_localStorage and build_remoteStorage

## TODOS
- Refactor: todoMain#handleUpdate to handle updated State

## Further steps and comments
- In order to decouple storage method from handlers, and make them pluggable (to use redux for example)
in components, they could be all bundled in a service class called actions. Actions class should have a method for every action needed by components.
- E2e testing. Don't know how to do it with jest.
- Storage acts to entire app state, it works for this but in a larger app, it should be considered to
only store a single todo on each action.
- Passing 'this' to Store class works but smells, I can imagine there is a better way to deal with this.
- Complete coverage of tests.
- Modify Swagger API to return whole state of app.
- Complete app features.
- Use redux for state (damn didn't have enough time to play with it!)
- ....

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080 (remote storage allowed)
npm run dev

# build for production with minification
npm run build

# build for production with minification with local storage
npm run build_localStorage

# build for production with minification with remote storage
npm run build_remoteStorage

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
