let imgKool = function(ImageService) {

  return{
    restrict: 'AE',
    scope:{
      image: '='
    },
    template:`
      <div class="mop">
        <img ng-src="{{image.url}}" ng-click = "count = count + 1" ng-init="count=0" >
        <div class="rip"  ng-class="{ 'hidden': !showContent }">
        <span class="glyphicon glyphicon-thumbs-up"><i class="fa fa-star-o"></i>
        <p class="star">{{count}} Likes</p></span>
      </div>
    `
  };
};
imgKool.$inject = ['ImageService'];

export default imgKool;