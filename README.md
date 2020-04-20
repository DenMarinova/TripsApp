
# TripApp
  Vue.js project

# Project description and functionalites
The application simmulates a social network for sharing information about trips and adventures. 
The user is able to register and view the availabe information about all adventures. Also a user is able to create his own trip events. The app's functionality allows the user to edit or remove only his own trips.

# Back-end
For the backend of the application is used Firebase.

# The application features the following functionalites: 
## Application Structure
### Public Part
Wellcome page, Signin and Signup with email and password
Form and input fields validations - Vuelidate
### Private Part
The header has a two different views depending on if user is authenticated.
#### List
View of all created adventures on the list page - axios get request to firebase. 
#### Details
When exploring the trips by click on them user can see the details page - get by id. 
Lazy loaded, child route component for trip details. If user is creator of the trip he/she is able to edit the adventure via form/patch req/ or remove/delete  it completly from the front-end as well from the back-end;
#### Create
Ability to create a trip/adventure via create form and post to the database.
#### Edit
If user is creator of the trip he/she is able to edit the adventure with axios patch request.

## Templates 
 Used data binding (one-way and two-way). No JavaScript expressions inside templates (used computed properties  and methods instead). Used build-in directives (conditional rendering and list rendering). 

 ## Components 
 Passed data to child components with props. Used  dynamic, async components when needed and validated props with prop types.

 ## Forms 
 Implemented input bindings. Implemented front-end validation with Vuelidate.

 ## Routing
Vue Router. Navigate with router links, nested routes, lazy loading, redirects, named routes. Protected private routes with Guards and redirect to signin page. 
 
 ## Project Architecture 
"Service layer" for HTTP requests with Axios in mixins, ordered components into subfolders and in a consistent matter.   

## UI/UX
Bootstrap for good UI and UX

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
