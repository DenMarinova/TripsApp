
# TripApp
  Vue.js project

# Project description and functionalites
The application simmulates a social network for sharing information about trips and adventures. 
The user is able to register and view the availabe information about all adventures. Also a user is able to create his own trip events. The app's functionality allows the user to edit or remove only his own trips.

# Back-end
For the backend of the application is used Firebase.

# The application features the following functionalites: 
• Signin and Signup with email and password

• Form and input fields validations - Vuelidate
• The header has a two different views depending on if user is authenticated
• Aplication use all of the CRUD operations, implementet with Axios.
• View of all created adventures on the list page - get request to firebase 
• Ability to create a trip/adventure via create form - post to the base
• When exploring the trips by click on them user can see the details page - get by id
• Details - if the user is creator of the trip he/she is able to edit the adventure via form/patch req/ or remove/delete  it completly from the frontend as well from the backend;
• A simple error handling of the REST API services 
• Protected routing i.e if a unauthorized user tries to access protected route he will be redirected to the signin page 
• Lazy loading
• HTML5 features like <video>  
• LocalStorage 
• Bootstrap for good UI and UX
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
