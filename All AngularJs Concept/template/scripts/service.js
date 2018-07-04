var routerApp = angular.module("routeApp",["ui.bootstrap"])

routerApp.factory("States", function()
	{
	  var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

	  return states;
	});

routerApp.controller("homtCtrl",function($scope,$http,States)
	{
		$scope.states = States;
		$scope.ifscDetails={};
		$scope.ifscBank= function(ifsc)
			{
				var baseUrl="https://ifsc.razorpay.com/";
				$http.get(baseUrl+ifsc)
					.then(function(result)
						  {
							$scope.ifscDetails=result.data;
						  })
					.catch(function(result)
						   {
						window.alert(result.data);
							});
			}
	});

