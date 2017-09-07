angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.code;
    $scope.name;
    $scope.lat;
    $scope.lon;
    $scope.address;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {

      $scope.listings.push({ 'code':$scope.code, 'name': $scope.name, 'coordinates': {'lat':$scope.lat, 'lon':$scope.lon}, 'address': $scope.address });
      $scope.code='';
  $scope.name='';
  $scope.lat='';
  $scope.lon='';
  $scope.address='';
  
    };
    $scope.deleteListing = function(entry) {

      var index = -1;   
    var comArr = eval( $scope.listings );
    for( var i = 0; i < comArr.length; i++ ) {
      if( comArr[i].name === entry.name ) {
        index = i;
      break;
    }
        
    }
    if( index === -1 ) {
      alert( "Something gone wrong" );
    }
    $scope.listings.splice( index, 1 );  



    };
    $scope.showDetails = function(entry) {
       //alert('Task:' + entry.name + entry.address);
   // if you're just using a variable in this function, declare it locally
   entry.lat=$scope.lat;
   entry.lon=$scope.lon;
   $scope.detailedInfo=entry;
      /*$scope.code=entry.code;
      $scope.name-entry.name;
      $scope.lat=entry.lat;
      $scope.lon=entry.lon;
      $scope.address=entry.address;*/
    };
  }
]);