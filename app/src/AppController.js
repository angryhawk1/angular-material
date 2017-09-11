/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(DeviceDataService, $mdSidenav) {
  var self = this;

  self.selected     = null;
  self.devices        = [ ];
  self.selectUser   = selectDevice;
  self.toggleList   = toggleDevicesList;

  // Load all registered users

    DeviceDataService
        .loadAllDevices()
        .then( function( devices ) {
          self.devices    = [].concat(devices);
          self.selected = devices[0];
        });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleDevicesList() {
    $mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectDevice ( device ) {
    self.selected = angular.isNumber(device) ? $scope.devices[device] : device;
  }
}

export default [ 'DeviceDataService', '$mdSidenav', AppController ];
