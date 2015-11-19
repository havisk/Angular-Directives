let ImageAddController = function(ImageService) {

  let vm = this;

  vm.imageAdd = imageAdd;

  function imageAdd(imgObj) {
    ImageService.imageAdd(imgObj).then( (res) =>{
  
    });
  }
  
  

};

ImageAddController.$inject = ['ImageService'];

export default ImageAddController;