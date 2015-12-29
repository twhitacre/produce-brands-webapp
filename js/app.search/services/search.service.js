let SearchService = function($http, APP) {

  this.search     = search;
  this.getListing = getListing;
  this.getSingle  = getSingle;

  // Standard Query
  function search (q) {
    let url = APP.URL + 'search?q=' + q;
    return $http.get(url, APP.CONFIG);
  }

  // Get Listing Results
  function getListing (type, page) {
    let p = page ? page : 1;
    let url = APP.URL + type + '?page=' + p;
    return $http.get(url, APP.CONFIG);
  }

  // Get Single Result
  function getSingle (type, id) {
    type = pluralize(type);
    let url = APP.URL + type + '/' + id;
    return $http.get(url, APP.CONFIG);
  }

  // Pluralize type for Rails endpoint
  function pluralize (type) {
    switch (type) {
      case 'brand':
        type = 'brands';
      break;
      case 'producer':
        type = 'producers';
      break;
      case 'commodity':
        type = 'commodities';
      break;
    }
    return type;
  }



};
SearchService.$inject = ['$http', 'APP'];
export default SearchService;