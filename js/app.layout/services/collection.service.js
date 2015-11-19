let CollectionService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/image';

  this.getImages = getImages;

  function Image(imgObj) {
    this.url = imgObj.url;
  }
  
  function getImages(imgObj) {
    return $http.get(url, PARSE.CONFIG);
  }
  
  

};

CollectionService.$inject = ['$http', 'PARSE'];

export default CollectionService;