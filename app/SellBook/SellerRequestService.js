'use strict';
/**
 * Service authenticates user from login page
 * @author Ashish Patel
 */
appServices.factory('SellerRequestService', ['$resource', function($resource) {

    return {
        save: save
    };

    function save(bookDetails){
        return setSave().save({book: bookDetails});
    }

    /*
     * API call to fetch provider data at /providers using GET method
     */
    function setSave(){
        return $resource('/sell', {}, {
            save: {
                method: 'POST',
                params: {

                },
                url: ''
            }
        });
    }
}]);