angular.module('caseController', [])

  // injecting the todo service in the controller's function to simplify a lot of the api actions
  // in this specific case, a factory instead of a service was used but that may be changed later
  .controller('caseController', function($http, $state, Cases, $location, $rootScope, $scope, Auth) {

    var vm = this;

    vm.uiRouterState = $state;

    $rootScope.$on('$routeChangeStart', function() {
      vm.loggedIn = Auth.isLoggedIn();
    });



    $scope.home = function() {
      Cases.home();
    };

    vm.formData = {};

    // Getting all of the cases when landing on the page
    // using the service that has been injected to get all of the cases
    Cases.get()
      .success(function(data) {
        vm.cases = data;
      });

      // sending the text to the node api that has been made when submitting a form
      vm.createCase = function() {
        // checking to see if the form has content inside of it
        if (!$.isEmptyObject($scope.formData)) {

          // calling the create funciton from the service if the object is not empty
          // then returns promise object just like it says in the function in the service
          Cases.create(vm.formData)

            // if the creation was successful then it will call the get function to get an updated list of the cases
            .success(function() {
              $location.path('/profile');
            });
        }
      };

      // deleting a todo after checking it
      // passing in the id to the function to look up a specific todo item
      vm.deleteCase = function(id) {
        // calling the service function and passing in the id that was passed into the deleteCase function
        Cases.delete(id)

        // if the todo was successfully deleted then get the updted list of cases
        .success(function(data) {
          vm.cases = data;
        });
      };
    });


    // ALL BELOW THIS LINE IS THE OLD CODE BEFORE INJECTING THE SERVICES
    // =================================================================
    // once the page loads it automatically will get all of the cases from the api path
    // $http.get('/api/cases')
    // .success(function(data) {
    //   $scope.cases = data;
    //   console.log(data);
    // })
    // .error(function(data) {
    //   console.log('Error: ' + data);
    // });

    // sending the text to the node api that has been made when submitting a form
    // $scope.createCase = function() {
    //   $http.post('/api/cases', $scope.formData)
    //   .success(function(data) {
    //     $scope.formData = {}; //clears the form at the end so a new entry can be added automatically
    //     $scope.cases = data;
    //     console.log(data);
    //   })
    //   .error(function(data) {
    //     console.log('Error: ' + data);
    //   });
    // };

    // automatically delete a todo after checking it. this may remove the need to update the todo
    // $scope.deleteCase = function(id) {
    //   $http.delete('/api/cases/' + id)
    //   .success(function(data) {
    //     $scope.cases = data;
    //     console.log(data);
    //   })
    //   .error(function(data) {
    //     console.log('Error: ' + data);
    //   });
    // };
