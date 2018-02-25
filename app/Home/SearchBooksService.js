'use strict';
/**
 * Service to fetch NJIT students/professor sellings items & Ebay
 * @author Ashish Patel
 */
appServices.factory('SearchBooksService', ['$resource', function($resource) {

    return {
        search: search
    };

    function search(query){
        return setSearch(query).search();
    }

    /*
     * API call to fetch provider data at /providers using GET method
     */
    function setSearch(queryParam){
        return $resource('/search?search='+queryParam, {}, {
            search: {
                method: 'GET',
                params: {

                },
                url: ''
            }
        });
    }
}]);