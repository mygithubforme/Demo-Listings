angular
	.module('ngCribs')
	.factory('cribsFactory',function($http){

		/* get the json data file from the server */
		function getCribs(){
			return $http.get('data/data.json');
		}
		

		return{
			getCribs: getCribs
		}

	});