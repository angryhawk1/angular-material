// Load the custom app ES6 modules

import DeviceDataService from 'src/users/services/DeviceDataService';

import UsersList from 'src/users/components/list/UsersList';
import UserDetails from 'src/users/components/details/UserDetails';

// Define the Angular 'users' module

export default angular
  .module("users", ['ngMaterial'])

  .component(UsersList.name, UsersList.config)
  .component(UserDetails.name, UserDetails.config)

  .service("DeviceDataService", DeviceDataService);
