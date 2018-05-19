'use strict';
/**
 * Service to fetch NJIT students/professor sellings items & Ebay
 * @author Ashish Patel
 */
appServices.factory('ShowsService', ['$resource', function($resource) {

    return {
        search: search,
        searchSources: searchSources
    };

    function search(queryObject){
        return setSearch(queryObject).search();
    }

    function searchSources(queryObject){
        return setSources(queryObject).search();
    }

    function setSearch(queryObject){
        return $resource('/search?obj='+JSON.stringify(queryObject), {}, {
            search: {
                method: 'GET',
                params: {

                },
                url: '',
                isArray: true
            }
        });
    }

    function setSources(queryObject){
        return $resource('/sources?obj='+JSON.stringify(queryObject), {}, {
            search: {
                method: 'GET',
                params: {

                },
                url: '',
                isArray: true
            }
        });
    }
}]);