# todoApp

## Arquitecture
todoMain is the entry-point of the application, it works as a orchestator for the
initial component composition, managing the state updates and the persistence.
State is passed to child components and returned by each one in their updated state.
This choice lets the action responsibility to the component that is calling it, leaving
the main agnostic from the implementation details of any action.

Theory, in order to decouple storage method from actions, and make them pluggable (to use redux for example)
 in components, they could be all bundled in a service class called actions. Actions class should have a method for every action needed by components.
 

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
