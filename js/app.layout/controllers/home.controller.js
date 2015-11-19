let HomeController = function(CollectionService) {

  let vm = this;
  vm.images = [];

  getImages();

  function getImages() {
    CollectionService.getImages().then((res) => {
      vm.images = res.data.results;

    });
  }

  
  

};

HomeController.$inject = ['CollectionService'];

export default HomeController;