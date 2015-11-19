let ImageService = function($http, PARSE, $state) {

  let url = PARSE.URL + 'classes/image';

  
  this.imageAdd = imageAdd;

  function Image(imgObj) {
    this.url = imgObj.url;
  }
  
  function imageAdd(imgObj){
    let i = new Image(imgObj);
    return $http.post(url, i, PARSE.CONFIG).then((res) => {
      $state.go('root.home');
    });
  }


};

ImageService.$inject = ['$http', 'PARSE', '$state'];

export default ImageService;