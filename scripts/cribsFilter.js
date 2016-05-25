angular
	.module('ngCribs')
	.filter('cribsFilter', function(){

		return function(listings,priceInfo){
			
			var filtered=[];


			/* passes the user input min an max values to min and max variable respectively */
			var min = priceInfo.min
			var max = priceInfo.max


			/* finds the matching price range listing from and inputs the data  */
			angular.forEach(listings, function(listing){

				if(listing.price >= min && listing.price <= max)
				{
					filtered.push(listing);
				}
			});
			
			return filtered;
		}



	});